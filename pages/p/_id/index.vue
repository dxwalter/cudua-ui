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
        <PAGELOADER v-show="pageLoader"></PAGELOADER>

        <div class="content-container">
          <!-- bookmark area -->
            <div class="section-header"><h4>Product details</h4></div>
            <!-- content start here -->
            <div class="all-product-details-container">
                <!-- product image area -->
                <div class="image-area">
                    <!-- image area -->
                    <div class="product-details-image-info">
                        <div class="product-details-img-container">

                            <div class="slide-container white-bg-color" id="productImageSlideShow">
                                <div class="product-image-slide is-active">
                                    <img src="~/assets/business/image/phone.png" alt="">
                                </div>
                                <div class="product-image-slide">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
                                </div>
                                <div class="product-image-slide">
                                    <img src="~/assets/business/image/banner-image.jpg" alt="">
                                </div>
                                <div class="product-image-slide">
                                    <img src="~/assets/business/image/card-bg.png" alt="">
                                </div>
                            </div>

                            <button class="close-modal-btn btn-light-grey" @click="previousImage">
                                <svg xmlns="http://www.w3.org/2000/svg" width="7.41" height="12" viewBox="0 0 7.41 12" class="margin-unset">
                                    <use xlink:href="~/assets/business/image/all-svg.svg#leftArrow"></use>
                                </svg>
                            </button>
                            <button class="close-modal-btn btn-light-grey" id="nextSlide" @click="nextImage">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8.375" height="13.562" viewBox="0 0 8.375 13.562" class="margin-unset">
                                    <use xlink:href="~/assets/business/image/all-svg.svg#rightArrow"></use>
                                </svg>
                            </button>
                        
                        </div>
                        <div class="selected-img-preview mg-bottom-32">
                            <div class="product-img-thumbnail" data-slide="1" @click="thumbSlide($event)">
                                <img src="~/assets/business/image/phone.png" alt="" data-slide="1" @click="thumbSlide($event)">
                            </div>
                            <div class="product-img-thumbnail" @click="thumbSlide($event)" data-slide="2">
                                <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="" data-slide="2" @click="thumbSlide($event)">
                            </div>
                            <div class="product-img-thumbnail" @click="thumbSlide($event)" data-slide="3">
                                <img src="~/assets/business/image/banner-image.jpg" alt="" data-slide="3" @click="thumbSlide($event)">
                            </div>
                            <div class="product-img-thumbnail" @click="thumbSlide($event)" data-slide="4">
                                <img src="~/assets/business/image/card-bg.png" alt="" data-slide="4" @click="thumbSlide($event)">
                            </div>
                        </div>

                    </div>
                </div>
                <!-- end of product image area -->

                <!-- beginning of product details -->
                <div class="product-details-content-info">
                    <!-- details area -->
                    <!-- name -->
                    <div class="product-details-name"><h2>Blonde Trouser</h2></div>
                    <!-- price -->
                    <div class="product-price-container">
                        <div class="product-details-price"><h3>₦ 2,500</h3></div>
                        <a href="javascript:;" data-trigger="modal" data-target="productReview" class="navbar-review-icon">
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
                        </a>
                    </div>
                    <!-- description -->
                    <div class="product-details-container mg-bottom-32">
                    <div class="product-details-label">Product Description</div>
                    <div class="product-description-text">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Phasellus magna. Fusce pharetra convallis urna. Curabitur suscipit suscipit dictum felis eu pede mollis pretium. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Sed hendrerit…. <span>Show more</span></div>
                    </div>
                    <!-- sizes -->
                    <div class="product-details-container">
                        <div class="product-details-label">
                            Available sizes <span>- choose your size</span>
                        </div>
                        <div class="color-picker-container">
                            <div class="size-card">43</div>
                            <div class="size-card">38</div>
                            <div class="size-card selected">24</div>
                            <div class="size-card">43</div>
                            <div class="size-card">38</div>
                            <div class="size-card">43</div>
                            <div class="size-card">24</div>
                            <div class="size-card">43</div>
                            <div class="size-card">38</div>
                            <div class="size-card">43</div>
                        </div>
                    </div>

                    <!-- color -->
                    <div class="product-details-container">
                        <div class="product-details-label">
                            Available colors <span>- choose your color</span>
                        </div>
                        <div class="color-picker-container">
                            <div style="background-color: #1232B1;"></div>
                            <div style="background-color: #BB2320;"></div>
                            <div style="background-color: #2C2C2C;"></div>
                            <div style="background-color: #FBC02D;"></div>
                            <div style="background-color: #F4F6F8;"></div>
                            <div style="background-color: #388E3C;"></div>
                            <div style="background-color: rgb(45, 53, 66);"></div>
                            <div style="background-color: #1232B1;"></div>
                            <div style="background-color: #BB2320;"></div>
                            <div style="background-color: #2C2C2C;"></div>
                            <!-- <div style="background-color: #FBC02D;"></div>
                            <div style="background-color: #F4F6F8;"></div>
                            <div style="background-color: #388E3C;"></div>
                            <div style="background-color: #2874F0;"></div> -->
                        </div>
                    </div>

                    <!-- share -->
                    <div class="product-details-container">
                        <div class="product-details-label">
                            Share
                        </div>
                        <div class="share-action-container d-flex">
                        
                            <a href="#" class="close-modal-btn" data-brand="whatsapp">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="margin-unset">
                                <use xlink:href="~/assets/customer/image/all-svg.svg#whatsappIcon"></use>
                            </svg>
                            </a>

                            <a href="#" class="close-modal-btn btn-white" data-brand="facebook">
                                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="margin-unset">
                                    <use xlink:href="~/assets/customer/image/all-svg.svg#facebookRoundIcon"></use>
                                </svg>
                            </a>

                            <a href="#" class="close-modal-btn" data-brand="twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="margin-unset">
                                    <use xlink:href="~/assets/customer/image/all-svg.svg#twitterIcon"></use>
                                </svg>
                            </a>

                            <a href="#" class="close-modal-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="margin-unset">
                                    <use xlink:href="~/assets/customer/image/all-svg.svg#copyIcon"></use>
                                </svg>
                            </a>

                        </div>
                    </div>

                    <!-- action -->
                    <div class="d-flex desktop-product-add">
                        <button class="btn btn-white btn-lg" data-target="contactBusiness" data-trigger="modal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <use xlink:href="~/assets/customer/image/all-svg.svg#phone"></use>
                            </svg>
                        </button>
                        <button class="btn btn-primary btn-lg btn-block">
                            <svg xmlns="http://www.w3.org/2000/svg">
                            <use xlink:href="~/assets/customer/image/all-svg.svg#order"></use>
                            </svg>
                            <span>
                            Add to cart
                            </span>
                        </button>
                    </div>

                    <div class="product-details-action">
                    <button class="btn btn-white btn-md">Save for later</button>
                    <n-link to="/bubbieklasic" class="btn btn-white btn-md">Visit shop</n-link>
                </div>

                </div> 
                <!-- end of product info-->

            </div> <!-- End of product-details-content-info -->

            <!-- product suggesstion -->
            <div class="product-suggestion-container">
                <div class="section-header"><h4>Customers also viewed</h4></div>
                <div class="product-suggestion-listing">
                    <div class="swiper-action-container">
                    <button class="close-modal-btn slider-control">
                        <div class="dropdownCheckBox" data-direction="left" data-carousel="carousel" data-target="productSuggestion"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                            <use xlink:href="~/assets/customer/image/all-svg.svg#leftArrow"></use>
                        </svg>
                    </button>
                    </div>

                    
                    <div class="swiper-action-container">
                    <button class="close-modal-btn slider-control">
                        <div class="dropdownCheckBox" data-direction="right" data-carousel="carousel" data-target="productSuggestion"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                            <use xlink:href="~/assets/customer/image/all-svg.svg#rightArrow"></use>
                        </svg>
                    </button>
                    </div>

                    <div class="row" id="productSuggestion">
                                
                    <n-link to="/p/23432" class="col-xs-6 col-sm-6 col-md-4 col-lg-3 carousel-item">
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
                    </n-link>
        
                    <n-link to="/p/23432" class="col-xs-6 col-sm-6 col-md-4 col-lg-3 carousel-item">
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
                    </n-link>
        
                    <n-link to="/p/23432" class="col-xs-6 col-sm-6 col-md-4 col-lg-3 carousel-item">
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
                    </n-link>
        
                    <n-link to="/p/23432" class="col-xs-6 col-sm-6 col-md-4 col-lg-3 carousel-item">
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
                    </n-link>
        
                    <n-link to="/p/23432" class="col-xs-6 col-sm-6 col-md-4 col-lg-3 carousel-item">
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
                    </n-link>
        
                    <n-link to="/p/23432" class="col-xs-6 col-sm-6 col-md-4 col-lg-3 carousel-item">
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
                    </n-link>
        
                    <n-link to="/p/23432" class="col-xs-6 col-sm-6 col-md-4 col-lg-3 carousel-item">
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
                    </n-link>
        
                    <n-link to="/p/23432" class="col-xs-6 col-sm-6 col-md-4 col-lg-3 carousel-item">
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
                    </n-link>
        
                    </div>
                </div>
            </div>
            <!-- end of product suggestion area -->
        </div>
        <!-- end of content container -->

        <!-- mobile action area -->
        <div class="product-bottom-action-area" v-show="!pageLoader">
            <a href="tel:08104686729" class="btn btn-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <use xlink:href="~/assets/customer/image/all-svg.svg#phone"></use>
                </svg>
                <span>Call to order</span>
            </a>
            <button class="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg">
                    <use xlink:href="~/assets/customer/image/all-svg.svg#order"></use>
                </svg>
                <span>
                    Add to cart
                </span>
            </button>
        </div>

      <!-- footer area -->

      <div class="mobile-hide-nav-bottom-add">
        <BOTTOMADS></BOTTOMADS>
        <CUSTOMERFOOTER></CUSTOMERFOOTER>
      </div>


        <PRODUCTREVIEW></PRODUCTREVIEW>

    </div>


  </div>
