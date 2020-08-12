<template>
    <div class="business">
        <div class="body-container">
            <TOPHEADER />
            <nuxt/>
            <div class="content-container">
                <SIDENAV />
                <nuxt />
                    <div class="content-area grey-bg-color">
                    <!-- pageLoader -->
                        <PAGELOADER v-if="pageLoader" />
                        <nuxt />
                        
                        <div class="main-content">
                            <div class="page-header">
                                <h4>Women's fashion subcategory</h4>
                            </div>

                            <div>
                                <!-- main content goes in here -->
                                <div class="row">
                                            
                                    <a href="/b/product/345345345" class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                        <div class="product-card">
                                            <div class="product-card-image">
                                                <img src="~/assets/business/image/zenfone.jpg" alt="">
                                            </div>
                                            <div class="product-card-details">
                                                <div class="product-name">
                                                    Asus Zenfone 15xd modellite spax
                                                </div>
                                                <div class="product-price">₦ 1,200</div>
                                            </div>
                                        </div>
                                    </a>
                                        
                                    <a href="/b/product/345345345" class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                        <div class="product-card">
                                            <div class="product-card-image">
                                                <img src="~/assets/business/image/zenfone.jpg" alt="">
                                            </div>
                                            <div class="product-card-details">
                                                <div class="product-name">
                                                    Asus Zenfone 15xd modellite spax
                                                </div>
                                                <div class="product-price">₦ 1,200</div>
                                            </div>
                                        </div>
                                    </a>

                                        
                                    <a href="/b/product/345345345" class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                        <div class="product-card">
                                            <div class="product-card-image">
                                                <img src="~/assets/business/image/zenfone.jpg" alt="">
                                            </div>
                                            <div class="product-card-details">
                                                <div class="product-name">
                                                    Asus Zenfone 15xd modellite spax
                                                </div>
                                                <div class="product-price">₦ 1,200</div>
                                            </div>
                                        </div>
                                    </a>

                                        
                                    <a href="/b/product/345345345" class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                        <div class="product-card">
                                            <div class="product-card-image">
                                                <img src="~/assets/business/image/zenfone.jpg" alt="">
                                            </div>
                                            <div class="product-card-details">
                                                <div class="product-name">
                                                    Asus Zenfone 15xd modellite spax
                                                </div>
                                                <div class="product-price">₦ 1,200</div>
                                            </div>
                                        </div>
                                    </a>

                                        
                                    <a href="/b/product/345345345" class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                        <div class="product-card">
                                            <div class="product-card-image">
                                                <img src="~/assets/business/image/zenfone.jpg" alt="">
                                            </div>
                                            <div class="product-card-details">
                                                <div class="product-name">
                                                    Asus Zenfone 15xd modellite spax
                                                </div>
                                                <div class="product-price">₦ 1,200</div>
                                            </div>
                                        </div>
                                    </a>

                                        
                                    <a href="/b/product/345345345" class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                        <div class="product-card">
                                            <div class="product-card-image">
                                                <img src="~/assets/business/image/zenfone.jpg" alt="">
                                            </div>
                                            <div class="product-card-details">
                                                <div class="product-name">
                                                    Asus Zenfone 15xd modellite spax
                                                </div>
                                                <div class="product-price">₦ 1,200</div>
                                            </div>
                                        </div>
                                    </a>

                                        
                                    <a href="/b/product/345345345" class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                        <div class="product-card">
                                            <div class="product-card-image">
                                                <img src="~/assets/business/image/zenfone.jpg" alt="">
                                            </div>
                                            <div class="product-card-details">
                                                <div class="product-name">
                                                    Asus Zenfone 15xd modellite spax
                                                </div>
                                                <div class="product-price">₦ 1,200</div>
                                            </div>
                                        </div>
                                    </a>

                                        
                                    <a href="/b/product/345345345" class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                        <div class="product-card">
                                            <div class="product-card-image">
                                                <img src="~/assets/business/image/zenfone.jpg" alt="">
                                            </div>
                                            <div class="product-card-details">
                                                <div class="product-name">
                                                    Asus Zenfone 15xd modellite spax
                                                </div>
                                                <div class="product-price">₦ 1,200</div>
                                            </div>
                                        </div>
                                    </a>

                                        
                                    <a href="/b/product/345345345" class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                        <div class="product-card">
                                            <div class="product-card-image">
                                                <img src="~/assets/business/image/zenfone.jpg" alt="">
                                            </div>
                                            <div class="product-card-details">
                                                <div class="product-name">
                                                    Asus Zenfone 15xd modellite spax
                                                </div>
                                                <div class="product-price">₦ 1,200</div>
                                            </div>
                                        </div>
                                    </a>

                                </div>
                            </div>


                        </div>
                        <BOTTOMNAV />
                        <nuxt/>
                    </div>
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
