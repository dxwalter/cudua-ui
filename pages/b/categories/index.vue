<template>
    <div class="business" :key="componentKey">
        <div class="body-container">
            <TOPHEADER />
            <nuxt/>
            <div class="content-container">
                <SIDENAV />
                <nuxt />
                    <div class="content-area">
                        <!-- pageLoader -->
                        <PAGELOADER v-show="pageLoader" />
                        <nuxt />

                        <div class="main-content">

                            <div class="page-header with-action">
                                <h4>Product category</h4>
                                <div class="business-product-search-action" id="" @click="showSearchBar()" v-show="categoryListCount">
                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <use xlink:href="~/assets/business/image/all-svg.svg#searchGlass"></use>
                                    </svg>
                                    <span>Search</span>
                                </div>
                                <!-- If owner has not uploaded any product, this search box should be hidden because they have nothing to search -->
                                <div class="search-area" id="productSearchArea" v-show="categoryListCount">
                                    <input type="text" name="" class="search-form grey-bg-color" placeholder="Search for a category" id="productSearchInput" v-model="categorySearchString">
                                    <button id="tabLink" class="close-component-search">
                                        <input type="checkbox" class="dropdownCheckBox" @click="hideSearchBar()">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                            <use xlink:href="~/assets/customer/image/all-svg.svg#times"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>



                            
                            <!-- main content goes in here -->
                            <!-- this is for category search -->


                            <div v-show="categorySearchString.length > 2">
                                <div v-show="categorySearchResultCount == 0" class="alert alert-light">
                                    No category result was found for <span class="indicator-area">{{categorySearchString}}</span>
                                </div>
                                <div class="accordion grey-bg-color border-radius-4" v-for="(item, key) in returnSearchResult" :key="item.categoryId" :id="`categoryHeader${item.categoryId}`">
                                    <!-- header -->
                                    <div class="accordion-header">
                                        <a href="#" class="d-flex flex-between"> 
                                            <input type="checkbox" class="dropdownCheckBox" 
                                            @click="showSubcategoryPane(`${item.itemId}${key}`, $event)">

                                            <h4>{{item.categoryName}}</h4>

                                            <div class="chip small-chip" v-show="item.hide" :id="`hiddenCategory${item.categoryId}`">Hidden</div>

                                            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.05 13.616" 
                                            v-bind:class="{'transform-svg': !key}" v-bind:id="`svg${item.itemId}${key}`">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                                            </svg> -->
                                            
                                        </a>
                                        <div class="accordion-btn-container">
                                            <div class="dropdown-area">
                                                <button class="btn-ellipsis btn-checkbox">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="16" viewBox="0 0 4 16">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#verticalElipsis"></use>
                                                    </svg>
                                                </button>
                                                <input type="checkbox" class="dropdownCheckBox">
                                                <div class="dropdown-container">
                                                    <!-- hide category -->
                                                    <a href="#" @click="hideCategory(item.categoryId, $event)" v-show="!item.hide" :id="`hideCategoryAction${item.categoryId}`">
                                                        <span>Hide category</span>
                                                        <div class="loader-action"><span class="loader"></span></div>
                                                    </a>
                                                    <!-- show category -->
                                                    <a href="#" @click="showCategory(item.categoryId, $event)" v-show="item.hide" :id="`showCategoryAction${item.categoryId}`">
                                                        <span>Show category</span>
                                                        <div class="loader-action"><span class="loader"></span></div>
                                                    </a>
                                                    <a href="#" @click="deleteCategory(item.categoryId, item.categoryName, $event)">
                                                        <span>Delete category</span>
                                                        <div class="loader-action"><span class="loader"></span></div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of header -->
                                    <!-- beginning of subcategory list -->
                                    <div class="accordion-content-container" v-bind:id="`${item.itemId}${key}`">
                                        <div class="row">
                                            <!--  beginning for loop for subcategories -->
                                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4" v-for="(subcategory) in item.subcategory" :key="subcategory.subcategoryId" :id="`subcategoryHeader${subcategory.subcategoryId}`">

                                                    <div class="product-card">

                                                        <n-link v-bind:to="`/b/product/subcategory/${subcategory.subcategoryId}`" class="category-name-area">
                                                            
                                                            <div class="visibility-status" 
                                                            v-bind:class="{'display-none': !subcategory.hide}"
                                                            v-bind:id="`tag${subcategory.itemId}`"
                                                            >Hidden</div>

                                                            <h3>{{subcategory.subcategoryName}}</h3>

                                                            <div class="subcat-details" v-show="!subcategory.subcategoryProductCount">No product in this subcategory</div>

                                                            <div class="subcat-details" v-show="subcategory.subcategoryProductCount == 1">1 product in this subcategory</div>

                                                            <div class="subcat-details" v-show="subcategory.subcategoryProductCount > 1">{{subcategory.subcategoryProductCount}} products in this subcategory</div>

                                                        </n-link>

                                                        <!-- action area -->
                                                        <div class="subcat-action-area">
                                                            <n-link v-bind:to="`/b/product/add-product?sub=${subcategory.subcategoryId}&cat=${item.categoryId}`"  class="btn btn-white btn-small">Add product</n-link>
                                                            <!-- hide sub category -->
                                                            <button class="btn btn-light-grey btn-small" 
                                                                v-bind:class="{'display-none': subcategory.hide}" 
                                                                @click="hideSubcategory(subcategory.itemId, subcategory.subcategoryId, item.categoryId, $event)" 
                                                                v-bind:id="`hide${subcategory.itemId}`"
                                                            >
                                                                Hide
                                                                <div class="loader-action"><span class="loader"></span></div>    
                                                            </button>

                                                            <!-- show subcategory -->
                                                            <button class="btn btn-light-grey btn-small" 
                                                                v-bind:class="{'display-none': !subcategory.hide}" 
                                                                @click="showSubcategory(subcategory.itemId, subcategory.subcategoryId, item.categoryId, $event)" 
                                                                v-bind:id="`show${subcategory.itemId}`"
                                                            >
                                                                Show
                                                                <div class="loader-action"><span class="loader"></span></div>   
                                                            </button>

                                                            <button class="btn btn-light-grey btn-small" @click="DeleteSubCategory(subcategory.subcategoryId, subcategory.subcategoryName, $event)">
                                                                Delete
                                                            </button>
                                                            
                                                        </div>

                                                    </div>
                                                </div>
                                            <!--  end for loop for subcategories -->
                                        </div>
                                    </div>
                                    <!-- end of subcategory list -->
                                </div>
                            </div>

                            <div v-show="categorySearchString.length <= 2">
                                <div class="accordion grey-bg-color border-radius-4" v-for="(item, key) in categoriesList" :key="item.categoryId" :id="`categoryHeader${item.categoryId}`">
                                    <!-- header -->
                                    <div class="accordion-header">
                                        <a href="#" class="d-flex flex-between"> 
                                            <input type="checkbox" class="dropdownCheckBox" 
                                            @click="showSubcategoryPane(`${item.itemId}${key}`, $event)">

                                            <h4>{{item.categoryName}}</h4>

                                            <div class="chip small-chip" v-show="item.hide" :id="`hiddenCategory${item.categoryId}`">Hidden</div>

                                            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.05 13.616" 
                                            v-bind:class="{'transform-svg': !key}" v-bind:id="`svg${item.itemId}${key}`">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                                            </svg> -->
                                            
                                        </a>
                                        <div class="accordion-btn-container">
                                            <div class="dropdown-area">
                                                <button class="btn-ellipsis btn-checkbox">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="16" viewBox="0 0 4 16">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#verticalElipsis"></use>
                                                    </svg>
                                                </button>
                                                <input type="checkbox" class="dropdownCheckBox">
                                                <div class="dropdown-container">
                                                    <!-- hide category -->
                                                    <a href="#" @click="hideCategory(item.categoryId, $event)" v-show="!item.hide" :id="`hideCategoryAction${item.categoryId}`">
                                                        <span>Hide category</span>
                                                        <div class="loader-action"><span class="loader"></span></div>
                                                    </a>
                                                    <!-- show category -->
                                                    <a href="#" @click="showCategory(item.categoryId, $event)" v-show="item.hide" :id="`showCategoryAction${item.categoryId}`">
                                                        <span>Show category</span>
                                                        <div class="loader-action"><span class="loader"></span></div>
                                                    </a>
                                                    <a href="#" @click="deleteCategory(item.categoryId, item.categoryName, $event)">
                                                        <span>Delete category</span>
                                                        <div class="loader-action"><span class="loader"></span></div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of header -->
                                    <!-- beginning of subcategory list -->
                                    <div class="accordion-content-container" v-bind:id="`${item.itemId}${key}`" v-bind:class="{'showEffect': !key}">
                                        <div class="row">
                                            <!--  beginning for loop for subcategories -->
                                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4" v-for="(subcategory) in item.subcategory" :key="subcategory.subcategoryId" :id="`subcategoryHeader${subcategory.subcategoryId}`">

                                                    <div class="product-card">

                                                        <n-link v-bind:to="`/b/product/subcategory/${subcategory.subcategoryId}`" class="category-name-area">
                                                            
                                                            <div class="visibility-status" 
                                                            v-bind:class="{'display-none': !subcategory.hide}"
                                                            v-bind:id="`tag${subcategory.itemId}`"
                                                            >Hidden</div>

                                                            <h3>{{subcategory.subcategoryName}}</h3>

                                                            <div class="subcat-details" v-show="!subcategory.subcategoryProductCount">No product in this subcategory</div>

                                                            <div class="subcat-details" v-show="subcategory.subcategoryProductCount == 1">1 product in this subcategory</div>

                                                            <div class="subcat-details" v-show="subcategory.subcategoryProductCount > 1">{{subcategory.subcategoryProductCount}} products in this subcategory</div>

                                                        </n-link>

                                                        <!-- action area -->
                                                        <div class="subcat-action-area">
                                                            <n-link v-bind:to="`/b/product/add-product?sub=${subcategory.subcategoryId}&cat=${item.categoryId}`"  class="btn btn-white btn-small">Add product</n-link>
                                                            <!-- hide sub category -->
                                                            <button class="btn btn-light-grey btn-small" 
                                                                v-bind:class="{'display-none': subcategory.hide}" 
                                                                @click="hideSubcategory(subcategory.itemId, subcategory.subcategoryId, item.categoryId, $event)" 
                                                                v-bind:id="`hide${subcategory.itemId}`"
                                                            >
                                                                Hide
                                                                <div class="loader-action"><span class="loader"></span></div>    
                                                            </button>

                                                            <!-- show subcategory -->
                                                            <button class="btn btn-light-grey btn-small" 
                                                                v-bind:class="{'display-none': !subcategory.hide}" 
                                                                @click="showSubcategory(subcategory.itemId, subcategory.subcategoryId, item.categoryId, $event)" 
                                                                v-bind:id="`show${subcategory.itemId}`"
                                                            >
                                                                Show
                                                                <div class="loader-action"><span class="loader"></span></div>   
                                                            </button>

                                                            <button class="btn btn-light-grey btn-small" @click="DeleteSubCategory(subcategory.subcategoryId, subcategory.subcategoryName, $event)">
                                                                Delete
                                                            </button>
                                                            
                                                        </div>

                                                    </div>
                                                </div>
                                            <!--  end for loop for subcategories -->
                                        </div>
                                    </div>
                                    <!-- end of subcategory list -->
                                </div>
                            </div>




                            <div v-show="!categoryListCount && !isLoading">
                                <div class="no-account-category width-100">
                                    <!-- when no category has been added to the account -->
                                    <h2>No category has been added to your store</h2>
                                    <p>Categorise the products in your store</p>
                                    <div class="d-flex">
                                        <n-link to="/b/categories/add-Categories" class="btn btn-white btn-lg">Add a category</n-link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <BOTTOMNAV />
                        <nuxt/>
                    </div>
            </div>
            <div class="filter-btn-container"  v-show="categoryListCount > 0">
                <nuxt-link to="/b/categories/add-categories" class="close-modal-btn btn-icon btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <use xlink:href="~/assets/business/image/all-svg.svg#plusSign"></use>
                </svg>
                </nuxt-link>
            </div>
        </div>


        <!-- delete category modal -->
        <div class="modal-container-2" id="confirmedOrderModal" v-show="categoryToDeleteId">
            <div class="modal-dialog-box success-order-modal-container">


                <div class="modal-content">
                    <div class="thumbs-up-container">
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <use xlink:href="~/assets/business/image/all-svg.svg#bigDelete"></use>
                        </svg>
                    </div>
                    <div class="success-order-text">
                        <p>Delete <span class="indicator-area">{{categoryTodeleteName}}</span> category</p>
                        <div class="price-info">When you delete this category, you will lose all the subcategories and products in it.</div>
                    </div>
                    <div class="mg-bottom-32">
                        <button class="btn btn-primary btn-block mg-bottom-8" @click="`${categoryToDeleteId = ''}`">Cancel action</button>
                        <button class="btn btn-white btn-block" id="continueToDelete" @click="continueToDeleteCategory($event)">Delete category
                            <div class="loader-action"><span class="loader"></span></div> 
                        </button>
                    </div>
                </div>

            </div>
        </div>
        <!--  delete category modal -->


        <!-- delete subcategory modal -->
        <div class="modal-container-2" id="confirmedOrderModal" v-show="subcategoryToDeleteId">
            <div class="modal-dialog-box success-order-modal-container">


                <div class="modal-content">
                    <div class="thumbs-up-container">
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <use xlink:href="~/assets/business/image/all-svg.svg#bigDelete"></use>
                        </svg>
                    </div>
                    <div class="success-order-text">
                        <p>Delete <span class="indicator-area">{{subcategoryToDeleteName}}</span> subcategory</p>
                        <div class="price-info">When you delete this subcategory, you will lose all the products in it.</div>
                    </div>
                    <div class="mg-bottom-32">
                        <button class="btn btn-primary btn-block mg-bottom-8" @click="`${subcategoryToDeleteId = ''}`">Cancel action</button>
                        <button class="btn btn-white btn-block" id="continueToDeleteSubcategory" @click="continueToDeleteSubcategory($event)">Delete subcategory
                            <div class="loader-action"><span class="loader"></span></div> 
                        </button>
                    </div>
                </div>

            </div>
        </div>
        <!--  delete category modal -->
    
    </div>
