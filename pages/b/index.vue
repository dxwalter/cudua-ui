<template>
    <div class="business">
        <div class="body-container">
            <TOPHEADER />
            <nuxt/>
            <div class="content-container">
                <SIDENAV />
                <nuxt />
                <div class="content-area">

                    <!-- pageLoader -->
                    <PAGELOADER v-if="pageLoader" />
                    <nuxt />
                    
                    <div>
                        <div class="alert alert-info notification-alert">
                            <div>Invite three businesses to register and get one month basic plan for free</div>
                            <nuxt-link to="/b/invite" class="btn btn-small btn-white">Get started</nuxt-link>
                        </div>
                    </div>
                    <div class="main-content">


                        <div class="page-header with-action">
                            <h4>Product listing</h4>

                            <!-- If owner has not uploaded any product, this search box should be hidden because they have nothing to search -->
                            <div class="search-area">
                                <form action="">
                                    <input type="text" name="" id="" class="search-form grey-bg-color" placeholder="Search for products">
                                </form>
                            </div>
                        </div>

                        <div class="no-account-category">
                            <!-- when no category has been added to the account -->
                            <h2>No product has been added to your store</h2>
                            <p>Start uploading the products that you want to sell</p>
                            <n-link to="/b/product/add-product" class="btn btn-primary btn-lg">Upload a product</n-link>
                        </div>


                    </div>
                    <BOTTOMNAV />
                    <nuxt/>
                </div>
            </div>
        </div>
        <div class='onesignal-customlink-container'></div>
    </div>

</template>

<script>

import TOPHEADER from '~/layouts/business/top-navigation.vue';
import SIDENAV from '~/layouts/business/side-bar.vue';
import BOTTOMNAV from '~/layouts/business/bottom-nav.vue';
import PAGELOADER from '~/components/loader/loader.vue'
export default {
    components: {
        TOPHEADER, SIDENAV, BOTTOMNAV, PAGELOADER
    },
    data: function() {
        return {
            pageLoader: true
        }
    },
    methods: {

    },
    mounted () {
        setTimeout(() => {
            this.pageLoader = false
        }, 5000);
    }
}
</script>