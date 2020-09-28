<template>
  <div class="customer">
    <div class="body-container grey-bg-color">

      <!-- beginning of navigation container -->
        <div class="nav-container">
            <MOBILESEARCH></MOBILESEARCH>
            <DESKTOPNAVGATION></DESKTOPNAVGATION>
            <MOBILENAVIGATION></MOBILENAVIGATION>
        </div>

        <!-- pageLoader -->
        <PAGELOADER v-show="pageLoader"></PAGELOADER>

        <div class="content-container">
            <!-- bookmark area -->
            <div class="section-header" v-show="!pageLoader"><h4>Saved items </h4></div>

            <div class="bookmark-listing-area" v-show="!pageLoader">
                <div class="row">

                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4" v-for="(product, index) in returnProducts" :key="index" :id="`product${product.id}`">
                        <div class="card bookmark-big-card">
                            <n-link :to="`/p/${product.id}`" class="d-flex">
                            <div class="saved-item-image">
                                <img :data-src="`${product.image}`" alt="" v-lazy-load>
                            </div>
                            <div class="bookmark-card-details">
                                <h4 class="saved-product-name">{{product.name}}</h4>
                                <div class="saved-product-price">₦ {{product.price}}</div>
                                <div class="saved-item-review">
                                    <StarRating :score=product.reviewScore></StarRating>
                                </div>
                            </div>
                            </n-link>
                        <div class="card-footer padding-16">
                            <div class="footer-action">
                                <button class="btn btn-primary btn-md" :id="`move${product.id}`" @click="moveProductToCart(product.id)">
                                    Move to cart
                                    <div class="loader-action"><span class="loader"></span></div>
                                </button>
                                <button class="btn btn-light-grey btn-md" :id="`remove${product.id}`" @click="removeProduct(product.id)">
                                    Remove
                                    <div class="loader-action"><span class="loader"></span></div>
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>

                </div>

                <!-- when no product is found, show this -->
                <div class="link-error-area" v-show="noProduct == 1">
                    <img src="~/static/images/product.svg" alt="" class="mg-bottom-32">
                    <div class="error-cause" v-html="reasonForError">{{reasonForError}}</div>
                </div>
                <!-- end of error area -->

                <!-- when an error occurs, show this -->
                <div class="link-error-area" v-show="networkError">
                    <img src="~/static/images/server-error.svg" alt="">
                    <div class="error-cause" v-html="reasonForError">{{reasonForError}}</div>
                </div>
                <!-- end of error area -->
                
                <div class="load-more-action move-center" v-show="productCount == 12">
                    <button class="btn btn-white" @click="loadMoreContent()" id="loadMoreContent">
                        Load more products
                        <div class="loader-action"><span class="loader"></span></div>
                    </button>

                </div>

            </div>

        </div>
      <!-- end of content container -->

      <!-- footer area -->

      <BOTTOMADS></BOTTOMADS>

      <CUSTOMERFOOTER></CUSTOMERFOOTER>

    </div>
  </div>
</template>

<script>
import MOBILENAVIGATION from '~/layouts/customer/mobile-navigation.vue'
import DESKTOPNAVGATION from '~/layouts/customer/desktop-navigation.vue'
import MOBILESEARCH from '~/layouts/customer/mobile-search.vue'
import BOTTOMADS from '~/layouts/customer/buttom-ads.vue'
import CUSTOMERFOOTER from '~/layouts/customer/customer-footer.vue'
import PAGELOADER from '~/components/loader/loader.vue';

import StarRating from '~/plugins/vue-star-rating.client.vue'

import { mapActions, mapGetters, mapMutations } from 'vuex';

import {
    GET_SAVED_PRODUCTS,
    REMOVE_PRODUCT_FROM_SAVED_PRODUCTS,
    MOVE_PRODUCT_TO_CART
}  from '~/graphql/product'

export default {
    name: "SAVEDITEMS",
    components: {
      DESKTOPNAVGATION, MOBILENAVIGATION, MOBILESEARCH, BOTTOMADS, CUSTOMERFOOTER, PAGELOADER, StarRating
    },
    data: function() {
        return {
            pageLoader: true,
            accessToken: "",
            page: 1,

            networkError: 0,
            noProduct: 0,
            reasonForError: "",
            productList: [],
            productCount: 0
        }
    },
    computed: {
        returnProducts () {
            return this.productList
        },
		LoginStatus () {
			return this.GetLoginStatus
		}
    },
    created: async function () {
		if (process.browser) {
            let status = this.LoginStatus()
            if (status == false) {
                return this.$router.push('/')
            }
            this.GetCustomerDataFromStore();

            this.getSavedItems()
		}
    },
    methods: {
		...mapGetters({
            'GetLoginStatus': 'customer/GetLoginStatus',
            'GetCustomerData': 'customer/GetCustomerDetails',
        }),
        getSavedItems: async function (page = 1) {

            let variables = {
                page: page
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }

            let request = await this.$performGraphQlQuery(this.$apollo, GET_SAVED_PRODUCTS, variables, context);

            if (request.error && page == 1) {
                this.reasonForError = request.message
                this.networkError = 1
                return
            } else if(request.error && page > 1) {
                this.$initiateNotification('error', 'Failed request', request.message);
                return
            } 

            let result = request.result.data.GetSavedItems;


            if ((!result.success || result.products == null ) && page == 1) {
                this.reasonForError = result.message
                this.noProduct = 1
                return
            } else if (result.products == null && page > 1) {
                this.$initiateNotification('info', '', result.message);
                return
            }

            

            for (let x of result.products) {
                this.productList.push({
                    image: this.$formatProductImageUrl(x.businessId, x.image, "thumbnail"),
                    name: x.name,
                    id: x.productId,
                    price: this.$numberNotation(x.price),
                    reviewScore: x.review,
                    businessId: x.businessId
                })
            }

            this.productCount = result.products.length

        },
        loadMoreContent: async function () {
            this.page = this.page + 1;
            let target = document.getElementById('loadMoreContent');

            target.disabled = true

            await this.getSavedItems(this.page);

            target.disabled = false

        },
        removeProduct: async function (productId) {
            
            let target = document.getElementById('remove'+productId);

            let variables = {
                productId: productId
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }


            target.disabled = true
            let request = await this.$performGraphQlQuery(this.$apollo, REMOVE_PRODUCT_FROM_SAVED_PRODUCTS, variables, context);
            target.disabled = false

            if (request.error) {
                this.$initiateNotification('error', 'Failed request', request.message);
                return  
            }

            let result = request.result.data.RemoveProductFromSavedProducts;

            if (result.success == false) {
                return this.$initiateNotification('error', 'Oops!', result.message);
            }

            this.$showToast(result.message, 'success');

            document.getElementById('product'+productId).style.display = 'none'
            

        },
        moveProductToCart: async function (productId) {
            
            let target = document.getElementById('move'+productId);

            let variables = {
                productId: productId
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }


            target.disabled = true
            let request = await this.$performGraphQlQuery(this.$apollo, MOVE_PRODUCT_TO_CART, variables, context);
            target.disabled = false

            if (request.error) {
                this.$initiateNotification('error', 'Failed request', request.message);
                return  
            }

            let result = request.result.data.MoveToCart;

            if (result.success == false) {
                return this.$initiateNotification('error', 'Oops!', result.message);
            }

            this.$initiateNotification('success', '', result.message);

            document.getElementById('product'+productId).style.display = 'none'
            

        },
        GetCustomerDataFromStore: function () {
			let customerData = this.GetCustomerData();
            this.accessToken = customerData.userToken
        },
    },
    mounted () {
        this.pageLoader = false
    }
}
</script>