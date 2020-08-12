<template>
  <div class="customer">
    <div class="body-container grey-bg-color">

      <!-- beginning of navigation container -->
      <div class="nav-container">
        <MOBILESEARCH></MOBILESEARCH>
        <DESKTOPNAVGATION></DESKTOPNAVGATION>
        <MOBILENAVIGATION></MOBILENAVIGATION>
      </div>

        <!-- pageLoader -->
        <PAGELOADER v-if="pageLoader"></PAGELOADER>

        <div class="content-container">
            <!-- header area -->
            <div class="section-header">
            <h4>Order details for 345345</h4>
            </div>
            
            <!-- beginning of cart listing -->
            <div class="cart-listing-area mg-top-24 ">

                <div class="order-details-container">
                    <div class="order-details-header">
                        <div class="order-details-business-info">
                            <div class="order-details-logo"><img src="~/assets/customer/image/asus logo@2x.png" alt=""></div>
                            <h4 class="order-details-business-name">
                                <a href="#" class="">Oremit power solution limited rrtr rtraed erwe</a>
                                <div class="order-details-status">
                                    <div class="order-dot new"></div>
                                    <div class="stat">New order</div>
                                </div>
                            </h4>
                        </div>
                        <div class="dk-action">
                            <a href="shop.html" class="btn btn-white btn-md">Visit shop</a>
                        </div>
                    </div>

                    <div class="md-flex">
                        <!-- products -->
                        <div class="col-md-12 col-lg-9">
                            <div class="order-details-notification">
                                <div class="alert alert-info order-details-alert">
                                    <div class="info-text">Info alert</div>
                                    <button class="btn btn-small btn-white">confirm</button>
                                </div>
                            </div>
                            <div class="order-details-product-container">
                                <div class="swiper-action-container">
                                    <button class="close-modal-btn slider-control">
                                        <div class="dropdownCheckBox" data-direction="left" data-carousel="carousel" data-target="busines12345"></div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                            <use xlink:href="~/assets/customer/image/all-svg.svg#leftArrow"></use>
                                        </svg>
                                    </button>
                                </div>
                                
                                <div class="swiper-action-container">
                                    <button class="close-modal-btn slider-control">
                                        <div class="dropdownCheckBox" data-direction="right" data-carousel="carousel" data-target="busines12345"></div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                            <use xlink:href="~/assets/customer/image/all-svg.svg#rightArrow"></use>
                                        </svg>
                                    </button>
                                </div>
                        
                                <div class="order-details-product-list" id="busines12345">

                                    <div class="card street-biz-card order-details-product carousel-item">
                                        <div class="street-biz-card-flex order-details-card-flex">
                                        <div class="businesss-card-img">
                                            <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                                        </div>
                                        <div class="order-details-product-detail">
                                            <div class="business-name">Glam's Tuxedo one</div>
                                            <div class="categories">₦ 1,200</div>
                                            <div class="reviews">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="order-product-option">
                                        <div class="d-flex-between option-container">
                                            <div class="option">Quanity</div>
                                            <div class="result">12</div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <div class="d-flex">
                                                <div class="option">Size:</div>
                                                <div class="result">12</div>
                                            </div>
                                            <div class="d-flex">
                                                <div class="option">Color:</div>
                                                <div class="result"><div class="cart-details-color" style="background-color: #BB2320;"></div></div>
                                            </div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <div class="option">Quanity</div>
                                            <div class="result">12</div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <a href="#" class="btn btn-white btn-small">View product</a>
                                            <!-- <button class="btn btn-white btn-small">Review product</button> -->
                                        </div>
                                        </div>
                                    </div>

                                    <div class="card street-biz-card order-details-product carousel-item">
                                        <div class="street-biz-card-flex order-details-card-flex">
                                        <div class="businesss-card-img">
                                            <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                                        </div>
                                        <div class="order-details-product-detail">
                                            <div class="business-name">Glam's Tuxedo two</div>
                                            <div class="categories">₦ 1,200</div>
                                            <div class="reviews">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="order-product-option">
                                        <div class="d-flex-between option-container">
                                            <div class="option">Quanity</div>
                                            <div class="result">12</div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <div class="d-flex">
                                                <div class="option">Size:</div>
                                                <div class="result">12</div>
                                            </div>
                                            <div class="d-flex">
                                                <div class="option">Color:</div>
                                                <div class="result"><div class="cart-details-color" style="background-color: #BB2320;"></div></div>
                                            </div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <div class="option">Quanity</div>
                                            <div class="result">12</div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <a href="#" class="btn btn-white btn-small">View product</a>
                                            <!-- <button class="btn btn-white btn-small">Review product</button> --> 
                                        </div>
                                        </div>
                                    </div>

                                    <div class="card street-biz-card order-details-product carousel-item">
                                        <div class="street-biz-card-flex order-details-card-flex">
                                        <div class="businesss-card-img">
                                            <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                                        </div>
                                        <div class="order-details-product-detail">
                                            <div class="business-name">Glam's Tuxedo threee</div>
                                            <div class="categories">₦ 1,200</div>
                                            <div class="reviews">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="order-product-option">
                                        <div class="d-flex-between option-container">
                                            <div class="option">Quanity</div>
                                            <div class="result">12</div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <div class="d-flex">
                                                <div class="option">Size:</div>
                                                <div class="result">12</div>
                                            </div>
                                            <div class="d-flex">
                                                <div class="option">Color:</div>
                                                <div class="result"><div class="cart-details-color" style="background-color: #BB2320;"></div></div>
                                            </div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <div class="option">Quanity</div>
                                            <div class="result">12</div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <a href="#" class="btn btn-white btn-small">View product</a>
                                            <!-- <button class="btn btn-white btn-small">Review product</button> --> 
                                        </div>
                                        </div>
                                    </div>

                                    <div class="card street-biz-card order-details-product carousel-item">
                                        <div class="street-biz-card-flex order-details-card-flex">
                                        <div class="businesss-card-img">
                                            <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                                        </div>
                                        <div class="order-details-product-detail">
                                            <div class="business-name">Glam's Tuxedo four</div>
                                            <div class="categories">₦ 1,200</div>
                                            <div class="reviews">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="order-product-option">
                                        <div class="d-flex-between option-container">
                                            <div class="option">Quanity</div>
                                            <div class="result">12</div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <div class="d-flex">
                                                <div class="option">Size:</div>
                                                <div class="result">12</div>
                                            </div>
                                            <div class="d-flex">
                                                <div class="option">Color:</div>
                                                <div class="result"><div class="cart-details-color" style="background-color: #BB2320;"></div></div>
                                            </div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <div class="option">Quanity</div>
                                            <div class="result">12</div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <a href="#" class="btn btn-white btn-small">View product</a>
                                            <!-- <button class="btn btn-white btn-small">Review product</button> -->
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- actions -->
                        <div class="col-md-12 col-lg-3 white-bg-color">
                            <div class="order-price-area position-relative">
                                <div class="d-flex-between option-container">
                                    <div class="option">Delivery time</div>
                                    <div class="result">1 hour - 2 days</div>
                                </div>
                                <div class="d-flex-between option-container">
                                    <div class="option">Delivery price</div>
                                    <div class="result">₦ 200</div>
                                </div>
                                <div class="d-flex-between option-container">
                                    <div class="option">Total price</div>
                                    <div class="result">₦ 1,200</div>
                                </div>
                                <div class="option-container order-action-area move-bottom">
                                    <!-- <button class="btn btn-white">Write business review</button> -->
                                    <button class="btn btn-primary">Accept delivery charge</button>
                                    <button class="btn btn-white">Reject delivery charge</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="order-details-container">
                    <div class="order-details-header">
                        <div class="order-details-business-info">
                            <div class="order-details-logo"><img src="~/assets/customer/image/asus logo@2x.png" alt=""></div>
                            <h4 class="order-details-business-name">
                                <a href="#" class="">Oremit power solution limited rrtr rtraed erwe</a>
                                <div class="order-details-status">
                                    <div class="order-dot pending"></div>
                                    <div class="stat">Confirmed order - pending delivery</div>
                                </div>
                            </h4>
                        </div>
                        <div class="dk-action">
                            <a href="shop.html" class="btn btn-white btn-md">Visit shop</a>
                        </div>
                    </div>

                    <div class="md-flex">
                        <!-- products -->
                        <div class="col-md-12 col-lg-9">
                            <div class="order-details-product-container">
                                <div class="swiper-action-container">
                                    <button class="close-modal-btn slider-control">
                                        <div class="dropdownCheckBox" data-direction="left" data-carousel="carousel" data-target="busines123456"></div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                            <use xlink:href="~/assets/customer/image/all-svg.svg#leftArrow"></use>
                                        </svg>
                                    </button>
                                </div>
                                <div class="swiper-action-container">
                                    <button class="close-modal-btn slider-control">
                                        <div class="dropdownCheckBox" data-direction="right" data-carousel="carousel" data-target="busines123456"></div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                            <use xlink:href="~/assets/customer/image/all-svg.svg#rightArrow"></use>
                                        </svg>
                                    </button>
                                </div>
                                <div class="order-details-product-list" id="busines123456">

                                    <div class="card street-biz-card order-details-product carousel-item">
                                        <div class="street-biz-card-flex order-details-card-flex">
                                        <div class="businesss-card-img">
                                            <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                                        </div>
                                        <div class="order-details-product-detail">
                                            <div class="business-name">Glam's Tuxedo one</div>
                                            <div class="categories">₦ 1,200</div>
                                            <div class="reviews">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="order-product-option">
                                        <div class="d-flex-between option-container">
                                            <div class="option">Quanity</div>
                                            <div class="result">12</div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <div class="d-flex">
                                                <div class="option">Size:</div>
                                                <div class="result">12</div>
                                            </div>
                                            <div class="d-flex">
                                                <div class="option">Color:</div>
                                                <div class="result"><div class="cart-details-color" style="background-color: #BB2320;"></div></div>
                                            </div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <div class="option">Quanity</div>
                                            <div class="result">12</div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <a href="#" class="btn btn-white btn-small">View product</a>
                                            <!-- <button class="btn btn-white btn-small">Review product</button> -->
                                        </div>
                                        </div>
                                    </div>

                                    <div class="card street-biz-card order-details-product carousel-item">
                                        <div class="street-biz-card-flex order-details-card-flex">
                                        <div class="businesss-card-img">
                                            <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                                        </div>
                                        <div class="order-details-product-detail">
                                            <div class="business-name">Glam's Tuxedo two</div>
                                            <div class="categories">₦ 1,200</div>
                                            <div class="reviews">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="order-product-option">
                                        <div class="d-flex-between option-container">
                                            <div class="option">Quanity</div>
                                            <div class="result">12</div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <div class="d-flex">
                                                <div class="option">Size:</div>
                                                <div class="result">12</div>
                                            </div>
                                            <div class="d-flex">
                                                <div class="option">Color:</div>
                                                <div class="result"><div class="cart-details-color" style="background-color: #BB2320;"></div></div>
                                            </div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <div class="option">Quanity</div>
                                            <div class="result">12</div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <a href="#" class="btn btn-white btn-small">View product</a>
                                            <!-- <button class="btn btn-white btn-small">Review product</button> -->
                                        </div>
                                        </div>
                                    </div>

                                    <div class="card street-biz-card order-details-product carousel-item">
                                        <div class="street-biz-card-flex order-details-card-flex">
                                        <div class="businesss-card-img">
                                            <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                                        </div>
                                        <div class="order-details-product-detail">
                                            <div class="business-name">Glam's Tuxedo threee</div>
                                            <div class="categories">₦ 1,200</div>
                                            <div class="reviews">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="order-product-option">
                                        <div class="d-flex-between option-container">
                                            <div class="option">Quanity</div>
                                            <div class="result">12</div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <div class="d-flex">
                                                <div class="option">Size:</div>
                                                <div class="result">12</div>
                                            </div>
                                            <div class="d-flex">
                                                <div class="option">Color:</div>
                                                <div class="result"><div class="cart-details-color" style="background-color: #BB2320;"></div></div>
                                            </div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <div class="option">Quanity</div>
                                            <div class="result">12</div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <a href="#" class="btn btn-white btn-small">View product</a>
                                            <!-- <button class="btn btn-white btn-small">Review product</button> -->
                                        </div>
                                        </div>
                                    </div>

                                    <div class="card street-biz-card order-details-product carousel-item">
                                        <div class="street-biz-card-flex order-details-card-flex">
                                        <div class="businesss-card-img">
                                            <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                                        </div>
                                        <div class="order-details-product-detail">
                                            <div class="business-name">Glam's Tuxedo four</div>
                                            <div class="categories">₦ 1,200</div>
                                            <div class="reviews">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="order-product-option">
                                        <div class="d-flex-between option-container">
                                            <div class="option">Quanity</div>
                                            <div class="result">12</div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <div class="d-flex">
                                                <div class="option">Size:</div>
                                                <div class="result">12</div>
                                            </div>
                                            <div class="d-flex">
                                                <div class="option">Color:</div>
                                                <div class="result"><div class="cart-details-color" style="background-color: #BB2320;"></div></div>
                                            </div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <div class="option">Quanity</div>
                                            <div class="result">12</div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <a href="#" class="btn btn-white btn-small">View product</a>
                                            <!-- <button class="btn btn-white btn-small">Review product</button> -->
                                        </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <!-- actions -->
                        <div class="col-md-12 col-lg-3 white-bg-color">
                            <div class="order-price-area position-relative">
                                <div class="d-flex-between option-container">
                                    <div class="option">Delivery price</div>
                                    <div class="result">₦ 200</div>
                                </div>
                                <div class="d-flex-between option-container">
                                    <div class="option">Total price</div>
                                    <div class="result">₦ 1,200</div>
                                </div>
                                <div class="option-container order-action-area move-bottom">
                                    <div>
                                        <div class="intro">How was your experience with this business</div>
                                        <div class="review-action-container">
                                            <div class="review-star-action">
                                                <button class="btn btn-light-grey" data-trigger="modal" data-target="businessReview">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                        <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                    </svg>
                                                </button>
                                                <div class="review-type">Hated it</div>
                                            </div>
                
                                            <div class="review-star-action">
                                                <button class="btn btn-light-grey">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                        <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                    </svg>
                                                </button>
                                                <div class="review-type">Didn't like it</div>
                                            </div>
                
                                            <div class="review-star-action">
                                                <button class="btn btn-light-grey">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                        <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                    </svg>
                                                </button>
                                                <div class="review-type">Just OK</div>
                                            </div>
                
                                            <div class="review-star-action">
                                                <button class="btn btn-light-grey">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                        <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                    </svg>
                                                </button>
                                                <div class="review-type">Liked it</div>
                                            </div>
                
                                            <div class="review-star-action">
                                                <button class="btn btn-light-grey">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                        <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                    </svg>
                                                </button>
                                                <div class="review-type">Loved it</div>
                                            </div>
                
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="order-details-container">
                    <div class="order-details-header">
                        <div class="order-details-business-info">
                            <div class="order-details-logo"><img src="~/assets/customer/image/asus logo@2x.png" alt=""></div>
                            <h4 class="order-details-business-name">
                                <a href="#" class="">Oremit power solution limited rrtr rtraed erwe</a>
                                <div class="order-details-status">
                                    <div class="order-dot cleared"></div>
                                    <div class="stat">Cleared order</div>
                                </div>
                            </h4>
                        </div>
                        <div class="dk-action">
                            <a href="shop.html" class="btn btn-white btn-md">Visit shop</a>
                        </div>
                    </div>

                    <div class="md-flex">
                        <!-- products -->
                        <div class="col-md-12 col-lg-9">
                            <div class="order-details-product-container">
                                <div class="swiper-action-container">
                                    <button class="close-modal-btn slider-control">
                                        <div class="dropdownCheckBox" data-direction="left" data-carousel="carousel" data-target="busines1234567"></div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                            <use xlink:href="~/assets/customer/image/all-svg.svg#leftArrow"></use>
                                        </svg>
                                    </button>
                                </div>
                                <div class="swiper-action-container">
                                    <button class="close-modal-btn slider-control">
                                        <div class="dropdownCheckBox" data-direction="right" data-carousel="carousel" data-target="busines1234567"></div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                            <use xlink:href="~/assets/customer/image/all-svg.svg#rightArrow"></use>
                                        </svg>
                                    </button>
                                </div>
                                <div class="order-details-product-list" id="busines1234567">

                                    <div class="card street-biz-card order-details-product carousel-item">
                                        <div class="street-biz-card-flex order-details-card-flex">
                                        <div class="businesss-card-img">
                                            <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                                        </div>
                                        <div class="order-details-product-detail">
                                            <div class="business-name">Glam's Tuxedo one</div>
                                            <div class="categories">₦ 1,200</div>
                                            <div class="reviews">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="order-product-option">
                                        <div class="d-flex-between option-container">
                                            <div class="option">Quanity</div>
                                            <div class="result">12</div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <div class="d-flex">
                                                <div class="option">Size:</div>
                                                <div class="result">12</div>
                                            </div>
                                            <div class="d-flex">
                                                <div class="option">Color:</div>
                                                <div class="result"><div class="cart-details-color" style="background-color: #BB2320;"></div></div>
                                            </div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <div class="option">Quanity</div>
                                            <div class="result">12</div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <a href="#" class="btn btn-white btn-small">View product</a>
                                            <!-- <button class="btn btn-white btn-small">Review product</button> -->
                                        </div>
                                        </div>
                                    </div>

                                    <div class="card street-biz-card order-details-product carousel-item">
                                        <div class="street-biz-card-flex order-details-card-flex">
                                        <div class="businesss-card-img">
                                            <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                                        </div>
                                        <div class="order-details-product-detail">
                                            <div class="business-name">Glam's Tuxedo two</div>
                                            <div class="categories">₦ 1,200</div>
                                            <div class="reviews">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="order-product-option">
                                        <div class="d-flex-between option-container">
                                            <div class="option">Quanity</div>
                                            <div class="result">12</div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <div class="d-flex">
                                                <div class="option">Size:</div>
                                                <div class="result">12</div>
                                            </div>
                                            <div class="d-flex">
                                                <div class="option">Color:</div>
                                                <div class="result"><div class="cart-details-color" style="background-color: #BB2320;"></div></div>
                                            </div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <div class="option">Quanity</div>
                                            <div class="result">12</div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <a href="#" class="btn btn-white btn-small">View product</a>
                                            <!-- <button class="btn btn-white btn-small">Review product</button> -->
                                        </div>
                                        </div>
                                    </div>

                                    <div class="card street-biz-card order-details-product carousel-item">
                                        <div class="street-biz-card-flex order-details-card-flex">
                                        <div class="businesss-card-img">
                                            <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                                        </div>
                                        <div class="order-details-product-detail">
                                            <div class="business-name">Glam's Tuxedo threee</div>
                                            <div class="categories">₦ 1,200</div>
                                            <div class="reviews">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="order-product-option">
                                        <div class="d-flex-between option-container">
                                            <div class="option">Quanity</div>
                                            <div class="result">12</div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <div class="d-flex">
                                                <div class="option">Size:</div>
                                                <div class="result">12</div>
                                            </div>
                                            <div class="d-flex">
                                                <div class="option">Color:</div>
                                                <div class="result"><div class="cart-details-color" style="background-color: #BB2320;"></div></div>
                                            </div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <div class="option">Quanity</div>
                                            <div class="result">12</div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <a href="#" class="btn btn-white btn-small">View product</a>
                                            <!-- <button class="btn btn-white btn-small">Review product</button> -->
                                        </div>
                                        </div>
                                    </div>

                                    <div class="card street-biz-card order-details-product carousel-item">
                                        <div class="street-biz-card-flex order-details-card-flex">
                                        <div class="businesss-card-img">
                                            <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                                        </div>
                                        <div class="order-details-product-detail">
                                            <div class="business-name">Glam's Tuxedo four</div>
                                            <div class="categories">₦ 1,200</div>
                                            <div class="reviews">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                                                </svg>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="order-product-option">
                                        <div class="d-flex-between option-container">
                                            <div class="option">Quanity</div>
                                            <div class="result">12</div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <div class="d-flex">
                                                <div class="option">Size:</div>
                                                <div class="result">12</div>
                                            </div>
                                            <div class="d-flex">
                                                <div class="option">Color:</div>
                                                <div class="result"><div class="cart-details-color" style="background-color: #BB2320;"></div></div>
                                            </div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <div class="option">Quanity</div>
                                            <div class="result">12</div>
                                        </div>
                                        <div class="d-flex-between option-container">
                                            <a href="#" class="btn btn-white btn-small">View product</a>
                                            <!-- <button class="btn btn-white btn-small">Review product</button> -->
                                        </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <!-- actions -->
                        <div class="col-md-12 col-lg-3 white-bg-color">
                            <div class="order-price-area position-relative">
                                <div class="d-flex-between option-container">
                                    <div class="option">Delivery price</div>
                                    <div class="result">₦ 200</div>
                                </div>
                                <div class="d-flex-between option-container">
                                    <div class="option">Total price</div>
                                    <div class="result">₦ 1,200</div>
                                </div>
                                <div class="option-container order-action-area move-bottom">
                                    <button class="btn btn-primary">Confirm delivery</button>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
                
            </div>
            <!-- end of cart listing -->

        </div>
        <!-- end of content container -->

        <!-- footer area -->

      <BOTTOMADS></BOTTOMADS>
      <CUSTOMERFOOTER></CUSTOMERFOOTER>

    </div>
  </div>
</template>

<script>
import MOBILENAVIGATION from '~/layouts/customer/mobile-navigation.vue'
import DESKTOPNAVGATION from '~/layouts/customer/desktop-navigation.vue'
import MOBILESEARCH from '~/layouts/customer/mobile-search.vue'
import BOTTOMADS from '~/layouts/customer/buttom-ads.vue'
import CUSTOMERFOOTER from '~/layouts/customer/customer-footer.vue';
import PAGELOADER from '~/components/loader/loader.vue';
export default {
    components: {
      DESKTOPNAVGATION, MOBILENAVIGATION, MOBILESEARCH, BOTTOMADS, CUSTOMERFOOTER, PAGELOADER
    },
    data: function() {
        return {
            pageLoader: true
        }
    },
    methods: {

    },
    mounted () {
        setTimeout(() => {
            this.pageLoader = false
        }, 5000);
    }
}
</script>