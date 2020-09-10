<template>
    <div class="business">
        <div class="body-container">
            <TOPHEADER />
            <nuxt/>
            <div class="content-container">
                <SIDENAV />
                <nuxt />
                    <div class="content-area white-bg-color">
                        <!-- pageLoader -->
                        <PAGELOADER v-show="pageLoader" />
                        <nuxt />
                        
                        <div class="main-content">

                            <div class="page-header" v-show="!productNotFound && !pageLoader">
                                <h4>{{productName}}</h4>
                                <div class="upload-tab-category">
                                    <span>{{categoryName}}</span>
                                    <span>
                                        <svg>
                                            <use xlink:href="~/assets/business/image/all-svg.svg#rightArrow"></use>
                                        </svg>
                                    </span>
                                    <span><n-link :to="`/b/product/subcategory/${subcategoryId}`">{{subcategoryName}}</n-link></span>
                                </div>
                            </div>

                            <!-- when this product no longer exists -->

                                <div class="no-account-category" v-show="productNotFound && !pageLoader">
                                    <!-- when no category has been added to the account -->
                                    <h2>This product has been moved or deleted</h2>
                                    <p>This might also be caused by a broken link.</p>
                                    <n-link to="/b/" class="btn btn-primary btn-lg">View all poducts</n-link>
                                </div>

                                <!-- end of when the product no longer exists -->

                            <div class="md-flex mg-top-16" v-show="!productNotFound && !pageLoader">
                                <!-- main content goes in here -->
                                <!-- product image area -->
                                <div class="product-details-image-info">
                                    <div class="product-details-img-container">

                                        <div class="slide-container" id="productImageSlideShow">
                                            <div class="product-image-slide is-active">
                                                <img src="~/assets/business/image/phone.png" alt="">
                                            </div>
                                            <div class="product-image-slide">
                                                <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
                                            </div>
                                            <div class="product-image-slide">
                                                <img src="~/assets/business/image/banner-image.jpg" alt="">
                                            </div>
                                            <div class="product-image-slide">
                                                <img src="~/assets/business/image/card-bg.png" alt="">
                                            </div>
                                        </div>

                                        <button class="close-modal-btn btn-light-grey" @click="previousImage">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="7.41" height="12" viewBox="0 0 7.41 12">
                                                <use xlink:href="~/assets/business/image/all-svg.svg#leftArrow"></use>
                                            </svg>
                                        </button>
                                        <button class="close-modal-btn btn-light-grey" id="nextSlide" @click="nextImage">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="8.375" height="13.562" viewBox="0 0 8.375 13.562">
                                                <use xlink:href="~/assets/business/image/all-svg.svg#rightArrow"></use>
                                            </svg>
                                        </button>
                                    
                                    </div>
                                    <div class="selected-img-preview mg-bottom-32">
                                        <div class="product-img-thumbnail" data-slide="1" @click="thumbSlide($event)">
                                            <img src="~/assets/business/image/phone.png" alt="" data-slide="1" @click="thumbSlide($event)">
                                        </div>
                                        <div class="product-img-thumbnail" @click="thumbSlide($event)" data-slide="2">
                                            <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="" data-slide="2" @click="thumbSlide($event)">
                                        </div>
                                        <div class="product-img-thumbnail" @click="thumbSlide($event)" data-slide="3">
                                            <img src="~/assets/business/image/banner-image.jpg" alt="" data-slide="3" @click="thumbSlide($event)">
                                        </div>
                                        <div class="product-img-thumbnail" @click="thumbSlide($event)" data-slide="4">
                                            <img src="~/assets/business/image/card-bg.png" alt="" data-slide="4" @click="thumbSlide($event)">
                                        </div>
                                    </div>
                                </div>


                                <div class="product-details-content-info">
                                    <div class="product-details-name"><h2>{{productName}}</h2></div>
                                    <div class="product-price-container">
                                        <div class="product-details-price"><h3>₦ {{productPrice}}</h3></div>
                                        <a href="javasscript:;" class="navbar-review-icon" data-trigger="modal" data-target="productReview">
                                            <STARRATING :rating=reviewScore :show-rating="false" :read-only="true" active-color="#ef860e" :round-start-rating="false"></STARRATING>
                                        </a>
                                    </div>

                                    <!-- Description -->
                                    <div class="product-details-container mg-bottom-32">
                                        <div class="product-details-label">
                                            Product Description
                                        </div>
                                        <div class="product-description-text">
                                            {{productDescription}}
                                        </div>
                                        <div class="no-data-available" v-show="productDescription.length == 0">
                                            <div class="text-area">The description for this product has not been added</div>
                                            <nuxt-link :to="`/b/product/edit/${productId}`" class="btn btn-white btn-small">Add description</nuxt-link>
                                        </div>
                                    </div>

                                    <!-- sizes -->
                                    <div class="product-details-container">
                                        <div class="product-details-label">
                                            Available sizes
                                        </div>
                                        <div class="color-picker-container">
                                            <div class="size-card" v-for="size in returnSizes" :key="size.sizeId">{{size.sizeNumber}}</div>
                                        </div>
                                        <div class="no-data-available" v-show="productSizes.length == 0">
                                            <div class="text-area">The sizes for this product has not been added</div>
                                            <nuxt-link :to="`/b/product/edit/${productId}`" class="btn btn-white btn-small">Add sizes</nuxt-link>
                                        </div>
                                    </div>

                                    <!-- sizes -->
                                    <div class="product-details-container">
                                        <div class="product-details-label">
                                            Available colors
                                        </div>
                                        <div class="color-picker-container">
                                            <div v-for="color in returnColors" :key="color.colorId"  v-bind:style="{'background-color': color.color}"></div>
                                        </div>
                                        <div class="no-data-available" v-show="productColors.length == 0">
                                            <div class="text-area">The colors for this product has not been added</div>
                                            <nuxt-link :to="`/b/product/edit/${productId}`" class="btn btn-white btn-small">Add colors</nuxt-link>
                                        </div>
                                    </div>


                                    <!-- Share -->
                                    <div class="product-details-container">
                                        <div class="product-details-label">
                                            Share
                                        </div>
                                        <div class="opacity-0" id="productLink">https://cudua.com/p/{{productId}}</div>
                                        <div class="share-action-container">
                                            <button class="close-modal-btn btn-white" @click="copyLink('productLink')">
                                                <svg height="24px" viewBox="0 0 448 512" width="23px" xmlns="http://www.w3.org/2000/svg">
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#copyIcon"></use>
                                                </svg>
                                            </button>

                                            <a :href="`https://www.facebook.com/sharer/sharer.php?u=https://www.cudua.com/p/${productId}`" target="_blank" class="close-modal-btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#facebookIcon"></use>
                                                </svg>
                                            </a>
                                            <a :href="`whatsapp://send?text=${productName}`" target="_blank" class="close-modal-btn" data-action="share/whatsapp/share">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#whatsappIcon"></use>
                                                </svg>
                                            </a>

                                            <a :href="`https://twitter.com/home?status=https://www.cudua.com/p/${productId}`" target="_blank" class="close-modal-btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#twitterIcon"></use>
                                                </svg>
                                            </a>

                                        </div>
                                    </div>


                                    <div class="product-details-container">
                                        <div class="product-details-action">
                                            <nuxt-link :to="`/p/${productId}`" class="btn btn-light-grey">View</nuxt-link>
                                            <nuxt-link :to="`/b/product/edit/${productId}`" class="btn btn-light-grey">Edit</nuxt-link>
                                            <button class="btn btn-light-grey">Hide</button>
                                            <button class="btn btn-light-grey">Delete</button>
                                        </div>
                                    </div>

                                    

                                </div>
                            </div>
                        </div>
                        <BOTTOMNAV />
                        <nuxt/>
                    </div>
            </div>
            <PRODUCTREVIEW />
            <nuxt />
        </div>
    </div>
