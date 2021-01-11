<template>
  <div class="customer">
    <div class="body-container grey-bg-color">

      <!-- beginning of navigation container -->
        <div class="nav-container">
            <MOBILESEARCH :cartTrigger=cartTrigger></MOBILESEARCH>
            <Nuxt />
            <BUSINESSNAV v-show="!pageLoader && !serverError" :cartTrigger=cartTrigger></BUSINESSNAV>
            <Nuxt />
            <DESKTOPNAVGATION v-show="pageLoader || serverError" :cartTrigger=cartTrigger></DESKTOPNAVGATION>
            <Nuxt />
            <MOBILENAVIGATION :cartTrigger=cartTrigger></MOBILENAVIGATION>
            <Nuxt />
        </div>

        <!-- pageLoader -->
        <PAGELOADER v-show="pageLoader"></PAGELOADER>
        <Nuxt />

        <div class="content-container mg-bottom-32">
          <!-- bookmark area -->
            <div class="section-header"><h4>Product details</h4></div>
            <!-- content start here -->
            <div class="all-product-details-container" v-show="!productNotFound && !pageLoader && !subscription">
                <!-- product image area -->
                <div class="image-area">
                    <!-- image area -->
                    <div class="product-details-image-info">
                        <div class="product-details-img-container">

                            <div class="slide-container white-bg-color" id="productImageSlideShow">
                                <VueSlickCarousel :arrows="true">
                                    <div class="product-image-slide" v-for="(item, index) in returnImages" :key="index" v-bind:style="{height: contentHeight}">
                                        <img :data-src="formatBigSizeImage(item)" alt="" v-lazy-load>
                                    </div>
                                </VueSlickCarousel>
                            </div>
                        
                        </div>

                    </div>
                </div>
                <!-- end of product image area -->

                <!-- beginning of product details -->
                <div class="product-details-content-info">
                    <!-- details area -->
                    <!-- name -->
                    <div class="product-details-name"><h2>{{productName}}</h2></div>
                    <!-- price -->
                    <div class="product-price-container">
                        <div class="product-details-price"><h3>₦ {{productPrice}}</h3></div>
                        <a href="javascript:;" data-trigger="modal" data-target="productReview" class="navbar-review-icon">
                            <StarRating :score=reviewScore></StarRating>
                            <Nuxt />
                        </a>
                    </div>
                    <!-- description -->
                    
                    <div class="product-details-container mg-bottom-32">
                        <div class="product-details-label">
                            Product Description
                        </div>
                        <div class="product-description-text" v-html="productDescription"></div>
                        <div class="no-data-available" v-show="productDescription.length == 0">
                            <div class="text-area">No description available</div>
                        </div>
                    </div>


                    <!-- sizes -->
                    <div class="product-details-container mg-bottom-32">
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
                    <div class="product-details-container mg-bottom-32">
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

                    <!-- share -->
                    <div class="product-details-container mg-bottom-32">
                        <div class="product-details-label">
                            Share
                        </div>
                        <div class="opacity-0" id="productLink">https://cudua.com/p/{{productId}}</div>
                        
                        <div class="share-action-container d-flex">
                        
                            <a :href="`whatsapp://send?text=Checkout ${productName} https://cudua.com/p/${productId}`" target="_blank" class="close-modal-btn" data-action="share/whatsapp/share" v-show="screenWidth < 1024" data-brand="whatsapp">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="margin-unset">
                                <use xlink:href="~/assets/customer/image/all-svg.svg#whatsappIcon"></use>
                            </svg>
                            </a>

                            <a :href="`https://www.facebook.com/sharer/sharer.php?u=https://www.cudua.com/p/${productId}`" target="_blank"  class="close-modal-btn btn-white" data-brand="facebook">
                                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="margin-unset">
                                    <use xlink:href="~/assets/customer/image/all-svg.svg#facebookRoundIcon"></use>
                                </svg>
                            </a>

                            <a :href="`https://twitter.com/share?text=You should see this great product.&url=https://www.cudua.com/p/${productId}`" target="_blank"  class="close-modal-btn" data-brand="twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="margin-unset">
                                    <use xlink:href="~/assets/customer/image/all-svg.svg#twitterIcon"></use>
                                </svg>
                            </a>

                            <button class="close-modal-btn" @click="copyLink('productLink')">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="margin-unset">
                                    <use xlink:href="~/assets/customer/image/all-svg.svg#copyIcon"></use>
                                </svg>
                            </button>

                        </div>
                    </div>

                    <!-- action -->
                    <div class="d-flex desktop-product-add">
                        <button class="btn btn-white btn-lg" data-target="contactBusiness" data-trigger="modal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <use xlink:href="~/assets/customer/image/all-svg.svg#phone"></use>
                            </svg>
                        </button>
                        <button class="btn btn-primary btn-lg btn-block" id="addToCartBig" @click="addItemToCart('addToCartBig', $event)">
                            <svg xmlns="http://www.w3.org/2000/svg">
                            <use xlink:href="~/assets/customer/image/all-svg.svg#order"></use>
                            </svg>
                            <span>
                            Add to cart
                            </span>
                            <div class="loader-action"><span class="loader"></span></div>
                        </button>
                    </div>

                    <div class="product-details-action">
                    <button class="btn btn-white btn-md" v-show="!accessToken" data-target="customerSignInModal" data-trigger="modal">Save for later</button>
                    <button class="btn btn-white btn-md mg-right-10" v-show="accessToken" @click="saveForLater($event)" id="saveForLater">
                        Save for later
                        <div class="loader-action"><span class="loader"></span></div>
                    </button>
                    <n-link :to="`/${username}`" class="btn btn-white btn-md">Visit shop</n-link>
                </div>

                </div> 
                <!-- end of product info-->
            </div> <!-- End of product-details-content-info -->

            <!-- when no product is found, show this -->
            <div class="link-error-area" v-show="productNotFound && !pageLoader">

                <img src="~/static/images/product.svg" alt="" class="mg-bottom-32" v-show="productNotFound && !serverError">

                 <img src="~/static/images/server-error.svg" alt="" class="mg-bottom-32" v-show="productNotFound && serverError">
                <div class="error-cause">{{errorReason}}</div>
            </div>
            <!-- end of error area -->

            <!-- product suggesstion -->
            <div class="product-suggestion-container" v-show="!pageLoader && !subscription && returnProductSuggestions.length > 0">
                <div class="section-header"><h4>Customers also viewed</h4></div>
                <div class="product-suggestion-listing position-relative">
                    <div class="no-z-index swiper-action-container">
                        <button class="close-modal-btn slider-control">
                            <div class="dropdownCheckBox" data-direction="right" data-carousel="carousel" data-target="productSuggestion"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                <use xlink:href="~/assets/customer/image/all-svg.svg#leftArrow"></use>
                            </svg>
                        </button>
                    </div>

                    
                    <div class="no-z-index swiper-action-container">
                        <button class="close-modal-btn slider-control">
                            <div class="dropdownCheckBox" data-direction="left" data-carousel="carousel" data-target="productSuggestion"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                <use xlink:href="~/assets/customer/image/all-svg.svg#rightArrow"></use>
                            </svg>
                        </button>
                    </div>

                    <div class="row" id="productSuggestion">
                                
                        <n-link :to="`/p/${product.productId}`" class="col-xs-6 col-sm-6 col-md-4 col-lg-2 carousel-item" v-for="(product, index) in returnProductSuggestions" :key="index">
                            <div class="product-card">
                                <div class="product-card-image">
                                    <img :data-src="product.image"  :alt="`${product.name}'s image`" v-lazy-load>
                                </div>
                                <div class="product-card-details">
                                    <div class="product-name-tweak">
                                        {{product.name}}
                                    </div>
                                    <div class="product-price">₦ {{product.price}}</div>
                                </div>
                            </div>
                        </n-link>
    
                    </div>
                </div>
            </div>
            <!-- end of product suggestion area -->


            <div class="industry-layout" v-show="!pageLoader && !serverError && subscription">
                <div class="expired-sub-container">
                    <div class="mg-bottom-16">
                        <div class="business-logo-cover">
                            <img :data-src="primaryImage" :alt="`${productName}'s picture`" v-lazy-load>
                        </div>
                    </div>
                    <div class="business-name adjust-name mg-bottom-24">
                        <h2>{{productName}}</h2>
                    </div>
                    <div class="alert alert-dark text-center mg-bottom-16">This product is currently not accessible.</div>
                    <div class="d-flex-center">
                        <n-link :to="`/${username}`" class="btn btn-white btn-md">Visit shop</n-link>
                    </div>
                </div>
            </div>

        </div>
        <!-- end of content container -->

        <!-- mobile action area -->
        <div class="product-bottom-action-area" v-show="!pageLoader && !productNotFound && !subscription">
            <button type="button" class="btn btn-white" data-target="contactBusiness" data-trigger="modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <use xlink:href="~/assets/customer/image/all-svg.svg#phone"></use>
                </svg>
                <span>Call to order</span>
            </button>
            <button class="btn btn-primary" id="addToCartSmall" @click="addItemToCart('addToCartSmall', $event)">
                <svg xmlns="http://www.w3.org/2000/svg">
                    <use xlink:href="~/assets/customer/image/all-svg.svg#order"></use>
                </svg>
                <span>
                    Add to cart
                </span>
                <div class="loader-action"><span class="loader"></span></div>
            </button>
        </div>

      <!-- footer area -->

      <div class="mobile-hide-nav-bottom-add">
        <BOTTOMADS></BOTTOMADS>
        <Nuxt />
        <CUSTOMERFOOTER></CUSTOMERFOOTER>
        <Nuxt />
      </div>


        <PRODUCTREVIEW></PRODUCTREVIEW>
        <Nuxt />
        <BUSINESSCONTACT></BUSINESSCONTACT>
        <Nuxt />
        <LoginComponent></LoginComponent>
        <Nuxt />
        <BUSINESSSEARCH></BUSINESSSEARCH>
        <Nuxt />
        <!-- <ABOUTBUSINESSMODAL></ABOUTBUSINESSMODAL> -->
    </div>

    <div v-show="!pageLoader && !subscription">
        <div class="filter-btn-container">
            <!-- <button class="close-modal-btn btn-icon btn-white advn-search-filter " > -->
            <button class="scroll-top-btn close-modal-btn btn-icon btn-white advn-search-filter">
                <div class="dropdownCheckBox" data-target="BusinessMobileSearchModal" data-trigger="modal"> </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <use xlink:href="~/assets/customer/image/all-svg.svg#searchIcon"></use>
                </svg>
            </button>
        </div>
    </div>
    
  </div>
