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
        <PAGELOADER v-show="pageLoader"></PAGELOADER>

        <div class="content-container-second" v-show="!pageLoader">
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
                            <div class="no-logo-review" v-show="!displayPicture">
                                {{getNameLogo(fullname)}}
                            </div>
                            <img :src="displayPicture" alt="" >
                        </div>
                        <div class="profile-name">{{fullname}}</div>
                    </div>
                    
                    <!-- profile navigation -->
                    <div class="profile-page-nav">
                        <n-link to="/c/cart" class="profile-page-nav-item">
                            <svg xmlns="http://www.w3.org/2000/svg">
                                <use xlink:href="~/assets/customer/image/all-svg.svg#order"></use>
                            </svg>
                            <div>My cart</div>
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
                            <span v-show="phone.length > 0">{{phone}}</span>
                            <span v-show="phone.length == 0">Not available</span>
                        </div>
                        <div class="profile-details-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                                <use xlink:href="~/assets/customer/image/all-svg.svg#email"></use>
                            </svg>
                            <span v-show="email.length > 0">{{email}}</span>
                            <span v-show="email.length == 0">Not available</span>
                        </div>
                        <div class="profile-details-item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <use xlink:href="~/assets/customer/image/all-svg.svg#mapPlace"></use>
                            </svg>
                            <span v-show="address.street.length > 0">{{address.number}} {{address.street}} {{address.community}}, {{address.state}}.</span>
                            <span v-show="address.street.length == 0">Your home addresses has not been added.</span>
                        </div>
                    </div>
                    
                    <!-- profile actions -->
                    <div class="profile-action-container">
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
    name: "CUSTOMERPROFILE",
    components: {
      DESKTOPNAVGATION, MOBILENAVIGATION, MOBILESEARCH, BOTTOMADS, CUSTOMERFOOTER, PAGELOADER
    },
    data: function() {
        return {
            pageLoader: true,
            fullname: "",
            userId: "",
            email: "",
            phone: "",
            displayPicture: "",
            address: {
                number: "",
                street: "",
                community: "",
                state: "",
            },
        }
    },
    computed: {
		...mapGetters({
            'GetLoginStatus': 'customer/GetLoginStatus',
            'GetCustomerData': 'customer/GetCustomerDetails'
        }),
		LoginStatus () {
			return this.GetLoginStatus
		}
    },
    methods: {
		getNameLogo: function (businessName) {
			if (process.browser) {
				return this.$convertNameToLogo(businessName)
			}
        },
        setCustomerData: function () {
            let customerData = this.GetCustomerData
            this.userId = customerData.userId
            this.displayPicture = customerData.displayPicture.length > 0 ? this.$getCustomerProfilePictureUrl(this.userId, customerData.displayPicture): ""
            this.fullname = customerData.fullname
            this.email = customerData.email
            this.phone = customerData.phone

            this.address.number = customerData.address.number
            this.address.street = customerData.address.street
            this.address.community = customerData.address.community
            this.address.state = customerData.address.state
        },
    },
    created: async function () {
		if (process.browser) {
            let status = this.LoginStatus
            if (status == false) {
                return this.$router.push('/')
            }
            this.setCustomerData()
		}

    },
    mounted () {
        setTimeout(() => {
            this.pageLoader = false
        }, 5000);
    }
}
</script>