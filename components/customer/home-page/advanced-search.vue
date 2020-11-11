<template>
      <div class="big-search-banner" id="">
      <h1 class="banner-big-text">Find <span class="underline-text">fashion</span> & <span class="underline-text">beauty</span> products from shops around you.</h1>
      
      <div class="advanced-search" id="advancedSearchContainer">
        <div class="big-search-banner-search" id="homeAdvancedSearch">
            <div class="search-form-manager">
              <div class="form-control">
                <input type="text" name="" id="productName" placeholder="What are you looking for?" class="advanced-search-product input-form grey-bg-color add-border" v-model="productName">
              </div>
              <div class="form-control position-relative">
                  
                <input type="search" name="" id="communityName" placeholder="Type the community location" class="advanced-search-location input-form grey-bg-color add-border" v-model="communityName" @keyup="initiateCommunitySearch()">

                <div class="recent-search-list-container" v-show="communityName.length > 1 && noCommunitySuggestionResult == 0" id="communitySearchSuggestion">
                    <div v-for="(suggestion, index) in returnCommunitySuggestion" :key="index">
                        <div @click="setCommunityID(suggestion.communityId, suggestion.communityName, 'communitySearchSuggestion', $event)" class="action-content">
                            {{suggestion.communityName}} <span>- {{suggestion.stateName}}</span>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            
            <div class="form-control">
              <button class="btn btn-primary btn-lg" id="findShop" @click="readySearch()">Find products</button>
            </div>
            <div class="advance-close-button">
              <button class="close-modal-btn">
                <input type="checkbox" class="dropdownCheckBox"  data-advanced-search="advancedSearchContainer">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" class="margin-unset">
                    <use xlink:href="~/assets/customer/image/all-svg.svg#times"></use>
                </svg>
              </button>
            </div>
        </div>

        <div class="advanced-search-result-area">

            <div class="row" v-show="!isLoading && returnProductResult.length > 0">

                <n-link :to="`/p/${product.id}`" class="col-xs-6 col-sm-6 col-md-4 col-lg-2" v-for="(product, index) in returnProductResult" :key="index">
                    <div class="product-card">
                        <div class="product-card-image">
                            <img :data-src="product.image"  :alt="`${product.name}'s image`" v-lazy-load>
                        </div>
                        <div class="product-card-details">
                            <div class="product-name-tweak">
                                {{product.name}}
                            </div>
                            <div class="product-price">₦ {{product.price}}</div>
                            <div class="search-product-location">{{product.address}}</div>
                        </div>
                    </div>
                </n-link>

            
            </div>

            <div class="mg-bottom-32" v-show="!isLoading && returnProductResult.length == 0">
                <div class="alert alert-info">No product was found</div>
            </div>

            <div class="home-business-listing mg-top-32" v-show="!isLoading && returnBusinessResult.length > 0">
                <div class="mg-bottom-16 flex-column">
                <h3 class="mg-bottom-4">Business listing</h3>
                <div class="listing-info">Businesses in {{communityName}}</div>
                </div>

                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4" v-for="(business, index) in returnBusinessResult" :key="index">
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

            </div>

            <div class="content-loading" v-show="isLoading">
                <div class="loader-action"><span class="loader"></span></div>    
            </div>

            <!-- when a community that does not exist is typed -->
            <div class="link-error-area" v-show="isLoading == 0 && searchError">
                <img src="~/static/images/search.svg" alt="">
                <div class="error-cause">{{reasonForError}}</div>
            </div>
            <!-- end of error area -->

            <!-- when a server error occurs -->
            <div class="link-error-area" v-show="isLoading == 0 && pageError">
                <img src="~/static/images/server-error.svg" alt="">
                <div class="error-cause">{{reasonForError}}</div>
            </div>
            <!-- end of error area -->

        </div>

        <div class="filter-btn-container">
          <button class="close-modal-btn btn-icon btn-white advn-search-filter">
            <input type="checkbox" class="dropdownCheckBox" id="checkToShowSearch" data-single-tab="singleTab" data-target="homeAdvancedSearch">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <use xlink:href="~/assets/customer/image/all-svg.svg#searchIcon"></use>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" class="last-svg">
              <use xlink:href="~/assets/customer/image/all-svg.svg#times"></use>
            </svg>
          </button>
        </div>

        <div class="mobile-close-search">
          <button class="btn btn-md btn-block btn-default" data-advanced-search="advancedSearchContainer">Close search</button>
        </div>
      </div>
      
    </div>
