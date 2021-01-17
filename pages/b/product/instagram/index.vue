<template>
    <div class="business">
        <div class="body-container">
            <TOPHEADER />
            <Nuxt />
            <div class="content-container">
                <SIDENAV />
                <Nuxt />
                <div class="content-area grey-bg-color">
                    <div class="main-content">

                        
                        <div class="page-header">
                            <h4>Select a product</h4>
                        </div>

                        <div class="">
                            <div class="instagram-image-listing mg-bottom-32">
                                <div class="image-tile" @click="selectProduct('image')">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="" srcset="">
                                </div>
                                <div class="image-tile">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="" srcset="">
                                </div>
                                <div class="image-tile">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="" srcset="">
                                </div>
                                <div class="image-tile">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="" srcset="">
                                </div>
                                <div class="image-tile">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="" srcset="">
                                </div>
                                <div class="image-tile">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="" srcset="">
                                </div>
                                <div class="image-tile">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="" srcset="">
                                </div>
                                <div class="image-tile">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="" srcset="">
                                </div>
                                <div class="image-tile">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="" srcset="">
                                </div>
                                <div class="image-tile">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="" srcset="">
                                </div>
                                <div class="image-tile">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="" srcset="">
                                </div>
                                <div class="image-tile">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="" srcset="">
                                </div>
                                <div class="image-tile">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="" srcset="">
                                </div>
                                <div class="image-tile">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="" srcset="">
                                </div>
                                <div class="image-tile">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="" srcset="">
                                </div>
                                <div class="image-tile">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="" srcset="">
                                </div>
                                <div class="image-tile">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="" srcset="">
                                </div>
                                <div class="image-tile">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="" srcset="">
                                </div>
                                <div class="image-tile">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="" srcset="">
                                </div>
                                <div class="image-tile">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="" srcset="">
                                </div>
                                <div class="image-tile">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="" srcset="">
                                </div>
                                <div class="image-tile">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="" srcset="">
                                </div>
                                <div class="image-tile">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="" srcset="">
                                </div>
                                <div class="image-tile">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="" srcset="">
                                </div>
                                <div class="image-tile">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="" srcset="">
                                </div>
                                <div class="image-tile">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="" srcset="">
                                </div>
                                <div class="image-tile">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="" srcset="">
                                </div>
                                <div class="image-tile">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="" srcset="">
                                </div>
                                <div class="image-tile">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="" srcset="">
                                </div>
                                <div class="image-tile">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="" srcset="">
                                </div>
                            </div>
                            
                            <div class="d-flex-center mg-bottom-32 instagram-more-action-container">
                                <button class="btn btn-white">Previous</button>
                                <button class="btn btn-primary">Next</button>
                            </div>

                        </div>

                        <div class="instagram-loader display-none">
                            <div class="loader-action"><span class="loader"></span></div>
                        </div>

                        <div class="">

                        </div>
        
                    </div>
                    <BOTTOMNAV></BOTTOMNAV>
                    <Nuxt />
                </div>
            </div>

            <!-- Format image modal -->
            <div class="modal-container mobile-search-modal-container" v-bind:class="{'display-block': productImage}">
                <div class="modal-dialog-box business-details-modal">
                
                    <div class="card close-business-modal">
                        <!-- close search modal -->
                        <button class="modal-search-close-btn" @click="resetSelectedProduct()">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.512 18.341">
                                <use xlink:href="~/assets/business/image/all-svg.svg#modalArrowLeft"></use>
                            </svg>
                        </button>
                        <div class="about-biz-header">
                            <h4>Upload Product</h4>
                        </div>
                        <!-- end of search input area -->
                    </div>
            
                    <!-- beginning of mobile search container -->
                    <div class="mobile-search-container no-padding white-bg-color">
                        
                        <div class="layout-container">
                            <div class="format-image-container instagram-preview" id="dumpProductImageContainer" ref="imageToPrint">
                                <!-- make this 100%-->
                                <div class="business-cover-photo" id="dumpProductImage" data-rotate="0">
                                    <!-- make this 100%-->
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
                                </div>
                            </div>
                        </div>

                        <div class="instagram-form-holder">

                            <div class="form-control">
                                <!-- <label for="businessType" class="form-label">Product name</label> -->
                                <input type="text" name="" id="productName" class="input-form" placeholder="Product's name" v-model="productName">
                            </div>

                            <div class="form-control">
                                <!-- <label for="businessType" class="form-label">Product price</label> -->
                                <input type="number" name="" id="productPrice" class="input-form" placeholder="Product's price" v-model="productPrice">
                            </div>


                            <div class="form-control mg-bottom-32" id="singleTabContainer">
    
                                <div>
                                    <label for="businessType" class="form-label">Choose an industry</label>
                                    <div class="d-flex mg-bottom-16 industry-button-container">
                                        <div class="industry-action-card grey-bg-color" id="industryFashion">
                                            <div class="industry-overlay" @click="SetIndustry('Fashion', $event)"></div>
                                            <div class="svg">
                                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 640 512">
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#industryFashion"></use>
                                                </svg>
                                            </div>
                                            <div class="text-a">Fashion</div>
                                            <div class="roller-indicator"></div>
                                        </div>

                                        <div class="industry-action-card" id="industryBeauty">
                                            <div class="industry-overlay" @click="SetIndustry('Beauty', $event)"></div>
                                            <div class="svg">
                                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 640 512">
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#industryBeauty"></use>
                                                </svg>
                                            </div>
                                            <div class="text-a">Beauty</div>
                                            <div class="roller-indicator"></div>
                                        </div>

                                    </div>
                                </div>

                                <div v-show="!catAndSubcatFromUrl">
                                    <div class="mg-bottom-32">
                                        <!-- <label for="businessType" class="form-label">Select category</label> -->
                                        <select class="input-form" 
                                        id="productCategory" @click="clickedCategory = 1" @change="onSelectCategory($event)" v-show="industry">
                                            <!-- <option selected value="">Select category</option> -->
                                            <option v-for="category in returnCategories" v-bind:value="category.categoryId" :key="category.categoryId">{{ category.categoryName }}</option>
                                        </select>

                                    </div>
                                    <!-- after the user has selected a category and subcategory, show the details below by removing display-none -->
                                    <div class="d-flex-between-query mg-bottom-16"  v-show="selectedCategoryName && selectedSubcategoryName">
                                        <div class="upload-tab-category">
                                            <span v-html="selectedCategoryName"></span>
                                            <span>
                                                <svg>
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#rightArrow"></use>
                                                </svg>
                                            </span>
                                            <span v-html="selectedSubcategoryName"></span>
                                        </div>

                                        <button class="btn btn-white btn-small" @click="resetUrlData()">Change</button>

                                    </div>
                                    <!-- After the user has selected a category, show the list of subcategories to be selected -->
                                    <!-- show this when selected category ID has been set -->
                                    <div class="change-upload-cat" v-show="selectedCategoryId">
                                        <!-- show when selected catgory has been set and when subcategory ID has not been set -->
                                        <!-- when selected subcategory ID is set, hide -->
                                        <div class="" v-show="!selectedSubcategoryId">
                                            <label for="businessType" class="form-label margin-unset">Choose a subcategory under {{selectedCategoryName}}</label>
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

                            </div>

                        <div class="form-control">
                            <div class="email-noti-switcher">
                                <span class="form-label margin-unset">Use caption as description</span>
                                <label class="switch">
                                    <input type="checkbox" @click="setCaptionBox()">
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </div>

                        <div class="form-control" v-show="useCaption">
                            <Editor id="productDescription" v-model="productDescription"/>

                        </div>

                            <div class="form-control sb-control">
                                <button class="btn btn-primary btn-block" id="uploadBasicProduct" @click="uploadBasicProduct($event)">
                                    Upload product
                                    <div class="loader-action"><span class="loader"></span></div>
                                </button>

                                <button class="btn btn-white btn-block"  @click="resetSelectedProduct()">Cancel</button>
                            </div>

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
import PAGELOADER from '~/components/loader/loader.vue';
import { GET_ALL_CATEGORIES } from '~/graphql/categories';

