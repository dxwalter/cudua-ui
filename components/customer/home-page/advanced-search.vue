<template>
      <div class="big-search-banner" id="">
      <h1 class="banner-big-text">Buy products from shops around you.</h1>
      
      <div class="advanced-search" id="advancedSearchContainer">
        <div class="big-search-banner-search" id="homeAdvancedSearch">
            <div class="search-form-manager">
              <div class="form-control">
                <input type="text" name="" id="" placeholder="What do you want to buy?" class="advanced-search-product input-form grey-bg-color add-border">
              </div>
              <div class="form-control">
                <input type="text" name="" id="" placeholder="Type the street or community" class="advanced-search-location input-form grey-bg-color add-border">
              </div>
            </div>
            
            <div class="form-control">
              <button class="btn btn-primary btn-lg" id="findShop" @click="findShop">Find shops</button>
            </div>
            <div class="advance-close-button">
              <button class="close-modal-btn">
                <input type="checkbox" class="dropdownCheckBox"  data-advanced-search="advancedSearchContainer">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" class="margin-unset">
                    <use xlink:href="~/assets/customer/image/all-svg.svg#times"></use>
                </svg>
              </button>
            </div>
        </div>

        <div class="advanced-search-result-area">
          <div class="row">                           
            <a href="#" class="col-xs-6 col-sm-6 col-md-4 col-lg-2">
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
            </a>

            <a href="#" class="col-xs-6 col-sm-6 col-md-4 col-lg-2">
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
            </a>

            <a href="#" class="col-xs-6 col-sm-6 col-md-4 col-lg-2">
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
            </a>

            <a href="#" class="col-xs-6 col-sm-6 col-md-4 col-lg-2">
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
            </a>

            <a href="#" class="col-xs-6 col-sm-6 col-md-4 col-lg-2">
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
            </a>

            <a href="#" class="col-xs-6 col-sm-6 col-md-4 col-lg-2">
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
            </a>

            <a href="#" class="col-xs-6 col-sm-6 col-md-4 col-lg-2">
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
            </a>

            <a href="#" class="col-xs-6 col-sm-6 col-md-4 col-lg-2">
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
            </a>
          </div>
        </div>

        <div class="filter-btn-container">
          <button class="close-modal-btn btn-icon btn-primary advn-search-filter">
            <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="homeAdvancedSearch">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <use xlink:href="~/assets/customer/image/all-svg.svg#advancedSearch"></use>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" class="last-svg">
              <use xlink:href="~/assets/customer/image/all-svg.svg#times"></use>
            </svg>
          </button>
        </div>

        <div class="mobile-close-search">
          <button class="btn btn-md btn-block btn-default" data-advanced-search="advancedSearchContainer">Close search</button>
        </div>
      </div>
      
    </div>
</template>

<script>

export default {
    data: function () {
        return {
            screenWidth: ""
        }
    },
    created() {
        if (process.client) {
            window.addEventListener('resize', this.handleResize);
        }
    },
    computed: {
        handleResize() {
            this.screenWidth = window.innerWidth;
        }
    },
    methods: {
        findShop: function () {
            document.querySelector("body").classList.add('overflow-hidden')
            document.getElementById('advancedSearchContainer').classList.add('is-active')
            // remove show effect
            let removeSearch = document.getElementById('homeAdvancedSearch')
            removeSearch.classList.remove('showEffect')
        },
        closeSearch: function (e) {
            let getDataAttribute = e.target;
            let closeTarget = getDataAttribute.getAttribute('data-advanced-search');
            document.querySelector("body").classList.remove('overflow-hidden')
            document.getElementById(closeTarget).classList.remove('is-active')
        },
        fixedSearchArea: function(advancedSearchstickyElement) {
            let currStickyPos =  advancedSearchstickyElement.getBoundingClientRect().top + window.pageYOffset; 
            if(this.screenWidth >= 1024) {
                window.onscroll = function() { 
                    if (window.pageYOffset > currStickyPos) { 
                        advancedSearchstickyElement.style.position = "fixed"; 
                        advancedSearchstickyElement.style.top = "0px"; 
                        advancedSearchstickyElement.style.zIndex = 1000; 
                        advancedSearchstickyElement.style.height = '90px';
                        advancedSearchstickyElement.style.paddingTop = '16px'
                        advancedSearchstickyElement.style.paddingBottom = '16px'
                    } else { 
                        advancedSearchstickyElement.style.position = "absolute"; 
                        advancedSearchstickyElement.style.top = "initial"; 
                        advancedSearchstickyElement.style.height = 'unset';
                        advancedSearchstickyElement.style.paddingTop = '32px'
                        advancedSearchstickyElement.style.paddingBottom = '32px'
                    } 
                } 
            }
        }
    },
    mounted () {
        // close advanced search
        let closeAdvancedSearch = document.querySelectorAll('[data-advanced-search]');
        for (const action of closeAdvancedSearch) {
            action.addEventListener('click', (e) => {
                e.stopPropagation(); this.closeSearch(e)            
            })
        }

        /**
         * This is for the Home page advanced search;
         * The searcg area will stick to the top when
         * to scrolls to the top
         */

        let advancedSearchstickyElement = document.getElementById("homeAdvancedSearch"); 
        if (advancedSearchstickyElement) this.fixedSearchArea(advancedSearchstickyElement)
    }
}
</script>

<style>

</style>