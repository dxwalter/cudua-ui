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
        <PAGELOADER v-if="pageLoader"></PAGELOADER>
        <Nuxt />

        <div class="content-container" v-show="!pageLoader">
            <!-- bookmark area -->
            <div class="section-header" v-show="!pageLoader && !isNetworkError"><h4>Business review</h4></div>
            <!-- content start here -->
            <div class="all-product-details-container" v-show="!pageLoader && !isNetworkError">
                <!-- product image area -->
                <div class="image-area">
                    <!-- image area -->
                    <div class="product-details-image-info">
                        <div class="product-details-img-container height-auto overflow-unset">
                            
                            
                                <div class="business-review-cover">
                                    <img :data-src="coverPhoto" :alt="`${businessName}'s cover photo`" v-if="coverPhoto.length > 0" v-lazy-load>
                                    <div class="no-cover-photo" v-else>
                                        No cover photo has been added by this business
                                    </div>
                                </div>

                                <div class="order-business-logo">
                                    <div class="temporal-logo" v-show="!logo">
                                        {{getNameLogo(businessName)}}
                                    </div>
                                    <img :data-src="logo" :alt="`${businessName}'s logo`"  v-show="logo" v-lazy-load>
                                </div>

                                <div class="follow-area-action" v-show="!pageLoader">

                                    <button class="btn btn-primary btn-small" v-show="checkFollowStatus == 0 && pageLoader == false" id="followBusiness" @click="followBusiness()">Follow</button>

                                    <button class="btn btn-white btn-small" v-show="checkFollowStatus == 1 && pageLoader == false" id="unfollowBusiness" @click="unFollowBusiness()">Unfollow</button>

                                </div>
                            
                        </div>
                        
                    </div>
                </div>
                <!-- end of product image area -->

                <!-- beginning of product details -->
                <div class="product-details-content-info">
                    <!-- details area -->
                    <!-- name -->
                    <a href="product-details.html" class="product-details-name mg-bottom-8 d-flex"><h2>{{businessName}}</h2></a>
                    <!-- price -->
                    <div class="product-price-container">
                    <a href="javasscript:;" class="navbar-review-icon" data-trigger="modal" data-target="reviewModal">
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
            <div class="link-error-area" v-show="isNetworkError">
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
      <BUSINESSREVIEW></BUSINESSREVIEW>
      <Nuxt />

    </div>
  </div>
</template>

<script>
import MOBILENAVIGATION from '~/layouts/customer/mobile-navigation.vue'
import DESKTOPNAVGATION from '~/layouts/customer/desktop-navigation.vue'
import MOBILESEARCH from '~/layouts/customer/mobile-search.vue'
import BOTTOMADS from '~/layouts/customer/buttom-ads.vue'
import CUSTOMERFOOTER from '~/layouts/customer/customer-footer.vue';
import BUSINESSREVIEW from '~/layouts/customer/business/business-review-modal.vue';
import PAGELOADER from '~/components/loader/loader.vue';
import StarRating from '~/plugins/vue-star-rating.client.vue'

import { mapActions, mapGetters, mapMutations } from 'vuex';
import { 
    GET_BUSINESS_DETAILS_BY_USERNAME,
    CREATE_BUSINESS_REVIEW    
} from '~/graphql/business'
import {
	IS_CUSTOMER_FOLLOWING_BUSINESS,
	FOLLOWBUSINESS,
	UNFOLLOWBUSINESS	
} from '~/graphql/customer'

