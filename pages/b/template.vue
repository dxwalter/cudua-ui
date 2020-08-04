<template>
    <div class="body-container">
        <TOPHEADER />
        <nuxt/>
        <div class="content-container">
            <SIDENAV />
            <nuxt />
                <div class="content-area">
                    <div class="main-content">



                    </div>
                    <BOTTOMNAV />
                    <nuxt/>
                </div>
        </div>
    </div>
</template>

<script>

import TOPHEADER from '~/layouts/business/top-navigation.vue';
import SIDENAV from '~/layouts/business/side-bar.vue';
import BOTTOMNAV from '~/layouts/business/bottom-nav.vue';
import LOADER from '~/layouts/business/loader.vue';
export default {
    components: {
        TOPHEADER, SIDENAV, BOTTOMNAV, LOADER
    }
}
</script>

