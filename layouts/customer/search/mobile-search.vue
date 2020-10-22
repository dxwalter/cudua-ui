<template>
  		<!-- mobile search modal -->
		<div class="modal-container mobile-search-modal-container" id="mobileSearchModal">
			<div class="modal-dialog-box">
				<div class="card">
					<!-- close search modal -->
					<button class="modal-search-close-btn" >
						<input type="checkbox" class="dropdownCheckBox" @click="removeNagitaionBar()">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.512 18.341">
							<use xlink:href="~/assets/customer/image/all-svg.svg#modalArrowLeft"></use>
						</svg>
					</button>
					<!-- Beginning of search input area -->
					<div class="modal-search-input-area">
					<div class="position-relative">
						<div class="input-container">
						<input type="text" name="" id="mobileSearchInput" class="search-form grey-bg-color" placeholder="Search for a product or business" autocomplete="234rtvnt78564v 5t5 32vt54t c" v-model="searchKeyword">
						<button class="clear-form-btn">
							<input type="checkbox" class="dropdownCheckBox" data-clear-form="clear" data-target="mobileSearchInput">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<use xlink:href="~/assets/customer/image/all-svg.svg#timesCircle"></use>
							</svg>
						</button>
						</div>
					</div>
					</div>
					<!-- end of search input area -->
				</div>

				<!-- beginning of mobile search container -->
				<div class="mobile-search-container">

					<!-- beginning of tab nav -->
					<div v-show="doneSearching && searchKeyword.length > 1">
						<div class="d-flex-between">
							<div class="chip-tabs" id="tabList">
								<a href="#" class="chip-tab-item is-active" id="tabLink" data-tab="productResultTab">Products ({{returnProductList.length}})</a>
								<a href="#" class="chip-tab-item" id="tabLink" data-tab="companyResultTab">Business ({{returnBusinessList.length}})</a>
							</div>
						</div>
					</div>
					<!-- end of tab nav -->

					<!-- beginning of tab content -->
					<div id="tabContent" v-show="doneSearching && searchKeyword.length > 1">

						<!-- beginning of product listing -->
						<div class="tab-content-area is-active" id="productResultTab">
							
							<div class="search-result-count mg-top-24" v-show="returnProductList.length > 0">Search result for <span>{{searchKeyword}}</span></div>

							<div class="row">
													
								<n-link :to="`/p/${product.id}`" class="col-xs-6 col-sm-6 col-md-4 col-lg-3" v-for="(product, index) in returnProductList" :key="index">
									<div class="product-card">
										<div class="product-card-image">
											<img :data-src="formatProductImage(product.businessId, product.primaryImage)"  :alt="`${product.name}'s image`" v-lazy-load>
										</div>
										<div class="product-card-details">
											<div class="product-name">
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
								<button class="btn btn-white" id="loadMoreProductResults" @click="loadMoreProductResults()">
									Load more
									<div class="loader-action"><span class="loader"></span></div>	
								</button>
							</div>
						</div>
						<!-- end of product listing -->

						<!-- beginning of business listing -->
						<div class="tab-content-area" id="companyResultTab">
							<div class="search-result-count mg-top-24" v-show="returnBusinessList.length > 0">Search result for <span>{{searchKeyword}}</span></div>
							
							<div class="row">

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
								<button class="btn btn-white" id="loadMoreProductResults" @click="loadMoreProductResults()">
									Load more
									<div class="loader-action"><span class="loader"></span></div>	
								</button>
							</div>
						</div>
						<!-- end of business listing -->
					</div>
					<!-- end of tab content -->

				
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
				<!-- end of mobile search container -->

			</div>
		</div>
</template>

<script>

import {
	REGULAR_SEARCH
} from '~/graphql/search'

export default {
	name: "MOBILESEARCHMODAL",
    data: function () {
      return {
		screenWidth: 0,
		isSearchReady: 0,
		isLoading: 0,
		noProduct: 0,
		
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
	props: {
		showMobileSearch: {
			type: Number,
			default: 0
		}
	},
    computed: {
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
		showMobileSearch: function () {
			if (this.showMobileSearch == 1){
				document.querySelector("body").classList.add("overflow-hidden");
				let target = document.getElementById('mobileSearchModal')
				target.classList.add('show-modal', 'display-block')
				target.classList.add('show-modal', 'display-block')
			}
		}
	},
	methods: {
		showSearchForm: function () {
			this.isSearchReady = 1
		},
		removeNagitaionBar: function () {
			document.querySelector("body").classList.remove("overflow-hidden");
			this.$router.go(-1)
		},
		makeSearchFormFocus: function() {
			document.getElementById('mobileSearchInput').focus()
		},
		checkDeviceStat: function () {
			if (this.screenWidth < 1024) {
				document.querySelector("body").classList.add("overflow-hidden");
				let target = document.getElementById('mobileSearchModal')
				target.classList.add('show-modal', 'display-block')
			} else {
				document.querySelector("body").classList.remove("overflow-hidden");
			}
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

		},
		loadMoreProductResults: async function () {
			let page = parseInt(this.page + 1)
			let target = document.getElementById('loadMoreProductResults');

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
    beforeDestroy () {
        clearTimeout(this.timeoutHandler);
    },
    created () {
      if (process.browser) {
		window.addEventListener('resize', this.handleResize);
      }
	},
	mounted() {
		if (process.browser) {
			this.checkDeviceStat()
		}
		this.makeSearchFormFocus()
	},
}
</script>

<style scoped>
	.modal-search-close-btn {
		position: relative;
	}
	.show-search-modal {
		display: block !important;
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
	.mobile-search-container {
		padding: 16px 16px 32px 16px !important;
	}
	.search-result-count {
		padding: 0px 16px 24px 0px;
	}
	.product-card-image img {
		object-fit: cover;
		-o-object-fit: cover;
	}
</style>