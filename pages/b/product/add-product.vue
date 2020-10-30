<template>
    <div class="business">
        <div class="body-container">
            <TOPHEADER />
            <Nuxt />
            <div class="content-container">
                <SIDENAV />
                <Nuxt />
                <div class="content-area grey-bg-color">
                    <!-- pageLoader -->
                    <PAGELOADER v-show="pageLoader"></PAGELOADER>
                    <Nuxt />

                    <div class="display-none">
                        <div class="alert alert-secondary notification-alert">
                            <div>Images on white/transparent background look better. Remove background before upload</div>
                            <a href="https://remove.bg" target="_blank" class="btn btn-small btn-white">Remove background</a>
                        </div>
                    </div>

                    <div class="main-content" v-show="!pageLoader">

                        <div class="page-header">
                            <h4>Add product</h4>
                        </div>

                        <div class="product-upload-container">
                            <!-- main content goes in here -->
                            <div class="form-control">
                                <!-- <label for="businessType" class="form-label">Product name</label> -->
                                <input type="text" name="" id="productName" class="input-form white-bg-color" placeholder="Product's name" v-model="productName">
                            </div>

                            <div class="form-control">
                                <!-- <label for="businessType" class="form-label">Product price</label> -->
                                <input type="number" name="" id="productPrice" class="input-form white-bg-color" placeholder="Product's price" v-model="productPrice">
                            </div>

                            
                            <div class="form-control" id="singleTabContainer">
                                <!-- show this div if cat and subcat is in url query -->
                                <div class="d-flex-between-query mg-bottom-16" v-show="industry">
                                    <div class="upload-tab-category">
                                        <span>{{industry}}</span>
                                    </div>
                                    <button class="btn btn-white btn-small" @click="SetIndustry('')">Change</button>
                                </div>
                                <div v-show="!catAndSubcatFromUrl">
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
                                    <div class="d-flex-between-query mg-bottom-16"  v-show="selectedCategoryName && selectedSubcategoryName">
                                        <div class="upload-tab-category">
                                            <span>{{selectedCategoryName}}</span>
                                            <span>
                                                <svg>
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#rightArrow"></use>
                                                </svg>
                                            </span>
                                            <span>{{selectedSubcategoryName}}</span>
                                        </div>
                                        <button class="btn btn-white btn-small" @click="resetUrlData()">Change</button>
                                    </div>
                                    <!-- After the user has selected a category, show the list of subcategories to be selected -->
                                    <!-- show this when selected category ID has been set -->
                                    <div class="change-upload-cat" v-show="selectedCategoryId">
                                        <!-- show when selected catgory has been set and when subcategory ID has not been set -->
                                        <!-- when selected subcategory ID is set, hide -->
                                        <div class="" v-show="!selectedSubcategoryId">
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

                                <div  v-show="catAndSubcatFromUrl">

                                    <label for="businessType" class="form-label mg-bottom-8">Selected category and subcategory</label>
                                    <div class="d-flex-between-query">
                                        <div class="upload-tab-category" v-show="selectedCategoryName && selectedSubcategoryName">
                                            <span>{{selectedCategoryName}}</span>
                                            <span>
                                                <svg>
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#rightArrow"></use>
                                                </svg>
                                            </span>
                                            <span>{{selectedSubcategoryName}}</span>
                                        </div>

                                        <button class="btn btn-white btn-small" @click="catAndSubcatFromUrl = 0">Change</button>

                                    </div>
                                </div>
                            </div>

                            <div class="form-control upload-image-control">
                                <!-- <label for="businessType" class="form-label">Product image</label> -->
                                <div class="upload-action margin-unset">
                                    <input type="file" id="selectimage" @change="previewImage($event, 'previewPrimaryImage')" ref="primaryImageFile" accept="image/png,image/jpg,image/jpeg">
                                    
                                    <button class="btn btn-light-grey btn-block margin-unset" id="productsImage">Upload product's image</button>
                                </div>
                                <!-- <div  class="mg-top-8 font-14">
                                    <span>White background pictures look better</span>
                                    <a href="https://remove.bg" target="_blank" class="btn btn-small btn-white">Remove</a>
                                </div> -->
                                

                                <div v-show="uploadLoadedFile">
                                    <div id="previewPrimaryImage" class="image-upload-preview"></div>
                                </div>

                            </div>
                    
                            <div class="form-control">
                                <button class="btn btn-primary btn-block" id="uploadBasicProduct" @click="uploadBasicProduct($event)">
                                    Upload product
                                    <div class="loader-action"><span class="loader"></span></div>
                                </button>
                            </div>
                        </div>

                            <div class="industry-layout" v-show="industry.length == 0 && !pageLoader && !isNetworkError && selectedCategoryId.length == 0">
                                <div class="header">Choose your industry...</div>
                                <div class="industry-card-container">

                                    <div class="card industry-card" @click="SetIndustry('Fashion')">
                                        <div class="image-area">
                                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 640 512">
                                                <use xlink:href="~/assets/business/image/all-svg.svg#industryFashion"></use>
                                            </svg>
                                        </div>
                                        <div class="industry-details">
                                            <div class="name">Fashion</div>
                                            <div class="categories">{{highLightFashionIndustry}}</div>
                                        </div>
                                    </div>

                                    <div class="card industry-card" @click="SetIndustry('Beauty')">
                                        <div class="image-area">
                                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="smile-wink" class="svg-inline--fa fa-smile-wink fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                                <use xlink:href="~/assets/business/image/all-svg.svg#industryBeauty"></use>
                                            </svg>
                                        </div>
                                        <div class="industry-details">
                                            <div class="name">Beauty</div>
                                            <div class="categories">{{highLightBeautyIndustry}}</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                    </div>
                    <BOTTOMNAV></BOTTOMNAV>
                    <Nuxt />
                </div>
            </div>

            <ADDCATEGORIESMODAL></ADDCATEGORIESMODAL>
            <Nuxt />


            <!-- place order modal -->
            <div class="modal-container-2" id="confirmedOrderModal" v-show="successfulUpload">
                <div class="modal-dialog-box success-order-modal-container">


                    <div class="modal-content">
                        <div class="thumbs-up-container">
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <use xlink:href="~/assets/business/image/all-svg.svg#thumbsUp"></use>
                            </svg>
                        </div>
                        <div class="success-order-text">
                            <p>Product uploaded was successful</p>
                            <div class="price-info">To increase product visibility, add more information like color, size etc.</div>
                        </div>
                        <div class="mg-bottom-32">
                            <n-link class="btn btn-primary btn-block mg-bottom-8" :to="`/b/product/edit/${productId}`">Add more info</n-link>
                            <button class="btn btn-white btn-block" @click="hideSuccessModal($event)">Continue uploading</button>
                        </div>
                    </div>

                </div>
            </div>
            <!--  end ofplace order modal -->

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
</template>

