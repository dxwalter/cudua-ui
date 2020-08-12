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
                            <h4>Add product</h4>
                        </div>

                        <div class="product-upload-container">
                            <!-- main content goes in here -->

                            <div class="upload-tab-area" id="tabList">
                                <a href="javascript:;" class="chip-tab-item is-active" id="tabLink" data-tab="basicInfo">Basic details</a>
                                <a href="javascript:;" class="chip-tab-item" id="tabLink" data-tab="moreInfo">Add more details</a>
                            </div>

                            <div class="upload-tab-content" id="tabContent">
                                <div class="is-active tab-content-area" id="basicInfo">                                

                                    <div class="form-control">
                                        <!-- <label for="businessType" class="form-label">Product name</label> -->
                                        <input type="text" name="" id="businessType" class="input-form white-bg-color" placeholder="Product name">
                                    </div>

                                    <div class="form-control">
                                        <!-- <label for="businessType" class="form-label">Product price</label> -->
                                        <input type="text" name="" id="businessType" class="input-form white-bg-color" placeholder="Product price">
                                    </div>

                                    <div class="form-control " id="singleTabContainer">
                                        <div class="mg-bottom-16">
                                            <!-- <label for="businessType" class="form-label">Select category</label> -->
                                            <select class="input-form white-bg-color">
                                                <option value="1">Select category</option>
                                                <option value="1">Create categories</option>
                                                <option value="1">Category 2</option>
                                                <option value="1">Category 3</option>
                                            </select>
                                            <div class="add-categories">
                                                <button type="button" class="btn btn-white btn-small btn-block" data-trigger="modal" data-target="createCategoryModal">Add your category/subcategories</button>
                                            </div>

                                        </div>
                                        <!-- after the user has selected a category and subcategory, show the details below by removing display-none -->
                                        <div class="upload-tab-category display-none">
                                            <span>Women's fashion</span>
                                            <span>
                                                <svg>
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#rightArrow"></use>
                                                </svg>
                                            </span>
                                            <span>Clothing</span>
                                        </div>
                                        <!-- After the user has selected a category, show the list of subcategories to be selected -->
                                        <div class="change-upload-cat display-none">
                                            <div class="">
                                                <label for="businessType" class="form-label">Choose a subcategory</label>
                                                <div class="upload-subcategory-chip-container">
                                                    <a href="#" class="chip ">Wedding wears</a>
                                                    <a href="#" class="chip ">Dress</a>
                                                    <a href="#" class="chip ">Shoes</a>
                                                    <a href="#" class="chip ">Bags</a>
                                                    <a href="#" class="chip ">Night clothes</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="form-control upload-image-control">
                                        <!-- <label for="businessType" class="form-label">Product image</label> -->
                                        <div class="upload-action margin-unset">
                                            <input type="file" id="selectimage" @change="previewImage($event, 'previewPrimaryImage')">
                                            <button class="btn btn-light-grey btn-block">Upload an image</button>
                                        </div>
                                        <a href="https://remove.bg" target="_blank">Remove image background</a>

                                        <div id="previewPrimaryImage" class="image-upload-preview"></div>
                                    </div>
                            
                                    <div class="form-control">
                                        <button class="btn btn-primary btn-block">Upload product</button>
                                    </div>
                                
                                </div> 

                                <!-- add more details area -->
                                <div class="tab-content-area position-relative" id="moreInfo">
                                
                                <div class="js-accordionItem">
                                        <div class="product-upload-dropdown js-accordionHeader">
                                            <span>Product description <span>- optional</span></span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22.05" height="13.616" viewBox="0 0 22.05 13.616">
                                                <use xlink:href="~/assets/business/image/all-svg.svg#arrowDown"></use>
                                            </svg>
                                        </div>
                                        <div class="more-details-input-container js-accordionBody">
                                            <div class="form-control">
                                                <!-- <label for="businessType" class="form-label">Type in the product description</label> -->
                                                <textarea name="" id="" cols="30" rows="5" class="input-form white-bg-color" placeholder="Type in the product description"></textarea>
                                            </div>
                                            <div class="form-control">
                                                <button class="btn btn-block btn-white">Submit description</button>
                                            </div>
                                        </div>
                                </div>

                                <div class="js-accordionItem">
                                        <div class="product-upload-dropdown js-accordionHeader">
                                            <span>Product tags <span>- optional</span></span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22.05" height="13.616" viewBox="0 0 22.05 13.616">
                                                <use xlink:href="~/assets/business/image/all-svg.svg#arrowDown"></use>
                                            </svg>
                                        </div>
                                        <div class="more-details-input-container js-accordionBody">
                                            <div>
                                                <div class="form-label mg-bottom-16">Tap/click to remove tag</div>
                                                <div class="chip-container upload-tags">
                                                    <a href="#" class="chip">Tag 1
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                            <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                        </svg>
                                                    </a>
                                                    <a href="#" class="chip">Tag 2
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                            <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                        </svg>
                                                    </a>
                                                    <a href="#" class="chip">Tag 3
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                            <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                        </svg>
                                                    </a>
                                                </div>

                                            </div>
                                            <div class="form-control">
                                                <!-- <label for="businessType" class="form-label">Enter one or more tags seperated by comma</label> -->
                                                <textarea name="" id="" cols="30" rows="5" class="input-form white-bg-color" placeholder="Enter one or more tags seperated by comma"></textarea>
                                            </div>
                                            <div class="form-control">
                                                <button class="btn btn-block btn-white">Sunmit new tags</button>
                                            </div>
                                            
                                        </div>
                                    </div>

                                <div class="js-accordionItem">
                                        <div class="product-upload-dropdown js-accordionHeader">
                                            <span>Upload more images <span>- optional</span></span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22.05" height="13.616" viewBox="0 0 22.05 13.616">
                                                <use xlink:href="~/assets/business/image/all-svg.svg#arrowDown"></use>
                                            </svg>
                                        </div>
                                        <div class="more-details-input-container js-accordionBody">
                                            <div class="form-control">

                                                <div class="drag-drop-upload-panel" id="dropZone"  v-on:drop.prevent="dropHandler($event, 'moreImages')" @dragover.prevent="dragOverHandler">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="115" height="115" viewBox="0 0 115 115"><defs><style>.a,.b,.f{fill:none;}.a,.b{stroke:#dddfe7;}.b{stroke-width:3px;}.c{fill:#dddfe7;}.d{fill:#f0f2f8;}.e{stroke:none;}</style></defs><g class="a"><circle class="e" cx="57.5" cy="57.5" r="57.5"></circle><circle class="f" cx="57.5" cy="57.5" r="57"></circle></g><g class="b" transform="translate(8.051 8.012)"><circle class="e" cx="49.632" cy="49.632" r="49.632"></circle><circle class="f" cx="49.632" cy="49.632" r="48.132"></circle></g><circle class="c" cx="39.948" cy="39.948" r="39.948" transform="translate(17.735 17.696)"></circle><path class="d" d="M31.906,17.646,18.1.844a2.445,2.445,0,0,0-3.78,0l-13.8,16.8a2.447,2.447,0,0,0,1.89,4.006H9.352V43.466A2.437,2.437,0,0,0,11.8,45.911h8.833a2.437,2.437,0,0,0,2.444-2.444V21.652h6.943A2.447,2.447,0,0,0,31.906,17.646Z" transform="translate(41.183 35.016)"></path></svg>
                                                    <h2>Drag &amp; Drop</h2>
                                                    <h5>your image or <span>tap to select image</span></h5>
                                                    <input type="file" id="selectimage" @change="previewImage($event, 'moreImages')">
                                                    <div class="drag-drop-overlay" id="dropZoneOverlay" @dragleave.prevent="dragOutHandler">Drop file here</div>
                                                </div>
                                
                                                <label for="businessType" class="form-label"><span>Tap image to cancel or remove image</span></label>

                                                <div class="selected-img-preview">
                                                    <div id="moreImages">

                                                    </div>
                                                    <div>
                                                        <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                            <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                        </svg>
                                                    </div>
                                
                                                    <div>
                                                        <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                            <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                        </svg>
                                                    </div>                                            
                                                </div>
                                
                                            </div>
                                            <div class="form-control">
                                                <button class="btn btn-block btn-white">Upload product images</button>
                                            </div>
                                        </div>
                                </div>

                                <div class="js-accordionItem">
                                    <div class="product-upload-dropdown js-accordionHeader">
                                        <span>Available sizes <span>- optional</span></span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22.05" height="13.616" viewBox="0 0 22.05 13.616">
                                            <use xlink:href="~/assets/business/image/all-svg.svg#arrowDown"></use>
                                        </svg>
                                    </div>
                                    <div class="more-details-input-container js-accordionBody">
                                        <div class="">
                                            <div class="form-label mg-bottom-16">Tap/click to remove sizes</div>
                                            <div class="color-picker-container">
                                                <div class="size-card">43
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                    </svg>
                                                </div>
                                                <div class="size-card">38
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                    </svg>
                                                </div>
                                                <div class="size-card">24
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                    </svg>
                                                </div>
                                                <div class="size-card">43
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                    </svg>
                                                </div>
                                                <div class="size-card">38
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                    </svg>
                                                </div>
                                                <div class="size-card">43
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                    </svg>
                                                </div>
                                                <div class="size-card">24
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                    </svg>
                                                </div>
                                                <div class="size-card">43
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                    </svg>
                                                </div>
                                                <div class="size-card">38
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                    </svg>
                                                </div>
                                                <div class="size-card">43
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-control">
                                            <!-- <label for="businessType" class="form-label">Add the different sizes seperated by comma</label> -->
                                            <textarea name="" id="" cols="20" rows="4" class="input-form white-bg-color" placeholder="Add the different sizes seperated by comma"></textarea>
                                        </div>
                                        <div class="form-control">
                                            <button class="btn btn-block btn-white">Submit product sizes</button>
                                        </div>
                                    </div>

                                </div>

                                <div class="js-accordionItem">
                                        <div class="product-upload-dropdown js-accordionHeader">
                                            <span>Available colors <span>- optional</span></span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22.05" height="13.616" viewBox="0 0 22.05 13.616">
                                                <use xlink:href="~/assets/business/image/all-svg.svg#arrowDown"></use>
                                            </svg>
                                        </div>
                                        <div class="more-details-input-container js-accordionBody">
                                            <div class="form-control">
                                                <div class="form-label mg-bottom-16">Tap/click to remove colors</div>
                                                <div class="color-picker-container">
                                                    <div style="background-color: #1232B1;">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                            <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                        </svg>
                                                    </div>
                                                    <div style="background-color: #BB2320;">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                            <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                        </svg>
                                                    </div>
                                                    <div style="background-color: #2C2C2C;">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                            <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                        </svg>
                                                    </div>
                                                    <div style="background-color: #FBC02D;">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                            <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                        </svg>
                                                    </div>
                                                    <div style="background-color: #F4F6F8;">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                            <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                        </svg>
                                                    </div>
                                                    <div style="background-color: #388E3C;">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                            <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                        </svg>
                                                    </div>
                                                    <div style="background-color: #2874F0;">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                            <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                        </svg>
                                                    </div>
                                                    <div style="background-color: #1232B1;">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                            <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                        </svg>
                                                    </div>
                                                    <div style="background-color: #BB2320;">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                            <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                        </svg>
                                                    </div>
                                                    <div style="background-color: #2C2C2C;">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                            <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                        </svg>
                                                    </div>
                                                    <div style="background-color: #FBC02D;">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                            <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                        </svg>
                                                    </div>
                                                    <div style="background-color: #F4F6F8;">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                            <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                        </svg>
                                                    </div>
                                                    <div style="background-color: #388E3C;">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                            <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                        </svg>
                                                    </div>
                                                    <div style="background-color: #2874F0;">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                            <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-control">
                                                <label for="businessType" class="form-label">Use the color picker to select available colors</label>
                                                <div class="color-picker-form">
                                                    <input type="color" value="#ffffff" class="btn color-picker" placeholder="pick a color">
                                                    <span class="color-picker-placeholder">Tap to select colors</span>
                                                </div>
                                            </div>
                                            <div class="form-control">
                                                <button class="btn btn-block btn-white">Submit available colors</button>
                                            </div>
                                        </div>
                                </div>

                                <div class="js-accordionItem">
                                        <div class="product-upload-dropdown js-accordionHeader">
                                            <span>Product suggestion <span>- optional</span></span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22.05" height="13.616" viewBox="0 0 22.05 13.616">
                                                <use xlink:href="~/assets/business/image/all-svg.svg#arrowDown"></use>
                                            </svg>
                                        </div>
                                    </div>

                                <div class="js-accordionItem">
                                        <div class="product-upload-dropdown js-accordionHeader">
                                            <span>Brand <span>- optional</span></span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22.05" height="13.616" viewBox="0 0 22.05 13.616">
                                                <use xlink:href="~/assets/business/image/all-svg.svg#arrowDown"></use>
                                            </svg>
                                        </div>
                                        <div class="more-details-input-container js-accordionBody" id="addbrand">
                                            <div class="form-control">
                                                <!-- <label for="businessType" class="form-label">Name of brand</label> -->
                                                <input class="input-form white-bg-color" type="text" placeholder="Name of brand">
                                            </div>
                                            <div class="form-control">
                                                <div for="businessType" class="form-label">Uplaod picture of the brand - optional</div>
                                                <div class="upload-action display-block">
                                                    <button class="btn btn-light-grey btn-small btn-block">Choose image file</button>
                                                    <input type="file" id="selectimage">
                                                </div>
                                            </div>
                                            <div class="form-control">
                                                <button class="btn btn-block btn-white">Upload product's brand</button>
                                            </div>
                                        </div>
                                </div>
                                
                                <div class="upload-basic-validation display-non">
                                        <h2>Upload basic details</h2>
                                        <p class="mg-bottom-16">You can add more details of a product after uploading the basic details of the product</p>
                                        <div class="upload-tab-area margin-unset" id="tabList">
                                            <a href="javascript:;" class="chip-tab-item is-active btn-primary" id="tabLink" data-tab="basicInfo">Upload basic details</a>
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

            <ADDCATEGORIESMODAL />
            <nuxt/>
        </div>
    </div>
</template>

<script>

import TOPHEADER from '~/layouts/business/top-navigation.vue';
import SIDENAV from '~/layouts/business/side-bar.vue';
import BOTTOMNAV from '~/layouts/business/bottom-nav.vue';
import ADDCATEGORIESMODAL from'~/components/business/categories/addCategories.vue';
import PAGELOADER from '~/components/loader/loader.vue';
export default {
    components: {
        TOPHEADER, SIDENAV, BOTTOMNAV, ADDCATEGORIESMODAL, PAGELOADER
    },
    data : function () {
        return {
            dragZone: '',
            pageLoader: true
        }
    },
    methods: {
        dragOverHandler: function(e) {
            this.$dragOverHandler(e, this.dragZone)
        },
        dragOutHandler: function (e) {
            this.$dragOutHandler(e, this.dragZone)
        },
        dropHandler: function (e, preview) {
            this.$dropHandler(e, preview, this.dragZone)
        },
        previewImage: function (e, preview) {
            this.$previewImage(e, preview)
        }
    },
    mounted() {
        this.dragZone = document.getElementById('dropZoneOverlay');
        setTimeout(() => {
            this.pageLoader = false
        }, 5000);
    }
}
</script>

<style scoped>
.add-categories {
    margin-top: 8px;
}
</style>
