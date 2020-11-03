<template>
    <div class="business">
        <div class="body-container">
            <TOPHEADER />
            <Nuxt />
            <div class="content-container">
                <SIDENAV />
                <Nuxt />
                    <div class="content-area grey-bg-color">

                        <!-- pageLoader -->
                        <PAGELOADER v-show="pageLoader"></PAGELOADER>
                        <Nuxt />

                        <div class="main-content position-relative" v-show="!pageLoader && !pageError">

                            <div class="page-header">
                                <h4>Accounting</h4>
                            </div>

                            <div class="home-bookmark-listing-content">

                                <div class="swiper-action-container">
                                    <button class="close-modal-btn slider-control reduce-22">
                                        <input type="checkbox" class="dropdownCheckBox" data-direction="left" data-carousel="carousel" data-target="accountingSlider">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                            <use xlink:href="~/assets/business/image//all-svg.svg#leftArrow"></use>
                                        </svg>
                                    </button>
                                </div>
                                <div class="swiper-action-container">
                                    <button class="close-modal-btn slider-control reduce-22">
                                        <input type="checkbox" class="dropdownCheckBox" data-direction="right" data-carousel="carousel" data-target="accountingSlider">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                            <use xlink:href="~/assets/business/image//all-svg.svg#rightArrow"></use>
                                        </svg>
                                    </button>
                                </div>

                                <div class="dashboard-card-container" id="accountingSlider">

                                    <div class="card dashboard-small-card carousel-item">
                                        <div class="dashboard-card-content black">
                                            <div class="card-essence">
                                                <div class="icon-area">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <use xlink:href="~/assets/business/image//all-svg.svg#bigGift"></use>
                                                    </svg>
                                                </div>
                                                <div class="card-info">
                                                    <div class="details">All Products in my shop</div>
                                                    <div class="numbers">{{allProducts}}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card dashboard-small-card carousel-item">
                                        <div class="dashboard-card-content blue">
                                            <div class="card-essence">
                                                <div class="icon-area">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <use xlink:href="~/assets/business/image//all-svg.svg#bigCart"></use>
                                                    </svg>
                                                </div>
                                                <div class="card-info">
                                                    <div class="details">All orders</div>
                                                    <div class="numbers">{{allOrders}}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card dashboard-small-card carousel-item">
                                        <div class="dashboard-card-content orange">
                                            <div class="card-essence">
                                                <div class="icon-area">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <use xlink:href="~/assets/business/image//all-svg.svg#bigCart"></use>
                                                    </svg>
                                                </div>
                                                <div class="card-info">
                                                    <div class="details">My products added to cart</div>
                                                    <div class="numbers">{{allProductsInCart}}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card dashboard-small-card carousel-item">
                                        <div class="dashboard-card-content yellow">
                                            <div class="card-essence">
                                                <div class="icon-area">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                                        <use xlink:href="~/assets/business/image//all-svg.svg#followerBig"></use>
                                                    </svg>
                                                </div>
                                                <div class="card-info">
                                                    <div class="details">Followers</div>
                                                    <div class="numbers">{{allFollowers}}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card dashboard-small-card carousel-item">
                                        <div class="dashboard-card-content dark">
                                            <div class="card-essence">
                                                <div class="icon-area">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <use xlink:href="~/assets/business/image//all-svg.svg#naira"></use>
                                                    </svg>
                                                </div>
                                                <div class="card-info">
                                                    <div class="details">Total amount sold</div>
                                                    <div class="numbers">{{totalAmountSold}}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>


                            <div class="page-header mg-top-32">
                                <h4>Payments</h4>
                            </div>

                            <div class="upload-tab-area" id="tabList">
                                <a href="javascript:;" class="chip-tab-item is-active" id="tabLink" data-tab="transactions">Transactions</a>
                                <a href="javascript:;" class="chip-tab-item" id="tabLink" data-tab="refund">Refund</a>
                                <a href="javascript:;" class="chip-tab-item" id="tabLink" data-tab="errors">Error</a>
                            </div>

                            <div class="upload-tab-content" id="tabContent">
                                <!-- Transaction area -->
                                <div class="is-active tab-content-area" id="transactions">
                                    <!-- beginning of tables -->
                                    <div class="table-container">
                                        <table class="table table-striped" v-show="returnTransactionData.length > 0">
                                            <thead>
                                            <tr>
                                                <th class="table-heading">Customers' name</th>
                                                <th class="table-heading">Reference ID</th>
                                                <th class="table-heading">Order ID</th>
                                                <th class="table-heading">Method of payment</th>
                                                <th class="table-heading">Amount</th>
                                                <th class="table-heading">Date</th>
                                                <th class="table-heading">More info</th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            <tr v-for="(data, index) of returnTransactionData" :key="index">
                                                <td>{{data.name}}</td>
                                                <td>{{data.referenceId}}</td>
                                                <td>{{data.orderId}}</td>
                                                <td>{{data.paymentMethod}}</td>
                                                <td>₦ {{data.amount}}</td>
                                                <td>{{data.date}}</td>
                                                <td class="d-flex justify-content-around">
                                                    <n-link :to="`/b/orders/${data.orderId}`" class="table-button btn btn-white btn-small">Details</n-link>
                                                </td>
                                            </tr>
                    
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="alert alert-info" v-show="returnTransactionData.length == 0">You do not have transaction on your shop.</div>
                                    <!-- end of tables -->
                                </div>

                                <!-- Refund areas -->
                                <div class="is-active tab-content-area" id="refund"></div>

                                <!-- errors -->
                                <div class="is-active tab-content-area" id="errors"></div>
                                
                            </div>
                           

                        </div>


                        <!-- when an error occurs, show this -->
                        <div class="link-error-area modify-layout" v-show="pageError && !pageLoader">
                            <img src="~/static/images/server-error.svg" alt="">
                            <div class="error-cause" v-html="errorReason">{{errorReason}}</div>
                        </div>
                        <!-- end of error area -->
                        
                        <BOTTOMNAV />
                        <Nuxt />
                    </div>
            </div>
        </div>
    </div>
