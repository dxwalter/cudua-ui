<template>
  <div class="customer">
    <div class="body-container grey-bg-color">

      <!-- beginning of navigation container -->
      <div class="nav-container">

        <MOBILESEARCHMODAL :showMobileSearch=showMobileSearch></MOBILESEARCHMODAL>
        <Nuxt />
        <DESKTOPNAVGATION v-on:retrieveSearchKeyword="setSearchKeyword"></DESKTOPNAVGATION>
        <Nuxt />
        <MOBILESEARCH></MOBILESEARCH>
        <Nuxt />
        <MOBILENAVIGATION></MOBILENAVIGATION>
        <Nuxt />
      </div>

      <div class="content-container-second">
        <div class="desktop-search-page-container">

			<!-- search result count  -->
        <div class="search-preview-area card" v-show="doneSearching && searchKeyword.length > 1">
            <div class="search-input-preview mg-bottom-24" v-show="searchKeyword.length > 1">Search result - <span>{{searchKeyword}}</span></div>
            <!-- <div class="search-result-count">15,450 results for <span>shirt</span></div> -->
          <!-- tab header -->
          <div class="d-flex-center">
              <div class="chip-tabs" id="tabList">
                  <a href="#" class="chip-tab-item is-active" id="tabLink" data-tab="desktopSearchProductResultTab">Products ({{returnProductList.length}})</a>
                  <a href="#" class="chip-tab-item" id="tabLink" data-tab="desktopSearchCompanyResultTab">Business ({{returnBusinessList.length}})</a>
              </div>
          </div>  
          <!-- end of tab header -->
			</div>
			<!-- end of search result count -->

      <div class="desktop-search-listing">

        <div class="row">

          <!-- Search result content -->
          <div class="col-xs-12">

            <div id="tabContent" v-show="doneSearching && searchKeyword.length > 1">
                <!-- search product result -->
                <div class="tab-content-area is-active" id="desktopSearchProductResultTab">
                  <div class="row mg-bottom-16">

                    <n-link :to="`/p/${product.id}`" class="col-xs-6 col-sm-6 col-md-4 col-lg-3" v-for="(product, index) in returnProductList" :key="index">
                      <div class="product-card search-product-details">
                          <div class="product-card-image">
                              <img :data-src="formatProductImage(product.businessId, product.primaryImage)"  :alt="`${product.name}'s image`" v-lazy-load>
                          </div>
                          <div class="product-card-details">
                              <div class="product-name-tweak">
                                  {{product.name}}
                              </div>
                              <div class="product-price">₦ {{formatPrice(product.price)}}</div>
                          </div>
                      </div>
                    </n-link>

                  </div>


                  <!-- when no string has been typed into search box -->
                  <div class="link-error-area" v-show="returnProductList.length == 0 && doneSearching">
                    <img src="~/static/images/search.svg" alt="">
                    <div class="error-cause">No product with the name <span class="indicator">{{searchKeyword}}</span> was found.</div>
                  </div>
                  <!-- end of error area -->

                  <div class="load-more-action" v-show="productCount == 50">
                    <button class="btn btn-white" id="loadMoreDesktopProductResults" @click="loadMoreDesktopProductResults()">
                      Load more
                      <div class="loader-action"><span class="loader"></span></div>	
                    </button>
                  </div>

                </div>
                <!-- end of search product result -->
      
                <!-- business search result -->
                <div class="tab-content-area" id="desktopSearchCompanyResultTab">
                  <div class="row mg-bottom-16">
                    

                      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3" v-for="(business, index) in returnBusinessList" :key="index">
                          <n-link :to="`/${business.username}`" class="card street-biz-card search-biz-card">
                            <div class="street-biz-card-flex">
                              <div class="businesss-card-img">
                                <div class="temporal-logo" v-show="business.logo.length == 0">
                                  {{getNameLogo(business.businessname)}}
                                </div>
                                <img :data-src="getBusinessLogo(business.businessId, business.logo)" :alt="`${business.businessname}'s logo`"  v-show="business.logo.length > 1" v-lazy-load>
                              </div>
                              <div>
                                <div class="business-name">{{business.businessname}}</div>
                                <div class="categories mg-bottom-4">@{{business.username}}</div>
                                <div class="categories" v-show="business.address != null">{{formatBusinessAddress(business.address)}}</div>
                              </div>
                            </div>
                          </n-link>
                        </div>
  
                  </div>

                  <!-- when no string has been typed into search box -->
                  <div class="link-error-area" v-show="returnBusinessList.length == 0 && doneSearching">
                    <img src="~/static/images/search.svg" alt="">
                    <div class="error-cause">No business with the name or username <span class="indicator">{{searchKeyword}}</span> was found.</div>
                  </div>
                  <!-- end of error area -->


                  <div class="load-more-action" v-show="businessCount == 50">
                    <button class="btn btn-white" id="loadMoreDesktopProductResults" @click="loadMoreDesktopProductResults()">
                      Load more
                      <div class="loader-action"><span class="loader"></span></div>	
                    </button>
                  </div>
                </div>
                <!-- end business search result -->
            </div>

          </div>
          <!-- end of search result content -->

					<div class="content-loading" v-show="isLoading && searchKeyword.length > 1">
						<div class="loader-action"><span class="loader"></span></div>    
					</div>
			

					<!-- when no string has been typed into search box -->
					<div class="link-error-area" v-show="searchKeyword.length < 2">
						<img src="~/static/images/search.svg" alt="">
						<div class="error-cause">Search for <span class="indicator">products</span> and <span class="indicator">businesses</span></div>
					</div>
					<!-- end of error area -->

        </div>
        
      </div>

        </div>
    </div>
      <!-- end of content container -->

      <!-- footer area -->

      <BOTTOMADS></BOTTOMADS>
      <Nuxt />
      <CUSTOMERFOOTER></CUSTOMERFOOTER>
      <Nuxt />

    </div>
  </div>
