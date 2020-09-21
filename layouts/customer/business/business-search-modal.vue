<template>
  <div class="modal-container mobile-search-modal-container" id="BusinessMobileSearchModal">
	<div class="modal-dialog-box">
		<div class="card">
		<!-- close search modal -->
		<button class="modal-search-close-btn" data-target="BusinessMobileSearchModal" data-dismiss="modal">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.512 18.341">
			<use xlink:href="~/assets/customer/image/all-svg.svg#modalArrowLeft"></use>
			</svg>
		</button>
		<!-- Beginning of search input area -->
		<div class="modal-search-input-area">
			<div class="position-relative">
				<div class="input-container" v-show="isSearchReady">
					<input type="text" name="businessSearchProduct" id="BusinessMobileSearchInput" class="search-form grey-bg-color" :placeholder="`Search for products in ${businessName}`" autocomplete="off" v-model="searchKeyword">
					<button class="clear-form-btn">
					<input type="checkbox" class="dropdownCheckBox" data-clear-form="clear" data-target="BusinessMobileSearchInput">
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
	
			<!-- beginning of product listing -->
			<div class="tab-content-area is-active" id="productResultTab">
			
			<div class="search-result-count"  v-show="doneSearching && !pageError">{{resultCount}} results for <span>{{searchKeyword}}</span></div>

			<div class="search-result-count"  v-show="!doneSearching && searchKeyword.length >= 1">Searching for <span>{{searchKeyword}}</span></div>

			<!-- business product listing -->
			<div class="content-loading" v-show="isLoading">
				<div class="loader-action"><span class="loader"></span></div>    
			</div>


			<div  v-show="resultCount > 0">

				<div class="row">
										
					<n-link :to="`/p/${x.productId}`" class="col-xs-6 col-sm-6 col-md-4 col-lg-3" v-for="(x, index) in returnProductList" :key="index">
						<div class="product-card">
							<div class="product-card-image">
								<img :data-src="x.image"  :alt="`${x.productName}'s image`" v-lazy-load>
							</div>
							<div class="product-card-details">
								<div class="product-name">
									{{x.productName}}
								</div>
								<div class="product-price">₦ {{x.price}}</div>
							</div>
						</div>
					</n-link>

					
				</div>

				<div class="load-more-action">
					<button class="btn btn-white" @click="loadMoreSearchResults(page = page + 1, $event)" v-show="!calculatedLoad && resultCount > 12">
						Load more results
						<div class="loader-action"><span class="loader"></span></div>    
					</button>
				</div>
				
				</div>
			</div>
			<!-- end of product listing -->

			<!-- when no product is found, show this -->
			<div class="link-error-area" v-show="noProduct == 1">
				<img src="~/static/images/404.svg" alt="">
				<div class="error-cause" v-html="reasonForError">{{reasonForError}}</div>
			</div>
			<!-- end of error area -->

			<!-- when no string has been typed into search box -->
			<div class="link-error-area" v-show="searchKeyword.length == 0">
				<img src="~/static/images/404.svg" alt="">
				<div class="error-cause">Search for products in <span class="indicator">{{businessName}}</span></div>
			</div>
			<!-- end of error area -->

		</div>
		<!-- end of mobile search container -->
	
	</div>
</div>
</template>

<script>

import { 
	CUSTOMER_SEARCH_PRODUCT_IN_BUSINESS
} from '~/graphql/product'

export default {
	name: "BUSINESSSEARCHMODAL",
	data() {
		return {
			businessId: "",
			businessName: "",
			logo: "",
			isSearchReady: 0,
			isLoading: 0,
			noProduct: 0,
			productList: [],
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
		returnProductList () {
			return this.productList
		}
	},
	created() {
		if (process.browser) {
			this.$nuxt.$on('searchData', (data) => {
				this.businessName = data.name
				this.businessId = data.businessId
				this.showSearchForm()
				this.logo = data.logo
			})
		}
	},
	watch: {
		searchKeyword: async function () {
			if (this.searchKeyword.length <= 1) {
				return
			}

			this.resultCount = 0;
			this.isLoading = 1
			this.doneSearching = 0

            // clear previous time out
            this.clearTimeOut(this.timeoutHandler)

            this.timeoutHandler = setTimeout( async() => {
				this.page = 1
				await this.searchForProduct(this.page)
				this.doneSearching = 1
				this.isLoading = 0

			}, 500)
		}
	},
	methods: {
		showSearchForm: function () {
			this.isSearchReady = 1
		},
		searchForProduct: async function (page) {
			
			let variables = {
				businessId: this.businessId,
				keyword: this.searchKeyword.trim(),
				page: page
			}

			let query = await this.$performGraphQlQuery(this.$apollo, CUSTOMER_SEARCH_PRODUCT_IN_BUSINESS, variables, {});

			if (query.error) {
				this.reasonForError = query.message;
				this.pageError = true
				return
			}

			let result = query.result.data.BusinessSearchProductByCustomer;

			if (result.success == false) {
				this.reasonForError = result.message;
				this.pageError = true
				return
			}

			if (result.resultCount == 0) {
				this.productList = []
				this.resultCount = result.resultCount
			}

			if (result.resultCount > 0) {
				this.resultCount = this.$numberNotation(result.resultCount)

				for (let y of result.products) {
					this.productList.push({
						productName: y.name,
						productId: y.id,
						price: this.$numberNotation(y.price),
						primaryImage: this.$formatProductImageUrl(this.businessId, y.primaryImage, "thumbnail"),
					})
				}
			}

			this.pageError = false

		},
		loadMoreSearchResults: async function (page, e) {
			await this.searchForProduct(page)
			if ((page * 12 ) >= this.resultCount) {
				this.calculatedLoad = 1
			}
		},
        clearTimeOut: function (timerOut) {
            clearTimeout(timerOut)
        },
	},
    destroyed () {
        clearTimeout(this.timeoutHandler);
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
	.mobile-search-container {
		padding: 16px 16px 32px 16px !important;
	}
	.search-result-count {
		padding: 0px 16px 24px 0px;
	}
</style>