</template>

<script>
import { 
    GET_ALL_DETAILS_FROM_PRODUCT_WITH_ID,
    SAVE_PRODUCT_FOR_LATER,
    SIGNED_IN_USER_ADD_ITEM_TO_CART,
    ANONYMOUS_ADD_ITEM_TO_CART,
    GET_PRODUCT_SUGGESTIONS
} from '~/graphql/product';

import { GET_BUSINESS_DETAILS_BY_USERNAME } from '~/graphql/business'

import { mapActions, mapGetters, mapMutations } from 'vuex';

import StarRating from '~/plugins/vue-star-rating.client.vue'
// carousel
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

import BUSINESSSEARCH from '~/layouts/customer/business/business-search-modal.vue';
import MOBILENAVIGATION from '~/layouts/customer/mobile-navigation.vue';
import DESKTOPNAVGATION from '~/layouts/customer/desktop-navigation.vue';
import MOBILESEARCH from '~/layouts/customer/mobile-search.vue';
import BOTTOMADS from '~/layouts/customer/buttom-ads.vue';
import BUSINESSCONTACT from '~/layouts/customer/business/contact-business.vue';
import CUSTOMERFOOTER from '~/layouts/customer/customer-footer.vue';
import PRODUCTREVIEW from '~/components/product/product-review.vue'
import PAGELOADER from '~/components/loader/loader.vue';
import LoginComponent from '~/components/login/login.vue'
import BUSINESSNAV from '~/layouts/customer/business/business-nav.vue';
import ABOUTBUSINESSMODAL from '~/layouts/customer/business/about-modal.vue';

