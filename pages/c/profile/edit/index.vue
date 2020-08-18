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

        <div class="content-container">
            <!-- bookmark area -->
            <div class="section-header"><h4>Edit your profile</h4></div>
            <!-- content start here -->
                <div class="edit-profile-container card">

                    <div class="edit-profile-section">
                        <a href="#" class="header-area">
                            <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="editBasic" checked="">
                            <div class="edit-action-description accord-chip-name">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <use xlink:href="~/assets/customer/image/all-svg.svg#person"></use>
                                </svg>
                                <span>Basic</span>
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.05 13.616">
                                <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                            </svg>
                        </a>
                        <div class="edit-profile-content showEffect" id="editBasic">
                            <!-- content here -->
                            <div class="edit-logo-container">
                                <div class="edit-profile-logo">
                                    <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                                </div>
                                <div>
                                    <button class="btn btn-white">Select picture</button>
                                </div>
                            </div>

                            <div class="form-control">
                                <label for="businessType" class="form-label">Fullname</label>
                                <input type="text" name="" id="" class="input-form">
                            </div>

                            <div class="form-control">
                                <button class="btn btn-block btn-primary" type="button">Update profile</button>
                            </div>

                        </div>
                    </div>

                    <div class="edit-profile-section">
                        <a href="#" class="header-area">
                            <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="editContact">
                            <div class="edit-action-description  accord-chip-name">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <use xlink:href="~/assets/customer/image/all-svg.svg#phone"></use>
                                </svg>
                                <span>Contact</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.05 13.616">
                                <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                            </svg>
                        </a>
                        <div class="edit-profile-content" id="editContact">
                            <!-- content here -->
                            <div class="form-control">
                                <!-- <label for="businessType" class="form-label">Email address</label> -->
                                <input type="text" name="" id="" class="input-form" placeholder="Email address">
                            </div>

                            <div class="form-control">
                                <!-- <label for="businessType" class="form-label">Phone number</label> -->
                                <input type="text" name="" id="" class="input-form" placeholder="Phone number">
                            </div>


                            <div class="form-control">
                                <button class="btn btn-block btn-primary" type="button">Update profile</button>
                            </div>

                        </div>
                    </div>

                    <div class="edit-profile-section">
                    <a href="#" class="header-area">
                        <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="editAddress">
                        <div class="edit-action-description accord-chip-name">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24.706" height="21" viewBox="0 0 24.706 21">
                            <use xlink:href="~/assets/customer/image/all-svg.svg#homeIcon"></use>
                            </svg>
                            <span>Home address</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.05 13.616">
                            <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                        </svg>
                    </a>
                    <div class="edit-profile-content" id="editAddress">
                        <!-- content here -->

                        <div class="form-control">
                            <div class="upload-tab-category">
                                15 Igbogo road choba, Obio-akpor, Rivers state, Nigeria.
                            </div>
                        </div>

                        <div class="form-control">
                            <div class="" id="">
                            <div class="mg-bottom-16">
                                <!-- <label for="businessType" class="form-label">Street number</label> -->
                                <input type="number" name="" id="businessType" class="input-form" placeholder="Street number">
                            </div>
                            <div class="mg-bottom-16">
                                <!-- <label for="businessType" class="form-label">Type the name of your street</label> -->
                                <input type="text" name="" id="businessType" class="input-form" placeholder="Type the name of your street">
                            </div>
                            <div class="">
                                <!-- <label for="businessType" class="form-label">Type the name of your street</label> -->
                                <input type="text" name="" id="businessType" class="input-form" placeholder="Closest bus stop">
                            </div>
                            </div>
                        </div>
                        <div class="form-control">
                            <button class="btn btn-block btn-primary" type="button">Update address</button>
                        </div> 

                    </div>
                </div>

                    <div class="edit-profile-section">
                        <a href="#" class="header-area">
                            <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="editSecurity">
                            <div class="edit-action-description accord-chip-name">
                            <svg aria-hidden="true" viewBox="0 0 512 512">
                                    <use xlink:href="~/assets/customer/image/all-svg.svg#shield"></use>
                                </svg>
                                <span>Security</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.05 13.616">
                                <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                            </svg>
                        </a>
                        <div class="edit-profile-content" id="editSecurity">
                            <!-- content here -->
                            <div class="form-control">
                            <label for="businessType" class="form-label">Current password</label>
                            <input type="text" name="" id="" class="input-form">
                            </div>
                            <div class="form-control">
                            <label for="businessType" class="form-label">New password</label>
                            <input type="text" name="" id="" class="input-form">
                            </div>
                            <div class="form-control">
                            <label for="businessType" class="form-label">Confirm oassword</label>
                            <input type="text" name="" id="" class="input-form">
                            </div>
                            <div class="form-control">
                            <button class="btn btn-block btn-primary" type="button">Change password</button>
                            </div> 
                        </div>
                    </div>



                    <div class="edit-profile-section">
                        <a href="#" class="header-area">
                            <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="editNotification">
                            <div class="edit-action-description accord-chip-name">
                            <svg aria-hidden="true" viewBox="0 0 512 512">
                                    <use xlink:href="~/assets/customer/image/all-svg.svg#globe"></use>
                                </svg>
                                <span>Notification</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.05 13.616">
                                <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                            </svg>
                        </a>
                        <div class="edit-profile-content" id="editNotification">
                            <!-- content here -->
                            <div class="form-control">
                            <div class="email-noti-switcher d-flex-between">
                                <span class="form-label">Activate email notification</span>
                                <label class="switch">
                                    <input type="checkbox">
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </div>

                        </div>
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
import MOBILENAVIGATION from '~/layouts/customer/mobile-navigation.vue'
import DESKTOPNAVGATION from '~/layouts/customer/desktop-navigation.vue'
import MOBILESEARCH from '~/layouts/customer/mobile-search.vue'
import BOTTOMADS from '~/layouts/customer/buttom-ads.vue'
import CUSTOMERFOOTER from '~/layouts/customer/customer-footer.vue'
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
            if (status == false) this.$router.push('/')
		}

    },
    mounted () {
        setTimeout(() => {
            this.pageLoader = false
        }, 5000);
    }
}
</script>