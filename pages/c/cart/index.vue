<template>
  <div class="customer">
    <div class="body-container grey-bg-color">

            <!-- beginning of navigation container -->
            <div class="nav-container">
                <MOBILESEARCH :cartTrigger=cartTrigger></MOBILESEARCH>
                <DESKTOPNAVGATION :cartTrigger=cartTrigger></DESKTOPNAVGATION>
                <MOBILENAVIGATION :cartTrigger=cartTrigger></MOBILENAVIGATION>
            </div>

            <!-- pageLoader -->
            <PAGELOADER v-show="pageLoader"></PAGELOADER>
            <div class="alert alert-info global-notification-alert" v-show="returnAllBusinessInCart.length > 1 && !pageLoader">
                <div>Your cart contains products from more than one business</div>
                <button class="btn btn-white btn-small"  data-trigger="modal" data-target="allBusinessInCart" >Learn more</button>
            </div>

            <div class="content-container" v-show="!pageLoader">
                <!-- header area -->
                <div class="section-header" v-show="returnAllCartItems.length > 0"><h4>My cart ({{returnAllCartItems.length}})</h4></div>
                
                <!-- beginning of cart listing -->
                <div class="cart-listing-area mg-bottom-32" v-show="returnAllCartItems.length > 0">

                    <div class="card cart-card" v-for="(item, index) in returnAllCartItems" :key="index" :data-price="`${item.mainPrice}`" :data-quantity="`${item.quantity}`" :id="`item${item.productId}`">
                        <div class="item-basic-info">
                                <n-link :to="`/p/${item.productId}`" class="cart-avatar">
                                    <img :data-src="item.image" :alt="`${item.name}'s image`"  v-lazy-load>
                                </n-link>
                            <div class="price-and-name">
                                <n-link :to="`/p/${item.productId}`">{{item.name}}</n-link>
                                <div class="price">₦ {{item.price}}</div>
                                <div class="reviews">
                                    <StarRating :score=item.reviewScore></StarRating>
                                </div>
                            </div>
                        </div>

                        <div class="mb-fold-content">
                            <div class="quantity-unit-price">
                                <div class="item-count">
                                    <span>Quantity</span>
                                    <div class="cart-item-count-btn">
                                        <button @click="decreaseQuantity(item.mainPrice, item.productId, item.itemId)">-</button>
                                        <div :id="`quantity${item.productId}`">{{item.quantity}}</div>
                                        <button @click="increaseQuantity(item.mainPrice, item.productId, item.itemId)">+</button>
                                    </div>
                                </div>
                                <div class="item-count">
                                    <span>Subtotal</span>
                                    <div class="subtotal-price">₦ <div :id="`subTotal${item.productId}`">{{item.subTotal}}</div></div>
                                </div>
                            </div>

                            <div class="cart-action-area">
                                <div class="mobile-actions">
                                    <button class="btn btn-white btn-small">
                                        <input type="checkbox" class="dropdownCheckBox" @click="toggleMoreDetails(`moreDetails${index}`)">
                                        <span>More details</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22.05" height="13.616" viewBox="0 0 22.05 13.616">
                                            <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                                        </svg>
                                    </button>
                                    <button class="btn btn-light-grey btn-small " @click="deleteItemFromCart(item.productId, item.itemId)" :id="`deleteItemFromCart${item.itemId}`">
                                        Remove
                                        <div class="loader-action"><span class="loader"></span></div>
                                    </button>
                                </div>
                                <div class="desktop-action">
                                    <button type="button" class="close-modal-btn">
                                        <input type="checkbox" class="dropdownCheckBox" @click="toggleMoreDetails(`moreDetails${index}`)">
                                        <span></span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22.05" height="13.616" viewBox="0 0 22.05 13.616">
                                            <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                                        </svg>
                                    </button>
                                    <button type="button" class="close-modal-btn" @click="deleteItemFromCart(item.productId, item.itemId)" :id="`deleteItemFromCart${item.itemId}`">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" class="last-svg">
                                            <use xlink:href="~/assets/customer/image/all-svg.svg#times"></use>
                                        </svg>
                                        <div class="loader-action"><span class="loader"></span></div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="cart-business-details" :id="`moreDetails${index}`">
                            <div class="d-flex-between">
                                <div class="info">Cart info:</div>
                                <button class="close-modal-btn" @click="showEditProductModal(item.productId, item.itemId)">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="margin-unset">
                                        <use xlink:href="~/assets/customer/image/all-svg.svg#pencil"></use>
                                    </svg>
                                </button>
                            </div>
                            <div class="cart-order-info mg-bottom-16">

                                <div class="cart-product-size size-area mg-bottom-16" v-show="item.size">Size: <span :id="`size${item.itemId}`">{{item.size}}</span></div>
                                
                                <div class="d-flex" v-show="item.color">
                                    <div class="cart-product-size">Color: </div>
                                    <div class="cart-details-color" :style="{'background-color': item.color}" :id="`color${item.itemId}`"></div>
                                </div>
                            </div>

                            <div class="info">Business details:</div>
                            <n-link :to="`/${item.username}`" class="cart-info-container">
                                <div class="cart-info-more-details">
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 18 16">
                                        <use xlink:href="~/assets/customer/image/all-svg.svg#store"></use>
                                    </svg>
                                    <div class="business-name">{{item.businessName}}</div>
                                </div>
                                <div class="cart-info-more-details" v-show="item.address.street">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                        <use xlink:href="~/assets/customer/image/all-svg.svg#mapMaker"></use>
                                    </svg>
                                    <div class="business-name">{{item.address.number}} {{item.address.street}} {{item.address.community}}, {{item.address.state}}</div>
                                </div>
                            </n-link>
                        </div>

                    </div>

                </div>
                <!-- end of cart listing -->

                        <!-- when no product is found, show this -->
                    <div class="link-error-area" v-show="!pageError && allProducts.length == 0 && !pageLoader">
                        <img src="~/static/images/product.svg" alt="" class="mg-bottom-32">
                        <div class="error-cause" v-html="errorReason">{{errorReason}}</div>
                    </div>
                    <!-- end of error area -->

                    <!-- when an error occurs, show this -->
                    <div class="link-error-area" v-show="pageError && !pageLoader">
                        <img src="~/static/images/server-error.svg" alt="">
                        <div class="error-cause" v-html="errorReason">{{errorReason}}</div>
                    </div>
                    <!-- end of error area -->



                <div class="" v-show="!pageLoader && returnAllCartItems.length > 0">
                    <div class="mg-bottom-32 md-cart-price-container">
                        <div class="d-flex-between cart-total-price">
                            <div>Items Total Price</div>
                            <div>₦ {{totalPrice}}</div>
                        </div>
                        <div class="d-flex-between price-info" @click="toggleMoreDetails('deliveryChargeInfo')"> 
                            <div>Shipping price is not included</div>
                            <div>Learn more</div>
                        </div>
                    <div id="deliveryChargeInfo" class="cart-business-details white-bg-color font-14 price-info">
                        The shipping price/delivery charge of ordered products is to determined by the business(es) you are buying from. A business will have to see an order, know the location of the customer before providing the delivery charge.
                    </div>
                    </div>
                </div>
            
                <div class="" v-show="!pageLoader && returnAllCartItems.length > 0">
                    <!-- <div class="md-cart-card"> -->
                        <div class="cart-card-checkout">
                            <button class="btn btn-primary btn-lg" v-show="!accessToken" data-target="customerSignInModal" data-trigger="modal">Continue to checkout</button>

                            <button class="btn btn-primary btn-lg" v-show="accessToken && storePhoneNumber" id="placeOrder" @click="placeOrder()">
                                Place order
                                <div class="loader-action"><span class="loader"></span></div>
                            </button>

                            <button class="btn btn-primary btn-lg" data-trigger="modal" data-target="addPhoneNumberModal" v-show="accessToken && storePhoneNumber.length == 0">Continue to checkout</button>

                            <n-link to="/" class="btn btn-white btn-lg">Continue to shopping</n-link>
                        </div>
                    <!-- </div> -->
                </div>


            </div> 

            <!-- add phone number modal -->
            <div class="modal-container" id="addPhoneNumberModal">
                <div class="modal-dialog-box">

                    <div class="modal-header">
                        <h4>Add your phone number</h4>

                        <button class="close-modal-btn" data-target="addPhoneNumberModal" data-dismiss="modal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                <use xlink:href="~/assets/customer/image/all-svg.svg#times"></use>
                            </svg>
                        </button>
                    </div>

                    <div class="modal-content">
                        <div id="createCategory" class="is-active tab-content-area">
                            <div class="alert alert-light font-14 mg-bottom-24">
                                The reason we are collecting this data is to allow the business(es) you are buying from to contact you as regarding delivery charge and payment method.
                            </div>
                            <div class="form-control">
                                <!-- <label for="businessType" class="form-label">Subject of report</label> -->
                                <input type="number" name="" id="cartPhoneNumber" class="input-form" placeholder="Phone number" v-model="inputPhoneNumber">
                            </div>
                            <div class="form-control">
                                <button class="btn btn-block btn-primary" type="button" id="addCustomerPhoneNumber" @click="addCustomerPhoneNumber()">
                                    Submit phone number
                                    <div class="loader-action"><span class="loader"></span></div>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="modal-footer" data-target="addPhoneNumberModal" data-dismiss="modal">
                        <button class="btn btn-default btn-light-grey">Close</button>
                    </div>

                </div>
            </div>
            <!-- end of add phone number modal -->

            <!-- all businesses in cart -->
            <div class="modal-container" id="allBusinessInCart">
                <div class="modal-dialog-box">

                    <div class="modal-header">
                        <h4>Products from {{returnAllBusinessInCart.length}} businesses</h4>

                        <button class="close-modal-btn" data-target="allBusinessInCart" data-dismiss="modal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                <use xlink:href="~/assets/customer/image/all-svg.svg#times"></use>
                            </svg>
                        </button>
                    </div>

                    <div class="modal-content">
                        <div id="createCategory" class="is-active tab-content-area">
                            <div class="alert alert-light font-14 mg-bottom-32">
                                Your cart contains products from {{returnAllBusinessInCart.length}} businesses. Each of these businesses will decide the delivery charge and delivery time span for the products you want to buy.
                            </div>

                            <div class="biz-listing">

                                <n-link :to="`/${business.username}`" class="chat-recipient" v-for="(business, index) in returnAllBusinessInCart" :key="index">
                                        <div  class="last-chat-details">
                                            <div  class="chat-time-recipient">
                                                <span >{{business.name}}</span> 
                                            </div> 
                                        <div  class="last-chat-preview">@{{business.username}}</div>
                                    </div>
                                </n-link>

                            </div>

                        </div>
                    </div>
                    
                    <div class="modal-footer" data-target="allBusinessInCart" data-dismiss="modal">
                        <button class="btn btn-default btn-light-grey">Close</button>
                    </div>

                </div>
            </div>
            <!-- end of add phone number modal -->


            <!-- end of content container -->

        <!-- footer area -->

        <BOTTOMADS></BOTTOMADS>

        <CUSTOMERFOOTER></CUSTOMERFOOTER>

        <CHECKOUTMODAL></CHECKOUTMODAL>
        <CONFIRMORDER></CONFIRMORDER>
        <EDITCARTITEM 
            :productId="productId"
            :itemId="itemId"
            :count="modalCount"

            v-on:editModalToCart="setNewlyEditedData"
        ></EDITCARTITEM>

        <LoginComponent></LoginComponent>

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
import LoginComponent from '~/components/login/login.vue'

