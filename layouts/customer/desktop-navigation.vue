<template>
      
    <div class="desktop-nav-container card">
      <n-link to="/" class="desktop-logo">
        <img data-src="~/assets/customer/image/cudua-logo-full.svg" alt="" v-lazy-load>
      </n-link>

      <div class="desktop-search-container">
        <div class="position-relative">
          <input type="text" name="" id="customerDesktopSearch" class="desktop-search" placeholder="Search for a product or business">
          <div class="recent-search-list-container display-none">
            <n-link to="#">Infinix hot 7 <span>- 57 results</span></n-link>
            <n-link to="#">Infinix hot 7 <span>- 57 results</span></n-link>
            <n-link to="#">Infinix hot 7 <span>- 57 results</span></n-link>
            <n-link to="#">Infinix hot 7 <span>- 57 results</span></n-link>
            <n-link to="#">Infinix hot 7 <span>- 57 results</span></n-link>
          </div>
        </div>
        <button class="btn btn-primary btn-search">Search</button>
      </div>
      
    </div>
    
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import NOTIFICATION from '~/components/notification/notification.vue'; 
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
      numberOfItemsInCart: 0
		}
	},
  computed: {

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
      this.username = this.GetBusinessDetails().username,
      this.numberOfItemsInCart = this.GetCartItems().length
		}
  },
  watch: {
    cartTrigger: function () {
      this.numberOfItemsInCart = this.GetCartItems().length
    }
  },
  mounted () {
    this.statusChecker()
  }
}
</script>

<style>

</style>