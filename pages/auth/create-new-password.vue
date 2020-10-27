<template>
  <div class="customer">
      <div class="sign-up-container">
            <div class="sign-up-logo-container">
                <div class="sign-up-logo">
                    <img src="~/assets/customer/image/cudua-logo-icon.svg">
                </div>

                <n-link to="/" class="btn btn-primary">Home</n-link>
            </div>
            <div class="sign-up-content">
                <div class="instruction-area">
                    <div class="intent-bg-text">Create a new password</div>
                </div>

                <div class="sign-up-form-layer">
                    <div class="sign-up-form-wrapper">
                        <div class="create-business-signup">
                            <div class="form-control">
                                <input type="password" name="" id="newPassword" class="input-form" placeholder="New password" v-model="newPassword">
                            </div>
                            <div class="form-control">
                                <input type="password" name="" id="confirmPassword" class="input-form" placeholder="Confirm password" v-model="confirmPassword">
                            </div>
                            <div class="form-control ">
                                <button class="btn btn-primary btn-block" type="button" id="changePassword" @click="changePassword()">
                                    Submit new password
                                    <div class="loader-action"><span class="loader"></span></div>
                                </button>
                            </div>
            
                        </div>
                        
                    </div>
                </div>
        </div>
       </div>

       <NOTIFICATION></NOTIFICATION>
       <Nuxt />
  </div>
</template>

<script>

import { RESET_PASSWORD } from '~/graphql/customer'
import NOTIFICATION from '~/components/notification/notification.vue'; 

export default {
    name: "CREATENEWPASSWORD",
    components: {
        NOTIFICATION
    },
    data () {
        return {
            secret: "",
            userId: "",
            newPassword: "",
            confirmPassword: "",
            timer: null
        }
    },
    methods: {
        changePassword: async function () {

            if (this.newPassword.length < 6) {
                this.$addRedBorder('newPassword')
                return this.$initiateNotification('error', '', "Your password must be greater than 5 characters");
            } else {
                this.$removeRedBorder('newPassword')
            }

            if (this.newPassword !== this.confirmPassword) {
                this.$addRedBorder('newPassword')
                this.$addRedBorder('confirmPassword')
                return this.$initiateNotification('error', '', "Your passwords are not identical");
            } else {
                this.$removeRedBorder('newPassword')
                this.$removeRedBorder('confirmPassword')
            }


            let target = document.getElementById('changePassword');

            target.disabled = true

            let variables = {
                password: this.newPassword,
                secret: this.secret,
                userId: this.userId
            }

            let query = await this.$performGraphQlMutation(this.$apollo, RESET_PASSWORD, variables, {});

            target.disabled = false

            if (query.error) {
                return this.$initiateNotification('error', 'Oops!', query.message);
            }

            let result = query.result.data.resetPassword;

            if (result.success == false) {
                return this.$initiateNotification('error', 'Oops!', result.message);
            }

            this.$initiateNotification('success', '', result.message);

            this.clearTimeOut()

            this.timer = setTimeout(() => {
                this.$router.push('/auth/')
            }, 1500);

        

        },
        clearTimeOut: function () {
            clearTimeout(this.timer)
        }
    },
    created () {
        if (process.client) {
            
            let urlQuery = this.$route.query
            let userId = urlQuery.sub
            let secret = urlQuery.init

            this.secret = secret == undefined || secret.length == 0 ? "123243454" : secret
            this.userId = userId == undefined || userId.length == 0 ? "123243454" : userId

        }
    },
    beforeDestroy() {
        this.clearTimeOut()
    },
    mounted () {
        document.querySelector("body").classList.remove("overflow-hidden");
    }
}
</script>

<style>

</style>    