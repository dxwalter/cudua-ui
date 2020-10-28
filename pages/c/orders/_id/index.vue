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
            <div class="section-header"  v-show="!isNetworkError && !pageLoader">
            <h4>Order details for {{orderId}}</h4>
            </div>
            
            <!-- beginning of cart listing -->
            <div class="cart-listing-area mg-top-24 mg-bottom-32" v-show="!isNetworkError && !pageLoader">

                <div v-show="returnOrderDetails.length > 0" >

            
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

                        <div class="md-flex" :class="[details.orderProduct.length == 0 ? 'remove-display-flex' : '']">
                            <!-- products -->
                            <div class="col-md-12" :class="[details.orderInfo.orderStatus ? 'col-lg-9' : 'col-lg-12']" v-show="details.orderInfo.orderStatus != -1">
                                <div class="order-details-notification">

                                    <!-- When the order is yet to be confirmed -->

                                    <div class="alert alert-secondary order-details-alert" v-show="details.orderInfo.orderStatus == 0 && details.orderInfo.deliveryStatus == 0 && details.orderProduct.length > 0">
                                        <div class="info-text">This order has been placed but yet to be confirmed. </div>
                                        <!-- <button class="btn btn-small btn-white">confirm</button> -->
                                    </div>

                                    <!-- when the payment method is pay on delivery and you are yet to get the order to be delivered to you -->

                                    <div class="alert alert-info order-details-alert" v-show="details.orderInfo.orderStatus == 1 && details.orderInfo.deliveryStatus == 0 && details.orderProduct.length > 0 && details.orderInfo.paymentMethod == 'Pay on delivery'">
                                        <div class="info-text">This order has been confirmed. </div>
                                        <button class="btn btn-small btn-white"  @click="confirmOrderBusinessId = details.businessData.businessId">Confirm delivery & payment</button>
                                    </div>

                                    <!-- when the payment method is pay online and you have not paid -->
                                    <div class="alert alert-info order-details-alert" v-show="details.orderInfo.orderStatus == 1 && details.orderInfo.deliveryStatus == 0 && details.orderProduct.length > 0 && details.orderInfo.paymentMethod == 'Pay online' && details.orderInfo.paymentStatus == 0">
                                        <div class="info-text">This order has been confirmed but you are yet to pay online. </div>
                                    </div>

                                    <!-- when the payment method is pay online and you have paid but the order is yet to be delivered to you -->

                                    <div class="alert alert-info order-details-alert" v-show="details.orderInfo.orderStatus == 1 && details.orderInfo.deliveryStatus == 0 && details.orderProduct.length > 0 && details.orderInfo.paymentMethod == 'Pay online' && details.orderInfo.paymentStatus == 1">
                                        <div class="info-text">You have successfully paid for this order.</div>
                                    </div>
 
                                    <!-- when you have paid for the order and it has been delivered to you -->
                                    <div class="alert alert-success order-details-alert" v-show="details.orderInfo.orderStatus == 1 && details.orderInfo.deliveryStatus == 1 && details.orderProduct.length > 0 && details.orderInfo.paymentStatus == 1">
                                        <div class="info-text">This order has completed.</div>
                                    </div>
                                </div>
                                <div class="order-details-product-container" v-show="details.orderProduct.length > 0">
                                    <div class="swiper-action-container" v-show="details.orderProduct.length > 1">
                                        <button class="close-modal-btn slider-control small-slider-btn">
                                            <div class="dropdownCheckBox" @click="moveCarousel(`carousel${details.businessData.businessId}`, 'left')"></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#leftArrow"></use>
                                            </svg>
                                        </button>
                                    </div>
                                    
                                    <div class="swiper-action-container" v-show="details.orderProduct.length > 1">
                                        <button class="close-modal-btn slider-control small-slider-btn">
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
                                                <div class="reviews">
                                                    <StarRating :score=productListing.ratingScore></StarRating>
                                                </div>
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
                            <div class="col-md-12 col-lg-3 white-bg-color" v-show="details.orderInfo.orderStatus == 1">
                                <div class="order-price-area position-relative">
                                    <div class="d-flex-between option-container">
                                        <div class="option">Order price</div>
                                        <div class="result">₦ {{formatNumber(calculateTotalProductPrice(details.orderProduct))}}</div>
                                    </div>
                                    <div class="d-flex-between option-container">
                                        <div class="option">Delivery price</div>
                                        <div class="result">₦ {{formatNumber(details.orderInfo.deliveryCharge)}}</div>
                                    </div>
                                    <div class="d-flex-between option-container">
                                        <div class="option">Total price</div>
                                        <div class="result">₦ {{formatNumber(calculateTotalPrice(details.orderProduct, details.orderInfo.deliveryCharge))}}</div>
                                    </div>
                                    <div class="d-flex-between option-container">
                                        <div class="option">Payment method</div>
                                        <div class="result">{{details.orderInfo.paymentMethod}}</div>
                                    </div>
                                    <div class="d-flex-between option-container">
                                        <div class="option">Delivery time</div>
                                        <div class="result">{{details.orderInfo.deliveryTime.start}} - {{details.orderInfo.deliveryTime.end}}</div>
                                    </div>
                                    <div class="option-container order-action-area move-bottom">
                                        <!-- <button class="btn btn-white">Write business review</button> -->
                                        <div v-show="details.orderInfo.orderStatus == 1 && details.orderInfo.deliveryStatus == 0">
                                            
                                            <!-- when the payment method is pay on delivery -->
                                            <button class="btn btn-primary btn-block"  @click="confirmOrderBusinessId = details.businessData.businessId" v-show="details.orderInfo.paymentMethod == 'Pay on delivery' ">Confirm delivery & payment</button>

                                            <!-- when the payment method is pay online and the customer is yet to pay -->
                                            <paystack class="btn btn-primary btn-block mg-bottom-8" v-show="details.orderInfo.paymentMethod == 'Pay online' && !details.orderInfo.paymentStatus " :data-business-id="`${details.businessData.businessId}`"
                                                :amount="calculateTotalPrice(details.orderProduct, details.orderInfo.deliveryCharge) * 100"
                                                :email="email"
                                                :paystackkey="details.businessData.paystackPublicKey"
                                                :callback="confirmPayment"
                                                :close="cancelTransaction"
                                                :embed="false"
                                                id="payWithPaystack"
                                            >
                                                Pay ₦ {{formatNumber(calculateTotalPrice(details.orderProduct, details.orderInfo.deliveryCharge))}} online
                                                <div class="loader-action"><span class="loader"></span></div>
                                            </paystack>
                                            <Nuxt />

                                            <!-- when the payment method is pay online and the customer has paid -->
                                            <button class="btn btn-primary btn-block mg-bottom-8"  @click="confirmOrderBusinessId = details.businessData.businessId" v-show="details.orderInfo.paymentMethod == 'Pay online' && details.orderInfo.paymentStatus ">Confirm delivery</button>

                                            <button class="btn btn-white btn-block" v-show="!transactionId" @click="cancelOrderBusinessId = details.businessData.businessId">Cancel order</button>
                                        </div>
                                        <div v-show="details.orderInfo.orderStatus == 1 && details.orderInfo.deliveryStatus == 1">
                                            <n-link :to="`/c/orders/cleared/${orderId}`" class="btn btn-primary btn-block">Write a review</n-link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- when no product is found in the order -->
                            <div v-show="details.orderProduct.length == 0" class="rejected-order-layout">
                                <div class="rejected-order-content">
                                    <div class="header">No product was found in this order.</div>
                                    <div class="message-by mg-bottom-32">The products in this order was either moved or deleted.</div>
                                    
                                    <div class="action-area">
                                        <button class="btn btn-primary" id="deleteOrder" @click="deleteOrder(details.businessData.businessId)">
                                            Delete order
                                            <div class="loader-action"><span class="loader"></span></div>
                                        </button>
                                    </div>

                                </div>
                            </div>
                            <!-- when no product is found -->
                            
                            <!-- when order is rejected -->
                            <div v-show="details.orderInfo.orderStatus == -1" class="rejected-order-layout">
                                <div class="rejected-order-content">
                                    <div class="header">This order was rejected </div>
                                    <div class="message-by">This is a message from <span>{{details.businessData.businessName}}</span></div>
                                    <div class="reject-message">{{details.orderInfo.BusinessRejectOrderReason}}</div>
                                    
                                    <div class="action-area">
                                        <button class="btn btn-primary" id="deleteOrder" @click="deleteOrder(details.businessData.businessId)">
                                            Delete order
                                            <div class="loader-action"><span class="loader"></span></div>
                                        </button>
                                    </div>

                                </div>
                            </div>
                            <!-- When order is rejected -->

                        </div>
                    </div>

                </div>

                <div v-show="returnOrderDetails.length == 0">

                </div>
                
            </div>
            <!-- end of cart listing -->

            <!-- when an error occurs, show this -->
            <div class="link-error-area" v-show="isNetworkError">
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

      <!-- confirm delivery -->
        <div class="modal-container" id="confirmedOrderModal">
            <div class="modal-dialog-box success-order-modal-container">


                <div class="modal-content">
                    <div class="thumbs-up-container">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <use xlink:href="~/assets/customer/image/all-svg.svg#thumbsUp"></use>
                        </svg>
                    </div>
                    <div class="success-order-text">
                        <p>Confirm the delivery of this order.</p>
                        <!-- <div class="price-info">Expect a message from the business you ordered from.</div> -->
                    </div>
                    <div class="mg-bottom-32">
                        <button class="btn btn-primary btn-block mg-bottom-8" @click="confirmOrder()" id="confirmOrder">
                            Confirm Delivery
                            <div class="loader-action"><span class="loader"></span></div>
                        </button>
                        <button class="btn btn-white btn-block"  @click="confirmOrderBusinessId = '' ">Cancel action</button>
                    </div>
                </div>

            </div>
        </div>
        <!-- end of confirmed delivery -->

        <!-- Cancel order modal -->
        <div class="modal-container" id="cancelOrder">
            <div class="modal-dialog-box">

                <div class="modal-header">
                    <div>
                        <h4 class="mg-bottom-4">Cancel order</h4>
                    </div>

                    <button class="close-modal-btn" data-target="rejectOrder" data-dismiss="modal"  @click="cancelOrderBusinessId = ''">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                            <use xlink:href="~/assets/business/image/all-svg.svg#times"></use>
                        </svg>
                    </button>
                </div>

                <div class="modal-content">

                    <div id="createCategory">
                        
                        <div class="form-control">
                            <label for="businessType" class="form-label">Why are you cancelling this order? <span>optional</span></label>
                            <textarea name="" cols="30" rows="5" class="input-form" id="rejectOrderForm" v-model="cancelOrderReason"></textarea>
                        </div>
                        <div class="form-control">
                            <button class="btn btn-block btn-primary" type="button" @click="cancelOrder()" id="cancelOrder">
                                Cancel order
                                <div class="loader-action"><span class="loader"></span></div>
                            </button>
                        </div>
                    </div>

                </div>
                
                <div class="modal-footer" data-target="rejectOrder" data-dismiss="modal" @click="cancelOrderBusinessId = ''">
                    <button class="btn btn-default btn-light-grey">Close</button>
                </div>

            </div>
        </div>
        <!-- cancel order modal -->

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

