<template>
          <!-- Edit cart item -->
        <div class="modal-container" id="editItemInCart" >
            <div class="modal-dialog-box">
        
                <div class="modal-header">
                    <h4>Edit item in cart</h4>
        
                    <button class="close-modal-btn" @click="closeModal()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                            <use xlink:href="~/assets/customer/image/all-svg.svg#times"></use>
                        </svg>
                    </button>
                </div>
        
                <div v-show="isLoading" class="is-loading-container">
                    <div class="is-loading-inner-container" id="loadingContainer">
                        <div class="loader-action"><span class="loader"></span></div>
                    </div>
                </div>

                <div class="modal-content" v-show="!isLoading">

                    <div class="alert alert-info global-notification-alert" v-show="noProduct && !networkError">
                        <div id="infoArea">{{errorReason}}</div>
                    </div>

                    <div class="alert alert-danger global-notification-alert" v-show="noProduct && networkError">
                        <div id="infoArea">{{errorReason}}</div>
                        <button class="btn btn-white btn-small" @click="getProductById()">Try again</button>
                    </div>

                    <div v-show="!isLoading && !noProduct">
                            <div class="product-details-img-container">

                                <div class="slide-container" id="productImageSlideShow">
                                    
                                    <div class="product-image-slide" v-for="(item, index) in returnImages" :key="index" v-bind:class="{'is-active' : index == 0}">
                                        <img :data-src="formatBigSizeImage(item)" alt="" v-lazy-load>
                                    </div>

                                </div>

                                <button class="close-modal-btn btn-light-grey" @click="previousImage"  v-show="returnImages.length > 1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7.41" height="12" viewBox="0 0 7.41 12">
                                        <use xlink:href="~/assets/business/image/all-svg.svg#leftArrow"></use>
                                    </svg>
                                </button>
                                <button class="close-modal-btn btn-light-grey" id="nextSlide" @click="nextImage"  v-show="returnImages.length > 1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8.375" height="13.562" viewBox="0 0 8.375 13.562">
                                        <use xlink:href="~/assets/business/image/all-svg.svg#rightArrow"></use>
                                    </svg>
                                </button>
                            
                            </div>
                            <div class="selected-img-preview mg-bottom-32" v-show="returnImages.length > 1">
                                <div class="product-img-thumbnail" :data-slide="index + 1" @click="thumbSlide($event)" v-for="(item, index) in returnImages" :key="index"> 
                                    <img :data-src="iconSizeImage(item)" alt="" :data-slide="index + 1" @click="thumbSlide($event)" v-lazy-load>
                                </div>
                                
                            </div>
                            <div class="product-details-content-info">
                                <!-- details area -->
                                <!-- name -->
                                <div class="product-details-name"><h2>{{productName}}</h2></div>
                                <!-- price -->
                                <div class="product-price-container width-100">
                                <div class="product-details-price"><h3>₦ {{productPrice}}</h3></div>
                                <a href="javasscript:;" class="navbar-review-icon">
                                    <StarRating :score=reviewScore></StarRating>
                                </a>
                                </div>
                                <!-- description -->
                                <div class="product-details-container mg-bottom-32">
                                <div class="product-details-label">
                                    Product Description
                                </div>
                                <div class="product-description-text">
                                    {{productDescription}}
                                </div>
                                </div>


                                <!-- sizes -->
                                <div class="product-details-container">
                                    <div class="product-details-label">
                                        Available sizes
                                        <span>- choose a size</span>
                                    </div>
                                    <div class="color-picker-container">
                                        <div class="size-card" :id="`selectedSize${size.sizeId}`" v-for="size in returnSizes" :key="size.sizeId" @click="selectedSizeForCart(size.sizeId, size.sizeNumber)">{{size.sizeNumber}}</div>

                                        <div class="reset-select btn-white" v-show="productSizes.length > 0 && selectedSize" @click="resetSelectedSize()">Reset size</div>
                                    </div>
                                    <div class="no-data-available" v-show="productSizes.length == 0">
                                        <div class="text-area">No size available</div>
                                    </div>
                                </div>

                                <!-- color -->
                                <div class="product-details-container">
                                    <div class="product-details-label">
                                        Available colors
                                        <span>- choose a color</span>
                                    </div>
                                    <div class="color-picker-container">
                                        <div :id="`selectedColor${color.colorId}`" v-for="color in returnColors" :key="color.colorId"  v-bind:style="{'background-color': color.color}" @click="selectedColorForCart(color.colorId, color.color)" class="color-listing"></div>
                                        <div class="reset-select btn-white" v-show="productColors.length > 0 && selectedColor" @click="resetSelectedColor()">Reset color</div>
                                    </div>
                                    <div class="no-data-available" v-show="productColors.length == 0">
                                        <div class="text-area">No color available</div>
                                    </div>
                                </div>

                
                                <!-- action -->
                                <div class="">
                                <button class="btn btn-primary btn-block" v-show="selectedColor || selectedSize" @click="updateCartItemInDb()" id="updateCartItemInDb">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="mg-right-8 ">
                                        <use xlink:href="~/assets/customer/image/all-svg.svg#pencil"></use>
                                    </svg>
                                    <span>
                                        Update cart
                                    </span>
                                    <div class="loader-action"><span class="loader"></span></div>
                                </button>
                                </div>

                
                            </div>
                    </div>
                    
                </div>
                
                <div class="modal-footer border-unset">
                    <button @click="closeModal()" class="btn btn-default btn-light-grey btn-block">Close</button>
                </div>
        
            </div>
        </div>
        <!-- End of edit cart item -->
