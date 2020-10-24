<template>
    <div class="business">
        <div class="body-container">
            <TOPHEADER />
            <Nuxt />
            <div class="content-container">
                <SIDENAV />
                <Nuxt />
                    <div class="content-area white-bg-color">
                        <!-- pageLoader -->
                        <PAGELOADER v-show="pageLoader" />
                        <Nuxt />
                        <div class="alert alert-danger notification-alert" v-show="hide">
                            <div>This product is hidden. Customers will not be able to find it in your shop and in search result.</div>
                            <button class="btn btn-small btn-white" @click="showProduct()" id="showProduct">
                                Show product
                                <div class="loader-action"><span class="loader"></span></div>
                            </button>
                        </div>
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
                                </div>


                                <div class="product-details-content-info">
                                    <div class="product-details-name"><h2>{{productName}}</h2></div>
                                    <div class="product-price-container">
                                        <div class="product-details-price"><h3>₦ {{productPrice}}</h3></div>
                                        <a href="javasscript:;" class="navbar-review-icon" data-trigger="modal" data-target="productReview">
                                            <StarRating :score=reviewScore></StarRating>
                                            <Nuxt />
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
                                            <div class="text-area">No description available</div>
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
                                            <div class="text-area">No size available</div>
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
                                            <div class="text-area">No color available</div>
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

                                            <a :href="`whatsapp://send?text=Checkout ${productName} https://cudua.com/p/${productId}`" target="_blank" class="close-modal-btn" data-action="share/whatsapp/share" v-show="screenWidth < 1024">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#whatsappIcon"></use>
                                                </svg>
                                            </a>
                                            <a :href="`https://www.facebook.com/sharer/sharer.php?u=https://www.cudua.com/p/${productId}`" target="_blank" class="close-modal-btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#facebookIcon"></use>
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
                                            <button class="btn btn-light-grey" v-show="hide == 0" @click="hideProduct()" id="hideProduct">
                                                Hide
                                                <div class="loader-action"><span class="loader"></span></div>
                                            </button>
                                            <button class="btn btn-light-grey" v-show="hide == 1" @click="showProduct()" id="showProductTWO">
                                                Show
                                                <div class="loader-action"><span class="loader"></span></div>
                                            </button>
                                            <button class="btn btn-light-grey" id="" @click="productToDelete = 1">
                                                Delete
                                                <div class="loader-action"><span class="loader"></span></div>
                                            </button>
                                        </div>
                                    </div>

                                    

                                </div>
                            </div>
                        </div>
                        <BOTTOMNAV />
                        <Nuxt />
                    </div>
            </div>
            <PRODUCTREVIEW />
            <Nuxt />
        </div>
        <!-- delete product modal -->
        <div class="modal-container-2" id="confirmedOrderModal" v-show="productToDelete">
            <div class="modal-dialog-box success-order-modal-container">


                <div class="modal-content">
                    <div class="thumbs-up-container">
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <use xlink:href="~/assets/business/image/all-svg.svg#bigDelete"></use>
                        </svg>
                    </div>
                    <div class="success-order-text">
                        <p>Delete <span class="indicator-area">{{productName}}</span> product</p>
                        <div class="price-info">When you delete this product, you won't be able to recover it.</div>
                    </div>
                    <div class="mg-bottom-32">
                        <button class="btn btn-primary btn-block mg-bottom-8" @click="`${productToDelete = 0}`">Cancel action</button>
                        <button class="btn btn-white btn-block" id="deleteProduct" @click="deleteProduct($event)">Delete product
                            <div class="loader-action"><span class="loader"></span></div> 
                        </button>
                    </div>
                </div>

            </div>
        </div>
        <!--  delete category modal -->
    </div>
</template>

<script>

import TOPHEADER from '~/layouts/business/top-navigation.vue';
import SIDENAV from '~/layouts/business/side-bar.vue';
import BOTTOMNAV from '~/layouts/business/bottom-nav.vue';
import PRODUCTREVIEW from '~/components/business/product/product.review.vue';
import PAGELOADER from '~/components/loader/loader.vue';

import { mapActions, mapGetters, mapMutations } from 'vuex';

