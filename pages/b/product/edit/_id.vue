<template>
    <div class="business">
        <div class="body-container">
            <TOPHEADER></TOPHEADER>
            <Nuxt />
            <div class="content-container">
                <SIDENAV></SIDENAV>
                <Nuxt />
                    <div class="content-area grey-bg-color">
                        <!-- pageLoader -->
                        <PAGELOADER v-show="pageLoader"></PAGELOADER>
                        <Nuxt />
                        <div class="alert alert-danger notification-alert" v-show="hide">
                            <div>This product is hidden. Customers will not be able to find it in your shop and in search result.</div>
                            <button class="btn btn-small btn-white" @click="showProduct()" id="showProduct">
                                Show product
                                <div class="loader-action"><span class="loader"></span></div>
                            </button>
                        </div>
                        <div class="main-content">

                            <div class="page-header with-action">
                                <h4>Edit product</h4>
                                <n-link class="btn btn-light-grey btn-small" :to="`/b/product/${productId}`">Back to product</n-link>
                            </div>

                            <div class="product-upload-container">
                                <!-- main content goes in here -->

                                <div class="no-account-category" v-show="productNotFound && !pageLoader">
                                    <!-- when no category has been added to the account -->
                                    <h2>This product has been moved or deleted</h2>
                                    <p>This might also be caused by a broken link.</p>
                                    <n-link to="/b/" class="btn btn-primary btn-lg">View all poducts</n-link>
                                </div>

                                <div v-show="!productNotFound && !pageLoader">
                                    <div class="upload-tab-area" id="tabList">
                                        <a href="javascript:;" class="chip-tab-item is-active" id="tabLink" data-tab="basicInfo">Basic details</a>
                                        <a href="javascript:;" class="chip-tab-item" id="tabLink" data-tab="moreInfo">Add more details</a>
                                    </div>

                                    <div class="upload-tab-content" id="tabContent">
                                        <div class="is-active tab-content-area" id="basicInfo">                                

                                            <div class="form-control">
                                                <!-- <label for="businessType" class="form-label">Product name</label> -->
                                                <input type="text" name="" id="productName" class="input-form white-bg-color" placeholder="Product name" v-model="productName">
                                            </div>

                                            <div class="form-control">
                                                <!-- <label for="businessType" class="form-label">Product price</label> -->
                                                <input type="number" name="" id="productPrice" class="input-form white-bg-color" placeholder="Product price" v-model="productPrice">
                                            </div>

                                            <div class="form-control" id="singleTabContainer">
                                                <!-- show this div if cat and subcat exists -->
                                                <div v-show="!setCategoryAndSubcategory">
                                                    <div class="mg-bottom-16">
                                                        <!-- <label for="businessType" class="form-label">Select category</label> -->
                                                        <select class="input-form white-bg-color" 
                                                        id="productCategory" @click="clickedCategory = 1" @change="onSelectCategory($event)">
                                                            <option selected value="">Select category</option>
                                                            <option v-for="category in returnCategories" v-bind:value="category.categoryId" :key="category.categoryId">{{ category.categoryName }}</option>
                                                        </select>

                                                        <a href="#" target="" class="mg-top-8 font-14 dd-block" data-trigger="modal" data-target="createCategoryModal" v-show="clickedCategory">I can't find a category/subcategory<span class="action-span">Add it</span></a>

                                                    </div>
                                                    <!-- after the user has selected a category and subcategory, show the details below by removing display-none -->
                                                    <div class="upload-tab-category mg-bottom-16" v-show="categoryName || subcategoryName">
                                                        <span>{{categoryName}}</span>
                                                        <span>
                                                            <svg>
                                                                <use xlink:href="~/assets/business/image/all-svg.svg#rightArrow"></use>
                                                            </svg>
                                                        </span>
                                                        <span>{{subcategoryName}}</span>
                                                    </div>
                                                    <!-- After the user has selected a category, show the list of subcategories to be selected -->
                                                    <!-- show this when selected category ID has been set -->
                                                    <div class="change-upload-cat" v-show="!setCategoryAndSubcategory" id="subcategoryArea">
                                                        <!-- show when selected catgory has been set and when subcategory ID has not been set -->
                                                        <!-- when selected subcategory ID is set, hide -->
                                                        <div class="">
                                                            <label for="businessType" class="form-label margin-unset">Choose a subcategory</label>
                                                            <div class="upload-subcategory-chip-container"  id="selectedSubCat">
                                                                <div class="chip" 
                                                                    v-for="(subcategory, index) in returnSubcategoriesOfCategory" 
                                                                    :key="index" :data-subcat-key="subcategory.subcategoryId" 
                                                                    @click="chooseASubcategory(subcategory.subcategoryId, $event)">
                                                                    {{subcategory.subcategoryName}}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div  v-show="subcategoryName && categoryName">
                                                    <label for="businessType" class="form-label mg-bottom-8">Selected category and subcategory</label>
                                                    <div class="d-flex-between-query">
                                                        <div class="upload-tab-category" v-show="categoryName && subcategoryName">
                                                            <span>{{categoryName}}</span>
                                                            <span>
                                                                <svg>
                                                                    <use xlink:href="~/assets/business/image/all-svg.svg#rightArrow"></use>
                                                                </svg>
                                                            </span>
                                                            <span>{{subcategoryName}}</span>
                                                        </div>
                                                        <button class="btn btn-white btn-small" @click="resetCategory()">Change</button>
                                                    </div>
                                                </div>
                                            </div>
                                    
                                            <div class="form-control">
                                                <button class="btn btn-primary btn-block" id="saveBasicDetails" @click="saveBasicDetails()">
                                                    Save update
                                                    <div class="loader-action"><span class="loader"></span></div>
                                                </button>
                                            </div>
                                        
                                        </div> 

                                        <!-- add more details area -->
                                        <div class="tab-content-area position-relative" id="moreInfo">

                                            <div class="js-accordionItem">
                                                <div class="product-upload-dropdown js-accordionHeader">
                                                    <span>Add more images <span>- optional</span></span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.05" height="13.616" viewBox="0 0 22.05 13.616">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#arrowDown"></use>
                                                    </svg>
                                                </div>
                                                <div class="more-details-input-container js-accordionBody">
                                                    <div class="form-control">
                                        
                                                        <label for="businessType" class="form-label"><span>Tap image to remove image or set as primary</span></label>

                                                        <div class="selected-img-preview mg-bottom-24">
                                                            <div id="previewPrimaryImage" class="preview-image" v-show="uploadLoadedFile">
                                                                
                                                            </div>

                                                            <div class="preview-image" v-for="image in returnImages" :key="image">
                                                                <img :data-src="formatProductImage(image)" v-lazy-load>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="16" viewBox="0 0 4 16">
                                                                    <use xlink:href="~/assets/business/image/all-svg.svg#verticalElipsis"></use>
                                                                </svg>
                                                                <input type="checkbox" class="dropdownCheckBox" :id="`checkBox${image.split('.')[0]}`">
                                                                <div class="dropdown-container showEffect">
                                                                    <button class="btn btn-primary btn-small" id="setImageAsPrimary" @click="setImageAsPrimary(image)">
                                                                        Set as primary
                                                                        <div class="loader-action"><span class="loader"></span></div>
                                                                    </button>
                                                                    <button class="btn btn-default btn-small" id="deleteProductImage" @click="deleteProductImage(image)">
                                                                        Delete image
                                                                        <div class="loader-action"><span class="loader"></span></div>
                                                                    </button>
                                                                </div>
                                                            </div>

                                                                                                   
                                                        </div>

                                                        <div class="drag-drop-upload-panel" v-bind:class="{'is-loading': isUploading}">
                                                            <input type="file" id="selectimage" @change="previewImage($event, 'previewPrimaryImage')" ref="primaryImageFile" accept="image/png,image/jpg,image/jpeg">
                                                            Tap/click here to select image
                                                            <div class="loader-action"><span class="loader"></span></div>
                                                        </div>
                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- sizes -->
                                            <div class="js-accordionItem">
                                                <div class="product-upload-dropdown js-accordionHeader">
                                                    <span>Available sizes <span>- optional</span></span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.05" height="13.616" viewBox="0 0 22.05 13.616">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#arrowDown"></use>
                                                    </svg>
                                                </div>
                                                <div class="more-details-input-container js-accordionBody">
                                                    <div class=""  v-show="sizes.length > 0">
                                                        <div class="form-label mg-bottom-16">Tap/click to remove sizes</div>
                                                        <div class="color-picker-container mg-bottom-8">
                                                            
                                                            <div class="size-card" v-for="size in returnProductSizes" :key="size.sizeId" @click="removeSizeFromSizes(size.sizeNumber, size.sizeId)" :id="`size-${size.sizeId}`">
                                                                {{size.sizeNumber}}
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                                    <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                                </svg>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div class="form-control">
                                                        <!-- <label for="businessType" class="form-label">Add the different sizes seperated by comma</label> -->
                                                        <div class="form-label mg-bottom-16">Add one or more sizes seperated by comma</div>
                                                        <textarea name="" id="sizesForm" cols="20" rows="4" class="input-form white-bg-color" placeholder="41, 42, 43....." v-model="newSizes"></textarea>
                                                    </div>
                                                    <div class="form-control">
                                                        <button class="btn btn-block btn-primary" @click="createNewSizes()" id="createNewSizes">
                                                            Submit product sizes
                                                            <div class="loader-action"><span class="loader"></span></div>
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                            
                                            <!-- colors -->
                                            <div class="js-accordionItem">
                                                    <div class="product-upload-dropdown js-accordionHeader">
                                                        <span>Available colors <span>- optional</span></span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="22.05" height="13.616" viewBox="0 0 22.05 13.616">
                                                            <use xlink:href="~/assets/business/image/all-svg.svg#arrowDown"></use>
                                                        </svg>
                                                    </div>
                                                    <div class="more-details-input-container js-accordionBody">
                                                        <div class="form-control"  v-show="returnOldColors.length > 0">
                                                            <div class="form-label mg-bottom-16">Tap/click to remove colors</div>
                                                            <div class="color-picker-container">
                                                                
                                                                <div v-bind:style="{'background-color': color.color}" v-for="color in returnOldColors" :key="color.colorId" @click="removeOldColor(color.colorId, $event)" :id="`color${color.colorId}`">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" v>
                                                                        <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                                    </svg>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="form-control" v-show="returnNewColors.length > 0">
                                                            <div class="form-label">Selected colors. <span>Tap/click to remove color</span></div>
                                                            <div class="color-picker-container">
                                                                <div v-bind:style="{'background-color': color.color}" v-for="color in returnNewColors" :key="color.id" @click="removeNewColor(color.id, $event)">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                                        <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form-control">
                                                            <label for="businessType" class="form-label">Use the color picker to select available colors</label>
                                                            <div class="color-picker-form">
                                                                <input type="color" value="#ffffff" class="btn color-picker" placeholder="pick a color" @change="getColorFromInput($event)" id="colorPicker">
                                                                <span class="color-picker-placeholder">Tap to select colors</span>
                                                            </div>
                                                        </div>
                                                        <div class="form-control">
                                                            <button class="btn btn-block btn-primary" @click="createNewColors()" id="createNewColors">
                                                                Update available colors
                                                                <div class="loader-action"><span class="loader"></span></div>
                                                            </button>
                                                        </div>
                                                    </div>
                                            </div>
                                            
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
                                                            <textarea name="" id="productDescription" cols="30" rows="5" class="input-form white-bg-color" placeholder="Type in the product description" v-model="description"></textarea>
                                                        </div>
                                                        <div class="form-control">
                                                            <button class="btn btn-block btn-primary" id="saveProductDescription" @click="saveProductDescription()">
                                                                Update description
                                                                <div class="loader-action"><span class="loader"></span></div>
                                                            </button>
                                                        </div>
                                                    </div>
                                            </div>

                                            <!-- <div class="js-accordionItem">
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
                                                        <div class="form-control"> -->
                                                            <!-- <label for="businessType" class="form-label">Enter one or more tags seperated by comma</label> -->
                                                            <!-- <textarea name="" id="" cols="30" rows="5" class="input-form white-bg-color" placeholder="Enter one or more tags seperated by comma"></textarea>
                                                        </div>
                                                        <div class="form-control">
                                                            <button class="btn btn-block btn-white">Sunmit new tags</button>
                                                        </div>
                                                        
                                                    </div>
                                            </div> -->

                                            <!-- <div class="js-accordionItem">
                                                    <div class="product-upload-dropdown js-accordionHeader">
                                                        <span>Product suggestion <span>- optional</span></span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="22.05" height="13.616" viewBox="0 0 22.05 13.616">
                                                            <use xlink:href="~/assets/business/image/all-svg.svg#arrowDown"></use>
                                                        </svg>
                                                    </div>
                                                </div> -->

                                            <!-- <div class="js-accordionItem">
                                                        <div class="product-upload-dropdown js-accordionHeader">
                                                            <span>Brand <span>- optional</span></span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="22.05" height="13.616" viewBox="0 0 22.05 13.616">
                                                                <use xlink:href="~/assets/business/image/all-svg.svg#arrowDown"></use>
                                                            </svg>
                                                        </div>
                                                        <div class="more-details-input-container js-accordionBody" id="addbrand">
                                                            <div class="form-control">
                                                                <label for="businessType" class="form-label">Name of brand</label>
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
                                                </div> -->
                                            
                                        </div>
                                        <!-- end of add more details area -->

                                    </div>
                                </div>
                            </div>
                        </div>
                        <BOTTOMNAV></BOTTOMNAV>
                        <Nuxt />
                        <ADDCATEGORIESMODAL></ADDCATEGORIESMODAL>
                        <Nuxt />
                    </div>

                    <!-- Format image modal -->
                    <div class="modal-container mobile-search-modal-container" id="formatProductImage">
                        <div class="modal-dialog-box business-details-modal">
                        
                            <div class="card close-business-modal">
                                <!-- close search modal -->
                                <button class="modal-search-close-btn" data-target="formatProductImage" data-dismiss="modal" @click="resetSelectedImage()">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.512 18.341">
                                    <use xlink:href="~/assets/business/image/all-svg.svg#modalArrowLeft"></use>
                                </svg>
                                </button>
                                <div class="about-biz-header">
                                <h4>Select product image</h4>
                                </div>
                                <!-- end of search input area -->
                            </div>
                    
                            <!-- beginning of mobile search container -->
                            <div class="mobile-search-container no-padding white-bg-color">
                                
                                <div class="layout-container">
                                    <div class="format-image-container" id="dumpProductImageContainer" ref="imageToPrint">
                                        <!-- make this 100%-->
                                        <div class="business-cover-photo" id="dumpProductImage" data-rotate="0">
                                            <!-- make this 100%-->
                                            <img src="~/assets/business/image/all-svg.svg#expandImage" alt="">
                                        </div>
                                    </div>
                                    <button class="image-formatter-button" @click="adjustImage()">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <use xlink:href="~/assets/business/image/all-svg.svg#expandImage"></use>
                                        </svg>
                                    </button>
                                    <button class="image-formatter-button" @click="rotateImage()">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <use xlink:href="~/assets/business/image/all-svg.svg#rotateImage"></use>
                                        </svg>
                                    </button>
                                </div>

                                <div class="mg-top-32 d-flex-center">
                                    <button class="btn btn-primary btn-md" @click="cropImageForUpload()" id="cropImageForUpload">
                                        Crop and continue
                                        <div class="loader-action"><span class="loader"></span></div>    
                                    </button>
                                </div>
                    
                            
                    
                            </div>
                            <!-- end of mobile search container -->
                    
                        </div>
                    </div>
                    <!-- End of format image modal -->

            </div>
        </div>
    </div>