</template>

<script>

import TOPHEADER from '~/layouts/business/top-navigation.vue';
import SIDENAV from '~/layouts/business/side-bar.vue';
import BOTTOMNAV from '~/layouts/business/bottom-nav.vue';
import PAGELOADER from '~/components/loader/loader.vue'
import { 
    GET_BUSINESS_CATEGORIES_WITH_SUBCATEGORIES, 
    HIDE_BUSINESS_SUBCATEGORY, 
    SHOW_BUSINESS_SUBCATEGORY,
    DELETE_BUSINESS_SUBCATEGORY,
    HIDE_CATEGORY,
    SHOW_CATEGORY,
    DELETE_CATEGORY   
} from '~/graphql/business';
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
    name: "BUSINESSCATEGORIES",
    components: {
        TOPHEADER, SIDENAV, BOTTOMNAV, PAGELOADER
    },
    data: function() {
        return {
            pageLoader: true,
            businessId: "",
            accessToken: "",
            categoriesList: "",
            categoryListCount: 0,
            isLoading: true,

            // delete category
            categoryToDeleteId: "",
            categoryTodeleteName: "",

            // delete subcategory id
            subcategoryToDeleteId: "",
            subcategoryToDeleteName: "",

            // category search
            categorySearchString: "",
            categorySearchResult: "",
            categorySearchResultCount: "",
            
            //re-render component
            componentKey: 0 
        }
    },
    async created() {
        if (process.browser) {
            this.initComponentData();
            await this.getBusinessCategoryList()
        }
    },
    methods: {
        ...mapGetters({
            'GetBusinessData': 'business/GetBusinessDetails',
            'GetCustomerData': 'customer/GetCustomerDetails'
		}),
        initComponentData: function () {
            let businessData = this.GetBusinessData();
            let customerData = this.GetCustomerData();

            this.businessId = businessData.businessId;
            this.accessToken = customerData.userToken;
        },
        getBusinessCategoryList: async function () {
            try {
                let query = await this.$apollo.query({
                    query: GET_BUSINESS_CATEGORIES_WITH_SUBCATEGORIES,
                    variables: {
                        businessId: this.businessId
                    },
                    context: {
                        headers: {
                            'accessToken': this.accessToken
                        }
                    }
                });

                if (query.success == false) {
                    this.categoryListCount = 0;
                    this.$initiateNotification('error', 'Failed request', "A network error occurred");
                    return
                }

                let result = query.data.GetBusinessCategoriesWithSubcategory.businessCategory;
                
                // the business does not have any category
                if (result != null) {
                    this.categoryListCount = result.length;
                    this.categoriesList = result
                }
                
                // end of http request
                this.isLoading = false
                            
            } catch (error) {
                this.categoryListCount = 0;
                this.$initiateNotification('error', 'Failed request', "A network error occurred");
            }

        },
        // show category
        showCategory: async function (categoryId, e) {

            e.preventDefault();

            let variables = {
                categoryId: categoryId,
                businessId: this.businessId
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }
            
            let target = document.getElementById('showCategoryAction'+categoryId);

            target.classList.add("show-loader")

            let request = await this.$performGraphQlMutation(this.$apollo, SHOW_CATEGORY, variables, context);

            target.disabled = false;

			if (request.error == true) {
                this.$initiateNotification('error', 'Failed request', request.message);
                return
            }
            
            target.classList.remove("show-loader");

            let result = request.result.data.ShowSelectedBusinessCategory;

            if (result.success) {
                this.$initiateNotification('success', 'Category visible', result.message);

                // hide show category action
                target.style.display = "none";

                // hidden label
                document.getElementById('hiddenCategory'+categoryId).style.display = "none"

                // show hide category action
                document.getElementById('hideCategoryAction'+categoryId).style.display = "block"

                return
            }

            this.$initiateNotification('error', 'Failed request', result.message);

            
        },

        // hide category
        hideCategory: async function (categoryId, e) {

            
            e.preventDefault();

            let variables = {
                categoryId: categoryId,
                businessId: this.businessId
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }
            
            let target = document.getElementById('hideCategoryAction'+categoryId);

            target.classList.add("show-loader")

            let request = await this.$performGraphQlMutation(this.$apollo, HIDE_CATEGORY, variables, context);

            target.disabled = false;

			if (request.error == true) {
                this.$initiateNotification('error', 'Failed request', request.message);
                return
            }
            
            target.classList.remove("show-loader")

            let result = request.result.data.HideSelectedBusinessCategory;

            if (result.success) {

                this.$initiateNotification('success', 'Category Hidden', result.message);

                // hide category action
                target.style.display = "none"

                // hidden label - make it visible
                document.getElementById('hiddenCategory'+categoryId).style.display = "block"

                // show category action
                document.getElementById('showCategoryAction'+categoryId).style.display = "block"
                
                return;
            }


            this.$initiateNotification('error', 'Failed request', result.message);



        },
        // hide subcategory
        hideSubcategory: async function (itemId, subcategoryId, categoryId, e) {
            e.preventDefault()
            let target = document.getElementById('hide'+itemId);
            target.disabled = true

            let variables = { 
                subcategoryId: subcategoryId,
                categoryId: categoryId,
                businessId: this.businessId
            }
            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
			}
			
			let request = await this.$performGraphQlMutation(this.$apollo, HIDE_BUSINESS_SUBCATEGORY, variables, context);

			if (request.error == true) {
				target.disabled = false;
				this.$initiateNotification('error', 'Failed request', request.message);
			} else {

                let result = request.result.data.HideSelectedBusinessSubcategory;

                if (result.success) {
                    this.$initiateNotification('success', 'Subcategory hidden', result.message);
                    target.disabled = false;
                    target.classList.add('display-none');

					let showButton = document.getElementById('show'+itemId);
					let hiddenTag = document.getElementById('tag'+itemId);

					showButton.classList.remove('display-none');
					hiddenTag.classList.remove('display-none');
					return
				} 
				target.disabled = false;
				this.$initiateNotification('error', 'Failed request', result.message);
			}
    

        },
        // show subcategory
        showSubcategory: async function (itemId, subcategoryId, categoryId, e) {
            e.preventDefault()
            let target = document.getElementById('show'+itemId);
			target.disabled = true
			
            let variables = { 
                subcategoryId: subcategoryId,
                categoryId: categoryId,
                businessId: this.businessId
            }
            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
			}
			
			let request = await this.$performGraphQlMutation(this.$apollo, SHOW_BUSINESS_SUBCATEGORY, variables, context);

            target.disabled = false;

			if (request.error == true) {
                this.$initiateNotification('error', 'Failed request', request.message);
                return
			}

            let result = request.result.data.ShowSelectedBusinessSubcategory;
                
            if (result.success) {
                this.$initiateNotification('success', 'Subcategory visible', result.message);
                target.disabled = false;
                target.classList.add('display-none');

                let showButton = document.getElementById('hide'+itemId);
                let hiddenTag = document.getElementById('tag'+itemId);

                showButton.classList.remove('display-none');
                hiddenTag.classList.add('display-none');

                return
            } 
                
            target.disabled = false;
            this.$initiateNotification('error', 'Failed request', result.message);
			
        },
        showSubcategoryPane: function (element, e) {
            e.preventDefault();
            let getElement = document.getElementById(element);
            // let svgElement = document.getElementById("svg"+element);
            getElement.classList.toggle(`showEffect`);
            // svgElement.classList.toggle(`transform-svg`);
        },
        deleteCategory: async function (categoryId, categoryName, e) {
            e.preventDefault()
            this.categoryTodeleteName = categoryName
            this.categoryToDeleteId = categoryId
        },
        continueToDeleteCategory: async function  (e) {
            e.preventDefault();

            let target = document.getElementById('continueToDelete');

            let variables = {
                businessId: this.businessId,
                categoryId: this.categoryToDeleteId
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }
            
            target.disabled = true;

            let request = await this.$performGraphQlMutation(this.$apollo, DELETE_CATEGORY, variables, context);

            target.disabled = false

            if (request.error) {
                this.categoryToDeleteId = "";
                this.$initiateNotification('error', 'Failed request', request.message);
                return
            }


            let result = request.result.data.DeleteSelectedCategory;

            if (!result.success) {
                this.$initiateNotification('error', 'Failed request', result.message);
                return
            }

            document.getElementById("categoryHeader"+this.categoryToDeleteId).classList.add('display-none');

            this.categoryTodeleteName = "";
            this.categoryToDeleteId = "";

            this.$initiateNotification('success', 'Category deleted', result.message);

            return


        },
        DeleteSubCategory: function (subcategoryId, subcategoryName, e) {
            this.subcategoryToDeleteName = subcategoryName;
            this.subcategoryToDeleteId = subcategoryId;

        },
        continueToDeleteSubcategory: async function (e) {

            e.preventDefault();

            let target = document.getElementById('continueToDeleteSubcategory');

            let variables = {
                businessId: this.businessId,
                subcategoryId: this.subcategoryToDeleteId
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }
            
            target.disabled = true;

            let request = await this.$performGraphQlMutation(this.$apollo, DELETE_BUSINESS_SUBCATEGORY, variables, context);

            target.disabled = false

            if (request.error) {
                this.$initiateNotification('error', 'Failed request', request.message);
                return
            }


            let result = request.result.data.DeleteSelectedSubcategory;

            if (!result.success) {
                this.subcategoryToDeleteId = ""
                this.$initiateNotification('error', 'Failed request', result.message);
                return
            }


            document.getElementById("subcategoryHeader"+this.subcategoryToDeleteId).classList.add('display-none');

            this.subcategoryToDeleteId = "";

            this.subcategoryToDeleteName = "";

            this.$initiateNotification('success', 'Subcategory deleted', result.message);

            return
        },
        showSearchBar: function(){
            // show product search area
            let target = document.getElementById("productSearchArea");
            target.style.display = "flex";

            // focus form
            document.getElementById('productSearchInput').focus()
        },
        hideSearchBar: function () {
            // show product search area
            let target = document.getElementById("productSearchArea");
            target.style.display = "none";

            // focus form
            document.getElementById('productSearchInput').blur() 

            this.categorySearchString = ''
        },
        searchBusinessCategories: function () {
            if (this.categorySearchString.length < 3) return
            
            let searchResultArray = [];

            for (let x of this.businessCategories) {
                let catName = x.categoryName.toLowerCase();

                if (catName.search(this.categorySearchString.toLowerCase()) > -1) {
                    searchResultArray.push(x)
                }
            }

            this.categorySearchResultCount = searchResultArray.length;
            this.categorySearchResult = searchResultArray
        },
        reRenderComponent: function () {
            this.$nextTick(() => {
                this.componentKey += 1
            })
        }
    },
    computed: {
        businessCategories: function () {
            return this.categoriesList
        },
        returnSearchResult: function () {
            return this.categorySearchResult
        }
    },
    watch: {
        categorySearchString: function () {
            this.searchBusinessCategories()
        }
    },
    async mounted () {    
        this.pageLoader = false;
        this.reRenderComponent()
    }
}
</script>

<style scoped>
    .small-chip {
        padding: 7px 14px;
        font-size: 12px;
        background-color: white;
    }
    .dropdown-container a {
        justify-content: end;
    }
    .dropdown-container {
        top: 45px;
        right: 16px;
        z-index: 999;
    }
    .accordion-btn-container {
        padding: 15px 5px 16px 16px;
    }
    .accordion-header {
        padding-right: 0;
    }
    .show-loader {
        overflow: hidden;
    }
    .show-loader .loader-action {
        display: flex;
    }
    .indicator-area {
        color: rgba(238, 100, 37, 1);
        font-weight: 500;
        text-transform: uppercase;
    }
</style>