<template>
        <!-- beginning of mobile top nav with search box -->
        <div class="mobile-nav-container card">
          <div class="mobile-nav-links">
            <div class="mobile-toggle-area">
              <button class="nav-toggle-btn hamburger hamburger--spring" id="navToggleButton" data-toggle-status="0" v-on:click="toggleCustomerNavBar($event)">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
              </button>

              <n-link to="/" class="btn btn-icon btn-small">
                <svg xmlns="http://www.w3.org/2000/svg" width="24.706" height="21" viewBox="0 0 24.706 21">
                  <use xlink:href="~/assets/customer/image/all-svg.svg#homeIcon"></use>
                </svg>
              </n-link>
            </div>

            <div class="mobile-nav-actions">
              <n-link to="/auth/create-store" class="btn btn-primary btn-md" v-show="!isLoggedIn || !isBusinessOwner">Create shop</n-link>
              <n-link to="/b" class="btn btn-white btn-md" v-show="isLoggedIn && isBusinessOwner">Manage Shop</n-link>

              <n-link to="/c/cart" class="btn btn-white btn-small btn-icon">
                <div class="notif-point">10</div>
                <svg xmlns="http://www.w3.org/2000/svg">
                  <use xlink:href="~/assets/customer/image/all-svg.svg#order"></use>
                </svg>
              </n-link>
              
            </div>
          </div>

          <div class="mobile-nav-search">
            <input type="text" name="" id="mobilePrimarySearchInput" class="search-form grey-bg-color" placeholder="Search for a product or business" autocomplete="off">
          </div>

        </div>
        <!-- end of mobile top nav with search box -->
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
	name: 'MOBILESEARCHCOMPONENT',
	data: function() {
		return {
			isLoggedIn: false,
			isBusinessOwner: false
		}
	},
    created() {
        if (process.client) {
            window.addEventListener('resize', this.handleResize);
        }
    },

    computed: {
      handleResize() {
              this.screenWidth = window.innerWidth;
      }
    },
    methods: {
      ...mapGetters({
        'GetAnonymousId': 'customer/GetAnonymousId',
        'GetLoginStatus': 'customer/GetLoginStatus',
        'GetBusinessStatus': 'business/GetBusinessStatus'
      }),
      toggleCustomerNavBar: function (e) {
          e.preventDefault();
          let navToggle = document.getElementById('navToggleButton');
          navToggle.classList.toggle('is-active');

          let sideNav = document.getElementById('mobileSideNav');
          let sideNavContent = document.getElementById("mobileSideNavContent");

          let toggleStatus = navToggle.getAttribute('data-toggle-status');

          this.screenWidth <= 1023 ? this.$showCustomerMobileNav(sideNav, sideNavContent, toggleStatus) : sideNav.classList.toggle('js-fold-nav');
          
          navToggle.getAttribute('data-toggle-status') == "1" ? navToggle.setAttribute('data-toggle-status', '0') : navToggle.setAttribute('data-toggle-status', '1');
      },
      statusChecker () {
        this.isLoggedIn = this.GetLoginStatus()
        this.isBusinessOwner = this.GetBusinessStatus().length > 0 ? true :  false
      }
    },
    mounted () {
      this.statusChecker()
    }
}
</script>

<style>

</style>