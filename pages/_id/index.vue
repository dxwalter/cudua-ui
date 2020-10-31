<template>
    <div class="customer">
            <div class="body-container grey-bg-color">
            
                    <!-- beginning of navigation container -->
                        <div class="nav-container">
                            <MOBILESEARCH></MOBILESEARCH>
                            <nuxt />

                            <!-- show business navigation fi -->
                            <BUSINESSNAV v-show="!pageLoader && !pageError"></BUSINESSNAV>

                            <DESKTOPNAVGATION v-show="pageLoader || pageError"></DESKTOPNAVGATION>
                            <MOBILENAVIGATION></MOBILENAVIGATION>
                            <nuxt />
                        </div>

                        <!-- pageLoader -->
                        <PAGELOADER v-show="pageLoader"></PAGELOADER>

                        <!-- begining of content container -->
                        <div class="content-container-second business-page-container" v-show="!pageLoader">

                            <!-- mobile category navigation -->
                            <div class="mobile-shop-cat-listing" v-show="!pageError && !subscription">
                                <button class="bis-nav-btn" id="showBusinessCategory" @click="showMobileCategory">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21">
                                        <use xlink:href="~/assets/customer/image/all-svg.svg#categories"></use>
                                    </svg>
                                    <span>Categories</span>
                                </button>
                                <button class="bis-nav-btn" @click="getAllProducts(1);">
                                    <svg xmlns="http://www.w3.org/2000/svg">
                                        <use xlink:href="~/assets/customer/image/all-svg.svg#productIcon"></use>
                                    </svg>
                                    <span>All products</span>
                                </button>
                            </div>
                            <!-- end of mobile category navigation -->

                            <!-- mobile category listing -->
                            <div class="mobile-category-container" id="businessCategoryContainer" v-show="!pageError">
                                <div class="shop-cat-dialog-box" id="businessCategoryContent">

                                    <div class="shop-cat-listing">

                                        <div class="section-header">
                                            <h4>Category listing</h4>
                                            <button class="close-modal-btn" id="closeMobileBusinessCategory" @click="hideMobileCategory">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" class="margin-unset">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#times"></use>
                                                </svg>
                                            </button>
                                        </div>
                                        
                                        <div class="alert alert-info no-radius" v-show="returnCategories.length == 0">
                                            <div>No category has been added by this business</div>
                                        </div>

                                        <div class="shop-cat-item" v-for="(category, index) in returnCategories" :key="index">
                                            <a href="#">
                                                <input type="checkbox" class="dropdownCheckBox" @click="showSubcatList(`check${category.categoryId}`, category.categoryName, $event)" v-bind:checked="!index" :id="`check${category.categoryId}`">
                                                <span class="accord-chip-name">{{category.categoryName}}</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.05 13.616">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                                                </svg>
                                            </a>
                                            <div class="subcat-listing" :id="`${category.categoryName}Category`"
                                            v-bind:class="{'showEffect': index == 0}"
                                            >
                                                <a href="#" class="chip" v-for="subcategory in category.subcategories" :key="subcategory.subcategoryId"
                                                @click="getProductsBysubCategory(subcategory.subcategoryId, subcategory.subcategoryName, $event);"
                                                >{{subcategory.subcategoryName}}</a>

                                                <a href="#" class="chip" @click="getProductsByCategory(category.categoryId, category.categoryName, $event);">All products in {{category.categoryName}} category</a>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <!-- end of mobile category listing -->
                            
                            <div class="product-area"  v-show="!pageError && !subscription">

                                <div class="business-product-container">
                                    <div class="business-product-listing">

                                        <div class="section-header d-flex-between business-page-action">
                                            <h4>{{productHeader}}</h4>
                                            <div>
                                                <button class="btn btn-svg btn-white btn-md" @click="showMobileCategory">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21">
                                                        <use xlink:href="~/assets/customer/image/all-svg.svg#categories"></use>
                                                    </svg>
                                                    <span>All categories</span>
                                                </button>
                                                <button class="btn btn-white btn-svg btn-md" @click="getAllProducts(1);">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21">
                                                        <use xlink:href="~/assets/customer/image/all-svg.svg#productIcon"></use>
                                                    </svg>
                                                    <span>All products</span>
                                                </button>
                                            </div>
                                        </div>

                                        <!-- business product listing -->
                                        <div class="content-loading" v-show="isLoading">
                                            <div class="loader-action"><span class="loader"></span></div>    
                                        </div>

                                        <div  v-show="!isLoading">


                                            <div class="row">  
                                                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3" v-for="(x, index) in returnProductList" :key="index"  v-show="!x.hide">
                                                    <div class="product-card">
                                                        <div class="product-image-container">
                                                            
                                                            <div class="to-left cursor-control" v-show="x.imageArray.length > 1">
                                                                <button class="close-modal-btn btn-light-grey" @click="moveCarousel(`imageContainer${x.productId}`, 'right')" data-direction="left">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                                        <use xlink:href="~/assets/customer/image/all-svg.svg#leftSlider"></use>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                            
                                                            <div class="to-right cursor-control" v-show="x.imageArray.length > 1">
                                                                <button class="close-modal-btn btn-light-grey" id="nextSlide" @click="moveCarousel(`imageContainer${x.productId}`, 'left')" data-direction="right">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                                        <use xlink:href="~/assets/customer/image/all-svg.svg#rightSlider"></use>
                                                                    </svg>
                                                                </button>
                                                            </div>

                                                            <n-link :to="`/p/${x.productId}`" class="product-card-image" v-bind:style="{height: contentHeight}" :id="`imageContainer${x.productId}`" data-current-image="1">
                                                                <img class="product-image-item" v-for="(images, imageIndex) in x.imageArray" :key="imageIndex" :src="formatProductImageUrl(images)"  :alt="`${x.productName}'s image`" v-lazy-load v-bind:class="[imageIndex ? '' : 'is-active']">
                                                            </n-link>

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
                                            <div class="load-more-action move-center" v-show="loadMoreContent">
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


                                        <!-- business name and details for desktop -->
                                        <div class="desktop-business-bottom-details card" v-show="!subscription">
                                            <div class="d-flex">
                                                <div class="business-bottom-logo">
                                                    <div class="temporal-logo" v-show="!logo">
                                                        {{getNameLogo(businessName)}}
                                                    </div>
                                                    <img :data-src="logo" :alt="`${businessName}'s logo`"  v-show="logo" v-lazy-load>
                                                </div>
                                                <div class="bottom-business-details">
                                                    <div class="business-name">{{businessName}}</div>
                                                    <div class="more-business-details mg-bottom-24">
                                                        <div class="business-address">{{getBusinessAddress}}.</div>
                                                    </div>
                                                    <div>
                                                        <button class="btn btn-primary" data-target="businessDetailsModal" data-trigger="modal">View profile</button>
                                                        <!-- <button class="btn btn-white" data-target="reportModal" data-trigger="modal">Report business</button> -->
                                                        <button class="btn btn-white" data-target="contactBusiness" data-trigger="modal">Contact business</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- end of business name and details for desktop -->

                                    </div>

                                </div>

                            </div>

                            <!-- when an error occurs, show this -->
                            <div class="link-error-area" v-show="pageError">
                                <img src="~/static/images/server-error.svg" alt="">
                                <div class="error-cause" v-html="reasonForError">{{reasonForError}}</div>
                                <div class="action-area">
                                    <n-link to="/" class="btn btn-primary">Home page</n-link>
                                    <button class="btn btn-white" @click="triggerSearch()">Search again</button>
                                </div>
                            </div>
                            <!-- end of error area -->

                            <div class="industry-layout" v-show="!pageLoader && !pageError && subscription">

                                    <div class="expired-sub-container">
                                        <div class="mg-bottom-16">
                                            <div class="business-logo-cover">
                                                <div class="temporal-logo" v-show="!logo">
                                                    {{getNameLogo(businessName)}}
                                                </div>
                                                <img :data-src="logo" :alt="`${businessName}'s logo`"  v-show="logo" v-lazy-load>
                                            </div>
                                        </div>
                                        <div class="business-name adjust-name mg-bottom-32">
                                            <h2>{{businessName}}</h2>
                                            <div class="profile-username">@{{username}}</div>
                                        </div>
                                        <div class="alert alert-dark text-center">This shop is currently not accessible.</div>
                                    </div>

                            </div>
                            
                        </div>
                        <!-- end of content container -->

                        <div class="bottom-nav" v-show="!pageLoader && !pageError && !subscription">
                            <!-- footer -->
                            <a href="#" class="bottom-nav-item" data-target="businessDetailsModal" data-trigger="modal">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <use xlink:href="~/assets/customer/image/all-svg.svg#addressCard"></use>
                                </svg>
                                <span>About</span>
                            </a>

                            <a href="#" class="bottom-nav-item" data-target="BusinessMobileSearchModal" data-trigger="modal">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <use xlink:href="~/assets/customer/image/all-svg.svg#searchIcon"></use>
                                </svg>
                                <span>In-shop search</span>
                            </a>

                            <!-- <a href="#" class="bottom-nav-item" data-target="reportModal" data-trigger="modal">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <use xlink:href="~/assets/customer/image/all-svg.svg#flag"></use>
                                </svg>
                                <span>Report</span>
                            </a> -->

                            <a :href="`https://wa.me/${getWhatsappContact.number}?text=Hello ${businessName}`" class="bottom-nav-item" v-show="getWhatsappContact.status == 1 && getWhatsappContact.number != null">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <use xlink:href="~/assets/customer/image/all-svg.svg#whatsappIcon"></use>
                                </svg>
                                <span>Support</span>
                            </a>

                            <a :href="`mailto:${getEmail}`" class="bottom-nav-item" v-show="getWhatsappContact.status == 0 || getWhatsappContact.number == null">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <use xlink:href="~/assets/customer/image/all-svg.svg#inviteBusiness"></use>
                                </svg>
                                <span>Support</span>
                            </a>
                        </div>

                        <!-- footer area -->
                        <div class="mobile-hide-nav-bottom-add">
                            <BOTTOMADS></BOTTOMADS>
                            <CUSTOMERFOOTER></CUSTOMERFOOTER>
                        </div>

                <!-- modals -->
                <ABOUTBUSINESSMODAL></ABOUTBUSINESSMODAL>
                <BUSINESSREVIEW></BUSINESSREVIEW>
                <BUSINESSSEARCH></BUSINESSSEARCH>
                <BUSINESSCONTACT></BUSINESSCONTACT>
                <REPORTBUSINESS></REPORTBUSINESS>
                <LoginComponent></LoginComponent>
            </div>
    </div>
