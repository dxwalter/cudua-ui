<template>
  <div class="row order-control">
              <!-- bookmark area -->
              <div class="col-md-12 col-lg-4 follow-area" v-show="returnHomePageFollowing.length > 0">
                <div class="home-bookmark-listing">
                  <div class="section-heading mg-bottom-16">
                    <h3>Following</h3>
                    <n-link to="/c/following" class="section-action">See all</n-link>
                  </div>
                  <!-- beginning of bookmark listing -->
                  <div class="home-bookmark-listing-content">
                    
                    <div class="swiper-action-container">
                      <button class="close-modal-btn slider-control">
                        <input type="checkbox" class="dropdownCheckBox" data-direction="left" data-carousel="carousel" data-target="desktopBookmark">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                            <use xlink:href="~/assets/customer/image/all-svg.svg#leftArrow"></use>
                        </svg>
                      </button>
                    </div>

                    
                    <div class="swiper-action-container">
                      <button class="close-modal-btn slider-control">
                        <input type="checkbox" class="dropdownCheckBox" data-direction="right" data-carousel="carousel" data-target="desktopBookmark">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                            <use xlink:href="~/assets/customer/image/all-svg.svg#rightArrow"></use>
                        </svg>
                      </button>
                    </div>

                    <div class="bookmark-scroll-container" id="desktopBookmark">

                      <n-link :to="`/${business.username}`" class="card bookmark-card carousel-item" v-for="(business, index) in returnHomePageFollowing" :key="index">
                        <div class="bookmark-logo">
                            <div class="temporal-logo" v-show="business.logo.length == 0">
                                {{getNameLogo(business.name)}}
                            </div>
                            <img :data-src="getBusinessLogo(business.businessId, business.logo)" :alt="`${business.name}'s logo`"  v-show="business.logo.length > 1" v-lazy-load>
                        </div>
                        <div class="bookmark-card-details">
                          <h4 class="bookmark-comp-name">{{business.name}}</h4>
                          <div class="bookmark-comp-addr">{{business.address}}</div>
                        </div>
                      </n-link>

                      <div class="mg-top-24 mg-bottom-16 load-more-action">
                        <n-link to="/c/following" class="btn btn-md btn-white">See all</n-link>
                      </div>
                    </div>

                  </div>
                  <!-- end of bookmark listing -->

                </div>
              </div>
              <!-- end of bookmark area -->

              <!-- beginning product listing -->
              <div class="col-md-12 col-lg-8">
                <div class="home-business-listing">
                <div class="mg-bottom-16 flex-column">
                  <h3 class="mg-bottom-4">Products</h3>
                  <div class="listing-info">Products from stores you are following</div>
                </div>

                <div class="row">
                                            
                    <n-link to="/p/23434" class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                        <div class="product-card">
                            <div class="product-card-image">
                                <img src="~/assets/customer/image/zenfone.jpg" alt="">
                            </div>
                            <div class="product-card-details">
                                <div class="product-name">
                                    Asus Zenfone 15xd modellite spax
                                </div>
                                <div class="product-price">₦ 1,200</div>
                            </div>
                        </div>
                    </n-link>

                    <n-link to="/p/23434" class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                        <div class="product-card">
                            <div class="product-card-image">
                                <img src="~/assets/customer/image/zenfone.jpg" alt="">
                            </div>
                            <div class="product-card-details">
                                <div class="product-name">
                                    Asus Zenfone
                                </div>
                                <div class="product-price">₦ 1,200</div>
                            </div>
                        </div>
                    </n-link>

                            
                    <n-link to="/p/23434" class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                        <div class="product-card">
                            <div class="product-card-image">
                                <img src="~/assets/customer/image/zenfone.jpg" alt="">
                            </div>
                            <div class="product-card-details">
                                <div class="product-name">
                                    Asus Zenfone 15xd modellite spax
                                </div>
                                <div class="product-price">₦ 1,200</div>
                            </div>
                        </div>
                    </n-link>

                    <n-link to="/p/23434" class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                        <div class="product-card">
                            <div class="product-card-image">
                                <img src="~/assets/customer/image/zenfone.jpg" alt="">
                            </div>
                            <div class="product-card-details">
                                <div class="product-name">
                                    Asus Zenfone
                                </div>
                                <div class="product-price">₦ 1,200</div>
                            </div>
                        </div>
                    </n-link>

                    <n-link to="/p/23434" class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                      <div class="product-card">
                          <div class="product-card-image">
                              <img src="~/assets/customer/image/zenfone.jpg" alt="">
                          </div>
                          <div class="product-card-details">
                              <div class="product-name">
                                  Asus Zenfone
                              </div>
                              <div class="product-price">₦ 1,200</div>
                          </div>
                      </div>
                    </n-link>

                    <n-link to="/p/23434" class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                      <div class="product-card">
                          <div class="product-card-image">
                              <img src="~/assets/customer/image/zenfone.jpg" alt="">
                          </div>
                          <div class="product-card-details">
                              <div class="product-name">
                                  Asus Zenfone
                              </div>
                              <div class="product-price">₦ 1,200</div>
                          </div>
                      </div>
                    </n-link>

                    <n-link to="/p/23434" class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                      <div class="product-card">
                          <div class="product-card-image">
                              <img src="~/assets/customer/image/zenfone.jpg" alt="">
                          </div>
                          <div class="product-card-details">
                              <div class="product-name">
                                  Asus Zenfone
                              </div>
                              <div class="product-price">₦ 1,200</div>
                          </div>
                      </div>
                    </n-link>

                    <n-link to="/p/23434" class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                      <div class="product-card">
                      <div class="product-card-image">
                          <img src="~/assets/customer/image/zenfone.jpg" alt="">
                      </div>
                      <div class="product-card-details">
                          <div class="product-name">
                              Asus Zenfone
                          </div>
                          <div class="product-price">₦ 1,200</div>
                      </div>
                      </div>
                    </n-link>
              </div>


                </div>
              </div>
              <!-- end of product listing -->
            </div>
