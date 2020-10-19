<template>
  		<div class="desktop-business-nav">
			<!-- business navigation -->
			<div class="desktop-nav-container card">
				<div class="business-intro">
					<a href="#" class="business-desktop-logo" data-target="businessDetailsModal" data-trigger="modal">
						<div class="temporal-logo" v-show="!logo">
							{{getNameLogo(businessName)}}
						</div>
						<img :data-src="logo" :alt="`${businessName}'s logo`"  v-show="logo" v-lazy-load>
					</a>
				</div>

				<div class="desktop-search-container">
					<div class="position-relative">
						<input type="text" name="businessProductSearchDesktop" id="businessDesktopSearch" class="desktop-search" :placeholder="`Search for products in ${businessName}`" v-model="searchKeyword">
						<!-- remove display-none to see search suggestions -->
						<div class="recent-search-list-container" v-show="!resultCount">
							
							<a href="#" v-show="!doneSearching && searchKeyword.length >= 2">

								<div class="info-area">
									<span>Searching for</span> {{searchKeyword}}
								</div>

								<div class="loader-container">
									<div class="loader-action"><span class="loader"></span></div>
								</div>

							</a>

							<a href="#" v-show="doneSearching &&  noProduct && searchKeyword.length >= 2">
								<div class="info-area">
									<span>No result was found for</span> {{searchKeyword}}
								</div>
							</a>

						</div>

						<!-- when result is found -->
						<div class="recent-search-list-container add-max-height" v-show="resultCount > 0 && searchKeyword.length > 0">
							<n-link :to="`/p/${x.productId}`" v-for="(x, index) in returnProductList" :key="index">
								<div class="search-product-details">
									<div class="product-image-area">
										<img :data-src="x.image"  :alt="`${x.productName}'s image`" v-lazy-load>
									</div>
									<div class="product-details">
										<div class="product-name">{{x.productName}}</div>
										<div class="product-price">₦ {{x.price}}</div>
									</div>
								</div>
							</n-link>
						</div>

					</div>
					<button class="btn btn-primary btn-search">Search</button>
				</div>

				<div class="desktop-nav-link">

					<n-link to="/" class="desktop-menu-item">
						<svg xmlns="http://www.w3.org/2000/svg" width="24.706" height="21" viewBox="0 0 24.706 21">
							<use xlink:href="~/assets/customer/image/all-svg.svg#homeIcon"></use>
						</svg>
					</n-link>

					<n-link to="/c/cart" class="desktop-menu-item">
						<div class="notif-point" v-show="numberOfItemsInCart">{{numberOfItemsInCart}}</div>
						<svg xmlns="http://www.w3.org/2000/svg">
						<use xlink:href="~/assets/customer/image/all-svg.svg#order"></use>
						</svg>
					</n-link>

					<n-link to="/c/notification" class="desktop-menu-item" v-show="isLoggedIn">
						<div class="notif-point">10</div>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
						<use xlink:href="~/assets/customer/image/all-svg.svg#globe"></use>
						</svg>
					</n-link>

					<n-link to="/search" class="desktop-menu-item">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<use xlink:href="~/assets/customer/image/all-svg.svg#searchIcon"></use>
						</svg>
					</n-link>

					<div class="dropdown-container">

						<button class="desktop-menu-item search-filter-action"  v-show="isLoggedIn">
							<input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="navigationDropdown">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
								<use xlink:href="~/assets/customer/image/all-svg.svg#caretDown"></use>
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" class="last-svg">
								<use xlink:href="~/assets/customer/image/all-svg.svg#times"></use>
							</svg>
						</button>


						<button class="desktop-menu-item search-filter-action" v-show="!isLoggedIn">
							<input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="anonymousNavigationDropdown">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
							<use xlink:href="~/assets/customer/image/all-svg.svg#person"></use>
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" class="last-svg">
							<use xlink:href="~/assets/customer/image/all-svg.svg#times"></use>
							</svg>
						</button>

						<!-- logged in user -->
						<div class="navigation-dropdown" id="navigationDropdown" v-show="isLoggedIn">
							<n-link to="/b" class="mobile-side-nav-link" v-show="isLoggedIn && isBusinessOwner">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 21">
								  <use xlink:href="~/assets/customer/image/all-svg.svg#visitShop"></use>
								</svg>
								<span>Manage shop</span>
							</n-link>
							
							<n-link to="/c/orders" class="mobile-side-nav-link">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.74 16.378">
								  <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
								</svg>
								<span>My orders</span>
							</n-link>
			
							<n-link to="/c/following" class="mobile-side-nav-link">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
								  <use xlink:href="~/assets/customer/image/all-svg.svg#bookmark"></use>
								</svg>
								<span>Following</span>
							</n-link>
							<n-link to="/c/saved-items" class="mobile-side-nav-link">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.349 15">
								  <use xlink:href="~/assets/customer/image/all-svg.svg#heart"></use>
								</svg>
								<span>Saved for later</span>
							</n-link>

							<n-link to="/c/profile" class="mobile-side-nav-link">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
								  <use xlink:href="~/assets/customer/image/all-svg.svg#person"></use>
								</svg>
								<span>My profile</span>
							</n-link>
							<n-link to="/c/profile/edit" class="mobile-side-nav-link">
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18.505" viewBox="0 0 18 18.505">
								  <use xlink:href="~/assets/customer/image/all-svg.svg#profile"></use>
								</svg>
								<span>Account setting</span>
							</n-link>
              
							<n-link to="/c/logout" class="mobile-side-nav-link">
								<svg xmlns="http://www.w3.org/2000/svg">
								  <use xlink:href="~/assets/customer/image/all-svg.svg#logout"></use>
								</svg>
								<span>Logout</span>
							</n-link>
			
						</div>

						<!-- logged out in user -->
						<div class="navigation-dropdown" id="anonymousNavigationDropdown" v-show="!isLoggedIn">
							<n-link to="/auth/" class="mobile-side-nav-link btn btn-white btn-svg">Sign In</n-link>
							<n-link to="/auth/sign-up" class="mobile-side-nav-link btn btn-white btn-svg">Sign Up</n-link>
						</div>
					  </div>

				</div>

			</div>
			<!-- end of desktop nav -->
			<NOTIFICATION></NOTIFICATION>
		</div>
