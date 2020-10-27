<template>
    <div class="customer">
        
        <div id="fb-root"></div>
        <!-- <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0&appId=1380709488802204&autoLogAppEvents=1" nonce="6lvOLz9q"></script> -->

        <div class="body-container">
            <div class="sign-up-container">

                <div class="sign-up-logo-container">
                    <div class="sign-up-logo">
                        <img src="~/assets/customer/image/cudua-logo-icon.svg">
                    </div>

                    <n-link to="/" class="btn btn-primary">Home</n-link>
                </div>
                
                <div class="sign-up-content">
                        <div class="instruction-area">
                            <div class="sign-up-banner">
                                <img src="~/assets/customer/image/banner-image.jpg" alt="">
                            </div>

                        </div>

                        <div class="sign-up-form-layer">
                            <div class="sign-up-form-wrapper">
                                <div class="create-business-signup">
                                    <div class="intent-bg-text">Sign into your account</div>
                                    
                                    <!-- <div class="fb-login-button" data-size="medium" data-button-type="login_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="true" data-width=""></div> -->
                                    <form>
                                        <div class="form-control">
                                            <button class="facebook-btn btn" type="button">
                                                <img src="~/assets/global-asset/image/facebookLogo.svg" alt="">
                                                Sign in with facebook
                                            </button>
                                        </div>

                                        <div class="sign-in-option mg-bottom-32">or sign in with</div>
                                        <div class="form-control">
                                            <input type="email" name="email" class="input-form" v-model="email" placeholder="Email address">
                                        </div>
                                        <div class="form-control">
                                            <input type="password" name="password" class="input-form" v-model="password" placeholder="Password" autocomplete="password">
                                        </div>
                                        <div class="form-control ">
                                            <button class="btn btn-primary btn-block" type="button" @click="validateUser" :disabled="isDisabled">
                                                Sign in
                                                <div class="loader-action"><span class="loader"></span></div>
                                            </button>
                                            <div class="fg-password"><n-link to="/auth/forgot-password">Forgot Password?</n-link></div>
                                        </div>
                                    </form>
                                    <div class="form-control ">
                                        <n-link to="/auth/sign-up" class="btn btn-white btn-block" type="button" data-trigger="modal" data-target="createAccountModal">Create your account</n-link>
                                    </div>
                    
                                </div>
                            </div>
                        </div>
                </div>
                <!-- bottom links -->
                <div class="sign-up-bottom-links">
                    <a href="#">Contact support</a>
                    <a href="#">Privacy | Terms</a>
                </div>

            </div>
        </div>
        <NOTIFICATION></NOTIFICATION>
        <Nuxt />
        <INITCOMPONENT></INITCOMPONENT>
        <Nuxt />
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import NOTIFICATION from '~/components/notification/notification.vue'; 
import INITCOMPONENT from '~/components/init.component.vue';
import { LOGIN_USER } from '~/graphql/customer';

