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
            <!-- bookmark area -->
            <div class="section-header"><h4>Saved items </h4></div>

            <div class="bookmark-listing-area">
                <div class="row">
                
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <div class="card bookmark-big-card">
                            <a href="#" class="d-flex">
                            <div class="saved-item-image">
                                <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                            </div>
                            <div class="bookmark-card-details">
                                <h4 class="saved-product-name">Blonde Trouser</h4>
                                <div class="saved-product-price">₦ 2,500</div>
                                <div class="saved-item-review">
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
                            </a>
                        <div class="card-footer padding-16">
                            <div>
                                <button class="btn btn-primary btn-md">Move to cart</button>
                                <button class="btn btn-light-grey btn-md">Remove</button>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <div class="card bookmark-big-card">
                            <a href="#" class="d-flex">
                            <div class="saved-item-image">
                                <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                            </div>
                            <div class="bookmark-card-details">
                                <h4 class="saved-product-name">Blonde Trouser</h4>
                                <div class="saved-product-price">₦ 2,500</div>
                                <div class="saved-item-review">
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
                            </a>
                        <div class="card-footer padding-16">
                            <div>
                                <button class="btn btn-primary btn-md">Move to cart</button>
                                <button class="btn btn-light-grey btn-md">Remove</button>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <div class="card bookmark-big-card">
                            <a href="#" class="d-flex">
                            <div class="saved-item-image">
                                <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                            </div>
                            <div class="bookmark-card-details">
                                <h4 class="saved-product-name">Blonde Trouser</h4>
                                <div class="saved-product-price">₦ 2,500</div>
                                <div class="saved-item-review">
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
                            </a>
                        <div class="card-footer padding-16">
                            <div>
                                <button class="btn btn-primary btn-md">Move to cart</button>
                                <button class="btn btn-light-grey btn-md">Remove</button>
                            </div>
                        </div>
                        </div>
                    </div>


                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <div class="card bookmark-big-card">
                            <a href="#" class="d-flex">
                            <div class="saved-item-image">
                                <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                            </div>
                            <div class="bookmark-card-details">
                                <h4 class="saved-product-name">Blonde Trouser</h4>
                                <div class="saved-product-price">₦ 2,500</div>
                                <div class="saved-item-review">
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
                            </a>
                        <div class="card-footer padding-16">
                            <div>
                                <button class="btn btn-primary btn-md">Move to cart</button>
                                <button class="btn btn-light-grey btn-md">Remove</button>
                            </div>
                        </div>
                        </div>
                    </div>


                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <div class="card bookmark-big-card">
                            <a href="#" class="d-flex">
                            <div class="saved-item-image">
                                <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                            </div>
                            <div class="bookmark-card-details">
                                <h4 class="saved-product-name">Blonde Trouser</h4>
                                <div class="saved-product-price">₦ 2,500</div>
                                <div class="saved-item-review">
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
                            </a>
                        <div class="card-footer padding-16">
                            <div>
                                <button class="btn btn-primary btn-md">Move to cart</button>
                                <button class="btn btn-light-grey btn-md">Remove</button>
                            </div>
                        </div>
                        </div>
                    </div>


                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <div class="card bookmark-big-card">
                            <a href="#" class="d-flex">
                            <div class="saved-item-image">
                                <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                            </div>
                            <div class="bookmark-card-details">
                                <h4 class="saved-product-name">Blonde Trouser</h4>
                                <div class="saved-product-price">₦ 2,500</div>
                                <div class="saved-item-review">
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
                            </a>
                        <div class="card-footer padding-16">
                            <div>
                                <button class="btn btn-primary btn-md">Move to cart</button>
                                <button class="btn btn-light-grey btn-md">Remove</button>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <div class="card bookmark-big-card">
                            <a href="#" class="d-flex">
                            <div class="saved-item-image">
                                <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                            </div>
                            <div class="bookmark-card-details">
                                <h4 class="saved-product-name">Blonde Trouser</h4>
                                <div class="saved-product-price">₦ 2,500</div>
                                <div class="saved-item-review">
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
                            </a>
                        <div class="card-footer padding-16">
                            <div>
                                <button class="btn btn-primary btn-md">Move to cart</button>
                                <button class="btn btn-light-grey btn-md">Remove</button>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <div class="card bookmark-big-card">
                            <a href="#" class="d-flex">
                            <div class="saved-item-image">
                                <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                            </div>
                            <div class="bookmark-card-details">
                                <h4 class="saved-product-name">Blonde Trouser</h4>
                                <div class="saved-product-price">₦ 2,500</div>
                                <div class="saved-item-review">
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
                            </a>
                        <div class="card-footer padding-16">
                            <div>
                                <button class="btn btn-primary btn-md">Move to cart</button>
                                <button class="btn btn-light-grey btn-md">Remove</button>
                            </div>
                        </div>
                        </div>
                    </div>

                </div>

                
                <div class="load-more-action move-center">
                    <button class="btn btn-white">Load more saved items</button>
                </div>

            </div>

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
import CUSTOMERFOOTER from '~/layouts/customer/customer-footer.vue'
import PAGELOADER from '~/components/loader/loader.vue';

import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
    components: {
      DESKTOPNAVGATION, MOBILENAVIGATION, MOBILESEARCH, BOTTOMADS, CUSTOMERFOOTER, PAGELOADER
    },
    data: function() {
        return {
            pageLoader: true,
        }
    },
    computed: {
		...mapGetters({
			'GetLoginStatus': 'customer/GetLoginStatus'
        }),
		LoginStatus () {
			return this.GetLoginStatus
		}
    },
    created: async function () {
		if (process.browser) {
            let status = this.LoginStatus
            if (status == false) this.$router.push('/')
		}

    },
    mounted () {
        setTimeout(() => {
            this.pageLoader = false
        }, 5000);
    }
}
</script>