</template>

<script>
import MOBILENAVIGATION from '~/layouts/customer/mobile-navigation.vue'
import DESKTOPNAVGATION from '~/layouts/customer/desktop-navigation.vue'
import MOBILESEARCHMODAL from '~/layouts/customer/search/mobile-search.vue'
import MOBILESEARCH from '~/layouts/customer/mobile-search.vue'
import BOTTOMADS from '~/layouts/customer/buttom-ads.vue'
import CUSTOMERFOOTER from '~/layouts/customer/customer-footer.vue'

import {
	REGULAR_SEARCH
} from '~/graphql/search'


export default {
  name: "DESKTOPSEARCH",
    components: {
      DESKTOPNAVGATION, MOBILENAVIGATION, MOBILESEARCHMODAL, BOTTOMADS, CUSTOMERFOOTER, MOBILESEARCH
    },
    data () {
      return {
        screenWidth: 0,
        showMobileSearch: 0,
        isLoading: 0,
        noProduct: 0,
        isSearchReady: 0,

        productList: [],
        productCount: 0,

        businessList: [],
        businessCount: 0,

        reasonForError: '',
        resultCount: 0,
        pageError: false,
        page: 1,

        doneSearching: 0,

        searchKeyword: "",

        timeoutHandler: null,
        calculatedLoad: 0
      }
    },
    computed:{
        handleResize() {
            this.screenWidth = window.innerWidth;
        },
        returnProductList () {
          return this.productList
        },
        returnBusinessList () {
          return this.businessList
        }
    },
    methods: {
      setSearchKeyword: function (value) {
        this.searchKeyword = value
      },
      performRegularSearch: async function () {

      },
      formatPrice: function (price) {
        return this.$numberNotation(price)
      },
      getNameLogo: function(name) {
        if (process.browser) {
          return this.$convertNameToLogo(name)
        }
      },
      getBusinessLogo: function (businessId, logo) {
          return this.$getBusinessLogoUrl(businessId, logo)
      },
      formatProductImage: function (businessId, imagePath) {
        return this.$formatProductImageUrl(businessId, imagePath, "thumbnail")
      },
      makeRegularSearch: async function (page) {
        
        let variables = {
          queryString: this.searchKeyword.trim(),
          page: page
        }

        let query = await this.$performGraphQlQuery(this.$apollo, REGULAR_SEARCH, variables, {});

        if (query.error) {
          this.reasonForError = query.message;
          this.pageError = true
          return
        }

        let result = query.result.data.RegularSearch;

        if (result.success == false) {
          this.reasonForError = result.message;
          this.pageError = true
          this.noProduct = 0
          this.searchKeyword = ""
          return
        }

        this.resultCount = result.businesses.length + result.products.length

        if (this.resultCount == 0 && page == 1) {
          this.productList = []
          this.noProduct = 1
          this.reasonForError = `No result was found for <span class="indicator">${this.searchKeyword}</span>.`
          return
        } else {
          this.noProduct = 0
        }
        
        if (result.products.length > 0) {
          for (const product of result.products) {
            this.productList.push({
              id: product.id,
              name: product.name,
              primaryImage: product.primaryImage,
              price: product.price,
              businessId: product.businessId,
              reviewScore: product.reviewScore
            })
          }
        }
        this.productCount = result.products.length


        if (result.businesses.length > 0) {
          for (const business of result.businesses) {
            this.businessList.push({
              businessname: business.businessname,
              username: business.username,
              address: business.address,
              businessId: business.id,
              logo: business.logo
            })
          }
        }
        this.businessCount = result.businesses.length

        this.pageError = false

        this.$router.push({path: this.$route.path, query: { q: this.searchKeyword}})

      },
      loadMoreDesktopProductResults: async function () {
        let page = parseInt(this.page + 1)
        let target = document.getElementById('loadMoreDesktopProductResults');

        target.disabled = true;
  
        await this.makeRegularSearch(page)
        target.disabled = false;

        if ((page * 50 ) >= this.resultCount) {
          this.calculatedLoad = 1
        }
      },
      formatBusinessAddress: function(address){
        if (address == null) {
          return
        } else {
          return `${address.number} ${address.street}, ${address.community} ${address.state}.`
        }
      },
      clearTimeOut: function (timerOut) {
          clearTimeout(timerOut)
      },
    },
    created () {
      if (process.client) {
          window.addEventListener('resize', this.handleResize);
          if (this.screenWidth < 1024) {
            this.showMobileSearch = 1
          }

          let queryString = this.$route.query.q
          if (queryString != undefined && queryString.length > 0) {
            this.searchKeyword = queryString
          }
      }
    },
    beforeDestroy () {
        clearTimeout(this.timeoutHandler);
    },
    watch: {
      searchKeyword: async function () {
        if (this.searchKeyword.length <= 1) {
          return
        }

        this.isLoading = 1
        this.doneSearching = 0
        this.resultCount = 0
        this.productList = []
        this.businessList = []

        // clear previous time out
        this.clearTimeOut(this.timeoutHandler)

        this.timeoutHandler = setTimeout( async() => {
            this.page = 1
            await this.makeRegularSearch(this.page)
            this.doneSearching = 1
            this.isLoading = 0
        }, 500)

      },
      mounted () {
        if (this.searchKeyword.length > 0) {
          return this.makeRegularSearch(1)
        }
      }
    }
}
</script>
<style scoped>
  .content-container-second {
    min-height: 70vh !important;
  }
  .link-error-area {
    margin: 0 auto;
    height: 300px;
  }
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
</style>