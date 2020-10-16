<template>
  <div class="customer">
    <div class="body-container grey-bg-color">

      <!-- beginning of navigation container -->
      <div class="nav-container">

        <MOBILESEARCH></MOBILESEARCH>
        <DESKTOPNAVGATION/>
        <nuxt />

        <MOBILENAVIGATION />
        <nuxt />
        
      </div>

      <div class="content-container-second">
        <div class="desktop-search-page-container">

			<!-- search result count  -->
            <div class="search-preview-area card">
                <div class="search-input-preview">Search result - <span>Google pixel</span></div>
                <div class="search-result-count">15,450 results for <span>shirt</span></div>
				<!-- tab header -->
                <div class="d-flex-center">
                    <div class="chip-tabs" id="tabList">
                        <a href="#" class="chip-tab-item is-active" id="tabLink" data-tab="desktopSearchProductResultTab">Products (20+)</a>
                        <a href="#" class="chip-tab-item" id="tabLink" data-tab="desktopSearchCompanyResultTab">Business (20+)</a>
                    </div>
				</div>  
				<!-- end of tab header -->
			</div>
			<!-- end of search result count -->

            <div class="desktop-search-listing">

              <div class="row">
				<!-- search filter -->
                <div class="col-md-3">
                  <div class="card desktop-filter-container">
                    <div class="header">Filter search result</div>
                  
						<div class="accordion-chip-card">
							<a href="#" class="accord-chip-action">
								<input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="locationDesktopFilter" checked="">
								<div class="accord-chip-name">
									<span>Location</span>
								</div>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.05 13.616">
									<use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
								</svg>
			
								</a>
								<div class="accordion-address-content accordion-content showEffect" id="locationDesktopFilter">
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
						</div>

						<div class="accordion-chip-card">
							<a href="#" class="accord-chip-action">
								<input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="priceDesktopFilter">
								<div class="accord-chip-name">
									<span>Price</span>
								</div>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.05 13.616">
									<use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
								</svg>
			
							</a>

							<div class="accordion-address-content accordion-content" id="priceDesktopFilter">
								<div class="filter-header">Choose your price range by moving the slider</div>
									<div class="slidecontainer multi-range">
									
									<input type="range" min="1" max="100000" value="7000" class="" id="lowerRange" data-target="minDesktopPrice" data-filter-range="true">
									<input type="range" min="100001" max="1000000" value="930000" class="" id="upperRange" data-target="maxDesktopPrice" data-filter-range="true">

									</div>

									<div class="d-flex-between mg-top-64">
									<div class="flex-column-center">
										<span>Min</span>
										<div><span>₦</span> <span id="minDesktopPrice">10,903</span></div>
									</div>
									<div class="flex-column-center">
										<span>Max</span>
										<div><span>₦</span> <span id="maxDesktopPrice">930,000</span></div>
									</div>
									</div>


							</div>
						</div>

						<div class="accordion-chip-card">
							<a href="#" class="accord-chip-action">
								<input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="ratingDesktopFilter">
								<div class="accord-chip-name">
									<span>Rating</span>
								</div>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.05 13.616">
									<use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
								</svg>
			
							</a>
							<div class="accordion-address-content accordion-content" id="ratingDesktopFilter">
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
						</div>

						<div class="accordion-chip-card">
								<a href="#" class="accord-chip-action">
									<input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="colorDesktopFilter">
									<div class="accord-chip-name">
										<span>Color</span>
									</div>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.05 13.616">
										<use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
									</svg>

								</a>
								<div class="accordion-address-content accordion-content" id="colorDesktopFilter">
								<div class="filter-header">Choose the color you want</div>
								<div class="color-picker-form">
									<input type="color" value="#ffffff" class="btn color-picker" placeholder="pick a color">
									<span class="color-picker-placeholder">Tap to select colors</span>
								</div>
								</div>
						</div>

						<div class="accordion-chip-card">
							<a href="#" class="accord-chip-action">
								<input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="sizeDesktopFilter">
								<div class="accord-chip-name">
									<span>Size</span>
								</div>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.05 13.616">
									<use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
								</svg>

							</a>
							<div class="accordion-address-content accordion-content " id="sizeDesktopFilter">
								<div class="filter-header">What size do you want? Move the slider to choose size</div>
								<div class="slidecontainer">
								<input type="range" min="1" max="100" value="20" class="slider-range" id="filterSizeRange" data-target="desktopSizeOutputContainer" data-range="true">
								</div>
								<div class="rangeSliderOutput">
								Size: <span id="desktopSizeOutputContainer">20</span>
								</div>
							</div>
						</div>

						<div class="accordion-chip-card">
							<a href="#" class="accord-chip-action">
								<input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="brandDesktopFilter">
								<div class="accord-chip-name">
									<span>Brand</span>
								</div>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.05 13.616">
									<use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
								</svg>

							</a>
							<div class="accordion-address-content accordion-content" id="brandDesktopFilter">
							<div class="filter-header">What brand do you want?</div>
							<div class="input-container d-flex filter-location-search mg-bottom-16">
								<input type="text" name="" id="brandDesktopFilterInput" class="search-form grey-bg-color" placeholder="Search for a brand">
								<button class="clear-form-btn">
								<input type="checkbox" class="dropdownCheckBox" data-clear-form="clear" data-target="brandDesktopFilterInput">
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
				<!-- end of search filter -->

				<!-- Search result content -->
                <div class="col-xs-6 col-sm-6 col-md-9">
                  <div id="tabContent">
					<!-- search product result -->
                    <div class="tab-content-area is-active" id="desktopSearchProductResultTab">
                      <div class="row mg-bottom-16">
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                          <div class="product-card search-product-details">
                              <a href="#" class="product-card-image">
                                  <img src="~/assets/customer/image/zenfone.jpg" alt="">
                              </a>
                              <div class="product-card-details">
                                  <div class="product-name">
                                      Asus Zenfone
                                  </div>
                                  <div class="product-price">₦ 1,200</div>
                                  <div class="product-location">Apamini, Woji</div>
                                  <button class="btn btn-primary btn-add-to-cart">Add to cart</button>
                              </div>
                          </div>
                        </div>
        
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                          <div class="product-card search-product-details">
                              <a href="#" class="product-card-image">
                                  <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                              </a>
                              <div class="product-card-details">
                                  <div class="product-name">
                                      Asus Zenfone
                                  </div>
                                  <div class="product-price">₦ 1,200</div>
                                  <div class="product-location">Apamini, Woji</div>
                                  <button class="btn btn-primary btn-add-to-cart">Add to cart</button>
                              </div>
                          </div>
                        </div>
        
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                          <div class="product-card search-product-details">
                              <a href="#" class="product-card-image">
                                  <img src="~/assets/customer/image/mercy.jpg" alt="">
                              </a>
                              <div class="product-card-details">
                                  <div class="product-name">
                                      Asus Zenfone asus zenfone
                                  </div>
                                  <div class="product-price">₦ 1,200</div>
                                  <div class="product-location">Apamini, Woji</div>
                                  <button class="btn btn-primary btn-add-to-cart">Add to cart</button>
                              </div>
                          </div>
                        </div>
        
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                          <div class="product-card search-product-details">
                              <a href="#" class="product-card-image">
                                  <img src="~/assets/customer/image/zenfone.jpg" alt="">
                              </a>
                              <div class="product-card-details">
                                  <div class="product-name">
                                      Asus Zenfone
                                  </div>
                                  <div class="product-price">₦ 1,200</div>
                                  <div class="product-location">Apamini, Woji</div>
                                  <button class="btn btn-primary btn-add-to-cart">Add to cart</button>
                              </div>
                          </div>
                        </div>
        
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                          <div class="product-card search-product-details">
                              <a href="#" class="product-card-image">
                                  <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                              </a>
                              <div class="product-card-details">
                                  <div class="product-name">
                                      Asus Zenfone
                                  </div>
                                  <div class="product-price">₦ 1,200</div>
                                  <div class="product-location">Apamini, Woji</div>
                                  <button class="btn btn-primary btn-add-to-cart">Add to cart</button>
                              </div>
                          </div>
                        </div>
        
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                          <div class="product-card search-product-details">
                              <a href="#" class="product-card-image">
                                  <img src="~/assets/customer/image/mercy.jpg" alt="">
                              </a>
                              <div class="product-card-details">
                                  <div class="product-name">
                                      Asus Zenfone asus zenfone
                                  </div>
                                  <div class="product-price">₦ 1,200</div>
                                  <div class="product-location">Apamini, Woji</div>
                                  <button class="btn btn-primary btn-add-to-cart">Add to cart</button>
                              </div>
                          </div>
                        </div>
        
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                          <div class="product-card search-product-details">
                              <a href="#" class="product-card-image">
                                  <img src="~/assets/customer/image/zenfone.jpg" alt="">
                              </a>
                              <div class="product-card-details">
                                  <div class="product-name">
                                      Asus Zenfone
                                  </div>
                                  <div class="product-price">₦ 1,200</div>
                                  <div class="product-location">Apamini, Woji</div>
                                  <button class="btn btn-primary btn-add-to-cart">Add to cart</button>
                              </div>
                          </div>
                        </div>
        
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                          <div class="product-card search-product-details">
                              <a href="#" class="product-card-image">
                                  <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                              </a>
                              <div class="product-card-details">
                                  <div class="product-name">
                                      Asus Zenfone
                                  </div>
                                  <div class="product-price">₦ 1,200</div>
                                  <div class="product-location">Apamini, Woji</div>
                                  <button class="btn btn-primary btn-add-to-cart">Add to cart</button>
                              </div>
                          </div>
                        </div>
        
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                          <div class="product-card search-product-details">
                              <a href="#" class="product-card-image">
                                  <img src="~/assets/customer/image/mercy.jpg" alt="">
                              </a>
                              <div class="product-card-details">
                                  <div class="product-name">
                                      Asus Zenfone asus zenfone
                                  </div>
                                  <div class="product-price">₦ 1,200</div>
                                  <div class="product-location">Apamini, Woji</div>
                                  <button class="btn btn-primary btn-add-to-cart">Add to cart</button>
                              </div>
                          </div>
                        </div>
        
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                          <div class="product-card search-product-details">
                              <a href="#" class="product-card-image">
                                  <img src="~/assets/customer/image/zenfone.jpg" alt="">
                              </a>
                              <div class="product-card-details">
                                  <div class="product-name">
                                      Asus Zenfone
                                  </div>
                                  <div class="product-price">₦ 1,200</div>
                                  <div class="product-location">Apamini, Woji</div>
                                  <button class="btn btn-primary btn-add-to-cart">Add to cart</button>
                              </div>
                          </div>
                        </div>
        
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                          <div class="product-card search-product-details">
                              <a href="#" class="product-card-image">
                                  <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                              </a>
                              <div class="product-card-details">
                                  <div class="product-name">
                                      Asus Zenfone
                                  </div>
                                  <div class="product-price">₦ 1,200</div>
                                  <div class="product-location">Apamini, Woji</div>
                                  <button class="btn btn-primary btn-add-to-cart">Add to cart</button>
                              </div>
                          </div>
                        </div>
        
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                          <div class="product-card search-product-details">
                              <a href="#" class="product-card-image">
                                  <img src="~/assets/customer/image/mercy.jpg" alt="">
                              </a>
                              <div class="product-card-details">
                                  <div class="product-name">
                                      Asus Zenfone asus zenfone
                                  </div>
                                  <div class="product-price">₦ 1,200</div>
                                  <div class="product-location">Apamini, Woji</div>
                                  <button class="btn btn-primary btn-add-to-cart">Add to cart</button>
                              </div>
                          </div>
                        </div>
        
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                          <div class="product-card search-product-details">
                              <a href="#" class="product-card-image">
                                  <img src="~/assets/customer/image/zenfone.jpg" alt="">
                              </a>
                              <div class="product-card-details">
                                  <div class="product-name">
                                      Asus Zenfone
                                  </div>
                                  <div class="product-price">₦ 1,200</div>
                                  <div class="product-location">Apamini, Woji</div>
                                  <button class="btn btn-primary btn-add-to-cart">Add to cart</button>
                              </div>
                          </div>
                        </div>
        
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                          <div class="product-card search-product-details">
                              <a href="#" class="product-card-image">
                                  <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                              </a>
                              <div class="product-card-details">
                                  <div class="product-name">
                                      Asus Zenfone
                                  </div>
                                  <div class="product-price">₦ 1,200</div>
                                  <div class="product-location">Apamini, Woji</div>
                                  <button class="btn btn-primary btn-add-to-cart">Add to cart</button>
                              </div>
                          </div>
                        </div>
        
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                          <div class="product-card search-product-details">
                              <a href="#" class="product-card-image">
                                  <img src="~/assets/customer/image/mercy.jpg" alt="">
                              </a>
                              <div class="product-card-details">
                                  <div class="product-name">
                                      Asus Zenfone asus zenfone
                                  </div>
                                  <div class="product-price">₦ 1,200</div>
                                  <div class="product-location">Apamini, Woji</div>
                                  <button class="btn btn-primary btn-add-to-cart">Add to cart</button>
                              </div>
                          </div>
                        </div>
        
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                          <div class="product-card search-product-details">
                              <a href="#" class="product-card-image">
                                  <img src="~/assets/customer/image/zenfone.jpg" alt="">
                              </a>
                              <div class="product-card-details">
                                  <div class="product-name">
                                      Asus Zenfone
                                  </div>
                                  <div class="product-price">₦ 1,200</div>
                                  <div class="product-location">Apamini, Woji</div>
                                  <button class="btn btn-primary btn-add-to-cart">Add to cart</button>
                              </div>
                          </div>
                        </div>
        
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                          <div class="product-card search-product-details">
                              <a href="#" class="product-card-image">
                                  <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                              </a>
                              <div class="product-card-details">
                                  <div class="product-name">
                                      Asus Zenfone
                                  </div>
                                  <div class="product-price">₦ 1,200</div>
                                  <div class="product-location">Apamini, Woji</div>
                                  <button class="btn btn-primary btn-add-to-cart">Add to cart</button>
                              </div>
                          </div>
                        </div>
        
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                          <div class="product-card search-product-details">
                              <a href="#" class="product-card-image">
                                  <img src="~/assets/customer/image/mercy.jpg" alt="">
                              </a>
                              <div class="product-card-details">
                                  <div class="product-name">
                                      Asus Zenfone asus zenfone
                                  </div>
                                  <div class="product-price">₦ 1,200</div>
                                  <div class="product-location">Apamini, Woji</div>
                                  <button class="btn btn-primary btn-add-to-cart">Add to cart</button>
                              </div>
                          </div>
                        </div>
        
                      </div>
                      <div class="d-flex-center"><button class="btn btn-white">Load more results</button></div>
					</div>
					<!-- end of search product result -->
					
					<!-- business search result -->
                    <div class="tab-content-area" id="desktopSearchCompanyResultTab">
                      <div class="row mg-bottom-16">
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                          <a href="#" class="card street-biz-card desktop-search-biz-card">
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
        
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                          <a href="#" class="card street-biz-card search-biz-card desktop-search-biz-card">
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
        
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                          <a href="#" class="card street-biz-card search-biz-card desktop-search-biz-card">
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
        
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                          <a href="#" class="card street-biz-card search-biz-card desktop-search-biz-card">
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
        
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                          <a href="#" class="card street-biz-card search-biz-card desktop-search-biz-card">
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
        
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                          <a href="#" class="card street-biz-card search-biz-card desktop-search-biz-card">
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
        
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                          <a href="#" class="card street-biz-card search-biz-card desktop-search-biz-card">
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
        
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                          <a href="#" class="card street-biz-card search-biz-card desktop-search-biz-card">
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
                      <div class="d-flex-center"><button class="btn btn-white">Load more results</button></div>
					</div>
					<!-- end business search result -->
  
                  </div>
				</div>
				<!-- end of search result content -->

              </div>
              
            </div>

        </div>
    </div>
      <!-- end of content container -->

      <!-- footer area -->

      <BOTTOMADS/>

      <nuxt />

      <CUSTOMERFOOTER />
      <nuxt />

    </div>
  </div>
</template>

<script>
import MOBILENAVIGATION from '~/layouts/customer/mobile-navigation.vue'
import DESKTOPNAVGATION from '~/layouts/customer/desktop-navigation.vue'
import MOBILESEARCH from '~/layouts/customer/mobile-search.vue'
import BOTTOMADS from '~/layouts/customer/buttom-ads.vue'
import CUSTOMERFOOTER from '~/layouts/customer/customer-footer.vue'

export default {
    components: {
      DESKTOPNAVGATION, MOBILENAVIGATION, MOBILESEARCH, BOTTOMADS, CUSTOMERFOOTER
    }
}
</script>