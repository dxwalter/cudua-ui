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
                                        <!-- <label for="businessCategory" class="form-label">Select a category</label> -->
                                        <select class="input-form" id="selectCategoryDropDown"  @change="onSelectCategory($event)">
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


                                    <div class="form-control">
                                        <label for="businessCategory" class="form-label">I cannot find my product's category/subcategory</label>
                                        <div class="create-footer-options">
                                            <button type="button" class="btn btn-white btn-small" data-trigger="modal" data-target="createCategoryModal">Create category/subcategories</button>
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
        }
    },
    computed: {
        returnCategories: function () {
            return this.allCategories;
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
            for (let x of this.returnCategories) {
                if (x.categoryId == catId) {
                    this.subcategoriesUnderCategories = '';
                    this.subcategoriesUnderCategories = x.subcategory
                    break
                }
            }
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