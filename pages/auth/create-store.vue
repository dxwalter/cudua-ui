<template>
  <div class="customer">

        <div id="fb-root"></div>
        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0&appId=1380709488802204&autoLogAppEvents=1" nonce="LDvgUfm5"></script>

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
                            <div class="intent-bg-text">Create an online shop for your business</div>
                            <div class="sign-up-banner">
                                <img src="~/assets/customer/image/banner-image.jpg" alt="">
                            </div>
                        </div>

                        <div class="sign-up-form-layer">
                            <div class="sign-up-form-wrapper">
                                <div class="create-business-signup">

                                    <div class="d-flex-between mg-bottom-32 personal-acct-action" v-if="!isLoggedIn">
                                        <div class="action-text"> I already have a personal account. Sign in before creating your online shop</div>
                                        <button class="btn btn-md btn-white" @click="showSignInBox">Sign in</button>
                                    </div>

                                    <div class="d-flex-between mg-bottom-16 personal-acct-action" v-if="isLoggedIn">
                                        <div class="action-text">You are signed into your personal account as <span>{{customerFullname}}</span></div>
                                    </div>

                                    <div class="form-control" v-if="!isLoggedIn">
                                        <input type="text" name="fullname" id="signUpFullname" class="input-form" v-model="fullname" placeholder="Fullname">
                                        <div class="validation-error-design" id="fullnameValidationError" data-error="error"></div>
                                    </div>
                                    <div class="form-control">
                                        <input type="text" name="businessname" id="signUpBusinessName" class="input-form" placeholder="Business name" v-model="businessName" autocomplete="off">
                                        <div class="validation-error-design" id="businessNameValidationError" data-error="error"></div>
                                    </div>
                                    <div class="form-control">
                                        <input type="text" name="username" id="signUpUsername" class="input-form" placeholder="Username" v-model="username" @focus="showUsernameUrlMethod(true)" autocomplete="off">
                                        <div class="username-url-sample" v-if="username">https://www.cudua.com/<span>{{username}}</span></div>
                                        <div class="validation-error-design" id="usernameValidationError" data-error="error"></div>
                                    </div>
                                    <div class="form-control" v-if="!isLoggedIn">
                                        <input type="email" name="email" id="signUpEmail" class="input-form" v-model="email" placeholder="Email address" autocomplete="email">
                                        <div class="validation-error-design" id="emailValidationError" data-error="error"></div>
                                    </div>
                                    <div class="form-control" v-if="!isLoggedIn">
                                        <input type="password" name="password" id="signUpPassword" class="input-form" v-model="password" placeholder="Password" autocomplete="password">
                                        <div class="validation-error-design" id="passwordValidationError" data-error="error"></div>
                                    </div>
                                    <div class="form-control">
                                        <div>
                                            By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.
                                        </div>
                                        <button class="btn btn-block btn-primary" type="button" @click="validateBusiness" :disabled="isDisabled">
                                            Create your shop
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
                <Nuxt />
            </div>
        </div>

        <div class="sign-in-cover-modal" id="signInModal">
            <div class="sign-up-logo-container">
                <div class="sign-up-logo">
                    <img src="~/assets/customer/image/cudua-logo-icon.svg">
                </div>

                <button class="close-modal-btn">
                    <div class="dropdownCheckBox" @click="hideSignInBox"></div>
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
            </div>
        </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import { CREATE_BUSINESS } from '~/graphql/business';
import { CREATE_USER_AND_BUSINESS_MUTATION } from '~/graphql/customer';
import { LOGIN_USER } from '~/graphql/customer';

import NOTIFICATION from '~/components/notification/notification.vue'; 