export default {
    name: "CREATEBUSINESSREVIEW",
    components: {
      DESKTOPNAVGATION, MOBILENAVIGATION, MOBILESEARCH, BOTTOMADS, CUSTOMERFOOTER, PAGELOADER, BUSINESSREVIEW, StarRating
    },
    data: function() {
        return {
            pageLoader: true,
            username: "",
            accessToken: "",
            businessName: "",
            logo: "",
            coverPhoto: "",
            businessId: "",
            reviewScore: 0,
            errorReason: "",

            reviewMessage: "",
            isNetworkError: 0,
            checkFollowStatus: 0,
            ratingScore: 1,
            reviewDescription: ""
        }
    },
    methods: {
        ...mapGetters({
            'GetLoginStatus': 'customer/GetLoginStatus',
            'GetCustomerData': 'customer/GetCustomerDetails',
        }),
        submitReview: async function () {

            let variables = {
                description: this.reviewDescription,
                score: this.ratingScore,
                businessId: this.businessId
            }

            let context = {
                headers: {
                    accessToken: this.accessToken
                }
            }

            let target = document.getElementById('submitReview');

            target.disabled = true

            let request = await this.$performGraphQlMutation(this.$apollo, CREATE_BUSINESS_REVIEW, variables, context);

            target.disabled = false

            if (request.error) {
                return this.$initiateNotification('error', "Network error", query.message)
            }

            let result = request.result.data.CreateBusinessReview;

            if (result.success == false) {
                this.$initiateNotification('error', "", result.message)
                return
            }
            
            return this.$initiateNotification('success', "Review created", result.message)



        },
        GetCustomerDataFromStore: function () {
			let customerData = this.GetCustomerData();
            this.accessToken = customerData.userToken
        },
		LoginStatus: function() {
			return this.GetLoginStatus()
        },
        getNameLogo: function(name) {
			if (process.browser) {
				return this.$convertNameToLogo(name)
			}
        },
		isCustomerFollowingBusiness: async function() {

			if (!this.accessToken || this.businessId == undefined) {
				return
			}

			let variables = {
				businessId: this.businessId
			}

			let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }
        

            let query = await this.$performGraphQlQuery(this.$apollo, IS_CUSTOMER_FOLLOWING_BUSINESS, variables, context);

            if (query.error) {
                this.$initiateNotification('error', "Network error", query.message)
                return
            }

            let result = query.result.data.IsCustomerFollowingBusiness;

            if (result.success == false) {
                this.$initiateNotification('error', "", result.message)
                return
			}
			
			if (result.status == true) this.checkFollowStatus = 1
			if (result.status == false) this.checkFollowStatus = 0
		},
		getNameLogo: function (businessName) {
			if (process.browser) {
				let name =  this.$convertNameToLogo(businessName)
				return name
			}
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
        getBusinessDetails: async function () {

            let variables = {
                username: this.username
            }

            let request = await this.$performGraphQlQuery(this.$apollo, GET_BUSINESS_DETAILS_BY_USERNAME, variables, {});

            if (request.error) {
                this.isNetworkError = 1
                this.errorReason = request.message
                return this.$initiateNotification('error', 'Failed request', request.message);
            }

            let result = request.result.data.GetSingleBusinessDetailsByUsername;

            if (result.success == false) {
                this.isNetworkError = 1
                this.errorReason = result.message
                return this.$initiateNotification('error', '', result.message);
            }

            this.businessName = result.businessData.businessname
            this.logo = result.businessData.logo.length > 0 ? this.$getBusinessLogoUrl(result.businessData.id, result.businessData.logo) : ""
            this.coverPhoto = result.businessData.coverPhoto.length > 0 ? this.$getBusinessCoverPhotoUrl(result.businessData.id, result.businessData.coverPhoto) : ""
            this.businessId = result.businessData.id
            this.reviewScore = parseInt(result.businessData.review, 10)
            
            this.reviewMessage = result.businessData.reviews

            let businessReview = {
                businessId: this.businessId,
                reviewScore: this.reviewScore,
                reviews: this.reviewMessage
            }

            $nuxt.$emit('BusinessReview', businessReview)

        },
        unFollowBusiness: async function () {
			let target = document.getElementById('unfollowBusiness');

			let variables = {
				businessId: this.businessId
			}

			let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }
		

			target.disabled = true;

			let query = await this.$performGraphQlMutation(this.$apollo, UNFOLLOWBUSINESS, variables, context);
			
			target.disabled = false;

            if (query.error) {
                this.$initiateNotification('error', "Network error", query.message)
                return
            }

            let result = query.result.data.UnfollowBusiness;

            if (result.success == false) {
                this.$initiateNotification('error', "", result.message)
                return
			}

			this.$initiateNotification('success', "", result.message)
			
			this.checkFollowStatus = 0
		},
		followBusiness: async function () {
			
			let target = document.getElementById('followBusiness');

			let variables = {
				businessId: this.businessId
			}

			let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }
		

			target.disabled = true;

			let query = await this.$performGraphQlMutation(this.$apollo, FOLLOWBUSINESS, variables, context);
			
			target.disabled = false;

            if (query.error) {
                this.$initiateNotification('error', "Network error", query.message)
                return
            }

            let result = query.result.data.FollowBusiness;

            if (result.success == false) {
                this.$initiateNotification('error', "", result.message)
                return
			}

			this.$initiateNotification('success', "", result.message)
			
			this.checkFollowStatus = 1

		},

    },
    created: async function () {
		if (process.browser) {
            
            this.username = this.$route.params.id
            if(this.username == undefined || this.username.length == 0) {
                return this.$router.push('/')
            } 

            let status = this.LoginStatus()
            if (status == false) {
                return this.$router.push('/')
            }

            this.GetCustomerDataFromStore();
            await this.getBusinessDetails();
            await this.isCustomerFollowingBusiness()
		}

    },
    mounted () {
        this.pageLoader = false
    }
}
</script>
<style scoped>
.product-details-img-container {
    height: 270px !important;
    position: relative;
    margin-bottom: 64px;
}
.business-review-cover {
    overflow: hidden;
    height: 100%;
    position: relative;
}
.business-review-cover img {
    object-fit: cover;
    -o-object-fit: cover;
}
.follow-area-action {
    bottom: -173px;
    width: 154px;
    right: 0;
}
.order-business-logo {
    z-index: 500 !important;
}
.is-active svg {
    fill: rgba(239, 134, 14, 1) !important;
}
.product-details-img-container button {
    right: 0;
}
</style>