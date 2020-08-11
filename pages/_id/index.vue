<template>
  <div class="customer">
    <div class="body-container grey-bg-color">

      <!-- beginning of navigation container -->
      <div class="nav-container">

        <MOBILESEARCH />
        <nuxt />
        
        <BUSINESSNAV />
        <nuxt />

        <MOBILENAVIGATION />
        <nuxt />
        
      </div>

      <!-- begining of content container -->
        <div class="content-container-second business-page-container">

            <!-- mobile category navigation -->
            <div class="mobile-shop-cat-listing">
                <button class="bis-nav-btn" id="showBusinessCategory">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21">
                        <use xlink:href="~/assets/customer/image/all-svg.svg#categories"></use>
                    </svg>
                    <span>Categories</span>
                </button>
                <button class="bis-nav-btn">
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <use xlink:href="~/assets/customer/image/all-svg.svg#productIcon"></use>
                    </svg>
                    <span>All products</span>
                </button>
            </div>
            <!-- end of mobile category navigation -->

            <!-- mobile category listing -->
            <div class="mobile-category-container" id="businessCategoryContainer">
                <div class="shop-cat-dialog-box" id="businessCategoryContent">
                    <div class="shop-cat-listing">
                        <div class="section-header">
                            <h4>Category listing</h4>
                            <button class="close-modal-btn" id="closeMobileBusinessCategory">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" class="margin-unset">
                                    <use xlink:href="~/assets/customer/image/all-svg.svg#times"></use>
                                </svg>
                            </button>
                        </div>
                        <div class="shop-cat-item">
                            <n-link to="/p/42342">
                                <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="fashionCategory">
                                <span class="accord-chip-name">Fashion</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.05 13.616">
                                    <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                                </svg>
                            </n-link>
                            <div class="subcat-listing" id="fashionCategory">
                                <n-link to="/p/42342" class="chip ">Wedding wears</n-link>
                                <n-link to="/p/42342" class="chip ">Dress</n-link>
                                <n-link to="/p/42342" class="chip ">Shoes</n-link>
                                <n-link to="/p/42342" class="chip ">Bags</n-link>
                                <n-link to="/p/42342" class="chip ">Night clothes</n-link>
                            </div>
                        </div>

                        <div class="shop-cat-item">
                            <n-link to="/p/42342">
                                <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="ElectronicsCategory">
                                <span class="accord-chip-name">Electronics</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.05 13.616">
                                    <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                                </svg>
                            </n-link>
                            <div class="subcat-listing" id="ElectronicsCategory">
                                <n-link to="/p/42342" class="chip ">Television &amp; video</n-link>
                                <n-link to="/p/42342" class="chip ">Generators &amp; portable power</n-link>
                                <n-link to="/p/42342" class="chip ">Cameras</n-link>
                                <n-link to="/p/42342" class="chip ">Audios</n-link>
                                <n-link to="/p/42342" class="chip ">Musical Instrument</n-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end of mobile category listing -->
            
            <div class="product-area">
                <div class="business-product-container">
                            <!-- desktop category listing -->
                    <div class="desktop-category-area card">
                    <div class="card-title">
                        Categories
                    </div>
                    <div class="desktop-shop-cat-listing">
                        <div class="shop-cat-item">
                            <n-link to="/p/42342">
                                <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="dkElectronicsCategory">
                                <span class="accord-chip-name">Electronics</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.05 13.616">
                                    <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                                </svg>
                            </n-link>
                            <div class="subcat-listing" id="dkElectronicsCategory">
                                <n-link to="/p/42342" class="chip ">Television &amp; video</n-link>
                                <n-link to="/p/42342" class="chip ">Generators &amp; portable power</n-link>
                                <n-link to="/p/42342" class="chip ">Cameras</n-link>
                                <n-link to="/p/42342" class="chip ">Audios</n-link>
                                <n-link to="/p/42342" class="chip ">Musical Instrument</n-link>
                            </div>
                        </div>
                        <div class="shop-cat-item">
                            <n-link to="/p/42342">
                                <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="dkfashionCategory">
                                <span class="accord-chip-name">Fashion</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.05 13.616">
                                    <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                                </svg>
                            </n-link>
                            <div class="subcat-listing" id="dkfashionCategory">
                                <n-link to="/p/42342" class="chip ">Wedding wears</n-link>
                                <n-link to="/p/42342" class="chip ">Dress</n-link>
                                <n-link to="/p/42342" class="chip ">Shoes</n-link>
                                <n-link to="/p/42342" class="chip ">Bags</n-link>
                                <n-link to="/p/42342" class="chip ">Night clothes</n-link>
                            </div>
                        </div>
                    </div>
                </div>
                        <!-- end of desktop category listing -->
                    
                    <div class="business-product-listing">

                        <div class="section-header">
                            <h4>All products</h4>
                        </div>

                            <!-- business product listing -->
                        <div class="row">
                                        
                            <n-link to="/p/34232432" class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                <div class="product-card">
                                    <div class="product-card-image">
                                        <img src="~/assets/customer/image/zenfone.jpg" alt="">
                                    </div>
                                    <div class="product-card-details">
                                        <div class="product-name">
                                            Asus Zenfone 15xd modellite spax
                                        </div>
                                        <div class="product-price">₦ 1,200</div>
                                    </div>
                                </div>
                            </n-link>
                
                            <n-link to="/p/34232432" class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                <div class="product-card">
                                    <div class="product-card-image">
                                        <img src="~/assets/customer/image/zenfone.jpg" alt="">
                                    </div>
                                    <div class="product-card-details">
                                        <div class="product-name">
                                            Asus Zenfone
                                        </div>
                                        <div class="product-price">₦ 1,200</div>
                                    </div>
                                </div>
                            </n-link>
                
                                    
                            <n-link to="/p/34232432" class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                <div class="product-card">
                                    <div class="product-card-image">
                                        <img src="~/assets/customer/image/zenfone.jpg" alt="">
                                    </div>
                                    <div class="product-card-details">
                                        <div class="product-name">
                                            Asus Zenfone 15xd modellite spax
                                        </div>
                                        <div class="product-price">₦ 1,200</div>
                                    </div>
                                </div>
                            </n-link>
                
                            <n-link to="/p/34232432" class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                <div class="product-card">
                                    <div class="product-card-image">
                                        <img src="~/assets/customer/image/zenfone.jpg" alt="">
                                    </div>
                                    <div class="product-card-details">
                                        <div class="product-name">
                                            Asus Zenfone
                                        </div>
                                        <div class="product-price">₦ 1,200</div>
                                    </div>
                                </div>
                            </n-link>
                
                            <n-link to="/p/34232432" class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                            <div class="product-card">
                                <div class="product-card-image">
                                    <img src="~/assets/customer/image/zenfone.jpg" alt="">
                                </div>
                                <div class="product-card-details">
                                    <div class="product-name">
                                        Asus Zenfone
                                    </div>
                                    <div class="product-price">₦ 1,200</div>
                                </div>
                            </div>
                        </n-link>
                
                        <n-link to="/p/34232432" class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                            <div class="product-card">
                                <div class="product-card-image">
                                    <img src="~/assets/customer/image/zenfone.jpg" alt="">
                                </div>
                                <div class="product-card-details">
                                    <div class="product-name">
                                        Asus Zenfone
                                    </div>
                                    <div class="product-price">₦ 1,200</div>
                                </div>
                            </div>
                        </n-link>
                
                        <n-link to="/p/34232432" class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                        <div class="product-card">
                            <div class="product-card-image">
                                <img src="~/assets/customer/image/zenfone.jpg" alt="">
                            </div>
                            <div class="product-card-details">
                                <div class="product-name">
                                    Asus Zenfone
                                </div>
                                <div class="product-price">₦ 1,200</div>
                            </div>
                        </div>
                        </n-link>
                
                
                        <n-link to="/p/34232432" class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                        <div class="product-card">
                        <div class="product-card-image">
                            <img src="~/assets/customer/image/zenfone.jpg" alt="">
                        </div>
                        <div class="product-card-details">
                            <div class="product-name">
                                Asus Zenfone
                            </div>
                            <div class="product-price">₦ 1,200</div>
                        </div>
                        </div>
                        </n-link>
                
                
                        </div>
                        <!-- end of business product listing -->

                        <div class="load-more-action move-center">
                            <button class="btn btn-white">Load more products</button>
                        </div>

                        <!-- business name and details for desktop -->
                        <div class="desktop-business-bottom-details card">
                            <div class="d-flex">
                                <div class="business-bottom-logo">
                                    <img src="~/assets/customer/image/apple-logo.png" alt="">
                                </div>
                                <div class="bottom-business-details">
                                    <div class="business-name">Oremit Power Solution Limited</div>
                                    <div class="more-business-details mg-bottom-32">
                                        <div class="business-address">39 Ada-George road, opposite Eagle palace hotel, Port Harcourt, Rivers state.</div>
                                    </div>
                                    <div>
                                        <button class="btn btn-primary" data-target="businessDetailsModal" data-trigger="modal">View profile</button>
                                        <button class="btn btn-white" data-target="reportModal" data-trigger="modal">Report business</button>
                                        <button class="btn btn-white" data-target="contactBusiness" data-trigger="modal">Contact business</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end of business name and details for desktop -->
                    </div>
                </div>
            </div>
            
        </div>
        <!-- end of content container -->

        <div class="bottom-nav">
        <!-- footer -->
        <a href="#" class="bottom-nav-item" data-target="businessDetailsModal" data-trigger="modal">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <use xlink:href="~/assets/customer/image/all-svg.svg#addressCard"></use>
            </svg>
            <span>About</span>
        </a>

        <a href="#" class="bottom-nav-item" data-target="BusinessMobileSearchModal" data-trigger="modal">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <use xlink:href="~/assets/customer/image/all-svg.svg#searchIcon"></use>
            </svg>
            <span>Search in</span>
        </a>

        <a href="#" class="bottom-nav-item" data-target="reportModal" data-trigger="modal">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <use xlink:href="~/assets/customer/image/all-svg.svg#flag"></use>
            </svg>
            <span>Report</span>
        </a>

        <a href="#" class="bottom-nav-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <use xlink:href="~/assets/customer/image/all-svg.svg#whatsappIcon"></use>
            </svg>
            <span>Support</span>
        </a>
        </div>

      <!-- footer area -->
    <div class="mobile-hide-nav-bottom-add">
        <BOTTOMADS/>
        <nuxt />

        <CUSTOMERFOOTER />
        <nuxt />
    </div>

    </div>
  </div>
</template>

<script>
import MOBILENAVIGATION from '~/layouts/customer/mobile-navigation.vue'
import DESKTOPNAVGATION from '~/layouts/customer/desktop-navigation.vue'
import MOBILESEARCH from '~/layouts/customer/mobile-search.vue'
import BOTTOMADS from '~/layouts/customer/buttom-ads.vue'
import CUSTOMERFOOTER from '~/layouts/customer/customer-footer.vue'
import BUSINESSNAV from '~/layouts/customer/business/business-nav.vue'
export default {
    components: {
      DESKTOPNAVGATION, MOBILENAVIGATION, MOBILESEARCH, BOTTOMADS, CUSTOMERFOOTER, BUSINESSNAV
    }
}
</script>