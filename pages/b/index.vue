<template>
    <div class="business" :key="componentKey">
        <div class="body-container">
            <TOPHEADER></TOPHEADER>
            <nuxt/>
            <div class="content-container">
                <SIDENAV></SIDENAV>
                <nuxt />
                <div class="content-area">

                    <!-- pageLoader -->
                    <PAGELOADER v-show="pageLoader"></PAGELOADER>
                    <!-- subscription -->
                    <SUBSCRIPTION></SUBSCRIPTION>
                
                    <div class="main-content">

                        <div class="page-header with-action">
                            <h4>Product listing</h4>
                            <div class="business-product-search-action" id="" @click="showSearchBar()" v-show="productListingCount > 4">
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <use xlink:href="~/assets/business/image/all-svg.svg#searchGlass"></use>
                                </svg>
                                <span>Search</span>
                            </div>
                            <!-- If owner has not uploaded any product, this search box should be hidden because they have nothing to search -->
                            <div class="search-area" id="productSearchArea" v-show="productListingCount > 4">
                                <input type="text" name="" class="search-form grey-bg-color" placeholder="Search your shop" id="productSearchInput" v-model="productSearchString">
                                <button id="tabLink" class="close-component-search">
                                    <input type="checkbox" class="dropdownCheckBox" @click="hideSearchBar()">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                        <use xlink:href="~/assets/customer/image/all-svg.svg#times"></use>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- product search -->

                        <div class="accordion grey-bg-color border-radius-4 search-result-container " id="searchResultContainer"
                        v-bind:class="{showEffect: productSearchString.length > 1}"
                        >
                        <div class="search-result-header">
                            <div class="search-result-keyword">
                                <span>Search result for </span>
                                <span>- {{productSearchString}}</span>
                            </div>
                            <button class="close-modal-btn hide-for-mobile" @click="productSearchString = ''">
                                <input type="checkbox" name="" class="dropdownCheckBox" data-single-tab="singleTab" data-target="searchResultContainer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                    <use xlink:href="~/assets/business/image/all-svg.svg#times"></use>
                                </svg>
                            </button>
                        </div>

                        <div class="product-search-loader" v-show="!initiateSearch">
                            <div class="show-loader">
                                <div class="loader-action"><span class="loader"></span></div>
                            </div>
                        </div>

                        <!-- this is when all the products have been listed -->
                        <div v-show="noResultFound" class="alert alert-info mg-top-16  notification-alert add-radius">
                            No result was found for "{{productSearchString}}"
                        </div>

                        <div class="row" v-show="initiateSearch">
                                    
                            <n-link :to="`/b/product/${product.id}`" class="col-xs-6 col-sm-6 col-md-4 col-lg-3"
                                v-for="(product, index) in returnSearchResult" :key="index"
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
                    </div>
                    <!-- end of product search -->

                        <div class="no-account-category" v-show="!productListingCount && !pageLoader && page == 1 && finalProduct">
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
                        <div class="load-more-action move-center mg-top-16" v-show="productListingCount == 12">
                            <button class="btn btn-white" id="loadMoreProducts" @click="loadMoreProducts()">
                                Load more products
                                <div class="loader-action"><span class="loader"></span></div>
                            </button>
                        </div>

                        <!-- this is when all the products have been listed -->
                        <div v-show="finalProduct && productListingCount" class="alert alert-info mg-top-16  notification-alert add-radius">
                            That was all the products in your store
                            <n-link to="/b/product/add-product" class="btn btn-white btn-small">Upload a new product</n-link>
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
import SUBSCRIPTION from '~/components/business/subscription/subscription.vue'

import { mapActions, mapGetters, mapMutations } from 'vuex';
import { 
    GET_PRODUCT_BY_BUSINESS_ID,
    SHOP_ADMIN_SEARCH_PRODUCT_IN_MANAGER } from '~/graphql/product';

export default {
    name: "BUSINESSPRODUCTLISTING",
    components: {
        TOPHEADER, SIDENAV, BOTTOMNAV, PAGELOADER, SUBSCRIPTION
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

            // force component re-render
            componentKey: 0,

            // product search
            productSearchString: "",
            initiateSearch: 0,
            setTimeoutForProductSearch: null,
            noResultFound: 0,
            productSearchResult: ""
        }
    },
    computed: {
        returnAllproducts () {
            return this.allProducts
        },
        returnSearchResult () {
            return this.productSearchResult
        }
    },
    created () {
        if (process.client) {
            this.GetBusinessDataFromStore();
        }
    },
    watch: {
        productSearchString: function () {
            if (this.productSearchString.length == 0) return
            this.searchProductInShop()
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

        },
        showSearchBar: function(){
            // show product search area
            let target = document.getElementById("productSearchArea");
            target.style.display = "flex";

            // focus form
            document.getElementById('productSearchInput').focus()
        },
        hideSearchBar: function () {
            // show product search area
            let target = document.getElementById("productSearchArea");
            target.style.display = "none";

            // focus form
            document.getElementById('productSearchInput').blur() ;
            this.productSearchString = ""
        },
        reRenderComponent: function () {
            this.$nextTick(() => {
                this.componentKey += 1
            })
        },
        clearTimeOut: function (timerOut) {
            clearTimeout(timerOut)
        },
        searchProductInShop: async function () {

            if (this.productSearchString.length <= 1) return

            // when start search
            this.initiateSearch = 0;

            // reset no result found;
            this.noResultFound = 0

            // clear previous time out
            this.clearTimeOut(this.setTimeoutForProductSearch)

            this.setTimeoutForProductSearch = setTimeout( async() => {

                let variables = {
                    businessId: this.businessId,
                    keyword: this.productSearchString
                }

                let context = {
                    headers: {
                        'accessToken': this.accessToken
                    }
                }

                let query = await this.$performGraphQlQuery(this.$apollo, SHOP_ADMIN_SEARCH_PRODUCT_IN_MANAGER, variables, context);
                
                // when search ends
                this.initiateSearch = 1
                this.productSearchResult = []

                if (query.error == true) {
                    this.$initiateNotification('error', 'Failed request', query.message);
                    return
                }

                let result = query.result.data.BusinessSearchProduct;

                if (result.success == false) {
                    this.$initiateNotification("error", "Failed request", result.message)
                    return
                }

                if (result.products == null) {
                    this.noResultFound = 1
                    return
                }

                let searchResultArray = []

                for (let x of result.products) {
                    searchResultArray.push({
                        id: x.id,
                        name: x.name,
                        price: x.price,
                        image: this.$formatProductImageUrl(this.businessId, x.primaryImage, "thumbnail"),
                    })
                }


                this.productSearchResult = searchResultArray

            }, 2000)

        }
    },
    async mounted () {
        await this.getAllProductFromBusiness()
        this.pageLoader = false
        this.reRenderComponent()
    },
    destroyed () {
        clearTimeout(this.setTimeoutForProductSearch);
    }
}
</script>
<style scoped>
.add-radius {
    border-radius: 4px !important;
}
.product-search-loader {
    height: 50px;
    width: 100%;
}
.product-search-loader .show-loader {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.show-loader .loader-action {
    display: block;
    background-color: #f3f3f3;
}
.loader-action .loader {
    border: 2px solid rgba(0,0,0,.5);
    width: 30px;
    height: 30px;
    border-top: 2px solid transparent;
}
.hide-for-mobile {
    display: none;
}
@media (min-width: 959px) {
    .hide-for-mobile {
        display: flex;
    }
}
.page-header.with-action h4 {
    margin-bottom: unset;
    align-self: center;
}
.page-header {
    margin-bottom: 32px !important;
}
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