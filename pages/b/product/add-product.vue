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
                    <PAGELOADER v-show="pageLoader"></PAGELOADER>

                    <div>
                        <div class="alert alert-secondary notification-alert">
                            <div>Images on white/transparent background look better. Remove background before upload</div>
                            <a href="https://remove.bg" target="_blank" class="btn btn-small btn-white">Remove background</a>
                        </div>
                    </div>

                    <div class="main-content">

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
                                        <button class="btn btn-white btn-small" @click="selectedSubcategoryId = ''">Change</button>
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
                                    <input type="file" id="selectimage" @change="previewImage($event, 'previewPrimaryImage')" ref="primaryImageFile">
                                    
                                    <button class="btn btn-light-grey btn-block margin-unset" id="productsImage">Upload product's image</button>
                                </div>
                                <!-- <div  class="mg-top-8 font-14">
                                    <span>White background pictures look better</span>
                                    <a href="https://remove.bg" target="_blank" class="btn btn-small btn-white">Remove</a>
                                </div> -->
                                

                                <div id="previewPrimaryImage" class="image-upload-preview"></div>
                            </div>
                    
                            <div class="form-control">
                                <button class="btn btn-primary btn-block" id="uploadBasicProduct" @click="uploadBasicProduct($event)">
                                    Upload product
                                    <div class="loader-action"><span class="loader"></span></div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <BOTTOMNAV></BOTTOMNAV>
                </div>
            </div>

            <ADDCATEGORIESMODAL></ADDCATEGORIESMODAL>



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
            productPrice: 0,

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
            
        }
    },
    computed: {
        returnCategories: function () {
            return this.allCategories;
        },
        returnSubcategoriesOfCategory: function () {
            return this.subcategoriesUnderCategories
        },
        handleResize() {
            this.screenWidth = window.innerWidth;
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
            let file = e.target.files[0];
            let uploadFile = e.target.files[0];

            if (uploadFile == undefined) return

            let fileValidation = this.$checkFileExtension(uploadFile.name);
            if (fileValidation == false) {
                this.$showToast('Choose a valid image file', "error", 3500)
                return
            } 

            this.$previewImage(e, preview);
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
                    for (let x of this.returnCategories) {
                        if (x.categoryId == cat) {
                            this.selectedCategoryName = x.categoryName;

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
            if (this.uploadLoadedFile.name == undefined) {
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
            let catId = this.selectedCategoryId;
            for (let x of this.returnCategories) {
                if (x.categoryId == catId) {
                    this.subcategoriesUnderCategories = '';
                    this.subcategoriesUnderCategories = x.subcategory
                    break
                }
            }
        }
    },
    mounted() {
        this.pageLoader = false
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