import StarRating from '~/plugins/vue-star-rating.client.vue';
import paystack from '~/plugins/vue-paystack.client.vue'

import { mapActions, mapGetters, mapMutations } from 'vuex';


import { 
    CUSTOMER_GET_ORDER_DETAILS,
    CONFIRM_ORDER_PAYMENT_AND_DELIVERY,
    DELETE_ORDER,
    CUSTOMER_CANCEL_ORDER,
    CONFIRM_ONLINE_PAYMENT
} from '~/graphql/order'

export default {
    name: "CUSTOMERORDERDETAILSCOMPONENT",
    components: {
      DESKTOPNAVGATION, MOBILENAVIGATION, MOBILESEARCH, BOTTOMADS, CUSTOMERFOOTER, PAGELOADER, StarRating, paystack
    },
    data: function() {
        return {
            pageLoader: true,
            accessToken: "",
            email: "",
            userId: "",
            orderId: "",
            isNetworkError: 0,
            errorReason: "",
            allOrders: [],

            confirmOrderBusinessId: "",
            timeOut: null,
            cancelOrderReason: "",
            cancelOrderBusinessId: "",
            transactionId: "",
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
            this.userId = this.GetCustomerDetails.userId
            this.email = this.GetCustomerDetails.email
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

            return price + deliveryCharge
        },
        calculateTotalProductPrice: function (allProducts) {
            let price = 0

            for (let x of allProducts) {
                price = price + (parseInt(x.quantity, 10) * parseInt(x.price, 10));
            }

            return price
        },
        confirmOrder: async function () {
            
            let target = document.getElementById('confirmOrder')

            let variables = {
                businessId: this.confirmOrderBusinessId,
                orderId: this.orderId
            }

            let context = {
                headers: {
                    accessToken: this.accessToken
                }
            }

            target.disabled = true

            let request = await this.$performGraphQlMutation(this.$apollo, CONFIRM_ORDER_DELIVERY, variables, context);
            
            target.disabled = false

            if (request.error) {
                this.confirmOrderBusinessId = ""
                return this.$initiateNotification('error', 'Failed request', request.message);
            }

            let result = request.result.data.ConfirmDelivery;

            if (result.success == false) {
                this.confirmOrderBusinessId = ""
                return this.$initiateNotification('error', '', result.message);
            }

            this.confirmOrderBusinessId = ""
            
            this.$initiateNotification('success', '', result.message);
            clearTimeout(this.timeOut)
            this.timeOut = setTimeout(() => {
                window.location.reload(true)
            }, 1500);


        },
        deleteOrder: async function (businessId) {

            let variables = {
                orderId: this.orderId,
                businessId: businessId,
                customerId: this.userId
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }
            
            let target = document.getElementById('deleteOrder');
            
            target.disabled = true
            
			let request = await this.$performGraphQlMutation(this.$apollo, DELETE_ORDER, variables, context);

            target.disabled = false

			if (request.error) {
				return this.$initiateNotification("error", "Failed request", request.message)
			}

            let result = request.result.data.DeleteOrder;
            
            if (result.success == false) {
                return this.$showToast(result.message, "error", 6000)
            }

            this.$initiateNotification("success", "Order deleted", result.message)

            clearTimeout(this.timeOut)

            this.timeOut = setTimeout(() => {
                window.location.reload(true)
            }, 1500);
        },
        cancelOrder: async function () {
            
            let variables = {
                businessId: this.cancelOrderBusinessId,
                orderId: this.orderId,
                reason: this.cancelOrderReason
            }

            let context = {
                headers: {
                    accessToken: this.accessToken
                }
            }
            

            let target = document.getElementById('cancelOrder');
            
            target.disabled = true
            
			let request = await this.$performGraphQlMutation(this.$apollo, CUSTOMER_CANCEL_ORDER, variables, context);
            
            target.disabled = false

            if (request.error) {
                this.cancelOrderBusinessId = ""
                return this.$initiateNotification('error', 'Failed request', request.message);
            }

            let result = request.result.data.CustomerCancelOrder;

            if (result.success == false) {
                this.cancelOrderBusinessId = ""
                return this.$initiateNotification('error', '', result.message);
            }

            this.cancelOrderBusinessId = ""
            
            this.$initiateNotification('success', '', result.message);
            clearTimeout(this.timeOut)
            this.timeOut = setTimeout(() => {
                window.location.reload(true)
            }, 1500);
        },
        cancelTransaction: function () {
            this.$initiateNotification('info', "", "The payment for your order was cancelled")
        },
        confirmPayment: async function (transaction) {

            if (transaction.status == 'success' && transaction.message == 'Approved') {

                this.transactionId = transaction.reference;

                let target = document.getElementById('payWithPaystack');

                let businessId = target.getAttribute('data-business-id')
                
                target.disabled = true

                let variables = {
                    referenceId: this.transactionId,
                    businessId: businessId,
                    orderId: this.orderId
                }

                let context = {
                    headers: {
                        'accessToken': this.accessToken
                    }
                }

                let request = await this.$performGraphQlMutation(this.$apollo, CONFIRM_ONLINE_PAYMENT, variables, context);

                target.disabled = false

                if (request.error) {
                    this.$initiateNotification('error', "Network Error", request.message)
                    return
                }

                let result = request.result.data.ConfirmOnlinePayment;

                if (result.success == false) {
                    this.$initiateNotification('error', "Oops!", result.message)
                    return
                }

                this.$initiateNotification('success', 'Payment successful', result.message);
                clearTimeout(this.timeOut)
                this.timeOut = setTimeout(() => {
                    window.location.reload(true)
                }, 1500);


            } else {
                this.$initiateNotification('error', "Payment error", "An error occurred paying for your order")
            }
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
            
            this.getUserData()
            this.getOrderDetails()

        }

    },
    mounted () {
        this.pageLoader = false
    },
    watch: {
        confirmOrderBusinessId: function () {

            let target = document.getElementById('confirmedOrderModal');

            if (this.confirmOrderBusinessId.length > 0) {
                
                target.classList.add('show-modal', 'display-block')

            } else {
                target.classList.remove('show-modal', 'display-block')
            }
        },
        cancelOrderBusinessId: function () {
            let target = document.getElementById('cancelOrder');
            if (this.cancelOrderBusinessId.length > 0) {
                target.classList.add('show-modal', 'display-block')
            } else {
                target.classList.remove('show-modal', 'display-block')
            }
        }
    },
    beforeDestroy() {
        clearTimeout(this.timeOut)
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
    .remove-display-flex {
        display: block !important
    }
</style>