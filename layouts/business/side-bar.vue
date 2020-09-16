<template>
        <!-- <client-only> -->
            <div class="side-nav-container" id="sideNav" v-on:click="closeNav">
                    <!-- the .js-fold-nav class along-with .side-nav-content folds
                    the navigation bar -->
                    <div class="side-nav-content" id="sideNavContent">

                        <div class="side-nav-logo-area" >
                            
                            <n-link  :prefetch="true"  to="/b/profile/" class="side-nav-logo">
                                <div class="temporal-logo" v-show="!businessLogo">
                                    {{getNameLogo(businessName)}}
                                </div>
                                <img :data-src="businessLogo" alt="" v-show="businessLogo" v-lazy-load>
                            </n-link>

                            <div class="nav-name">
                                <h4 class="side-nav-biz-name"><n-link  :prefetch="true"  to="/b/profile">{{businessName}}</n-link></h4>
                                    <div>
                                        <a href="javasscript:;" class="nav-username display-flex" data-trigger="modal" data-target="changeUsername">
                                            <span>@{{username}}</span>
                                            <span class="username-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="11.054" height="20">
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#pencil"></use>
                                                </svg>                                      
                                            </span>
                                        </a>
                                        <a href="javasscript:;" class="navbar-review-icon" data-trigger="modal" data-target="reviewModal">
                                            <star-rating :rating=reviewScore :show-rating="false" :read-only="true" active-color="#ef860e" :round-start-rating="false"></star-rating>
                                        </a>
                                    </div>
                            </div>
                        </div>
                        
                        <n-link  :prefetch="true"  to="/b" :class="[currentPage === '/b' || currentPage.includes('product') ? activeClass : '', 'nav-link-items']">
                            <div class="nav-icon-text">
                                <svg xmlns="http://www.w3.org/2000/svg">
                                    <use xlink:href="~/assets/business/image/all-svg.svg#productIcon"></use>
                                </svg>
                                <span>Products</span>
                            </div>
                        </n-link>

                        <n-link  :prefetch="true"  to="/b/orders" :class="[currentPage.includes('orders') ? activeClass : '', 'nav-link-items']">
                            <div class="nav-icon-text">
                                <svg xmlns="http://www.w3.org/2000/svg">
                                    <use xlink:href="~/assets/business/image/all-svg.svg#order"></use>
                                </svg>
                                <span>Orders</span>
                            </div>

                            <div class="notif-point" v-show="getNewOrderCount > 0">{{getNewOrderCount}}</div>
                        </n-link>

                        <n-link  :prefetch="true"  to="/b/categories" :class="[currentPage.includes('categories') ? activeClass : '', 'nav-link-items']">
                            <div class="nav-icon-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21">
                                    <use xlink:href="~/assets/business/image/all-svg.svg#categories"></use>
                                </svg>
                                
                                <span>Categories</span>
                            </div>
                        </n-link>

                        <n-link  :prefetch="true"  to="/b/followers" :class="[currentPage.includes('followers') ? activeClass : '', 'nav-link-items']">
                            <div class="nav-icon-text">
                                <svg height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
                                    <use xlink:href="~/assets/business/image/all-svg.svg#followers"></use>
                                </svg>                          
                                <span>Followers</span>
                            </div>
                        </n-link>

                        <n-link  :prefetch="true"  to="/b/notification" :class="[currentPage.includes('notification') ? activeClass : '', 'nav-link-items']">
                            <div class="nav-icon-text">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                    <use xlink:href="~/assets/business/image/all-svg.svg#globe"></use>
                                </svg>                          
                                <span>Notification</span>
                            </div>
                            <div class="notif-point" v-show="getNotificationCount > 0">{{getNotificationCount}}</div>
                        </n-link>


                        <n-link  :prefetch="true"  to="/b/dashboard" :class="[currentPage.includes('dashboard') ? activeClass : '', 'nav-link-items']">
                            <div class="nav-icon-text">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <use xlink:href="~/assets/business/image/all-svg.svg#dashboard"></use>
                                </svg>
                                <span>Analytics</span>
                            </div>
                        </n-link>

                        <n-link  :prefetch="true"  to="/b/profile" :class="[currentPage.includes('profile') && !currentPage.includes('profile/edit') ? activeClass : '', 'nav-link-items']">
                            <div class="nav-icon-text">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <use xlink:href="~/assets/business/image/all-svg.svg#person"></use>
                                </svg>
                                <span>Business Profile</span>
                            </div>
                        </n-link>

                        <n-link  :prefetch="true"  to="/b/profile/edit" :class="[currentPage.includes('edit') ? activeClass : '', 'nav-link-items']">
                            <div class="nav-icon-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18.505" viewBox="0 0 18 18.505">
                                    <use xlink:href="~/assets/business/image/all-svg.svg#profile"></use>
                                </svg>
                                <span>Account settings</span>
                            </div>
                        </n-link>

                        <n-link  :prefetch="true"  to="/b/invite" :class="[currentPage.includes('invite') ? activeClass : '', 'nav-link-items']">
                            <div class="nav-icon-text">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <use xlink:href="~/assets/business/image/all-svg.svg#inviteBusiness"></use>
                                </svg>
                                <span>Invite</span> <span class="small-invite-tip"> - (Win a gift)</span>
                            </div>
                        </n-link>

                        <n-link  :prefetch="true"  to="/c/logout" class="nav-link-items">
                            <div class="nav-icon-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                                    <use xlink:href="~/assets/business/image/all-svg.svg#logout"></use>
                                </svg>
                                <span>Logout</span>
                            </div>
                        </n-link>
                        
                    </div>
                    <BUSINESSREVIEWSIDEBAR></BUSINESSREVIEWSIDEBAR>
                    <USERNAMEMODALSIDEBAR></USERNAMEMODALSIDEBAR>
            </div>
        <!-- </client-only> -->
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

