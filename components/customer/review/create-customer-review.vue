<template>
  <div class="modal-container" id="createCustomerReview">
        <div class="modal-dialog-box">

            <div class="modal-header">
                <div>
                    <h4 class="mg-bottom-4">Write a review</h4>
                    <div class="review-text">How was your experience with this customer</div>
                </div>

                <button class="close-modal-btn" data-target="createCustomerReview" data-dismiss="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                        <use xlink:href="~/assets/customer/image/all-svg.svg#times"></use>
                    </svg>
                </button>
            </div>

            <div class="modal-content" id="tabContent">
                <div id="createCategory">
                    <div class="form-control">
                        <label for="businessType" class="form-label">Rate your exeprience with this customer</label>
                        <div class="review-action-container">
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
                    <div class="form-control">
                        <label for="businessType" class="form-label">Describe your experience with this customer - <span>optional</span></label>
                        <textarea name="" id="" cols="30" rows="5" class="input-form" v-model="ratingDescription"></textarea>
                    </div>
                    <div class="form-control">
                        <button class="btn btn-block btn-primary" type="button" @click="submitReview" id="submitReview">
                            Submit review
                            <div class="loader-action"><span class="loader"></span></div>
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="modal-footer">
                <button class="btn btn-default btn-light-grey" data-dismiss="modal" data-target="createCustomerReview">Close</button>
            </div>

        </div>
    </div>
</template>

<script>

import { mapActions, mapGetters, mapMutations } from 'vuex';

import { CREATE_CUSTOMER_REVIEW } from '~/graphql/customer'

export default {
    name: "CREATECUSTOMERREVIEW",
    data() {
        return {
            ratingScore: 1,
            ratingDescription: "",
            businessId: "",
            accessToken: "",
            orderId: "",
            customerId: ""
        }
    },
    methods: {
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
                businessId: this.businessId,
                customerId: this.customerId,
                rating: this.ratingScore,
                description: this.ratingDescription
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }
            
            let target = document.getElementById('submitReview');
            target.disabled = true
			
            let request = await this.$performGraphQlQuery(this.$apollo, CREATE_CUSTOMER_REVIEW, variables, context);

            target.disabled = false
            
            if (request.error) {
                return this.$showToast('A network error occurred', 'error', 6000);
            }

            let result = request.result.data.createCustomerReview;

            if (result.success == false) {
                return this.$showToast(result.message, 'error', 6000);
            }

            return this.$showToast(result.message, 'success', 6000);

        }
    },
    created() {
        if (process.client) {
            this.orderId = this.$route.params.id
            this.customerId = this.$route.query.ctr
            if((this.customerId == undefined) || this.orderId.length == 0) {
                
            } 
            this.GetBusinessDataFromStore()
        }
    },
}
</script>

<style scoped>
    .is-active svg {
        fill: rgba(239, 134, 14, 1) !important;
    }
</style>