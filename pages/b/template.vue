<template>
    <div class="body-container">
        <TOPHEADER />
        <Nuxt />
        <div class="content-container">
            <SIDENAV />
            <Nuxt />
                <div class="content-area">
                    <div class="main-content">



                    </div>
                    <BOTTOMNAV />
                    <Nuxt />
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