</template>

<script>
import { 
    GET_ALL_DETAILS_FROM_PRODUCT_WITH_ID,
} from '~/graphql/product'

import {
    ANONYMOUS_EDIT_PRODUCT_COLOR_AND_SIZE,
    SIGNED_USER_UPDATE_PRODUCT_SIZE_AND_COLOR
} from '~/graphql/cart'

import { mapActions, mapGetters, mapMutations } from 'vuex';

import StarRating from '~/plugins/vue-star-rating.client.vue'

export default {
    name: "EDITCARTITEMS",
    data () {
        return {
            // image slider
            currentSlide: 1,
            slider: "",


            accessToken: "",
            anonymousId: "",

            selectedColor: "",
            colorCode: "",

            selectedSize: "",
            sizeNumber: "",

            networkError: 0,
            noProduct: 0,
            isLoading: 1,
            errorReason: "",

            currentSlide: 1,
            slider: "",

            productImages: [],
            hide: "",
            productName: "",
            productPrice: "",
            categoryId: "",
            categoryName: "",
            subcategoryId: "",
            subcategoryName: "",
            primaryImage: "",
            productTags: [],
            productSizes: [],
            productColors: [],
            productDescription: "",
            reviewScore: 0,
        }
    },
    components: {
        StarRating
    },
    computed: {
        returnColors () {
            return this.productColors
        },
        returnSizes () {
            return this.productSizes
        },
        returnImages () {
            return this.productImages
        }
    },
    props: {
        count: {
            required: true,
            type: Number
        },
        productId: {
            required: true,
            type: String
        },
        itemId: {
            required: true,
            type: String
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
        closeModal: function() {
            document.querySelector("body").classList.remove("overflow-hidden");

            let target = document.getElementById('editItemInCart');
            target.classList.remove('show-modal')
            target.classList.remove('display-block')
        },
        showModal: async function () {
            document.querySelector("body").classList.add("overflow-hidden");
            let target = document.getElementById('editItemInCart');
            target.classList.add('show-modal', 'display-block')
            await this.getProductById()
            target.classList.add('show-modal', 'display-block')
    
        },
        sendEmittedData: function () {
            this.$emit('editModalToCart', {
                color: this.colorCode,
                size: this.sizeNumber
            })
        },
        getProductById: async function () {

            if (this.productId.length < 1 ) {
                this.errorReason = "The details of the item you want to edit was not provided. Refresh page and try again"
                this.isLoading = 0
                this.noProduct = 1
                return 
            }

            this.isLoading = 1

            let variables = {
                productId: this.productId
            }

            let request = await this.$performGraphQlQuery(this.$apollo, GET_ALL_DETAILS_FROM_PRODUCT_WITH_ID, variables, {});

            this.isLoading = 0

            if (request.error) {
                this.noProduct = 1
                this.networkError = 1
                this.errorReason = request.message
                return
            }


            let result = request.result.data.GetProductById;

            if (!result.success || result.product == null) {
                // set network error or no product found
                this.noProduct = 1
                this.error = result.message
                this.$initiateNotification('error', 'Failed request', result.message);
                return
            }

            this.noProduct = 0

            let product = result.product;

            this.productId = product.id;
            this.categoryName = product.category.categoryName;
            this.categoryId = product.category.categoryId;
            this.productColors = product.colors == null ? []: product.colors;
            this.productDescription = product.description;
            this.hide = product.hide;
            this.productImages = product.images;
            this.productName = product.name;
            this.productPrice = this.$numberNotation(product.price);
            this.productSizes = product.sizes == null ? [] : product.sizes;
            this.subcategoryName = product.subcategory.subcategoryName;
            this.subcategoryId = product.subcategory.subcategoryId;
            this.tags = product.tags == null ? []: product.tags
            this.reviewScore = product.reviewScore
            this.businessId = result.business.id

        },
        nextImage: function () {
            if (this.currentSlide >= this.slider.length) this.currentSlide = 0;
            this.$productImageSlides(this.currentSlide += 1, this.slider)
        },
        previousImage: function () {
            if (this.currentSlide == 1) {
                this.currentSlide = this.slider.length;
                this.$productImageSlides(this.currentSlide, this.slider)
            } else {
                this.$productImageSlides(this.currentSlide += -1, this.slider)
            }
        },
        thumbSlide: function(e) {
            let getTarget = e.target;
            let thumbCount = getTarget.getAttribute('data-slide');
            this.currentSlide = parseInt(thumbCount, 10)
            this.$productImageSlides(parseInt(thumbCount, 10), this.slider)
        },
        iconSizeImage: function (image) {
            return this.$formatProductImageUrl(this.businessId, image, "iconSize")
        },
        formatBigSizeImage: function (image) {
            return this.$formatProductImageUrl(this.businessId, image, "bigSize")
        },
        selectedSizeForCart: function (sizeId, sizeNumber) {
            let allSizes = document.querySelectorAll('.size-card');

            for (let x of allSizes) {
                x.classList.add('is-active')
            }

            document.getElementById('selectedSize'+sizeId).classList.remove('is-active');

            this.selectedSize = sizeId;
            this.sizeNumber = sizeNumber

        },
        selectedColorForCart: function (colorId, colorCode) {
            let allColors = document.querySelectorAll('.color-listing');

            for (let x of allColors) {
                x.classList.add('is-active')
            }

            document.getElementById('selectedColor'+colorId).classList.remove('is-active');

            this.selectedColor = colorId;
            this.colorCode = colorCode
        },
        resetSelectedColor: function () {
            let allColors = document.querySelectorAll('.color-listing');
            for (let x of allColors) {
                x.classList.remove('is-active')
            }
            this.selectedColor = "";
            this.colorCode = "";
        },
        resetSelectedSize: function () {
            let allSizes = document.querySelectorAll('.size-card');

            for (let x of allSizes) {
                x.classList.remove('is-active')
            }

            this.selectedSize = "";
            this.sizeNumber = "";
        },
        updateCartItemInDb: async function () {

            let target = document.getElementById('updateCartItemInDb');

            if (this.anonymousId.length > 0) {

                let variables = {
                    sizeId: this.selectedSize,
                    colorId: this.selectedColor,
                    itemId: this.itemId
                }

                target.disabled = true;

                let request = await this.$performGraphQlMutation(this.$apollo, ANONYMOUS_EDIT_PRODUCT_COLOR_AND_SIZE, variables, {});

                target.disabled = false;
                
                if (request.error) {
                    this.$initiateNotification('error', 'Failed request', request.message);
                    return
                }

                let result = request.result.data.AnonymousEditProductSizeAndColorInCart;

                if (result.success == false) {
                    this.$initiateNotification('error', 'Oops!', result.message);
                    return
                }

                this.$showToast('Cart updated', 'success')
                
                this.sendEmittedData()

                return
                
            } else {
                
                let context = {
                    headers: {
                        'accessToken': this.accessToken
                    }
                }
                
                let variables = {
                    sizeId: this.selectedSize,
                    colorId: this.selectedColor,
                    itemId: this.itemId
                }

                target.disabled = true;

                let request = await this.$performGraphQlMutation(this.$apollo, SIGNED_USER_UPDATE_PRODUCT_SIZE_AND_COLOR, variables, context);

                target.disabled = false;
                
                if (request.error) {
                    this.$initiateNotification('error', 'Failed request', request.message);
                    return
                }

                let result = request.result.data.UpdateItemColorAndSize;

                if (result.success == false) {
                    this.$initiateNotification('error', 'Oops!', result.message);
                    return
                }

                this.$showToast('Cart updated', 'success')
                
                this.sendEmittedData()

                return
            }
        }
    },
    watch: {
        count: function () {
            this.showModal()
        }
    },
    created () {
        if (process.client) {
            this.GetCustomerDataFromStore();
        }
    },
    async mounted () {
        if (process.client) {
            this.slider = document.getElementsByClassName("product-image-slide");
            this.$productImageSlides(this.currentSlide, this.slider);
        }
    }
}
</script>

<style scoped>
    .is-loading-container {
        width: 100%;
        height: 300px !important;
        position: relative;
    }
    .reset-select {
        font-weight: 500;
        background-color: #fff;
        padding: 10px 15px;
        cursor: pointer;
    }
    .color-listing.is-active,
    .size-card.is-active {
        opacity: .2;
        box-shadow: unset;
    }
</style>