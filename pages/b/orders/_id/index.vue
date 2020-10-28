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
                    <!-- content goes in here -->
                    <div class="alert alert-secondary notification-alert" v-show="!orderStatus && !deliveryStatus && !pageLoader && returnAllProducts.length > 0">
                        <div>We strongly recommed that you call this customer before adding delivery price and confirming this order.</div>
                        <a :href="`tel:${phoneNumber}`" class="btn btn-white btn-small">Call customer</a>
                    </div>

                    <div class="alert alert-danger notification-alert" v-show="!orderStatus && !deliveryStatus && !pageLoader && returnAllProducts.length == 0">
                        <div>This order does not contain any product.</div>
                    </div>

                    <div class="alert alert-info notification-alert" v-show="orderStatus && !deliveryStatus && !pageLoader && !customerCancelOrder && !paymentMethodId">
                        <div>You have confirmed this order but yet to deliver the order.</div>
                    </div>

                    <div class="alert alert-info notification-alert" v-show="orderStatus && !deliveryStatus && !pageLoader && !customerCancelOrder && paymentMethodId && !paymentStatus">
                        <div>You have confirmed this order but the customer is yet to pay so you can deliver the order.</div>
                    </div>

                    <div class="alert alert-info notification-alert" v-show="orderStatus && !deliveryStatus && !pageLoader && !customerCancelOrder && paymentMethodId && paymentStatus">
                        <div>The customer has paid for this order online. You can deliver the order.</div>
                    </div>

                    <div class="alert alert-danger notification-alert" v-show="orderStatus && deliveryStatus == -1 && !pageLoader && returnAllProducts.length > 0">
                        <div>The delivery of this order was rejected. Kindly call the customer to know why.</div>
                        <a :href="`tel:${phoneNumber}`" class="btn btn-white btn-small">Call customer</a>
                    </div>

                    <div class="alert alert-danger notification-alert" v-show="orderStatus && customerCancelOrder && !pageLoader">
                        <div>This order was cancelled by the customer. Click learn more to know why.</div>
                        <button class="btn btn-white btn-small" @click="showDeleteModal = 1">Learn more</button>
                    </div>

                    <div class="alert alert-success notification-alert" v-show="orderStatus && deliveryStatus == 1 && !pageLoader && paymentStatus">
                        <div>The delivery of this order was confirmed by this customer. Write a review about this customer</div>
                        <button class="btn btn-white btn-small" data-trigger="modal" data-target="createCustomerReview">Write review</button>
                    </div>

                    <div class="main-content">

                        <div class="page-header" v-show="!networkError && !pageLoader">
                            <h4>Order ID: {{orderId}}</h4>
                        </div>

                        <div class="order-listing-container" v-show="!networkError && !pageLoader">
                        
                            <!-- main content goes in here -->
                            <div class="accordion white-bg-color order-details-card">

                                <div class="card-title">Customer details</div>

                                <div class="customer-photo">
                                    <div class="temporal-logo" v-show="!profilePicture">
                                        {{getNameLogo(fullname)}}
                                    </div>
                                    <img :data-src="`${profilePicture}`" :alt="`${fullname}'s profile picture`"  v-show="profilePicture" v-lazy-load>
                                </div>
                                <div class="customer-name text-center">{{fullname}}</div>

                                <div class="customer-details-container">
                                    <a :href="`tel:${phoneNumber}`" class="customer-contact-details">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                                            <use xlink:href="~/assets/business/image/all-svg.svg#phone"></use>
                                        </svg>
                                        <span>{{phoneNumber}}</span>
                                    </a>

                                    <div class="customer-contact-details">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                                            <use xlink:href="~/assets/business/image/all-svg.svg#email"></use>
                                        </svg>
                                        <span>{{email}}</span>
                                    </div>

                                    <div class="customer-contact-details">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <use xlink:href="~/assets/business/image/all-svg.svg#mapPlace"></use>
                                        </svg>
                                        <span>{{returnAddress}}</span>
                                    </div>

                                    <div class="customer-contact-details">
                                        <div>This order was placed 
                                            <span class="modifier">{{orderTime}}</span>
                                        </div>
                                    </div>
                                </div>


                                <div class="customer-review-area" data-trigger="modal" data-target="customerReviewModal">
                                    <a href="javasscript:;" class="navbar-review-icon">
                                        <StarRating :score=ratingScore></StarRating>
                                        <Nuxt />
                                    </a>
                                    <a href="#">Read customer review</a>
                                </div>

                                
                            </div>

                            <div class="item-details-listing">
                                <div class="order-menu">Ordered products</div>
                                
                                <div class="card" v-for="(product, index) in returnAllProducts" :key="index" v-show="returnAllProducts.length > 0">
                                    <div class="order-card">
                                        <div class="order-card-img">
                                            <img :data-src="`${product.image}`" :alt="`${product.name}'s  picture`" v-lazy-load>
                                        </div>
                                        <div>
                                            <n-link :to="`/b/product/${product.productId}`" class="card-product-name">{{product.name}}

                                            </n-link>
                                            <div class="order-price">₦ {{formatNumber(product.price)}}</div>
                                            <div class="order-price" v-show="product.size">Size: {{product.size}}</div>
                                            <div class="order-price" v-show="product.color">Color: <span v-bind:style="{'background-color': product.color}"></span></div>
                                            <div class="order-price">Quantity: {{product.quantity}}</div>
                                        </div>
                                    </div>
                                    <div class="order-card-footer">
                                        <span>Subtotal</span>
                                        <span>₦ {{formatNumber(product.price * product.quantity)}}</span>
                                    </div>
                                </div>

                                <div class="card mg-bottom-32" v-show="returnAllProducts.length == 0">
                                    <div class="alert alert-info">The product(s) in this order were deleted after the order had been placed.</div>
                                </div>

                                <div class="card" id="orderInfoDiv" v-show="!deliveryStatus && returnAllProducts.length > 0">
                                    <div class="order-action-container">
                                        <div class="delivery-charge-area">
                                            <span>Delivery charge & time</span>
                                            <button class="btn btn-light-grey btn-md" data-single-tab="singleTab" data-target="deliveryPrice">Add info</button>
                                        </div>

                                        <div class="delivery-price-input-container grey-bg-color" id="deliveryPrice">
                                            <div class="">
                                                <label for="businessType" class="form-label">Delivery charge - <span>optional</span></label>
                                                <input type="number" name="" id="" class="input-form white-bg-color" placeholder="" v-model="deliveryCharge">
                                            </div>

                                            <div class="form-control">
                                                <label for="businessType" class="form-label">Delivery time span</label>
                                                <div class="delivery-time-input-area">
                                                    <input type="text" class="input-form white-bg-color" placeholder="2 hours" v-model="deliveryTime.start" id="startTime">
                                                    <div>TO</div>
                                                    <input type="text" class="input-form white-bg-color" placeholder="2 days" v-model="deliveryTime.end" id="endTime">
                                                </div>
                                            </div>

                                            <div class="form-control">
                                                <label for="businessType" class="form-label">Choose a payment method for this order</label>
                                                <div class="">
                                                    <select class="input-form white-bg-color" v-model="paymentMethod" id="paymentMethod">
                                                        <option selected value="">Payment method</option>
                                                        <option value="Pay on delivery">Pay on delivery</option>
                                                        <option value="Pay online" v-show="paystackPublicKey">Pay online</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <button class="btn btn-white btn-block" data-single-tab="singleTab" data-target="deliveryPrice">Submit info</button>
                                        </div>

                                    </div>
                                </div>

                                <div class="card" v-show=" returnAllProducts.length > 0">
                                    <div class="order-action-container">
                                        <div class="final-delivery-charge" v-show="returnAllProducts.length > 0">
                                            <div>Delivery time span</div>
                                            <div v-show="deliveryTime.start || deliveryTime.end">{{deliveryTime.start}} to {{deliveryTime.end}}</div>
                                            <div v-show="!deliveryTime.start && !deliveryTime.end">- to -</div>
                                        </div>
                                        <div class="final-delivery-charge" v-show="returnAllProducts.length > 0">
                                            <div>Delivery charge</div>
                                            <span v-show="deliveryCharge">₦ {{formatNumber(deliveryCharge)}}</span>
                                            <span v-show="!deliveryCharge">₦ 0</span>
                                        </div>

                                        <div class="final-delivery-charge" v-show="returnAllProducts.length > 0">
                                            <div>Payment method</div>
                                            <span v-show="paymentMethod">{{paymentMethod}}</span>
                                            <span v-show="!paymentMethod">-</span>
                                        </div>

                                        <div class="final-delivery-charge" v-show="returnAllProducts.length > 0">
                                            <div>Total product price</div>
                                            <span>₦ {{formatNumber(totalProductPrice)}}</span>
                                        </div>

                                        <div class="total-price" v-show="returnAllProducts.length > 0">
                                            <div>Total price</div>
                                            <div>₦ {{formatNumber(paymentPrice)}}</div>
                                        </div>

                                        <div class="order-items-action" v-show="!deliveryStatus">
                                            <button class="btn btn-primary btn-block" id="acceptOrder" @click="acceptOrder()" v-show="orderStatus == 0 && returnAllProducts.length > 0">
                                                Accept order
                                                <div class="loader-action"><span class="loader"></span></div>
                                            </button>
                                            <button class="btn btn-light-grey btn-block" data-trigger="modal" data-target="rejectOrder" v-show="orderStatus == 0 && returnAllProducts.length > 0" @click="stateRejectOrderReason()">Reject order</button>

                                            <button class="btn btn-primary btn-block" id="updateDeliveryData" @click="updateDeliveryData()" v-show="orderStatus == 1">
                                                Update delivery charge and time
                                                <div class="loader-action"><span class="loader"></span></div>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                    
                        </div>

                        <!-- reject order modal -->
                        <div class="modal-container" id="rejectOrder">
                            <div class="modal-dialog-box">

                                <div class="modal-header">
                                    <div>
                                        <h4 class="mg-bottom-4">Reject order</h4>
                                    </div>

                                    <button class="close-modal-btn" data-target="rejectOrder" data-dismiss="modal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                            <use xlink:href="~/assets/business/image/all-svg.svg#times"></use>
                                        </svg>
                                    </button>
                                </div>

                                <div class="modal-content">

                                    <div id="createCategory">
                                        
                                        <div class="form-control" v-show="returnAllProducts.length > 0">
                                            <label for="businessType" class="form-label">Tell the customer the reason His/Her order is being rejected</label>
                                            <textarea name="" cols="30" rows="5" class="input-form" id="rejectOrderForm" v-model="rejectOrderMessage"></textarea>
                                        </div>
                                        <div class="form-control">
                                            <button class="btn btn-block btn-primary" type="button" @click="rejectOrder()" id="rejectOrderButton">
                                                Reject order
                                                <div class="loader-action"><span class="loader"></span></div>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                                
                                <div class="modal-footer" data-target="rejectOrder" data-dismiss="modal">
                                    <button class="btn btn-default btn-light-grey">Close</button>
                                </div>

                            </div>
                        </div>
                        <!-- reject order modal -->

                        <!-- delete order modal -->
                        <div class="modal-container-2" id="confirmedOrderModal" v-show="showDeleteModal">
                            <div class="modal-dialog-box success-order-modal-container">


                                <div class="modal-content">
                                    <div class="success-order-text">
                                        <p class="font-18">Reason for cancellation</p>
                                        <div class="price-info line-27" v-show="customerCancelOrderReason">{{customerCancelOrderReason}}</div>
                                        <div class="price-info line-27" v-show="!customerCancelOrderReason">The reason for cancelling the order was not provided</div>
                                    </div>
                                    <div class="mg-bottom-32">
                                        <button class="btn btn-primary btn-block mg-bottom-8" id="deleteOrder" @click="deleteOrder">Delete order
                                            <div class="loader-action"><span class="loader"></span></div> 
                                        </button>
                                        <button class="btn btn-white btn-block" @click="showDeleteModal = 0">Close</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <!--  delete order modal -->

                    </div>
                    <BOTTOMNAV />
                    <Nuxt />
                </div>
            </div>
        </div>
        <CUSTOMERREVIEW></CUSTOMERREVIEW>
        <Nuxt />
        <CREATECUSTOMERREVIEW></CREATECUSTOMERREVIEW>
        <Nuxt />
    </div>
