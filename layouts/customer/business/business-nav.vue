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
						<input type="text" name="" id="businessDesktopSearch" class="desktop-search" :placeholder="`Search for products in ${businessName}`">
						<!-- remove display-none to see search suggestions -->
						<div class="recent-search-list-container display-none">
							<a href="#">Infinix hot 7 <span>- 57 results</span></a>
							<a href="#">Infinix hot 7 <span>- 57 results</span></a>
							<a href="#">Infinix hot 7 <span>- 57 results</span></a>
							<a href="#">Infinix hot 7 <span>- 57 results</span></a>
							<a href="#">Infinix hot 7 <span>- 57 results</span></a>
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
						<div class="notif-point">10</div>
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
		</div>
</template>

<script>

import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
	name: "BUSINESSNAVIGATION",
	data() {
		return {
			businessId: "",
			businessName: "",
			logo: "",
			isLoggedIn: false,
			isBusinessOwner: false,
		}
	},
	methods: {
		...mapGetters({
			'GetLoginStatus': 'customer/GetLoginStatus',
			'GetAnonymousId': 'customer/GetAnonymousId',
			'GetBusinessStatus': 'business/GetBusinessStatus',
			'GetBusinessDetails': 'business/GetBusinessDetails',
		}),
		statusChecker () {
			this.isLoggedIn = this.GetLoginStatus()
			this.isBusinessOwner = this.GetBusinessStatus().length > 0 ? true :  false
		},
		getNameLogo: function (businessName) {
			if (process.browser) {
				let name =  this.$convertNameToLogo(businessName)
				return name
			}
		},
	},
	created() {
		if (process.browser) {
			this.statusChecker()
			this.$nuxt.$on('searchData', (data) => {
				this.businessName = data.name
				this.businessId = data.id
				this.logo = data.logo
			})
		}
	}
}
</script>

<style>

</style>