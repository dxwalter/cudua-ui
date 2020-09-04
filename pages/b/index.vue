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
                        <div class="alert alert-info notification-alert" v-show="productListingCount > 0">
                            <div>Invite three businesses to register and get one month basic plan for free</div>
                            <nuxt-link to="/b/invite" class="btn btn-small btn-white">Get started</nuxt-link>
                        </div>
                    </div>
                    <div class="main-content">


                        <div class="page-header with-action">
                            <h4>Product listing</h4>
                            <div class="business-product-search-action">
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <use xlink:href="~/assets/business/image/all-svg.svg#searchGlass"></use>
                                </svg>
                                <span>Search</span>
                            </div>
                            <!-- If owner has not uploaded any product, this search box should be hidden because they have nothing to search -->
                            <div class="search-area display-none">
                                <form action="">
                                    <input type="text" name="" id="" class="search-form grey-bg-color" placeholder="Search for products">
                                </form>
                            </div>
                        </div>

                        <div class="no-account-category" v-show="!productListingCount && !pageLoader">
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

import { mapActions, mapGetters, mapMutations } from 'vuex';
import { GET_PRODUCT_BY_BUSINESS_ID } from '~/graphql/product';

export default {
    name: "BUSINESSPRODUCTLISTING",
    components: {
        TOPHEADER, SIDENAV, BOTTOMNAV, PAGELOADER
    },
    data: function() {
        return {
            pageLoader: true,
            productListingCount: 0,
            businessId: "",
            accessToken: "",
            page: 1,
        }
    },
    created () {
        if (process.client) {
            this.GetBusinessDataFromStore();
        }
    },
    methods: {
        ...mapGetters({
            'GetCustomerData': 'customer/GetCustomerDetails',
            'GetBusinessData': 'business/GetBusinessDetails'
        }),
        GetBusinessDataFromStore: function () {
            let businessData = this.GetBusinessData();
			this.businessId = businessData.businessId
			let customerData = this.GetCustomerData();
            this.accessToken = customerData.userToken
        },
        getAllProductFromBusiness: async function () {

            let variables = {
                businessId: this.businessId,
                page: this.page,
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }

            let query = await this.$performGraphQlQuery(this.$apollo, GET_PRODUCT_BY_BUSINESS_ID, variables, context);

			if (query.error == true) {
				this.$initiateNotification('error', 'Failed request', query.message);
                return
			}

            let result = query.result.data.GetProductsUsingBusinessId;

            this.productListingCount = result.products.length
            
            if (result.products.length == 0) return


            let productArray = [];

            for (let x of result.products) {
                productArray.push({
                    
                })
            }


        }
    },
    async mounted () {
        await this.getAllProductFromBusiness()
        this.pageLoader = false
    }
}
</script>