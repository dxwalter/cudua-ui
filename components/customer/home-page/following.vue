<template>
  <div>

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
      <div class="col-md-12 width-100" v-bind:class="[returnHomePageFollowing.length > 0  ? 'col-lg-8' : 'col-lg-12']">
        <div class="home-business-listing">
        <div class="mg-bottom-16 flex-column" v-show="isLoadingProducts && returnProducts.length > 0">
          <h3 class="mg-bottom-4">New products</h3>
          <!-- <div class="listing-info">Products from stores you are following</div> -->
        </div>

          <div class="row" v-show="isLoadingProducts && returnProducts.length > 0">
                                      
              <n-link :to="`/p/${product.id}`" class="col-xs-6 col-sm-6 col-md-4" v-bind:class="[returnHomePageFollowing.length > 0  ? 'col-lg-4' : 'col-lg-3']" v-for="(product, index) in returnProducts" :key="index">
                  <div class="product-card">
                      <div class="product-card-image">
                          <img :data-src="product.image"  :alt="`${product.name}'s image`" v-lazy-load>
                      </div>
                      <div class="product-card-details">
                          <div class="product-name">
                              {{product.name}}
                          </div>
                          <div class="product-price">₦ {{product.price}}</div>
                      </div>
                  </div>
              </n-link>

          </div>

          <div class="row"  v-show="!isLoadingProducts">
            <div class="content-loading">
              <div class="loader-action"><span class="loader"></span></div>    
            </div>
          </div>

          <div v-show="isLoadingProducts && isProductError" class="network-error-area">
            <div class="description">{{isProductErrorReason}}</div>
            <button class="btn btn-small btn-white" @click="tryAgain()">Try again</button>
          </div>


        </div>
      </div>
      <!-- end of product listing -->
    </div>

    <!-- business listing -->
    <div class="home-business-listing">
      <div class="mg-bottom-16 flex-column" v-show="isLoadingBusiness && returnBusiness.length > 0">
          <h3 class="mg-bottom-4">Business listing</h3>
          <!-- <div class="listing-info">Businesses on igbogo road that sells shoes</div> -->
      </div>

      <div class="row"  v-show="isLoadingBusiness && returnBusiness.length > 0">
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4" v-for="(business, index) in returnBusiness" :key="index">
            <div class="card street-biz-card">
              <div class="street-biz-card-flex">
                  <div class="businesss-card-img">
                      <div class="temporal-logo" v-show="business.logo.length == 0">
                          {{getNameLogo(business.name)}}
                      </div>
                      <img :data-src="getBusinessLogo(business.businessId, business.logo)" :alt="`${business.name}'s logo`"  v-show="business.logo.length > 1" v-lazy-load>
                  </div>
                  <div>
                      <div class="business-name">{{business.name}}</div>
                    
                      <div class="reviews">
                          <StarRating :score=business.reviewScore></StarRating>
                          <Nuxt />
                      </div>

                      <div class="categories height-20">{{business.categoryString}}</div>
                  </div>
              </div>
              <div>
                  <n-link :to="`/${business.username}`" class="btn btn-block btn-white">Visit shop</n-link>
              </div>
            </div>
          </div>

      </div>

          <div class="row"  v-show="!isLoadingBusiness">
            <div class="content-loading">
              <div class="loader-action"><span class="loader"></span></div>    
            </div>
          </div>

          <div v-show="isLoadingBusiness && isBusinessError" class="network-error-area">
            <div class="description">{{isBusinessErrorReason}}</div>
            <button class="btn btn-small btn-white" @click="tryAgain()">Try again</button>
          </div>

    </div>
    <!-- end of business listing -->
  </div>

</template>

<script>
import {
  GET_FOLLOWING_FOR_HOME_PAGE,
  GET_PRODUCTS_FOR_HOME_PAGE,
  GET_BUSINESS_FOR_HOME_PAGE
} from '~/graphql/homePage'

