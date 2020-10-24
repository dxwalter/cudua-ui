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
          <!-- bookmark area -->
          <div class="section-header" v-show="!pageLoader && !isNetworkError"><h4>Product review</h4></div>
            <!-- content start here -->
            <div class="all-product-details-container" v-show="!pageLoader && !isNetworkError">
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

                    </div>
                </div>
                <!-- end of product image area -->

                <!-- beginning of product details -->
                <div class="product-details-content-info">
                    <!-- details area -->
                    <!-- name -->
                    <a href="product-details.html" class="product-details-name"><h2>{{productName}}</h2></a>
                    <!-- price -->
                    <div class="product-price-container">
                    <div class="product-details-price"><h3>₦ {{price}}</h3></div>
                    <a href="javasscript:;" class="navbar-review-icon" data-trigger="modal" data-target="productReview">
                        <StarRating :score=reviewScore></StarRating>
                        <Nuxt />
                    </a>
                    </div>
                    <!-- sizes -->
                    <div class="product-details-container">
                        <div class="product-details-label">
                            Rate our experience with this business
                        </div>

                        <div class="review-action-container review-star-area">
                            <div class="review-star-action">
                                <button class="btn btn-white is-active" data-score="1"  @click="setreviewScore(1)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                        <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                    </svg>
                                </button>
                                <div class="review-type">Hated it</div>
                            </div>

                            <div class="review-star-action">
                                <button class="btn btn-white" data-score="2"  @click="setreviewScore(2)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                        <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                    </svg>
                                </button>
                                <div class="review-type">Didn't like it</div>
                            </div>

                            <div class="review-star-action">
                                <button class="btn btn-white"  @click="setreviewScore(3)" data-score="3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                        <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                    </svg>
                                </button>
                                <div class="review-type">Just OK</div>
                            </div>

                            <div class="review-star-action">
                                <button class="btn btn-white" @click="setreviewScore(4)" data-score="4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                        <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                    </svg>
                                </button>
                                <div class="review-type">Liked it</div>
                            </div>

                            <div class="review-star-action">
                                <button class="btn btn-white" @click="setreviewScore(5)" data-score="5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                        <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                    </svg>
                                </button>
                                <div class="review-type">Loved it</div>
                            </div>

                        </div>
                    </div>

                    <!-- color -->
                    <div class="product-details-container">
                        <div class="product-details-label">
                            Describe your experience <span>- Optional</span>
                        </div>
                        <textarea name="" id="" cols="30" rows="5" class="input-form white-bg-color add-border" v-model="reviewDescription"></textarea>
                    </div>

                    <!-- action -->
                    <div class="d-flex mg-bottom-16">
                        <button class="btn btn-block btn-primary" type="button" @click="submitReview" id="submitReview">
                            Submit review
                            <div class="loader-action"><span class="loader"></span></div>
                        </button>
                    </div>

                </div> 
                <!-- end of product info-->

            </div> <!-- End of product-details-content-info -->
            <!-- when an error occurs, show this -->
            <div class="link-error-area" v-show="isNetworkError && !pageLoader">
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
        <PRODUCTREVIEW></PRODUCTREVIEW>
        <Nuxt />

    </div>
  </div>
</template>

<script>
import MOBILENAVIGATION from '~/layouts/customer/mobile-navigation.vue'
import DESKTOPNAVGATION from '~/layouts/customer/desktop-navigation.vue'
import MOBILESEARCH from '~/layouts/customer/mobile-search.vue'
import BOTTOMADS from '~/layouts/customer/buttom-ads.vue'
import CUSTOMERFOOTER from '~/layouts/customer/customer-footer.vue'
import PRODUCTREVIEW from '~/components/product/product-review.vue'
import PAGELOADER from '~/components/loader/loader.vue';

import StarRating from '~/plugins/vue-star-rating.client.vue';

import { mapActions, mapGetters, mapMutations } from 'vuex';

import {
    GET_ALL_DETAILS_FROM_PRODUCT_WITH_ID,
    CREATE_PRODUCT_REVIEW
} from '~/graphql/product';