export default {
    name: 'CREATEBUSINESS',
    components: {
        NOTIFICATION
    },
	data: function() {
		return {

            // login variables
            loginEmail: "",
            loginPassword: "",
            loginIsDisabled: false,

            // sign up variables
            isLoggedIn: false,
            fullname: "",
            email: "",
            password: "",
            businessName: "",
            username: "",

            inviteId: "",

            // customer details
            customerFullname: "",
            anonymousId: "",
            accessToken: "",

            // UI variables
            error: 0,
            isDisabled: false,
            failedLoginCount: 0,
            timeOutHolder: null

		}
	},
    created() {
        if (process.client) {

            let urlQuery = this.$route.query;
            if (urlQuery.ref != undefined) {
                if (urlQuery.ref.length > 0) {
                    this.inviteId = urlQuery.ref
                }
            }

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

            try {

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

                    this.$initiateNotification('success', 'Sign in successful', result.message);

                    clearTimeout(this.timeOutHolder)

                    this.timeOutHolder = setTimeout(() => {

                        this.$router.push('/b')
                    }, 1000);   

            } catch (error) {
                this.isDisabled = false
                this.$initiateNotification('error', 'Failed request', "A network error occurred");
                return
            }

        },
        
        createBusinessForUnsignedUser: async function () {
                
             try {
                let result = await this.$apollo.mutate({
                    mutation: CREATE_USER_AND_BUSINESS_MUTATION,
                    variables: {
                        fullname: this.fullname,
                        email: this.email,
                        password: this.password,
                        anonymousId: this.anonymousId,
                        name: this.businessName,
                        username: this.username,
                        inviteId: this.inviteId
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

                if (result.businessDetails.subscription != null) {
                    let sub = result.businessDetails.subscription;
                    this.$store.dispatch('business/setSubscription', {
                        id: sub.subscriptionId,
                        start: sub.subscriptionDate,
                        end: sub.expiryDate,
                        type: sub.subscriptionType
                    })
                }

                // delete anonymous id
                localStorage.removeItem('CUDUA_ANONYMOUS_ID');
                this.$store.commit('customer/setAnonymousId', '');

                this.$initiateNotification('success', 'Online shop created', result.message);

                clearTimeout(this.timeOutHolder)

                this.timeOutHolder = setTimeout(() => {
                    // window.location.assign('/b')
                    return this.$router.push('/b')
                }, 1000);
             } catch (error) {
                this.isDisabled = false
                this.$initiateNotification('error', 'Failed request', "A network error occurred");
                return
             }   
            
        },
        showUsernameUrlMethod: function(state) {
            this.$removeValidationError('usernameValidationError')
        },
        showSignInBox: function () {
            // add overflow-hidden to body tag
            document.querySelector("body").classList.add("overflow-hidden");
            // add is-active to
            document.getElementById('signInModal').classList.add("is-active")
        },
        hideSignInBox: function () {
            // add overflow-hidden to body tag
            document.querySelector("body").classList.remove("overflow-hidden");
            // add is-active to
            document.getElementById('signInModal').classList.remove("is-active")
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
                
                this.LoginStatus

                // delete anonymous id
                localStorage.removeItem('CUDUA_ANONYMOUS_ID');
                this.$store.dispatch('customer/setAnonymousId', '');

                this.loginIsDisabled = true

                if (result.businessDetails != null) {
                    
                    this.setCustomerData(result)
                    this.setBusinessData(result)

                    this.$initiateNotification('success', 'Sign in successful', result.message);

                    clearTimeout(this.timeOutHolder)

                    this.timeOutHolder = setTimeout(() => {
                        this.$router.push('/b') 
                    }, 1000);
                    
                    return;
                }

                // set customer data to store
                this.setCustomerData(result)
                this.$initiateNotification('success', 'Sign in successful', `${result.message}. You can now create your online shop`);

                this.hideSignInBox()

            } catch (error) {
                    this.loginIsDisabled = false
                    this.$initiateNotification('error', 'Failed request', "A network error occurred");
                    return
            }
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
            this.customerFullname = this.GetCustomerDetails.fullname
            this.accessToken = this.GetCustomerDetails.userToken
        }
    },
    mounted () {
        document.querySelector("body").classList.remove("overflow-hidden");
        this.LoginStatus
        if (this.isLoggedIn) {
            this.getUserDataFromStore()
        }
    },
    beforeDestroy() {
        clearTimeout(this.timeOutHolder)
    }
}
</script>

<style>

</style>