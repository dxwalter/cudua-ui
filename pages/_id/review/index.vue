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
            <div class="section-header"><h4>Business review</h4></div>
            <!-- content start here -->
            <div class="all-product-details-container">
                <!-- product image area -->
                <div class="image-area">
                    <!-- image area -->
                    <div class="product-details-image-info">
                    <div class="product-details-img-container height-auto overflow-unset">
                        <div class="business-review-cover">
                            <img src="~/assets/customer/image/cover-photo.png" alt="">
                        </div>
                        <div class="order-business-logo">
                            <img src="~/assets/customer/image/mainOremitLogo.png" alt="">
                        </div>
                        <div class="follow-area-action">
                            <button class="btn btn-primary btn-small">Follow business</button>
                        </div>
                    </div>
                    
                </div>
                </div>
                <!-- end of product image area -->

                <!-- beginning of product details -->
                <div class="product-details-content-info">
                    <!-- details area -->
                    <!-- name -->
                    <a href="product-details.html" class="product-details-name mg-bottom-8 d-flex"><h2>Oremit power solution limited</h2></a>
                    <!-- price -->
                    <div class="product-price-container">
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
                            Rate our experience with this business
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