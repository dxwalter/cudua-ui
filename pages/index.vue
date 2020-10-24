<template>
  <div class="customer">
	<div class="body-container grey-bg-color">

	  <!-- beginning of navigation container -->
	  <div class="nav-container">

		<MOBILENAVIGATION></MOBILENAVIGATION>
		<Nuxt />
		<MOBILESEARCH></MOBILESEARCH>
		<Nuxt />
		<DESKTOPNAVGATION></DESKTOPNAVGATION>
		<Nuxt />
		
	  </div>
	  <!-- end of navigation container -->
  

	<!-- beginning of content container -->
	
	  <!-- big search area -->
	  <ADVANCEDSEARCH></ADVANCEDSEARCH>
	  <Nuxt />
	  <div class="content-container">
		  
			<FOLLOWING />
			<Nuxt />

			<!-- beginning of search suggestions -->
			<div class="home-search-suggestion display-none">
			  <div class="section-heading mg-bottom-16">
				<h3>Other results</h3>
			  </div>

			  <div class="row">
				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
				  <a href="shop.html" class="card result-suggestion">
					<div class="bookmark-logo">
					  <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
					</div>
					<div class="bookmark-card-details">
					  <div class="bookmark-comp-addr">3 shops on Rumuchakara street close to Igbogo road sells shoes.</div>
					</div>
				  </a>
				</div>

				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
				  <a href="#" class="card result-suggestion">
					<div class="bookmark-logo">
					  <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
					</div>
					<div class="bookmark-card-details">
					  <div class="bookmark-comp-addr">3 shops on Rumuchakara street close to Igbogo road sells shoes.</div>
					</div>
				  </a>
				</div>

				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
				  <a href="#" class="card result-suggestion">
					<div class="bookmark-logo">
					  <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
					</div>
					<div class="bookmark-card-details">
					  <div class="bookmark-comp-addr">3 shops on Rumuchakara street close to Igbogo road sells shoes.</div>
					</div>
				  </a>
				</div>

				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
				  <a href="#" class="card result-suggestion">
					<div class="bookmark-logo">
					  <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
					</div>
					<div class="bookmark-card-details">
					  <div class="bookmark-comp-addr">3 shops on Rumuchakara street close to Igbogo road sells shoes.</div>
					</div>
				  </a>
				</div>

				<div class="col-xs-12 mg-bottom-24">
				  <div class="regular-text">
					No other result was found in Choba. Check nearby communities
				  </div>
				</div>

				<div class="col-xs-12 ">
				  <div class="other-communities">
					<a href="#" class="chip white-bg-color">Rumuosi</a>
					<a href="#" class="chip white-bg-color">Rumalogu</a>
					<a href="#" class="chip white-bg-color">Ozuoba</a>
					<a href="#" class="chip white-bg-color">Aluu</a>
				  </div>
				</div>

			  </div>

			</div>
			<!-- end of search suggestions -->

	  </div> 
	  <!-- end of content container -->

	  <!-- footer area -->

	  <BOTTOMADS></BOTTOMADS>
	  <Nuxt />
	  <CUSTOMERFOOTER></CUSTOMERFOOTER>
	  <Nuxt />

	  <div class='onesignal-customlink-container'></div>
	</div>
  </div>
</template>

<script>

import MOBILENAVIGATION from '~/layouts/customer/mobile-navigation.vue';
import DESKTOPNAVGATION from '~/layouts/customer/desktop-navigation.vue';
import MOBILESEARCH from '~/layouts/customer/mobile-search.vue';
import BOTTOMADS from '~/layouts/customer/buttom-ads.vue';
import CUSTOMERFOOTER from '~/layouts/customer/customer-footer.vue';
import FOLLOWING from '~/components/customer/home-page/following.vue';
import ADVANCEDSEARCH from '~/components/customer/home-page/advanced-search.vue';

import {
  GET_FOLLOWING_FOR_HOME_PAGE
} from '~/graphql/homePage'

import { mapActions, mapGetters } from 'vuex'

export default {
	name: "MARKETSQUARE",
	components: {
	  DESKTOPNAVGATION, MOBILENAVIGATION, MOBILESEARCH, FOLLOWING, ADVANCEDSEARCH, BOTTOMADS, CUSTOMERFOOTER
	},
	data: function() {
	  return {
		anonymousId: "",
		accessToken: "",
	  }
	},
	computed: {
	  ...mapGetters({
		'GetAnonymousId': 'customer/GetAnonymousId',
		'GetCustomerData': 'customer/GetCustomerDetails'
	  }),
	},
	methods: {
		...mapActions({
			'GetAnonymousIdFromApi': 'customer/GetAnonymousIdFromApi'
		}),
		GetCustomerDataFromStore: function () {
			let customerData = this.GetCustomerData;
			this.accessToken = customerData.userToken
		},
	},
	created: function () {
	  this.GetCustomerDataFromStore();
	},
	mounted () {
		this.anonymousId = this.GetAnonymousId
	}
}
</script>