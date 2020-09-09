<template>
    <div class="customer">
            <div class="body-container grey-bg-color">
            
                    <!-- beginning of navigation container -->
                        <div class="nav-container">
                            <MOBILESEARCH></MOBILESEARCH>
                            <nuxt />
                            <!-- <BUSINESSNAV></BUSINESSNAV> -->
                            <MOBILENAVIGATION></MOBILENAVIGATION>
                            <nuxt />
                        </div>

                        <!-- pageLoader -->
                        <!-- <PAGELOADER v-if="pageLoader"></PAGELOADER> -->

                        <!-- begining of content container -->
                        <div class="content-container-second business-page-container">

                            <!-- mobile category navigation -->
                            <div class="mobile-shop-cat-listing">
                                <button class="bis-nav-btn" id="showBusinessCategory" @click="showMobileCategory">
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
                                            <button class="close-modal-btn" id="closeMobileBusinessCategory" @click="hideMobileCategory">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" class="margin-unset">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#times"></use>
                                                </svg>
                                            </button>
                                        </div>
                                        
                                        <div class="shop-cat-item">
                                            <a href="javascript:void()">
                                                <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="fashionCategory">
                                                <span class="accord-chip-name">Fashion</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.05 13.616">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                                                </svg>
                                            </a>
                                            <div class="subcat-listing" id="fashionCategory">
                                                <a href="javascript:void()" class="chip ">Wedding wears</a>
                                                <a href="javascript:void()" class="chip ">Dress</a>
                                                <a href="javascript:void()" class="chip ">Shoes</a>
                                                <a href="javascript:void()" class="chip ">Bags</a>
                                                <a href="javascript:void()" class="chip ">Night clothes</a>
                                            </div>
                                        </div>

                                        <div class="shop-cat-item">
                                            <a href="javascript:void()">
                                                <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="ElectronicsCategory">
                                                <span class="accord-chip-name">Electronics</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.05 13.616">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                                                </svg>
                                            </a>
                                            <div class="subcat-listing" id="ElectronicsCategory">
                                                <a href="javascript:void()" class="chip ">Television &amp; video</a>
                                                <a href="javascript:void()" class="chip ">Generators &amp; portable power</a>
                                                <a href="javascript:void()" class="chip ">Cameras</a>
                                                <a href="javascript:void()" class="chip ">Audios</a>
                                                <a href="javascript:void()" class="chip ">Musical Instrument</a>
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
                                                <n-link to="#">
                                                    <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="dkElectronicsCategory">
                                                    <span class="accord-chip-name">Electronics</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.05 13.616">
                                                        <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                                                    </svg>
                                                </n-link>
                                                <div class="subcat-listing" id="dkElectronicsCategory">
                                                    <n-link to="#" class="chip ">Television &amp; video</n-link>
                                                    <n-link to="#" class="chip ">Generators &amp; portable power</n-link>
                                                    <n-link to="#" class="chip ">Cameras</n-link>
                                                    <n-link to="#" class="chip ">Audios</n-link>
                                                    <n-link to="#" class="chip ">Musical Instrument</n-link>
                                                </div>
                                            </div>
                                            <div class="shop-cat-item">
                                                <n-link to="#">
                                                    <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="dkfashionCategory">
                                                    <span class="accord-chip-name">Fashion</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.05 13.616">
                                                        <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                                                    </svg>
                                                </n-link>
                                                <div class="subcat-listing" id="dkfashionCategory">
                                                    <n-link to="#" class="chip ">Wedding wears</n-link>
                                                    <n-link to="#" class="chip ">Dress</n-link>
                                                    <n-link to="#" class="chip ">Shoes</n-link>
                                                    <n-link to="#" class="chip ">Bags</n-link>
                                                    <n-link to="#" class="chip ">Night clothes</n-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of desktop category listing -->
                                    
                                    <div class="business-product-listing">

                                        <div class="section-header d-flex-between business-page-action">
                                            <h4>All products</h4>
                                            <button class="btn btn-white btn-md">All products</button>
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
                            <!-- <BOTTOMADS></BOTTOMADS> -->
                            <!-- <CUSTOMERFOOTER></CUSTOMERFOOTER> -->
                        </div>

                <!-- modals -->
                <!-- <ABOUTBUSINESSMODAL></ABOUTBUSINESSMODAL> -->
                <!-- <BUSINESSREVIEW></BUSINESSREVIEW> -->
                <!-- <BUSINESSSEARCH></BUSINESSSEARCH> -->
                <!-- <BUSINESSCONTACT></BUSINESSCONTACT> -->
                <!-- <REPORTBUSINESS></REPORTBUSINESS> -->
            </div>
    </div>
</template>

<script>

import MOBILENAVIGATION from '~/layouts/customer/mobile-navigation.vue';
import MOBILESEARCH from '~/layouts/customer/mobile-search.vue';
// import BOTTOMADS from '~/layouts/customer/buttom-ads.vue';
// import CUSTOMERFOOTER from '~/layouts/customer/customer-footer.vue';
// import BUSINESSNAV from '~/layouts/customer/business/business-nav.vue';
// import PAGELOADER from '~/components/loader/loader.vue';

// business modal
// import ABOUTBUSINESSMODAL from '~/layouts/customer/business/about-modal.vue';
// import BUSINESSREVIEW from '~/layouts/customer/business/business-review-modal.vue';
// import BUSINESSSEARCH from '~/layouts/customer/business/business-search-modal.vue';
// import BUSINESSCONTACT from '~/layouts/customer/business/contact-business.vue';
// import REPORTBUSINESS from '~/layouts/customer/business/report-modal.vue';

import { mapActions, mapGetters } from 'vuex'


export default {
    name: "BUSINESSPAGE",
    components: {
        MOBILENAVIGATION, 
        MOBILESEARCH, 
        // BOTTOMADS, 
        // CUSTOMERFOOTER, 
        // BUSINESSNAV, 
        // PAGELOADER,
        // ABOUTBUSINESSMODAL,
        // BUSINESSREVIEW,
        // BUSINESSSEARCH,
        // BUSINESSCONTACT,
        // REPORTBUSINESS
    },
    data: function() {
      return {
        anonymousId: "",
        pageLoader: ""
      }
    },
    computed: {
	  ...mapGetters({'GetAnonymousId': 'customer/GetAnonymousId'}),
    },
    methods: {
        showMobileCategory: function () {
            if (process.client) {
                let businessCategoryContainer = document.getElementById('businessCategoryContainer');
                let businessCategoryContent = document.getElementById('businessCategoryContent');
                this.$showCustomerMobileNav(businessCategoryContainer, businessCategoryContent, "0");
            }
        },
        hideMobileCategory: function () {
            if (process.client) {
                let businessCategoryContainer = document.getElementById('businessCategoryContainer');
                let businessCategoryContent = document.getElementById('businessCategoryContent');
                this.$showCustomerMobileNav(businessCategoryContainer, businessCategoryContent, '1')
            }
        },
        closeBySubcategory: function (CategoryContainer) {
            if (process.client) {
                for (let i = 0; i < CategoryContainer.length; i++) {
                    CategoryContainer[i].addEventListener("click", event => {
                        this.hideMobileCategory();
                    })
                }
            }
        }
    },
    created: function () {

    },
    mounted () {
        this.anonymousId = this.GetAnonymousId
    }
}
</script>