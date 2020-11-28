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

			<!-- top categories -->
			<div class="mg-bottom-32" v-show="fashionCategories.length > 0">
				<div class="chip-tabs home-tab" id="tabList">
					<a href="#" class="chip-tab-item is-active" id="tabLink" data-tab="FashionCategory">Fashion</a>
					<a href="#" class="chip-tab-item" id="tabLink" data-tab="BeautyCategory">Beauty</a>
				</div>

				<div class="tab-content" id="tabContent">
					<div class="tab-content-area is-active showEffect" id="FashionCategory">
						<div class="top-categories-listing">
							<nuxt-link prefetch :to="`/p/list/${category.categoryId}`" class="categories-items" v-for="(category, index) in returnFashionCategoriesList" :key="index">
								<div class="category-icon" :style="{'background-image': `url(${category.icon})`}"></div>
								<span>{{category.categoryName}}</span>
							</nuxt-link>
						</div>
					</div>
					<div class="tab-content-area" id="BeautyCategory">
						<div class="top-categories-listing">
							<nuxt-link prefetch :to="`/p/list/${category.categoryId}`" class="categories-items" v-for="(category, index) in returnBeautyCategoriesList" :key="index">
								<div class="category-icon" :style="{'background-image': `url(${category.icon})`}"></div>
								<span>{{category.categoryName}}</span>
							</nuxt-link>			
						</div>
					</div>
				</div>

			</div>
			<!-- End of top categories -->
			
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

	  <SCROLLTOTOP></SCROLLTOTOP>
	  <Nuxt />

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

import SCROLLTOTOP from '~/plugins/scroll-to-top.client.vue'

import {
  GET_FOLLOWING_FOR_HOME_PAGE
} from '~/graphql/homePage';

import { GET_ALL_CATEGORIES} from '~/graphql/categories';

import { mapActions, mapGetters } from 'vuex'

export default {
	name: "MARKETSQUARE",
	components: {
	  DESKTOPNAVGATION, MOBILENAVIGATION, MOBILESEARCH, FOLLOWING, ADVANCEDSEARCH, BOTTOMADS, CUSTOMERFOOTER, SCROLLTOTOP
	},
	data: function() {
	  return {
		anonymousId: "",
		accessToken: "",
		fashionCategories: [],
		beautyCategories: []
	  }
	},
	computed: {
	  ...mapGetters({
		'GetAnonymousId': 'customer/GetAnonymousId',
		'GetCustomerData': 'customer/GetCustomerDetails'
	  }),
	  returnFashionCategoriesList () {
		  return this.fashionCategories
	  },
	  returnBeautyCategoriesList () {
		  return this.beautyCategories
	  }
	},
	methods: {
		...mapActions({
			'GetAnonymousIdFromApi': 'customer/GetAnonymousIdFromApi'
		}),
		GetCustomerDataFromStore: function () {
			let customerData = this.GetCustomerData;
			this.accessToken = customerData.userToken
		},
        GetAllCategories: async function () {

            let query = await this.$performGraphQlQuery(this.$apollo, GET_ALL_CATEGORIES);
            if (query.error) {
                this.$initiateNotification('error', 'Failed request', query.message);
                this.isNetworkError = 1
                return
            } else {
                this.isNetworkError = 0
            }

            let result = query.result.data.GetAllCategories;
            if (result.success == false) {
                this.$initiateNotification('error', 'Failed request', result.message);
                return
            }
			
			let fashionCategoryListing = [];
			let beautyCategoryListing = [];
			
            for (const [index, category] of result.category.entries()) {
				
				if (category.industry === "Fashion") {
					
					fashionCategoryListing.push({
						categoryId: category.id,
						categoryName: category.categoryName,
						industry: category.industry,
						icon: category.icon
					})

				} else if (category.industry === "Beauty") {

					beautyCategoryListing.push({
						categoryId: category.id,
						categoryName: category.categoryName,
						industry: category.industry,
						icon: category.icon
					})

				}
			}

			this.fashionCategories = fashionCategoryListing
			this.beautyCategories = beautyCategoryListing
			
        }
	},
	created: function () {
		this.GetAllCategories();
	  	this.GetCustomerDataFromStore();
	},
	mounted () {
		this.anonymousId = this.GetAnonymousId
	}
}
</script>