</template>

<script>

import MOBILENAVIGATION from '~/layouts/customer/mobile-navigation.vue';
import MOBILESEARCH from '~/layouts/customer/mobile-search.vue';
import DESKTOPNAVGATION from '~/layouts/customer/desktop-navigation.vue'
import BOTTOMADS from '~/layouts/customer/buttom-ads.vue';
import CUSTOMERFOOTER from '~/layouts/customer/customer-footer.vue';
import BUSINESSNAV from '~/layouts/customer/business/business-nav.vue';
import PAGELOADER from '~/components/loader/loader.vue';

// business modal
import ABOUTBUSINESSMODAL from '~/layouts/customer/business/about-modal.vue';
import BUSINESSREVIEW from '~/layouts/customer/business/business-review-modal.vue';
import BUSINESSSEARCH from '~/layouts/customer/business/business-search-modal.vue';
import BUSINESSCONTACT from '~/layouts/customer/business/contact-business.vue';
import REPORTBUSINESS from '~/layouts/customer/business/report-modal.vue';
import LoginComponent from '~/components/login/login.vue'

import { mapActions, mapGetters } from 'vuex';

import { GET_BUSINESS_DETAILS_BY_USERNAME } from '~/graphql/business'
import { 
    GET_PRODUCT_BY_BUSINESS_ID,
    GET_PRODUCT_BY_SUBCATEGORY,
    GET_PRODUCT_BY_CATEGORY
} from '~/graphql/product'

