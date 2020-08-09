<template>
	<div class="body-container">
		<TOPHEADER />
		<nuxt/>
		<div class="content-container">
			<SIDENAV />
			<nuxt />
			<div class="content-area grey-bg-color">
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
										<a href="/b/orders/details/43453453453" class="btn btn-md btn-white">More details</a>
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
								<div class="notif-point">10</div>
							</div>
							<div class="chip-tab-item" id="tabLink" data-tab="pendingOrders">Pending deliveries
								<div class="notif-point">10</div>
							</div>
							<div class="chip-tab-item" id="tabLink" data-tab="clearedOrders">Cleared orders
								<div class="notif-point">10</div>
							</div>
						</div>

						<div class="chip-tab-content">
							<div class="tab-content width-100" id="tabContent">

								<div class="tab-content-area is-active" id="newOrders">
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
													<a href="/b/orders/details/43453453453" class="btn btn-md btn-white">
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
													<a href="/b/orders/details/43453453453" class="btn btn-md btn-white">
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
														<div class="order-item-count">35 items</div>
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
													<a href="cleared-order.html" class="btn btn-md btn-white">
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

							</div>
						</div>

					</div>


				</div>
				<BOTTOMNAV />
				<nuxt/>
			</div>
		</div>
	</div>
</template>

<script>

import TOPHEADER from '~/layouts/business/top-navigation.vue';
import SIDENAV from '~/layouts/business/side-bar.vue';
import BOTTOMNAV from '~/layouts/business/bottom-nav.vue';
export default {
    components: {
        TOPHEADER, SIDENAV, BOTTOMNAV
    }
}
</script>