</template>

<script>

import PAGELOADER from '~/components/loader/loader.vue'
import { mapActions, mapGetters, mapMutations } from 'vuex';

import {
    GET_BUSINESS_ACCOUNITNG_DETAILS
} from '~/graphql/accounting'

import TOPHEADER from '~/layouts/business/top-navigation.vue';
import SIDENAV from '~/layouts/business/side-bar.vue';
import BOTTOMNAV from '~/layouts/business/bottom-nav.vue';
export default {
    name: "ACOUNTING",
    components: {
        TOPHEADER, SIDENAV, BOTTOMNAV, PAGELOADER
    },
    data () {
        return {
            pageLoader: true,
            businessId: "",
            accessToken: "",
            allProducts: 0,
            allOrders: 0,
            allProductsInCart: 0,
            allFollowers: 0,
            totalAmountSold: 0,

            transactionData: [],
            pageError: 0,
            errorReason: ""
        }
    },
    computed: {
        returnTransactionData () {
            return this.transactionData
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
        getAccountingData: async function () {
            let variables = {
                businessId: this.businessId,
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }

            let query = await this.$performGraphQlQuery(this.$apollo, GET_BUSINESS_ACCOUNITNG_DETAILS, variables, context);

			if (query.error == true) {
                this.$initiateNotification('error', 'Failed request', query.message);
                this.pageError = 1
                this.errorReason = query.message
                return
			}

            let result = query.result.data.GetBusinessAccounting;

            if (result.success == false || result.businessData == null) {
                this.$initiateNotification('error', 'Oops!', result.message);
                this.pageError = 1
                this.errorReason = query.message
                return
            }

            let data = result.businessData

            this.allProducts = this.$numberNotation(data.allProducts);
            this.allOrders = this.$numberNotation(data.allOrders);
            this.allProductsInCart = this.$numberNotation(data.allProductsInCart);
            this.allFollowers = this.$numberNotation(data.allFollowers);
            this.totalAmountSold = this.$numberNotation(data.totalAmountSold);

            let transactionArray = [];

            for (let x of data.allTransactions) {
                transactionArray.push({
                    name: x.customerName,
                    referenceId: x.referenceId,
                    paymentMethod: x.paymentMethod,
                    orderId: x.orderId,
                    amount: this.$numberNotation(x.amount),
                    date: this.$convertTodate(x.date)
                })
            }

            this.transactionData = transactionArray


        }
    },
    async mounted () {
        await this.getAccountingData()
        this.pageLoader = false
    },
    created () {
        if (process.browser) {
            this.GetBusinessDataFromStore()
        }
    },
}
</script>
<style scoped>
    .reduce-22 {
        width: 22px !important;
        height: 22px !important;
    }
    .reduce-22 svg {
        width: 12px !important;
        height: 12px !important;
    }
    .modify-layout {
        padding-top: 64px;
    }
</style>