</template>

<script>
import MOBILENAVIGATION from '~/layouts/customer/mobile-navigation.vue';
import DESKTOPNAVGATION from '~/layouts/customer/desktop-navigation.vue';
import MOBILESEARCH from '~/layouts/customer/mobile-search.vue';
import BOTTOMADS from '~/layouts/customer/buttom-ads.vue';
import CUSTOMERFOOTER from '~/layouts/customer/customer-footer.vue';
import PRODUCTREVIEW from '~/components/product/product-review.vue'
import PAGELOADER from '~/components/loader/loader.vue';
export default {
    components: {
      DESKTOPNAVGATION, MOBILENAVIGATION, MOBILESEARCH, BOTTOMADS, CUSTOMERFOOTER, PRODUCTREVIEW, PAGELOADER
    },
    data: function () {
        return {
            currentSlide: 1,
            slider: "",
            pageLoader: true
        }
    },
    methods : {
        nextImage: function () {
            if (this.currentSlide >= this.slider.length) this.currentSlide = 0;
            this.$productImageSlides(this.currentSlide += 1, this.slider)
        },
        previousImage: function () {
            if (this.currentSlide == 1) {
                this.currentSlide = this.slider.length;
                this.$productImageSlides(this.currentSlide, this.slider)
            } else {
                this.$productImageSlides(this.currentSlide += -1, this.slider)
            }
        },
        thumbSlide: function(e) {
            let getTarget = e.target;
            let thumbCount = getTarget.getAttribute('data-slide');
            this.currentSlide = parseInt(thumbCount, 10)
            this.$productImageSlides(parseInt(thumbCount, 10), this.slider)
        },
        copyLink: function (target) {
            this.$copyToClipBoard(target)
        }
    },
    mounted () {
        this.slider = document.getElementsByClassName("product-image-slide");
        this.$productImageSlides(this.currentSlide, this.slider);
        setTimeout(() => {
            this.pageLoader = false
        }, 5000);
    }
}
</script>