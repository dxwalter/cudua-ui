<template>
	<div class="business">
		<div class="body-container">
			<TOPHEADER></TOPHEADER>
			<Nuxt />
			<div class="content-container">
				<SIDENAV></SIDENAV>
				<Nuxt />
				<div class="content-area grey-bg-color">
					<!-- pageLoader -->
					<PAGELOADER v-show="pageLoader"></PAGELOADER>
					<Nuxt />
					<!-- content goes in here -->
					<div class="main-content">

						<div class="page-header with-action">
							<h4>Order listing</h4>

                            <div class="business-product-search-action white-bg-color" id="" @click="showSearchBar()">
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <use xlink:href="~/assets/business/image/all-svg.svg#searchGlass"></use>
                                </svg>
                                <span>Search</span>
                            </div>
                            <!-- If owner has not uploaded any product, this search box should be hidden because they have nothing to search -->
                            <div class="search-area" id="productSearchArea">
                                <input type="text" name="" class="search-form" placeholder="Search for orders using ORDER ID" id="productSearchInput" v-model="orderIdSearchString">
                                <button id="tabLink" class="close-component-search white-bg-color">
                                    <input type="checkbox" class="dropdownCheckBox" @click="hideSearchBar()">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                        <use xlink:href="~/assets/customer/image/all-svg.svg#times"></use>
                                    </svg>
                                </button>
                            </div>
						</div>

						<!-- search area -->

						<div class="accordion white-bg-color border-radius-4 search-result-container"
						v-bind:class="{showEffect: orderIdSearchString.length > 1}"
						>
							<div class="search-result-header">
								<div class="search-result-keyword">
									<span>Search result for </span>
									<span>- {{orderIdSearchString}}</span>
								</div>
								<button class="close-modal-btn hide-for-mobile" @click="orderIdSearchString = ''">
									<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
										<use xlink:href="~/assets/business/image/all-svg.svg#times"></use>
									</svg>
								</button>
							</div>

                        <div class="product-search-loader" v-show="!initiateSearch">
                            <div class="show-loader">
                                <div class="loader-action"><span class="loader"></span></div>
                            </div>
                        </div>

                        <!-- this is when all the products have been listed -->
                        <div v-show="noResultFound" class="alert alert-info mg-top-16  notification-alert add-radius">
                            No result was found for "{{orderIdSearchString}}"
                        </div>

							<div class="row" v-show="initiateSearch">

								<div class="col-xs-12 col-sm-12 col-md-6 col-lg-4" v-for="(order, index) in returnSearchResult" :key="index">
									<div class="item-card">
										<div class="card-upper-layer">
											<div class="card-image">
												<div class="temporal-logo" v-show="!order.profilePicture">
													{{getNameLogo(order.customerName)}}
												</div>
												<img :data-src="getProfilePicture(order.customerId, order.profilePicture)" :alt="`${order.customerName}'s profile picture`"  v-show="order.profilePicture" v-lazy-load>

											</div>
											<div class="order-details-area">
												<div class="order-customer-details">
													<h4 class="customer-name">{{order.customerName}}</h4>
													<div class="order-timestamp">{{formatTimeData(order.orderTime)}}</div>
												</div>
												<div class="order-item-count">Order Id: {{order.orderId}}</div>
											</div>
										</div>
										<div class="item-card-footer">
											<n-link :to="`/b/orders/${order.orderId}`" class="btn btn-md btn-white">
												View products
											</n-link>
										</div>
									</div>
								</div>
								
							</div>
						</div>

						<!-- content area -->
						<div>
							<div class="chip-tabs" id="tabList">
								<div class="chip-tab-item is-active" id="tabLink" data-tab="newOrders">New orders
									<div class="notif-point">{{returnNewOrders.length}}</div>
								</div>
								<div class="chip-tab-item" id="tabLink" data-tab="pendingOrders">Pending deliveries
									<div class="notif-point">{{returnPendingOrders.length}}</div>
								</div>
								<div class="chip-tab-item" id="tabLink" data-tab="clearedOrders">Cleared orders
									<div class="notif-point">{{returnClearedOrders.length}}</div>
								</div>
							</div>

							<div class="chip-tab-content">
								<div class="tab-content width-100" id="tabContent">

									<div class="tab-content-area is-active" id="newOrders">

										<div class="no-account-category" v-show="returnNewOrders.length == 0">
											<!-- when no category has been added to the account -->
											<h2>You do not have a new order</h2>
											<p>Start uploading the products that you want to sell</p>
											<n-link to="/b/product/add-product" class="btn btn-white">Upload a product</n-link>
										</div>

										<div class="row" v-show="returnNewOrders.length > 0">
											<div class="col-xs-12 col-sm-12 col-md-6 col-lg-4" v-for="(order, index) in returnNewOrders" :key="index">
												<div class="item-card">
													<div class="card-upper-layer">
														<div class="card-image">
															<div class="temporal-logo" v-show="!order.profilePicture">
																{{getNameLogo(order.customerName)}}
															</div>
															<img :data-src="getProfilePicture(order.customerId, order.profilePicture)" :alt="`${order.customerName}'s profile picture`"  v-show="order.profilePicture" v-lazy-load>

														</div>
														<div class="order-details-area">
															<div class="order-customer-details">
																<h4 class="customer-name">{{order.customerName}}</h4>
																<div class="order-timestamp">{{formatTimeData(order.orderTime)}}</div>
															</div>
															<div class="order-item-count">Order Id: {{order.orderId}}</div>
														</div>
													</div>
													<div class="item-card-footer">
														<n-link :to="`/b/orders/${order.orderId}`" class="btn btn-md btn-white">
															View products
														</n-link>
													</div>
												</div>
											</div>

										</div>
									</div>

									<div class="tab-content-area" id="pendingOrders">
										<div class="no-account-category" v-show="returnPendingOrders.length == 0">
											<!-- when no category has been added to the account -->
											<h2>You do not have any pending deliveries</h2>
										</div>
										<div class="row" v-show="returnPendingOrders.length > 0">
											<div class="col-xs-12 col-sm-12 col-md-6 col-lg-4" v-for="(order, index) in returnPendingOrders" :key="index">
												<div class="item-card">
													<div class="card-upper-layer">
														<div class="card-image">
															<div class="temporal-logo" v-show="!order.profilePicture">
																{{getNameLogo(order.customerName)}}
															</div>
															<img :data-src="getProfilePicture(order.customerId, order.profilePicture)" :alt="`${order.customerName}'s profile picture`"  v-show="order.profilePicture" v-lazy-load>

														</div>
														<div class="order-details-area">
															<div class="order-customer-details">
																<h4 class="customer-name">{{order.customerName}}</h4>
																<div class="order-timestamp">{{formatTimeData(order.orderTime)}}</div>
															</div>
															<div class="order-item-count">Order Id: {{order.orderId}}</div>
														</div>
													</div>
													<div class="item-card-footer">
														<n-link :to="`/b/orders/${order.orderId}`" class="btn btn-md btn-white">
															View products
														</n-link>
													</div>
												</div>
											</div>

										</div>
									</div>

									<div class="tab-content-area" id="clearedOrders">
										<div class="no-account-category" v-show="returnClearedOrders.length == 0">
											<!-- when no category has been added to the account -->
											<h2>You do not have any cleared order</h2>
										</div>
										<div class="row" v-show="returnClearedOrders.length > 0">

											<div class="col-xs-12 col-sm-12 col-md-6 col-lg-4" v-for="(order, index) in returnClearedOrders" :key="index">
												<div class="item-card">
													<div class="card-upper-layer">
														<div class="card-image">
															<div class="temporal-logo" v-show="!order.profilePicture">
																{{getNameLogo(order.customerName)}}
															</div>
															<img :data-src="getProfilePicture(order.customerId, order.profilePicture)" :alt="`${order.customerName}'s profile picture`"  v-show="order.profilePicture" v-lazy-load>

														</div>
														<div class="order-details-area">
															<div class="order-customer-details">
																<h4 class="customer-name">{{order.customerName}}</h4>
																<div class="order-timestamp">{{formatTimeData(order.orderTime)}}</div>
															</div>
															<div class="order-item-count">Order Id: {{order.orderId}}</div>
														</div>
													</div>
													<div class="item-card-footer">
														<n-link :to="`/b/orders/${order.orderId}`" class="btn btn-md btn-white">
															View products
														</n-link>
													</div>
												</div>
											</div>


										</div>
									</div>

								</div>
							</div>

						</div>


					</div>
					<BOTTOMNAV />
					<Nuxt />
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import TOPHEADER from '~/layouts/business/top-navigation.vue';
import SIDENAV from '~/layouts/business/side-bar.vue';
import BOTTOMNAV from '~/layouts/business/bottom-nav.vue';
import PAGELOADER from '~/components/loader/loader.vue';

