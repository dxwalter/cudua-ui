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
                            <div class="mobile-shop-cat-listing" v-show="!pageError">
                                <button class="bis-nav-btn" id="showBusinessCategory" @click="showMobileCategory">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21">
                                        <use xlink:href="~/assets/customer/image/all-svg.svg#categories"></use>
                                    </svg>
                                    <span>Categories</span>
                                </button>
                                <button class="bis-nav-btn">
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
                                                <input type="checkbox" class="dropdownCheckBox" @click="showSubcatList(`check${category.categoryId}`, category.categoryName)" v-bind:checked="!index" :id="`check${category.categoryId}`">
                                                <span class="accord-chip-name">{{category.categoryName}}</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.05 13.616">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                                                </svg>
                                            </a>
                                            <div class="subcat-listing" :id="`${category.categoryName}Category`"
                                            v-bind:class="{'showEffect': index == 0}"
                                            >
                                                <a href="#" class="chip" v-for="subcategory in category.subcategories" :key="subcategory.subcategoryId">{{subcategory.subcategoryName}}</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <!-- end of mobile category listing -->
                            
                            <div class="product-area"  v-show="!pageError">
                                <div class="business-product-container">
                                    <!-- desktop category listing -->
                                    <div class="desktop-category-area card">
                                        <div class="card-title">
                                            Categories
                                        </div>
                                        <div class="alert alert-info no-radius" v-show="returnCategories.length == 0">
                                            <div>No category has been added by this business</div>
                                        </div>
                                        <div class="desktop-shop-cat-listing">
                                            <div class="shop-cat-item" v-for="(category, index) in returnCategories" :key="`${index}dk`">
                                                <a href="#">
                                                    <input type="checkbox" class="dropdownCheckBox" @click="showSubcatList(`dkcheck${category.categoryId}`, category.categoryName+'dk')" v-bind:checked="!index" :id="`dkcheck${category.categoryId}`">
                                                    <span class="accord-chip-name">{{category.categoryName}}</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.05 13.616">
                                                        <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                                                    </svg>
                                                </a>
                                                <div class="subcat-listing" :id="`${category.categoryName}dkCategory`"
                                                v-bind:class="{'showEffect': !index}"
                                                >
                                                    <a href="#" class="chip" v-for="subcategory in category.subcategories" :key="`${subcategory.subcategoryId}dk`">{{subcategory.subcategoryName}}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of desktop category listing -->
                                    
                                    <div class="business-product-listing">

                                        <div class="section-header d-flex-between business-page-action">
                                            <h4>All products</h4>
                                            <button class="btn btn-white btn-md">All products</button>
                                        </div>

                                        <!-- business product listing -->
                                        <div class="row">
                                                        
                                            <n-link to="/p/34232432" class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                                <div class="product-card">
                                                    <div class="product-card-image">
                                                        <img src="~/assets/customer/image/zenfone.jpg" alt="">
                                                    </div>
                                                    <div class="product-card-details">
                                                        <div class="product-name">
                                                            Asus Zenfone 15xd modellite spax
                                                        </div>
                                                        <div class="product-price">₦ 1,200</div>
                                                    </div>
                                                </div>
                                            </n-link>
                                
                                            <n-link to="/p/34232432" class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                                <div class="product-card">
                                                    <div class="product-card-image">
                                                        <img src="~/assets/customer/image/zenfone.jpg" alt="">
                                                    </div>
                                                    <div class="product-card-details">
                                                        <div class="product-name">
                                                            Asus Zenfone
                                                        </div>
                                                        <div class="product-price">₦ 1,200</div>
                                                    </div>
                                                </div>
                                            </n-link>
                                
                                        </div>
                                        <!-- end of business product listing -->

                                        <div class="load-more-action move-center">
                                            <button class="btn btn-white">Load more products</button>
                                        </div>

                                        <!-- business name and details for desktop -->
                                        <div class="desktop-business-bottom-details card">
                                            <div class="d-flex">
                                                <div class="business-bottom-logo">
                                                    <div class="temporal-logo" v-show="!logo">
                                                        {{getNameLogo(businessName)}}
                                                    </div>
                                                    <img :data-src="logo" :alt="`${businessName}'s logo`"  v-show="logo" v-lazy-load>
                                                </div>
                                                <div class="bottom-business-details">
                                                    <div class="business-name">{{businessName}}</div>
                                                    <div class="more-business-details mg-bottom-32">
                                                        <div class="business-address">{{getBusinessAddress}}.</div>
                                                    </div>
                                                    <div>
                                                        <button class="btn btn-primary" data-target="businessDetailsModal" data-trigger="modal">View profile</button>
                                                        <button class="btn btn-white" data-target="reportModal" data-trigger="modal">Report business</button>
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
                                <img src="~/static/images/404.svg" alt="">
                                <div class="error-cause" v-html="reasonForError">{{reasonForError}}</div>
                                <div class="action-area">
                                    <n-link to="/" class="btn btn-primary">Home page</n-link>
                                    <button class="btn btn-white" @click="triggerSearch()">Search again</button>
                                </div>
                            </div>
                            <!-- end of error area -->
                            
                        </div>
                        <!-- end of content container -->

                        <div class="bottom-nav" v-show="!pageLoader && !pageError">
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
                                <span>Search in</span>
                            </a>

                            <a href="#" class="bottom-nav-item" data-target="reportModal" data-trigger="modal">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <use xlink:href="~/assets/customer/image/all-svg.svg#flag"></use>
                                </svg>
                                <span>Report</span>
                            </a>

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

