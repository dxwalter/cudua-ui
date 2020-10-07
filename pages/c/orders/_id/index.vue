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

        <div class="content-container" v-show="!pageLoader">
            <!-- header area -->
            <div class="section-header">
            <h4>Order details for {{orderId}}</h4>
            </div>
            
            <!-- beginning of cart listing -->
            <div class="cart-listing-area mg-top-24 mg-bottom-32">

                <div v-show="returnOrderDetails.length > 0">

            
                    <div class="order-details-container" v-for="(details, index) in returnOrderDetails" :key="index">
                        <div class="order-details-header">
                            <div class="order-details-business-info">
                                <div class="order-details-logo">
                                    <div class="no-logo-review" v-show="!details.businessData.logo">
                                        {{getNameLogo(details.businessData.businessName)}}
                                    </div>
                                    <img :src="`${getBusinessLogo(details.businessData.businessId, details.businessData.logo)}`" :alt="`${details.businessData.businessName}'s logo`" v-show="details.businessData.logo">
                                </div>
                                <h4 class="order-details-business-name">
                                    <n-link :to="`/${details.businessData.username}`" class="">{{details.businessData.businessName}}</n-link>
                                    <div class="order-details-status">
                                        <!-- new and unconfirmed order -->
                                        <div class="order-dot new" v-show="details.orderInfo.orderStatus == 0 && details.orderInfo.deliveryStatus == 0"></div>
                                        <div class="stat" v-show="details.orderInfo.orderStatus == 0 && details.orderInfo.deliveryStatus == 0">New order</div>
                                        
                                        <!-- confirmed order but pending delivery -->
                                        <div class="order-dot pending" v-show="details.orderInfo.orderStatus == 1 && details.orderInfo.deliveryStatus == 0"></div>
                                        <div class="stat" v-show="details.orderInfo.orderStatus == 1 && details.orderInfo.deliveryStatus == 0">Confirmed order</div>

                                        <!-- order delivered and cleared -->
                                        <div class="order-dot cleared" v-show="details.orderInfo.orderStatus == 1 && details.orderInfo.deliveryStatus == 1"></div>
                                        <div class="stat" v-show="details.orderInfo.orderStatus == 1 && details.orderInfo.deliveryStatus == 1">Cleared order</div>
                                        
                                        <!-- order rejected by business -->
                                        <div class="order-dot cancelled" v-show="details.orderInfo.orderStatus == -1 && details.orderInfo.deliveryStatus == 0"></div>
                                        <div class="stat" v-show="details.orderInfo.orderStatus == -1 && details.orderInfo.deliveryStatus == 0">Rejected order</div>
                                    </div>
                                </h4>
                            </div>
                            <div class="dk-action">
                                <n-link :to="`/${details.businessData.username}`" class="btn btn-white btn-md">Visit shop</n-link>
                            </div>
                        </div>

                        <div class="md-flex">
                            <!-- products -->
                            <div class="col-md-12" :class="[details.orderInfo.orderStatus ? 'col-lg-9' : 'col-lg-12']">
                                <div class="order-details-notification">
                                    <div class="alert alert-secondary order-details-alert" v-show="details.orderInfo.orderStatus == 0 && details.orderInfo.deliveryStatus == 0">
                                        <div class="info-text">This order has been placed but yet to be confirmed. </div>
                                        <!-- <button class="btn btn-small btn-white">confirm</button> -->
                                    </div>
                                    <div class="alert alert-info order-details-alert" v-show="details.orderInfo.orderStatus == 1 && details.orderInfo.deliveryStatus == 0">
                                        <div class="info-text">This order has been confirmed. </div>
                                        <button class="btn btn-small btn-white">Confirm delivery</button>
                                    </div>
                                </div>
                                <div class="order-details-product-container">
                                    <div class="swiper-action-container" v-show="details.orderProduct.length > 1">
                                        <button class="close-modal-btn slider-control">
                                            <div class="dropdownCheckBox" @click="moveCarousel(`carousel${details.businessData.businessId}`, 'left')"></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#leftArrow"></use>
                                            </svg>
                                        </button>
                                    </div>
                                    
                                    <div class="swiper-action-container" v-show="details.orderProduct.length > 1">
                                        <button class="close-modal-btn slider-control">
                                            <div class="dropdownCheckBox" @click="moveCarousel(`carousel${details.businessData.businessId}`, 'right')"></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#rightArrow"></use>
                                            </svg>
                                        </button>
                                    </div>
                            
                                    <div class="order-details-product-list" :id="`carousel${details.businessData.businessId}`">

                                        <div class="card street-biz-card order-details-product carousel-item" v-for="(productListing, productIndex) in details.orderProduct" :key="productIndex">
                                            <div class="street-biz-card-flex order-details-card-flex">
                                            <div class="businesss-card-img">
                                                <img :data-src="`${formatproductImage(productListing.businessId, productListing.image)}`" :alt="`${productListing.name}'s  picture`" v-lazy-load>
                                            </div>
                                            <div class="order-details-product-detail">
                                                <div class="business-name">{{productListing.name}}</div>
                                                <div class="categories">₦ {{formatNumber(productListing.price)}}</div>
                                                
                                            </div>
                                            </div>
                                            <div class="order-product-option">

                                                <div class="d-flex-btw option-container" v-show="productListing.size.length > 0 || productListing.color.length > 0">
                                                    <div class="d-flex"  v-show="productListing.size">
                                                        <div class="option">Size:</div>
                                                        <div class="result">{{productListing.size}}</div>
                                                    </div>
                                                    <div class="d-flex" v-show="productListing.color">
                                                        <div class="option">Color:</div>
                                                        <div class="result"><div class="cart-details-color" v-bind:style="{'background-color': productListing.color}"></div></div>
                                                    </div>
                                                </div>

                                                <div class="d-flex-between option-container">
                                                    <div class="option">Unit price</div>
                                                    <div class="result">₦ {{formatNumber(productListing.price)}}</div>
                                                </div>

                                                <div class="d-flex-between option-container">
                                                    <div class="option">Quanity</div>
                                                    <div class="result">{{productListing.quantity}}</div>
                                                </div>

                                                <div class="d-flex-between option-container">
                                                    <div class="option">Subtotal</div>
                                                    <div class="result">₦ {{formatNumber(productListing.price * productListing.quantity)}}</div>
                                                </div>
                                                <div class="d-flex-between option-container">
                                                    <n-link :to="`/p/${productListing.productId}`" class="btn btn-white btn-small">View product</n-link>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            
                            <!-- actions -->
                            <div class="col-md-12 col-lg-3 white-bg-color" v-show="details.orderInfo.orderStatus">
                                <div class="order-price-area position-relative">
                                    <div class="d-flex-between option-container">
                                        <div class="option">Delivery time</div>
                                        <div class="result">{{details.orderInfo.deliveryTime.start}} - {{details.orderInfo.deliveryTime.end}}</div>
                                    </div>
                                    <div class="d-flex-between option-container">
                                        <div class="option">Delivery price</div>
                                        <div class="result">₦ {{formatNumber(details.orderInfo.deliveryCharge)}}</div>
                                    </div>
                                    <div class="d-flex-between option-container">
                                        <div class="option">Total price</div>
                                        <div class="result">₦ {{calculateTotalPrice(details.orderProduct, details.orderInfo.deliveryCharge)}}</div>
                                    </div>
                                    <div class="option-container order-action-area move-bottom">
                                        <!-- <button class="btn btn-white">Write business review</button> -->
                                        <button class="btn btn-primary">Accept delivery charge</button>
                                        <button class="btn btn-white">Reject delivery charge</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div v-show="returnOrderDetails.length == 0">

                </div>
                
            </div>
            <!-- end of cart listing -->

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
import CUSTOMERFOOTER from '~/layouts/customer/customer-footer.vue';
import PAGELOADER from '~/components/loader/loader.vue';

