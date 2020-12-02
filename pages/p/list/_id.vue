<template>
    <div class="customer">
        <div class="body-container grey-bg-color">

        <!-- beginning of navigation container -->
            <div class="nav-container">
                <MOBILENAVIGATION></MOBILENAVIGATION>
                <Nuxt />
                <MOBILESEARCH></MOBILESEARCH>
                <Nuxt />
                <DESKTOPNAVGATION></DESKTOPNAVGATION>
                <Nuxt />
            </div>

            <!-- pageLoader -->
            <PAGELOADER v-show="pageLoader"></PAGELOADER>
            <Nuxt />


                        <!-- begining of content container -->
                        <div class="content-container-second business-page-container" v-show="!pageLoader">

                            <!-- mobile category navigation -->
                            <div class="mobile-shop-cat-listing option-container" v-show="!pageError && !pageLoader">
                                <div class="category-action-area">
                                    <div class="category-area">
                                        <select class="white-bg-color input-form" id="categoryDropDown" @change="setCategoryValue($event)"></select>
                                    </div>
                                    <div class="icon-action">

                                            <button class="btn btn-icon btn-small make-list-icon layout-button" @click="changeIndustry()" id="industryIcon" :data-industry="`${currentIndustry}`">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-v-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="fashion-icon">
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#industryFashion"></use>
                                                </svg>
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-v-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="beauty-icon">
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#industryBeauty"></use>
                                                </svg>
                                            </button>
                                        
                                            <button class="btn btn-icon btn-small make-list-icon layout-button" @click="openLocationFilter()" id="toggleFilterLayout" data-filter="close">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-v-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="filter-icon">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#filter"></use>
                                                </svg>
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-v-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" class="close-icon">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#times"></use>
                                                </svg>
                                            </button>
                                    </div>
                                </div>
                                <div class="top-cat-result-filter" id="filterActionArea">
                                    <label class="form-label mg-bottom-8">Filter by location</label>
                                    <div class="input-join">
                                        <div class="position-relative">
                                            <input type="text" name="" id="communityName" placeholder="Type community" class="input-form" v-model="communityName"> 
                                            <div class="recent-search-list-container" v-show="communityName.length > 1" id="communitySearchSuggestion">

                                                <a href="#" v-show="!isCommunitySearch && communityName.length > 1">
                                                    <div class="info-area">
                                                        <span>Searching for</span> {{communityName}}
                                                    </div>
                                                    <div class="loader-container">
                                                        <div class="loader-action"><span class="loader"></span></div>
                                                    </div>
                                                </a>

                                                <a href="#" v-show="noCommunitySuggestionResult &&  isCommunitySearch && communityName.length > 1">
                                                    <div class="info-area">
                                                        <span>No result was found for</span> {{communityName}}
                                                    </div>
                                                </a>

                                                <div v-for="(suggestion, index) in returnCommunitySuggestion" :key="index">
                                                    <div @click="setCommunityID(suggestion.communityId, suggestion.communityName, 'communitySearchSuggestion', $event)" class="action-content">
                                                        {{suggestion.communityName}} <span>- {{suggestion.stateName}}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button id="" @click="applyFilterSearch()" class="btn btn-primary">Search</button>

                                    </div>
                                </div>
                            </div>
                            <!-- end of mobile category navigation -->

                            <!-- subcategory listing -->
                            <div class="accordion-subcat-area" v-show="!pageError && !pageLoader">
                               <div id="subcatChip" @click="setSubcategoryDetails(subcategory.subcategoryId, subcategory.subcategoryName, $event)" class="chip" v-for="(subcategory, index) in returnSubcategoryList" :key="index" :data-subcategory="subcategory.subcategoryId">{{subcategory.subcategoryName}}</div>
                           </div>
                            
                            <div class="product-area"  v-show="!pageError">

                                <div class="business-product-container">
                                    <div class="business-product-listing">

                                        <div class="section-header d-flex-between business-page-action">
                                            
                                            <div>
                                                <h4>{{productHeader}}</h4>
                                                <label class="form-label mg-bottom-8" v-show="filterSearch == true">Filtered by location: {{communityName}}</label>
                                            </div>
                                            
                                            <div class="d-flex">
                                                <div class="product-layout-container">
                                                    <button class="btn btn-icon btn-small make-list-icon layout-button" @click="toggleProductListLayout()" id="toggleProductListLayout" data-layout="grid">
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-v-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="list-icon">
                                                            <use xlink:href="~/assets/customer/image/all-svg.svg#verticalEllipsis"></use>
                                                        </svg>
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-v-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="grid-icon">
                                                            <use xlink:href="~/assets/customer/image/all-svg.svg#gridLayout"></use>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- business product listing -->
                                        <div class="content-loading" v-show="isLoading">
                                            <div class="loader-action"><span class="loader"></span></div>    
                                        </div>

                                        <div  v-show="!isLoading">


                                            <div class="row default-grid" id="productListingArea">  
                                                <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3" v-for="(x, index) in returnProductList" :key="index"  v-show="!x.hide">
                                                    <div class="product-card">
                                                        <div class="product-image-container">
                                                            <VueSlickCarousel :arrows="true">
                                                                <n-link :to="`/p/${x.productId}`" class="product-card-image" v-for="(images, imageIndex) in x.imageArray" :key="imageIndex" :id="`imageContainer${x.productId}`" data-current-image="1">
                                                                    <img class="product-image-item" :src="formatProductImageUrl(images, x.businessId)"  :alt="`${x.productName}'s image`" v-bind:class="[imageIndex ? '' : 'is-active']" v-lazy-load>
                                                                </n-link>
                                                            </VueSlickCarousel>
                                                        </div>
                                                        
                                                        <n-link :to="`/p/${x.productId}`" class="product-card-details display-block">
                                                            <div class="product-name-tweak">
                                                                {{x.productName}}
                                                            </div>
                                                            <div class="product-price">₦ {{x.price}}</div>
                                                        </n-link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="load-more-action move-center" v-show="loadMoreContent && productLists.length > 0">
                                                <button class="btn btn-white" @click="loadMoreProducts(page = page + 1, $event)" id="loadMoreProducts">
                                                    Load more
                                                    <div class="loader-action"><span class="loader"></span></div>    
                                                </button>
                                            </div>
                                        </div>
                                        <!-- end of business product listing -->

                                        <!-- when no product is found, show this -->
                                        <div class="link-error-area" v-show="noProduct == 1">
                                            <img src="~/static/images/product.svg" alt="" class="mg-bottom-32">
                                            <div class="error-cause" v-html="reasonForError">{{reasonForError}}</div>
                                        </div>
                                        <!-- end of error area -->

                                    </div>

                                </div>

                            </div>

                            <!-- when an error occurs, show this -->
                            <div class="link-error-area" v-show="pageError">
                                <img src="~/static/images/server-error.svg" alt="">
                                <div class="error-cause" v-html="reasonForError">{{reasonForError}}</div>
                                <div class="action-area">
                                    <n-link to="/" class="btn btn-primary">Home page</n-link>
                                </div>
                            </div>
                            <!-- end of error area -->

                            
                        </div>
                        <!-- end of content container -->


                        <!-- footer area -->
                        <div class="mobile-hide-nav-bottom-add">
                            <BOTTOMADS></BOTTOMADS>
                            <Nuxt />
                            <CUSTOMERFOOTER></CUSTOMERFOOTER>
                            <Nuxt />
                        </div>

                        <SCROLLTOTOP></SCROLLTOTOP>
                        <Nuxt />


        </div>
    </div>
