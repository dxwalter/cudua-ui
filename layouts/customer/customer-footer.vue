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
              <n-link to="/info/terms-and-condition">Terms & condition</n-link>
              <n-link to="/info/privacy-and-cookey">Privacy & Cookey policy</n-link>
            </div>
          </div>
          <div class="col-xs-6 col-sm-6 mg-top--6 col-md-2">
            <div class="footer-links">
              <a href="#">
                <div class="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 7.311 14">
                    <use xlink:href="~/assets/business/image/all-svg.svg#pencil"></use>
                  </svg>
                </div>
                <span>Blog</span>
              </a>

              <a href="#">
                <div class="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="7.311" height="14" viewBox="0 0 7.311 14">
                    <use xlink:href="~/assets/customer/image/all-svg.svg#facebook"></use>
                  </svg>
                </div>
                <span>Facebook</span>
              </a>

              <a href="#">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11.356" viewBox="0 0 14 11.356">
                    <use xlink:href="~/assets/customer/image/all-svg.svg#twitter"></use>
                  </svg>
                </div>
                <span>Twitter</span>
              </a>

              <a href="#">
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
              <input type="text" name="" id="" placeholder="Email address" class="input-form white-bg-color">
              <button class="btn btn-primary">Submit</button>
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

          <div class="col-xs-12">
            <button class="btn btn-white" @click="scrollToTop()">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                  <use xlink:href="~/assets/customer/image/all-svg.svg#upArrow"></use>
              </svg>
          </button>
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

export default {
  name: 'CUSTOMERFOOTERCOMPONENT',
  components: {
    PWAINITCOMPONENT
  },
  methods: {
    scrollToTop: function () {
        if (process.browser) {
            window.scrollTo(0, 0);
        }
    },

  },
  created() {
    if (process.client) {
        
    }
  }
}
</script>

<style>

</style>