</template>

<script>

import { FIND_COMMUNITY } from '~/graphql/location';
import { ADVANCED_SEARCH } from '~/graphql/search';
import StarRating from '~/plugins/vue-star-rating.client.vue';

export default {
	name: "ADVANCEDSEARCH",
	components: {
	  StarRating
	},
    data: function () {
        return {
            screenWidth: "",
            productName: "",
            communityName: "",
            selectedCommunityId: "",
            communitySuggestion: [],
            noCommunitySuggestionResult: 0,
            setTimeout: null,

            isLoading: 0,

            productResult: [],
            businessResult: [],
            reasonForError: "",
            pageError: false,
            searchError: false,


            // to check if to search with community id or community name
            tapId: 0
        }
    },
    created() {
        if (process.browser) {
            window.addEventListener('resize', this.handleResize);
        }
    },
    computed: {
        handleResize() {
            this.screenWidth = window.innerWidth;
        },
        returnCommunitySuggestion () {
            return this.communitySuggestion
        },
        returnProductResult () {
            return this.productResult
        },
        returnBusinessResult () {
            return this.businessResult
        }
    },
    methods: {
        getBusinessLogo: function (businessId, logo) {
            return this.$getBusinessLogoUrl(businessId, logo)
        },
        getNameLogo: function(name) {
            if (process.browser) {
                return this.$convertNameToLogo(name)
            }
        },
        setCommunityID: function (communityId, communityName, suggestionBoxId, e) {
            e.preventDefault()
            document.getElementById(suggestionBoxId).style.display = 'none'
            this.communityName = communityName
            this.selectedCommunityId = communityId
            this.tapId = 1
        },
        initiateAdvancedSearch: async function () {

            this.businessResult = [];
            this.productResult = [];

            let variables = {
                communityId: this.tapId == 1 ? this.selectedCommunityId : this.communityName,
                queryString: this.productName,
                page: 1
            }

            this.searchError = false
            this.pageError =  false

            this.isLoading = 1
            let request = await this.$performGraphQlQuery(this.$apollo, ADVANCED_SEARCH, variables, {});
            this.isLoading = 0

            if (request.error) {
				this.reasonForError = request.message;
                this.pageError = true
				return this.$initiateNotification('error', "Network Error", request.message);
            } else {
                this.reasonForError = "";
                this.pageError = false
            }

            let result = request.result.data.AdvancedSearch;
            
            if (result.success == false) {
				this.reasonForError = result.message;
                this.searchError = true
				return this.$initiateNotification('error', "Oops!", result.message);
            } else {
                this.reasonForError = "";
                this.searchError = false
            }

            let productArray = [];

            for (let x of result.products) {
                productArray.push({
                    image: this.$formatProductImageUrl(x.businessId, x.image, "thumbnail"),
                    name: x.name,
                    price: this.$numberNotation(x.price),
                    id: x.productId,
                    address: x.addressString
                })
            }

            this.productResult = productArray


            let businessArray = [];

            for (let x of result.businesses) {
                businessArray.push({
                    logo: x.logo,
                    name: x.businessName,
                    categoryString: x.categoryString,
                    reviewScore: x.reviewScore,
                    username: x.username,
                    businessId: x.businessId
                })
            }

            this.businessResult = businessArray


        },
        findCommunity: async function () {
            
            this.communitySuggestion = [];

            this.clearTimeout();

            let variables = {
                keyword: this.communityName
            }

            this.setTimeout = setTimeout(async () => {
                
                let request = await this.$performGraphQlQuery(this.$apollo, FIND_COMMUNITY, variables, {});
                
                if (request.error) {
                    this.$showToast("Network error", 'error')
                    return
                }

                let result = request.result.data.GetCommunity;
                if (result.success) {
                    if (result.communityData != null) {
                        // this.streetSuggestion = result.streetData
                        let communityArray = [];
                        for (let community of result.communityData) {
                            communityArray.push({
                                communityName: community.communityName,
                                communityId: community.communityId,
                                stateName: community.state.name
                            });
                        }

                        this.communitySuggestion = communityArray;
                        this.noCommunitySuggestionResult = 0
                        
                    } else {
                        this.noCommunitySuggestionResult = 1
                    }
                }

            }, 500);
        },
        readySearch: function () {
            if (this.productName.length > 1 && this.communityName.length > 2) {
                document.querySelector("body").classList.add('overflow-hidden')
                document.getElementById('advancedSearchContainer').classList.add('is-active')
                // remove show effect
                let removeSearch = document.getElementById('homeAdvancedSearch')
                removeSearch.classList.remove('showEffect')

                this.$removeRedBorder('productName')
                this.$removeRedBorder('communityName')
                this.noCommunitySuggestionResult = 1

                // uncheck check box
                document.getElementById('checkToShowSearch').checked =  false

                this.initiateAdvancedSearch();

            } else {
                if (this.productName.length < 2) {
                    this.$showToast("Your search must be greater that 1 character", "info", 4000)
                    this.$addRedBorder('productName')
                }
                if (this.communityName.length == 0) {
                    this.$addRedBorder('communityName')
                }
            }
        },
        closeSearch: function (e) {
            let getDataAttribute = e.target;
            let closeTarget = getDataAttribute.getAttribute('data-advanced-search');
            document.querySelector("body").classList.remove('overflow-hidden')
            document.getElementById(closeTarget).classList.remove('is-active')
        },
        clearTimeout: function () {
            clearTimeout(this.setTimeout)
        },
        fixedSearchArea: function(advancedSearchstickyElement) {
            let currStickyPos =  advancedSearchstickyElement.getBoundingClientRect().top + window.pageYOffset; 
            if(this.screenWidth >= 1024) {
                window.onscroll = function() { 
                    if (window.pageYOffset > currStickyPos) { 
                        advancedSearchstickyElement.style.position = "fixed"; 
                        advancedSearchstickyElement.style.top = "0px"; 
                        advancedSearchstickyElement.style.zIndex = 1000; 
                        advancedSearchstickyElement.style.height = '90px';
                        advancedSearchstickyElement.style.paddingTop = '16px'
                        advancedSearchstickyElement.style.paddingBottom = '16px'
                    } else { 
                        advancedSearchstickyElement.style.position = "absolute"; 
                        advancedSearchstickyElement.style.top = "initial"; 
                        advancedSearchstickyElement.style.height = 'unset';
                        advancedSearchstickyElement.style.paddingTop = '32px'
                        advancedSearchstickyElement.style.paddingBottom = '32px'
                    } 
                } 
            }
        },
        initiateCommunitySearch: async function () {
            if (this.communityName.length > 1) {
                this.noCommunitySuggestionResult = 0
                this.tapId = 0
                await this.findCommunity()
            }
        }
    },
    watch: {
        communityName: async function () {
        }
    },
    mounted () {
        // close advanced search
        let closeAdvancedSearch = document.querySelectorAll('[data-advanced-search]');
        for (const action of closeAdvancedSearch) {
            action.addEventListener('click', (e) => {
                e.stopPropagation(); this.closeSearch(e)            
            })
        }

        /**
         * This is for the Home page advanced search;
         * The searcg area will stick to the top when
         * to scrolls to the top
         */

        let advancedSearchstickyElement = document.getElementById("homeAdvancedSearch"); 
        if (advancedSearchstickyElement) this.fixedSearchArea(advancedSearchstickyElement)
    },
    beforeDestroy() {
        this.clearTimeout()
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
    .filter-btn-container {
        top: calc(100vh - 121px);
    }
    .filter-btn-container .close-modal-btn {
        opacity: .5;
    }
</style>