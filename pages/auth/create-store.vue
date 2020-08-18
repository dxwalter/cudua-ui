<template>
  <div class="customer">
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
                    <div class="intent-bg-text">Create an online store for your business</div>
                    <div class="sign-up-banner">
                        <img src="~/assets/customer/image/banner-image.jpg" alt="">
                    </div>
                </div>

                <div class="sign-up-form-layer">
                    <div class="sign-up-form-wrapper">
                        <div class="create-business-signup">

                            <div class="d-flex-between mg-bottom-32 personal-acct-action" v-if="!isLoggedIn">
                                <div class="action-text"> I already have a personal account. Sign in before creating your business account</div>
                                <button class="btn btn-md btn-white">Sign in</button>
                            </div>

                            <div class="d-flex-between mg-bottom-16 personal-acct-action" v-if="isLoggedIn">
                                <div class="action-text">You are signed into your personal account as <span>{{customerFullname}}</span></div>
                            </div>

                            <div class="form-control" v-if="!isLoggedIn">
                                <input type="text" name="fullname" id="signUpFullname" class="input-form" v-model="fullname" placeholder="Fullname">
                                <div class="validation-error-design" id="fullnameValidationError" data-error="error"></div>
                            </div>
                            <div class="form-control">
                                <input type="text" name="businessname" id="signUpBusinessName" class="input-form" placeholder="Business name" v-model="businessName" >
                                <div class="validation-error-design" id="businessNameValidationError" data-error="error"></div>
                            </div>
                            <div class="form-control">
                                <input type="text" name="username" id="signUpUsername" class="input-form" placeholder="Username" v-model="username" @focus="showUsernameUrlMethod(true)" autocomplete="false">
                                <div class="username-url-sample" v-if="username">https://www.cudua.com/<span>{{username}}</span></div>
                                <div class="validation-error-design" id="usernameValidationError" data-error="error"></div>
                            </div>
                            <div class="form-control" v-if="!isLoggedIn">
                                <input type="email" name="email" id="signUpEmail" class="input-form" v-model="email" placeholder="Email address">
                                <div class="validation-error-design" id="emailValidationError" data-error="error"></div>
                            </div>
                            <div class="form-control" v-if="!isLoggedIn">
                                <input type="password" name="password" id="signUpPassword" class="input-form" v-model="password" placeholder="Password">
                                <div class="validation-error-design" id="passwordValidationError" data-error="error"></div>
                            </div>
                            <div class="form-control">
                                <button class="btn btn-block btn-primary" type="button" @click="validateBusiness" :disabled="isDisabled">
                                    Create online shop
                                    <div class="loader-action"><span class="loader"></span></div>    
                                </button>
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
            <NOTIFICATION></NOTIFICATION>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import { CREATE_BUSINESS } from '~/graphql/business';
import { CREATE_USER_AND_BUSINESS_MUTATION } from '~/graphql/customer';

import NOTIFICATION from '~/components/notification/notification.vue'; 