import BUSINESSREVIEWSIDEBAR from '~/components/business/businessreview/business.review.vue';
import USERNAMEMODALSIDEBAR from '~/components/business/profile/username.vue'; 

import StarRating from 'vue-star-rating'

export default {
    name: "SIDEBAR",
    components: {
        StarRating,
        USERNAMEMODALSIDEBAR,
        BUSINESSREVIEWSIDEBAR
    },
    data: function () {
        return {
            screenWidth: "",
            openedModalTarget: "",
            activeClass: 'is-active',
            businessName: "",
            businessLogo: "",
            reviewScore: 0,
            username: "",
            businessId: "",
        }
    },
    created() {
        if (process.client) {
            window.addEventListener('resize', this.handleResize);
            this.assignBusinessData()
        }
    },
    computed: {
        handleResize() {
            this.screenWidth = window.innerWidth;
        },
        currentPage() {
            return this.$nuxt.$route.path;
        },
        getNotificationCount () {
            return this.GetBusinessData().newNotificationCount
        },
        getNewOrderCount () {
            return this.GetBusinessData().newOrderCount
        }
    },
    methods : {
        ...mapGetters({
            'GetBusinessData': 'business/GetBusinessDetails',
        }),
        closeNav: function () {
            if (process.client) {
                let closeNavWithOverlay = document.getElementById('sideNav');
                let navToggle = document.getElementById('navToggleButton');
                let sideNavContent = document.getElementById("sideNavContent");
                this.screenWidth <= 1023 ? this.$showMobileNav(closeNavWithOverlay, sideNavContent, navToggle) : "";
            }
        },
        assignBusinessData: function () {
            let businessData = this.GetBusinessData();
            this.businessId = businessData.businessId
            this.businessLogo = businessData.logo.length > 0 ? this.$getBusinessLogoUrl(this.businessId, businessData.logo) : ""
            this.businessName = businessData.businessName
            this.reviewScore = businessData.reviewScore
            this.username = businessData.username
        },
		getNameLogo: function (businessName) {
			if (process.browser) {
				let name =  this.$convertNameToLogo(businessName)
				return name
			}
        },
        _initMethod: function () {
            // open modal
            let openModalAction = document.querySelectorAll("[data-trigger]");
            for (const action of openModalAction) {
                action.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.openedModalTarget = action.getAttribute('data-target');
                    this.$openModal(this.openedModalTarget);
                })
            }

            // close modal with icon
            let closeModalAction = document.querySelectorAll('[data-dismiss]');
            for (const action of closeModalAction) {
                action.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.$closeModal(action.getAttribute('data-target'));
                })
            }

            // close modal with esc key
            window.onkeyup = (e) => {
                e.preventDefault();
                if (e.keyCode == 27) {
                    if (document.querySelector('.overflow-hidden') !== null) {
                        // .. it exists so remove modal
                        this.$closeModal(this.openedModalTarget);
                    }
                }
            }

            // close modal by clicking outside the modal window
            window.addEventListener("click", (e) => {
                for (const action of document.querySelectorAll(".modal-container")) {
                    if (e.target === action) {
                        this.$closeModal(this.openedModalTarget);
                    }
                }
            });

            // tabs
            let Tabs = document.querySelectorAll("#tabList > #tabLink");
            for (let i = 0; i < Tabs.length; i++) {
                Tabs[i].addEventListener("click", (e) => {
                    this.$myTabClicks(e, Tabs)
                })
            }

            // single drop down
            let singleTabClick = document.querySelectorAll('[data-single-tab]');
            for (const action of singleTabClick) {
                action.addEventListener('click', (e) => {
                    e.preventDefault();
                    let getTarget = e.target;
                    let singleTabContainer = document.getElementById(getTarget.getAttribute('data-target'));
                    singleTabContainer.classList.toggle(`showEffect`);
                })
            }

            // accordion
            let accordionItem = document.getElementsByClassName('js-accordionItem');
            let accordionHeader = document.getElementsByClassName('js-accordionHeader');
            for (let i = 0; i < accordionHeader.length; i++) {
                accordionHeader[i].addEventListener('click', (e) => {
                    this.$toggleAccordion(accordionHeader[i], accordionItem)
                }, false);
            }

            document.querySelector("body").classList.remove("overflow-hidden");
        }
    },
    mounted () {
        if (process.client) {
            this._initMethod()
            // this.closeNav()
        }
    }
}
</script>
<style scoped>
.small-invite-tip {
    font-size: 12px;
    margin-left: 8px;
}
</style>