</template>

<script>

import TOPHEADER from '~/layouts/business/top-navigation.vue';
import SIDENAV from '~/layouts/business/side-bar.vue';
import BOTTOMNAV from '~/layouts/business/bottom-nav.vue';
import ADDCATEGORIESMODAL from'~/components/business/categories/addCategories.vue'
import PAGELOADER from '~/components/loader/loader.vue';

import { mapActions, mapGetters, mapMutations } from 'vuex';
import { GET_ALL_CATEGORIES } from '~/graphql/categories';
import { 
    GET_PRODUCT_BY_ID,
    CREATE_PRODUCT_SIZE,
    REMOVE_PRODUCT_SIZE,
    CREATE_PRODUCT_COLOR,
    REMOVE_PRODUCT_COLOR,
    CREATE_PRODUCT_DESCRIPTION,
    ADD_MORE_PRODUCT_PHOTO,
    SET_IMAGE_PRIMARY,
    DELETE_PRODUCT_IMAGE,
    EDIT_PRODUCT_BASIC_DETAILS,
    SHOW_PRODUCT
} from '~/graphql/product';


export default {
    name: "EDITPRODUCTDETAILS",
    components: {
        TOPHEADER, SIDENAV, BOTTOMNAV, ADDCATEGORIESMODAL, PAGELOADER
    },
    data : function () {
        return {
            dragZone: '',
            pageLoader: true,
            businessId: "",
            accessToken: "",
            productId: "",

            // page settings
            productNotFound: "",
            setCategoryAndSubcategory: "",
            clickedCategory: 0,
            subcategoriesUnderCategories: "",

            // product details
            productName: "",
            productPrice: "",
            categoryId: "",
            categoryName: "",
            subcategoryName: "",
            subcategoryId: "",
            productImages: "",
            hide: "",

            // more details
            sizes: "",
            newSizes: "",
        
            tags: "",

            colors: "",
            newColorArray: [],
            description: "",
            tags: "",

            // Category and subcategory listing
            subcategoriesUnderCategories: "",
            allCategories: "",

            // for picture upload
            isUploading: 0,
            uploadLoadedFile: "",

            setTimeoutCount: null,
            screenWidth: 0,

        }
    },
    computed: {
        returnCategories: function () {
            return this.allCategories;
        },
        returnSubcategoriesOfCategory: function () {
            return this.subcategoriesUnderCategories
        },
        returnProductSizes: function () {
            return this.sizes
        },
        returnNewColors: function () {
            return this.newColorArray
        },
        returnOldColors: function () {
            return this.colors
        },
        returnImages: function () {
            return this.productImages
        },
        handleResize() {
            this.screenWidth = window.innerWidth;
            if (this.screenWidth >= 466) {
                this.screenWidth = 370
            }
        },
    },
    methods: {
        formatStringToArray: function(stringInput) {

            let sizes = stringInput.trim()
            if (sizes.slice(-1) == ',') {
                sizes =  sizes.slice(0, -1).split(",");
            } else {
                sizes = sizes.split(',')
            }

            let mainSize = [];

            sizes.forEach(element => {
                if (element != '') mainSize.push(element.toString().trim())
            });

            return new Set(mainSize)
        },
        createNewSizes: async function () {
            
            if (this.newSizes.length == 0) {
                this.$addRedBorder('sizesForm')
                this.$showToast("Enter the sizes of your product", "error", 6000)
                return
            } else {
                this.$removeRedBorder('sizesForm')
            }

            let target = document.getElementById('createNewSizes');

            
            let formatSizeInput = this.formatStringToArray(this.newSizes);

            let oldArray = [];

            if (this.sizes.length > 0) {
                this.sizes.forEach(element => {
                    oldArray.push(element.sizeNumber)
                });
            }

            let newArray = [...formatSizeInput,...oldArray]
            newArray = new Set(newArray)

            let finalArray = [];

            for (const [index, x] of newArray.entries()) {
                finalArray.push(x)
            }

            let variables = {
                sizes: finalArray,
                businessId: this.businessId,
                productId: this.productId
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }

            target.disabled = true;

            let request = await this.$performGraphQlMutation(this.$apollo, CREATE_PRODUCT_SIZE, variables, context);

            target.disabled = false;

            if (request.error) {
                this.$initiateNotification("error", "Failed request", request.message)
                return
            }

            let result = request.result.data.CreateProductSizes;

            if (!result.success) {
                this.$initiateNotification("error", "Failed request", result.message)
                return
            }

            this.$initiateNotification("success", "Sizes added", result.message)


            this.sizes = [];

            for(let y of result.sizes) {
                this.sizes.push({
                    sizeId: y.sizeId,
                    sizeNumber: y.sizeNumber,
                })
            }
            
        },
        removeSizeFromSizes: async function (size, sizeId) {
            
            let target = document.getElementById("size-"+sizeId);
            target.style.display = "none";

            let variables = {
                sizeId: sizeId,
                businessId: this.businessId,
                productId: this.productId
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }

            let request = await this.$performGraphQlMutation(this.$apollo, REMOVE_PRODUCT_SIZE, variables, context);

            if (request.error) {
                this.$initiateNotification("error", "Failed request", request.message)
                return
            }

            let result = request.result.data.RemoveProductSize;

            if (!result.success) {
                this.$initiateNotification("error", "Failed request", result.message)
                return
            }

            this.$initiateNotification("success", "Size removed", result.message)

            let newSizesArray = [];
            let sizesArray = this.returnProductSizes

            
            for (let m of sizesArray) {
                if (size != m.sizeNumber) {
                    newSizesArray.push(m)
                }
            }

            this.sizes = newSizesArray;

        },
        previewImage: function (e, preview) {

            this.uploadLoadedFile = ""

            let file = e.target.files[0];
            let uploadFile = e.target.files[0];

            if (uploadFile == undefined) return

            let fileValidation = this.$checkFileExtension(uploadFile.name);
            if (fileValidation == false) {
                this.$showToast('Choose a valid image file', "error", 3500)
                return
            } 

            this.targetImageFile = e

            let target = document.getElementById('formatProductImage')

            if (process.browser) {
                window.scrollTo(0, 0);
            }
           
            this.$previewImage(e, "dumpProductImage");
            this.$previewImage(e, preview);

            let imageCanvas = document.getElementById('dumpProductImage');
            // imageCanvas.style.height = `${this.screenWidth}px`;
            
            document.querySelector("body").classList.add("overflow-hidden");
            target.classList.add('show-modal', 'display-block')
            
        },
        cropImageForUpload: async function () {
            let imageContainer = document.getElementById('dumpProductImageContainer');
            let imageCanvas = document.getElementById('dumpProductImage');

            let width = imageContainer.offsetWidth 
            let height = imageContainer.offsetHeight 

            
            imageContainer.style.width = `${width}px`;
            // imageContainer.style.height = `${height}px`;
            

            imageContainer.classList.add('select-crop-image');

            clearTimeout(this.setTimeoutCount)

            let actionBtn = document.getElementById('cropImageForUpload');
            actionBtn.disabled = true;

            if (process.browser) {
                window.scrollTo(0, 0);
            }

            this.setTimeoutCount = setTimeout(async () => {

                const el = this.$refs.imageToPrint

                const options = {
                    type: 'dataURL',
                    allowTaint: true
                }

                actionBtn.disabled = false;
                
                let img = await this.$htmlToCanvas(el, options);

                this.uploadLoadedFile = img

                imageContainer.classList.remove('select-crop-image');
                imageCanvas.classList.remove('toggleHeight')

                let previewImage = document.querySelectorAll('#previewPrimaryImage img');
                previewImage[0].setAttribute('src', img)

            }, 100);
        },
        resetSelectedImage: function () {
            this.$refs.primaryImageFile.value=null;
            this.targetImageFile = ""
        },
        adjustImage: function () {
            let target = document.getElementById('dumpProductImage');
            target.classList.toggle('toggleHeight');
        },
        rotateImage: function () {
            let target = document.getElementById('dumpProductImage');
            let currentDegree = parseInt(target.getAttribute('data-rotate'), 10);
            let newDegree = currentDegree + 90
            if (newDegree > 270) {
                newDegree = 0
            }
            target.setAttribute('data-rotate', newDegree)
            target.style.transform = `rotate(${newDegree}deg)`
        },
        ...mapGetters({
            'GetCustomerData': 'customer/GetCustomerDetails',
            'GetBusinessData': 'business/GetBusinessDetails'
        }),
        GetBusinessDataFromStore: function () {
            let businessData = this.GetBusinessData();
			this.businessId = businessData.businessId
			let customerData = this.GetCustomerData();
            this.accessToken = customerData.userToken
        },
        getProductDetails: async function () {
            let variables = {
                businessId: this.businessId,
                productId: this.productId
            }

            let context = {
                hasUpload: true,
                headers: {
                    'accessToken': this.accessToken
                }
            }

            let request = await this.$performGraphQlQuery(this.$apollo, GET_PRODUCT_BY_ID, variables, {});

            if (request.error) {
                this.$initiateNotification('error', 'Failed request', request.message);
                return
            }

            let result = request.result.data.GetProductById;

            if (!result.success || result.product == null) {
                // set network error or no product found
                this.productNotFound = 1
                this.$initiateNotification('error', 'Failed request', result.message);
                return
            }

            this.productNotFound = 0

            let product = result.product;

            this.productId = product.id;
            this.categoryName = product.category.categoryName;
            this.categoryId = product.category.categoryId;
            this.colors = product.colors == null ? []: product.colors;
            this.description = product.description;
            this.hide = product.hide;
            this.productImages = product.images;
            this.productName = product.name;
            this.productPrice = product.price;
            this.sizes = product.sizes == null ? [] : product.sizes;
            this.subcategoryName = product.subcategory.subcategoryName;
            this.subcategoryId = product.subcategory.subcategoryId;
            this.tags = product.tags == null ? []: product.tags
        },
        GetAllCategories: async function () {
            let query = await this.$performGraphQlQuery(this.$apollo, GET_ALL_CATEGORIES);
            if (query.error) {
                this.$initiateNotification('error', 'Failed request', query.message);
                return
            }
            let result = query.result.data.GetAllCategories;
            if (result.success == false) {
                this.$initiateNotification('error', 'Failed request', result.message);
                return
            }
            let categorylisting = [];
            for (const [index, category] of result.category.entries()) {
                categorylisting[index] = {
                    categoryId: category.id,
                    categoryName: category.categoryName,
                    subcategory: []
                }
                for (const [subcategoryIndex, subcategory] of category.subcategories.entries()) {
                    categorylisting[index].subcategory.push({
                        subcategoryId: subcategory.subcategoryId,
                        subcategoryName: subcategory.subcategoryName
                    })
                }
            }
            this.allCategories = categorylisting;

            // emit to add category component
            $nuxt.$emit('categoryListing', this.returnCategories)
        },
        onSelectCategory: function(e) {
            let selectedCategory = e.target.options
            // reset selected category
            this.categoryId = "";

            if (selectedCategory.selectedIndex > -1) {
                let selectedIndex = e.target.options[e.target.options.selectedIndex];
                this.categoryId = selectedIndex.value;
                this.categoryName = selectedIndex.innerHTML
                this.subcategoryId = "",
                this.subcategoryName = ""
            }
        },
        chooseASubcategory: function (subcatId, e) {
            if (!process.client) return

            e.preventDefault();
            this.subcategoryId = subcatId

            let subcategoryChips = document.querySelectorAll("[data-subcat-key]");
            for (const action of subcategoryChips) {
                
                let id = action.getAttribute('data-subcat-key');
                if (id === subcatId) {
                    // update subcategory name
                    this.subcategoryName = action.innerHTML.trim()
                    // add is-active class
                    action.classList.add("is-active")
                } else {
                    action.classList.remove("is-active")
                }
            }
        },
        resetCategory: function () {
            this.categoryName = "";
            this.subcategoryName = ""
            this.categoryId = ""
            this.subcategoryId = ""
            this.setCategoryAndSubcategory = 0
        },
        getColorFromInput: function (e) {
            e.preventDefault();
            let color = e.target.value
            let colorId = color.replace("#", "")
            let newArray = [];
            
            if (this.returnNewColors.length > 0) {
                let flag = 0; //flag

                // if color id in user input color array is equal to any of the color id's that has been selected, flag as already existing
                for (let x of this.returnNewColors) {
                    if (colorId == x.id) {
                        flag = 1;
                        break
                    }
                }

                if(flag == 0) {
                    this.newColorArray.push({
                        color: color,
                        id: colorId
                    })
                }
                
            } else {
                this.newColorArray.push({
                    color: color,
                    id: colorId
                })
            }

        },
        removeNewColor: function(id, e) {
            e.preventDefault();

            let newArray = [];
            // remove color code from user input color array
            for (let x of this.returnNewColors) {
                if (id != x.id) {
                    newArray.push(x)
                }
            }

            this.newColorArray = newArray
        },
        createNewColors: async function () {
            let newColors = this.returnNewColors;

            if (newColors.length == 0) {
                this.$showToast("Choose a color for your product", 'error', 6000)
                this.$addRedBorder('colorPicker')
                return
            } else {
                this.$removeRedBorder('colorPicker')
            }

            let target = document.getElementById('createNewColors');

            // merge colors from db and user added colors
            let mergedColors = [...this.colors, ...newColors]

            let formattedColors = [];

            // get color codes only from merged array of colors
            for (let x of mergedColors) {
                formattedColors.push(x.color)
            }

            let newArray = new Set(formattedColors)
            
            let finalArray = [];
            // remove entries in "new Set function"
            for (const [index, x] of newArray.entries()) {
                finalArray.push(x)
            }

            let variables = {
                colors: finalArray,
                businessId: this.businessId,
                productId: this.productId
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }

            target.disabled = true


            let request = await this.$performGraphQlMutation(this.$apollo, CREATE_PRODUCT_COLOR, variables, context);

            target.disabled = false;

            if (request.error) {
                this.$initiateNotification("error", "Failed request", request.message)
                return
            }

            let result = request.result.data.CreateProductColors;

            if (!result.success) {
                this.$initiateNotification("error", "Failed request", result.message)
                return
            }

            this.$initiateNotification("success", "Colors added", result.message)
            this.colors = []

            // push to the main color array
            for (let color of result.colors) {
                this.colors.push({
                    color: color.color,
                    colorId: color.colorId
                })
            }

            // empty user input colorArray
            this.newColorArray = []
        },
        removeOldColor: async function (colorId, e) {

            // e.preventDefault();
            let target = document.getElementById("color"+colorId)
            target.style.display = "none";

            let variables = {
                businessId: this.businessId,
                productId: this.productId,
                colorId: colorId
            }
            
            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }

            let request = await this.$performGraphQlMutation(this.$apollo, REMOVE_PRODUCT_COLOR, variables, context);


            if (request.error) {
                this.$initiateNotification("error", "Failed request", request.message)
                target.style.display = "flex";
                return
            }

            let result = request.result.data.RemoveProductColor;

            if (!result.success) {
                this.$initiateNotification("error", "Failed request", result.message)
                target.style.display = "flex";
                return
            }

            this.$initiateNotification("success", "Size removed", result.message);

            let newColorArray = [];

            for (let y of this.colors) {
                if (colorId != y.colorId) {
                    newColorArray.push(y)
                }
            }

            this.colors = newColorArray
        },
        saveProductDescription: async function() {
            
            if (this.description.length < 1) {
                this.$addRedBorder('productDescription')
                this.$showToast('Enter the description for this product', "error", 6000);
                return
            } else {
                this.$removeRedBorder('productDescription');
            }

            let target = document.getElementById('saveProductDescription');

            let variables = {
                description: this.description,
                businessId: this.businessId,
                productId: this.productId
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }

            target.disabled = true;

            let request = await this.$performGraphQlMutation(this.$apollo, CREATE_PRODUCT_DESCRIPTION, variables, context);

            target.disabled = false;

            if (request.error) {
                this.$initiateNotification("error", "Failed request", request.message)
                return
            }

            let result = request.result.data.EditDescription;

            if (!result.success) {
                this.$initiateNotification("error", "Failed request", result.message)
                return
            }

            this.$initiateNotification("success", "Description saved", result.message);

        },
        formatProductImage: function (image) {
           return this.$formatProductImageUrl(this.businessId, image, "iconSize")
        },
        uploadProductImage: async function () {

            let variables = {
                file: this.uploadLoadedFile,
                productId: this.productId,
                businessId: this.businessId
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }
            
            this.isUploading = 1

            let request = await this.$performGraphQlMutation(this.$apollo, ADD_MORE_PRODUCT_PHOTO, variables, context);

            this.isUploading = 0

            if (request.error) {
                this.$initiateNotification("error", "Failed request", request.message)
                return
            }

            let result = request.result.data.AddmorePhotos;

            if (!result.success) {
                this.$initiateNotification("error", "Failed request", result.message)
                return
            }

            this.$initiateNotification("success", "Image uploaded", result.message)

            let imagePreview = document.getElementById('previewPrimaryImage');
            imagePreview.innerHTML = "";
            imagePreview.style.display = "none";

            this.productImages = result.photos

        },
        deleteProductImage: async function(imagePath) {

            let target = document.getElementById('deleteProductImage');

            if (imagePath.length < 0) {
                this.$showToast("An error occurred. Kindly refresh this page and try again", "error", 6000);
                return
            }

            let variables = {
                imageName: imagePath,
                productId: this.productId,
                businessId: this.businessId
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }
            
            target.disabled = true

            let request = await this.$performGraphQlMutation(this.$apollo, DELETE_PRODUCT_IMAGE, variables, context);

            target.disabled = false

            // uncheck checkbox
            document.getElementById('checkBox'+imagePath.split('.')[0]).checked = false

            if (request.error) {
                this.$initiateNotification("error", "Failed request", request.message)
                return
            }

            let result = request.result.data.RemoveProductPicture;

            if (!result.success) {
                this.$initiateNotification("error", "Failed request", result.message)
                return
            }

            this.$initiateNotification("success", "Update successful", result.message)

            let newArray = [];

            for (let x of this.returnImages) {
                if (x != imagePath) {
                    newArray.push(x);
                }
            }
            this.productImages = [];
            this.productImages = newArray
        },
        setImageAsPrimary: async function(imagePath) {

            let target = document.getElementById('setImageAsPrimary');

            if (imagePath.length < 0) {
                this.$showToast("An error occurred. Kindly refresh this page and try again", "error", 6000);
                return
            }

            let variables = {
                imageName: imagePath,
                productId: this.productId,
                businessId: this.businessId
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }
            
            target.disabled = true

            let request = await this.$performGraphQlMutation(this.$apollo, SET_IMAGE_PRIMARY, variables, context);

            target.disabled = false;
            
            // uncheck checkbox
            document.getElementById('checkBox'+imagePath.split('.')[0]).checked = false

            if (request.error) {
                this.$initiateNotification("error", "Failed request", request.message)
                return
            }

            let result = request.result.data.MakePrimaryImage;

            if (!result.success) {
                this.$initiateNotification("error", "Failed request", result.message)
                return
            }

            this.$initiateNotification("success", "Update successful", result.message)

            let newArray = [imagePath];

            for (let x of this.returnImages) {
                if (x != imagePath) {
                    newArray.push(x);
                }
            }
            this.productImages = [];
            this.productImages = newArray


        },
        saveBasicDetails: async function () {

            if (this.productName.length < 2) {
                this.$showToast("What is the name of the product?", "error", 6000)
                this.$addRedBorder("productName")
                return
            } else {
                this.$removeRedBorder("productName");
                this.productName = this.$firstLetterUpperCase(this.productName)
            }


            // check product price
            if (!this.productPrice) {
                this.$addRedBorder("productPrice");
                this.$showToast("How much is this product?", "error", 6000);
                return
            } else {
                this.$removeRedBorder("productPrice")
            }


            // check product category
            if (!this.categoryId) {
                this.resetCategory()
                this.subcategoryId = ""
                this.categoryId = ""
                this.$addRedBorder("productCategory");
                this.$showToast("Choose a product category", "error", 6000);
                return
            } else {
                this.$removeRedBorder("productCategory");
            }

            // check subcategory
            if (!this.subcategoryId) {
                this.$addRedBorder("subcategoryArea");
                this.$showToast(`Select a subcategory under ${this.categoryName} category`, "error", 6000);
                return
            } else {
                this.$removeRedBorder("subcategoryArea");
            }


            let target = document.getElementById("saveBasicDetails");

            let variables = {
                productId: this.productId,
                businessId: this.businessId,
                productName: this.productName,
                productPrice: Number(this.productPrice),
                category: this.categoryId,
                subcategory: this.subcategoryId
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }
            
            target.disabled = true

            let request = await this.$performGraphQlMutation(this.$apollo, EDIT_PRODUCT_BASIC_DETAILS, variables, context);

            target.disabled = false;
            

            if (request.error) {
                this.$initiateNotification("error", "Failed request", request.message)
                return
            }

            let result = request.result.data.EditBasicDetails;

            if (!result.success) {
                this.$initiateNotification("error", "Failed request", result.message)
                return
            }

            this.$initiateNotification("success", "Update successful", result.message)

        },
        showProduct: async function () {

            let target = document.getElementById("showProduct");

            let variables = {
                businessId: this.businessId,
                productId: this.productId
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }

            target.disabled = true

            let request = await this.$performGraphQlMutation(this.$apollo, SHOW_PRODUCT, variables, context);

            target.disabled = false;
            

            if (request.error) {
                this.$initiateNotification("error", "Failed request", request.message)
                return
            }

            let result = request.result.data.ShowProduct;

            if (!result.success) {
                this.$initiateNotification("error", "Failed request", result.message)
                return
            }

            this.$initiateNotification("success", "Update successful", result.message);

            this.hide = 0;
            
        }
    },
    created () {
        if (process.client) {
            window.addEventListener('resize', this.handleResize);
            this.productId = this.$route.params.id;
            this.GetBusinessDataFromStore()
        }
    },
    async mounted() {
        if (process.client) this.dragZone = document.getElementById('dropZoneOverlay');
        await this.GetAllCategories()
        await this.getProductDetails()
        this.pageLoader = false
    },
    watch: {
        subcategoryId: function () {

            if (this.categoryId.length > 0 && this.subcategoryId.length > 0) {
                    // get category data;
                    for (let x of this.returnCategories) {
                        if (x.categoryId == this.categoryId) {
                            this.categoryName = x.categoryName;

                            for (let y of x.subcategory) {
                                if (y.subcategoryId == this.subcategoryId) {
                                    this.subcategoryName = y.subcategoryName
                                    break;
                                }
                            }

                            break
                        }
                    }

                    this.setCategoryAndSubcategory = 1
            }
        },
        categoryId: function () {
            let catId = this.categoryId;
            for (let x of this.returnCategories) {
                if (x.categoryId == catId) {
                    this.subcategoriesUnderCategories = '';
                    this.subcategoriesUnderCategories = x.subcategory
                    break
                }
            }
        },
        uploadLoadedFile: function () {
            if (this.uploadLoadedFile.length > 0) {
                let modal = document.getElementById('formatProductImage');
                modal.classList.remove('show-modal', 'display-block');

                // remove style
                let imageContainer = document.getElementById('dumpProductImageContainer');
                imageContainer.style.width = null
                imageContainer.style.height = null

                let innerContainer = document.getElementById('dumpProductImageContainer');
                innerContainer.style.display = 'flex';
                document.querySelector("body").classList.remove("overflow-hidden");

                this.uploadProductImage()
            }
        }
    },
    beforeDestroy() {
        clearTimeout(this.setTimeoutCount)
    }
}
</script>

