<template>
    <div class="business">
        <div class="body-container">
            <TOPHEADER />
            <nuxt/>
            <div class="content-container">
                <SIDENAV />
                <nuxt />
                    <div class="content-area">
                        <!-- pageLoader -->
                        <PAGELOADER v-if="pageLoader" />
                        <nuxt />

                        <div class="main-content">
                            <div class="page-header">
                                <h4>Product categories</h4>
                            </div>
                            
                            <!-- main content goes in here -->
                            <div class="accordion grey-bg-color border-radius-4" v-for="(item, key) in categoriesList" :key="item.categoryId">
                                <!-- header -->
                                <div class="accordion-header">
                                    <a href="#"> 
                                        <h4 @click="showSubcategoryPane(`${item.categoryName}${key}`, $event)">{{item.categoryName}}</h4>
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
                                            <a href="#" @click="hideCategory(item.itemId)" v-if="item.hide == 0">
                                                <svg>
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#visibilityOff"></use>
                                                </svg>
                                                <span>Hide category</span>
                                            </a>
                                            <!-- show category -->
                                            <a href="#" @click="hideCategory(item.itemId)" v-if="item.hide == 1">
                                                <svg>
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#visibilityOn"></use>
                                                </svg>
                                                <span>Show category</span>
                                            </a>
                                            <a href="#" @click="deleteCategory(item.categoryId)">
                                                <svg>
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#delete"></use>
                                                </svg>
                                                <span>Delete category</span>
                                            </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- end of header -->
                                <!-- beginning of subcategory list -->
                                <div class="accordion-content-container" v-bind:id="`${item.categoryName}${key}`" v-bind:class="{'showEffect': !key}">
                                    <div class="row">
                                        <!--  beginning for loop for subcategories -->
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4" v-for="(subcategory) in item.subcategory" :key="subcategory.subcategoryId">

                                                <div class="product-card">

                                                    <n-link v-bind:to="`/b/product/subcategory/${subcategory.subcategoryId}`" class="category-name-area">
                                                        
                                                        <h3>{{subcategory.subcategoryName}}</h3>

                                                        <div class="subcat-details" v-if="!subcategory.subcategoryProductCount">No item in this subcategory</div>

                                                        <div class="subcat-details" v-if="subcategory.subcategoryProductCount == 1">1 item in this subcategory</div>

                                                        <div class="subcat-details" v-if="subcategory.subcategoryProductCount > 1">{{subcategory.subcategoryProductCount}} items in this subcategory</div>

                                                    </n-link>

                                                    <!-- action area -->
                                                    <div class="subcat-action-area">
                                                        <n-link v-bind:to="`/b/product/add-product?sub=${subcategory.subcategoryId}&cat=${item.categoryId}`" v-if="!subcategory.subcategoryProductCount"  class="btn btn-white btn-small">Add item</n-link>

                                                        <!-- hide sub category -->
                                                        <button class="btn btn-light-grey btn-small" v-if="subcategory.hide == 0" @click="hideSubcategory(subcategory.itemId)">Hide</button>

                                                        <!-- shoe subcategory -->
                                                        <button class="btn btn-light-grey btn-small" v-if="subcategory.hide == 1" @click="showSubcategory(subcategory.itemId)">Show</button>
                                                        <button class="btn btn-light-grey btn-small" >Remove</button>
                                                        
                                                    </div>

                                                </div>
                                            </div>
                                        <!--  end for loop for subcategories -->
                                    </div>
                                </div>
                                <!-- end of subcategory list -->
                            </div>

                            <div v-if="!categoryListCount && !isLoading">
                                <div class="no-account-category width-100">
                                    <!-- when no category has been added to the account -->
                                    <h2>No category has been added to your store</h2>
                                    <p>Upload a product or add your business category</p>
                                    <div class="d-flex">
                                        <n-link to="/b/product/add-product" class="btn btn-primary btn-md">Upload a product</n-link>
                                        <n-link to="/b/product/add-product" class="btn btn-white btn-md">Add a category</n-link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <BOTTOMNAV />
                        <nuxt/>
                    </div>
            </div>
            <div class="filter-btn-container"  v-if="categoryListCount && isLoading">
                <nuxt-link to="/b/categories/add-categories" class="close-modal-btn btn-icon btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <use xlink:href="~/assets/business/image/all-svg.svg#plusSign"></use>
                </svg>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>

import TOPHEADER from '~/layouts/business/top-navigation.vue';
import SIDENAV from '~/layouts/business/side-bar.vue';
import BOTTOMNAV from '~/layouts/business/bottom-nav.vue';
import PAGELOADER from '~/components/loader/loader.vue'
import { GET_BUSINESS_CATEGORIES_WITH_SUBCATEGORIES } from '~/graphql/business';
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
            isLoading: true
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
        showCategory: function () {

        },
        hideCategory: function () {

        },
        hideSubcategory: function () {

        },
        showSubcategory: function () {

        },
        showSubcategoryPane: function (element, e) {
            e.preventDefault();
            let getElement = document.getElementById(element);
            getElement.classList.toggle(`showEffect`);
        }
    },
    computed: {
        businessCategories: function () {
            return this.categoriesList
        }
    },
    async mounted () {    
        this.pageLoader = false;
    }
}
</script>