export default {
    name: 'CREATEBUSINESS',
    components: {
        NOTIFICATION
    },
	data: function() {
		return {
            isLoggedIn: false,
            fullname: "",
            email: "",
            password: "",
            businessName: "",
            username: "",
            // customer details
            customerFullname: "",
            anonymousId: "",
            accessToken: "",
            // UI variables
            error: 0,
            isDisabled: false

		}
	},
    created() {
        if (process.client) {
            window.addEventListener('resize', this.handleResize);
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
            this.isLoggedIn = this.GetLoginStatus;
            this.anonymousId = this.GetAnonymousId;
		}
    },
    methods: {
        validateBusiness: function() {

            this.error = 0;

            if (this.isLoggedIn) {
                // validate only business name and username
                this.validateUsernameAndBusinessName()
            } else {
                // validate all

                this.error = 0;

                // validate name
                if (this.fullname.length < 3) {
                    this.$addRedBorder('signUpFullname');
                    this.$outputValidationError('fullnameValidationError', 'Your fullname must be greater than 2 characters')
                    this.error = 1
                } else {
                    this.$removeRedBorder('signUpFullname');
                    this.$removeValidationError('fullnameValidationError');
                }

                // validate email
                if (this.email.length < 5) {
                    this.$addRedBorder('signUpEmail')
                    this.$outputValidationError('emailValidationError', 'Enter a valid email address')
                    this.error = 1
                } else {
                    this.$removeRedBorder('signUpEmail')
                    this.$removeValidationError('emailValidationError');
                }

                // password
                if (this.password.length < 6) {
                    this.$addRedBorder('signUpPassword')
                    this.$outputValidationError('passwordValidationError', 'Your password must be greater than 5 characters')
                    this.error = 1
                } else {
                    this.$removeRedBorder('signUpPassword')
                    this.$removeValidationError('passwordValidationError');
                }

                // validate only business name and username
                this.validateUsernameAndBusinessName()

            }

            if (this.error) {
                this.$showToast('An input error occurred. Find error and make corrections to continue', 'error')
                return
            }

            this.isDisabled = true

            if (this.isLoggedIn) {
                this.createBusinessForSignedUser()
            } else {
                this.createBusinessForUnsignedUser()
            }
    


        },
        validateUsernameAndBusinessName: function () {
            // business name validation
            if (this.businessName.length <= 3) {
                this.$addRedBorder('signUpBusinessName');
                this.$outputValidationError('businessNameValidationError', 'Your business name must be greater than 3 characters');
                this.error = 1;
            } else {
                this.$removeRedBorder('signUpBusinessName');
                this.$removeValidationError('businessNameValidationError');
            }


            if (this.username.length <= 3) {
                this.$addRedBorder('signUpUsername');
                this.$outputValidationError('usernameValidationError', 'Your business username must be greater than 3 characters');
                this.error = 1;
            } else {
                let checkUsername = new RegExp(/^(?!.*\.\.\s)(?!.*\.$)[^\W][\w.]{0,29}$/ig).test(this.username);

                if (checkUsername == false) {
                    this.error = 1;
                    this.$addRedBorder('signUpUsername');
                    this.$outputValidationError('usernameValidationError', `Your username must not have any space and any character like
                    <span>
                        /\ " \` @ - | +
                    </span>`);
                } else {
                    this.$removeRedBorder('signUpUsername');
                    this.$removeValidationError('usernameValidationError');
                }
            }

            return


        },
        createBusinessForSignedUser: async function () {

            let result = await this.$apollo.mutate({
                mutation: CREATE_BUSINESS,
                variables: {
                    name: this.businessName,
                    username: this.username
                },
                context: {
                    headers: {
                        'accessToken': this.accessToken
                    }
                }
            })

            result = result.data.CreateBusinessAccount;

            if (result.success ==  false) {
                this.isDisabled = false
                this.$initiateNotification('error', 'An error occurred', result.message);
                return
            }

            // update business data
            if (result.businessDetails != null) {
                // set business data
                this.$store.commit('business/setBusinessData', {
                    businessId: result.businessDetails.id != null ? result.businessDetails.id : "",
                    businessName: result.businessDetails.businessname != null ? result.businessDetails.businessname : "",
                    username: result.businessDetails.username != null ? result.businessDetails.username : ""
                });
            }

            this.$initiateNotification('success', 'Sign in successful', result.message);
            setTimeout(() => {
                this.$router.push('/b') 
            }, 1000);

        },
        createBusinessForUnsignedUser: async function () {
            let result = await this.$apollo.mutate({
                mutation: CREATE_USER_AND_BUSINESS_MUTATION,
                variables: {
                    fullname: this.fullname,
                    email: this.email,
                    password: this.password,
                    anonymousId: this.anonymousId,
                    name: this.businessName,
                    username: this.username
                },
                context: {
                    headers: {
                        'accessToken': this.accessToken
                    }
                }
            })

            result = result.data.createUserAndBusiness;

            if (result.success == false) {
                this.isDisabled = false
                this.$initiateNotification('error', 'An error occurred', result.message);
                return
            }

            // change login status
            this.$store.commit('customer/changeLoginStatus', true);

            this.$store.commit('customer/setCustomerData', {
                fullname: result.userData.fullname,
                email: result.userData.email,
                userId: result.userData.userId,
                userToken: result.userData.accessToken
            });

            this.$store.commit('business/setBusinessData', {
                businessId: result.businessDetails.id,
                businessName: result.businessDetails.businessname,
                username: result.businessDetails.username
            });

            // delete anonymous id
            localStorage.removeItem('CUDUA_ANONYMOUS_ID');
            this.$store.commit('customer/setAnonymousId', '');

            this.$initiateNotification('success', 'Online shop created', result.message);
            setTimeout(() => {
                this.$router.push('/b') 
            }, 1000);
            
        },
        showUsernameUrlMethod: function(state) {
            this.$removeValidationError('usernameValidationError')
        }
    },
    mounted () {
        document.querySelector("body").classList.remove("overflow-hidden");
        this.LoginStatus
        if (this.isLoggedIn) {
            this.customerFullname = this.GetCustomerDetails.fullname
            this.accessToken = this.GetCustomerDetails.userToken
        }
    }
}
</script>

<style>

</style>