<style scoped>
.add-categories {
    margin-top: 8px;
}
.product-upload-container {
    width: 100%
}
.add-categories {
    margin-top: 8px;
}
.font-14 {
    font-size: 14px;
}
.chip.is-active {
    color: #fff;
    background-color: rgba(0,0,0,.6);
}
.d-flex-between-query {
    display: flex;
    justify-content: space-between;
}
.d-flex-between-query * {
    align-self: center;
}
.upload-subcategory-chip-container {
    padding-top: 16px;
}
.action-span {
    color: rgb(238 100 37);
    margin-left: 10px;
    font-weight: 500;
}
.dd-block {
    display: block;
}
.color-picker-container div {
    min-width: 48px;
    height: 38px;
    border-radius: 4px;
    box-shadow: 0px 1px 3px rgba(0,0,0,.2);
    cursor: pointer;
    margin: 0px 8px 8px 0px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.size-card {
    font-size: 14px;  
    font-weight: 500; 
    background-color: white;
}
.size-card svg {
    width: 10px;
    height: 10px;
    fill: #bb2320;
}
.drag-drop-upload-panel {
    width: 100%;
    height: 69px;
}
.is-loading .loader-action {
    display: flex;
}
.page-header.with-action h4 {
    margin-bottom: unset;
    align-self: center;
}
.page-header {
    margin-bottom: 32px !important;
}
</style>
