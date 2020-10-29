<template>
    <div class="business">
        <div class="body-container">
            <TOPHEADER></TOPHEADER>
            <Nuxt />
            <div class="content-container">
                <SIDENAV></SIDENAV>
                <Nuxt />
                    <div class="content-area grey-bg-color">
                    <!-- pageLoader -->
                        <PAGELOADER v-show="pageLoader"></PAGELOADER>
                        <Nuxt />

                    <div v-show="!subcategoryId">
                        <div class="alert alert-danger notification-alert">
                            <div>An error occurred. The url you entered is broken</div>
                            <nuxt-link to="/b/categories" class="btn btn-small btn-white">Continue</nuxt-link>
                        </div>
                    </div>
                        
                        <div class="main-content">
                            <div class="page-header" v-show="subcategoryName">
                                <h4>{{subcategoryName}} subcategory</h4>
                            </div>

                            <div>
                                <!-- main content goes in here -->
                                <div class="row">
                                            
                                    <n-link :to="`/b/product/${product.id}`" class="col-xs-6 col-sm-6 col-md-4 col-lg-3"
                                        v-for="(product, index) in returnAllproducts" :key="index"
                                    >
                                        <div class="product-card">
                                            <div class="product-card-image">
                                                <img :data-src="product.image"  :alt="`${product.name}'s image`" v-lazy-load>
                                                <div class="chip small-chip" v-show="product.hide">Hidden</div>
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
								<div class="load-more-action move-center mg-top-16" v-show="lazyLoad">
									<button class="btn btn-white" id="loadMoreProducts" @click="loadMoreProducts()">
										Load more products
										<div class="loader-action"><span class="loader"></span></div>
									</button>
								</div>

                                <!-- show this if a pagination (load more) request was carried out and no product was returned.-->
								<div v-show="!lazyLoad && page > 1" class="alert alert-info mg-top-16">
									That was all the products in {{subcategoryName}} subcategory
								</div>
                                
                                <!-- show when the first request was carried out and no product was returned -->
                                <div class="no-account-category" v-show="!lazyLoad && page == 1">
                                    <!-- when no category has been added to the account -->
                                    <h2>No product has been added to this subcategory</h2>
                                    <p>Start uploading the products that you want to sell</p>
                                    <n-link :to="`/b/product/add-product?sub=${subcategoryId}&cat=${categoryId}`" class="btn btn-primary btn-lg">Upload a product</n-link>
                                </div>
                                
                            </div>


                        </div>
                        <BOTTOMNAV />
                        <Nuxt />
                    </div>
            </div>
        </div>

            <div class="filter-btn-container"  v-show="returnAllproducts.length > 0">
                <nuxt-link :to="`/b/product/add-product?sub=${subcategoryId}&cat=${categoryId}`" class="close-modal-btn btn-icon btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <use xlink:href="~/assets/business/image/all-svg.svg#plusSign"></use>
                </svg>
                </nuxt-link>
            </div>
    </div>
</template>

<script>

import TOPHEADER from '~/layouts/business/top-navigation.vue';
import SIDENAV from '~/layouts/business/side-bar.vue';
import BOTTOMNAV from '~/layouts/business/bottom-nav.vue';
import PAGELOADER from '~/components/loader/loader.vue'

import { mapActions, mapGetters, mapMutations } from 'vuex';
import { GET_PRODUCT_BY_SUBCATEGORY } from '~/graphql/product';

export default {
    name: "SUBCATEGORYPRODUCTLISTING",

    components: {
        TOPHEADER, SIDENAV, BOTTOMNAV, PAGELOADER
    },
    data: function() {
        return {
            pageLoader: true,
            businessId: "",
            accessToken: "",
            allProducts: "",
            subcategoryId: "",
            categoryId: "",
            subcategoryName: "",
            page: 1,
            lazyLoad: false
        }
    },
    computed: {
        returnAllproducts () {
            return this.allProducts
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
        getAllProductsFromSubcategory: async function(pageData = false) {

            let variables = {
                businessId: this.businessId,
                subcategoryId: this.subcategoryId,
                page: this.page
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }

            let query = await this.$performGraphQlQuery(this.$apollo, GET_PRODUCT_BY_SUBCATEGORY, variables, context);

			if (query.error == true) {
				this.$initiateNotification('error', 'Failed request', query.message);
                return
			}

			let result = query.result.data.GetProductBysubCategory;

			if (result.success == false) {
				this.$initiateNotification('error', 'Failed request', result.message);
                return
            } 
            
            this.lazyLoad = result.products.length == 12 ? true : false

            // if no result was provided end execution
            if (result.products.length == 0) return



            if (pageData == false) {
                let newDataObject = [];

                for (const [index, x] of result.products.entries()) {
                    if (index == 0) {
                        this.subcategoryName = !this.subcategoryName.length ? x.subcategory.subcategoryName : ""
                    }
                    newDataObject.push({
                        name: x.name,
                        id: x.id,
                        price: this.$numberNotation(x.price),
                        image: this.$formatProductImageUrl(this.businessId, x.primaryImage, "thumbnail"),
                        review: x.reviewScore,
                        hide: x.hide
                    })
                }

                this.allProducts = newDataObject

            } else {
                for (const [index, x] of result.products.entries()) {
                    
                    this.allProducts.push({
                        name: x.name,
                        id: x.id,
                        price: this.$numberNotation(x.price),
                        image: this.$formatProductImageUrl(this.businessId, x.primaryImage, "thumbnail"),
                        review: x.reviewScore
                    })
                }
            }

            this.page += 1

            return

        },
        loadMoreProducts: async function () {

            let target = document.getElementById("loadMoreProducts");

            target.disabled = true;

            await this.getAllProductsFromSubcategory(true)

            target.disabled = false

        }
    },
    created () {
        if (process.client) {
            this.subcategoryId = this.$route.params.id;
            let catId = this.$route.query.cat
            if (catId.length > 0 ) {
                this.categoryId = catId
            }
            this.GetBusinessDataFromStore();
        }
    },
    async mounted () {    
        if (process.client) {
            await this.getAllProductsFromSubcategory();
        }
        this.pageLoader = false
    }
}
</script>
<style scoped>
.small-chip {
    padding: 7px 14px;
    font-size: 12px;
    background-color: white;
    position: absolute;
    right: 0;
    top: 8px;
}
.product-card-image {
    position: relative;
}
</style>