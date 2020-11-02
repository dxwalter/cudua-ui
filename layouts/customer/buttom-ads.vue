<template>
        <!-- advert area -->
      <div class="bottom-ads-container white-bg-color" v-show="!isBusinessOwner">
        <h1 class="">Join 700+ businesses that sell through Cudua.</h1>
        <!-- <h1 class="">Join other <span class="test">fashion</span> and <span class="test">beauty</span> business owners to sell online.</h1> -->
        <div class="regular-text mg-bottom-32">Create an online shop and start selling in two minutes.</div>
        <n-link to="/auth/create-store" class="btn btn-primary btn-lg">Create your shop</n-link>
      </div>
      <!-- end of advert area -->
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'BOTTOMADSCOMPONENT',
  components: {

  },
  data () {
    return {
      isBusinessOwner: false,
    }
  },
  methods: {
		...mapGetters({
			'GetLoginStatus': 'customer/GetLoginStatus',
			'GetBusinessStatus': 'business/GetBusinessStatus',
			'GetBusinessDetails': 'business/GetBusinessDetails'
		}),
		LoginStatus () {
			this.isLoggedIn = this.GetLoginStatus();
			this.isBusinessOwner = this.GetBusinessStatus();
		},
  },
  created () {
    if(process.browser) {
      this.LoginStatus()
    }
  }
}
</script>

<style scoped>
  .test {
    color: #ee6425;
  }
</style>