</template>

<script>
import {
  GET_FOLLOWING_FOR_HOME_PAGE
} from '~/graphql/homePage'

import { mapActions, mapGetters } from 'vuex'

export default {
	name: "HOMEPAGEFOLLOWING",
	components: {
	  
	},
	data: function() {
	  return {
		anonymousId: "",
		accessToken: "",
		homePageFollowing: [],
	  }
	},
	computed: {
	  ...mapGetters({
		'GetAnonymousId': 'customer/GetAnonymousId',
		'GetCustomerData': 'customer/GetCustomerDetails'
	  }),
	  returnHomePageFollowing: function () {
		  return this.homePageFollowing
	  }
	},
	methods: {
		...mapActions({
			'GetAnonymousIdFromApi': 'customer/GetAnonymousIdFromApi'
    }),
    getBusinessLogo: function (businessId, logo) {
        return this.$getBusinessLogoUrl(businessId, logo)
    },
    getNameLogo: function(name) {
			if (process.browser) {
				return this.$convertNameToLogo(name)
			}
    },
		GetCustomerDataFromStore: function () {
			let customerData = this.GetCustomerData;
			this.accessToken = customerData.userToken
		},
		formatFollowingAddress: function (address) {
			return `${address.number} ${address.street} ${address.community}, ${address.state}`
		},
		getFollowingForHomePage: async function () {

			if (this.accessToken.length == 0) return
			
			let context = {
				hasUpload: true,
				headers: {
					'accessToken': this.accessToken
				}
			}

			let request = await this.$performGraphQlQuery(this.$apollo, GET_FOLLOWING_FOR_HOME_PAGE, {}, context);

			if (request.error) return

			let result = request.result.data.getHomePageFollowing

			if (result.success == false) return

			let data = result.following

			for (let x of data) {
				this.homePageFollowing.push({
					logo: x.logo,
					name: x.businessName,
					username: x.username,
          address: x.address == null ? "" : this.formatFollowingAddress(x.address),
          businessId: x.businessId
				})
			};

		}
	},
	created: function () {
	  this.GetCustomerDataFromStore();
	  this.getFollowingForHomePage()
	},
	mounted () {
		this.anonymousId = this.GetAnonymousId
	}
}
</script>

<style>

</style>