import { mapActions, mapGetters } from 'vuex';

import StarRating from '~/plugins/vue-star-rating.client.vue';

export default {
	name: "HOMEPAGEFOLLOWING",
	components: {
	  StarRating
	},
	data: function() {
	  return {
      anonymousId: "",
      accessToken: "",
      homePageFollowing: [],
      
      // for products
      homePageProducts: [],
      isLoadingProducts: 0,
      isProductError: 0,
      isProductErrorReason: "",

      // for business
      homePageBusiness: [],
      isLoadingBusiness: 0,
      isBusinessError: 0,
      isBusinessErrorReason: ""

	  }
	},
	computed: {
	  ...mapGetters({
      'GetAnonymousId': 'customer/GetAnonymousId',
      'GetCustomerData': 'customer/GetCustomerDetails'
	  }),
	  returnHomePageFollowing: function () {
		  return this.homePageFollowing
    },
    returnProducts: function () {
      return this.homePageProducts
    },
    returnBusiness: function () {
      return this.homePageBusiness
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
    tryAgain: function () {
      this.getFollowingForHomePage()
      this.getProductsForHomePage()
      this.getBusinessForHomePage()
    },
    getProductsForHomePage: async function () {

        this.isLoadingProducts = 0

        let request = await this.$performGraphQlQuery(this.$apollo, GET_PRODUCTS_FOR_HOME_PAGE, {}, {});

        this.isLoadingProducts = 1

        if (request.error) {
            this.isProductError = 1
            this.isProductErrorReason = "Your connection seems to broken."
            return
        } else {
            this.isProductError = 0
            this.isProductErrorReason = ""
        }

        let result = request.result.data.getHomePageProducts

        if (result.success == false) {
            this.isProductError = 1
            this.isProductErrorReason = result.message
            return
        } else {
            this.isProductError = 0
            this.isProductErrorReason = ""
        }

        let data = result.products


        for (let x of data) {
            this.homePageProducts.push({
              image: this.$formatProductImageUrl(x.businessId, x.image, "thumbnail"),
              name: x.name,
              price: this.$numberNotation(x.price),
              id: x.productId
            })
        };
    },
    getBusinessForHomePage: async function () {
      
        this.isLoadingBusiness = 0

        let request = await this.$performGraphQlQuery(this.$apollo, GET_BUSINESS_FOR_HOME_PAGE, {}, {});

        this.isLoadingBusiness = 1

        if (request.error) {
            this.isBusinessError = 1
            this.isBusinessErrorReason = "Your connection seems to brokens."
            return
        } else {
            this.isBusinessError = 0
            this.isBusinessErrorReason = ""
        }

        let result = request.result.data.getNewBusinessListing

        if (result.success == false) {
            this.isBusinessError = 1
            this.isBusinessErrorReason = result.message
            return
        } else {
            this.isBusinessError = 0
            this.isBusinessErrorReason = ""
        }

        let data = result.business

        for (let x of data) {
            this.homePageBusiness.push({
                logo: x.logo,
                name: x.businessName,
                categoryString: x.categoryString,
                reviewScore: x.reviewScore,
                username: x.username,
                businessId: x.businessId
            })
        };
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
    this.getProductsForHomePage()
    this.getBusinessForHomePage()
	},
	mounted () {
		this.anonymousId = this.GetAnonymousId
	}
}
</script>

<style scoped>
    .content-loading {
        width: 100%;
        height: 200px;
        /* background: red; */
        display: flex;
        justify-content: center;
        align-content: center;
        position: relative;
    }
    .content-loading .loader-action {
        display: flex;
        background-color: transparent;
    }
    .content-loading .loader-action .loader {
        border: 2px solid rgba(0,0,0,.5);
        width: 30px;
        height: 30px;
        border-top: 2px solid transparent;
    }
    .width-100{
        width: 100% !important;
    }
    @media(min-width: 768px) {
        .height-20 {
          height: 40px;
        }
    }
</style>