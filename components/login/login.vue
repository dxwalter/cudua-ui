<template>
        <div class="sign-in-cover-modal" id="signInModal">
            <div class="sign-up-logo-container">
                <div class="sign-up-logo">
                    <img src="~/assets/customer/image/cudua-logo-icon.svg">
                </div>

                <button class="close-modal-btn">
                    <div class="dropdownCheckBox" @click="hideSignInBox()"></div>
                    <svg data-v-2478c6c0="" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" class="margin-unset">
                        <use data-v-2478c6c0="" xlink:href="~/assets/business/image/all-svg.svg#times"></use>
                    </svg>
                </button>
            </div>
            <div class="modal-signin-body">
                <div class="intent-bg-text">Sign into your account</div>
                <div class="form-area">
                    <!-- <div class="fb-login-button" data-size="medium" data-button-type="login_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="true" data-width=""></div> -->
                    <div class="form-control">
                        <input type="email" name="email" class="input-form" v-model="loginEmail" placeholder="Email address">
                    </div>
                    <div class="form-control">
                        <input type="password" name="password" class="input-form" v-model="loginPassword" placeholder="Password">
                    </div>
                    <div class="form-control ">
                        <button class="btn btn-primary btn-block" type="button" @click="validateUserLogin" :disabled="loginIsDisabled">
                            Sign in
                            <div class="loader-action"><span class="loader"></span></div>
                        </button>
                        <div class="fg-password"><n-link to="/auth/forgot-password">Forgot Password?</n-link></div>
                    </div>
                </div>
                <div class="form-control ">
                    <n-link to="/auth/sign-up" class="btn btn-white btn-block" type="button" data-trigger="modal" data-target="createAccountModal">Create your account</n-link>
                </div>
            </div>
            <NOTIFICATION></NOTIFICATION>
        </div>
</template>

<script>
import NOTIFICATION from '~/components/notification/notification.vue'; 
import { LOGIN_USER } from '~/graphql/customer';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "LOGINCOMPONENT",
    components: {
        NOTIFICATION
    },
    props: {
        showModal: {
            type: Number,
            default: 0 
        } 
    },
    data() {
        return {
            // login variables
            loginEmail: "",
            loginPassword: "",
            loginIsDisabled: false,
            anonymousId: "",
            accessToken: ""
        }
    },
    computed: {
		...mapGetters({
			'GetAnonymousId': 'customer/GetAnonymousId',
            'GetLoginStatus': 'customer/GetLoginStatus',
            'GetCustomerDetails': 'customer/GetCustomerDetails'
		}),
        handleResize() {
            this.screenWidth = window.innerWidth;
		},
		LoginStatus () {
            this.anonymousId = this.GetAnonymousId;
		}
    },
    methods: {
        hideSignInBox: function () {
            // add overflow-hidden to body tag
            // document.querySelector("body").classList.remove("overflow-hidden");
            // // add is-active to
            // document.getElementById('signInModal').classList.remove("is-active")
        },
        showSignInModal: function() {
                // add overflow-hidden to body tag
                document.querySelector("body").classList.add("overflow-hidden");
                // add is-active to
                document.getElementById('signInModal').classList.add("is-active")
        },
        validateUserLogin: async function () {
            if (this.loginEmail.length < 2 || this.loginPassword.length < 2) {
                this.$showToast('Enter your email and password credentials to sign in', 'error')
                return
            } 
            // add disable to button
            this.loginIsDisabled = true

            try {
                
                let login = await this.$apollo.query({
                    query: LOGIN_USER,
                    variables: {
                        email: this.loginEmail,
                        password: this.loginPassword,
                        anonymousId: this.anonymousId
                    }
                })

                let result = login.data.userLogin;

                if (result.success == false) {
                    this.loginIsDisabled = false
                    this.$initiateNotification('error', 'Failed login', result.message);
                    if (this.failedLoginCount == 3) {
                        return this.$router.push('/auth/forgot-password')
                    }
                    return
                }

                // change login status
                this.$store.dispatch('customer/changeLoginStatus', true);
                // set access token
                this.accessToken = result.accessToken;
                this.customerFullname = result.userDetails.fullname;
                

                // delete anonymous id
                localStorage.removeItem('CUDUA_ANONYMOUS_ID');
                this.$store.dispatch('customer/setAnonymousId', '');

                this.loginIsDisabled = true

                if (result.businessDetails != null) {
                    
                    this.setCustomerData(result)
                    this.setBusinessData(result)

                    this.$initiateNotification('success', 'Sign in successful', result.message);
                    
                    this.hideSignInBox()
                    return
                }

                // set customer data to store
                this.setCustomerData(result)
                this.updateAccessToken()
                this.$initiateNotification('success', 'Sign in successful', `${result.message}. You can now create your online store`);

                this.hideSignInBox()

            } catch (error) {
                    this.loginIsDisabled = false
                    this.$initiateNotification('error', 'Failed request', "A network error occurred");
                    return
            }
        },
        updateAccessToken: function () {
            this.$emit('updateAccessToken', this.accessToken)
        },
        setBusinessData: function (result) {
            // set business data
            this.$store.dispatch('business/setBusinessData', {
                businessId: result.businessDetails.id != null ? result.businessDetails.id : "",
                businessName: result.businessDetails.businessname != null ? result.businessDetails.businessname : "",
                username: result.businessDetails.username != null ? result.businessDetails.username : "",
                logo: result.businessDetails.logo != null ? result.businessDetails.logo : "",
                coverPhoto: result.businessDetails.coverPhoto != null ? result.businessDetails.coverPhoto : "",
                description: result.businessDetails.description != null ? result.businessDetails.description : "",
                reviewScore: result.userDetails.review != null ? result.userDetails.review : 0
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

            if (result.businessDetails.businessCategories != null) {
                // set business categories and subcategories
                this.$store.dispatch('business/setBusinessCategories', result.businessDetails.businessCategories);
            }

            // set business subscription
            if (result.businessDetails.subscription != null) {
                let sub = result.businessDetails.subscription;
                this.$store.dispatch('business/setSubscription', {
                    id: sub.subscriptionId,
                    start: sub.subscriptionDate,
                    end: sub.expiryDate,
                    type: sub.subscriptionType
                })
            }
        },
        setCustomerData: function (result) {
            // set customer data
            this.$store.dispatch('customer/setCustomerData', {
                fullname: result.userDetails.fullname != null ? result.userDetails.fullname : "",
                email: result.userDetails.email != null ? result.userDetails.email : "",
                userId: result.userDetails.userId != null ? result.userDetails.userId : "",
                phone: result.userDetails.phone != null ? result.userDetails.phone : "",
                reviewScore: result.userDetails.review != null ? result.userDetails.review : 0,
                displayPicture: result.userDetails.displayPicture != null ? result.userDetails.displayPicture: "",
                userToken: result.accessToken,
                emailNotification: result.userDetails.email_notification
            });
        },
        getUserDataFromStore: function () {
            this.accessToken = this.GetCustomerDetails.userToken
        }
    },
    created() {

    },
    watch: {
        showModal: function () {
            this.showSignInModal()
        }
    },
    mounted () {
        document.querySelector("body").classList.remove("overflow-hidden");
        this.LoginStatus
    }
}
</script>

<style>

</style>