<template>
  		<!-- mobile search modal -->
		<div class="modal-container mobile-search-modal-container" id="mobileSearchModal" v-bind:class="{'show-search-modal': showMobileSearch == 1}">
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
						<input type="text" name="" id="mobileSearchInput" class="search-form grey-bg-color" placeholder="Search for a product or business">
						<button class="clear-form-btn">
							<input type="checkbox" class="dropdownCheckBox" data-clear-form="clear" data-target="mobileSearchInput">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<use xlink:href="~/assets/customer/image/all-svg.svg#timesCircle"></use>
							</svg>
						</button>
						</div>
						<div class="recent-search-list-container">
						<a href="#">Infinix hot 7 <span>- 57 results</span></a>
						<a href="#">Infinix hot 7 <span>- 57 results</span></a>
						<a href="#">Infinix hot 7 <span>- 57 results</span></a>
						<a href="#">Infinix hot 7 <span>- 57 results</span></a>
						<a href="#">Infinix hot 7 <span>- 57 results</span></a>
						</div>
					</div>
					</div>
					<!-- end of search input area -->
				</div>

				<!-- beginning of mobile search container -->
				<div class="mobile-search-container">
					<!-- beginning of tab nav -->
					<div class="d-flex-between">
					<div class="chip-tabs" id="tabList">
					<a href="#" class="chip-tab-item is-active" id="tabLink" data-tab="productResultTab">Products (20+)</a>
					<a href="#" class="chip-tab-item" id="tabLink" data-tab="companyResultTab">Business (20+)</a>
					</div>
					<button id="tabLink" class="search-filter-action">
						<input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="mobileSearchFilter">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<use xlink:href="~/assets/customer/image/all-svg.svg#filter"></use>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
						<use xlink:href="~/assets/customer/image/all-svg.svg#times"></use>
						</svg>
					</button>
					</div>
					<!-- end of tab nav -->

					<!-- beginning of tab content -->
					<div id="tabContent">

					<!-- beginning of product listing -->
					<div class="tab-content-area is-active" id="productResultTab">
						
						<div class="search-result-count">15,450 results for <span>shirt</span></div>

						<div class="row">
												
						<a href="#" class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
							<div class="product-card">
								<div class="product-card-image">
									<img src="~/assets/customer/image/zenfone.jpg" alt="">
								</div>
								<div class="product-card-details">
									<div class="product-name">
										Asus Zenfone
									</div>
									<div class="product-price">₦ 1,200</div>
									<div class="search-product-location">Apamini, Woji</div>
								</div>
							</div>
						</a>

						<a href="#" class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
							<div class="product-card">
								<div class="product-card-image">
									<img src="~/assets/customer/image/zenfone.jpg" alt="">
								</div>
								<div class="product-card-details">
									<div class="product-name">
										Asus Zenfone
									</div>
									<div class="product-price">₦ 1,200</div>
									<div class="search-product-location">Apamini, Woji</div>
								</div>
							</div>
						</a>

						<a href="#" class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
							<div class="product-card">
								<div class="product-card-image">
									<img src="~/assets/customer/image/zenfone.jpg" alt="">
								</div>
								<div class="product-card-details">
									<div class="product-name">
										Asus Zenfone
									</div>
									<div class="product-price">₦ 1,200</div>
									<div class="search-product-location">Apamini, Woji</div>
								</div>
							</div>
						</a>

						<a href="#" class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
							<div class="product-card">
								<div class="product-card-image">
									<img src="~/assets/customer/image/zenfone.jpg" alt="">
								</div>
								<div class="product-card-details">
									<div class="product-name">
										Asus Zenfone
									</div>
									<div class="product-price">₦ 1,200</div>
									<div class="search-product-location">Apamini, Woji</div>
								</div>
							</div>
						</a>

						<a href="#" class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
							<div class="product-card">
								<div class="product-card-image">
									<img src="~/assets/customer/image/zenfone.jpg" alt="">
								</div>
								<div class="product-card-details">
									<div class="product-name">
										Asus Zenfone
									</div>
									<div class="product-price">₦ 1,200</div>
									<div class="search-product-location">Apamini, Woji</div>
								</div>
							</div>
						</a>

						<a href="#" class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
							<div class="product-card">
								<div class="product-card-image">
									<img src="~/assets/customer/image/zenfone.jpg" alt="">
								</div>
								<div class="product-card-details">
									<div class="product-name">
										Asus Zenfone
									</div>
									<div class="product-price">₦ 1,200</div>
									<div class="search-product-location">Apamini, Woji</div>
								</div>
							</div>
						</a>

						<a href="#" class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
							<div class="product-card">
								<div class="product-card-image">
									<img src="~/assets/customer/image/zenfone.jpg" alt="">
								</div>
								<div class="product-card-details">
									<div class="product-name">
										Asus Zenfone
									</div>
									<div class="product-price">₦ 1,200</div>
									<div class="search-product-location">Apamini, Woji</div>
								</div>
							</div>
						</a>

						<a href="#" class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
							<div class="product-card">
								<div class="product-card-image">
									<img src="~/assets/customer/image/zenfone.jpg" alt="">
								</div>
								<div class="product-card-details">
									<div class="product-name">
										Asus Zenfone
									</div>
									<div class="product-price">₦ 1,200</div>
									<div class="search-product-location">Apamini, Woji</div>
								</div>
							</div>
						</a>

						
						</div>
						<div class="load-more-action"><button class="btn btn-white">Load more</button></div>
					</div>
					<!-- end of product listing -->

					<!-- beginning of business listing -->
					<div class="tab-content-area" id="companyResultTab">
						<div class="search-result-count">15,450 results for <span>shirt Nigeria limited</span></div>
						
						<div class="row">
							<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
							<a href="#" class="card street-biz-card search-biz-card">
								<div class="street-biz-card-flex">
								<div class="businesss-card-img">
									<img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
								</div>
								<div>
									<div class="business-name">Ihuoma fashion home international limited</div>
									<div class="categories">15 mini-Woji street, woji, Port Harcourt, Rivers state, Nigeria</div>
								</div>
								</div>
							</a>
							</div>

							<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
							<a href="#" class="card street-biz-card search-biz-card">
								<div class="street-biz-card-flex">
								<div class="businesss-card-img">
									<img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
								</div>
								<div>
									<div class="business-name">Ihuoma fashion home international limited</div>
									<div class="categories">15 mini-Woji street, woji, Port Harcourt, Rivers state, Nigeria</div>
								</div>
								</div>
							</a>
							</div>

							<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
							<a href="#" class="card street-biz-card search-biz-card">
								<div class="street-biz-card-flex">
								<div class="businesss-card-img">
									<img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
								</div>
								<div>
									<div class="business-name">Ihuoma fashion home international limited</div>
									<div class="categories">15 mini-Woji street, woji, Port Harcourt, Rivers state, Nigeria</div>
								</div>
								</div>
							</a>
							</div>

							<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
							<a href="#" class="card street-biz-card search-biz-card">
								<div class="street-biz-card-flex">
								<div class="businesss-card-img">
									<img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
								</div>
								<div>
									<div class="business-name">Ihuoma fashion home international limited</div>
									<div class="categories">15 mini-Woji street, woji, Port Harcourt, Rivers state, Nigeria</div>
								</div>
								</div>
							</a>
							</div>

							<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
							<a href="#" class="card street-biz-card search-biz-card">
								<div class="street-biz-card-flex">
								<div class="businesss-card-img">
									<img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
								</div>
								<div>
									<div class="business-name">Ihuoma fashion home international limited</div>
									<div class="categories">15 mini-Woji street, woji, Port Harcourt, Rivers state, Nigeria</div>
								</div>
								</div>
							</a>
							</div>

							<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
							<a href="#" class="card street-biz-card search-biz-card">
								<div class="street-biz-card-flex">
								<div class="businesss-card-img">
									<img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
								</div>
								<div>
									<div class="business-name">Ihuoma fashion home international limited</div>
									<div class="categories">15 mini-Woji street, woji, Port Harcourt, Rivers state, Nigeria</div>
								</div>
								</div>
							</a>
							</div>

							<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
							<a href="#" class="card street-biz-card search-biz-card">
								<div class="street-biz-card-flex">
								<div class="businesss-card-img">
									<img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
								</div>
								<div>
									<div class="business-name">Ihuoma fashion home international limited</div>
									<div class="categories">15 mini-Woji street, woji, Port Harcourt, Rivers state, Nigeria</div>
								</div>
								</div>
							</a>
							</div>

							<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
							<a href="#" class="card street-biz-card search-biz-card">
								<div class="street-biz-card-flex">
								<div class="businesss-card-img">
									<img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
								</div>
								<div>
									<div class="business-name">Ihuoma fashion home international limited</div>
									<div class="categories">15 mini-Woji street, woji, Port Harcourt, Rivers state, Nigeria</div>
								</div>
								</div>
							</a>
							</div>
						</div>
						<div class="load-more-action"><button class="btn btn-white">Load more</button></div>
					</div>
					<!-- end of business listing -->

					<!-- beginning of product filter -->
					<div class="mobile-search-filter" id="mobileSearchFilter">
						<div class="d-flex-center mg-bottom-16">
						<a href="#" class="chip-tab-item mg-right-8">Reset filter</a>
						<a href="#" class="chip-tab-item is-active" data-single-tab="singleTab" data-target="mobileSearchFilter">Apply filter</a>
						</div>

						<div class="">
						<div class="fiter-action-container" id="FilterTabList">
							<a href="#" class="filter-action is-active" id="filterTabLink" data-tab="locationFilter">Location</a>
							<a href="#" class="filter-action" id="filterTabLink" data-tab="priceFilter">Price</a>
							<a href="#" class="filter-action" id="filterTabLink" data-tab="ratingFilter">Rating</a>
							<a href="#" class="filter-action" id="filterTabLink" data-tab="colorFilter">Color</a>
							<a href="#" class="filter-action" id="filterTabLink" data-tab="sizeFilter">Size</a>
							<a href="#" class="filter-action" id="filterTabLink" data-tab="brandFilter">Brand</a>
						</div>

						<div id="filterTabContent">

							<div class="filter-tab-content-area is-active" id="locationFilter">
							<div class="filter-header">Where do you want to buy from?</div>

							<div class="input-container d-flex filter-location-search">
								<input type="text" name="" id="filterLocationInput" class="search-form grey-bg-color" placeholder="Type name of community or street">
								<button class="clear-form-btn">
								<input type="checkbox" class="dropdownCheckBox" data-clear-form="clear" data-target="filterLocationInput">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
									<use xlink:href="~/assets/customer/image/all-svg.svg#timesCircle"></use>
								</svg>
								</button>
							</div>


							</div>
							<div class="filter-tab-content-area" id="priceFilter">
							<div class="filter-header">Choose your price range by moving the slider</div>
							<div class="slidecontainer multi-range">
								
								<input type="range" min="1" max="100000" value="7000" class="" id="lowerRange" data-target="minPrice" data-filter-range="true">
								<input type="range" min="100001" max="1000000" value="930000" class="" id="upperRange" data-target="maxPrice" data-filter-range="true">

							</div>

							<div class="d-flex-between mg-top-64">
									<div class="flex-column-center">
										<span>Min</span>
										<div>
											<span>₦</span> <span id="minPrice">7,000</span>
										</div>
									</div>
									<div class="flex-column-center">
										<span>Max</span>
										<div>
											<span>₦</span> <span id="maxPrice">930,000</span>
										</div>
								</div>
							</div>

							</div>
							<div class="filter-tab-content-area" id="ratingFilter">
							<div class="filter-header">Filter by rating. Choose business rating</div>
							<div class="review-action-container filter-review-area">
								<div class="review-star-action">
									<button class="btn btn-light-grey">
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
											<use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
										</svg>
									</button>
									<div class="review-type">One star</div>
								</div>

								<div class="review-star-action">
									<button class="btn btn-light-grey">
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
											<use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
										</svg>
									</button>
									<div class="review-type">Two star</div>
								</div>

								<div class="review-star-action">
									<button class="btn btn-light-grey">
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
											<use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
										</svg>
									</button>
									<div class="review-type">Three star</div>
								</div>

								<div class="review-star-action">
									<button class="btn btn-light-grey">
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
											<use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
										</svg>
									</button>
									<div class="review-type">Four star</div>
								</div>

								<div class="review-star-action">
									<button class="btn btn-light-grey">
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
											<use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
										</svg>
									</button>
									<div class="review-type">Five star</div>
								</div>

							</div>
							</div>
							<div class="filter-tab-content-area" id="colorFilter">
							<div class="filter-header">Choose the color you want</div>
							<div class="color-picker-form">
								<input type="color" value="#ffffff" class="btn color-picker" placeholder="pick a color">
								<span class="color-picker-placeholder">Tap to select colors</span>
							</div>
							</div>
							<div class="filter-tab-content-area" id="sizeFilter">
							<div class="filter-header">What size do you want? Move the slider to choose size</div>
							<div class="slidecontainer">
								<input type="range" min="1" max="100" value="20" class="slider-range" id="filterSizeRange" data-target="sizeOutputContainer" data-range="true">
							</div>
							<div class="rangeSliderOutput">
								Size: <span id="sizeOutputContainer">20</span>
							</div>
							</div>
							<div class="filter-tab-content-area" id="brandFilter">
							<div class="filter-header">What brand do you want?</div>

							<div class="input-container d-flex filter-location-search mg-bottom-16">
								<input type="text" name="" id="brandFilterInput" class="search-form grey-bg-color" placeholder="Search for a brand">
								<button class="clear-form-btn">
								<input type="checkbox" class="dropdownCheckBox" data-clear-form="clear" data-target="brandFilterInput">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
									<use xlink:href="~/assets/customer/image/all-svg.svg#timesCircle"></use>
								</svg>
								</button>
							</div>

							<div class="filter-header">Select a brand</div>
							<div class="brand-filter-listing">
								<div class="filter-brand-card">
								<img src="~/assets/customer/image/asus logo@2x.png" alt="">
								<span>Asus</span>
								</div>
								<div class="filter-brand-card">
								<img src="~/assets/customer/image/asus logo@2x.png" alt="">
								<span>Asus</span>
								</div>
								<div class="filter-brand-card">
								<img src="~/assets/customer/image/asus logo@2x.png" alt="">
								<span>Techno</span>
								</div>
								<div class="filter-brand-card">
								<img src="~/assets/customer/image/asus logo@2x.png" alt="">
								<span>Zara</span>
								</div>
								<div class="filter-brand-card">
								<img src="~/assets/customer/image/asus logo@2x.png" alt="">
								<span>Asus</span>
								</div>
								<div class="filter-brand-card">
								<img src="~/assets/customer/image/asus logo@2x.png" alt="">
								<span>Asus</span>
								</div>
								<div class="filter-brand-card">
								<img src="~/assets/customer/image/asus logo@2x.png" alt="">
								<span>Asus</span>
								</div>
								<div class="filter-brand-card">
								<img src="~/assets/customer/image/asus logo@2x.png" alt="">
								<span>Asus</span>
								</div>
								<div class="filter-brand-card">
								<img src="~/assets/customer/image/asus logo@2x.png" alt="">
								<span>Asus</span>
								</div>
								<div class="filter-brand-card">
								<img src="~/assets/customer/image/asus logo@2x.png" alt="">
								<span>Asus</span>
								</div>
							</div>

							</div>
						</div>
						</div>
					</div>
					<!-- end of product filter -->

					</div>
					<!-- end of tab content -->

				</div>
				<!-- end of mobile search container -->

			</div>
		</div>
</template>

<script>
export default {
	name: "MOBILESEARCH",
    data: function () {
      return {
        screenWidth: "",
        showMobileSearch: 0
      }
    },
    computed: {
        handleResize() {
            this.screenWidth = window.innerWidth;
        },
	},
	methods: {
		removeNagitaionBar: function () {
			document.querySelector("body").classList.remove("overflow-hidden");
			this.$router.go(-1)
		}
	},
    created () {
      if (process.client) {
          window.addEventListener('resize', this.handleResize);

          if (this.screenWidth < 1024) {
              this.showMobileSearch = 1
			  document.querySelector("body").classList.remove("overflow-hidden");
          } else {
            this.showMobileSearch = 0
			document.querySelector("body").classList.remove("overflow-hidden");
          }



      }
    }
}
</script>

<style>
	.modal-search-close-btn {
		position: relative;
	}
	.show-search-modal {
		display: block !important;
	}
</style>