import { GET_ORDER_LISTING_FROM_BUSINESS, SEARCH_ORDER_USING_ORDER_ID } from '~/graphql/order';

import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
	name: "ORDERSLISTING",
    components: {
        TOPHEADER, SIDENAV, BOTTOMNAV, PAGELOADER
	},
    data : function () {
        return {
			pageLoader: true,
			businessId: "",
			accessToken: "",
			newOrders: "",
			pendingOrders: "",
			clearedOrders: "",
			networkError: 0,
			errorReason: "",
			orderIdSearchString: "",

			initiateSearch: 0,
			noResultFound: 0,
			setTimeoutForOrderSearch: null,
			orderSearchResult: []
        }
	},
	computed: {
		returnNewOrders () {
			return this.newOrders == null ? [] : this.newOrders
		},
		returnPendingOrders () {
			return this.pendingOrders == null ? [] : this.pendingOrders
		},
		returnClearedOrders () {
			return this.clearedOrders == null ? [] : this.clearedOrders
		},
		returnSearchResult () {
			return this.orderSearchResult
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
		getAllOrders: async function () {

			let variables = {
				businessId: this.businessId
			}

            let context = {
                hasUpload: true,
                headers: {
                    'accessToken': this.accessToken
                }
			}
			
			let request = await this.$performGraphQlQuery(this.$apollo, GET_ORDER_LISTING_FROM_BUSINESS, variables, context);

			if (request.error) {
				this.networkError = 1
				this.errorReason = request.message
				return this.$initiateNotification('error', 'Failed request', 'A network error occurred');
			}

			let result = request.result.data.BusinessGetOrders;

			if (result.success == false) {
				this.networkError = 1
				this.errorReason = result.message
				return this.$initiateNotification('error', '', result.message);
			}

			let orders = result.orders
			this.newOrders = orders.newOrder
			this.pendingOrders = orders.pendingOrder
			this.clearedOrders = orders.clearedOrder

		},
		formatTimeData: function (time) {
			return this.$timeStampModifier(time)
		},
		getNameLogo: function (name) {
			if (process.browser) {
				return  this.$convertNameToLogo(name)
			}
		},
		getProfilePicture: function (id, path) {
			return this.$getCustomerProfilePictureUrl(id, path);
		},
        showSearchBar: function(){
            // show product search area
            let target = document.getElementById("productSearchArea");
            target.style.display = "flex";

            // focus form
            document.getElementById('productSearchInput').focus()
		},
        hideSearchBar: function () {
            // show product search area
            let target = document.getElementById("productSearchArea");
            target.style.display = "none";

            // focus form
            document.getElementById('productSearchInput').blur() ;
            this.orderIdSearchString = ""
		},
        clearTimeOut: function (timerOut) {
            clearTimeout(timerOut)
        },
        searchOrderInShop: async function () {

            if (this.orderIdSearchString.length <= 1) return

            // when start search
            this.initiateSearch = 0;

            // reset no result found;
            this.noResultFound = 0

            // clear previous time out
            this.clearTimeOut(this.setTimeoutForOrderSearch)

            this.setTimeoutForOrderSearch = setTimeout( async() => {

                let variables = {
                    businessId: this.businessId,
                    orderId: this.orderIdSearchString.toUpperCase()
                }

                let context = {
                    headers: {
                        'accessToken': this.accessToken
                    }
                }

                let query = await this.$performGraphQlQuery(this.$apollo, SEARCH_ORDER_USING_ORDER_ID, variables, context);
        
                // when search ends
                this.initiateSearch = 1
                this.orderSearchResult = []

                if (query.error == true) {
                    this.$initiateNotification('error', 'Failed request', query.message);
                    return
                }

                let result = query.result.data.SearchForOrder;

                if (result.success == false) {
                    this.$initiateNotification("error", "Failed request", result.message)
                    return
                }

                if (result.orders.length == 0) {
                    this.noResultFound = 1
                    return
				}

                this.orderSearchResult = result.orders

            }, 2000)

        }
	},
    watch: {
        orderIdSearchString: function () {
            if (this.orderIdSearchString.length == 0) return
            this.searchOrderInShop()
        }
    },
    async created () {
        if (process.client) {
            this.allCategories = "";
			this.GetBusinessDataFromStore()
			await this.getAllOrders()
        }
    },
    mounted() {
		this.pageLoader = false
	},
    destroyed () {
        clearTimeout(this.setTimeoutForOrderSearch);
    }
}
</script>
<style scoped>
.add-radius {
    border-radius: 4px !important;
}
.product-search-loader {
    height: 50px;
    width: 100%;
}
.product-search-loader .show-loader {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.show-loader .loader-action {
    display: block;
    background-color: #fff;
}
.loader-action .loader {
    border: 2px solid rgba(0,0,0,.5);
    width: 30px;
    height: 30px;
    border-top: 2px solid transparent;
}
.hide-for-mobile {
    display: none;
}
@media (min-width: 959px) {
    .hide-for-mobile {
        display: flex;
    }
}
.page-header.with-action h4 {
    margin-bottom: unset;
    align-self: center;
}
.page-header {
    margin-bottom: 32px !important;
}
.small-chip {
    padding: 7px 14px;
    font-size: 12px;
    background-color: white;
    position: absolute;
    right: 0;
    top: 8px;
}
.product-card-image {
    position: relative;
}
</style>