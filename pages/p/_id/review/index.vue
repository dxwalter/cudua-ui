<template>
  <div class="customer">
    <div class="body-container grey-bg-color">

      <!-- beginning of navigation container -->
      <div class="nav-container">

        <MOBILESEARCH />
        <nuxt />
        <DESKTOPNAVGATION/>
        <nuxt />

        <MOBILENAVIGATION />
        <nuxt />
        
      </div>

<div class="content-container">
          <!-- bookmark area -->
          <div class="section-header"><h4>Product review</h4></div>
         <!-- content start here -->
          <div class="all-product-details-container">
            <!-- product image area -->
            <div class="image-area">
                <!-- image area -->
                <div class="product-details-image-info">
                  <div class="product-details-img-container">

                    <div class="slide-container white-bg-color">
                        <div class="product-image-slide is-active">
                            <img src="~/assets/customer/image/phone.png" alt="">
                        </div>
                        <div class="product-image-slide">
                            <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                        </div>
                        <div class="product-image-slide">
                            <img src="~/assets/customer/image/banner-image.jpg" alt="">
                        </div>
                    </div>

                    <button class="close-modal-btn btn-light-grey" id="previousSlide">
                        <svg xmlns="http://www.w3.org/2000/svg" width="7.41" height="12" viewBox="0 0 7.41 12" class="margin-unset">
                            <use xlink:href="~/assets/customer/image/all-svg.svg#leftArrow"></use>
                        </svg>
                    </button>
                    <button class="close-modal-btn btn-light-grey" id="nextSlide">
                        <svg xmlns="http://www.w3.org/2000/svg" width="8.375" height="13.562" viewBox="0 0 8.375 13.562">
                            <use xlink:href="~/assets/customer/image/all-svg.svg#rightArrow"></use>
                        </svg>
                    </button>
                  
                  </div>
                  
              </div>
            </div>
            <!-- end of product image area -->

            <!-- beginning of product details -->
            <div class="product-details-content-info">
				<!-- details area -->
				<!-- name -->
				<a href="product-details.html" class="product-details-name"><h2>Blonde Trouser</h2></a>
				<!-- price -->
				<div class="product-price-container">
				<div class="product-details-price"><h3>₦ 2,500</h3></div>
				<a href="javasscript:;" class="navbar-review-icon" data-trigger="modal" data-target="productReview">
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
				<!-- sizes -->
				<div class="product-details-container">
					<div class="product-details-label">
						Rate our experience with this product
					</div>
					<div class="review-action-container review-star-area">
                        <div class="review-star-action">
                            <button class="btn btn-light-grey">
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

				<!-- color -->
                <div class="product-details-container">
                    <div class="product-details-label">
                        Describe your experience <span>- Optional</span>
                    </div>
                    <textarea name="" id="" cols="30" rows="5" class="input-form white-bg-color add-border"></textarea>
                </div>

                				<!-- action -->
                <div class="d-flex mg-bottom-16">
                    <button class="btn btn-primary btn-lg btn-block">Submit review</button>
                </div>

            </div> 
            <!-- end of product info-->

          </div> <!-- End of product-details-content-info -->
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