<template>
        <!-- beginning of mobile top nav with search box -->
        <div class="mobile-nav-container card">
          <div class="mobile-nav-links">
            <div class="mobile-toggle-area">
              
              <button class="nav-toggle-btn hamburger hamburger--spring" id="navToggleButton" data-toggle-status="0" v-on:click="toggleCustomerNavBar($event)">
                <div class="notif-point md-display-none" v-show="unreadNotificationCount > 0">{{unreadNotificationCount}}</div>
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
                <div class="notif-point" v-show="numberOfItemsInCart" id="mobileCartIcon">{{numberOfItemsInCart}}</div>
                <svg xmlns="http://www.w3.org/2000/svg">
                  <use xlink:href="~/assets/customer/image/all-svg.svg#order"></use>
                </svg>
              </n-link>
              
            </div>
          </div>

          <div class="mobile-nav-search">
            <form>
              <input type="search" id="mobilePrimarySearchInput" class="search-form grey-bg-color" placeholder="Search for a product or business" autocomplete="anyrandomstring!`">
            </form>
          </div>
          <NOTIFICATION></NOTIFICATION>
          <Nuxt />
        </div>
        <!-- end of mobile top nav with search box -->
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import NOTIFICATION from '~/components/notification/notification.vue'; 
export default {
  name: 'MOBILESEARCHCOMPONENT',
  components: {
    NOTIFICATION
  },
	data: function() {
		return {
			isLoggedIn: false,
      isBusinessOwner: false,
      numberOfItemsInCart: 0,
      unreadNotificationCount: 0
		}
  },
  props: {
    cartTrigger: {
      type: Number,
      default: 0
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
        'GetBusinessStatus': 'business/GetBusinessStatus',
        "GetCartItems": "cart/GetCartItems",
        'GetCustomerData': 'customer/GetCustomerDetails',
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
        this.isLoggedIn = this.GetLoginStatus();
        let customerData = this.GetCustomerData();
        this.numberOfItemsInCart = this.GetCartItems();
        this.isBusinessOwner = this.GetBusinessStatus().length > 0 ? true :  false
        this.unreadNotificationCount = customerData.newNotificationCount
      }
    },
    watch: {
      cartTrigger: function () {
        this.numberOfItemsInCart = this.GetCartItems()
      }
    },
    mounted () {
      this.statusChecker()
    }
}
</script>

<style>

</style>