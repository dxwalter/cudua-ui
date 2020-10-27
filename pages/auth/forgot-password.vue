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
                    <div class="intent-bg-text">Reset your password</div>
                </div>

                <div class="sign-up-form-layer">
                    <div class="sign-up-form-wrapper">
                        <div class="create-business-signup">
                            <div class="form-control">
                                <input type="email" name="" id="emailAddress" class="input-form" placeholder="Email address" v-model="emailAddress">
                            </div>
                            <div class="form-control ">
                                <button class="btn btn-primary btn-block" id="recoverEmailAddress" type="button" @click="recoverEmailAddress()">
                                    Reset password
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

import { RECOVER_PASSWORD } from '~/graphql/customer'
import NOTIFICATION from '~/components/notification/notification.vue'; 

export default {
    name: "RECOVERPASSWORD",
    components: {
        NOTIFICATION
    },
    data () {
        return {
            emailAddress: ""
        }
    },
    methods: {
        recoverEmailAddress: async function () {

            if (this.emailAddress.length == 0) {
                this.$addRedBorder('emailAddress');
                this.$showToast('Enter a valid email address', 'error', 4000)
                return
            } else {
                this.$removeRedBorder('emailAddress')
            }

            let target = document.getElementById('recoverEmailAddress');

            target.disabled = true

            let variables = {
                email: this.emailAddress
            }

            let query = await this.$performGraphQlMutation(this.$apollo, RECOVER_PASSWORD, variables, {});

            target.disabled = false

            if (query.error) {
                return this.$initiateNotification('error', 'Oops!', query.message);
            }

            let result = query.result.data.recoverPassword;

            if (result.success == false) {
                return this.$initiateNotification('error', 'Oops!', result.message);
            }

            return this.$initiateNotification('success', '', result.message);

        }
    }, 
    mounted () {
        document.querySelector("body").classList.remove("overflow-hidden");
    }
}
</script>

<style>

</style>