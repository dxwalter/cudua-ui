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
            <div class="section-header"><h4>Following</h4></div>

            <!-- bookmark listing area -->
            <div class="bookmark-listing-area">

                <!-- beginning of row -->
                <div class="row">

                    
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div class="card bookmark-big-card">
                            <div class="d-flex">
                            <div class="bookmark-logo">
                                <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                            </div>
                            <div class="bookmark-card-details">
                                <h4 class="bookmark-comp-name">Ihuoma fashion home</h4>
                                <div class="bookmark-comp-addr">59 Igbogo road Choba, Ohio-akpor rivers state</div>
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
                        <div class="card-footer">
                            <div class="accordion-subcat-area">
                                <a href="#" class="chip">Clothing</a>
                                <a href="#" class="chip">Shoes</a>
                                <a href="#" class="chip">Accessories</a>
                                <a href="#" class="chip">qClothing</a>
                                <a href="#" class="chip">Shoes</a>
                                <a href="#" class="chip">Accessories</a>
                                <a href="#" class="chip">Clothing</a>
                                <a href="#" class="chip">Shoes</a>
                                <a href="#" class="chip">Accessories</a>
                            </div>
                            <div class="action-area">
                                <a href="#" class="btn btn-primary">Visit shop</a>
                                <button class="btn btn-light-grey">Unfollow</button>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div class="card bookmark-big-card">
                            <div class="d-flex">
                            <div class="bookmark-logo">
                                <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                            </div>
                            <div class="bookmark-card-details">
                                <h4 class="bookmark-comp-name">Ihuoma fashion home</h4>
                                <div class="bookmark-comp-addr">59 Igbogo road Choba, Ohio-akpor rivers state</div>
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
                        <div class="card-footer">
                            <div class="accordion-subcat-area">
                                <a href="#" class="chip">Clothing</a>
                                <a href="#" class="chip">Shoes</a>
                                <a href="#" class="chip">Accessories</a>
                                <a href="#" class="chip">Clothing</a>
                                <a href="#" class="chip">Shoes</a>
                                <a href="#" class="chip">Accessories</a>
                                <a href="#" class="chip">Clothing</a>
                                <a href="#" class="chip">Shoes</a>
                                <a href="#" class="chip">Accessories</a>
                                <a href="#" class="chip">Clothing</a>
                                <a href="#" class="chip">Shoes</a>
                                <a href="#" class="chip">Accessories</a>
                            </div>
                            <div>
                                <a href="#" class="btn btn-primary">Visit shop</a>
                                <button class="btn btn-light-grey">Unfollow</button>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div class="card bookmark-big-card">
                            <div class="d-flex">
                            <div class="bookmark-logo">
                                <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                            </div>
                            <div class="bookmark-card-details">
                                <h4 class="bookmark-comp-name">Ihuoma fashion home</h4>
                                <div class="bookmark-comp-addr">59 Igbogo road Choba, Ohio-akpor rivers state</div>
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
                        <div class="card-footer">
                            <div class="accordion-subcat-area">
                                <a href="#" class="chip">Clothing</a>
                                <a href="#" class="chip">Shoes</a>
                                <a href="#" class="chip">Accessories</a>
                                <a href="#" class="chip">Clothing</a>
                                <a href="#" class="chip">Shoes</a>
                                <a href="#" class="chip">Accessories</a>
                            </div>
                            <div>
                                <a href="#" class="btn btn-primary">Visit shop</a>
                                <button class="btn btn-light-grey">Unfollow</button>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div class="card bookmark-big-card">
                            <div class="d-flex">
                            <div class="bookmark-logo">
                                <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                            </div>
                            <div class="bookmark-card-details">
                                <h4 class="bookmark-comp-name">Ihuoma fashion home</h4>
                                <div class="bookmark-comp-addr">59 Igbogo road Choba, Ohio-akpor rivers state</div>
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
                        <div class="card-footer">
                            <div class="accordion-subcat-area">
                                <a href="#" class="chip">Clothing</a>
                                <a href="#" class="chip">Shoes</a>
                                <a href="#" class="chip">Accessories</a>
                                <a href="#" class="chip">Clothing</a>
                                <a href="#" class="chip">Shoes</a>
                                <a href="#" class="chip">Accessories</a>
                            </div>
                            <div>
                                <a href="#" class="btn btn-primary">Visit shop</a>
                                <button class="btn btn-light-grey">Unfollow</button>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div class="card bookmark-big-card">
                            <div class="d-flex">
                            <div class="bookmark-logo">
                                <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                            </div>
                            <div class="bookmark-card-details">
                                <h4 class="bookmark-comp-name">Ihuoma fashion home</h4>
                                <div class="bookmark-comp-addr">59 Igbogo road Choba, Ohio-akpor rivers state</div>
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
                        <div class="card-footer">
                            <div class="accordion-subcat-area">
                                <a href="#" class="chip">Clothing</a>
                                <a href="#" class="chip">Shoes</a>
                                <a href="#" class="chip">Accessories</a>
                                <a href="#" class="chip">Clothing</a>
                                <a href="#" class="chip">Shoes</a>
                                <a href="#" class="chip">Accessories</a>
                            </div>
                            <div>
                                <a href="#" class="btn btn-primary">Visit shop</a>
                                <button class="btn btn-light-grey">Unfollow</button>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div class="card bookmark-big-card">
                            <div class="d-flex">
                            <div class="bookmark-logo">
                                <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                            </div>
                            <div class="bookmark-card-details">
                                <h4 class="bookmark-comp-name">Ihuoma fashion home</h4>
                                <div class="bookmark-comp-addr">59 Igbogo road Choba, Ohio-akpor rivers state</div>
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
                        <div class="card-footer">
                            <div class="accordion-subcat-area">
                                <a href="#" class="chip">Clothing</a>
                                <a href="#" class="chip">Shoes</a>
                                <a href="#" class="chip">Accessories</a>
                                <a href="#" class="chip">Clothing</a>
                                <a href="#" class="chip">Shoes</a>
                                <a href="#" class="chip">Accessories</a>
                            </div>
                            <div>
                                <a href="#" class="btn btn-primary">Visit shop</a>
                                <button class="btn btn-light-grey">Unfollow</button>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div class="card bookmark-big-card">
                            <div class="d-flex">
                            <div class="bookmark-logo">
                                <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                            </div>
                            <div class="bookmark-card-details">
                                <h4 class="bookmark-comp-name">Ihuoma fashion home</h4>
                                <div class="bookmark-comp-addr">59 Igbogo road Choba, Ohio-akpor rivers state</div>
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
                        <div class="card-footer">
                            <div class="accordion-subcat-area">
                                <a href="#" class="chip">Clothing</a>
                                <a href="#" class="chip">Shoes</a>
                                <a href="#" class="chip">Accessories</a>
                                <a href="#" class="chip">Clothing</a>
                                <a href="#" class="chip">Shoes</a>
                                <a href="#" class="chip">Accessories</a>
                            </div>
                            <div>
                                <a href="#" class="btn btn-primary">Visit shop</a>
                                <button class="btn btn-light-grey">Unfollow</button>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div class="card bookmark-big-card">
                            <div class="d-flex">
                            <div class="bookmark-logo">
                                <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                            </div>
                            <div class="bookmark-card-details">
                                <h4 class="bookmark-comp-name">Ihuoma fashion home</h4>
                                <div class="bookmark-comp-addr">59 Igbogo road Choba, Ohio-akpor rivers state</div>
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
                        <div class="card-footer">
                            <div class="accordion-subcat-area">
                                <a href="#" class="chip">Clothing</a>
                                <a href="#" class="chip">Shoes</a>
                                <a href="#" class="chip">Accessories</a>
                                <a href="#" class="chip">Clothing</a>
                                <a href="#" class="chip">Shoes</a>
                                <a href="#" class="chip">Accessories</a>
                            </div>
                            <div>
                                <a href="#" class="btn btn-primary">Visit shop</a>
                                <button class="btn btn-light-grey">Unfollow</button>
                            </div>
                        </div>
                        </div>
                    </div>

                </div>
                <!-- end of row -->

                
                <div class="load-more-action">
                    <button class="btn btn-white">Load more bookmarks</button>
                </div>

            </div>
            <!-- end of bookmark listing area -->

        </div>
        <!-- end of content container -->

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