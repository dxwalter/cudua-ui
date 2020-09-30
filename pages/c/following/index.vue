<template>
    <client-only>
        <div class="customer">
            <div class="body-container grey-bg-color">

            <!-- beginning of navigation container -->
                <div class="nav-container">
                    <MOBILESEARCH></MOBILESEARCH>
                    <DESKTOPNAVGATION></DESKTOPNAVGATION>
                    <MOBILENAVIGATION></MOBILENAVIGATION>
                </div>

                <!-- pageLoader -->
                <PAGELOADER v-show="pageLoader"></PAGELOADER>

                <div class="content-container">
                    <!-- bookmark area -->
                    <div class="section-header" v-show="!pageLoader"><h4>Following</h4></div>

                    <!-- bookmark listing area -->
                    <div class="bookmark-listing-area"  v-show="!pageLoader">

                        <!-- beginning of row -->
                        <div class="row">


                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" v-for="(business, index) in returnBusiness" :key="index">
                                <div class="card bookmark-big-card">
                                    <n-link :to="`/${business.username}`" class="d-flex">
                                        <div class="bookmark-logo">
                                            <div class="temporal-logo" v-show="business.logo.length == 0">
                                                {{getNameLogo(business.businessName)}}
                                            </div>
                                            <img :data-src="getBusinessLogo(business.businessId, business.logo)" :alt="`${business.businessName}'s logo`"  v-show="business.logo.length > 1" v-lazy-load>
                                        </div>
                                        <div class="bookmark-card-details">
                                            <h4 class="bookmark-comp-name">{{business.businessName}}</h4>
                                            
                                            <div class="reviews">
                                                <StarRating :score=business.reviewScore></StarRating> 
                                            </div>
                                        </div>
                                    </n-link>
                                    <div class="card-footer" v-show="business.businessCategory.length > 0">
                                        <div class="accordion-subcat-area">
                                            <a :href="`/${business.username}?cat=${category.categoryId}&name=${category.categoryName}`" class="chip" v-for="(category, index) in business.businessCategory" :key="index">{{category.categoryName}}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <!-- end of row -->


                        <!-- when no product is found, show this -->
                        <div class="link-error-area" v-show="noBusiness == 1">
                            <img src="~/static/images/product.svg" alt="" class="mg-bottom-32">
                            <div class="error-cause" v-html="reasonForError">{{reasonForError}}</div>
                        </div>
                        <!-- end of error area -->

                        <!-- when an error occurs, show this -->
                        <div class="link-error-area" v-show="networkError">
                            <img src="~/static/images/server-error.svg" alt="">
                            <div class="error-cause" v-html="reasonForError">{{reasonForError}}</div>
                        </div>
                        <!-- end of error area -->

                        
                        <div class="load-more-action move-center" v-show="businessCount == 12">
                            <button class="btn btn-white" @click="loadMoreContent()" id="loadMoreContent">
                                Load more
                                <div class="loader-action"><span class="loader"></span></div>
                            </button>
                        </div>

                    </div>
                    <!-- end of bookmark listing area -->

                </div>
                <!-- end of content container -->

                <BOTTOMADS></BOTTOMADS>

                <CUSTOMERFOOTER></CUSTOMERFOOTER>

            </div>
        </div>
    </client-only>
</template>

<script>
import MOBILENAVIGATION from '~/layouts/customer/mobile-navigation.vue'
import DESKTOPNAVGATION from '~/layouts/customer/desktop-navigation.vue'
import MOBILESEARCH from '~/layouts/customer/mobile-search.vue'
import BOTTOMADS from '~/layouts/customer/buttom-ads.vue'
import CUSTOMERFOOTER from '~/layouts/customer/customer-footer.vue';
import PAGELOADER from '~/components/loader/loader.vue';

import { mapActions, mapGetters, mapMutations } from 'vuex';

import StarRating from '~/plugins/vue-star-rating.client.vue'

import {
    GET_BUSINESS_FOLLOWED_BY_CUSTOMER
}  from '~/graphql/customer'

export default {
    name: "CUSTOMERFOLLOWING",
    components: {
      DESKTOPNAVGATION, MOBILENAVIGATION, MOBILESEARCH, BOTTOMADS, CUSTOMERFOOTER, PAGELOADER, StarRating
    },
    data: function() {
        return {
            pageLoader: true,
            accessToken: "",
            page: 1,
            reasonForError: "",
            networkError: "",
            noBusiness: 0,
            allBusinesses: [],
            businessCount: 0
        }
    },
    computed: {
        returnBusiness () {
            return this.allBusinesses
        }
    },
    created: async function () {
		if (process.browser) {
            let status = this.LoginStatus()
            if (status == false) {
                return this.$router.push('/')
            }
            this.GetCustomerDataFromStore()
            this.getFollowing()
		}

    },
    methods: {
		...mapGetters({
            'GetLoginStatus': 'customer/GetLoginStatus',
            'GetCustomerData': 'customer/GetCustomerDetails',
        }),
        GetCustomerDataFromStore: function () {
			let customerData = this.GetCustomerData();
            this.accessToken = customerData.userToken
        },
		LoginStatus: function() {
			return this.GetLoginStatus()
        },
        getNameLogo: function(name) {
			if (process.browser) {
				return this.$convertNameToLogo(name)
			}
        },
        loadMoreContent: async function () {
            this.page = this.page + 1;
            let target = document.getElementById('loadMoreContent');

            target.disabled = true

            await this.getFollowing(this.page);

            target.disabled = false

        },
        getBusinessLogo: function (businessId, logo) {
            return this.$getBusinessLogoUrl(businessId, logo)
        },
        getFollowing: async function (page = 1) {

            let variables = {
                page: page
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }

            let request = await this.$performGraphQlQuery(this.$apollo, GET_BUSINESS_FOLLOWED_BY_CUSTOMER, variables, context);

            if (request.error && page == 1) {
                this.reasonForError = request.message
                this.networkError = 1
                return
            } else if(request.error && page > 1) {
                this.$initiateNotification('error', 'Failed request', request.message);
                return
            } 

            let result = request.result.data.Getfollowing;

            if ((!result.success || result.following.length == 0 ) && page == 1) {
                this.reasonForError = "You are not following any business."
                this.noBusiness = 1
                return
            } else if (result.following.length == 0 && page > 1) {
                this.$initiateNotification('info', '', result.message);
                return
            }

            for (let x of result.following) {
                this.allBusinesses.push({
                    businessName: x.businessName,
                    logo: x.logo,
                    reviewScore: x.review,
                    username: x.username,
                    businessCategory: x.businessCategory == null ? [] : x.businessCategory,
                    businessId: x.businessId
                })
            }

            this.businessCount = result.following.length

        }
    },
    mounted () {
        this.pageLoader = false
    }
}
</script>