import { mapActions, mapGetters, mapMutations } from 'vuex';

import { CUSTOMER_GET_ORDER_DETAILS } from '~/graphql/order'

export default {
    name: "CUSTOMERORDERDETAILSCOMPONENT",
    components: {
      DESKTOPNAVGATION, MOBILENAVIGATION, MOBILESEARCH, BOTTOMADS, CUSTOMERFOOTER, PAGELOADER
    },
    data: function() {
        return {
            pageLoader: true,
            accessToken: "",
            orderId: "",
            networkError: 0,
            errorReason: "",
            allOrders: []
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
        getUserData: function () {
            this.accessToken = this.GetCustomerDetails.userToken
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
                this.networkError = 1
                this.errorReason = request.message
                this.$initiateNotification('error', 'Failed request', request.message);
                return 
            }

            let result = request.result.data.GetOrderItemsForCustomer;

            if (result.success == false) {
                this.networkError = 1
                this.errorReason = result.message
                this.$initiateNotification('error', 'Oops!', result.message);
                return    
            }

            
            this.allOrders = result.orderDetails

            this.$initiateNotification('success', '', result.message);

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
        moveCarousel: function (target, direction) {
            let carouselItems = document.querySelectorAll(`#${target} .carousel-item`);
            let size = carouselItems[0].clientWidth + 16;
            this.$carouselSlider(target, direction, size)
        },
        calculateTotalPrice: function (allProducts, deliveryCharge) {
            let price = 0

            for (let x of allProducts) {
                price = price + (parseInt(x.quantity, 10) * parseInt(x.price, 10));
            }

            return this.formatNumber((price + deliveryCharge))
        }
    },
    created: async function () {
		if (process.browser) {
            let status = this.LoginStatus
            if (status == false) {
                return this.$router.push('/')
            }
            this.orderId = this.$route.params.id
            if(this.orderId == undefined || this.orderId.length == 0) {
                return this.$router.push('/c/orders/')
            } 

        }
        this.getUserData()
        this.getOrderDetails()

    },
    mounted () {
        this.pageLoader = false
    }
}
</script>
<style scoped>
    .alert .info-text {
        font-weight: unset !important;
    }
    .d-flex-btw {
        display: flex;
        justify-content: space-between;
    }
</style>