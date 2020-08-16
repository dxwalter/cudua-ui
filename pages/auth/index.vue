<template>
    <div class="customer">
        <div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0&appId=1380709488802204&autoLogAppEvents=1" nonce="6lvOLz9q"></script>
        <div class="body-container">
            <div class="sign-up-container">

                <div class="sign-up-logo-container">
                    <div class="sign-up-logo">
                        <img src="~/assets/customer/image/cudua-logo-icon.svg">
                    </div>

                    <a href="index.html" class="btn btn-primary">Home</a>
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
                                    
                                    <div class="form-control">
                                        <input type="email" name="email" class="input-form" v-model="email" placeholder="Email address">
                                    </div>
                                    <div class="form-control">
                                        <input type="password" name="password" class="input-form" v-model="password" placeholder="Password">
                                    </div>
                                    <div class="form-control ">
                                        <button class="btn btn-primary btn-block" type="button" @click="validateUser" :disabled="isDisabled">
                                            Sign in
                                            <div class="loader-action"><span class="loader"></span></div>
                                        </button>
                                        <div class="fg-password"><n-link to="/auth/forgot-password">Forgot Password?</n-link></div>
                                    </div>
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
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import NOTIFICATION from '~/components/notification/notification.vue'; 
import { LOGIN_USER } from '~/graphql/customer';
export default {
    name: "LOGINUSER",
    components: {NOTIFICATION},
    data: function() {
		return {
            anonymousId: "",
            email: "",
            password: "",
            isDisabled: false,
		}
    },
    computed: {
		...mapGetters({
			'GetAnonymousId': 'customer/GetAnonymousId'
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
                this.$initiateNotification('error', 'Failed login', result.message);
                return
            }

            console.log(result)

        }
    },
    mounted () {
        this.anonymousId = this.GetAnonymousId
    }
}
</script>

<style>

</style>