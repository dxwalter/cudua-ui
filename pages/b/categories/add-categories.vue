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
                        <PAGELOADER v-show="pageLoader" />
                        <Nuxt />
                        <nuxt />
                        <div class="main-content" v-show="!isNetworkError && !pageLoader">

                            <div class="page-header">
                                <h4>Add product categories</h4>
                            </div>

                            <div class="product-categories-container">
                                <div class="card create-cat-card-layout">

                                    <!-- <div class="form-control">
                                        <label for="businessType" class="form-label">Choose your business type</label>
                                        <input type="text" name="" id="businessType" class="input-form">
                                    </div> -->

                                    <div class="form-control mg-bottom-0" v-bind:class="{'mg-bottom-24': clickedCategory}">
                                        
                                        <div class="d-flex-between-query mg-bottom-16">
                                            <div class="upload-tab-category">
                                                <span>{{industry}}</span>
                                            </div>
                                            <button class="btn btn-white btn-small" @click="SetIndustry('')">Change</button>
                                        </div>

                                        <select class="input-form" id="selectCategoryDropDown"  @change="onSelectCategory($event)" @click="clickedCategory = 1">
                                            <option selected>Select a product category</option>
                                            <option v-for="category in returnCategories" v-bind:value="category.categoryId" :key="category.categoryId">{{ category.categoryName }}</option>
                                        </select>
                                    </div>

                                    <div class="form-control mg-bottom-32" v-show="subcategoriesUnderCategories">
                                        <label for="businessCategory" class="form-label">Select one or more subcategories</label>
                                        <div class="chip-container">
                                            <div href="#" class="chip" 
                                            v-for="subcategory in returnSubcategoriesOfCategory" :key="subcategory.subcategoryId"
                                            @click="addSelectedSubcategory(subcategory.subcategoryName, subcategory.subcategoryId)"
                                            >{{subcategory.subcategoryName}}</div>
                                        </div>
                                    </div>


                                    <div class="form-control" v-show="clickedCategory">
                                        <label for="businessCategory" class="form-label mg-bottom-8">Add your product's category/subcategory</label>
                                        <div class="create-footer-options">
                                            <button type="button" class="btn btn-white btn-small" data-trigger="modal" data-target="createCategoryModal">Add category/subcategories</button>
                                        </div>
                                    </div>

                                </div>

                                <div class="card selected-cat-card " v-show="returnVendorSelectedSubcategories.length > 0">
                                    <div class="card-header">
                                        <h4>Selected product categories</h4>
                                    </div>
                                    
                                    <div class="selected-cat-container">


                                        <div class="selected-cat">
                                            <div class="header">
                                                <h3>{{selectedCategoryName}}</h3>
                                                <button type="button" class="btn btn-white  btn-small" @click="removeCategory()">Remove category</button>
                                            </div>
                                            
                                            <div class="form-label mg-bottom-24">Tap/click to remove subcategory</div>

                                            <div class="chip-container">
                                                <div class="chip" 
                                                v-for="(subcategory, index) in returnVendorSelectedSubcategories" 
                                                :key="index"
                                                @click="removeSubcategoryFromVendorSubcategories(index)">{{subcategory.subcategoryName}} 
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#chipDelete"></use>
                                                    </svg>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div class="action-area">
                                        <button class="btn btn-block btn-primary" type="button" @click="submitCategory()" id="submitCategory">
                                            Submit product category
                                            <div class="loader-action"><span class="loader"></span></div>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="industry-layout" v-show="!industry.length && !pageLoader && !isNetworkError">
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
                        <BOTTOMNAV />
                        <Nuxt />
                    </div>
            </div>
            <ADDCATEGORIESMODAL/>
            <Nuxt />
        </div>
    </div>
</template>

