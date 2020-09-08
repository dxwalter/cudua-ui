<template>
    <div class="business">
        <div class="body-container">
            <TOPHEADER></TOPHEADER>
            <nuxt/>
            <div class="content-container">
                <SIDENAV></SIDENAV>
                <nuxt />
                    <div class="content-area grey-bg-color">
                        <!-- pageLoader -->
                        <PAGELOADER v-if="pageLoader"></PAGELOADER>
                        <nuxt />

                        <div class="main-content">

                            <div class="page-header">
                                <h4>Edit product</h4>
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
                                                <input type="text" name="" id="productPrice" class="input-form white-bg-color" placeholder="Product price" v-model="productPrice">
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
                                                    <div class="change-upload-cat" v-show="!setCategoryAndSubcategory">
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
                                                <button class="btn btn-primary btn-block">Save update</button>
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

                                                            <div class="">
                                                                <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="16" viewBox="0 0 4 16">
                                                                    <use xlink:href="~/assets/business/image/all-svg.svg#verticalElipsis"></use>
                                                                </svg>
                                                                <input type="checkbox" class="dropdownCheckBox">
                                                                <div class="dropdown-container showEffect">
                                                                    <button class="btn btn-primary btn-small">Set as primary</button>
                                                                    <button class="btn btn-default btn-small">Delete image</button>
                                                                </div>
                                                            </div>

                                                            <div class="">
                                                                <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="16" viewBox="0 0 4 16">
                                                                    <use xlink:href="~/assets/business/image/all-svg.svg#verticalElipsis"></use>
                                                                </svg>
                                                                <input type="checkbox" class="dropdownCheckBox">
                                                                <div class="dropdown-container showEffect">
                                                                    <button class="btn btn-primary btn-small" onclick="alert('primary')">Set as primary</button>
                                                                    <button class="btn btn-default btn-small" onclick="alert('delete')">Delete image</button>
                                                                </div>
                                                            </div>

                                                            <div class="">
                                                                <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="16" viewBox="0 0 4 16">
                                                                    <use xlink:href="~/assets/business/image/all-svg.svg#verticalElipsis"></use>
                                                                </svg>
                                                                <input type="checkbox" class="dropdownCheckBox">
                                                                <div class="dropdown-container showEffect">
                                                                    <button class="btn btn-primary btn-small">Set as primary</button>
                                                                    <button class="btn btn-default btn-small">Delete image</button>
                                                                </div>
                                                            </div>

                                                            <div class="">
                                                                <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="16" viewBox="0 0 4 16">
                                                                    <use xlink:href="~/assets/business/image/all-svg.svg#verticalElipsis"></use>
                                                                </svg>
                                                                <input type="checkbox" class="dropdownCheckBox">
                                                                <div class="dropdown-container showEffect">
                                                                    <button class="btn btn-primary btn-small">Set as primary</button>
                                                                    <button class="btn btn-default btn-small">Delete image</button>
                                                                </div>
                                                            </div>

                                                            <div class="">
                                                                <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="16" viewBox="0 0 4 16">
                                                                    <use xlink:href="~/assets/business/image/all-svg.svg#verticalElipsis"></use>
                                                                </svg>
                                                                <input type="checkbox" class="dropdownCheckBox">
                                                                <div class="dropdown-container showEffect">
                                                                    <button class="btn btn-primary btn-small">Set as primary</button>
                                                                    <button class="btn btn-default btn-small">Delete image</button>
                                                                </div>
                                                            </div>                                        
                                                        </div>
                                        
                                                    </div>
                                                    <div class="form-control">
                                                        <button class="btn btn-block btn-white">Upload product images</button>
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
                                                    <div class=""  v-show="sizes.length > 1">
                                                        <div class="form-label mg-bottom-16">Tap/click to remove sizes</div>
                                                        <div class="color-picker-container mg-bottom-8">
                                                            
                                                            <div class="size-card" v-for="size in returnProductSizes" :key="size.sizeId" @click="removeSizeFromSizes(size.sizeNumber, size.sizeId)">
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
                                                        <span>Product description <span>- optional</span></span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="22.05" height="13.616" viewBox="0 0 22.05 13.616">
                                                            <use xlink:href="~/assets/business/image/all-svg.svg#arrowDown"></use>
                                                        </svg>
                                                    </div>
                                                    <div class="more-details-input-container js-accordionBody">
                                                        <div class="form-control">
                                                            <!-- <label for="businessType" class="form-label">Type in the product description</label> -->
                                                            <textarea name="" id="" cols="30" rows="5" class="input-form white-bg-color" placeholder="Type in the product description" v-model="description"></textarea>
                                                        </div>
                                                        <div class="form-control">
                                                            <button class="btn btn-block btn-primary">Update description</button>
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
                        <nuxt/>
                        <ADDCATEGORIESMODAL></ADDCATEGORIESMODAL>
                        <nuxt />
                    </div>
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
    CREATE_PRODUCT_SIZE
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
            description: "",
            tags: "",

            // Category and subcategory listing
            subcategoriesUnderCategories: "",
            allCategories: ""
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
        }
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
            target.disabled = true;

            
            let formatArray = this.formatStringToArray(this.newSizes);

            let oldArray = [];

            this.sizes.forEach(element => {
                oldArray.push(element.sizeNumber)
            });

            let newArray = [...oldArray, ...formatArray]
            newArray = new Set(newArray)


            console.log(newArray);
            return

            let variables = {
                sizes: ["124", '133', "143"],
                businessId: this.businessId,
                productId: this.productId
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }

            let request = await this.$performGraphQlMutation(this.$apollo, CREATE_PRODUCT_SIZE, variables, context);

            console.log(request);
            
        },
        formatSizeString: function () {
            let size = this.sizes.split(',');
            let sizeArray = [];
            size.forEach(element => {
                if (element != "") sizeArray.push(element.trim())
            });

            return new Set(sizeArray);
        },
        removeSizeFromSizes: function (size, id="") {
            
            // let sizes = this.formatSizeString(this.sizes)
        },
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
            this.colors = product.colors == null ? "": product.colors;
            this.description = product.description;
            this.hide = product.hide;
            this.productImages = product.images;
            this.productName = product.name;
            this.productPrice = product.price;
            this.sizes = product.sizes == null ? "" : product.sizes;
            this.subcategoryName = product.subcategory.subcategoryName;
            this.subcategoryId = product.subcategory.subcategoryId;
            this.tags = product.tags == null ? "": product.tags
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
            // this.categoryId = "";
            // this.subcategoryId = "";
            this.categoryName = "";
            this.subcategoryName = ""
            this.setCategoryAndSubcategory = 0
        }
    },
    created () {
        if (process.client) {
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
        }
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
    width: 38px;
    height: 28px;
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
    font-size: 12px;   
    background-color: white;
}
.size-card svg {
    width: 10px;
    height: 10px;
    fill: #bb2320;
}
</style>
