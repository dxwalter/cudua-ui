<template>
  <div class="business">
    <div class="body-container">
        <TOPHEADER />
        <Nuxt />
        <div class="content-container">
            <SIDENAV />
            <Nuxt />
                <div class="content-area">
                    <div class="main-content">

                      <div class="cudua-jumbotron">
                        <div class="mg-bottom-16">
                          <h1 class="lg-header">Turbo charge your business growth</h1>
                        </div>

                        <div class="description mg-bottom-32">Selling online is not a ride in the park. Join our community of business owners like you that are getting daily educational videos and resources on how to grow their fashion and beauty businesses online for free.
                        </div>

                        <div class="description mg-bottom-16">Choose your preferred learning platform.</div>

                        <div class="social-icon-container">
                          <a href="https://chat.whatsapp.com/H4RzxAvVlQX1fs3feYim2E" target="_blank" class="academy-social">
                            <img src="~/assets/business/image/social/whatsapp.svg" alt="" srcset="">
                          </a>
                          <a href="https://t.me/cudua" target="_blank" class="academy-social">
                            <img src="~/assets/business/image/social/telegram.svg" alt="" srcset="">
                          </a>
                          <a href="https://web.facebook.com/groups/cuduaacademy/" target="_blank" class="academy-social">
                            <img src="~/assets/business/image/social/facebook.svg" alt="" srcset="">
                          </a>
                          <a href="https://www.instagram.com/cudua.academy/" target="_blank" class="academy-social">
                            <img src="~/assets/business/image/social/instagram.svg" alt="" srcset="">
                          </a>
                          <a href="https://www.youtube.com/channel/UCEcp-nF6RxN3SdIS83BTHXQ" target="_blank" class="academy-social">
                            <img src="~/assets/business/image/social/youtube.svg" alt="" srcset="">
                          </a>
                        </div>
                       
                      </div>

                    </div>
                    <BOTTOMNAV />
                    <Nuxt />
                </div>
        </div>
    </div>
  </div>
</template>

<script>

import TOPHEADER from '~/layouts/business/top-navigation.vue';
import SIDENAV from '~/layouts/business/side-bar.vue';
import BOTTOMNAV from '~/layouts/business/bottom-nav.vue';
export default {
    components: {
        TOPHEADER, SIDENAV, BOTTOMNAV
    }
}
</script>
<style src="~/assets/business/css/app.css" scoped></style>