async function fetchProductDetailsFromApi (app, params) {
    try {

        let variables = {
            productId: params.id
        }

        let result = await app.apolloProvider.defaultClient.query({
            query: GET_ALL_DETAILS_FROM_PRODUCT_WITH_ID,
            variables: variables
        })  

        let data = result.data.GetProductById;

        if (!data.success || data.product == null) {
            // set network error or no product found
            return {
                errorReason: `The product you are looking for does not exists. It has been moved or deleted`,
                productNotFound: 1
            }
        }

        let businessData = data.business

        data = data.product


        return {
            productNotFound: 0,
            serverError: 0,
            productId: data.id,
            categoryName: data.category.categoryName,
            categoryId: data.category.categoryId,
            productColors: data.colors == null ? [] : data.colors,
            productDescription: data.description,
            hide: data.hide,
            productImages: data.images,
            primaryImage: app.$formatProductImageUrl(businessData.id, data.images[0], 'bigSize'),
            productName: data.name,
            productPrice: app.$numberNotation(data.price),
            mainPrice: data.price,
            productSizes: data.sizes == null ? [] : data.sizes,
            subcategoryName: data.subcategory.subcategoryName,
            subcategoryId: data.subcategory.subcategoryId,
            tags: data.tags == null ? []: data.tags,
            reviewScore: data.reviewScore,
            reviews: data.reviews,
            businessName: businessData.businessname,
            username: businessData.username,
            logo: businessData.logo.length > 0 ? app.$getBusinessLogoUrl(businessData.id, businessData.logo) : "",
            businessId: businessData.id,
            contact: businessData.contact,
            subscription: businessData.subscriptionStatus,
            productSuggestions: []
            
        }

    } catch (error) {
        return {
            productNotFound: 1,
            errorReason: `A network error occurred. Kindly try again`,
            serverError: 1
        }
    }
}