export default {
    name: "LOGIN",
    components: {NOTIFICATION, INITCOMPONENT},
    data: function() {
		return {
            anonymousId: "",
            email: "",
            password: "",
            isDisabled: false,
            failedLoginCount: 0,
            timeOutHolder: null
		}
    },
    computed: {
		...mapGetters({
			'GetAnonymousId': 'customer/GetAnonymousId',
        }),
        ...mapMutations({
            'setAnonymousId': 'customer/setAnonymousId'
        })
    },        
    methods: {

        validateUser: function () {
            
            if (this.email.length < 2 || this.password.length < 2) {
                this.$showToast('Enter your email and password credentials to sign in', 'error')
                return
            } 
            // add disable to button
            this.isDisabled = true
            this.loginUser()
        },
        loginUser: async function () {
            
            try {

                let login = await this.$apollo.query({
                    query: LOGIN_USER,
                    variables: {
                        email: this.email,
                        password: this.password,
                        anonymousId: this.anonymousId
                    }
                })

                let result = login.data.userLogin;

                if (result.success == false) {
                    this.isDisabled = false
                    this.failedLoginCount += 1
                    this.$initiateNotification('error', 'Failed login', result.message);
                    
                    if (this.failedLoginCount == 3) {
                        return this.$router.push('/auth/forgot-password')
                    }
                    return
                }

                this.isDisabled = false

                // change login status
                this.$store.dispatch('customer/changeLoginStatus', true);

                // set customer data
                this.$store.dispatch('customer/setCustomerData', {
                    fullname: result.userDetails.fullname != null ? result.userDetails.fullname : "",
                    email: result.userDetails.email != null ? result.userDetails.email : "",
                    userId: result.userDetails.userId != null ? result.userDetails.userId : "",
                    phone: result.userDetails.phone != null ? result.userDetails.phone : "",
                    reviewScore: result.userDetails.review != null ? result.userDetails.review : "",
                    displayPicture: result.userDetails.displayPicture != null ? result.userDetails.displayPicture: "",
                    userToken: result.accessToken,
                    emailNotification: result.userDetails.email_notification
                });

                // update business data
                if (result.businessDetails != null) {
                    this.setBusinessData(result)
                }

                // delete anonymous id
                localStorage.removeItem('CUDUA_ANONYMOUS_ID');
                this.$store.dispatch('customer/setAnonymousId', '');

                this.$initiateNotification('success', 'Sign in successful', `${result.message}`);

                clearTimeout(this.timeOutHolder)

                this.timeOutHolder = setTimeout(() => {
                    // window.location.assign('/')
                    this.$router.push('/')
                }, 1000);

            } catch (error) {
                this.isDisabled = false
                this.$initiateNotification('error', 'Failed request', "A network error occurred");
            }

        },
        setBusinessData: function(result) {
                // set business data
                this.$store.dispatch('business/setBusinessData', {
                    businessId: result.businessDetails.id != null ? result.businessDetails.id : "",
                    businessName: result.businessDetails.businessname != null ? result.businessDetails.businessname : "",
                    username: result.businessDetails.username != null ? result.businessDetails.username : "",
                    logo: result.businessDetails.logo != null ? result.businessDetails.logo : "",
                    coverPhoto: result.businessDetails.coverPhoto != null ? result.businessDetails.coverPhoto : "",
                    description: result.businessDetails.description != null ? result.businessDetails.description : "",
                    reviewScore: result.businessDetails.review != null ? result.businessDetails.review : 0
                });

                // set business contact
                if (result.businessDetails.contact != null) {
                    this.$store.dispatch('business/setBusinessContact', {
                        email: result.businessDetails.contact.email != null ?  result.businessDetails.contact.email : "",
                        phone:  result.businessDetails.contact.phone != null ?  result.businessDetails.contact.phone : [],
                        whatsapp: {
                            phone: result.businessDetails.contact.whatsapp.number,
                            status: result.businessDetails.contact.whatsapp.status,
                        }
                    });
                }


                if (result.businessDetails.address != null) {
                    // set business address
                    this.$store.dispatch('business/setBusinessAddress', {
                        number: result.businessDetails.address.number != null ? result.businessDetails.address.number : "",
                        busStop: result.businessDetails.address.busStop != null ? result.businessDetails.address.busStop : "",
                        street: result.businessDetails.address.street != null ? result.businessDetails.address.street : "",
                        community: result.businessDetails.address.community != null ? result.businessDetails.address.community : "",
                        lga: result.businessDetails.address.lga != null ? result.businessDetails.address.lga : "",
                        state: result.businessDetails.address.state != null ? result.businessDetails.address.state : "",
                        country: result.businessDetails.address.country != null ? result.businessDetails.address.country: ""
                    });
                }

                if (result.businessDetails.subscription != null) {
                    let sub = result.businessDetails.subscription;
                    this.$store.dispatch('business/setSubscription', {
                        id: sub.subscriptionId,
                        start: sub.subscriptionDate,
                        end: sub.expiryDate,
                        type: sub.subscriptionType
                    })
                }

                if (result.businessDetails.businessCategories != null) {
                    // set business categories and subcategories
                    this.$store.dispatch('business/setBusinessCategories', result.businessDetails.businessCategories);
                }
        }
    },
    mounted () {
        
        document.querySelector("body").classList.remove("overflow-hidden");
        this.anonymousId = this.GetAnonymousId
    },
    beforeDestroy() {
        clearTimeout(this.timeOutHolder)
    }
}
</script>

<style>

</style>