<script>
import TOPHEADER from '~/layouts/business/top-navigation.vue';
import SIDENAV from '~/layouts/business/side-bar.vue';
import BOTTOMNAV from '~/layouts/business/bottom-nav.vue';
import ADDCATEGORIESMODAL from'~/components/business/categories/addCategories.vue'
import PAGELOADER from '~/components/loader/loader.vue';
import { GET_ALL_CATEGORIES, CREATE_BUSINESS_CATEGORY } from '~/graphql/categories';
import { mapActions, mapGetters, mapMutations } from 'vuex';
export default {
    name: "ADDCATEGORIES",
    components: {
        TOPHEADER, SIDENAV, BOTTOMNAV, ADDCATEGORIESMODAL, PAGELOADER
    },
    data : function () {
        return {
            pageLoader: true,

            clickedCategory: 0,

            accessToken: "",
            businessId: "",
            // this holds all the category and corresponding subcategories
            allCategories: "",
            // list of subcategories under a selected categories
            subcategoriesUnderCategories: "",
            // This is the ID of the category selected by the  business owner
            selectedCategoryId: "",
            // This is the name of the category selected by the business owner
            selectedCategoryName: "",
            vendorSelectedSubcategories: "",

            isNetworkError: 0,

            industry: "",
            highLightFashionIndustry: "",
            highLightBeautyIndustry: "",

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
        returnVendorSelectedSubcategories: function () {
            return this.vendorSelectedSubcategories
        }
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
        SetIndustry: function (industry) {
            this.industry = industry
            this.selectedCategoryId = ""
            this.subcategoriesUnderCategories = ""
            this.vendorSelectedSubcategories = ""
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
            // reset subcategories choosen by vendor
            this.vendorSelectedSubcategories = "";
            if (selectedCategory.selectedIndex > -1) {
                let selectedIndex = e.target.options[e.target.options.selectedIndex];
                this.selectedCategoryId = selectedIndex.value;
                this.selectedCategoryName = selectedIndex.innerHTML
            }
        },
        addSelectedSubcategory: function (name, id) {
            let newData = {
                subcategoryName: name,
                subcategoryId: id
            }
            if (this.returnVendorSelectedSubcategories.length < 1) {
                this.vendorSelectedSubcategories = [];
                this.vendorSelectedSubcategories.push(newData)
            } else {
                let isExists = false
                for (const [index, x] of this.returnVendorSelectedSubcategories.entries()) {
                    if (id == x.subcategoryId) {
                        isExists = true;
                        break
                    }
                }
                if (isExists == false) {
                    this.vendorSelectedSubcategories.push(newData)
                }
            }
        },
        removeSubcategoryFromVendorSubcategories: function(index) {
            this.vendorSelectedSubcategories.splice(index, 1)
        },
        removeCategory: function () {
            this.vendorSelectedSubcategories = "";
        },
        submitCategory: async function () {
            let target = document.getElementById('submitCategory');
            let subcategoryArray = [];
            for (let x of this.returnVendorSelectedSubcategories) {
                subcategoryArray.push(x.subcategoryId)
            }
            if (subcategoryArray.length == 0) {
                this.$initiateNotification('error', "Category error", "kindly select a subcategory to continue");
                return
            }
			let variables = {
				businessId: this.businessId,
                categoryId: this.selectedCategoryId,
                subcategories: subcategoryArray
			}
			let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }
            
            target.disabled = true;

            let query = await this.$performGraphQlMutation(this.$apollo, CREATE_BUSINESS_CATEGORY, variables, context);

            target.disabled = false

            if (query.error) {
                this.$initiateNotification('error', "Network error", query.message)
                return
            }

            let result = query.result.data.CreateBusinessCategory;

            if (result.success == false) {
                this.$initiateNotification('error', "", result.message)
                return
            }

            this.$initiateNotification('success', "", result.message);
        }
    },
    watch: {
        selectedCategoryId: function () {
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
    created () {
        if (process.browser) {
            this.allCategories = "";
            this.GetBusinessDataFromStore()
            this.GetAllCategories();
        }
    },
    mounted() {
        this.pageLoader = false
    }
}
</script>
<style scoped>
    .mg-bottom-0 {
        margin-bottom: 0 !important;
    }
    .mg-bottom-24 {
        margin-bottom: 24px !important;
    }
    .d-flex-between-query {
        display: flex;
        justify-content: space-between;
    }
</style>