</template>

<script>

import MOBILENAVIGATION from '~/layouts/customer/mobile-navigation.vue';
import MOBILESEARCH from '~/layouts/customer/mobile-search.vue';
import DESKTOPNAVGATION from '~/layouts/customer/desktop-navigation.vue'
import BOTTOMADS from '~/layouts/customer/buttom-ads.vue';
import CUSTOMERFOOTER from '~/layouts/customer/customer-footer.vue';

import PAGELOADER from '~/components/loader/loader.vue';



// carousel
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import SCROLLTOTOP from '~/plugins/scroll-to-top.client.vue'

import { mapActions, mapGetters } from 'vuex';

import { GET_ALL_CATEGORIES} from '~/graphql/categories';

import { GET_BUSINESS_DETAILS_BY_USERNAME } from '~/graphql/business'
import { 
    GET_PRODUCT_BY_BUSINESS_ID,
    GET_PRODUCT_BY_SUBCATEGORY,
    GET_PRODUCT_BY_CATEGORY,
    GET_ALL_PRODUCTS_IN_CATEGORY,
    GET_ALL_PRODUCTS_IN_SUBCATEGORY,
    GET_PRODUCTS_BY_CAT_AND_SUB_FILTER
} from '~/graphql/product'

import { FIND_COMMUNITY } from '~/graphql/location';

