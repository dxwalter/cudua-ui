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
                          <h1 class="lg-header">Welcome to Cudua Academy</h1>
                        </div>

                        <div class="description mg-bottom-32">Cudua academy is a free and private online learning community on Telegram. It is focused on teaching business owners that uses Cudua to sell their products how to grow their business online using the tools that Cudua provides. Topics in areas of 
                          <span>Sales & marketing</span>,
                          <span>Content development</span>,
                          <span>Customer service</span>, and
                          <span>Branding</span> are discussed.
                        </div>

                        <div class="description mg-bottom-16">Join our telegram channel.</div>

                        <a href="https://t.me/joinchat/AAAAAFJi4rrqH7ajTNKs1w" target="_blank" class="btn btn-primary btn-lg">Join now for free</a>
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
