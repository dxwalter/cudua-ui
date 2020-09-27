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
                <div class="section-header"><h4>My cart (4)</h4></div>
                
                <!-- beginning of cart listing -->
                <div class="cart-listing-area">

                    <div class="card cart-card" v-for="(item, index) in allProducts" :key="index" :data-price="`${item.mainPrice}`" :data-quantity="`${item.quantity}`" :id="`item${item.productId}`">
                        <div class="item-basic-info">
                                <a href="#" class="cart-avatar">
                                    <img :data-src="item.image" :alt="`${item.name}'s image`"  v-lazy-load>
                                </a>
                            <div class="price-and-name">
                                <a href="#">{{item.name}}</a>
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
                                        <button @click="decreaseQuantity(item.mainPrice, item.productId)">-</button>
                                        <div :id="`quantity${item.productId}`">{{item.quantity}}</div>
                                        <button @click="increaseQuantity(item.mainPrice, item.productId)">+</button>
                                    </div>
                                </div>
                                <div class="item-count">
                                    <span>Subtotal</span>
                                    <div class="subtotal-price">₦ <div :id="`subTotal${item.productId}`">{{item.price}}</div></div>
                                </div>
                            </div>

                            <div class="cart-action-area">
                                <div class="mobile-actions">
                                    <button class="btn btn-white btn-small">
                                        <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" :data-target="`moreDetails${index}`">
                                        <span>More details</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22.05" height="13.616" viewBox="0 0 22.05 13.616">
                                            <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                                        </svg>
                                    </button>
                                    <button class="btn btn-light-grey btn-small ">Remove</button>
                                </div>
                                <div class="desktop-action">
                                    <button type="button" class="close-modal-btn">
                                        <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" :data-target="`moreDetails${index}`">
                                        <span></span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22.05" height="13.616" viewBox="0 0 22.05 13.616">
                                            <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                                        </svg>
                                    </button>
                                    <button type="button" class="close-modal-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" class="last-svg">
                                            <use xlink:href="~/assets/customer/image/all-svg.svg#times"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="cart-business-details" :id="`moreDetails${index}`">
                            <div class="d-flex-between">
                                <div class="info">More info:</div>
                                <button class="close-modal-btn" data-trigger="modal" data-target="editItemInCart">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="margin-unset">
                                        <use xlink:href="~/assets/customer/image/all-svg.svg#pencil"></use>
                                    </svg>
                                </button>
                            </div>
                            <div class="cart-order-info mg-bottom-16">
                                <div class="cart-product-size size-area" v-show="item.size">Size: <span>{{item.size}}</span></div>
                                <div class="d-flex" v-show="item.color">
                                    <div class="cart-product-size">Color: </div>
                                    <div class="cart-details-color" :style="{'background-color': item.color}"></div>
                                </div>
                            </div>

                            <div class="info">This item is bought from:</div>
                            <n-link :to="`/${item.username}`" class="cart-info-container">
                                <div class="cart-info-more-details">
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 18 16">
                                        <use xlink:href="~/assets/customer/image/all-svg.svg#store"></use>
                                    </svg>
                                    <div class="business-name">{{item.businessName}}</div>
                                </div>
                            </n-link>
                        </div>

                    </div>

                </div>
                <!-- end of cart listing -->

                    <div class="col-xs-12">
                        <div class="mg-bottom-32 md-cart-price-container">
                            <div class="d-flex-between cart-total-price">
                                <div>Items Total Price</div>
                                <div>₦ {{totalPrice}}</div>
                            </div>
                            <div class="d-flex-between price-info"> 
                                <div>Shipping price not included</div>
                                <div>Learn more</div>
                            </div>
                        </div>
                    </div>
                
                    <div class="col-xs-12">
                        <div class="md-cart-card">
                            <div class="cart-card-checkout">
                                <button class="btn btn-primary btn-lg" data-trigger="modal" data-target="checkoutModal">Continue to checkout</button>
                                <a href="#ewer" class="btn btn-white btn-lg" data-trigger="modal" data-target="confirmedOrderModal">Continue to shopping</a>
                            </div>
                        </div>
                    </div>


            </div> 
        <!-- end of content container -->

        <!-- footer area -->

        <BOTTOMADS></BOTTOMADS>

        <CUSTOMERFOOTER></CUSTOMERFOOTER>

        <CHECKOUTMODAL></CHECKOUTMODAL>
        <CONFIRMORDER></CONFIRMORDER>
        <EDITCARTITEM></EDITCARTITEM>

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

