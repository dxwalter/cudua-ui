<template>
    <div class="business">
        <div class="body-container">
            <TOPHEADER></TOPHEADER>
            <nuxt/>
            <div class="content-container">
                <SIDENAV></SIDENAV>
                <nuxt />
                <div class="content-area grey-bg-color">
                    <!-- pageLoader -->
                    <PAGELOADER v-show="pageLoader"></PAGELOADER>
                    <nuxt />
                    <!-- content goes in here -->
                    <div class="alert alert-secondary notification-alert" v-show="!orderStatus && !deliveryStatus && !pageLoader">
                        <div>We strongly recommed that you call this customer before adding delivery price and confirming this order.</div>
                        <a :href="`tel:${phoneNumber}`" class="btn btn-white btn-small">Call customer</a>
                    </div>

                    <div class="alert alert-info notification-alert" v-show="orderStatus && !deliveryStatus && !pageLoader">
                        <div>You have confirmed this order but yet to deliver order.</div>
                    </div>

                    <div class="alert alert-danger notification-alert" v-show="orderStatus && deliveryStatus == -1 && !pageLoader">
                        <div>The delivery of this order was rejected. Kindly call the customer to know why.</div>
                        <a :href="`tel:${phoneNumber}`" class="btn btn-white btn-small">Call customer</a>
                    </div>

                    <div class="alert alert-success notification-alert" v-show="orderStatus && deliveryStatus == 1 && !pageLoader">
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
                                    </a>
                                    <a href="#">Read customer review</a>
                                </div>

                                
                            </div>

                            <div class="item-details-listing">
                                <div class="order-menu">Ordered products</div>
                                
                                <div class="card" v-for="(product, index) in returnAllProducts" :key="index">
                                    <div class="order-card">
                                        <div class="order-card-img">
                                            <img :data-src="`${product.image}`" :alt="`${product.name}'s  picture`" v-lazy-load>
                                        </div>
                                        <div>
                                            <n-link :to="`/b/product/${product.productId}`" class="card-product-name">{{product.name}}

                                            </n-link>
                                            <div class="order-price">₦ {{formatNumber(product.price)}}</div>
                                            <div class="order-price" v-show="product.size">Size: {{product.size}}</div>
                                            <div class="order-price" v-show="product.color">Color: <span style="background-color: rgba(187, 35, 32, 1);"></span></div>
                                            <div class="order-price">Quantity: {{product.quantity}}</div>
                                        </div>
                                    </div>
                                    <div class="order-card-footer">
                                        <span>Subtotal</span>
                                        <span>₦ {{formatNumber(product.price * product.quantity)}}</span>
                                    </div>
                                </div>

                                <div class="card" id="orderInfoDiv" v-show="!deliveryStatus">
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
                                                    <input type="text" class="input-form white-bg-color" placeholder="3 hours" v-model="deliveryTime.start" id="startTime">
                                                    <div>TO</div>
                                                    <input type="text" class="input-form white-bg-color" placeholder="3 days" v-model="deliveryTime.end" id="endTime">
                                                </div>
                                            </div>
                                            <button class="btn btn-white btn-block" data-single-tab="singleTab" data-target="deliveryPrice">Add delivery charge</button>
                                        </div>

                                    </div>
                                </div>

                                <div class="card">
                                    <div class="order-action-container">
                                        <div class="final-delivery-charge">
                                            <div>Delivery time span</div>
                                            <div v-show="deliveryTime.start || deliveryTime.end">{{deliveryTime.start}} to {{deliveryTime.end}}</div>
                                            <div v-show="!deliveryTime.start && !deliveryTime.end">- to -</div>
                                        </div>
                                        <div class="final-delivery-charge">
                                            <div>Delivery charge</div>
                                            <span v-show="deliveryCharge">₦ {{formatNumber(deliveryCharge)}}</span>
                                            <span v-show="!deliveryCharge">₦ 0</span>
                                        </div>

                                        <div class="final-delivery-charge">
                                            <div>Total product price</div>
                                            <span>₦ {{formatNumber(totalProductPrice)}}</span>
                                        </div>

                                        <div class="total-price">
                                            <div>Total price</div>
                                            <div>₦ {{formatNumber(paymentPrice)}}</div>
                                        </div>

                                        <div class="order-items-action" v-show="!deliveryStatus">
                                            <button class="btn btn-primary btn-block" id="acceptOrder" @click="acceptOrder()" v-show="orderStatus == 0">
                                                Accept order
                                                <div class="loader-action"><span class="loader"></span></div>
                                            </button>
                                            <button class="btn btn-light-grey btn-block" data-trigger="modal" data-target="rejectOrder" v-show="orderStatus == 0">Reject order</button>

                                            <button class="btn btn-primary btn-block" id="updateDeliveryData" @click="updateDeliveryData()" v-show="orderStatus == 1">
                                                Update delivery charge and time
                                                <div class="loader-action"><span class="loader"></span></div>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                    
                        </div>

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
                                        
                                        <div class="form-control">
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

                    </div>
                    <BOTTOMNAV />
                    <nuxt/>
                </div>
            </div>
        </div>
        <CUSTOMERREVIEW></CUSTOMERREVIEW>
        <CREATECUSTOMERREVIEW></CREATECUSTOMERREVIEW>
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
    UPDATE_DELIVERY_CHARGE_AND_TIME } from '~/graphql/order';

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
            timeOut: null

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
                customerId: this.customerId,
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

            if (this.orderStatus == -1) {
                return this.$router.push('/b/orders')
            }

            $nuxt.$emit('CustomerReviews', {
                reviews: data.customerDetails.reviews == null ? [] : data.customerDetails.reviews,
                reviewScore: this.ratingScore
            });

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
				return this.$initiateNotification(result.message, 'error', 6000);
            }

            if (result.success) {
                this.$initiateNotification(result.message, 'success', 6000);
                this.timeOut = setTimeout(() => {
                    this.$router.push('/b/orders')
                }, 1000);
            }

        },
        acceptOrder: async function () {

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

            let target = document.getElementById("acceptOrder")

            let variables = {
                businessId: this.businessId,
                customerId: this.customerId,
                orderId: this.orderId,
                deliveryCharge: parseInt(this.deliveryCharge, 10),
                startTime: this.deliveryTime.start,
                endTime: this.deliveryTime.end
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

            let target = document.getElementById("updateDeliveryData")

            let variables = {
                businessId: this.businessId,
                customerId: this.customerId,
                orderId: this.orderId,
                deliveryCharge: parseInt(this.deliveryCharge, 10),
                startTime: this.deliveryTime.start,
                endTime: this.deliveryTime.end
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
            this.customerId = this.$route.query.ctr
            if((this.customerId == undefined) || this.orderId.length == 0) {
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
</style>