<template>
      <div class="modal-container" id="reviewModal">
        <div class="modal-dialog-box">

            <div class="modal-header">
                <div>
                    <h4>Business review</h4>
                    <div class="review-text nav-rating-result" v-if="!isLoading && reviewScore">
                        <a href="javasscript:;" class="navbar-review-icon">
                            <STARRATING :rating=reviewScore :show-rating="false" :read-only="true" active-color="#ef860e" :round-start-rating="false"></STARRATING>
                        </a>
                        <div class="rating-score">
                            {{reviewScore}}/5
                        </div>
                    </div>
                </div>

                <button class="close-modal-btn" data-target="reviewModal" data-dismiss="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                        <use xlink:href="~/assets/business/image/all-svg.svg#times"></use>
                    </svg>
                </button>
            </div>

            <div class="modal-content modal-fixed-height" v-bind:class="{'no-height': isNetworkError || reviewsData.length <  1}">

                <div v-if="isLoading" class="is-loading-container">
                    <div class="is-loading-inner-container" id="loadingContainer">
                        <div class="loader-action"><span class="loader"></span></div>
                    </div>
                </div>

                <div class="alert alert-info notification-alert" v-show="isNetworkError">
                    <div id="infoArea">An error occurred. Please try again</div>
                    <button class="btn btn-white btn-small" @click="GetBusinessReview()">Try again</button>
                </div>

                <div class="alert alert-info notification-alert" v-show="reviewsData.length <  1">
                    <div id="infoArea">No review has been written for your business. Add a product to sell</div>
                </div>

               <div class="business-review-container">
                    <div class="review-item" v-for="(review, index) in displayReviews" :key="index">
                        <div class="review-header">
                            <div class="review-image" v-show="review.displayPicture">
                                <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
                            </div>
                            <div class="review-image" v-show="!review.displayPicture">
                                <div class="no-logo-review">{{CustomerNameAsDP(review.fullname)}}</div>
                            </div>
                            <div class="review-image" v-show="review.displayPicture">
                                <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
                            </div>

                            <div class="review-details">
                                <div class="reviewer-name">{{review.fullname}}</div>
                                <div class="display-flex">
                                <div class="review-star-icon">
                                    <div class="modal-review-icon">
                                        <STARRATING :rating=review.rating :show-rating="false" :read-only="true" active-color="#ef860e" :round-start-rating="false"></STARRATING>
                                    </div>
                                </div>
                                <div class="review-date">- {{formatNotificationTimer(review.timeStamp)}}</div>
                                </div>
                            </div>
                        </div>
                        <p class="review-text">{{review.description}}</p>
                    </div>
               </div>

            </div>
            
            <div class="modal-footer" data-target="reviewModal" data-dismiss="modal">
                <button class="btn btn-default btn-light-grey">Close</button>
            </div>

        </div>
    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

import { GET_BUSINESS_REVIEW } from '~/graphql/business'

import STARRATING from 'vue-star-rating'

export default {
    name: "BUSINESSREVIEWMODAL",
    components: {
        STARRATING
    },
    data: function() {
        return {
            isLoading: 1,
            reviewsData: [],
            reviewScore: 0,
            businessId: "",

            // errors
            isNetworkError: 0
        }
    },
    computed: {
        displayReviews () {
            return this.reviewsData
        }
    },
    methods: {
        ...mapGetters({
            'GetBusinessData': 'business/GetBusinessDetails',
            'GetUserData': 'customer/GetCustomerDetails'
        }),
        GetBusinessDataFromStore: function () {
            let businessData = this.GetBusinessData();
            this.businessId = businessData.businessId
            this.reviewsData = businessData.reviewsArray
            this.reviewScore = businessData.reviewScore

        },
        GetBusinessReview: async function () {
            
            // no network error
            this.isNetworkError = 0
            // component is still loading
            this.isLoading = 1

            let variables = {
                businessId: this.businessId
            }
            
            let query = await this.$performGraphQlQuery(this.$apollo, GET_BUSINESS_REVIEW, variables, {});

            if (query.error) {
                this.isNetworkError = 1
                this.isLoading = 0
                return
            }
            
            let errorTarget = document.getElementById('infoArea');

            // format
            let result = query.result.data.GetBusinessReview;

            // failed request
            if (result.success == false) {
                this.isNetworkError = 1
                this.isLoading = 0
                errorTarget.innerHTML = ''
                errorTarget.innerHTML = result.message
                return
            }

            // successful request with no review
            if (result.success && result.reviews == null) {
                this.isNetworkError = 1
                this.isLoading = 0
                errorTarget.innerHTML = ''
                errorTarget.innerHTML = result.message
                return
            }

            let formatReviewArray = [];
            this.reviewScore = result.score;

            for (let [index, x] of result.reviews.entries()) {

                formatReviewArray.push({
                    fullname: x.author.fullname,
                    displayPicture: x.author.displayPicture,
                    userId: x.author.userId,
                    description: x.description,
                    rating: x.rating,
                    timeStamp: x.timeStamp
                })
            }
            
            this.reviewsData = formatReviewArray

            // save to store

            this.$store.dispatch('business/setBusinessReviews', {
                totalReviewScore: this.reviewScore,
                review: this.reviewsData
            })
            this.isLoading = 0
            this.isNetworkError = 0

        },
        CustomerNameAsDP: function (name) {
            return this.$convertNameToLogo(name)
        },
		formatNotificationTimer: function (timeStamp) {
			return this.$timeStampModifier(timeStamp)
        }
    },
    async created () {
        if (process.browser) {
            this.GetBusinessDataFromStore();
            
            let newReview = this.$route.query.newReview == null ? true : undefined

            if (this.reviewsData.length < 1 || this.reviewsData == '') {
                await this.GetBusinessReview()
            }

            if (newReview == undefined) {
                // alert(this.$route.query.newReview )
                // alert(typeof this.$route.query.newReview)
                await this.GetBusinessReview()
            }
        }
    },
    mounted () {
        this.isLoading = 0;
    }
}
</script>

<style scoped>
    .no-height {
        height: auto !important;
    }
    .notification-alert {
        border-radius: 4px !important;
    }
</style>