// cart modals
import CHECKOUTMODAL from '~/layouts/customer/cart/checkout.vue';
import CONFIRMORDER from '~/layouts/customer/cart/confirm-order.vue';
import EDITCARTITEM from '~/layouts/customer/cart/edit-cart-item.vue';

import { mapActions, mapGetters, mapMutations } from 'vuex';

import StarRating from '~/plugins/vue-star-rating.client.vue'

export default {
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

      StarRating
    },
    name: "CARTCOMPONENT",
    data: function() {
        return {
            pageLoader: true,
            accessToken: "",
            anonymousId: "",
            totalPrice: 0,
            allProducts: [],
        }
    },
    computed: {
        returnAllCartItems: function () {
            return this.allProducts
        }
     },
    created () {
        if (process.client) {
            this.GetCustomerDataFromStore();
            this.formatCartItems()
        }
    },
    methods: {
        ...mapGetters({
            'GetCustomerData': 'customer/GetCustomerDetails',
            "GetCartItems": "cart/GetCartItems"
        }),
        GetCustomerDataFromStore: function () {
			let customerData = this.GetCustomerData();
            this.accessToken = customerData.userToken
            this.anonymousId = customerData.anonymousId
        },
        formatCartItems: function () {
            let cartItems = this.GetCartItems();
            let totalPrice = 0
            let formattedCartItem = []
            
            cartItems.slice().reverse().forEach(item => {
                totalPrice = totalPrice + (item.price * item.quantity)
                formattedCartItem.push({
                    color: item.color,
                    image: item.image,
                    name: item.name,
                    price: this.$numberNotation(item.price),
                    mainPrice: item.price,
                    productId: item.productId,
                    reviewScore: item.reviewScore,
                    size: item.size,
                    username: item.username,
                    quantity: item.quantity,
                    businessName: item.businessName
                })
            });

            this.totalPrice = this.$numberNotation(totalPrice)
            this.allProducts = formattedCartItem
        },
        formatPrice: function (number) {
            return this.$numberNotation(number)
        },
        increaseQuantity: function (price, id) {
            let targetItem = document.getElementById(`item${id}`);
            let currentQuantity = parseInt(targetItem.getAttribute('data-quantity'), 10);
            
            let quantityTarget = document.getElementById(`quantity${id}`);

            let newCount = currentQuantity + 1;
            targetItem.setAttribute('data-quantity', newCount);

            quantityTarget.innerHTML = ""
            quantityTarget.innerHTML = newCount

            let newPrice = document.getElementById('subTotal'+id);
            newPrice.innerHTML = ""
            newPrice.innerHTML = this.formatPrice(newCount * price)
        },
        decreaseQuantity: function (price, id) {
            let targetItem = document.getElementById(`item${id}`);
            let currentQuantity = parseInt(targetItem.getAttribute('data-quantity'), 10);
            
            let quantityTarget = document.getElementById(`quantity${id}`);

            let newCount = currentQuantity <= 1 ? 1 : currentQuantity - 1;
            targetItem.setAttribute('data-quantity', newCount);

            quantityTarget.innerHTML = ""
            quantityTarget.innerHTML = newCount;
            
            let newPrice = document.getElementById('subTotal'+id);
            newPrice.innerHTML = ""
            newPrice.innerHTML = this.formatPrice(newCount * price)
            
        }
    },
    mounted () {
    
            this.pageLoader = false
    }
}
</script>