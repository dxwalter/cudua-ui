<template>
	<div class="business">
		<div class="body-container">
			<TOPHEADER></TOPHEADER>
			<div class="content-container">
				<SIDENAV></SIDENAV>
				<div class="content-area grey-bg-color">
					<!-- pageLoader -->
					<PAGELOADER v-show="pageLoader"></PAGELOADER>
					<!-- content goes in here -->
					<div class="main-content">

						<div class="page-header with-action">
							<h4>Order listing</h4>

							<div class="search-area">
								<form action="">
									<input type="text" name="" id="" class="search-form white-bg-color" placeholder="Search for orders using ORDER ID">
								</form>
							</div>
						</div>

						<!-- search area -->

						<div class="accordion white-bg-color border-radius-4 search-result-container">
							<div class="search-result-header">
								<div class="search-result-keyword">
									<span>Search result for </span>
									<span>- 345567</span>
								</div>
								<button class="close-modal-btn">
									<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
										<use xlink:href="~/assets/business/image/all-svg.svg#times"></use>
									</svg>
								</button>
							</div>

							<div class="row">
										
								<div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
									<div class="item-card">
										<div class="card-upper-layer">
											<div class="card-image"><img src="~/assets/business/image/daniel-chigisoft.jpg" alt=""></div>
											<div class="order-details-area">
												<div class="order-customer-details">
													<h4 class="customer-name">Daniel Walter</h4>
													<div class="order-timestamp">20 mins ago</div>
												</div>
												<div class="order-item-count">35 items</div>
												<div class="order-item-count">Order Id: 303454</div>
											</div>
										</div>
										<div class="item-card-footer">
											<a href="/b/orders/43453453453" class="btn btn-md btn-white">More details</a>
										</div>
									</div>
								</div>

								<div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
									<div class="item-card">
										<div class="card-upper-layer">
											<div class="card-image"><img src="~/assets/business/image/daniel-chigisoft.jpg" alt=""></div>
											<div class="order-details-area">
												<div class="order-customer-details">
													<h4 class="customer-name">Daniel Walter</h4>
													<div class="order-timestamp">20 mins ago</div>
												</div>
												<div class="order-item-count">35 items</div>
												<div class="order-item-count">Order Id: 303454</div>
											</div>
										</div>
										<div class="item-card-footer">
											<a href="#" class="btn btn-md btn-white">
												More details
											</a>
										</div>
									</div>
								</div>
										
								<div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
									<div class="item-card">
										<div class="card-upper-layer">
											<div class="card-image"><img src="~/assets/business/image/daniel-chigisoft.jpg" alt=""></div>
											<div class="order-details-area">
												<div class="order-customer-details">
													<h4 class="customer-name">Daniel Walter</h4>
													<div class="order-timestamp">20 mins ago</div>
												</div>
												<div class="order-item-count">35 items</div>
												<div class="order-item-count">Order Id: 303454</div>
											</div>
										</div>
										<div class="item-card-footer">
											<a href="#" class="btn btn-md btn-white">
												More details
											</a>
										</div>
									</div>
								</div>

								<div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
									<div class="item-card">
										<div class="card-upper-layer">
											<div class="card-image"><img src="~/assets/business/image/daniel-chigisoft.jpg" alt=""></div>
											<div class="order-details-area">
												<div class="order-customer-details">
													<h4 class="customer-name">Daniel Walter</h4>
													<div class="order-timestamp">20 mins ago</div>
												</div>
												<div class="order-item-count">35 items</div>
												<div class="order-item-count">Order Id: 303454</div>
											</div>
										</div>
										<div class="item-card-footer">
											<a href="#" class="btn btn-md btn-white">
												More details
											</a>
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
										<div class="row">
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
														<n-link :to="`/b/orders/${order.orderId}?ctr=${order.customerId}`" class="btn btn-md btn-white">
															View products
														</n-link>
													</div>
												</div>
											</div>

										</div>
									</div>

									<div class="tab-content-area" id="pendingOrders">
										<div class="row">
											<div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
												<div class="item-card">
													<div class="card-upper-layer">
														<div class="card-image"><img src="~/assets/business/image/daniel-chigisoft.jpg" alt=""></div>
														<div class="order-details-area">
															<div class="order-customer-details">
																<h4 class="customer-name">Daniel Walter</h4>
																<div class="order-timestamp">20 mins ago</div>
															</div>

															<div class="order-item-count">Order Id: 303454</div>
														</div>
													</div>
													<div class="item-card-footer">
														<a href="cleared-order.html" class="btn btn-md btn-white">
															More details
														</a>
													</div>
												</div>
											</div>

										</div>
									</div>

									<div class="tab-content-area" id="clearedOrders">
										<div class="row">

											<div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
												<div class="item-card">
													<div class="card-upper-layer">
														<div class="card-image"><img src="~/assets/business/image/daniel-chigisoft.jpg" alt=""></div>
														<div class="order-details-area">
															<div class="order-customer-details">
																<h4 class="customer-name">Daniel Walter</h4>
																<div class="order-timestamp">20 mins ago</div>
															</div>

															<div class="order-item-count">Order Id: 303454</div>
														</div>
													</div>
													<div class="item-card-footer">
														<a href="#" class="btn btn-md btn-white">
															More details
														</a>
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
					<nuxt/>
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

import { GET_ORDER_LISTING_FROM_BUSINESS } from '~/graphql/order';

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
			errorReason: ""
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
			this.pendingOrders = orders.pendingOrders
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
    }
}
</script>