<template>
  <div class="side-nav-container" id="sideNav">
        <!-- the .js-fold-nav class along-with .side-nav-content folds
        the navigation bar -->
        <div class="side-nav-content" id="sideNavContent">

            <div class="side-nav-logo-area" >
                <n-link to="/b/profile/" class="side-nav-logo">
                    <img src="~/assets/business/image/apple-logo.png" alt="">
                </n-link>
                <div class="nav-name">
                    <h4 class="side-nav-biz-name"><n-link to="/b/profile">Oremit Power Solution Limited</n-link></h4>
                        <div>
                            <a href="javasscript:;" class="nav-username display-flex" data-trigger="modal" data-target="changeUsername">
                                <span>@appleComputer</span>
                                <span class="username-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11.054" height="20">
                                        <use xlink:href="~/assets/business/image/all-svg.svg#pencil"></use>
                                    </svg>                                      
                                </span>
                            </a>
                            <a href="javasscript:;" class="navbar-review-icon" data-trigger="modal" data-target="reviewModal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                    <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                    <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                    <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                    <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                    <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                </svg>
                            </a>
                        </div>
                </div>
            </div>
            
            <n-link to="/b" class="nav-link-items ">
                <div class="nav-icon-text">
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <use xlink:href="~/assets/business/image/all-svg.svg#productIcon"></use>
                    </svg>
                    <span>Products</span>
                </div>
            </n-link>

            <n-link to="/b/orders" class="nav-link-items is-active">
                <div class="nav-icon-text">
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <use xlink:href="~/assets/business/image/all-svg.svg#order"></use>
                    </svg>
                    <span>New orders</span>
                </div>

                <div class="notif-point">10</div>
            </n-link>

            <n-link to="/b/categories" class="nav-link-items ">
                <div class="nav-icon-text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21">
                        <use xlink:href="~/assets/business/image/all-svg.svg#categories"></use>
                    </svg>
                    
                    <span>Categories</span>
                </div>
            </n-link>

            <n-link to="/b/followers" class="nav-link-items ">
                <div class="nav-icon-text">
                    <svg height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
                        <use xlink:href="~/assets/business/image/all-svg.svg#followers"></use>
                    </svg>                          
                    <span>Followers (30)</span>
                </div>
            </n-link>

            <n-link to="/b/notification" class="nav-link-items ">
                <div class="nav-icon-text">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                        <use xlink:href="~/assets/business/image/all-svg.svg#globe"></use>
                    </svg>                          
                    <span>Notification</span>
                </div>
            </n-link>


            <n-link to="/b/dashboard" class="nav-link-items ">
                <div class="nav-icon-text">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <use xlink:href="~/assets/business/image/all-svg.svg#dashboard"></use>
                    </svg>
                    <span>Analytics</span>
                </div>
            </n-link>

            <n-link to="/b/profile" class="nav-link-items">
                <div class="nav-icon-text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18.505" viewBox="0 0 18 18.505">
                        <use xlink:href="~/assets/business/image/all-svg.svg#profile"></use>
                    </svg>
                    <span>Profile</span>
                </div>
            </n-link>

            <n-link to="#" class="nav-link-items">
                <div class="nav-icon-text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                        <use xlink:href="~/assets/business/image/all-svg.svg#logout"></use>
                    </svg>
                    <span>Logout</span>
                </div>
            </n-link>
            
        </div>
    
        <BUSINESSREVIEW />
        <nuxt />

        <USERNAMEMODAL />
        <nuxt />
  </div>
</template>

<script>
import BUSINESSREVIEW from '~/layouts/business/modals/business.review.vue';
import USERNAMEMODAL from '~/layouts/business/modals/username.vue';
export default {
    components: {
        BUSINESSREVIEW, USERNAMEMODAL
    }
}
</script>

<style>

</style>