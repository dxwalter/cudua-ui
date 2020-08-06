<template>
  <div class="top-nav-bar">
        
        <div class="d-flex">
            <button class="nav-toggle-btn hamburger hamburger--spring" id="navToggleButton" data-toggle-status="0" v-on:click="toggleNavBar">
                <div class="notif-point">10</div>
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
            <n-link to="/b/" class="nav-logo">
                <img src="~/assets/business/image/cudua-logo-icon.svg" alt="">
                <img src="~/assets/business/image/cudua-logo-full.svg" alt="">
            </n-link>
        </div>

        <div class="nav-links d-flex">
            <n-link to="#" class="btn btn-white btn-icon">
                <input type="checkbox" name="" class="dropdownCheckBox" data-single-tab="singleTab" data-target="navNotification">
                <div class="notif-point">10</div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <use xlink:href="~/assets/business/image/all-svg.svg#globe"></use>
                </svg> 
            </n-link>
            <n-link to="/c/:cudua" class="btn btn-white btn-md">Visit shop</n-link>
            <n-link to="/b/product/add-product" class="btn btn-primary btn-md">Add products</n-link>
        </div>

        <div class="nav-notification-container product-card" id="navNotification">
            <div class="notification-dd-header">
                <h3>Notification</h3>
                <n-link to="edit-business-profile.html" class="btn btn-small btn-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18.505" viewBox="0 0 18 18.505">
                        <use xlink:href="~/assets/business/image/all-svg.svg#profile"></use>
                    </svg>
                </n-link>
            </div>
            <n-link to="#" class="chat-recipient">
                <div class="chat-recipient-img">
                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
                </div>
                <div class="last-chat-details">
                    <div class="chat-time-recipient">
                        <span>John Mayers</span>
                        <span>3 min ago</span>
                    </div>
                    <div class="last-chat-preview">Lorem ipsum dolor sit amet dsdf sdsd ctetur Lorem ipsum dolor sit amet </div>
                </div>
            </n-link>
            <n-link to="#" class="chat-recipient">
                <div class="chat-recipient-img">
                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
                </div>
                <div class="last-chat-details">
                    <div class="chat-time-recipient">
                        <span>John Mayers</span>
                        <span>3 min ago</span>
                    </div>
                    <div class="last-chat-preview">Lorem ipsum dolor sit amet dsdf sdsd ctetur Lorem ipsum dolor sit amet </div>
                </div>
            </n-link>
            <n-link to="#" class="chat-recipient">
                <div class="chat-recipient-img">
                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
                </div>
                <div class="last-chat-details">
                    <div class="chat-time-recipient">
                        <span>John Mayers</span>
                        <span>3 min ago</span>
                    </div>
                    <div class="last-chat-preview">Lorem ipsum dolor sit amet dsdf sdsd ctetur Lorem ipsum dolor sit amet </div>
                </div>
            </n-link>
            <n-link to="#" class="chat-recipient">
                <div class="chat-recipient-img">
                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
                </div>
                <div class="last-chat-details">
                    <div class="chat-time-recipient">
                        <span>John Mayers</span>
                        <span>3 min ago</span>
                    </div>
                    <div class="last-chat-preview">Lorem ipsum dolor sit amet dsdf sdsd ctetur Lorem ipsum dolor sit amet </div>
                </div>
            </n-link>
            <n-link to="#" class="chat-recipient">
                <div class="chat-recipient-img">
                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
                </div>
                <div class="last-chat-details">
                    <div class="chat-time-recipient">
                        <span>John Mayers</span>
                        <span>3 min ago</span>
                    </div>
                    <div class="last-chat-preview">Lorem ipsum dolor sit amet dsdf sdsd ctetur Lorem ipsum dolor sit amet </div>
                </div>
            </n-link>
            <n-link to="/b/notification" class="chat-recipient text-center display-block">
                All notifications
            </n-link>
        </div>

        <BUSINESSREVIEW />
        <nuxt />
        <USERNAMEMODAL />
        <nuxt />
  </div>
</template>

<script>
import META from '~/nuxt.config.js'
import BUSINESSREVIEW from '~/layouts/business/modals/business.review.vue';
import USERNAMEMODAL from '~/layouts/business/modals/username.vue';
export default {
    components: {
        BUSINESSREVIEW, USERNAMEMODAL
    },
    data: function () {
        return {
            metaTag: META.head,
            screenWidth: ""
        }
    },
    head() {
        this.metaTag
    },
    created() {
        if (process.client) {
            window.addEventListener('resize', this.handleResize);
        }
    },

    computed: {
        handleResize() {
            this.screenWidth = window.innerWidth;
        }
    },
    methods : {
        toggleNavBar: function () {
            let navToggle = document.getElementById('navToggleButton');
            let sideNav = document.getElementById('sideNav');
            let sideNavContent = document.getElementById("sideNavContent");
            this.screenWidth <= 1023 ? this.$showMobileNav(sideNav, sideNavContent, navToggle) : sideNav.classList.toggle('js-fold-nav');
        }
    },
    mounted () {
        
    }
}
</script>

<style>

</style>