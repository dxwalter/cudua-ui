<template>
      <div class="modal-container" id="productReview">
        <div class="modal-dialog-box">

            <div class="modal-header">
                <div>
                    <h4 class="mg-bottom-4">Product review</h4>
                    <div class="review-text nav-rating-result" v-show="reviewScore">
                        <a href="javasscript:;" class="navbar-review-icon">
                            <star-rating :rating=reviewScore :show-rating="false" :read-only="true" active-color="#ef860e" :round-start-rating="false"></star-rating>
                        </a>
                        <div class="rating-score">
                            {{reviewScore}}/5
                        </div>
                    </div>
                </div>

                <button class="close-modal-btn" data-target="productReview" data-dismiss="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                        <use xlink:href="~/assets/business/image/all-svg.svg#times"></use>
                    </svg>
                </button>
            </div>

            <div class="modal-content modal-fixed-height" v-bind:class="{'no-height': allReviews.length <  1}">

                <div class="alert alert-info notification-alert" v-show="allReviews.length <  1">
                    <div id="infoArea">No review has been written for this product.</div>
                </div>

               <div class="business-review-container">
                    <div class="review-item" v-for="(review, index) in returnReviews" :key="index">
                        <div class="review-header">
                            <div class="review-image" v-show="!review.author.displayPicture">
                                <div class="no-logo-review">{{CustomerNameAsDP(review.author.fullname)}}</div>
                            </div>
                            <div class="review-image" v-show="review.author.displayPicture">
                                <img :data-src="`${getImageInLogoSize(review.author.authorId, review.author.displayPicture)}`" :alt="`${review.fullname}'s picture`" v-lazy-load>
                            </div>

                            <div class="review-details">
                                <div class="reviewer-name">{{review.author.fullname}}</div>
                                <div class="display-flex">
                                <div class="review-star-icon">
                                    <div class="modal-review-icon">
                                        <star-rating :rating=review.rating :show-rating="false" :read-only="true" active-color="#ef860e" :round-start-rating="false"></star-rating>
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
            
            <div class="modal-footer" data-target="productReview" data-dismiss="modal">
                <button class="btn btn-default btn-light-grey">Close</button>
            </div>

        </div>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
    name: "PRODUCTREVIEW",
    components: {
        StarRating
    },
    data() {
        return {
            reviewScore: 0,
            allReviews: ""
        }
    },
    computed: {
        returnReviews() {
            return this.allReviews
        }
    },
    methods: {
        CustomerNameAsDP: function (name) {
            return this.$convertNameToLogo(name)
        },
		formatNotificationTimer: function (timeStamp) {
			return this.$timeStampModifier(timeStamp)
        },
        getImageInLogoSize: function (customerId, imagePath) {
            return this.$getCustomerProfilePictureUrl(customerId, imagePath)
        }
    },
    created() {
        if (process.browser) {
            this.$nuxt.$on('ProductReviews', (data) => {
                this.allReviews = data.reviews;
                this.reviewScore = data.reviewScore
            })
        }
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