async function getBusinessDetails (app, params) {
    try {

        let variables = {
            username: params.id
        }

        let result = await app.apolloProvider.defaultClient.query({
            query: GET_BUSINESS_DETAILS_BY_USERNAME,
            variables: variables
        })  

        let data = result.data.GetSingleBusinessDetailsByUsername;

        let returnData = {}

        if (data.success == false) {
            return {
                pageError: 1,
                reasonForError: data.message
            }
        }

        if (data.businessData == null) {
            return {
                pageError: 1,
                reasonForError: data.message
            }
        }

        data = data.businessData;

        return {
            businessId: data.id,
            businessContact: data.contact,
            username: data.username,
            businessName: data.businessname,
            address: data.address,
            logo: data.logo.length > 0 ? app.$getBusinessLogoUrl(data.id, data.logo) : "",
            contact: data.contact,
            whatsappContact: data.contact.whatsapp,
            description: data.description,
            name: data.businessname,
            coverPhoto: data.coverPhoto.length > 0  ? app.$getBusinessCoverPhotoUrl(data.id, data.coverPhoto): "",
            reviewScore: data.review,
            categories: data.businessCategories,
            reviews: data.reviews,
            subscription: data.subscriptionStatus
        }


    } catch (error) {
        return {
            pageError: 1,
            reasonForError: `A network error occurred. Kindly try again`
        }
    }   
}