import { mapActions, mapGetters } from 'vuex';

import { GET_BUSINESS_DETAILS_BY_USERNAME } from '~/graphql/business'


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
        DESKTOPNAVGATION 
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
        logo: "",
        whatsappContact: ""
      }
    },
    computed: {
      ...mapGetters({'GetAnonymousId': 'customer/GetAnonymousId'}),
		getBusinessAddress: function() {
			if (this.address == null) return "Not available";

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
        }
    },
    methods: {
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
		showSubcatList: function (id, category) {
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
        getBusinessDetails: async function() {
            
            let variables = {
                username: this.username
            }

            let request = await this.$performGraphQlQuery(this.$apollo, GET_BUSINESS_DETAILS_BY_USERNAME, variables, {});

            if (request.error) {
                this.$initiateNotification('error', 'Failed request', 'A network error occurred');
                this.reasonForError = "A network error occurred. Make sure you are connected to the internet"
                this.pageError = 1
                return
            }

            let result = request.result.data.GetSingleBusinessDetailsByUsername;

            if (result.success == false) {
                this.reasonForError = result.message
                this.pageError = 1
                return
            }

            if (result.businessData == null) {
                this.reasonForError = `No result was found for <span class="indicator">${this.username}</span>. This shop has either been moved or deleted`
                this.pageError = 1
                return
            }

            let data = result.businessData;

            this.businessId = data.id;
            this.businessContact = data.contact
            this.username = data.username
            this.businessName = data.businessname
            this.address = data.address
            this.logo = data.logo.length > 0 ? this.$getBusinessLogoUrl(this.businessId, data.logo) : "",
            this.contact = data.contact,
            this.whatsappContact = data.contact.whatsapp

            let aboutBusiness = {
                name: data.businessname,
                businessId: data.id,
                address: data.address,
                contact: data.contact,
                logo: data.logo,
                coverPhoto: data.coverPhoto,
                reviewScore: data.review,
                categories: data.businessCategories,
                username: data.username,
                description: data.description
            }

            let searchData = {
                name: data.businessname,
                businessId: data.id,
                logo: data.logo.length > 0 ? this.$getBusinessLogoUrl(this.businessId, data.logo) : "",
            }

            let businessReview = {
                businessId: data.id,
                reviewScore: data.review,
                reviews: data.reviews
            }

            // emit to about business modal
            $nuxt.$emit('BusinessDetails', aboutBusiness)
            // emit business review to business review modal
            $nuxt.$emit('BusinessReview', businessReview)
            // emit to search component
            $nuxt.$emit("searchData", searchData)

            let filteredCategories = [];
            // this.businessCategory = 
            if (data.businessCategories.length == 0 ) this.businessCategories = [];

            if (data.businessCategories.length > 0) {
                for (const [index, category] of data.businessCategories.entries()) {
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

            }

            
        },
		getNameLogo: function (businessName) {
			if (process.browser) {
				let name =  this.$convertNameToLogo(businessName)
				return name
			}
		},
        triggerSearch: function () {
            document.getElementById("mobilePrimarySearchInput").focus()
        }
    },
    created: async function () {
        if(process.browser) {
            // await this.getBusinessDetails()
            let username = this.$route.params.id
            if (username == null || username.length == 0) {
                this.reasonForError = "No business username was found in your request"
                this.pageError = 1
            } else {
                this.pageError = 0
                this.username = username
                await this.getBusinessDetails();
            }
        }
    },
    mounted () {
        this.anonymousId = this.GetAnonymousId
        this.pageLoader = 0
    }
}
</script>
<style scoped>
    .no-radius {
        border-radius: 0;
    }
</style>