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
                                <h4>Add product categories</h4>
                            </div>

                            <div class="product-categories-container">
                                <div class="card create-cat-card-layout">

                                    <!-- <div class="form-control">
                                        <label for="businessType" class="form-label">Choose your business type</label>
                                        <input type="text" name="" id="businessType" class="input-form">
                                    </div> -->

                                    <div class="form-control">
                                        <label for="businessCategory" class="form-label">Select a category</label>
                                        <select class="input-form">
                                            <option value="fashion">Fashion</option>
                                            <option value="Electronics">Electronics</option>
                                            <option value="Computers">Computers</option>
                                        </select>
                                    </div>

                                    <div class="form-control mg-bottom-32">
                                        <label for="businessCategory" class="form-label">Select subcategories</label>
                                        <div class="chip-container">
                                            <a href="#" class="chip">Wedding wears</a>
                                            <a href="#" class="chip">Dress</a>
                                            <a href="#" class="chip">Men's shoes</a>
                                            <a href="#" class="chip">Wedding wears</a>
                                            <a href="#" class="chip">Shoes</a>
                                            <a href="#" class="chip">Wedding wears</a>
                                            <a href="#" class="chip">Wedding wears</a>
                                        </div>
                                    </div>


                                    <div class="form-control">
                                        <label for="businessCategory" class="form-label">I cannot find my product's category/subcategory</label>
                                        <div class="create-footer-options">
                                            <button type="button" class="btn btn-white btn-small" data-trigger="modal" data-target="createCategoryModal">Create category/subcategories</button>
                                        </div>
                                    </div>

                                </div>

                                <div class="card selected-cat-card">
                                    <div class="card-header">
                                        <h4>Selected product categories</h4>
                                    </div>
                                    
                                    <div class="selected-cat-container">

                                        <div class="selected-cat">
                                            <div class="header">
                                                <h3>Fashion</h3>
                                                <button type="button" class="btn btn-white  btn-small">Remove category</button>
                                            </div>
                                            
                                            <div class="form-label mg-bottom-24">Tap/click to remove subcategory</div>

                                            <div class="chip-container">
                                                <a href="#" class="chip">Wedding wears 
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                    </svg>
                                                </a>
                                                <a href="#" class="chip">Dress
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                    </svg>
                                                </a>
                                                <a href="#" class="chip">Men's shoes
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                    </svg>
                                                </a>
                                                <a href="#" class="chip">Wedding wears
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                    </svg>
                                                </a>
                                                <a href="#" class="chip">Shoes
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                    </svg>
                                                </a>
                                                <a href="#" class="chip">Wedding wears
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                    </svg>
                                                </a>
                                                <a href="#" class="chip">Wedding wears
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                        
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>

                                        <div class="selected-cat">
                                            <div class="header">
                                                <h3>Fashion</h3>
                                                <button type="button" class="btn btn-white  btn-small">Remove category</button>
                                            </div>
                                            
                                            <div class="form-label mg-bottom-24">Tap/click to remove subcategory</div>

                                            <div class="chip-container">
                                                <a href="#" class="chip">Wedding wears 
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                    </svg>
                                                </a>
                                                <a href="#" class="chip">Dress
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                    </svg>
                                                </a>
                                                <a href="#" class="chip">Men's shoes
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                    </svg>
                                                </a>
                                                <a href="#" class="chip">Suits
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                    </svg>
                                                </a>
                                                <a href="#" class="chip">Shoes
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                    </svg>
                                                </a>
                                                <a href="#" class="chip">Lingeries
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                    </svg>
                                                </a>
                                                <a href="#" class="chip">Kid wears
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                    </svg>
                                                </a>
                                            </div>

                                        </div>

                                    </div>

                                    <div class="action-area">
                                        <button class="btn btn-block btn-primary" type="button">Submit product categories</button>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <BOTTOMNAV />
                        <nuxt/>
                    </div>
            </div>
            <ADDCATEGORIESMODAL/>
            <nuxt/>
        </div>
    </div>
</template>

<script>

import TOPHEADER from '~/layouts/business/top-navigation.vue';
import SIDENAV from '~/layouts/business/side-bar.vue';
import BOTTOMNAV from '~/layouts/business/bottom-nav.vue';
import ADDCATEGORIESMODAL from'~/components/business/categories/addCategories.vue'
import PAGELOADER from '~/components/loader/loader.vue';

export default {
    components: {
        TOPHEADER, SIDENAV, BOTTOMNAV, ADDCATEGORIESMODAL, PAGELOADER
    },
    data : function () {
        return {
            pageLoader: true
        }
	},
    mounted() {
        setTimeout(() => {
            this.pageLoader = false
        }, 5000);
    }

}
</script>