import { 
    BUSINESS_GET_ALL_DETAILS_FROM_PRODUCT_WITH_ID,
    SHOW_PRODUCT,
    HIDE_PRODUCT,
    DELETE_PRODUCT
} from '~/graphql/product';

import StarRating from '~/plugins/vue-star-rating.client.vue'


export default {
    name: "BUSINESSPRODUCTPAGE",
    components: {
        TOPHEADER, SIDENAV, BOTTOMNAV, PRODUCTREVIEW, PAGELOADER, StarRating
    },
    data: function () {
        return {
            currentSlide: 1,
            slider: "",
            pageLoader: true,
            productId: "",
            businessId: "",
            accessToken: "",
            productToDelete: "",

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
        },
        returnImages () {
            return this.productImages
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

            let request = await this.$performGraphQlQuery(this.$apollo, BUSINESS_GET_ALL_DETAILS_FROM_PRODUCT_WITH_ID, variables, {});

            if (request.error) {
                this.$initiateNotification('error', 'Failed request', request.message);
                return
            }

            let result = request.result.data.BusinessGetProductById;

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
            this.productPrice = this.$numberNotation(product.price);
            this.productSizes = product.sizes == null ? [] : product.sizes;
            this.subcategoryName = product.subcategory.subcategoryName;
            this.subcategoryId = product.subcategory.subcategoryId;
            this.tags = product.tags == null ? []: product.tags
            this.reviewScore = product.reviewScore

            // emit to add category component
            $nuxt.$emit('ProductReviews', {
                reviews: product.reviews == null ? [] : product.reviews,
                reviewScore: product.reviewScore
            })


        },
        showProduct: async function () {

            let target = document.getElementById("showProduct");
            let targetTwo = document.getElementById("showProductTWO");

            let variables = {
                businessId: this.businessId,
                productId: this.productId
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }

            target.disabled = true
            targetTwo.disabled = true

            let request = await this.$performGraphQlMutation(this.$apollo, SHOW_PRODUCT, variables, context);

            target.disabled = false;
            targetTwo.disabled = false;
            

            if (request.error) {
                this.$initiateNotification("error", "Failed request", request.message)
                return
            }

            let result = request.result.data.ShowProduct;

            if (!result.success) {
                this.$initiateNotification("error", "Failed request", result.message)
                return
            }

            this.$initiateNotification("success", "Update successful", result.message);

            this.hide = 0;
            
        },
        hideProduct: async function () {

            let target = document.getElementById("hideProduct");

            let variables = {
                businessId: this.businessId,
                productId: this.productId
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }

            target.disabled = true

            let request = await this.$performGraphQlMutation(this.$apollo, HIDE_PRODUCT, variables, context);

            target.disabled = false;
        

            if (request.error) {
                this.$initiateNotification("error", "Failed request", request.message)
                return
            }

            let result = request.result.data.HideProduct;

            if (!result.success) {
                this.$initiateNotification("error", "Failed request", result.message)
                return
            }

            this.$initiateNotification("success", "Update successful", result.message);

            this.hide = 1;
            
        },
        iconSizeImage: function (image) {
            return this.$formatProductImageUrl(this.businessId, image, "iconSize")
        },
        formatBigSizeImage: function (image) {
            return this.$formatProductImageUrl(this.businessId, image, "bigSize")
        },
        deleteProduct: async function () {

            let target = document.getElementById("deleteProduct");

            let variables = {
                businessId: this.businessId,
                productId: this.productId
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }

            target.disabled = true

            let request = await this.$performGraphQlMutation(this.$apollo, DELETE_PRODUCT, variables, context);

            target.disabled = false;
        

            if (request.error) {
                this.$initiateNotification("error", "Failed request", request.message)
                return
            }

            let result = request.result.data.DeleteProduct;

            if (!result.success) {
                this.$initiateNotification("error", "Failed request", result.message)
                return
            }

            this.$initiateNotification("success", "Product deleted", result.message);

            this.productNotFound = 1
            this.productToDelete = 0
            this.hide = 0
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
.product-img-thumbnail {
    width: 66px;
    height: 66px;
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
</style>