import Editor from "~/components/editor.vue";

export default {
    name: "UPLOADWITHINSTAGRAM",
    components: {
        TOPHEADER, SIDENAV, BOTTOMNAV, PAGELOADER, Editor
    },
    data : function () {
        return {
            code: "",
            redirectTimer: null,

            allCategories: "",
            businessId: "",
            accessToken: "",
            clickedCategory: 0,

            // subcategories under categories
            subcategoriesUnderCategories: "",


            // product category
            selectedCategoryId: "",
            selectedCategoryName: "",

            // product subcategory
            selectedSubcategoryId: "",
            selectedSubcategoryName: "",

            catAndSubcatFromUrl: "",

            industry: "",
            allCategories: [],
            categoriesInIndustry: [],
            
            productName: "",
            productPrice: "",
            productImage: "",
            useCaption: 0,
            productDescription: ""
        }
    },
    computed: {
        returnCategories: function () {
            return this.categoriesInIndustry;
        },
        returnSubcategoriesOfCategory: function () {
            return this.subcategoriesUnderCategories
        }
    },
    methods: {
        resetUrlData: function () {
            this.selectedSubcategoryId = '';
            this.selectedCategoryId = this.selectedCategoryId
            this.selectedSubcategoryName = ""
        },
        selectProduct: function (image) {
            document.querySelector('body').classList.add('overflow-hidden')
            // document.getElementById('uploadFromInstagramModal').classList.add('show-modal')
            this.productImage = image
        },
        resetSelectedProduct: function () {
            document.querySelector('body').classList.remove('overflow-hidden')
            // document.getElementById('uploadFromInstagramModal').classList.remove('show-modal')  
            this.productImage = ''
        },
        setCaptionBox: function () {
            if (this.useCaption == 0) {
                this.useCaption = 1
            } else {
                this.useCaption = 0
            }
        },
        async getLongTermToken () {


            let longTermUrl = `https://api.instagram.com/oauth/access_token`;

            // this.$axios.setHeader('dataType', 'jsonp')

            delete this.$axios.defaults.headers.common['dataType']
            delete this.$axios.defaults.headers.common['Content-Type']

            const querystring = require('querystring');
            
            let params = {
                
                    client_id: `${process.env.INSTAGRAM_APP_ID}`,
                    client_secret: `${process.env.INSTAGRAM_APP_SECRET}`,
                    grant_type: `authorization_code`,
                    redirect_uri: `https://localhost:3333/b/product/instagram`,
                    code: `${this.code}`

            }

            const getLongTermToken = await this.$axios.$post(`${longTermUrl}`, querystring.stringify(params)).then(function (response) {

                console.log(response);

            }).catch(error => {
                
                // do something

                console.log(error + " here 2")
            });

            console.log(getLongTermToken + " Here")
            
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

        cancelProcess: function (error) {

            console.log(error == 'access_denied')

            if (error == 'access_denied') {
                this.$showToast('You declined access to your instagram account', "info", 5000);
            }

            this.redirectTimer = setTimeout(() => {
                    return this.$router.push('/b/product/add-product');
            }, 3000);

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
        SetIndustry: function (industry, e) {
            
            let allIndustries = document.querySelectorAll('.industry-action-card');
            
            for (let x of allIndustries) {
                x.classList.remove('is-active')
            }

            document.getElementById(`industry${industry}`).classList.add('is-active')

            this.industry = industry
            this.selectedCategoryId = ""
            this.selectedSubcategoryId = ""
            this.subcategoriesUnderCategories = ""
            this.selectedSubcategoryName = ""
            this.selectedCategoryName = ""
            this.catAndSubcatFromUrl = 0

            this.$showToast(`${industry} industry selected`, 'info');
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
    },
    beforeDestroy () {
        clearTimeout(this.redirectTimer);
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
    async created () {
        if (process.client) {

            if (this.$route.query.error !== undefined) {
                return this.cancelProcess(this.$route.query.error);
                
            }


            let urlData = this.$route.query.code

            if (urlData !== undefined && urlData.length > 0) {
                this.code = urlData
                this.getLongTermToken()
            }

            await this.GetAllCategories();
        }
    }
}
</script>
<style scoped>
    .instagram-loader {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
        top: 0;
    }
    .instagram-loader .loader-action {
        display: flex;
        background-color: transparent;
        cursor: unset;
    }

    .instagram-loader .loader-action .loader {
        width: 70px;
        height: 70px;
        border: 2px solid rgba(0,0,0,.5);
        border-top: 2px solid transparent;
    }
    .add-categories {
        margin-top: 8px;
    }
    .font-14 {
        font-size: 14px;
    }
    .upload-subcategory-chip-container .chip {
        background-color: #f5f5f5;
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
    .sb-control button:first-child{
        margin-bottom: 16px;
    }
    .grey-bg-color.industry-action-card {
        background-color: #f4f4f4 !important;
    }
</style>