</template>

<script>

import TOPHEADER from '~/layouts/business/top-navigation.vue';
import SIDENAV from '~/layouts/business/side-bar.vue';
import BOTTOMNAV from '~/layouts/business/bottom-nav.vue';
import PAGELOADER from '~/components/loader/loader.vue';
import CUSTOMERREVIEW from '~/components/customer/review/customer-review.vue';
import CREATECUSTOMERREVIEW from '~/components/customer/review/create-customer-review.vue';

import StarRating from '~/plugins/vue-star-rating.client.vue'

import { 
    BUSINESS_GET_ORDER_PRODUCTS, 
    BUSINESS_REJECT_ORDER, 
    BUSINESS_CONFIRM_ORDER,
    UPDATE_DELIVERY_CHARGE_AND_TIME,
    DELETE_ORDER } from '~/graphql/order';

import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
    name: "BUSINESSORDERDETAILSPAGE",
    components: {
        TOPHEADER, SIDENAV, BOTTOMNAV, PAGELOADER, CUSTOMERREVIEW, StarRating, CREATECUSTOMERREVIEW
    },
    data : function () {
        return {
            pageLoader: true,
            orderId: "",
            businessId: "",
            customerId: "",
            networkError: "",
            accessToken: "",
            errorReason: "",

            // customer details
            address: "",
            email: "",
            phoneNumber: "",
            fullname: "",
            profilePicture: "",
            ratingScore: 0,

            // products 
            allProducts: [],

            // order details
            totalProductPrice: 0,
            deliveryCharge: 0,
            deliveryStatus: 0,
            deliveryTime: {
                start: "",
                end: ""
            },
            orderTime: "",
            paymentPrice: 0,
            orderStatus: 0,

            // reject order
            rejectOrderMessage: "",
            timeOut: null,
            
            // customer cancel
            customerCancelOrder: 0,
            customerCancelOrderReason: "",
            showDeleteModal: 0,
            paystackPublicKey: "",
            paymentMethod: "",
            paymentStatus: 0,

            paymentMethodId: 0,
        }
    },
    computed: {
        returnAddress () {
            let address = this.address

            if (address == null) {
                return "Address not available"
            } else {
                return `${address.number}, ${address.street} ${address.community}, ${address.lga}, ${address.state}. ${address.country}`
            }
        },
        returnAllProducts () {
            return this.allProducts
        }
    },
    methods:{
        stateRejectOrderReason: function () {
            if (this.returnAllProducts.length == 0) {
                this.rejectOrderMessage = "The product(s) in this order were deleted by the business";
            }
        },
        ...mapGetters({
            'GetCustomerData': 'customer/GetCustomerDetails',
            'GetBusinessData': 'business/GetBusinessDetails'
        }),
        GetBusinessDataFromStore: function () {
            let businessData = this.GetBusinessData();
            this.businessId = businessData.businessId
            this.paystackPublicKey = businessData.paystackPublicKey
			let customerData = this.GetCustomerData();
            this.accessToken = customerData.userToken
        },
		getNameLogo: function (name) {
			if (process.browser) {
				return  this.$convertNameToLogo(name)
			}
        },
        formatNumber: function (number) {
            return this.$numberNotation(number)
        },
        getOrderDetails: async function () {

			let variables = {
                businessId: this.businessId,
                orderId: this.orderId
			}

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
			}
			
			let request = await this.$performGraphQlQuery(this.$apollo, BUSINESS_GET_ORDER_PRODUCTS, variables, context);

			if (request.error) {
				this.networkError = 1
				this.errorReason = request.message
				return this.$initiateNotification('error', 'Failed request', 'A network error occurred');
			}

            let result = request.result.data.BusinessGetProductsInOrder;
            
            if (result.success == false) {
				this.networkError = 1
				this.errorReason = result.message
				return this.$initiateNotification('error', 'Failed request', result.message);
            }

            let data = result

            // customer details

            this.fullname = data.customerDetails.fullname
            this.customerId = data.customerDetails.customerId
            this.address = data.customerDetails.address
            this.phoneNumber = data.customerDetails.phoneNumber
            this.email = data.customerDetails.email
            this.ratingScore = data.customerDetails.ratingScore
            this.profilePicture = data.customerDetails.profilePicture.length == 0 ? "" : this.$getCustomerProfilePictureUrl(this.customerId, data.customerDetails.profilePicture)
            
            // order details

            this.deliveryCharge = data.orderInfo.deliveryCharge
            this.deliveryStatus = data.orderInfo.deliveryStatus

            this.deliveryTime.start = data.orderInfo.deliveryTime.start == null ? "" : data.orderInfo.deliveryTime.start
            this.deliveryTime.end = data.orderInfo.deliveryTime.end == null ? "" : data.orderInfo.deliveryTime.end
            this.orderTime = this.$timeStampModifier(data.orderInfo.orderTime)
            this.orderStatus = data.orderInfo.orderStatus

            this.customerCancelOrder = data.orderInfo.customerCancelOrder
            this.customerCancelOrderReason = data.orderInfo.cancelOrderReason
            this.paymentMethod = data.orderInfo.paymentMethod
            this.paymentStatus = data.orderInfo.paymentStatus

            if (this.paymentMethod == "Pay online") {
                this.paymentMethodId = 1
            } else {
                this.paymentMethodId = 0
            }

            // when order status is -1 it means the order was rejected by the business owner
            // when order status is 0 it means it has not been confirmed
            // when order status is 1 it means it has been confirmed


            // when deliveryStatus is -1, it means the customer rejected the delivery of the product

            // when customer cancel order is 1, it means the customer cancelled the order after the business had approved it

            if (this.orderStatus == -1) {
                return this.$router.push('/b/orders')
            }

            // this is emitted to customer review component where all customer reviews are listed
            $nuxt.$emit('CustomerReviews', {
                reviews: data.customerDetails.reviews == null ? [] : data.customerDetails.reviews,
                reviewScore: this.ratingScore
            });

            // this is emitted to create customer review component
            $nuxt.$emit('customerDetails', {
                customerId: this.customerId
            })

            // products

            for (const x of data.orderDetails) {
                this.totalProductPrice = this.totalProductPrice + (parseInt(x.quantity, 10) * parseInt(x.price, 10))
                this.allProducts.push({
                    name: x.name,
                    productId: x.productId,
                    image: this.$formatProductImageUrl(x.businessId, x.image, "thumbnail"),
                    quantity: x.quantity,
                    price: x.price,
                    color: x.color,
                    size: x.size
                });
            }

            this.paymentPrice = this.deliveryCharge + this.totalProductPrice
        },
        rejectOrder: async function () {

            if (this.rejectOrderMessage.length == 0) {
                this.$showToast("Tell the customer the reason His/Her order is being rejected", 'error', 6000)
                this.$addRedBorder("rejectOrderForm");
                return
            } else {
                this.$removeRedBorder('rejectOrderForm')
            }


            let target = document.getElementById('rejectOrderButton');

            let variables = {
                businessId: this.businessId,
                customerId: this.customerId,
                orderId: this.orderId,
                reason: this.rejectOrderMessage
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
			}
            
            target.disabled = true
            
			let request = await this.$performGraphQlQuery(this.$apollo, BUSINESS_REJECT_ORDER, variables, context);

            target.disabled = false

			if (request.error) {
				return this.$showToast( 'A network error occurred', 'error', 6000);
			}

            let result = request.result.data.RejectOrder;
            
            if (result.success == false) {
				return this.$showToast(result.message, 'error', 6000);
            }

            if (result.success) {
                this.$showToast(result.message, 'success', 6000);
                this.timeOut = setTimeout(() => {
                    this.$router.push('/b/orders')
                }, 1500);
            }

        },
        acceptOrder: async function () {

            if (this.paystackPublicKey.length == 0) {
                this.paymentMethod = 'Pay on delivery'
            }

            if (this.deliveryTime.start.length == 0 || this.deliveryTime.end.length == 0) {
                this.$showToast("Add the delivery time span for this order", 'error', 7000);
                this.$addRedBorder('orderInfoDiv')
                this.$addRedBorder('startTime')
                this.$addRedBorder('endTime')
                return
            } else {
                this.$removeRedBorder('orderInfoDiv')
                this.$removeRedBorder('startTime')
                this.$removeRedBorder('endTime')
            }

            if (this.paymentMethod.length == 0) {
                this.$showToast("Choose a payment method for this order", 'error', 7000);
                this.$addRedBorder('orderInfoDiv');
                this.$addRedBorder('paymentMethod');
                return
            } else {
                this.$removeRedBorder('orderInfoDiv')
                this.$removeRedBorder('paymentMethod')
            }

            let target = document.getElementById("acceptOrder")

            let variables = {
                businessId: this.businessId,
                customerId: this.customerId,
                orderId: this.orderId,
                deliveryCharge: parseInt(this.deliveryCharge == 0 ? 0 : this.deliveryCharge, 10),
                startTime: this.deliveryTime.start,
                endTime: this.deliveryTime.end,
                paymentMethod: this.paymentMethod
            }
            

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
			}
            
            target.disabled = true
            
			let request = await this.$performGraphQlQuery(this.$apollo, BUSINESS_CONFIRM_ORDER, variables, context);

            target.disabled = false

			if (request.error) {
				return this.$initiateNotification("error", "Failed request", request.message)
			}

            let result = request.result.data.ConfirmOrder;
            
            if (result.success == false) {
                return this.$initiateNotification("error", "", result.message)
            }

            this.$initiateNotification("success", "", result.message)

            this.orderStatus = 1
        },
        updateDeliveryData: async function () {

            if (this.paystackPublicKey.length == 0) {
                this.paymentMethod = 'Pay on delivery'
            }

            if (this.deliveryTime.start.length == 0 || this.deliveryTime.end.length == 0) {
                this.$showToast("Add the delivery time span for this order", 'error', 7000);
                this.$addRedBorder('orderInfoDiv')
                this.$addRedBorder('startTime')
                this.$addRedBorder('endTime')
                return
            } else {
                this.$removeRedBorder('orderInfoDiv')
                this.$removeRedBorder('startTime')
                this.$removeRedBorder('endTime')
            }

            if (this.paymentMethod.length == 0) {
                this.$showToast("Choose a payment method for this order", 'error', 7000);
                this.$addRedBorder('orderInfoDiv');
                this.$addRedBorder('paymentMethod');
                return
            } else {
                this.$removeRedBorder('orderInfoDiv')
                this.$removeRedBorder('paymentMethod')
            }

            let target = document.getElementById("updateDeliveryData")

            let variables = {
                businessId: this.businessId,
                customerId: this.customerId,
                orderId: this.orderId,
                deliveryCharge: parseInt(this.deliveryCharge, 10),
                startTime: this.deliveryTime.start,
                endTime: this.deliveryTime.end,
                paymentMethod: this.paymentMethod
            }
            

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
			}
            
            target.disabled = true
            
			let request = await this.$performGraphQlQuery(this.$apollo, UPDATE_DELIVERY_CHARGE_AND_TIME, variables, context);

            target.disabled = false

			if (request.error) {
				return this.$initiateNotification("error", "Failed request", request.message)
			}

            let result = request.result.data.UpdateDeliveryCharge;
            
            if (result.success == false) {
                return this.$initiateNotification("error", "Update failed", result.message)
            }

            this.$initiateNotification("success", "Order updated", result.message)

        },
        deleteOrder: async function () {

            let variables = {
                orderId: this.orderId,
                businessId: this.businessId,
                customerId: this.customerId
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

            this.showDeleteModal = 0

            this.$initiateNotification("success", "Order deleted", result.message)

        }
    },
    beforeDestroy() {
        clearTimeout(this.timeOut)
    },
    watch: {
        deliveryCharge: function () { 
            this.paymentPrice = parseInt(this.deliveryCharge, 10) + parseInt(this.totalProductPrice, 10)

            if (this.deliveryCharge.length == 0) {
                this.paymentPrice = 0 + parseInt(this.totalProductPrice, 10)
            } else {
                this.paymentPrice = parseInt(this.deliveryCharge, 10) + parseInt(this.totalProductPrice, 10)
            }
        }
    },
    created() {
        if (process.client) {
            this.orderId = this.$route.params.id
            if(this.orderId.length == 0) {
                return this.$router.push('/b/orders/')
            } 
            this.GetBusinessDataFromStore()
            this.getOrderDetails()
        }
    },
    mounted() {
        this.pageLoader = false
    }

}
</script>
<style scoped>
    .customer-contact-details .modifier {
        font-weight: 500;
        color: #404040;
        display: contents !important;
    }
    .navbar-review-icon {
        display: flex !important;
        justify-content: center !important;
    }
    .font-18 {
        font-size: 18px !important;
        margin-bottom: 16px !important;
    }
    .line-27 {
        line-height: 27px !important;
    }
</style>