export default {
    name: "BUSINESSPAGE",
    components: {
        MOBILENAVIGATION, 
        MOBILESEARCH, 
        BOTTOMADS, 
        CUSTOMERFOOTER, 
        BUSINESSNAV, 
        PAGELOADER,
        ABOUTBUSINESSMODAL,
        BUSINESSREVIEW,
        BUSINESSSEARCH,
        BUSINESSCONTACT,
        REPORTBUSINESS,
        DESKTOPNAVGATION,
        LoginComponent
    },
    data: function() {
      return {
        anonymousId: "",
        pageLoader: 1,
        pageError: 0,
        reasonForError: "",
        username: "",
        businessId: "",
        businessCategory: [],
        businessContact: "",
        businessName: "",
        address: "",
        contact: "",
        categories: "",
        description: "",
        logo: "",
        coverPhoto: "",
        whatsappContact: "",
        productsType: "all",
        productLists: [],
        productHeader: "All products",
        page: 1,
        loadMoreContent: false,
        reviewScore: 0,

        // product retrieval details
        subcategoryId: "",
        subcategoryName: "",
        categoryId: "",
        categoryName: "",
        isLoading: false,

        accessToken: "",
        noProduct: 0,

        // business details
        businessDetailResult: "",

        screenWidth: 0,
        contentHeight: "",

        subscription: 0, // 0 means active, 1 means expired
      }
    },
    head() {
      return {
        title: `Welcome to ${this.businessName}`,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: `Cudua_description`,
            name: "description",
            content: this.description.length == 0 ? `You'll find quality products at great prices here.` : this.description
          },
          {
              hid: "og:description",
              property: 'og:description',
              content: this.description.length == 0 ? `You'll find quality products at great prices here.` : this.description
          },
          {
              hid: "og:title",
              property: 'og:title',
              content: `Welcome to ${this.businessName}`
          },
          {
              hid: "og:image",
              property: 'og:image',
              content: this.logo
          },
          {
              hid: "og:url",
              property: 'og:url',
              content: `https://www.cudua.com/${this.username}`
          },
          {
              hid: "og:type",
              property: 'og:type',
              content: `website`
          },
        ]
      }
    },
    computed: {
        ...mapGetters({
          'GetAnonymousId': 'customer/GetAnonymousId',
          'GetUserData': 'customer/GetCustomerDetails'
        }),
        handleResize() {
            this.screenWidth = window.innerWidth;
        },
		getBusinessAddress: function() {
			if (this.address == null) return "Address has not been added.";

			return `${this.address.number} ${this.address.street}, ${this.address.community}, ${this.address.state} ${this.address.country}`
        },
        getWhatsappContact: function () {
            return this.whatsappContact
        },
		getEmail: function() {
			return this.contact.email
        },
        returnCategories: function () {
            return this.businessCategory
        },
        returnProductList: function () {
            return this.productLists
        }
    },
    methods: {
        showSlideImage: function(slideToShow, images, direction) {
            
            let move = "";

            if (direction == 'left') move = 'slide-left'
            if (direction == 'right') move = 'slide-right'
            

            for (let image of images) {
                image.classList.remove('is-active', 'slide-left', 'slide-right')
            }

            images[slideToShow - 1].classList.add('is-active', move)
        },
        moveCarousel: function (target, direction) {
            let slideContainer = document.getElementById(target)
            let currentSlide = parseInt(slideContainer.getAttribute('data-current-image'), 10);

            let allImages = document.querySelectorAll(`#${target} > img`);

            let slideToShow = 0
            
            if (direction == 'left') {
                if (currentSlide == 1) return

                slideToShow = currentSlide - 1;
                this.showSlideImage(slideToShow, allImages, direction)

                slideContainer.setAttribute('data-current-image', slideToShow)
            }

            if (direction == 'right') {
                if (currentSlide == allImages.length) return

                slideToShow = currentSlide + 1;
                this.showSlideImage(slideToShow, allImages, direction)
                slideContainer.setAttribute('data-current-image', slideToShow)
            }
        },
        showMobileCategory: function () {
            if (process.client) {
                let businessCategoryContainer = document.getElementById('businessCategoryContainer');
                let businessCategoryContent = document.getElementById('businessCategoryContent');
                this.$showCustomerMobileNav(businessCategoryContainer, businessCategoryContent, "0");
            }
        },
        hideMobileCategory: function () {
            if (process.client) {
                let businessCategoryContainer = document.getElementById('businessCategoryContainer');
                let businessCategoryContent = document.getElementById('businessCategoryContent');
                this.$showCustomerMobileNav(businessCategoryContainer, businessCategoryContent, '1')
            }
        },
        closeBySubcategory: function (CategoryContainer) {
            if (process.client) {
                for (let i = 0; i < CategoryContainer.length; i++) {
                    CategoryContainer[i].addEventListener("click", event => {
                        this.hideMobileCategory();
                    })
                }
            }
        },
		showSubcatList: function (id, category, e) {
            if (process.browser) {
                
                let openedCat = document.querySelectorAll(".subcat-listing.showEffect");
                for (let i = 0; i < openedCat.length; i++) {
                    openedCat[i].classList.remove('showEffect')
                }

                let checkInput = document.getElementsByTagName('input');
                for(let z = 0; z < checkInput.length; z++) {
                    if (checkInput[z].type == 'checkbox') {
                        checkInput[z].checked = false
                    }
                }

                document.getElementById(id).checked = true

                let singleTabContainer = document.getElementById(category+'Category');
                singleTabContainer.classList.toggle(`showEffect`);
            }
		},
        emitEvent: async function() {
            
            if (this.pageError) {
                // this.$initiateNotification('error', '', this.reasonForError);
                return
            }

            let aboutBusiness = {
                name: this.businessName,
                businessId: this.businessId,
                address: this.address,
                contact: this.contact,
                logo: this.logo,
                coverPhoto: this.coverPhoto,
                reviewScore: this.reviewScore,
                categories: this.categories,
                username: this.username,
                description: this.description,
                accessToken: this.accessToken
            }

            let searchData = {
                name: this.businessName,
                businessId: this.businessId,
                logo: this.logo,
            }

            let businessReview = {
                businessId: this.businessId,
                reviewScore: this.reviewScore,
                reviews: this.reviews
            }

            

            // emit to about business modal
            $nuxt.$emit('BusinessDetails', aboutBusiness)
            // emit business review to business review modal
            $nuxt.$emit('BusinessReview', businessReview)
            // emit to search component
            $nuxt.$emit("searchData", searchData)

            let filteredCategories = [];
            
            if (this.categories.length == 0 ) this.businessCategory = [];

            if (this.categories.length > 0) {
                for (const [index, category] of this.categories.entries()) {
                    if (category.hide == 0) {
                        let cat = [];

                        cat.push({
                            categoryName: category.categoryName,
                            categoryId: category.categoryId,
                            subcategories: []
                        })
                        
                        let subcatCount = 0;

                        for (let [subcatIndex, subcategory] of category.subcategories.entries()) {
                            if (subcategory.hide == 0) {
                                subcatCount += 1;
                                cat[0].subcategories.push({
                                    subcategoryName: subcategory.subcategoryName,
                                    subcategoryId: subcategory.subcategoryId
                                })
                            }
                        }

                        if (subcatCount == 0) {
                            cat.pop()
                        } else {
                            this.businessCategory.push(cat[0])
                        }
                    }
                }
                this.categories = []
            }

            
        },
		getNameLogo: function (businessName) {
			if (process.browser) {
				let name =  this.$convertNameToLogo(businessName)
				return name
			}
        },
        formatProductImageUrl: function (imagePath) {
            return this.$formatProductImageUrl(this.businessId, imagePath, "medium")
        },
        triggerSearch: function () {
            document.getElementById("mobilePrimarySearchInput").focus()
        },
        getProductsByCategory: async function (categoryId, categoryName, e = "", page = 1) {
            
            if (typeof e !== 'string') {
                e.preventDefault()
            }

            this.hideMobileCategory()

            this.$router.push({path: this.$route.path, query: { cat: categoryId, name: categoryName }})

            this.productsType = 'cat'
            this.productHeader = `${categoryName} category`
            this.categoryId = categoryId
            this.categoryName = categoryName

            this.page = page

            if (this.page == 1) this.isLoading = true

            let variables = {
                businessId: this.businessId,
                page: page,
                categoryId: categoryId
            }
            
            let request = await this.$performGraphQlQuery(this.$apollo, GET_PRODUCT_BY_CATEGORY, variables, {});
            this.isLoading = false

            if (page == 1) this.productLists = []

            if (request.error) {
                this.reasonForError = request.message
                this.pageError = 1
                return
            }

            let result = request.result.data.GetProductByCategory;

            if (result.success == false) {
                this.reasonForError = result.message
                this.pageError = 1
                return
            }

            if (result.products.length == 0 && page == 1) {
                this.productLists = []
                this.noProduct = 1
                this.reasonForError = `No product was found in <span class="indicator">${categoryName}</span> category.`
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
                    image: this.$formatProductImageUrl(this.businessId, x.primaryImage, "medium"),
                    hide: x.hide,
                    imageArray: x.images,
                })
            }

            
            

        },
        getProductsBysubCategory: async function (subcategoryId, subcategoryName, e = "", page = 1) {
            
            if (typeof e !== 'string') {
                e.preventDefault()
            }

            this.$router.push({path: this.$route.path, query: { sub: subcategoryId, name: subcategoryName }})
            this.hideMobileCategory()
            this.subcategoryId = subcategoryId
            this.subcategoryName = subcategoryName
            this.productsType = 'sub';
            this.productHeader = `${subcategoryName} subcategory`

            this.page = page

            if (this.page == 1) this.isLoading = true

            this.$router.push({path: this.$route.path})


            let variables = {
                businessId: this.businessId,
                page: page,
                subcategoryId: this.subcategoryId
            }
            
            let request = await this.$performGraphQlQuery(this.$apollo, GET_PRODUCT_BY_SUBCATEGORY, variables, {});
            this.isLoading = false

            if (page == 1) this.productLists = []

            if (request.error) {
                this.reasonForError = request.message
                this.pageError = 1
                return
            }

            let result = request.result.data.GetProductBysubCategory;

            if (result.success == false) {
                this.reasonForError = result.message
                this.pageError = 1
                return
            }



            if (result.products.length == 0 && page == 1) {
                this.productLists = []
                this.noProduct = 1
                this.reasonForError = `No product was found in <span class="indicator">${subcategoryName}</span> subcategory.`
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
                    image: this.$formatProductImageUrl(this.businessId, x.primaryImage, "medium"),
                    hide: x.hide,
                    imageArray: x.images,
                })
            }

        },
        getAllProducts: async function (page = 1, e) {



            this.productsType = 'all'
            this.page = page

            if (this.page == 1) this.isLoading = true

            this.productHeader = 'All products'

            let variables = {
                businessId: this.businessId,
                page: page
            }
            
            let request = await this.$performGraphQlQuery(this.$apollo, GET_PRODUCT_BY_BUSINESS_ID, variables, {});
            this.isLoading = false
            
            if (page == 1) this.productLists = []

            if (request.error) {
                this.reasonForError = request.message
                this.pageError = 1
                return
            }

            let result = request.result.data.GetProductsUsingBusinessId;

            if (result.success == false) {
                this.reasonForError = result.message
                this.pageError = 1
                return
            }

            if (result.products.length == 0 && page == 1) {
                this.productLists = []
                this.noProduct = 1
                this.reasonForError = `No product was found in this <span class="indicator">shop</span>.`
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
                    image: this.$formatProductImageUrl(this.businessId, x.primaryImage, "medium"),
                    imageArray: x.images,
                    hide: x.hide
                })
            }

        },
        loadMoreProducts: async function (page, e) {

            this.page = page
            let target = document.getElementById('loadMoreProducts');
            target.disabled = true

            if (this.productsType == "all") await this.getAllProducts(page);
            if (this.productsType == "sub") await this.getProductsBysubCategory(this.subcategoryId, this.subcategoryName, e, page);
            if (this.productsType == "cat") await this.getProductsByCategory(this.categoryId, this.categoryName, e, page);

            target.disabled = false
        },
        getCustomerDataFromStore: function () {
            let customerData = this.GetUserData
            this.accessToken = customerData.userToken
        },
        setContentHeight: function () {
            if (this.screenWidth < 599) {
                this.contentHeight = `${this.screenWidth - 32}px`;
            }
        }
    },
    created: async function () {
        if(process.browser) {

            window.addEventListener('resize', this.handleResize);

            this.getCustomerDataFromStore()

            let username = this.$route.params.id
            if (username == null || username.length == 0) {
                this.reasonForError = "No business username was found in your request."
                this.pageError = 1
            } else {
                this.pageError = 0
                this.username = username

                let queryData = this.$route.query
                if (queryData.name != undefined) {

                    this.isLoading = 1
                    if (queryData.cat != undefined) {
                        this.getProductsByCategory(queryData.cat, queryData.name, "", 1)
                    }

                    if (queryData.sub != undefined) {
                        this.getProductsBysubCategory(queryData.sub, queryData.name, "", 1)
                    }

                } else {
                    this.isLoading = 1
                    await this.getAllProducts(1);
                }
            }

            this.setContentHeight()
        }
    },
    async asyncData({ app, params }) {
        
        return getBusinessDetails(app, params)
    },
    mounted () {
        this.anonymousId = this.GetAnonymousId
        this.emitEvent();
        this.pageLoader = 0
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
</style>