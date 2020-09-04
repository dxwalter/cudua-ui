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
                        <div class="alert alert-info notification-alert" v-show="page && allProducts.length > 1">
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

                        <div class="no-account-category" v-show="!productListingCount && !pageLoader && page == 1">
                            <!-- when no category has been added to the account -->
                            <h2>No product has been added to your store</h2>
                            <p>Start uploading the products that you want to sell</p>
                            <n-link to="/b/product/add-product" class="btn btn-primary btn-lg">Upload a product</n-link>
                        </div>

                        <!-- main content goes in here -->
                        <div class="row">
                                    
                            <n-link :to="`/b/product/${product.id}`" class="col-xs-6 col-sm-6 col-md-4 col-lg-3"
                                v-for="(product, index) in returnAllproducts" :key="index"
                            >
                                <div class="product-card">
                                    <div class="product-card-image">
                                        <img :data-src="product.image"  :alt="`${product.name}'s image`" v-lazy-load>
                                    </div>
                                    <div class="product-card-details">
                                        <div class="product-name">
                                            {{product.name}}
                                        </div>
                                        <div class="product-price">₦ {{product.price}}</div>
                                    </div>
                                </div>
                            </n-link>

                        </div>

                        <!-- show this button when the total number of results returned is 12 -->
                        <div class="load-more-action move-center mg-top-16" v-if="productListingCount == 12">
                            <button class="btn btn-white" id="loadMoreProducts" @click="loadMoreProducts()">
                                Load more products
                                <div class="loader-action"><span class="loader"></span></div>
                            </button>
                        </div>

                        <!-- this is when all the products have been listed -->
                        <div v-show="finalProduct" class="alert alert-info mg-top-16">
                            That was all the products in your store
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
            allProducts: "",
            finalProduct: false,
            page: 1,
        }
    },
    computed: {
        returnAllproducts () {
            return this.allProducts
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
        getAllProductFromBusiness: async function (pageData = false) {

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

            if (result.products.length <  12) this.finalProduct = true
            if (result.products.length == 0) return

            if (!pageData) {

                let productArray = [];

                for (let x of result.products) {
                    productArray.push({
                        id: x.id,
                        name: x.name,
                        price: this.$numberNotation(x.price),
                        image: this.$formatProductImageUrl(this.businessId, x.primaryImage, "thumbnail"),
                        hide: x.hide
                    })
                }

                this.allProducts = productArray

            } else {

                for (const [index, x] of result.products.entries()) {
                    
                    this.allProducts.push({
                        name: x.name,
                        id: x.id,
                        price: this.$numberNotation(x.price),
                        image: this.$formatProductImageUrl(this.businessId, x.primaryImage, "thumbnail"),
                        hide: x.hide
                    })
                }

            }

            this.page += 1
            return


        },
        loadMoreProducts: async function () {

            let target = document.getElementById("loadMoreProducts");

            target.disabled = true;

            await this.getAllProductFromBusiness(true)

            target.disabled = false

        }
    },
    async mounted () {
        await this.getAllProductFromBusiness()
        this.pageLoader = false
    }
}
</script>