</template>

<script>

import { mapActions, mapGetters, mapMutations } from 'vuex';
import NOTIFICATION from '~/components/notification/notification.vue'; 

import { 
	CUSTOMER_SEARCH_PRODUCT_IN_BUSINESS
} from '~/graphql/product'


export default {
	name: "BUSINESSNAVIGATION",
	components: {
		NOTIFICATION
	},
	data() {
		return {
			businessId: "",
			businessName: "",
			logo: "",
			isLoggedIn: false,
			isBusinessOwner: false,

			numberOfItemsInCart: 0,

			isSearchReady: 0,
			isLoading: 0,
			noProduct: 0,
			productList: [],
			reasonForError: '',
			resultCount: 0,
			page: 1,

			doneSearching: 0,

			searchKeyword: "",

			timeoutHandler: null,
			calculatedLoad: 0
		}
	},
	props: {
		cartTrigger: {
		type: Number,
		default: 0
		}
	},
	computed:{
		returnProductList () {
			return this.productList
		}
	},
	methods: {
		...mapGetters({
			'GetLoginStatus': 'customer/GetLoginStatus',
			'GetAnonymousId': 'customer/GetAnonymousId',
			'GetBusinessStatus': 'business/GetBusinessStatus',
			'GetBusinessDetails': 'business/GetBusinessDetails',
			"GetCartItems": "cart/GetCartItems"
		}),
		statusChecker () {
			this.isLoggedIn = this.GetLoginStatus()
			this.isBusinessOwner = this.GetBusinessStatus().length > 0 ? true :  false
			this.numberOfItemsInCart = this.GetCartItems()
		},
		getNameLogo: function (businessName) {
			if (process.browser) {
				let name =  this.$convertNameToLogo(businessName)
				return name
			}
		},
		searchForProduct: async function (page) {
			
			let variables = {
				businessId: this.businessId,
				keyword: this.searchKeyword.trim(),
				page: page
			}

			let query = await this.$performGraphQlQuery(this.$apollo, CUSTOMER_SEARCH_PRODUCT_IN_BUSINESS, variables, {});


			if (query.error) {
				this.$initiateNotification('error', 'Failed request', query.message);
				this.searchKeyword = ""
				return
			}

			let result = query.result.data.BusinessSearchProductByCustomer;

			if (result.success == false) {
				this.$initiateNotification('error', 'Failed request', result.message);
				this.noProduct = 0
				this.searchKeyword = ""
				return
			}

			if (result.resultCount == 0) {
				this.productList = []
				this.noProduct = 1
				this.resultCount = result.resultCount
			} else {
				this.noProduct = 0
			}

			if (result.resultCount > 0) {
				this.resultCount = result.resultCount

				for (let y of result.products) {
					this.productList.push({
						productName: y.name,
						productId: y.id,
						price: this.$numberNotation(y.price),
						image: this.$formatProductImageUrl(this.businessId, y.primaryImage, "thumbnail"),
					})
				}
			}


		},
        clearTimeOut: function (timerOut) {
            clearTimeout(timerOut)
        },
	},
	watch: {
		cartTrigger: function () {
			this.numberOfItemsInCart = this.GetCartItems()
		},
		searchKeyword: async function () {
			if (this.searchKeyword.length <= 1) {
				return
			}

			this.resultCount = 0;
			this.isLoading = 1
			this.doneSearching = 0

			this.productList = []

            // clear previous time out
            this.clearTimeOut(this.timeoutHandler)

            this.timeoutHandler = setTimeout( async() => {
				this.page = 1
				await this.searchForProduct(this.page)
				this.doneSearching = 1
				this.isLoading = 0

			}, 1000)
		}
	},
	created() {
		if (process.browser) {
			this.statusChecker()

			this.$nuxt.$on('searchData', (data) => {
				this.businessName = data.name
				this.businessId = data.businessId
				this.logo = data.logo
			})
		}
	},
	beforeDestroy () {
		clearTimeout(this.timeoutHandler);
	}
}
</script>

<style scoped>
	.add-max-height {
		max-height: 400px;
		overflow-y: scroll;
	}
</style>