<template>
  <div class="customer">
    <div class="body-container grey-bg-color">

      <!-- beginning of navigation container -->
        <div class="nav-container">
            <MOBILESEARCH></MOBILESEARCH>
            <Nuxt />
            <DESKTOPNAVGATION></DESKTOPNAVGATION>
            <Nuxt />
            <MOBILENAVIGATION></MOBILENAVIGATION>
            <Nuxt />
        </div>
        
        <!-- pageLoader -->
        <PAGELOADER v-show="pageLoader"></PAGELOADER>
        <Nuxt />

        <div class="content-container" v-show="!pageLoader">
            <!-- header area -->
            <div class="section-header" v-show="!pageLoader && !isNetworkError">
            <h4>Cleared order</h4>
            </div>
            
            <!-- beginning of cart listing -->
            <div class="cart-listing-area" v-show="!pageLoader">

                <div v-show="returnOrderDetails.length > 0">

                    <div class="order-details-container"  v-for="(details, index) in returnOrderDetails" :key="index">
                        <div class="order-details-header cleared-header">

                            <div class="order-details-business-info">
                                <div class="order-details-logo">
                                    <div class="no-logo-review" v-show="!details.businessData.logo">
                                        {{getNameLogo(details.businessData.businessName)}}
                                    </div>
                                        <img :src="`${getBusinessLogo(details.businessData.businessId, details.businessData.logo)}`" :alt="`${details.businessData.businessName}'s logo`" v-show="details.businessData.logo">
                                    </div>
                               
                                    <h4 class="order-details-business-name">
                                        <a href="#" class="">{{details.businessData.businessName}}</a>
                                        <div class="order-details-status">
                                            <div class="order-dot cleared"></div>
                                            <div class="stat">Cleared order</div>
                                        </div>
                                    </h4>
                            </div>

                            <div class="cleared-review-action">
                                <n-link :to="`/${details.businessData.username}/review/`" class="btn btn-primary btn-md">
                                    Write business review
                                </n-link>
                            </div>
                        </div>


                        <div class="md-flex">
                            <!-- products -->
                            <div class="col-md-12 col-lg-12">
                                
                                <div class="order-details-product-container">
                                    <!-- start -->
                                    <div class="order-details-product-list flex-column">

                                        <div class="card cart-card" v-for="(productListing, productIndex) in details.orderProduct" :key="productIndex">
                                            <div class="item-basic-info">
                                                <a href="#" class="cart-avatar">
                                                    <img :data-src="`${formatproductImage(productListing.businessId, productListing.image)}`" :alt="`${productListing.name}'s  picture`" v-lazy-load>
                                                </a>
                                                <div class="price-and-name">
                                                    <a href="#">{{productListing.name}}</a>
                                                    <div class="price">₦ {{formatNumber(productListing.price)}}</div>
                                                    <div class="reviews">
                                                        <StarRating :score=productListing.ratingScore></StarRating>
                                                    </div>
                                                </div>
                                            </div>
                        
                                            <div class="cleared-order-review">
                                                <div class="cart-action-area">
                                                    <div class="mobile-actions">
                                                        <n-link :to="`/p/${productListing.productId}/review`" class="btn btn-white btn-small">
                                                            Write product review
                                                        </n-link>
                                                    </div>
                                                </div>
                                            </div>
                        
                                        </div>
                        
                                    </div>
                                    <!-- end -->
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <!-- end of cart listing -->

            <!-- when an error occurs, show this -->
            <div class="link-error-area" v-show="isNetworkError && !pageLoader">
                <img src="~/static/images/server-error.svg" alt="">
                <div class="error-cause" v-html="errorReason">{{errorReason}}</div>
                <div class="action-area">
                    <n-link to="/" class="btn btn-primary">Home page</n-link>
                </div>
            </div>
            <!-- end of error area -->

        </div>
        <!-- end of content container -->

        <!-- footer area -->
        <BOTTOMADS></BOTTOMADS>
        <Nuxt />

        <CUSTOMERFOOTER></CUSTOMERFOOTER>
        <Nuxt />
        
    </div>
  </div>