export default {
    name: "CUSTOMERPRODUCTPAGE",
    components: {
      DESKTOPNAVGATION, 
      MOBILENAVIGATION, 
      MOBILESEARCH, 
      BOTTOMADS, 
      CUSTOMERFOOTER, 
      PRODUCTREVIEW, 
      PAGELOADER, 
      StarRating,
      LoginComponent,
      BUSINESSCONTACT,
      BUSINESSNAV,
      BUSINESSSEARCH,
      ABOUTBUSINESSMODAL,
      VueSlickCarousel
    },
    data: function () {
        return {
            currentSlide: 1,
            slider: "",
            pageLoader: true,
            username: "",
            businessId: "",
            accessToken: "",
            anonymousId: "",
            businessContacts: [],
            businessWhatsapp: "",
            contact: "",
            businessName: "",
            logo: "",
            
            productId: "",
            productImages: [],
            hide: "",
            productName: "",
            productPrice: "",
            mainPrice: "",
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

            // page settings
            // when productNotFound == 1, the products does not exist
            productNotFound: 0,
            screenWidth: "",

            serverError: 0,
            errorReason: "",
            timeout: null,
            cartTrigger: 0,

            // add to cart
            selectedColor: "",
            colorCode: "",
            selectedSize: "",
            sizeNumber: "",
            subscription: 0, // 0 means active, 1 means expired,

            // product suggestions
            productSuggestions: [],

            contentHeight: "",
        }
    },
    head() {
      return {
        title: this.productName,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: `Cudua_description`,
            name: "description",
            content: this.productDescription.length == 0 ? `Click this link to learn more about ${this.productName}`: this.productDescription

          },
          {
              hid: "og:description",
              property: 'og:description',
              content: this.productDescription.length == 0 ? `Click this link to learn more about ${this.productName}`: this.productDescription
          },
          {
              hid: "og:title",
              property: 'og:title',
              content: this.productName
          },
          {
              hid: "og:image",
              property: 'og:image',
              content: this.primaryImage
          },
          {
              hid: "og:url",
              property: 'og:url',
              content: `https://www.cudua.com/p/${this.productId}`
          },
          {
              hid: "og:type",
              property: 'og:type',
              content: `website`
          },
        ]
      }
    },
    computed: {
        handleResize() {
            this.screenWidth = window.innerWidth;
        },
        returnColors () {
            return this.productColors
        },
        returnSizes () {
            return this.productSizes
        },
        returnImages () {
            return this.productImages
        },
        returnProductSuggestions () {
            return this.productSuggestions
        }
    },
    methods : {
        ...mapGetters({
            'GetCustomerData': 'customer/GetCustomerDetails',
            "GetCartItems": "cart/GetCartItems"
        }),
        setContentHeight: function () {
            if (this.screenWidth < 599) {
                this.contentHeight = `${this.screenWidth - 32}px`;
            }
        },
        GetCustomerDataFromStore: function () {
			let customerData = this.GetCustomerData();
            this.accessToken = customerData.userToken
            this.anonymousId = customerData.anonymousId
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
        copyLink: function (target) {
            this.$copyToClipBoard(target)
        },
        iconSizeImage: function (image) {
            return this.$formatProductImageUrl(this.businessId, image, "iconSize")
        },
        formatBigSizeImage: function (image) {
            return this.$formatProductImageUrl(this.businessId, image, "bigSize")
        },
        getProductSuggestion: async function () {

            let variables = {
                productId: this.productId,
                businessId: this.businessId
            }

            let request = await this.$performGraphQlQuery(this.$apollo, GET_PRODUCT_SUGGESTIONS, variables, {});

            if (request.error) {
                return
            }

            let result = request.result.data.GetProductSuggestion;

            if (result.success == false) {
                return
            }

            let suggestions = result.products

            if (suggestions.length < 3) return

            let suggestionArray = [];

            for (let x of suggestions) {
                suggestionArray.push({
                    image: this.$formatProductImageUrl(x.businessId, x.primaryImage, "thumbnail"),
                    name: x.name,
                    price: this.$numberNotation(x.price),
                    productId: x.id,
                })
            }

            this.productSuggestions = suggestionArray

        },
        formatProductDetails: function () {


            if (this.serverError && this.productNotFound) {
                // this.$initiateNotification('error', 'Failed request', this.errorReason);
                return
            }


            if (!this.serverError && this.productNotFound) {
                // set network error or no product found
                // this.$initiateNotification('error', 'N', this.errorReason);
                return
            }

            this.productNotFound = 0


            if (this.hide == 0 && this.businessId) {
                this.productNotFound = 0

                let contact = this.contact
                let phones = [];

                if (contact.whatsapp.status == 1 && contact.whatsapp.number !== null) {
                    this.businessWhatsapp = contact.whatsapp.number
                    phones.push({
                        whatsapp: {
                            status: 1,
                            number: contact.whatsapp.number
                        }
                    })
                }

                if (contact.phone != null && contact.phone.length > 0) {
                    for (let p of contact.phone) {
                        phones.push(p)
                    }
                }

                this.businessContacts = phones
                
            } else {
                this.productNotFound = 1
                this.errorReason = "This product has either been moved or deleted."
                return
            }

            let aboutBusiness = {
                name: this.businessName,
                contact: this.contact
            }

            let searchData = {
                name: this.businessName,
                businessId: this.businessId,
                logo: this.logo,
            }

            $nuxt.$emit("searchData", searchData)
            $nuxt.$emit('BusinessDetails', aboutBusiness)
            // emit to product review component
            $nuxt.$emit('ProductReviews', {
                reviews: this.reviews == null ? [] : this.reviews,
                reviewScore: this.reviewScore
            });

        },
        saveForLater: async function () {
            let target = document.getElementById('saveForLater');
            
            let variables = {
                productId: this.productId,
                businessId: this.businessId
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }

            target.disabled = true;

            let request = await this.$performGraphQlMutation(this.$apollo, SAVE_PRODUCT_FOR_LATER, variables, context);

            target.disabled = false

            if (request.error) {
                this.$initiateNotification('error', 'Failed request', request.message);
                return
            }

            let result = request.result.data.SaveProductForLater;

            if (result.success == false) {
                this.$initiateNotification('info', 'Oops!', result.message);
                return
            }

            this.$initiateNotification('success', 'Product saved', result.message);

            target.style.display = 'none'

        },
        anonymousAddItemToCart: async function (targetId, e) {

            let target = document.getElementById(targetId);

            let variables = {
                productId: this.productId,
                businessId: this.businessId,
                colorId: this.selectedColor,
                sizeId: this.selectedSize,
                anonymousId: this.anonymousId
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }

            target.disabled = true;

            let request = await this.$performGraphQlMutation(this.$apollo, ANONYMOUS_ADD_ITEM_TO_CART, variables, context);

            target.disabled = false;

            if (request.error) {
                return this.$showToast(request.message, 'danger');
            }

            let result = request.result.data.AnonymousAddItemToCart;

            if (result.success == false) {
                return this.$showToast(result.message, 'info');
            }

            this.$showToast(result.message, 'success');

            this.$store.dispatch('cart/addItemCount', 1)
            this.cartTrigger = 1

            return

        },
        addItemToCart: async function (targetId, e) { 

            if (this.accessToken.length == 0) {
                this.anonymousAddItemToCart(targetId, e)
                return
            }

            let target = document.getElementById(targetId);

            let variables = {
                productId: this.productId,
                businessId: this.businessId,
                colorId: this.selectedColor,
                sizeId: this.selectedSize
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }

            target.disabled = true;

            let request = await this.$performGraphQlMutation(this.$apollo, SIGNED_IN_USER_ADD_ITEM_TO_CART, variables, context);

            target.disabled = false;

            if (request.error) {
                return this.$showToast(request.message, 'danger');
            }

            let result = request.result.data.AddItemToCart;

            if (result.success == false) {
                return this.$showToast(result.message, 'info');
            }

            this.$showToast(result.message, 'success');

            this.$store.dispatch('cart/addItemCount', 1)
            this.cartTrigger = 1

        },
        selectedSizeForCart: function (sizeId, sizeNumber) {
            let allSizes = document.querySelectorAll('.size-card');

            for (let x of allSizes) {
                x.classList.add('is-active')
            }

            document.getElementById('selectedSize'+sizeId).classList.remove('is-active');

            this.selectedSize = sizeId;
            this.sizeNumber = sizeNumber

            this.$showToast('Size selected', "success");

        },
        selectedColorForCart: function (colorId, colorCode) {
            let allColors = document.querySelectorAll('.color-listing');

            for (let x of allColors) {
                x.classList.add('is-active')
            }

            document.getElementById('selectedColor'+colorId).classList.remove('is-active');

            this.selectedColor = colorId;
            this.colorCode = colorCode

            this.$showToast('Color selected', "success")
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
        handleScroll: function () {
            // Do something on scroll
            let scrollTotal = this.rootElement.scrollHeight - this.rootElement.clientHeight
            if ((this.rootElement.scrollTop / scrollTotal ) > 0.80) {
                // Show button
                this.scrollToTopBtn.classList.add("show-scroll-top-btn")
            } else {
                // Hide button
                this.scrollToTopBtn.classList.remove("show-scroll-top-btn")
            }
        },
    },  
    created () {
        if (process.client) {
            this.productId = this.$route.params.id;
            window.addEventListener('resize', this.handleResize);
            this.GetCustomerDataFromStore()
            this.setContentHeight()
        }
    },
    async asyncData({ app, params }) {
        
        return fetchProductDetailsFromApi(app, params)
    },
    mounted () {
        if (process.browser) {

            this.rootElement = document.documentElement
            this.scrollToTopBtn = document.querySelector(".scroll-top-btn")
            document.addEventListener("scroll", this.handleScroll)

            this.timeout = setTimeout(() => {
                this.formatProductDetails();
                this.getProductSuggestion();
            }, 1000);

            this.pageLoader = false
        }
    },
    beforeDestroy() {
        clearTimeout(this.timeout)
    }
}
</script>
<style scoped>
.no-data-available * {
    align-self: center;
}
.no-data-available {
    display: flex;
    justify-content: space-between;
}
.text-area {
    margin-right: 8px;
    font-size: 14px;
}
.no-data-available .btn {
    flex-shrink: 0;
}
.product-img-thumbnail {
    width: 66px;
    height: 57px;
    padding: 4px;
    border-radius: 4px;
    background-color: #fff;
    margin-right: 8px;
    position: relative;
    margin-bottom: 8px;
    cursor: pointer;
}
.indicator-area {
    color: rgba(238, 100, 37, 1);
    font-weight: 500;
    text-transform: uppercase;
}
.margin-unset {
    margin: unset !important;
}
.mg-right-10 {
    margin-right: 10px;
}
.color-listing.is-active,
.size-card.is-active {
    opacity: .2;
    box-shadow: unset;
}
.reset-select {
    font-weight: 500;
    background-color: #fff;
    padding: 10px 15px;
    cursor: pointer;
}
.filter-btn-container {
    display: block !important;
}
.advn-search-filter svg:last-child {
    display: unset;
}
.content-container {
    min-height: 100vh;
}    
.text-center {
    text-align: center !important;
}
.business-logo-cover {
    position: relative !important;
    margin: 0 auto;
    left: unset;
    bottom: unset;
    padding: 0
}
.adjust-name *{
    text-align: center;
}
.adjust-name h2 {
    margin-bottom: 8px;
}
.filter-btn-container {
    top: calc(100vh - 133px);
}
.filter-btn-container .close-modal-btn {
    opacity: .5;
}
.alert {
    font-size: 14px !important;
}
@media(min-width: 1024px) {
    .filter-btn-container {
        display: none !important;
    }
}
.no-z-index {
    z-index: 0 !important;
}
</style>