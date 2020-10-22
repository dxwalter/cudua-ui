<template>
  <div class="customer">
    <div class="body-container grey-bg-color">

      <!-- beginning of navigation container -->
        <div class="nav-container">
            <MOBILESEARCH></MOBILESEARCH>
            <DESKTOPNAVGATION></DESKTOPNAVGATION>
            <MOBILENAVIGATION></MOBILENAVIGATION>
        </div>
        
        <!-- pageLoader -->
        <PAGELOADER v-show="pageLoader"></PAGELOADER>

        <div class="content-container">
            <!-- bookmark area -->
            <div class="section-header"><h4>My orders</h4></div>
            <!-- content start here -->

            <div class="order-listing-container">

                <div class="chip-tabs mg-bottom-32" id="tabList">
                    <a href="#" class="chip-tab-item is-active" id="tabLink" data-tab="allOrders">New orders</a>
                    <a href="#" class="chip-tab-item" id="tabLink" data-tab="pendingOrders">Pending orders</a>
                    <a href="#" class="chip-tab-item" id="tabLink" data-tab="clearedOrders">Cleared orders</a>
                </div>

                <div class="tab-content" id="tabContent">
                    <div class="tab-content-area is-active" id="allOrders">
                        
                        <div class="row" v-show="returnNewOrders.length > 0">
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4" v-for="(order, index) of returnNewOrders" :key="index">
                                <div class="card accordion-chip-card">
                                    <n-link :to="`/c/orders/${order.orderId}`" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>{{order.orderId}}</span>
                                                <span>{{formatAndShowSubscription(order.timeStamp)}}</span>
                                            </div>
                                        </div>
                                        <div class="order-dot new"></div>
                                    </n-link>
                                </div>
                            </div>
                        </div>

                        <div class="no-order-list" v-show="returnNewOrders.length == 0">
                            You do not have any new order
                        </div>

                    </div>
                    <!-- end of all orders -->

                    <div class="tab-content-area" id="pendingOrders">
                        <div class="row" v-show="returnPendingOrders.length > 0">
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4" v-for="(order, index) of returnPendingOrders" :key="index">
                                <div class="card accordion-chip-card">
                                    <n-link :to="`/c/orders/${order.orderId}`" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>{{order.orderId}}</span>
                                                <span>{{formatAndShowSubscription(order.timeStamp)}}</span>
                                            </div>
                                        </div>
                                        <div class="order-dot pending"></div>
                                    </n-link>
                                </div>
                            </div>
                        </div>

                        <div class="no-order-list" v-show="returnPendingOrders.length == 0">
                            You do not have any order that is yet to be delivered.
                        </div>
                    </div>

                    <!-- end of pending orders -->

                    <div class="tab-content-area" id="clearedOrders">
                        <div class="row" v-show="returnClearedOrders.length > 0">
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4" v-for="(order, index) of returnClearedOrders" :key="index">
                                <div class="card accordion-chip-card">
                                    <n-link :to="`/c/orders/${order.orderId}`" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>{{order.orderId}}</span>
                                                <span>{{formatAndShowSubscription(order.timeStamp)}}</span>
                                            </div>
                                        </div>
                                        <div class="order-dot cleared"></div>
                                    </n-link>
                                </div>
                            </div>
                        </div>
                        <div class="no-order-list" v-show="returnClearedOrders.length == 0">
                            You do not have any order that been delivered
                        </div>
                    </div>
                    <!-- end of cleared orders -->

                </div>
            </div>

        </div>
        <!-- end of content container -->

        <!-- footer area -->

        <BOTTOMADS></BOTTOMADS>
        <CUSTOMERFOOTER></CUSTOMERFOOTER>

    </div>
  </div>
</template>

<script>
import MOBILENAVIGATION from '~/layouts/customer/mobile-navigation.vue';
import DESKTOPNAVGATION from '~/layouts/customer/desktop-navigation.vue';
import MOBILESEARCH from '~/layouts/customer/mobile-search.vue';
import BOTTOMADS from '~/layouts/customer/buttom-ads.vue';
import CUSTOMERFOOTER from '~/layouts/customer/customer-footer.vue';
import PAGELOADER from '~/components/loader/loader.vue';
import { mapActions, mapGetters, mapMutations } from 'vuex';

import  {
    GET_ALL_ORDERS_BY_CUSTOMER
} from '~/graphql/order'

export default {
    name: "CUSTOMERORDERLISTING",
    components: {
      DESKTOPNAVGATION, MOBILENAVIGATION, MOBILESEARCH, BOTTOMADS, CUSTOMERFOOTER, PAGELOADER
    },
    data: function() {
        return {
            pageLoader: true,
            accessToken: "",

            newOrders: [],
            pendingOrders: [],
            clearedOrders: [],

            serverError: 0,
            errorReason: ""
        }
    },
    computed: {
		...mapGetters({
            'GetLoginStatus': 'customer/GetLoginStatus',
            'GetCustomerDetails': 'customer/GetCustomerDetails'
        }),
		LoginStatus () {
			return this.GetLoginStatus
        },
        returnNewOrders () {
            return this.newOrders
        },
        returnPendingOrders () {
            return this.pendingOrders
        },
        returnClearedOrders () {
            return this.clearedOrders
        }
    },
    created: async function () {
		if (process.browser) {
            let status = this.LoginStatus
            if (status == false) 
                return this.$router.push('/')

            await this.getUserData();
            await this.getAllOrderIds()
		}

    },
    methods: {
        getUserData: function () {
            this.accessToken = this.GetCustomerDetails.userToken
        },
        getAllOrderIds: async function () {

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }

            let request = await this.$performGraphQlQuery(this.$apollo, GET_ALL_ORDERS_BY_CUSTOMER, {}, context);

            if (request.error) {
                this.$initiateNotification('error', 'Oops!', request.message);
                this.serverError = 1;
                this.errorReason = result.message
                return
            }

            let result = request.result.data.GetCustomerOrderIds;

            if (result.success == false) {
                this.$initiateNotification('error', 'Oops!', result.message);
                this.serverError = 1
                this.errorReason = result.message
                return
            }

            let allOrders = result.orders

            this.newOrders = allOrders.new
            this.pendingOrders = allOrders.pending
            this.clearedOrders = allOrders.cleared

        },
        formatAndShowSubscription (dateString) {
            let month = [
                'January',
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ];

            let startDay = new Date(dateString).getDate().toString();
            let formatStart = "";

            if (startDay.length > 1) {
                if (startDay == "21") {
                    formatStart = startDay+"st"
                } else {
                    formatStart = startDay[1] == '3' ? startDay+"rd" : startDay+"th";  
                    formatStart = startDay[1] == '2' || startDay[1] == '22' ? startDay+"nd" : startDay+"th";  
                }
            } else {
                if (startDay == '1') {
                    formatStart = startDay+"st";
                } else {
                    formatStart = startDay == "3" ? startDay+"rd" : startDay+"th";
                }
            }
            
            let startMonth = month[new Date(dateString).getMonth()]
            let startYear = new Date(dateString).getFullYear()

            return `${formatStart} ${startMonth}, ${startYear}`;

        },
    },
    mounted () {
        this.pageLoader = false
    }
}
</script>