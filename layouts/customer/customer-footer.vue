<template>
        <!-- beginning of site footer -->
      <div class="site-footer-area">
        <div class="row">

          <div class="col-xs-12">
            <a href="#" class="site-footer-logo">
              <img src="~/assets/customer/image/cudua-white.svg" alt="">
            </a>
          </div>
          <div class="col-xs-6 col-sm-6  col-md-2">
            <div class="footer-links">
              <n-link to="/info/about">About Cudua</n-link>
              <n-link to="/info/contact">Contact</n-link>
              <n-link to="/info/terms-and-condition">Terms & conditions</n-link>
              <n-link to="/info/privacy-and-cookey">Privacy & Cookey policy</n-link>
            </div>
          </div>
          <div class="col-xs-6 col-sm-6 mg-top--6 col-md-2">
            <div class="footer-links">
              <a href="https://academy.cudua.com" target="_blank">
                <div class="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 7.311 14">
                    <use xlink:href="~/assets/business/image/all-svg.svg#pencil"></use>
                  </svg>
                </div>
                <span>Cudua academy</span>
              </a>
              <a href="https://blog.cudua.com" target="_blank">
                <div class="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 7.311 14">
                    <use xlink:href="~/assets/business/image/all-svg.svg#pencil"></use>
                  </svg>
                </div>
                <span>Blog</span>
              </a>

              <a href="https://facebook.com/cuduahq" target="_blank">
                <div class="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="7.311" height="14" viewBox="0 0 7.311 14">
                    <use xlink:href="~/assets/customer/image/all-svg.svg#facebook"></use>
                  </svg>
                </div>
                <span>Facebook</span>
              </a>

              <a href="https://twitter.com/cuduahq" target="_blank">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11.356" viewBox="0 0 14 11.356">
                    <use xlink:href="~/assets/customer/image/all-svg.svg#twitter"></use>
                  </svg>
                </div>
                <span>Twitter</span>
              </a>

              <a href="https://instagram.com/cuduahq" target="_blank">
                <div class="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                    <use xlink:href="~/assets/customer/image/all-svg.svg#instagram"></use>
                  </svg>
                </div>
                <span>Instagram</span>
              </a>

            </div>
          </div>

            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div class="subcribe-text">Subscribe to our newsletter</div>
              <div class="input-join">
                <input type="email" name="" id="subscriptionEmail" placeholder="Email address" class="input-form white-bg-color" v-model="subscriptionEmail">
                <button class="btn btn-primary" @click="createEmailSubscriber()" id="createEmailSubscriber">
                  Submit
                  <div class="loader-action"><span class="loader"></span></div>   
                </button>
              </div>
            </div>
            <div class="col-xs-12  col-sm-12 col-md-6 col-lg-4">
              <div class="footer-office-address regular-text mg-bottom-24">
                <div class="subcribe-text">Address</div>
                59 Igbogo road Choba, Rivers state, Nigeria
            </div>

            <div class="col-xs-12 mg-bottom-24">
              <div class="subcribe-text mg-o">© Cudua Inc. 2020</div>
            </div>


          </div>
        </div>

          <PWAINITCOMPONENT></PWAINITCOMPONENT>
          <Nuxt />
      </div>
      <!-- end of site footer -->
</template>

<script>

import PWAINITCOMPONENT from '~/components/pwa.init.component.vue';

import {
  CREATE_EMAIL_SUBCRIBER
} from '~/graphql/customer'

export default {
  name: 'CUSTOMERFOOTERCOMPONENT',
  components: {
    PWAINITCOMPONENT
  },
  data() {
    return {
      subscriptionEmail: ""
    }
  },
  methods: {
    scrollToTop: function () {
        if (process.browser) {
            window.scrollTo(0, 0);
        }
    },
    createEmailSubscriber: async function () {

        if (this.subscriptionEmail.length < 5) {
            this.$addRedBorder('subscriptionEmail')
            return this.$showToast("Enter a valid email address.", 'error')
        }

        if(this.$validateEmailAddress(this.subscriptionEmail) == false) {
            this.$addRedBorder('subscriptionEmail')
            return this.$showToast("Enter a valid email address.", 'error')
        }

        this.$removeRedBorder('subscriptionEmail');

        let target = document.getElementById('createEmailSubscriber');

        let variables = {
          email: this.subscriptionEmail
        }

        target.disabled = true

        let query = await this.$performGraphQlMutation(this.$apollo, CREATE_EMAIL_SUBCRIBER, variables, {});

        target.disabled = false

        if (query.error) {
            return this.$showToast("A network error occurred.", 'error', 4000)
        }

        let result = query.result.data.CreateNewEmailSubcriber;

        if (result.success == true) {
            return this.$showToast("Your subscription was successful.", 'success', 4000)
        } else {
            return this.$showToast(result.message, 'error', 4000)
        }
    }

  },
  created() {
    if (process.client) {
        
    }
  }
}
</script>

<style>

</style>