<script>

import TOPHEADER from '~/layouts/business/top-navigation.vue';
import SIDENAV from '~/layouts/business/side-bar.vue';
import BOTTOMNAV from '~/layouts/business/bottom-nav.vue';
import ADDCATEGORIESMODAL from'~/components/business/categories/addCategories.vue';
import PAGELOADER from '~/components/loader/loader.vue';

import { GET_ALL_CATEGORIES } from '~/graphql/categories';
import { CREATE_NEW_PRODUCT } from '~/graphql/product';
import { mapActions, mapGetters, mapMutations } from 'vuex';

// import VueHtml2Canvas from 'vue-html2canvas';

export default {
    name: "ADDNEWPRODUCT",
    components: {
        TOPHEADER, SIDENAV, BOTTOMNAV, ADDCATEGORIESMODAL, PAGELOADER
    },
    data : function () {
        return {
            dragZone: '',
            pageLoader: true,
            
            allCategories: "",
            businessId: "",
            accessToken: "",
            clickedCategory: 0,

            // subcategories under categories
            subcategoriesUnderCategories: "",

            // product basic 
            productName: "",
            productPrice: "",

            // product category
            selectedCategoryId: "",
            selectedCategoryName: "",

            // product subcategory
            selectedSubcategoryId: "",
            selectedSubcategoryName: "",


            // when the cat and sub cat is coming from the url hide the select form.
            catAndSubcatFromUrl: 0,

            // image file to be uploaded
            uploadLoadedFile: "",

            // uploaded product ID
            productId: "",

            successfulUpload: 0,
            screenWidth: "",
            formatterWidth: "",
            formatterHeight: "",

            // crop image
            targetImageFile: "",

            isNetworkError: 0,


            setTimeoutCount: null,

            industry: "",
            highLightFashionIndustry: "",
            highLightBeautyIndustry: "",
            allCategories: [],
            categoriesInIndustry: []
            
        }
    },
    computed: {
        returnCategories: function () {
            return this.categoriesInIndustry;
        },
        returnSubcategoriesOfCategory: function () {
            return this.subcategoriesUnderCategories
        },
        handleResize() {
            this.screenWidth = window.innerWidth;
            if (this.screenWidth >= 466) {
                this.screenWidth = 370
            }
        },
    },
    methods: {
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

                
                let img = await this.$htmlToCanvas(el, options);

                this.uploadLoadedFile = img

                actionBtn.disabled = false;

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
        resetUrlData: function () {
            this.selectedSubcategoryId = '';
            this.selectedCategoryId = this.selectedCategoryId
            this.selectedSubcategoryName = ""
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
        SetIndustry: function (industry) {
            this.industry = industry
            this.selectedCategoryId = ""
            this.selectedSubcategoryId = ""
            this.subcategoriesUnderCategories = ""
            this.selectedSubcategoryName = ""
            this.selectedCategoryName = ""
            this.catAndSubcatFromUrl = 0
        },
        industryHighLightText: function (categories) {
        
            let fashionHighLight = []   
            let beautyHighLight = []

            for (const [index, category] of categories.entries()) {
                if (category.industry == "Fashion") {
                    fashionHighLight.push(category.categoryName)
                }

                if (category.industry == "Beauty") {
                    beautyHighLight.push(category.categoryName)
                }
            }

            for(const [index, fashion] of fashionHighLight.entries()) {

                if(index == 0) {
                    this.highLightFashionIndustry = `${fashion}`
                }

                if (index > 0) {
                    this.highLightFashionIndustry = this.highLightFashionIndustry + `, ${fashion}`
                }

                if (index == 4 ) {
                    this.highLightFashionIndustry = `${this.highLightFashionIndustry}, etc.`;
                    break;
                }

                
            }

            for(const [index, beauty] of beautyHighLight.entries()) {

                if(index == 0) {
                    this.highLightBeautyIndustry = `${beauty}`
                }

                if (index > 0) {
                    this.highLightBeautyIndustry = this.highLightBeautyIndustry + `, ${beauty}`
                }

                if (index == 3 ) {
                    this.highLightBeautyIndustry = `${this.highLightBeautyIndustry}, etc.`;
                    break;
                }
            }

        },
        GetAllCategories: async function () {
            let query = await this.$performGraphQlQuery(this.$apollo, GET_ALL_CATEGORIES);
            if (query.error) {
                this.$initiateNotification('error', 'Failed request', query.message);
                this.isNetworkError = 1
                return
            } else {
                this.isNetworkError = 0
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
                    industry: category.industry,
                    subcategory: []
                }
                for (const [subcategoryIndex, subcategory] of category.subcategories.entries()) {
                    categorylisting[index].subcategory.push({
                        subcategoryId: subcategory.subcategoryId,
                        subcategoryName: subcategory.subcategoryName
                    })
                }
            }

            this.industryHighLightText(categorylisting)
            this.allCategories = categorylisting;

            // emit to add category component
            $nuxt.$emit('categoryListing', this.allCategories)
        },
        onSelectCategory: function(e) {
            let selectedCategory = e.target.options
            // reset selected category
            this.selectedCategoryId = "";

            if (selectedCategory.selectedIndex > -1) {
                let selectedIndex = e.target.options[e.target.options.selectedIndex];
                this.selectedCategoryId = selectedIndex.value;
                this.selectedCategoryName = selectedIndex.innerHTML
                this.selectedSubcategoryName = "",
                this.selectedSubcategoryId = ""
            }
        },
        chooseASubcategory: function (subcatId, e) {
            if (!process.client) return

            e.preventDefault();
            this.selectedSubcategoryId = subcatId

            let subcategoryChips = document.querySelectorAll("[data-subcat-key]");
            for (const action of subcategoryChips) {
                
                let id = action.getAttribute('data-subcat-key');
                if (id === subcatId) {

                    // update subcategory name
                    this.selectedSubcategoryName = action.innerHTML.trim()
                    // add is-active class
                    action.classList.add("is-active")
                } else {
                    action.classList.remove("is-active")
                }
            }
        },
        setCatAndSubcatFromQueryString: function () {
            let queryString = this.$route.query;
            let cat = queryString.cat;
            let sub = queryString.sub;

            if ((sub != undefined && cat != undefined) && (cat && sub)) {

                    this.selectedCategoryId = cat;
                    this.selectedSubcategoryId = sub;

                    // get category data;
                    for (let x of this.allCategories) {
                        if (x.categoryId == cat) {
                            this.selectedCategoryName = x.categoryName;
                            this.industry = x.industry
                            for (let y of x.subcategory) {
                                if (y.subcategoryId == sub) {
                                    this.selectedSubcategoryName = y.subcategoryName
                                    break;
                                }
                            }

                            break
                        }
                    }

                    this.catAndSubcatFromUrl = 1
            }
        },
        uploadBasicProduct: async function (e) {

            e.preventDefault();

            // check product name
            if (!this.productName || this.productName.length < 3) {
                this.$addRedBorder("productName");
                this.$showToast("What is the name of the product you want to sell? It must be greater than 2 characters", "error", 6000);
                return
            } else {
                this.$removeRedBorder("productName")
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
            if (!this.selectedCategoryId) {
                this.$addRedBorder("productCategory");
                this.$showToast("Choose a product category", "error", 6000);
                return
            } else {
                this.$removeRedBorder("productCategory");
            }

            // check subcategory
            if (!this.selectedSubcategoryId) {
                this.$addRedBorder("selectedSubCat");
                this.$showToast(`Select a subcategory under ${this.selectedCategoryName} category`, "error", 6000);
                return
            } else {
                this.$removeRedBorder("selectedSubCat");
            }

            // check upload image
            if (this.uploadLoadedFile.length == 0) {
                this.$addRedBorder("productsImage");
                this.$showToast("Upload the image of the product that you want to sell", "error");
                return
            } else {
                this.$removeRedBorder('productsImage')
            }

            let target = document.getElementById("uploadBasicProduct");

            target.disabled = true;

            let variables = {
                name: this.productName,
                price: Number(this.productPrice),
                category: this.selectedCategoryId,
                subcategory: this.selectedSubcategoryId,
                file: this.uploadLoadedFile,
                businessId: this.businessId
            };

            let context = {
                hasUpload: true,
                headers: {
                    'accessToken': this.accessToken
                }
            }


            this.$showToast("Upload has started", "info")

            let request = await this.$performGraphQlMutation(this.$apollo, CREATE_NEW_PRODUCT, variables, context);

            target.disabled = false;

            if (request.error == true) {
                this.$initiateNotification('error', 'Failed request', 'A network error occurred');
                return
            }
            

            let result = request.result.data.CreateProduct;

            if (!result.success) {
                this.$initiateNotification('error', "Failed upload", result.message)
                return
            }

            this.productId = result.productId;

            document.querySelector("body").classList.add("overflow-hidden");

            this.successfulUpload = 1;

            this.$showToast("Upload successful", "success");

        },
        hideSuccessModal: function (e) {
            e.preventDefault();
            this.successfulUpload = 0;
            document.querySelector("body").classList.remove("overflow-hidden");
        },
        setWidthAndHeightForImageFormatter: function () {
            if (this.screenWidth <= 599) {
                this.formatterWidth = `${this.screenWidth - 16}px`
                this.formatterHeight = `${this.screenWidth - 16}px`
            } else {
                this.formatterWidth = "320px"
                this.formatterHeight = "320px"
            }
        }
    },
    async created () {
        if (process.client) {
            window.addEventListener('resize', this.handleResize);
            this.allCategories = "";
            this.GetBusinessDataFromStore()
            await this.GetAllCategories();

            this.setCatAndSubcatFromQueryString();
        }
    },
    watch: {
        selectedCategoryId: function () {
            if (this.selectedCategoryId.length == 0) return
            let catId = this.selectedCategoryId;
            for (let x of this.allCategories) {
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
            }
        },
        industry: function () {
            if (this.industry.length == 0) return
            let newCategories = [];

            for (let x of this.allCategories) {
                if (x.industry == this.industry) {
                    newCategories.push({
                        categoryId: x.categoryId,
                        categoryName: x.categoryName,
                    })
                }
            }

            this.categoriesInIndustry = newCategories
        }
    },
    mounted() {
        this.pageLoader = false
        
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
</style>
