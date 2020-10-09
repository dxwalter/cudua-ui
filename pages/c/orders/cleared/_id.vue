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
            <!-- header area -->
            <div class="section-header" v-show="!pageLoader">
            <h4>Cleared order</h4>
            </div>
            
            <!-- beginning of cart listing -->
            <div class="cart-listing-area" v-show="!pageLoader">

                <div v-show="returnOrderDetails.length > 0">

                    <div class="order-details-container" >
                        <div class="order-details-header cleared-header" v-for="(details, index) in returnOrderDetails" :key="index">

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
                                <n-link :to="`/review/business/${details.businessData.username}`" class="btn btn-primary btn-md">
                                    Write business review
                                </n-link>
                            </div>
                        </div>


                        <div class="md-flex">
                            <!-- products -->
                            <div class="col-md-12 col-lg-12">
                                
                                <div class="order-details-product-container">
                                    <!-- start -->
                                    <div class="order-details-product-list flex-column" id="busines12345">
                                        <div class="card cart-card">
                                            <div class="item-basic-info">
                                                <a href="#" class="cart-avatar">
                                                    <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                                                </a>
                                                <div class="price-and-name">
                                                    <a href="#">Product name is Coming is Coming</a>
                                                    <div class="price">₦ 1,200</div>
                                                    <div class="reviews">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                            <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                            <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                            <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                            <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                            <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                        
                                            <div class="cleared-order-review">
                                                <div class="cart-action-area">
                                                    <div class="mobile-actions">
                                                        <n-link to="/p/4534534/review" class="btn btn-white btn-small">
                                                            Write a review
                                                        </n-link>
                                                    </div>
                                                </div>
                                            </div>
                        
                                        </div>
                        
                                        <div class="card cart-card">
                                            <div class="item-basic-info">
                                                <a href="#" class="cart-avatar">
                                                    <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                                                </a>
                                                <div class="price-and-name">
                                                    <a href="#">Product name is Coming is Coming</a>
                                                    <div class="price">₦ 1,200</div>
                                                    <div class="reviews">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                            <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                            <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                            <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                            <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                            <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                        
                                            <div class="cleared-order-review">
                                                <div class="cart-action-area">
                                                    <div class="mobile-actions">
                                                        <n-link to="/p/4534534/review" class="btn btn-white btn-small">
                                                            Write a review
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

        </div>
        <!-- end of content container -->

        <!-- footer area -->
        <BOTTOMADS></BOTTOMADS>
        <CUSTOMERFOOTER></CUSTOMERFOOTER>
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
} from '~/graphql/order'

export default {
    name: "CUSTOMERCLEAREDORDERS",
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