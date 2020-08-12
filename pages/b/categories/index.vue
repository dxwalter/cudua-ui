<template>
    <div class="business">
        <div class="body-container">
            <TOPHEADER />
            <nuxt/>
            <div class="content-container">
                <SIDENAV />
                <nuxt />
                    <div class="content-area">
                        <!-- pageLoader -->
                        <PAGELOADER v-if="pageLoader" />
                        <nuxt />

                        <div class="main-content">
                            <div class="page-header">
                                <h4>Product categories</h4>
                            </div>
                            <div>
                                <!-- main content goes in here -->
                                <div class="accordion grey-bg-color border-radius-4">
                                    <div class="accordion-header">
                                        <a href="#"> 
                                            <h4 data-single-tab="singleTab" data-target="womens-fashion">Women's fashion fashion </h4>
                                        </a>
                                        <div class="accordion-btn-container">
                                            <div class="dropdown-area">
                                                <button class="btn-ellipsis btn-checkbox">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="16" viewBox="0 0 4 16">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#verticalElipsis"></use>
                                                    </svg>
                                                </button>
                                                <input type="checkbox" class="dropdownCheckBox">
                                                <div class="dropdown-container showEffect">
                                                <a href="#">
                                                    <svg>
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#pencil"></use>
                                                    </svg>
                                                    <span>Edit category</span>
                                                </a>
                                                <a href="#">
                                                    <svg>
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#visibilityOff"></use>
                                                    </svg>
                                                    <span>Hide category</span>
                                                </a>
                                                <a href="#">
                                                    <svg>
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#delete"></use>
                                                    </svg>
                                                    <span>Delete category</span>
                                                </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-content-container showEffect" id="womens-fashion">

                                        <div class="row">
                                            
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                                <div class="product-card">
                                                    <a href="/b/product/subcategory/87654345" class="category-name-area">
                                                        <h3>Jewelry</h3>
                                                        <div class="subcat-details">15 items in this subcategory</div>
                                                    </a>
                                                    <div class="subcat-action-area">
                                                        <button class="btn btn-light-grey btn-small">Hide</button>
                                                        <button class="btn btn-light-grey btn-small">Remove</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                                <div class="product-card">
                                                    <a href="/b/product/subcategory/87654345" class="category-name-area">
                                                        <h3>Clothing</h3>
                                                        <div class="subcat-details">15 items in this subcategory</div>
                                                    </a>
                                                    <div class="subcat-action-area">
                                                        
                                                        <button class="btn btn-light-grey btn-small">Hide</button>
                                                        <button class="btn btn-light-grey btn-small">Remove</button>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                                <div class="product-card">
                                                    <a href="/b/product/subcategory/87654345" class="category-name-area">
                                                        <h3>Women's Accessories</h3>
                                                        <div class="subcat-details">15 items in this subcategory</div>
                                                    </a>
                                                    <div class="subcat-action-area">
                                                        
                                                        <button class="btn btn-light-grey btn-small">Hide</button>
                                                        <button class="btn btn-light-grey btn-small">Remove</button>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                                <div class="product-card">
                                                    <a href="/b/product/subcategory/87654345" class="category-name-area">
                                                        <h3>Handbags &amp; wallets</h3>
                                                        <div class="subcat-details">15 items in this subcategory</div>
                                                    </a>
                                                    <div class="subcat-action-area">
                                                        
                                                        <button class="btn btn-light-grey btn-small">Hide</button>
                                                        <button class="btn btn-light-grey btn-small">Remove</button>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                                <div class="product-card">
                                                    <a href="/b/product/subcategory/87654345" class="category-name-area">
                                                        <h3>Shoes</h3>
                                                        <div class="subcat-details">15 items in this subcategory</div>
                                                    </a>
                                                    <div class="subcat-action-area">
                                                        
                                                        <button class="btn btn-light-grey btn-small">Hide</button>
                                                        <button class="btn btn-light-grey btn-small">Remove</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                                <div class="product-card">
                                                    <a href="/b/product/subcategory/87654345" class="category-name-area">
                                                        <h3>Underwear &amp; sleepwear</h3>
                                                        <div class="subcat-details">15 items in this subcategory</div>
                                                    </a>
                                                    <div class="subcat-action-area">
                                                        
                                                        <button class="btn btn-light-grey btn-small">Hide</button>
                                                        <button class="btn btn-light-grey btn-small">Remove</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                                <div class="product-card">
                                                    <a href="/b/product/subcategory/87654345" class="category-name-area">
                                                        <h3>Maternity</h3>
                                                        <div class="subcat-details">15 items in this subcategory</div>
                                                    </a>
                                                    <div class="subcat-action-area">
                                                        
                                                        <button class="btn btn-light-grey btn-small">Hide</button>
                                                        <button class="btn btn-light-grey btn-small">Remove</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                                <div class="product-card">
                                                    <a href="/b/product/subcategory/87654345" class="category-name-area">
                                                        <h3>Plus-Size</h3>
                                                        <div class="subcat-details">15 items in this subcategory</div>
                                                    </a>
                                                    <div class="subcat-action-area">
                                                        
                                                        <button class="btn btn-light-grey btn-small">Hide</button>
                                                        <button class="btn btn-light-grey btn-small">Remove</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                                <div class="product-card">
                                                    <a href="/b/product/subcategory/87654345" class="category-name-area">
                                                        <h3>Customers &amp; Accessories</h3>
                                                        <div class="subcat-details">15 items in this subcategory</div>
                                                    </a>
                                                    <div class="subcat-action-area">
                                                        
                                                        <button class="btn btn-light-grey btn-small">Hide</button>
                                                        <button class="btn btn-light-grey btn-small">Remove</button>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>

                                    </div>
                                </div>

                                <div class="accordion grey-bg-color border-radius-4">
                                    <div class="accordion-header">
                                        <a href="#"> 
                                            <h4 data-single-tab="singleTab" data-target="womens-fashion2">Men's fashion</h4>
                                        </a>
                                        <div class="accordion-btn-container">
                                            <div class="dropdown-area">
                                                <button class="btn-ellipsis btn-checkbox">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="16" viewBox="0 0 4 16">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#verticalElipsis"></use>
                                                    </svg>
                                                </button>
                                                <input type="checkbox" class="dropdownCheckBox">
                                                <div class="dropdown-container showEffect">
                                                <a href="#">
                                                    <svg>
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#pencil"></use>
                                                    </svg>
                                                    <span>Edit category</span>
                                                </a>
                                                <a href="#">
                                                    <svg>
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#visibilityOff"></use>
                                                    </svg>
                                                    <span>Hide category</span>
                                                </a>
                                                <a href="#">
                                                    <svg>
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#delete"></use>
                                                    </svg>
                                                    <span>Delete category</span>
                                                </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-content-container" id="womens-fashion2">

                                        <div class="row">
                                            
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                                <div class="product-card">
                                                    <a href="/b/product/subcategory/87654345" class="category-name-area">
                                                        <h3>Jewelry</h3>
                                                        <div class="subcat-details">15 items in this subcategory</div>
                                                    </a>
                                                    <div class="subcat-action-area">
                                                        
                                                        <button class="btn btn-light-grey btn-small">Hide</button>
                                                        <button class="btn btn-light-grey btn-small">Remove</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                                <div class="product-card">
                                                    <a href="/b/product/subcategory/87654345" class="category-name-area">
                                                        <h3>Clothing</h3>
                                                        <div class="subcat-details">15 items in this subcategory</div>
                                                    </a>
                                                    <div class="subcat-action-area">
                                                        
                                                        <button class="btn btn-light-grey btn-small">Hide</button>
                                                        <button class="btn btn-light-grey btn-small">Remove</button>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                                <div class="product-card">
                                                    <a href="/b/product/subcategory/87654345" class="category-name-area">
                                                        <h3>Women's Accessories</h3>
                                                        <div class="subcat-details">15 items in this subcategory</div>
                                                    </a>
                                                    <div class="subcat-action-area">
                                                        
                                                        <button class="btn btn-light-grey btn-small">Hide</button>
                                                        <button class="btn btn-light-grey btn-small">Remove</button>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                                <div class="product-card">
                                                    <a href="/b/product/subcategory/87654345" class="category-name-area">
                                                        <h3>Handbags &amp; wallets</h3>
                                                        <div class="subcat-details">15 items in this subcategory</div>
                                                    </a>
                                                    <div class="subcat-action-area">
                                                        
                                                        <button class="btn btn-light-grey btn-small">Hide</button>
                                                        <button class="btn btn-light-grey btn-small">Remove</button>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                                <div class="product-card">
                                                    <a href="/b/product/subcategory/87654345" class="category-name-area">
                                                        <h3>Shoes</h3>
                                                        <div class="subcat-details">15 items in this subcategory</div>
                                                    </a>
                                                    <div class="subcat-action-area">
                                                        
                                                        <button class="btn btn-light-grey btn-small">Hide</button>
                                                        <button class="btn btn-light-grey btn-small">Remove</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                                <div class="product-card">
                                                    <a href="/b/product/subcategory/87654345" class="category-name-area">
                                                        <h3>Underwear &amp; sleepwear</h3>
                                                        <div class="subcat-details">15 items in this subcategory</div>
                                                    </a>
                                                    <div class="subcat-action-area">
                                                        
                                                        <button class="btn btn-light-grey btn-small">Hide</button>
                                                        <button class="btn btn-light-grey btn-small">Remove</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                                <div class="product-card">
                                                    <a href="/b/product/subcategory/87654345" class="category-name-area">
                                                        <h3>Maternity</h3>
                                                        <div class="subcat-details">15 items in this subcategory</div>
                                                    </a>
                                                    <div class="subcat-action-area">
                                                        
                                                        <button class="btn btn-light-grey btn-small">Hide</button>
                                                        <button class="btn btn-light-grey btn-small">Remove</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                                <div class="product-card">
                                                    <a href="/b/product/subcategory/87654345" class="category-name-area">
                                                        <h3>Plus-Size</h3>
                                                        <div class="subcat-details">15 items in this subcategory</div>
                                                    </a>
                                                    <div class="subcat-action-area">
                                                        
                                                        <button class="btn btn-light-grey btn-small">Hide</button>
                                                        <button class="btn btn-light-grey btn-small">Remove</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                                <div class="product-card">
                                                    <a href="/b/product/subcategory/87654345" class="category-name-area">
                                                        <h3>Customers &amp; Accessories</h3>
                                                        <div class="subcat-details">15 items in this subcategory</div>
                                                    </a>
                                                    <div class="subcat-action-area">
                                                        
                                                        <button class="btn btn-light-grey btn-small">Hide</button>
                                                        <button class="btn btn-light-grey btn-small">Remove</button>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <BOTTOMNAV />
                        <nuxt/>
                    </div>
            </div>
            <div class="filter-btn-container">
                <nuxt-link to="/b/categories/add-categories" class="close-modal-btn btn-icon btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <use xlink:href="~/assets/business/image/all-svg.svg#plusSign"></use>
                </svg>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>

import TOPHEADER from '~/layouts/business/top-navigation.vue';
import SIDENAV from '~/layouts/business/side-bar.vue';
import BOTTOMNAV from '~/layouts/business/bottom-nav.vue';
import PAGELOADER from '~/components/loader/loader.vue'
export default {
    components: {
        TOPHEADER, SIDENAV, BOTTOMNAV, PAGELOADER
    },
    data: function() {
        return {
            pageLoader: true
        }
    },
    mounted () {    
        setTimeout(() => {
            this.pageLoader = false
        }, 5000);
    }
}
</script>