export default {
    name: "PRODUCTLISTING",
    components: {
        MOBILENAVIGATION, 
        MOBILESEARCH, 
        BOTTOMADS, 
        CUSTOMERFOOTER, 
        PAGELOADER,
        DESKTOPNAVGATION,
        VueSlickCarousel,
        SCROLLTOTOP
    },
    data: function() {
      return {
        anonymousId: "",
        pageLoader: 1,
        pageError: 0,
        reasonForError: "",
        
        productsType: "",
        productLists: [],
        productHeader: "All products",
        page: 1,
        loadMoreContent: false,

        // product retrieval details
        subcategoryId: "",
        subcategoryName: "",
        categoryId: "",
        categoryName: "",
        isLoading: false,

        accessToken: "",
        noProduct: 0,

        screenWidth: 0,
        contentHeight: "",

		fashionCategories: [],
        beautyCategories: [],

        subcategoryListing: [],
        
        // for product
        categoryId: "",
        dataType: "",

        currentIndustry: "",
        timeOut: null,

        // community search
        communityName: "",
        isCommunitySearch: 0,
        communitySuggestion: [],
        selectedCommunityId: "",
        noCommunitySuggestionResult: 0,

        // filter search
        filterSearch: false
      }
    },
    computed: {
        returnFashionCategoriesList () {
            return this.fashionCategories
        },
        returnBeautyCategoriesList () {
            return this.beautyCategories
        },
        returnSubcategoryList () {
            return this.subcategoryListing
        },
        returnProductList: function () {
            return this.productLists
        },
        returnCommunitySuggestion () {
            return this.communitySuggestion
        },
    },
    methods: {
        setCommunityID: function (communityId, communityName, suggestionBoxId, e) {
            e.preventDefault()
            document.getElementById(suggestionBoxId).style.display = 'none'
            this.communityName = communityName
            this.selectedCommunityId = communityId
            this.tapId = 1
        },
        toggleProductListLayout: function () {
            let targetContainer = document.getElementById('productListingArea')
            let actionButton = document.getElementById('toggleProductListLayout')

            let getLayoutType = actionButton.getAttribute('data-layout');

            if (getLayoutType == "grid") {
                targetContainer.classList.remove('default-grid');
                targetContainer.classList.add('make-layout-list');
                actionButton.setAttribute('data-layout', 'list');
            } else {
                targetContainer.classList.remove('make-layout-list');
                targetContainer.classList.add('default-grid');
                actionButton.setAttribute('data-layout', 'grid');
            }
        },
        openLocationFilter: function () {
            let targetContainer = document.getElementById('filterActionArea')
            let actionButton = document.getElementById('toggleFilterLayout')

            let getLayoutType = actionButton.getAttribute('data-filter');

            if (getLayoutType == "open") {
                targetContainer.classList.remove('showEffect');
                actionButton.setAttribute('data-filter', 'close');
            } else {
                targetContainer.classList.add('showEffect');
                actionButton.setAttribute('data-filter', 'open');
            }
        },
        formatProductImageUrl: function (imagePath, businessId) {
            return this.$formatProductImageUrl(businessId, imagePath, "medium")
        },
        resetGridLayout: async function () {
            
            if (process.browser) {
                let productListingArea = document.getElementById("productListingArea");
                if (productListingArea != null) {

                    let toggleAction = document.getElementById('toggleProductListLayout')

                    productListingArea.classList.remove('make-layout-list');
                    productListingArea.classList.add('default-grid');
                    toggleAction.setAttribute('data-layout', 'grid');
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
			
			let fashionCategoryListing = [];
			let beautyCategoryListing = [];
			
            for (const [index, category] of result.category.entries()) {
				
				if (category.industry === "Fashion") {
					
					fashionCategoryListing.push({
						categoryId: category.id,
						categoryName: category.categoryName,
						industry: category.industry,
                        icon: category.icon,
                        subcategory: []
                    });
                    
                    for (const [subcategoryIndex, subcategory] of category.subcategories.entries()) {
                        fashionCategoryListing[fashionCategoryListing.length - 1].subcategory.push({
                            subcategoryId: subcategory.subcategoryId,
                            subcategoryName: subcategory.subcategoryName
                        })
                    }

				} else if (category.industry === "Beauty") {

					beautyCategoryListing.push({
						categoryId: category.id,
						categoryName: category.categoryName,
						industry: category.industry,
						icon: category.icon,
                        subcategory: []
                    });
                    
                    for (const [subcategoryIndex, subcategory] of category.subcategories.entries()) {
                        beautyCategoryListing[beautyCategoryListing.length - 1].subcategory.push({
                            subcategoryId: subcategory.subcategoryId,
                            subcategoryName: subcategory.subcategoryName
                        })
                    }

				}
			}

			this.fashionCategories = fashionCategoryListing
			this.beautyCategories = beautyCategoryListing
			
        },
        setUrlData: function () {

            let dataId = this.$route.params.id
            let dataType = this.$route.query.type

            if (dataId == undefined || dataType == undefined) {
                this.pageError = 1;
                this.reasonForError = "An error occurred during your request.";
                return 
            }

            this.categoryId = dataId;
            this.dataType = dataType

        },
        setIndustry: function () {

            if (this.returnFashionCategoriesList.length > 0) {
                for (let categories of this.returnFashionCategoriesList) {
                    if (categories.categoryId == this.categoryId) {
                        this.currentIndustry = categories.industry
                        break;
                    }
                }
            }

            if (this.returnBeautyCategoriesList.length > 0) {
                for (let categories of this.returnBeautyCategoriesList) {
                    if (categories.categoryId == this.categoryId) {
                        this.currentIndustry = categories.industry
                        break;
                    }
                }
            }

        },
        clearTime: function () {
            clearTimeout(this.timeOut)
        },
        changeIndustry: function (url) {

            let target = document.getElementById('industryIcon');
            let industry = target.getAttribute('data-industry');

            let runningIndustry = industry == "Fashion" ? "Beauty" : "Fashion";

            target.setAttribute('data-industry', runningIndustry);

            this.currentIndustry = runningIndustry;

            this.$showToast(`Switched to ${runningIndustry}`, "info");

            this.setCategoryDropDown(false)

            this.scrollTop()
            
        },
        setCategoryValue: function (e) {

            this.productsType = "Category";

            let selectForm = e.target.options
            
            if (selectForm.selectedIndex < 0) { 
                this.pageError = 1;
                this.reasonForError = "An error occurred during your request.";
                return
            }
            
            let selectedIndex = e.target.options[e.target.options.selectedIndex];

            this.categoryId = selectedIndex.value;
            this.categoryName = selectedIndex.innerHTML

            this.scrollTop()

            this.getAllProductsInCategory();

            this.getSubcategory();

        },
        setCategoryDropDown: function (url) {

            let industryList = this.currentIndustry == "Fashion" ? this.returnFashionCategoriesList : this.returnBeautyCategoriesList

            if (industryList.length > 0) {

                let viewForm = document.getElementById('categoryDropDown');
                
                viewForm.innerHTML = "";

                industryList.forEach((element, index, array) => {

                    let categoryId = element.categoryId;
                    let categoryName = element.categoryName;
                    
                    let option = document.createElement("option");
                    option.innerHTML = categoryName;
                    option.value = categoryId;
                    viewForm.appendChild(option);

                    if (this.categoryId == categoryId) {
                        document.getElementById("categoryDropDown").selectedIndex = index
                        this.categoryId = viewForm.options[index].value
                        this.categoryName = viewForm.options[index].innerHTML;
                        this.getSubcategory()

                    }
                });


                this.productsType = "Category";

                if (url == false) {
                    document.getElementById("categoryDropDown").selectedIndex = 0
                    this.categoryId = viewForm.options[0].value
                    this.categoryName = viewForm.options[0].innerHTML;
                    this.getSubcategory()
                }

                this.scrollTop()

                this.getAllProductsInCategory()


            } else {
                this.pageError = 1;
                this.reasonForError = "An error occurred. We do not understand your request";
            }
        },
        getAllProductsInCategory: async function (page = 1) {

            this.resetGridLayout()

            this.filterSearch = false

            this.productHeader = `${this.categoryName} category`;
            
            this.page = page

            if (this.page == 1) this.isLoading = true

            let variables = {
                page: page,
                categoryId: this.categoryId
            }
            
            let request = await this.$performGraphQlQuery(this.$apollo, GET_ALL_PRODUCTS_IN_CATEGORY, variables, {});
            this.isLoading = false

            if (page == 1) this.productLists = []

            if (request.error) {
                this.reasonForError = request.message
                this.pageError = 1
                return
            }

            let result = request.result.data.GetAllProductsInCategory;

            if (result.success == false) {
                this.reasonForError = result.message
                this.pageError = 1
                return
            }

            if (result.products.length == 0 && page == 1) {
                this.productLists = []
                this.noProduct = 1
                this.reasonForError = `No product was found in <span class="indicator">${this.categoryName}</span> category.`
            } else {
                this.noProduct = 0
            }


            if (result.products.length == 12) {
                this.loadMoreContent = true
            } else {
                this.loadMoreContent = false
            }

          

            for (let x of result.products) {
                this.productLists.push({
                    productName: x.name,
                    productId: x.id,
                    price: this.$numberNotation(x.price),
                    businessId: x.businessId,
                    imageArray: x.images,
                })
            }

            

        },
        getProductsBySubcategory: async function (page = 1) {
            
            this.resetGridLayout()

            this.filterSearch = false

            this.page = page

            if (this.page == 1) this.isLoading = true

            let variables = {
                page: page,
                subcategoryId: this.subcategoryId
            }

            let request = await this.$performGraphQlQuery(this.$apollo, GET_ALL_PRODUCTS_IN_SUBCATEGORY, variables, {});
            this.isLoading = false

            if (page == 1) this.productLists = []

            if (request.error) {
                this.reasonForError = request.message
                this.pageError = 1
                return
            }

            let result = request.result.data.GetAllProductsInSubcategory;

            if (result.success == false) {
                this.reasonForError = result.message
                this.pageError = 1
                return
            }

            if (result.products.length == 0 && page == 1) {
                this.productLists = []
                this.noProduct = 1
                this.reasonForError = `No product was found in <span class="indicator">${this.subcategoryName}</span> subcategory.`
            } else {
                this.noProduct = 0
            }


            if (result.products.length == 12) {
                this.loadMoreContent = true
            } else {
                this.loadMoreContent = false
            }

          

            for (let x of result.products) {
                this.productLists.push({
                    productName: x.name,
                    productId: x.id,
                    price: this.$numberNotation(x.price),
                    businessId: x.businessId,
                    imageArray: x.images,
                })
            }

        },
        applyFilterSearch: async function (page = 1) {

            console.log(page)

            document.getElementById('communitySearchSuggestion').style.display = 'none'


            if (page == 1) this.openLocationFilter()

            let communityIdentifier = this.selectedCommunityId.length == 0 ? this.communityName : this.selectedCommunityId

            if (communityIdentifier.length == 0) return

            this.filterSearch = true
            // this.selectedCommunityId = ""

            this.resetGridLayout()

            this.page = page

            if (this.page == 1) this.isLoading = true

            let variables = {
                page: page,
                communityId: communityIdentifier,
                type: this.productsType.toLowerCase(),
                typeId: this.productsType.toLowerCase() == 'category' ? this.categoryId : this.subcategoryId
            }

            let request = await this.$performGraphQlQuery(this.$apollo, GET_PRODUCTS_BY_CAT_AND_SUB_FILTER, variables, {});
            this.isLoading = false

            if (page == 1) this.productLists = []

            if (request.error) {
                this.reasonForError = request.message
                this.pageError = 1
                return
            }

            let result = request.result.data.FilterCategorySearch;

            if (result.success == false) {
                this.reasonForError = result.message
                this.productLists = []
                this.noProduct = 1
                return
            }

            if (result.products.length == 0 && page == 1) {
                this.productLists = []
                this.noProduct = 1
                this.reasonForError = `No product was found in this filter.`
            } else {
                this.noProduct = 0
            }


            if (result.products.length == 12) {
                this.loadMoreContent = true
            } else {
                this.loadMoreContent = false
            }

          

            for (let x of result.products) {
                this.productLists.push({
                    productName: x.name,
                    productId: x.id,
                    price: this.$numberNotation(x.price),
                    businessId: x.businessId,
                    imageArray: x.images,
                })
            }
        },
        loadMoreProducts: async function (page, e) {

            this.page = page
            let target = document.getElementById('loadMoreProducts');
            target.disabled = true

            if (this.filterSearch) await this.applyFilterSearch(page)
            if (this.productsType.toLowerCase() == "category") await this.getAllProductsInCategory(page);
            if (this.productsType.toLowerCase() == "subcategory") await this.getProductsBySubcategory(page);

            target.disabled = false
        },
        setSubcategoryDetails: async function (subcategoryId, subcategoryName, e) {
            
            let subcatChip = document.querySelectorAll('#subcatChip');
            for (let x of subcatChip) {
                x.classList.remove('is-active')
            }

            e.target.classList.add('is-active');

            this.productHeader = `${subcategoryName} subcategory`;

            this.productsType = "Subcategory";
            this.subcategoryId = subcategoryId;
            this.subcategoryName = subcategoryName

            this.getProductsBySubcategory(1)

            this.resetGridLayout()

        },
        getSubcategory: function () {
            
            // get subcategories
            let industryCategory = this.currentIndustry == "Fashion" ? this.returnFashionCategoriesList : this.returnBeautyCategoriesList;

            let subcategoryArray = [];

            for (let x of industryCategory) {
                if (x.categoryId == this.categoryId) {
                    subcategoryArray = x.subcategory;
                    break
                }
            }

            this.subcategoryListing = subcategoryArray

            this.resetGridLayout()
        },
        scrollTop: function () {
            if (process.browser) {
                window.scrollTo(0, 0);
            }
        },
        setCommunitySearchAction: async function () {
            let communityInput = document.getElementById('communityName')
            communityInput.addEventListener('keyup', async () => {
                if (this.communityName.length > 1) {
                    this.noCommunitySuggestionResult = 0
                    this.tapId = 0
                    await this.findCommunity()
                }
            })
        },
        findCommunity: async function () {
            
            this.communitySuggestion = [];
            this.selectedCommunityId = ""

            this.clearTime();    

            let variables = {
                keyword: this.communityName.trim()
            }

            this.isCommunitySearch = 0
            document.getElementById('communitySearchSuggestion').style.display = 'block'

            this.timeOut = setTimeout(async () => {
                
                let request = await this.$performGraphQlQuery(this.$apollo, FIND_COMMUNITY, variables, {});
                
                this.isCommunitySearch = 1

                if (request.error) {
                    this.$showToast("Network error", 'error')
                    return
                }

                let result = request.result.data.GetCommunity;
                if (result.success) {
                    if (result.communityData != null) {
                        // this.streetSuggestion = result.streetData
                        let communityArray = [];
                        for (let community of result.communityData) {
                            communityArray.push({
                                communityName: community.communityName,
                                communityId: community.communityId,
                                stateName: community.state.name
                            });
                        }

                        this.communitySuggestion = communityArray;
                        this.noCommunitySuggestionResult = 0
                        
                    } else {
                        this.noCommunitySuggestionResult = 1
                    }
                }



            }, 500);
        },
    },
    created: async function () {
        await this.GetAllCategories();
        if (process.client) {
            await this.setUrlData();
            await this.setIndustry();
            this.setCategoryDropDown(true)
        }

    },
    beforeDestroy() {
        this.clearTime()
    },
    mounted () {
        this.pageLoader = 0
        this.setCommunitySearchAction()
    }
}
</script>

<style scoped>
    .no-radius {
        border-radius: 0;
    }
    .content-loading {
        width: 100%;
        height: 200px;
        /* background: red; */
        display: flex;
        justify-content: center;
        align-content: center;
        position: relative;
    }
    .content-loading .loader-action {
        display: flex;
        background-color: transparent;
    }
    .content-loading .loader-action .loader {
        border: 2px solid rgba(0,0,0,.5);
        width: 30px;
        height: 30px;
        border-top: 2px solid transparent;
    }
    .product-card-details {
        display: block;
        padding-top: 16px !important;
    }
    .text-center {
        text-align: center !important;
    }
    .business-logo-cover {
        position: relative !important;
        margin: 0 auto;
        left: unset;
        padding: 0;
        bottom: unset;
    }
    .adjust-name *{
        text-align: center;
    }
    .adjust-name h2 {
        margin-bottom: 8px;
    }
    .alert {
        font-size: 14px !important;
    }
    .slick-next {
        right: 0 !important;
    }
    .slick-prev {
        left: 0 !important;
    }
    .accordion-subcat-area {
        padding: 16px 16px 0px 16px;
        margin-bottom: 0;
    }
    .accordion-subcat-area div{
        margin-bottom: 0;
        background-color: white;
    }
    .accordion-subcat-area div:hover,
    .accordion-subcat-area div.is-active{
        color: white;
        background-color: #ee6425;
    }

    @media (min-width: 1280px) {
        .accordion-subcat-area {
            padding: 24px 40px 16px 40px;
        }
        .product-area {
            padding: 16px 40px;
        }
    }

    .input-join .input-form{
        height: 100%
    }
    .input-join .position-relative {
        width: 100%;
    }
</style>