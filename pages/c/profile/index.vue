<template>
  <div class="customer">
    <div class="body-container grey-bg-color">

        <!-- beginning of navigation container -->
        <div class="nav-container">
            <MOBILESEARCH></MOBILESEARCH>
            <DESKTOPNAVGATION></DESKTOPNAVGATION>
            <MOBILENAVIGATION></MOBILENAVIGATION>
        </div>

        <!-- pageLoader -->
        <PAGELOADER v-if="pageLoader"></PAGELOADER>

        <div class="content-container-second">
            <!-- content-here -->
                <div>
                    <!-- profile banner -->
                    <div class="profile-banner-area">
                        <div class="profile-edit-btn-area">
                            <n-link to="/c/profile/edit" class="close-modal-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <use xlink:href="~/assets/customer/image/all-svg.svg#pencil"></use>
                                </svg>
                            </n-link>
                        </div>
                        <div class="profile-dp">
                            <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                        </div>
                        <div class="profile-name">Daniel Walter</div>
                    </div>
                    
                    <!-- profile navigation -->
                    <div class="profile-page-nav">
                        <n-link to="/c/cart" class="profile-page-nav-item">
                            <svg xmlns="http://www.w3.org/2000/svg">
                                <use xlink:href="~/assets/customer/image/all-svg.svg#order"></use>
                            </svg>
                            <div>My cart <span>(5)</span></div>
                        </n-link>
                        <n-link to="/c/orders" class="profile-page-nav-item">
                            <svg xmlns="http://www.w3.org/2000/svg">
                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                            </svg>
                            <div>My orders</div>
                        </n-link>
                        <n-link to="/c/saved-items" class="profile-page-nav-item">
                            <svg xmlns="http://www.w3.org/2000/svg">
                                <use xlink:href="~/assets/customer/image/all-svg.svg#heart"></use>
                            </svg>
                            <div>Saved items</div>
                        </n-link>
                    </div>
                    
                    <!-- profile details -->
                    <div class="profile-details-items">
                        <div class="profile-details-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                                <use xlink:href="~/assets/customer/image/all-svg.svg#phone"></use>
                            </svg>
                            <span>08104685729</span>
                        </div>
                        <div class="profile-details-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                                <use xlink:href="~/assets/customer/image/all-svg.svg#email"></use>
                            </svg>
                            <span>walter@danielwalter.me</span>
                        </div>
                        <div class="profile-details-item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <use xlink:href="~/assets/customer/image/all-svg.svg#mapPlace"></use>
                            </svg>
                            <span>56 Igbogo road Choba, Rivers state</span>
                        </div>
                    </div>
                    
                    <!-- profile actions -->
                    <div class="profile-action-container">
                        <n-link  to="/" class="btn btn-white">Visit shop</n-link>
                        <n-link to="/c/profile/edit" class="btn btn-white">Edit profile</n-link>
                    </div>
                </div>
        </div>
      <!-- end of content container -->

      <!-- footer area -->

      <BOTTOMADS></BOTTOMADS>

      <CUSTOMERFOOTER></CUSTOMERFOOTER>

    </div>
  </div>
</template>

<script>
import MOBILENAVIGATION from '~/layouts/customer/mobile-navigation.vue';
import DESKTOPNAVGATION from '~/layouts/customer/desktop-navigation.vue';
import MOBILESEARCH from '~/layouts/customer/mobile-search.vue';
import BOTTOMADS from '~/layouts/customer/buttom-ads.vue';
import CUSTOMERFOOTER from '~/layouts/customer/customer-footer.vue';
import PAGELOADER from '~/components/loader/loader.vue';

import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
    components: {
      DESKTOPNAVGATION, MOBILENAVIGATION, MOBILESEARCH, BOTTOMADS, CUSTOMERFOOTER, PAGELOADER
    },
    data: function() {
        return {
            pageLoader: true,
        }
    },
    computed: {
		...mapGetters({
			'GetLoginStatus': 'customer/GetLoginStatus'
        }),
		LoginStatus () {
			return this.GetLoginStatus
		}
    },
    created: async function () {
		if (process.browser) {
            let status = this.LoginStatus
            if (status == false) return this.$router.push('/')
		}

    },
    mounted () {
        setTimeout(() => {
            this.pageLoader = false
        }, 5000);
    }
}
</script>