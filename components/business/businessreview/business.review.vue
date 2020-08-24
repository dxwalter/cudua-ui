<template>
      <div class="modal-container" id="reviewModal">
        <div class="modal-dialog-box">

            <div class="modal-header">
                <div>
                    <h4>Business review</h4>
                    <div class="review-text nav-rating-result" v-if="!isLoading">
                        <a href="javasscript:;" class="navbar-review-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                            </svg>
                        </a>
                        <div class="rating-score">
                            4.5/5
                        </div>
                    </div>
                </div>

                <button class="close-modal-btn" data-target="reviewModal" data-dismiss="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                        <use xlink:href="~/assets/business/image/all-svg.svg#times"></use>
                    </svg>
                </button>
            </div>

            <div class="modal-content modal-fixed-height">

                <div v-if="isLoading" class="is-loading-container">
                    <div class="is-loading-inner-container" id="loadingContainer">
                        <div class="loader-action"><span class="loader"></span></div>
                    </div>
                </div>

               <div class="business-review-container">
                   

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

export default {
    name: "BUSINESSREVIEWMODAL",
    components: {

    },
    data: function() {
        return {
            isLoading: 1,
            reviews: "",
            reviewScore: ""
        }
    },
    methods: {
        ...mapGetters({
            'GetBusinessData': 'business/GetBusinessDetails',
            'GetUserData': 'customer/GetCustomerDetails'
        }),
        GetBusinessBookmarks: function () {
            let businessData = this.GetBusinessData();
            this.reviews = businessData.businessReview.reviews
            this.reviewScore = businessData.businessReview.score

        },
        GetBusinessReview: async function () {
            
        }
    },
    async created () {
        if (process.browser) {
            this.GetBusinessBookmarks();
            if (this.reviews.length < 1) {
                await this.GetBusinessReview()
            }
        }
    }
}
</script>

<style scoped>

</style>