</template>

<script>
import MOBILENAVIGATION from '~/layouts/customer/mobile-navigation.vue';
import DESKTOPNAVGATION from '~/layouts/customer/desktop-navigation.vue';
import MOBILESEARCH from '~/layouts/customer/mobile-search.vue';
import BOTTOMADS from '~/layouts/customer/buttom-ads.vue';
import CUSTOMERFOOTER from '~/layouts/customer/customer-footer.vue';
import PAGELOADER from '~/components/loader/loader.vue';

import { mapActions, mapGetters, mapMutations } from 'vuex';


import { 
    CUSTOMER_GET_ORDER_DETAILS
} from '~/graphql/order';

import StarRating from '~/plugins/vue-star-rating.client.vue'

export default {
    name: "CUSTOMERCLEAREDORDERS",
    components: {
      DESKTOPNAVGATION, MOBILENAVIGATION, MOBILESEARCH, BOTTOMADS, CUSTOMERFOOTER, PAGELOADER, StarRating
    },
    data: function() {
        return {
            pageLoader: true,
            accessToken: "",
            orderId: "",
            isNetworkError: 0,
            errorReason: "",
            allOrders: [],

        }
    },
    computed: {
		...mapGetters({
            'GetLoginStatus': 'customer/GetLoginStatus',
            'GetCustomerDetails': 'customer/GetCustomerDetails'
        }),
		LoginStatus () {
			return this.GetLoginStatus
        },
        returnOrderDetails () {
            return this.allOrders
        }
    },
    methods: {
        setCustomerData: function () {
            this.accessToken = this.GetCustomerDetails.userToken
        },
		getNameLogo: function (businessName) {
			if (process.browser) {
				let name =  this.$convertNameToLogo(businessName)
				return name
			}
        },
        getBusinessLogo: function (businessId, logoPath) {
            return this.$getBusinessLogoUrl(businessId, logoPath)
        },
        formatNumber: function (number) {
            return this.$numberNotation(number)
        },
        formatproductImage: function (businessId, imagePath) {
            return this.$formatProductImageUrl(businessId, imagePath, "thumbnail")
        },
        calculateTotalPrice: function (allProducts, deliveryCharge) {
            let price = 0

            for (let x of allProducts) {
                price = price + (parseInt(x.quantity, 10) * parseInt(x.price, 10));
            }

            return this.formatNumber((price + deliveryCharge))
        },
        getOrderDetails: async function () {

            this.orderId = this.orderId.toUpperCase();

            let variables = {
                orderId: this.orderId
            }

            let context = {
                headers: {
                    accessToken: this.accessToken
                }
            }

            let request = await this.$performGraphQlQuery(this.$apollo, CUSTOMER_GET_ORDER_DETAILS, variables, context);

            if (request.error) {
                this.isNetworkError = 1
                this.errorReason = request.message
                this.$initiateNotification('error', 'Failed request', request.message);
                return 
            }

            let result = request.result.data.GetOrderItemsForCustomer;

            if (result.success == false) {
                this.isNetworkError = 1
                this.errorReason = result.message
                this.$initiateNotification('error', 'Oops!', result.message);
                return    
            }

            
            this.allOrders = result.orderDetails

            this.$initiateNotification('success', '', result.message);

        }
    },
    created: async function () {
		if (process.browser) {

            let status = this.LoginStatus

            if (status == false) {
                return this.$router.push('/')
            }  

            this.setCustomerData();

            this.orderId = this.$route.params.id

            if(this.orderId == undefined || this.orderId.length == 0) {
                return this.$router.push('/c/orders/')
            } 

            this.getOrderDetails()

		}

    },
    mounted () {
        this.pageLoader = false
    }
}
</script>