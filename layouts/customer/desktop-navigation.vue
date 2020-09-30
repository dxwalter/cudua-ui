<template>
      
    <div class="desktop-nav-container card">


      
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