// cart modals
import CHECKOUTMODAL from '~/layouts/customer/cart/checkout.vue';
import CONFIRMORDER from '~/layouts/customer/cart/confirm-order.vue';
import EDITCARTITEM from '~/layouts/customer/cart/edit-cart-item.vue';

import {
    GET_ANONYMOUS_CART_ITEMS,
    GET_SIGNED_CART_ITEMS,
    ANONYMOUS_EDIT_PRODUCT_QUANTITY_IN_CART,
    ANONYMOUS_DELETE_ITEM_FROM_CART,
    SIGNED_USER_UPDATE_PRODUCT_QUANTITY_IN_CART,
    SIGNED_DELETE_ITEM_IN_CART
} from '~/graphql/cart';

import { CREATE_NEW_ORDER } from '~/graphql/order'

import { EDIT_CUSTOMER_CONTACT } from '~/graphql/customer'

import { mapActions, mapGetters, mapMutations } from 'vuex';

import StarRating from '~/plugins/vue-star-rating.client.vue'

export default {
    name: "CARTCOMPONENT",
    components: {
        DESKTOPNAVGATION, 
        MOBILENAVIGATION, 
        MOBILESEARCH, 
        BOTTOMADS, 
        CUSTOMERFOOTER, 
        PAGELOADER,
        CHECKOUTMODAL,
        CONFIRMORDER,
        EDITCARTITEM,
        
        StarRating,
        LoginComponent
    },
    name: "CARTCOMPONENT",
    data: function() {
        return {
            pageLoader: true,
            accessToken: "",
            anonymousId: "",
            totalPrice: 0,
            allProducts: [],

            pageError: 0,
            errorReason: "",

            // showModal data
            itemId: "",
            productId: "",
            modalCount: 0,

            // quantity timeout
            quantityTimeout: null,
            cartTrigger: 0,

            storePhoneNumber: "",
            inputPhoneNumber: "",
            email: "",
            allBusinessInCart: [],

            timeOutHolder: null
        }
    },
    computed: {
        returnAllCartItems: function () {
            return this.allProducts
        },
        returnAllBusinessInCart () {
            return this.allBusinessInCart
        }
     },
    created () {
        if (process.client) {
            this.GetCustomerDataFromStore();
            if (this.accessToken.length == 0) {
                this.getAnonymousCartItems()
            } else {
                this.getSignedCartItems()
            }
        }
    },
    beforeDestroy(){
        this.clearTimeout(this.quantityTimeout)
    },
    methods: {
        placeOrder: async function() {

            let target = document.getElementById('placeOrder');

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }

            target.disabled = true;

            let request = await this.$performGraphQlMutation(this.$apollo, CREATE_NEW_ORDER, {}, context);

            target.disabled = false;

            if (request.error) {
                return this.$initiateNotification('error', "Failed request", request.message)
            }


            let result = request.result.data.CreateOrder;

            if (result.success == false) {
                this.$initiateNotification('error', 'Oops!', result.message);
                return
            }

            this.$initiateNotification('success', 'Order placed', result.message);

            this.$store.dispatch('cart/setItemCount', 0)
            this.cartTrigger = 1
            
            this.timeOutHolder = setTimeout(() => {
                this.$router.push(`/c/orders/${result.orderId}`)
            }, 1000);



        },
        addCustomerPhoneNumber: async function() {

            if (this.inputPhoneNumber.length < 11) {
                this.$showToast(`Your phone number must be 11 characters but you typed ${this.inputPhoneNumber.length} characters`, 'error', 6000);
                this.$addRedBorder('cartPhoneNumber')
                return
            } else {
                this.$removeRedBorder('addCustomerPhoneNumber')
            }


            let target = document.getElementById('addCustomerPhoneNumber');
            let modalTarget = document.getElementById('addPhoneNumberModal');


            let variables = {
                email: this.email,
                phone: this.inputPhoneNumber
            }

            let context = {
                hasUpload: true,
                headers: {
                    'accessToken': this.accessToken
                }
            }

            target.disabled = true

            let request = await this.$performGraphQlMutation(this.$apollo, EDIT_CUSTOMER_CONTACT, variables, context);

            target.disabled = false

            if (request.error) {
                return this.$initiateNotification('error', "Failed upload", request.message)
            }

            let result = request.result.data.editUserContact

            if (result.success == false) {
                return  this.$initiateNotification('error', "Oops!", result.message)
            }

            this.$initiateNotification('success', "Profile Updated", result.message)

            modalTarget.classList.remove('show-modal', 'display-block')
            document.querySelector("body").classList.remove("overflow-hidden");

            this.storePhoneNumber = this.inputPhoneNumber

            this.$store.dispatch('customer/setCustomerData', {
                phone: this.inputPhoneNumber,
                email: this.email,
            })
        },
        clearTimeout: function (time) {
            clearTimeout(time)
        },
        toggleMoreDetails: function (elementId) {
            let target = document.getElementById(elementId);
            target.classList.toggle('showEffect')
        },
        ...mapGetters({
            'GetCustomerData': 'customer/GetCustomerDetails',
            "GetCartItems": "cart/GetCartItems"
        }),
        GetCustomerDataFromStore: function () {
			let customerData = this.GetCustomerData();
            this.accessToken = customerData.userToken
            this.storePhoneNumber = customerData.phone
            this.email = customerData.email
            this.anonymousId = customerData.anonymousId
        },
        setNewlyEditedData: function (data) {

            if (data.size.length > 0) {
                let sizeData = document.getElementById(`size${this.itemId}`);
                sizeData.innerHTML = ""
                sizeData.innerHTML = data.size
            }

            if (data.color.length > 0) {
                let colorData = document.getElementById(`color${this.itemId}`);
                colorData.style.backgroundColor = data.color
            }
        },
        getAnonymousCartItems: async function () {

            if (this.anonymousId.length == 0) {
                this.$initiateNotification('error', 'Page error', 'An error occurred. Kindly refresh page and try again');
                this.pageError = 1
                this.errorReason = 'An error occurred. Kindly refresh page and try again'
                return
            }

            let variables = {
                anonymousId: this.anonymousId
            }

            let request = await this.$performGraphQlQuery(this.$apollo, GET_ANONYMOUS_CART_ITEMS, variables, {});

            if (request.error) {
                this.$initiateNotification('error', 'Page error', request.message);
                this.pageError = 1
                this.errorReason = request.message
                return
            }

            let result = request.result.data.AnonymousGetCartItems

            if (result.success == false) {
                this.$initiateNotification('error', 'Page error', result.message);
                this.pageError = 1
                this.errorReason = result.message

                return
            }

            
            this.$store.dispatch('cart/setItemCount', result.cart == null ? 0 : result.cart.length)
            this.cartTrigger = 1
            
            if (result.cart == null) {
                this.errorReason = "You do not have any item in your cart"
                this.$initiateNotification('info', 'Empty cart', result.message)
                return
            }

            this.formatCartItems(result.cart)


        },
        getSignedCartItems: async function () {

            if (this.accessToken.length == 0) {
                this.$initiateNotification('error', 'Page error', 'An error occurred. Kindly refresh page and try again');
                this.pageError = 1
                this.errorReason = 'An error occurred. Kindly refresh page and try again'
                return
            }


            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }

            let request = await this.$performGraphQlQuery(this.$apollo, GET_SIGNED_CART_ITEMS, {}, context);

            if (request.error) {
                this.$initiateNotification('error', 'Page error', request.message);
                this.pageError = 1
                this.errorReason = request.message
                return
            }

            let result = request.result.data.GetCartItems

            if (result.success == false) {
                this.$initiateNotification('error', 'Page error', result.message);
                this.pageError = 1
                this.errorReason = result.message

                return
            }

            this.$store.dispatch('cart/setItemCount', result.cart == null ? 0 : result.cart.length)
            this.cartTrigger = 1

            if (result.cart == null) {
                this.errorReason = "You do not have any item in your cart"
                this.$initiateNotification('info', 'Empty cart', result.message)
                return
            }

            this.formatCartItems(result.cart)

        },
        formatCartItems: async function (cartItems) {
            

            let totalPrice = 0
            let formattedCartItem = [];

            let businessDataArray = [];
            let allBusinessId =  [];
            
            cartItems.forEach(item => {
                formattedCartItem.push({
                    subTotal: this.$numberNotation(item.product.price * item.quantity),
                    itemId: item.itemId, // please note that this is different from product id
                    color: item.color,
                    size: item.size,
                    image: this.$formatProductImageUrl(item.business.businessId, item.product.image, "thumbnail"),
                    name: item.product.name,
                    businessId: item.business.businessId,
                    price: this.$numberNotation(item.product.price),
                    mainPrice: item.product.price,
                    productId: item.product.productId,
                    reviewScore: item.product.review,
                    username: item.business.username,
                    quantity: item.quantity,
                    businessName: item.business.name,
                    address: item.business.address == undefined || item.business.address == null ? "": item.business.address
                });
                allBusinessId.push(item.business.businessId)
                businessDataArray.push({
                    name: item.business.name,
                    businessId: item.business.businessId,
                    username: item.business.username
                })
            });

            if (allBusinessId.length > 1) {

                    let uniqueId = new Set(allBusinessId);
                    let clearedArrayIds = []

                    uniqueId.forEach(element => {
                        clearedArrayIds.push(element)
                    });
                
                    let allBusiness = [];

                    if (clearedArrayIds.length > 1) {
                        
                        for (let ids of clearedArrayIds) {
                            for (let biz of businessDataArray) {
                                
                                if (ids == biz.businessId) {
                                    allBusiness.push(biz)
                                    break;
                                }
                            }
                        }
                        
                    }

                    this.allBusinessInCart = allBusiness

            }

            this.totalPrice = this.$numberNotation(totalPrice)
            this.allProducts = formattedCartItem
            this.calculateTotalPrice()

        },
        formatPrice: function (number) {
            return this.$numberNotation(number)
        },
        increaseQuantity: function (price, id, itemId) {
            let targetItem = document.getElementById(`item${id}`);
            let currentQuantity = parseInt(targetItem.getAttribute('data-quantity'), 10);
            
            let quantityTarget = document.getElementById(`quantity${id}`);

            let newQuantity = currentQuantity + 1;
            targetItem.setAttribute('data-quantity', newQuantity);

            quantityTarget.innerHTML = ""
            quantityTarget.innerHTML = newQuantity

            let newPrice = document.getElementById('subTotal'+id);
            newPrice.innerHTML = ""
            newPrice.innerHTML = this.formatPrice(newQuantity * price)

            this.updateProductQuantityInDb(newQuantity, itemId);

            this.updateItemQuantityInComponent(itemId, newQuantity);
            this.calculateTotalPrice()
        },
        decreaseQuantity: function (price, id, itemId) {
            let targetItem = document.getElementById(`item${id}`);
            let currentQuantity = parseInt(targetItem.getAttribute('data-quantity'), 10);

            if(currentQuantity == 1) return
            
            let quantityTarget = document.getElementById(`quantity${id}`);

            let newQuantity = currentQuantity <= 1 ? 1 : currentQuantity - 1;

            targetItem.setAttribute('data-quantity', newQuantity);

            quantityTarget.innerHTML = ""
            quantityTarget.innerHTML = newQuantity;
            
            let newPrice = document.getElementById('subTotal'+id);
            newPrice.innerHTML = ""
            newPrice.innerHTML = this.formatPrice(newQuantity * price);

            this.updateProductQuantityInDb(newQuantity, itemId)
            this.updateItemQuantityInComponent(itemId, newQuantity);
            this.calculateTotalPrice()
            
        },
        updateItemQuantityInComponent: function (itemId, newQuantity) {

            let allItems = this.allProducts
            
            for (const [index, x] of allItems.entries()) {
                if (x.itemId == itemId) {
                    allItems[index].quantity = newQuantity
                }
            }

        },
        calculateTotalPrice: function () {
            let allItems = this.allProducts

            let totalPrice = 0

            allItems.forEach(item => {
                totalPrice = totalPrice + (item.mainPrice * item.quantity)
            })

            this.totalPrice = this.formatPrice(totalPrice)
        },
        updateProductQuantityInDb: async function (quantity, itemId) {
            
            this.clearTimeout(this.quantityTimeout)

            if (this.anonymousId.length > 0) {

                this.quantityTimeout = setTimeout(async () => {

                    let variables = {
                        quantity: quantity,
                        itemId: itemId
                    }

                    let request = await this.$performGraphQlQuery(this.$apollo, ANONYMOUS_EDIT_PRODUCT_QUANTITY_IN_CART, variables, {});

                    if (request.error) {
                        this.$initiateNotification('error', "Network", request.message)
                        return
                    }

                    let result = request.result.data.AnonymousEditProductQuanityInCart;

                    if (result.success == false) {
                        this.$initiateNotification('error', "Quantity update", result.message)
                        return
                    }

                    this.$showToast('Quantity updated', 'success')

                }, 1000);

            } else {
                
                this.quantityTimeout = setTimeout(async () => {

                        let variables = {
                            quantity: quantity,
                            itemId: itemId
                        }

                        let context = {
                            headers: {
                                'accessToken': this.accessToken
                            }
                        }


                        let request = await this.$performGraphQlQuery(this.$apollo, SIGNED_USER_UPDATE_PRODUCT_QUANTITY_IN_CART, variables, context);

                        if (request.error) {
                            this.$initiateNotification('error', "Network", request.message)
                            return
                        }

                        let result = request.result.data.UpdateItemQuantity;

                        if (result.success == false) {
                            this.$initiateNotification('error', "Quantity update", result.message)
                            return
                        }

                        this.$showToast('Quantity updated', 'success')

                    }, 1000);
                }
        },
        showEditProductModal: function(productId, itemId) {
            this.itemId = itemId
            this.productId = productId
            this.modalCount = this.modalCount + 1
        },
        removeItemFromUI: function (itemId) {
            let allItems = this.allProducts
            let newArray = []

            for (const [index, x] of allItems.entries()) {
                if (x.itemId !== itemId) {
                    newArray.push(x)
                }
            }

            this.allProducts = newArray;

            if (this.allProducts.length == 0) {
                this.allProducts = [];
                this.errorReason = "You no longer have any item in your cart"
                return
            }

            this.calculateTotalPrice()

        },
        deleteItemFromCart: async function (productId, itemId) {
            
            let target = document.getElementById(`deleteItemFromCart${itemId}`);

            if (this.anonymousId.length > 0) {

                let variables = {
                    itemId: itemId,
                    anonymousId: this.anonymousId
                }

                target.disabled = true;

                let request = await this.$performGraphQlMutation(this.$apollo, ANONYMOUS_DELETE_ITEM_FROM_CART, variables, {});

                target.disabled = false;

                if (request.error) {
                    return this.$initiateNotification('error', "Failed request", request.message)
                }


                let result = request.result.data.AnonymousDeleteItemFromCart;

                if (result.success == false) {
                    this.$initiateNotification('error', 'Oops!', result.message);
                    return
                }

                this.removeItemFromUI(itemId)


                this.$initiateNotification('success', 'Item deleted', result.message);

                this.$store.dispatch('cart/subtractItemCount', 1)
                this.cartTrigger = this.cartTrigger == 0 ? 1 : 0

            } else {

                let variables = {
                    itemId: itemId
                }

                let context = {
                    headers: {
                        'accessToken': this.accessToken
                    }
                }

                target.disabled = true;

                let request = await this.$performGraphQlMutation(this.$apollo, SIGNED_DELETE_ITEM_IN_CART, variables, context);

                target.disabled = false;

                if (request.error) {
                    return this.$initiateNotification('error', "Failed request", request.message)
                }


                let result = request.result.data.DeleteItemFromCart;

                if (result.success == false) {
                    this.$initiateNotification('error', 'Oops!', result.message);
                    return
                }

                this.removeItemFromUI(itemId)
                this.$initiateNotification('success', 'Item deleted', result.message);

                this.$store.dispatch('cart/subtractItemCount', 1)
                this.cartTrigger = this.cartTrigger == 0 ? 1 : 0
            }
        }
    }, 
    mounted () {
        this.pageLoader = false
    },
    beforeDestroy() {
        clearTimeout(this.timeOutHolder)
    }
}
</script>
<style scoped>
    .font-14 {
        font-size: 14px !important;
        line-height: 27px !important;
    }
    .global-notification-alert {
        margin-top: 0 !important;
    }
    @media(min-width: 1280px) {
        .global-notification-alert {
            padding: 16px 40px
        }
    }
    .chat-time-recipient span {
        font-size: 18px !important;
    }
    .biz-listing .chat-recipient:last-child {
        border: 0 !important;
    }
</style>