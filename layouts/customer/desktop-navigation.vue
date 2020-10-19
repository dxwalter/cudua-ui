<template>
    
    <!-- beginning of desktop nav -->
    <div class="desktop-nav-container card">

      <n-link to="/" class="desktop-logo">
        <img data-src="~/assets/global-asset/image/cudua-logo-full.png" alt="" v-lazy-load>
      </n-link>

      <div class="desktop-search-container">
        <div class="position-relative">
          <input type="text" name="" id="customerDesktopSearch" class="desktop-search" placeholder="Search for a product or business" v-model="desktopSearchKeyword">
						<div class="recent-search-list-container" v-show="!resultCount && searchIndex == -1">
							
							<a href="#" v-show="!doneSearching && desktopSearchKeyword.length >= 2">

								<div class="info-area">
									<span>Searching for</span> {{desktopSearchKeyword}}
								</div>

								<div class="loader-container">
									<div class="loader-action"><span class="loader"></span></div>
								</div>

							</a>

							<a href="#" v-show="doneSearching &&  noProduct && desktopSearchKeyword.length >= 2">
								<div class="info-area">
									<span>No result was found for</span> {{desktopSearchKeyword}}
								</div>
							</a>

						</div>

            <div class="recent-search-list-container" v-show="desktopSearchKeyword.length > 1 && doneSearching && searchIndex == -1">
              <n-link :to="`/search?q=${desktopSearchKeyword}`">{{desktopSearchKeyword}} 
                <span v-show="resultCount == 0" class="large-span">- No result was found</span>
                <span v-show="resultCount == 1" class="large-span">- 1 result was found</span>
                <span v-show="resultCount > 1" class="large-span">- {{formatNumber(resultCount)}} results were found</span>
              </n-link>
            </div>


        </div>
        <button class="btn btn-primary btn-search" @click="redirectToSearchPage()">Search</button>
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
          <div class="notif-point" v-show="unreadNotificationCount > 0">{{unreadNotificationCount}}</div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
            <use xlink:href="~/assets/customer/image/all-svg.svg#globe"></use>
          </svg>
        </n-link>

          <div class="dropdown-container">

            <button class="desktop-menu-item search-filter-action" v-show="isLoggedIn">
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

              <!-- logged in user  -->
            <div class="navigation-dropdown" id="navigationDropdown" v-show="isLoggedIn">

              <n-link :to="`/${username}`" class="mobile-side-nav-link" v-show="isLoggedIn && isBusinessOwner">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 21">
                    <use xlink:href="~/assets/customer/image/all-svg.svg#visitShop"></use>
                  </svg>
                  <span>My shop</span>
              </n-link>
              <n-link to="/c/orders" class="mobile-side-nav-link">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.74 16.378">
                    <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                  </svg>
                  <span>My orders</span>
              </n-link>
              <n-link to="/c/following" class="mobile-side-nav-link">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <use xlink:href="~/assets/customer/image/all-svg.svg#followers"></use>
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

          <n-link to="/auth/create-store" class="btn create-shop-btn" v-show="!isLoggedIn || !isBusinessOwner">Create shop</n-link>
          <n-link to="/b" class="btn create-shop-btn"  v-show="isLoggedIn && isBusinessOwner">Manage Shop</n-link>

      </div>
      <NOTIFICATION></NOTIFICATION>
    </div>
    <!-- end of desktop nav -->
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import NOTIFICATION from '~/components/notification/notification.vue'; 

import { GET_CUSTOMER_UNREAD_NOTIFICATION_COUNT } from '~/graphql/customer';
import { REGULAR_SEARCH_COUNT } from '~/graphql/search';

