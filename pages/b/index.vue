<template>
  
    <div class="body-container">
    <TOPHEADER />
    <nuxt/>
    <div class="content-container">
        <SIDENAV />
        <nuxt />
        <div class="content-area">
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

