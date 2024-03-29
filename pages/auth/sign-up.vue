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
        
                    <div class="sign-up-banner">
                        <img src="~/assets/customer/image/banner-image.jpg" alt="">
                    </div>
                </div>

                <div class="sign-up-form-layer">
                    <div class="sign-up-form-wrapper">
                        <div class="create-business-signup">
                            <div class="intent-bg-text">Create your personal account</div>
                            <div class="form-control">
                                <input type="text" name="fullname" id="signUpFullname" class="input-form" v-model="fullname" placeholder="Fullname">
                                <div class="validation-error-design" id="fullnameValidationError" data-error="error"></div>
                            </div>
                            <div class="form-control">
                                <input type="text" name="email" id="signUpEmail" class="input-form" v-model="email" placeholder="Email address">
                                <div class="validation-error-design" id="emailValidationError" data-error="error"></div>
                            </div>
                            <div class="form-control">
                                <input type="password" name="password" id="signUpPassword" class="input-form" v-model="password" placeholder="Password">
                                <div class="validation-error-design" id="passwordValidationError" data-error="error"></div>
                            </div>
                            <div class="form-control ">
                                <div class="acknowledgement-sign-up">
                                    By clicking Create your account, 
                                    <n-link to="/info/terms-and-condition">Terms of service</n-link>,
                                    <n-link to="/info/privacy-and-cookey">Privacy policy</n-link>, and 
                                    <n-link to="/info/privacy-and-cookey#cookie">Cookie Policy</n-link>.
                                </div>
                                <button class="btn btn-primary btn-block" type="button" @click="validateUser" :disabled="isDisabled">
                                    Create your account
                                    <div class="loader-action"><span class="loader"></span></div>
                                </button>
                            </div>
                            <div class="form-control ">
                                <n-link to="/auth/" class="btn btn-white btn-block" type="button">Sign in</n-link>
                            </div>
            
                        </div>
                    </div>
                </div>
           </div>
            <!-- bottom links -->
            <div class="sign-up-bottom-links">
                <n-link to="/info/about">About Cudua</n-link>
                <n-link to="/info/contact">Contact support</n-link>
                <n-link to="/info/terms-and-condition">Terms and conditions</n-link>
                <n-link to="/info/privacy-and-cookey">Privacy and Cookey policy</n-link>
            </div>

        </div>
    </div>
        <NOTIFICATION></NOTIFICATION>
        <Nuxt />
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import NOTIFICATION from '~/components/notification/notification.vue'; 
import { CREATE_USER_MUTATION } from '~/graphql/customer';

export default {
    name: 'CREATEACCOUNT',
    components: {
        NOTIFICATION
    },
	data: function() {
		return {
            anonymousId: "",
            fullname: "",
            email: "",
            password: "",
            error: 0,
            isDisabled: false,
            timer: null
		}
    },
    created () {

    },
    computed: {
		...mapGetters({
			'GetAnonymousId': 'customer/GetAnonymousId'
		})
    },
    methods: {
        addRedBorder: function (target) {
            document.getElementById(target).style.border = '1px solid #B82E24';
        },
        removeRedBorder: function (target) {
            document.getElementById(target).style.border = '0px';
        },
        outputValidationError: function(target, message) {
            document.getElementById(target).style.display = 'block';
            document.getElementById(target).innerHTML = '';
            document.getElementById(target).innerHTML = message;
        },
        removeValidationError: function(target) {
            document.getElementById(target).style.display = 'none';
        },
        validateUser: function () {

            this.error = 0;

            // validate name
            if (this.fullname.length < 3) {
                this.addRedBorder('signUpFullname');
                this.outputValidationError('fullnameValidationError', 'Your fullname must be greater than 2 characters')
                this.error = 1
            } else {
                this.removeRedBorder('signUpFullname');
                this.removeValidationError('fullnameValidationError');
            }

            // validate email
            if (this.email.length < 5 || this.$validateEmailAddress(this.email) == false) {
                this.addRedBorder('signUpEmail')
                this.outputValidationError('emailValidationError', 'Enter a valid email address')
                this.error = 1
            } else {
                this.removeRedBorder('signUpEmail')
                this.removeValidationError('emailValidationError');
                
            }

            // password
            if (this.password.length < 6) {
                this.addRedBorder('signUpPassword')
                this.outputValidationError('passwordValidationError', 'Your password must be greater than 5 characters')
                this.error = 1
            } else {
                this.removeRedBorder('signUpPassword')
                this.removeValidationError('passwordValidationError');
            }


            if (this.error) {
                this.$showToast('An input error occurred. Find error and make corrections to continue', 'error')
                return
            }

            this.createUser()
            
        },
        createUser: async function () {

            let variables = {
                fullname: this.fullname,
                email: this.email,
                password: this.password,
                anonymousId: this.anonymousId
            }

            // add disable to button
            this.isDisabled = true

            let query = await this.$performGraphQlMutation(this.$apollo, CREATE_USER_MUTATION, variables, {});

            this.isDisabled = false;

            if (query.error) return this.$initiateNotification('error', 'Failed request', `A network error occurred. ${query.message}`);

            let result = query.result.data.createUser;

            if (result.success == false) {
                
                if (result.message.search('email') != -1) {
                    this.addRedBorder('signUpEmail');
                    this.outputValidationError('emailValidationError', 'This email exists. Choose a different email address');
                }

                return this.$initiateNotification('error', "Registration failed", result.message);
            
            }


            // commit user data
            await this.$store.commit('customer/changeLoginStatus', true);
            await this.$store.dispatch('customer/setNotificationCount', 2)
            await this.$store.commit('customer/setCustomerData', {
                fullname: result.userData.fullname,
                email: result.userData.email,
                userId: result.userData.userId,
                userToken: result.userData.accessToken,
                reviewScore: result.userData.review
            });

            // delete anonymous id
            localStorage.removeItem('CUDUA_ANONYMOUS_ID');
            await this.$store.commit('customer/setAnonymousId', '');

            this.$initiateNotification('success', 'Registration successful', result.message);
            this.timer = setTimeout(() => {
                this.$router.push('/')
            }, 1000);

        }
    },
    beforeDestroy () {
        clearTimeout(this.timer)
    },
    mounted () {
        document.querySelector("body").classList.remove("overflow-hidden");
        this.anonymousId = this.GetAnonymousId
    }
}
</script>

<style>

</style>
