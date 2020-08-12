<template>
    <div class="business">
        <div class="body-container">
            <TOPHEADER />
            <nuxt/>
            <div class="content-container">
                <SIDENAV />
                <nuxt />
                    <div class="content-area white-bg-color">
                        <!-- pageLoader -->
                        <PAGELOADER v-if="pageLoader" />
                        <nuxt />
                        
                        <div class="main-content">

                            <div class="page-header">
                                <h4>Blonde Trouser</h4>
                                <div class="upload-tab-category">
                                    <span>Women's fashion</span>
                                    <span>
                                        <svg>
                                            <use xlink:href="~/assets/business/image/all-svg.svg#rightArrow"></use>
                                        </svg>
                                    </span>
                                    <span>Clothing</span>
                                </div>
                            </div>

                            <div class="md-flex mg-top-16">
                                <!-- main content goes in here -->
                                <!-- product image area -->
                                <div class="product-details-image-info">
                                    <div class="product-details-img-container">

                                        <div class="slide-container" id="productImageSlideShow">
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
                                            <svg xmlns="http://www.w3.org/2000/svg" width="7.41" height="12" viewBox="0 0 7.41 12">
                                                <use xlink:href="~/assets/business/image/all-svg.svg#leftArrow"></use>
                                            </svg>
                                        </button>
                                        <button class="close-modal-btn btn-light-grey" id="nextSlide" @click="nextImage">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="8.375" height="13.562" viewBox="0 0 8.375 13.562">
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


                                <div class="product-details-content-info">
                                    <div class="product-details-name"><h2>Blonde Trouser</h2></div>
                                    <div class="product-price-container">
                                        <div class="product-details-price"><h3>₦ 2,500</h3></div>
                                        <a href="javasscript:;" class="navbar-review-icon" data-trigger="modal" data-target="productReview">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                            </svg>
                                        </a>
                                    </div>

                                    <!-- Description -->
                                    <div class="product-details-container mg-bottom-32">
                                        <div class="product-details-label">
                                            Product Description
                                        </div>
                                        <div class="product-description-text">
                                            Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Phasellus magna. Fusce pharetra convallis urna. Curabitur suscipit suscipit dictum felis eu pede mollis pretium. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Sed hendrerit…. <span>Show more</span>
                                        </div>
                                    </div>

                                    <!-- sizes -->
                                    <div class="product-details-container">
                                        <div class="product-details-label">
                                            Available sizes <span>- choose your size</span>
                                        </div>
                                        <div class="color-picker-container">
                                            <div class="size-card">43</div>
                                            <div class="size-card">38</div>
                                            <div class="size-card">24</div>
                                            <div class="size-card">43</div>
                                            <div class="size-card">38</div>
                                            <div class="size-card">43</div>
                                            <div class="size-card">24</div>
                                            <div class="size-card">43</div>
                                            <div class="size-card">38</div>
                                            <div class="size-card">43</div>
                                        </div>
                                    </div>

                                    <!-- sizes -->
                                    <div class="product-details-container">
                                        <div class="product-details-label">
                                            Available colors <span>- choose your size</span>
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


                                    <!-- Share -->
                                    <div class="product-details-container">
                                        <div class="product-details-label">
                                            Share
                                        </div>
                                        <div id="productLink" class="opacity-0">https://cudua.com/bubbieklassiq/2342342/323424/product-name</div>
                                        <div class="share-action-container">
                                            <a href="#" class="close-modal-btn btn-white" @click="copyLink('productLink')">
                                                <svg height="24px" viewBox="0 0 448 512" width="23px" xmlns="http://www.w3.org/2000/svg">
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#copyIcon"></use>
                                                </svg>
                                            </a>

                                            <a href="#" class="close-modal-btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#facebookIcon"></use>
                                                </svg>
                                            </a>
                                            <a href="#" class="close-modal-btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#whatsappIcon"></use>
                                                </svg>
                                            </a>

                                            <a href="#" class="close-modal-btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#twitterIcon"></use>
                                                </svg>
                                            </a>

                                        </div>
                                    </div>


                                    <div class="product-details-container">
                                        <div class="product-details-action">
                                            <nuxt-link to="#" class="btn btn-light-grey">View</nuxt-link>
                                            <nuxt-link to="/b/product/edit/34567890876543" class="btn btn-light-grey">Edit</nuxt-link>
                                            <button class="btn btn-light-grey">Hide</button>
                                            <button class="btn btn-light-grey">Delete</button>
                                        </div>
                                    </div>

                                    

                                </div>
                            </div>
                        </div>
                        <BOTTOMNAV />
                        <nuxt/>
                    </div>
            </div>
            <PRODUCTREVIEW />
            <nuxt />
        </div>
    </div>
</template>

<script>

import TOPHEADER from '~/layouts/business/top-navigation.vue';
import SIDENAV from '~/layouts/business/side-bar.vue';
import BOTTOMNAV from '~/layouts/business/bottom-nav.vue';
import PRODUCTREVIEW from '~/components/business/product/product.review.vue';
import PAGELOADER from '~/components/loader/loader.vue';
export default {
    components: {
        TOPHEADER, SIDENAV, BOTTOMNAV, PRODUCTREVIEW, PAGELOADER
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