export default {
  name: 'DESKTOPNAVGATIONCOMPONENT',
  components: {
    NOTIFICATION
  },
  props: {
    cartTrigger: {
      type: Number,
      default: 0
    }
  },
	data: function () {
		return {
      isLoggedIn: false,
      isBusinessOwner: false,
      username: "",
      numberOfItemsInCart: 0,
      accessToken: "",
      unreadNotificationCount: 0,
      desktopSearchKeyword: "",
      pagePath: "",


			isSearchReady: 0,
			isLoading: 0,
			noProduct: 0,
			reasonForError: '',
      resultCount: 0,
      doneSearching: 0,
      searchIndex: 0,
      timeoutHandler: null,
		}
	},
  computed: {

  },
  created () {
    if (process.client) {
        this.statusChecker()
        this.pagePath = this.$route.path
        this.getCustomerNotificationCount()


        let queryString = this.$route.query.q
        if (queryString != undefined && queryString.length > 0) {
          this.desktopSearchKeyword = queryString
        }
    }
  },
  methods: {
    formatNumber: function(number) {
      return this.$numberNotation(number)
    },
    redirectToSearchPage: function () {
      if (this.desktopSearchKeyword.length == 0) {
           return this.$router.push(`/search?q=big`)
      } else {
          return this.$router.push(`/search?q=${this.desktopSearchKeyword}`)
      }
    },
    ...mapGetters({
      'GetLoginStatus': 'customer/GetLoginStatus',
      'GetAnonymousId': 'customer/GetAnonymousId',
			'GetBusinessStatus': 'business/GetBusinessStatus',
      'GetBusinessDetails': 'business/GetBusinessDetails',
      "GetCartItems": "cart/GetCartItems",
      'GetCustomerData': 'customer/GetCustomerDetails',
		}),
		statusChecker () {
      this.isLoggedIn = this.GetLoginStatus()
      
      let customerData = this.GetCustomerData();
      this.accessToken = customerData.userToken

      this.isBusinessOwner = this.GetBusinessStatus().length > 0 ? true :  false
      this.username = this.GetBusinessDetails().username,
      this.numberOfItemsInCart = this.GetCartItems()
    },
    getCustomerNotificationCount: async function () { 
        let context = {
            headers: {
                'accessToken': this.accessToken
            }
        }

        let request = await this.$performGraphQlQuery(this.$apollo, GET_CUSTOMER_UNREAD_NOTIFICATION_COUNT, {}, context);

        if (request.error) return

        let result = request.result.data.GetCustomerNotificationCount;

        if (!result.success) return

        this.$store.dispatch('customer/setNotificationCount', result.count);

        this.unreadNotificationCount = result.count
    },
    clearTimeOut: function (timerOut) {
        clearTimeout(timerOut)
    },
    runSearchCount: async function () {


      if (this.desktopSearchKeyword.length < 2) {
        return
      }

      let variables = {
        queryString: this.desktopSearchKeyword
      }

      let request = await this.$performGraphQlQuery(this.$apollo, REGULAR_SEARCH_COUNT, variables, {});

      if (request.error) {
        return this.$initiateNotification('error', 'Failed request', request.message);
      }

      let result = request.result.data.RegularSearchResultCount;

      if (result.success == false) {
        return this.$initiateNotification('error', 'Oops!', result.message);
      }

      this.resultCount = result.products + result.businesses
    }
  },
  watch: {
    cartTrigger: function () {
      this.numberOfItemsInCart = this.GetCartItems()
    },
    desktopSearchKeyword: async function () {


      // check if this search is happening in search page or another page
      this.searchIndex = this.pagePath.search('search');
      
      if (this.searchIndex == -1) {
        // run suggestion search

        if (this.desktopSearchKeyword.length < 2) {
          return
        }

        this.resultCount = 0;
        this.isLoading = 1
        this.doneSearching = 0

              // clear previous time out
        this.clearTimeOut(this.timeoutHandler)

        this.timeoutHandler = setTimeout( async() => {
          this.page = 1
          await this.runSearchCount()
          this.doneSearching = 1
          this.isLoading = 0

        }, 1000)

      } else {
        // pass down search keyword to parent component
        this.$emit('retrieveSearchKeyword', this.desktopSearchKeyword)
      }

    }
  },
  mounted () {
    
  },
  beforeDestroy () {
		clearTimeout(this.timeoutHandler);
	}
}
</script>

<style>

</style>