export default {
    components: {
      DESKTOPNAVGATION, MOBILENAVIGATION, MOBILESEARCH, BOTTOMADS, CUSTOMERFOOTER, PAGELOADER, PRODUCTREVIEW, StarRating
    },
    data: function () {
        return {
            currentSlide: 1,
            slider: "",
            pageLoader: true,
            productId: "",
            businessId: "",
            accessToken: "",
            productName: "",
            price: "",
            images: "",
            reviewScore: 0,
            reviews: [],

            ratingScore: 1,
            reviewDescription: "",

            isNetworkError: 0,
            errorReason: ""
        }
    },
    computed: {

        returnImages () {
            return this.images
        }
    },
    methods : {
        ...mapGetters({
            'GetLoginStatus': 'customer/GetLoginStatus',
            'GetCustomerData': 'customer/GetCustomerDetails',
        }),
        formatBigSizeImage: function (image) {
            return this.$formatProductImageUrl(this.businessId, image, "bigSize")
        },
        GetCustomerDataFromStore: function () {
			let customerData = this.GetCustomerData();
            this.accessToken = customerData.userToken
        },
		LoginStatus: function() {
			return this.GetLoginStatus()
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
        getProductById: async function () {

            let variables = {
                productId: this.productId
            }

            let request = await this.$performGraphQlMutation(this.$apollo, GET_ALL_DETAILS_FROM_PRODUCT_WITH_ID, variables, {});

            if (request.error) {
                this.isNetworkError = 1
                this.errorReason = request.message
                return this.$initiateNotification('error', "Network error", request.message)
            }

            let result = request.result.data.GetProductById;

            if (result.success == false) {
                this.isNetworkError = 1
                this.errorReason = result.message
                return this.$initiateNotification('error', "", result.message)
            }

            this.productName = result.product.name
            this.price = this.$numberNotation(result.product.price);
            this.images = result.product.images
            this.reviewScore = result.product.reviewScore
            this.reviews = result.product.reviews
            this.businessId = result.business.id

            $nuxt.$emit('ProductReviews', {
                reviews: this.reviews == null ? [] : this.reviews,
                reviewScore: this.reviewScore
            });

            
        },
        setreviewScore: function (score) {

            let reviewButtons = document.querySelectorAll('[data-score]');

            for (const [index, x] of reviewButtons.entries()) {
                x.classList.remove('is-active')
            }

            for (const [index, x] of reviewButtons.entries()) {

                index = index + 1

                if (index <= score) {
                    x.classList.add('is-active')
                }
            }

            this.ratingScore = score
        },
        submitReview: async function () {

            let variables = {
                message: this.reviewDescription,
                score: this.ratingScore,
                productId: this.productId
            }

            let context = {
                headers: {
                    accessToken: this.accessToken
                }
            }

            let target = document.getElementById('submitReview');

            target.disabled = true

            let request = await this.$performGraphQlMutation(this.$apollo, CREATE_PRODUCT_REVIEW, variables, context);

            target.disabled = false

            if (request.error) {
                return this.$initiateNotification('error', "Network error", request.message)
            }

            let result = request.result.data.CreateProductReview;

            if (result.success == false) {
                this.$initiateNotification('error', "", result.message)
                return
            }
            
            return this.$initiateNotification('success', "Review created", result.message)



        },
    },
    mounted () {
        this.slider = document.getElementsByClassName("product-image-slide");
        this.$productImageSlides(this.currentSlide, this.slider);
        this.pageLoader = false
    },
    created: async function () {
		if (process.browser) {
            
            this.productId = this.$route.params.id
            console.log(this.productId)
            if(this.productId == undefined || this.productId.length == 0) {
                return this.$router.push('/')
            } 

            let status = this.LoginStatus()
            if (status == false) {
                return this.$router.push('/')
            }

            this.GetCustomerDataFromStore();
            await this.getProductById();
		}

    }
}
</script>
<style scoped>
.is-active svg {
    fill: rgba(239, 134, 14, 1) !important;
}
</style>