</template>

<script>

import TOPHEADER from '~/layouts/business/top-navigation.vue';
import SIDENAV from '~/layouts/business/side-bar.vue';
import BOTTOMNAV from '~/layouts/business/bottom-nav.vue';
import PRODUCTREVIEW from '~/components/business/product/product.review.vue';
import PAGELOADER from '~/components/loader/loader.vue';

import { mapActions, mapGetters, mapMutations } from 'vuex';

import { GET_ALL_DETAILS_FROM_PRODUCT_WITH_ID } from '~/graphql/product';

import STARRATING from 'vue-star-rating'

export default {
    name: "BUSINESSPRODUCTPAGE",
    components: {
        TOPHEADER, SIDENAV, BOTTOMNAV, PRODUCTREVIEW, PAGELOADER, STARRATING
    },
    data: function () {
        return {
            currentSlide: 1,
            slider: "",
            pageLoader: true,
            productId: "",
            businessId: "",
            accessToken: "",

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
            productNotFound: "",
            screenWidth: "",
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
        }
    },
    methods : {
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
        getProductDetails: async function () {
            let variables = {
                businessId: this.businessId,
                productId: this.productId
            }

            let context = {
                hasUpload: true,
                headers: {
                    'accessToken': this.accessToken
                }
            }

            let request = await this.$performGraphQlQuery(this.$apollo, GET_ALL_DETAILS_FROM_PRODUCT_WITH_ID, variables, {});

            if (request.error) {
                this.$initiateNotification('error', 'Failed request', request.message);
                return
            }

            let result = request.result.data.GetProductById;

            if (!result.success || result.product == null) {
                // set network error or no product found
                this.productNotFound = 1
                this.$initiateNotification('error', 'Failed request', result.message);
                return
            }

            this.productNotFound = 0

            let product = result.product;

            this.productId = product.id;
            this.categoryName = product.category.categoryName;
            this.categoryId = product.category.categoryId;
            this.productColors = product.colors == null ? []: product.colors;
            this.productDescription = product.description;
            this.hide = product.hide;
            this.productImages = product.images;
            this.productName = product.name;
            this.productPrice = product.price;
            this.productSizes = product.sizes == null ? [] : product.sizes;
            this.subcategoryName = product.subcategory.subcategoryName;
            this.subcategoryId = product.subcategory.subcategoryId;
            this.tags = product.tags == null ? []: product.tags
        },
    },
    created () {
        if (process.client) {
            this.productId = this.$route.params.id;
            window.addEventListener('resize', this.handleResize);
            this.GetBusinessDataFromStore()
        }
    },
    async mounted () {
        if (process.client) {
            this.slider = document.getElementsByClassName("product-image-slide");
            this.$productImageSlides(this.currentSlide, this.slider);

            await this.getProductDetails()
            this.pageLoader = false
        }
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
</style>