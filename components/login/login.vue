<template>
<div class="modal-container mobile-search-modal-container" id="customerSignInModal">
    <div class="modal-dialog-box white-bg-color">
        <div class="mobile-login-container white-bg-color ">
			<div class="sign-in-modal-logo">
				<img src="~/assets/customer/image/cudua-logo-icon.svg" alt="">
			</div>

			<div class="sign-in-modal-welcome">
				<h1>Welcome Back!</h1>
				<div class="instruction-text">Sign into your account</div>
			</div>
			<div class="modal-login-form-container">
                <div class="display-none">
                    <div class="form-control">
                        <button class="facebook-btn btn">
                            <img src="~/assets/global-asset/image/facebookLogo.svg" alt="">
                            Sign in with facebook
                        </button>
                    </div>

                    <div class="sign-in-option mg-bottom-32">or sign in with</div>
                </div>

                <div class="form-control">
                    <input type="email" id="userLoginEmail" name="email" class="input-form" v-model="loginEmail" placeholder="Email address" autocomplete="off">
                </div>
                <div class="form-control">
                    <input type="password" id="userLoginPassword" name="password" class="input-form" v-model="loginPassword" placeholder="Password">
                </div>
                <div class="form-control ">
                    <button class="btn btn-primary btn-block" type="button" @click="validateUserLogin" id="validateUserLogin">
                        Sign in
                        <div class="loader-action"><span class="loader"></span></div>
                    </button>
                </div>
				<div class="form-control">
					<div class="mg-top-24 mg-bottom-24 other-login-actions">
						<n-link to="/auth/sign-up">Create your account</n-link>
						<n-link to="/auth/forgot-password">Forgot password?</n-link>
					</div>
				</div>

				<div class="d-flex-center">
					<button class="btn btn-small btn-white" data-target="customerSignInModal" data-dismiss="modal">Cancel Sign in</button>
				</div>

			</div>
            <!-- <NOTIFICATION></NOTIFICATION> -->
        </div>
    </div>
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
    data() {
        return {
            // login variables
            loginEmail: "",
            loginPassword: "",
            loginIsDisabled: false,
            anonymousId: "",
            accessToken: "",
            failedLoginCount: 0
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
        validateUserLogin: async function () {
            if (this.loginEmail.length < 2 || this.loginPassword.length < 2) {
                this.$showToast('Enter your email and password credentials to sign in', 'error')
                return
            } 

            let target = document.getElementById('validateUserLogin');

            target.disabled = true

            let variables = {
                email: this.loginEmail,
                password: this.loginPassword,
                anonymousId: this.anonymousId
            }

            let request = await this.$performGraphQlQuery(this.$apollo, LOGIN_USER, variables, {});

            target.disabled = false

            if (request.error) {
                this.$initiateNotification('error', 'Failed request', 'A network error occurred');
                return
            }

            let result = request.result.data.userLogin;

            if (result.success == false) {
                
                this.failedLoginCount = this.failedLoginCount + 1

                this.$initiateNotification('error', 'Failed login', result.message);
                if (this.failedLoginCount == 3) {
                    return this.$router.push('/auth/forgot-password')
                }
                return
            }

            // change login status
            await this.$store.dispatch('customer/changeLoginStatus', true);
            // set access token
            this.accessToken = result.accessToken;
            this.customerFullname = result.userDetails.fullname;


            // delete anonymous id
            localStorage.removeItem('CUDUA_ANONYMOUS_ID');
            await this.$store.dispatch('customer/setAnonymousId', '');


            if (result.businessDetails != null) {
                
                await this.setCustomerData(result)
                await this.setBusinessData(result)

                this.$initiateNotification('success', 'Sign in successful', result.message);

                window.location.reload(true)
                
                return
            }

            // set customer data to store
            await this.setCustomerData(result)
            this.updateAccessToken()
            this.$initiateNotification('success', 'Sign in successful', `${result.message}.`);

            window.location.reload(true)

            return



        },
        updateAccessToken: function () {
            this.$emit('updateAccessToken', this.accessToken)
        },
        setBusinessData: async function (result) {
            // set business data
            await this.$store.dispatch('business/setBusinessData', {
                businessId: result.businessDetails.id != null ? result.businessDetails.id : "",
                businessName: result.businessDetails.businessname != null ? result.businessDetails.businessname : "",
                username: result.businessDetails.username != null ? result.businessDetails.username : "",
                logo: result.businessDetails.logo != null ? result.businessDetails.logo : "",
                paystackPublicKey: result.businessDetails.paystackPublicKey != null ? result.businessDetails.paystackPublicKey : "",
                coverPhoto: result.businessDetails.coverPhoto != null ? result.businessDetails.coverPhoto : "",
                description: result.businessDetails.description != null ? result.businessDetails.description : "",
                reviewScore: result.userDetails.review != null ? result.userDetails.review : 0
            });
                            
            // set business contact
            if (result.businessDetails.contact != null) {
                await this.$store.dispatch('business/setBusinessContact', {
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
                await this.$store.dispatch('business/setBusinessAddress', {
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
                await this.$store.dispatch('business/setBusinessCategories', result.businessDetails.businessCategories);
            }

            // set business subscription
            if (result.businessDetails.subscription != null) {
                let sub = result.businessDetails.subscription;
                await this.$store.dispatch('business/setSubscription', {
                    id: sub.subscriptionId,
                    start: sub.subscriptionDate,
                    end: sub.expiryDate,
                    type: sub.subscriptionType
                })
            }
        },
        setCustomerData: async function (result) {
            // set customer data
            await this.$store.dispatch('customer/setCustomerData', {
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

    },
    mounted () {
        document.querySelector("body").classList.remove("overflow-hidden");
        this.LoginStatus
    }
}
</script>

<style scoped>
    .is-active {
        display: block !important;
        z-index: 10000000 !important;
    }
</style>