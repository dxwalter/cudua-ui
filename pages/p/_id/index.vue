<template>
  <div class="customer">
    <div class="body-container grey-bg-color">

      <!-- beginning of navigation container -->
        <div class="nav-container">
            <MOBILESEARCH :cartTrigger=cartTrigger></MOBILESEARCH>

            <BUSINESSNAV v-show="!pageLoader && !serverError" :cartTrigger=cartTrigger></BUSINESSNAV>

            <DESKTOPNAVGATION v-show="pageLoader || serverError" :cartTrigger=cartTrigger></DESKTOPNAVGATION>

            <MOBILENAVIGATION :cartTrigger=cartTrigger></MOBILENAVIGATION>
        </div>

        <!-- pageLoader -->
        <PAGELOADER v-show="pageLoader"></PAGELOADER>

        <div class="content-container mg-bottom-32">
          <!-- bookmark area -->
            <div class="section-header"><h4>Product details</h4></div>
            <!-- content start here -->
            <div class="all-product-details-container" v-show="!productNotFound && !pageLoader">
                <!-- product image area -->
                <div class="image-area">
                    <!-- image area -->
                    <div class="product-details-image-info">
                        <div class="product-details-img-container">

                            <div class="slide-container white-bg-color" id="productImageSlideShow">
                                <div class="product-image-slide" v-for="(item, index) in returnImages" :key="index" v-bind:class="{'is-active' : index == 0}">
                                    <img :data-src="formatBigSizeImage(item)" alt="" v-lazy-load>
                                </div>
                            </div>

                            <button class="close-modal-btn btn-light-grey" @click="previousImage"  v-show="returnImages.length > 1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="7.41" height="12" viewBox="0 0 7.41 12" class="margin-unset">
                                    <use xlink:href="~/assets/business/image/all-svg.svg#leftArrow"></use>
                                </svg>
                            </button>
                            <button class="close-modal-btn btn-light-grey" id="nextSlide" @click="nextImage"  v-show="returnImages.length > 1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8.375" height="13.562" viewBox="0 0 8.375 13.562" class="margin-unset">
                                    <use xlink:href="~/assets/business/image/all-svg.svg#rightArrow"></use>
                                </svg>
                            </button>
                        
                        </div>
                        <div class="selected-img-preview mg-bottom-32" v-show="returnImages.length > 1">
                            <div class="product-img-thumbnail" :data-slide="index + 1" @click="thumbSlide($event)" v-for="(item, index) in returnImages" :key="index"> 
                                <img :data-src="iconSizeImage(item)" alt="" :data-slide="index + 1" @click="thumbSlide($event)" v-lazy-load>
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
                        <div class="no-data-available" v-show="productDescription.length == 0">
                            <div class="text-area">No description available</div>
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

                    <!-- share -->
                    <div class="product-details-container">
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

                            <a :href="`https://twitter.com/home?status=https://www.cudua.com/p/${productId}`" target="_blank"  class="close-modal-btn" data-brand="twitter">
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
                    <button class="btn btn-white btn-md mg-right-10" v-show="accessToken" @click="saveForLater($event)" id="saveForLater">Save for later</button>
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
            <div class="product-suggestion-container display-none" v-show="!pageLoader">
                <div class="section-header"><h4>Customers also viewed</h4></div>
                <div class="product-suggestion-listing">
                    <div class="swiper-action-container">
                    <button class="close-modal-btn slider-control">
                        <div class="dropdownCheckBox" data-direction="left" data-carousel="carousel" data-target="productSuggestion"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" class="margin-unset">
                            <use xlink:href="~/assets/customer/image/all-svg.svg#leftArrow"></use>
                        </svg>
                    </button>
                    </div>

                    
                    <div class="swiper-action-container">
                    <button class="close-modal-btn slider-control">
                        <div class="dropdownCheckBox" data-direction="right" data-carousel="carousel" data-target="productSuggestion"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" class="margin-unset">
                            <use xlink:href="~/assets/customer/image/all-svg.svg#rightArrow"></use>
                        </svg>
                    </button>
                    </div>

                    <div class="row" id="productSuggestion">
                                
                    <n-link to="/p/23432" class="col-xs-6 col-sm-6 col-md-4 col-lg-3 carousel-item">
                        <div class="product-card">
                            <div class="product-card-image">
                                <img src="~/assets/customer/image/zenfone.jpg" alt="">
                            </div>
                            <div class="product-card-details">
                                <div class="product-name">
                                    Asus Zenfone
                                </div>
                                <div class="product-price">₦ 1,200</div>
                                <div class="search-product-location">Apamini, Woji</div>
                            </div>
                        </div>
                    </n-link>
        
                    <n-link to="/p/23432" class="col-xs-6 col-sm-6 col-md-4 col-lg-3 carousel-item">
                        <div class="product-card">
                            <div class="product-card-image">
                                <img src="~/assets/customer/image/zenfone.jpg" alt="">
                            </div>
                            <div class="product-card-details">
                                <div class="product-name">
                                    Asus Zenfone
                                </div>
                                <div class="product-price">₦ 1,200</div>
                                <div class="search-product-location">Apamini, Woji</div>
                            </div>
                        </div>
                    </n-link>
        
                    <n-link to="/p/23432" class="col-xs-6 col-sm-6 col-md-4 col-lg-3 carousel-item">
                        <div class="product-card">
                            <div class="product-card-image">
                                <img src="~/assets/customer/image/zenfone.jpg" alt="">
                            </div>
                            <div class="product-card-details">
                                <div class="product-name">
                                    Asus Zenfone
                                </div>
                                <div class="product-price">₦ 1,200</div>
                                <div class="search-product-location">Apamini, Woji</div>
                            </div>
                        </div>
                    </n-link>
        
                    <n-link to="/p/23432" class="col-xs-6 col-sm-6 col-md-4 col-lg-3 carousel-item">
                        <div class="product-card">
                            <div class="product-card-image">
                                <img src="~/assets/customer/image/zenfone.jpg" alt="">
                            </div>
                            <div class="product-card-details">
                                <div class="product-name">
                                    Asus Zenfone
                                </div>
                                <div class="product-price">₦ 1,200</div>
                                <div class="search-product-location">Apamini, Woji</div>
                            </div>
                        </div>
                    </n-link>
        
                    <n-link to="/p/23432" class="col-xs-6 col-sm-6 col-md-4 col-lg-3 carousel-item">
                        <div class="product-card">
                            <div class="product-card-image">
                                <img src="~/assets/customer/image/zenfone.jpg" alt="">
                            </div>
                            <div class="product-card-details">
                                <div class="product-name">
                                    Asus Zenfone
                                </div>
                                <div class="product-price">₦ 1,200</div>
                                <div class="search-product-location">Apamini, Woji</div>
                            </div>
                        </div>
                    </n-link>
        
                    <n-link to="/p/23432" class="col-xs-6 col-sm-6 col-md-4 col-lg-3 carousel-item">
                        <div class="product-card">
                            <div class="product-card-image">
                                <img src="~/assets/customer/image/zenfone.jpg" alt="">
                            </div>
                            <div class="product-card-details">
                                <div class="product-name">
                                    Asus Zenfone
                                </div>
                                <div class="product-price">₦ 1,200</div>
                                <div class="search-product-location">Apamini, Woji</div>
                            </div>
                        </div>
                    </n-link>
        
                    <n-link to="/p/23432" class="col-xs-6 col-sm-6 col-md-4 col-lg-3 carousel-item">
                        <div class="product-card">
                            <div class="product-card-image">
                                <img src="~/assets/customer/image/zenfone.jpg" alt="">
                            </div>
                            <div class="product-card-details">
                                <div class="product-name">
                                    Asus Zenfone
                                </div>
                                <div class="product-price">₦ 1,200</div>
                                <div class="search-product-location">Apamini, Woji</div>
                            </div>
                        </div>
                    </n-link>
        
                    <n-link to="/p/23432" class="col-xs-6 col-sm-6 col-md-4 col-lg-3 carousel-item">
                        <div class="product-card">
                            <div class="product-card-image">
                                <img src="~/assets/customer/image/zenfone.jpg" alt="">
                            </div>
                            <div class="product-card-details">
                                <div class="product-name">
                                    Asus Zenfone
                                </div>
                                <div class="product-price">₦ 1,200</div>
                                <div class="search-product-location">Apamini, Woji</div>
                            </div>
                        </div>
                    </n-link>
        
                    </div>
                </div>
            </div>
            <!-- end of product suggestion area -->
        </div>
        <!-- end of content container -->

        <!-- mobile action area -->
        <div class="product-bottom-action-area" v-show="!pageLoader && !productNotFound">
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
        <CUSTOMERFOOTER></CUSTOMERFOOTER>
      </div>


        <PRODUCTREVIEW></PRODUCTREVIEW>
        <BUSINESSCONTACT></BUSINESSCONTACT>
        <LoginComponent></LoginComponent>
        <BUSINESSSEARCH></BUSINESSSEARCH>
    </div>

    <div class="filter-btn-container">
        <button class="close-modal-btn btn-icon btn-primary advn-search-filter" >
            <div class="dropdownCheckBox" data-target="BusinessMobileSearchModal" data-trigger="modal"> </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <use xlink:href="~/assets/customer/image/all-svg.svg#advancedSearch"></use>
            </svg>
        </button>
        </div>
  </div>
</template>

<script>
import { 
    GET_ALL_DETAILS_FROM_PRODUCT_WITH_ID,
    SAVE_PRODUCT_FOR_LATER,
    SIGNED_IN_USER_ADD_ITEM_TO_CART,
    ANONYMOUS_ADD_ITEM_TO_CART
} from '~/graphql/product';

import { mapActions, mapGetters, mapMutations } from 'vuex';

import StarRating from '~/plugins/vue-star-rating.client.vue'

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
            contact: businessData.contact
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
      BUSINESSSEARCH
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
            sizeNumber: ""
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
        }
    },
    methods : {
        ...mapGetters({
            'GetCustomerData': 'customer/GetCustomerDetails',
            "GetCartItems": "cart/GetCartItems"
        }),
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

                if (contact.whatsapp.status == 1 && contact.whatsapp.number.length > 0) {
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
                productId: this.productId
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
                this.$initiateNotification('error', 'Failed request', this.errorReason);
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
                return this.$initiateNotification('info', 'Oops!', request.message);
            }

            let result = request.result.data.AnonymousAddItemToCart;

            if (result.success == false) {
                return this.$initiateNotification('info', 'Oops!', result.message);
            }

            this.$initiateNotification('success', 'Item added', result.message);

            this.addItemToStoreCart()

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
                return this.$initiateNotification('info', 'Oops!', request.message);
            }

            let result = request.result.data.AddItemToCart;

            if (result.success == false) {
                return this.$initiateNotification('info', 'Oops!', result.message);
            }

            this.$initiateNotification('success', 'Item added', result.message);
            this.addItemToStoreCart()

        },
        addItemToStoreCart: function () {
            let cartItemData = {
                name: this.productName,
                productId: this.productId,
                price: this.productPrice,
                reviewScore: this.reviewScore,
                image: this.primaryImage,
                size: this.sizeNumber,
                color: this.colorCode,
                username: this.username
            }

            let cartItems = this.GetCartItems();
            
            let newCartArray = []

            for (let x of cartItems) {
                newCartArray.push({
                    name: x.name,
                    productId: x.productId,
                    price: x.price,
                    reviewScore: x.reviewScore,
                    image: x.image,
                    size: x.size,
                    color: x.color,
                    username: x.username
                })
            }
            
            newCartArray.push(cartItemData);

            this.$store.dispatch('cart/setCartItems', newCartArray)
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
        }
    },  
    created () {
        if (process.client) {
            this.productId = this.$route.params.id;
            window.addEventListener('resize', this.handleResize);
            this.GetCustomerDataFromStore()
        }
    },
    async asyncData({ app, params }) {
        
        return fetchProductDetailsFromApi(app, params)
    },
    mounted () {
        if (process.browser) {
            this.slider = document.getElementsByClassName("product-image-slide");
            this.$productImageSlides(this.currentSlide, this.slider);
            this.pageLoader = false

            this.timeout = setTimeout(() => {
                this.formatProductDetails()
            }, 1000);
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
</style>