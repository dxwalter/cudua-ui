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

        <div class="content-container">
            <!-- bookmark area -->
            <div class="section-header"><h4>Edit your profile</h4></div>
            <!-- content start here -->
                <div class="edit-profile-container card">

                    <div class="edit-profile-section">
                        <a href="#" class="header-area">
                            <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="editBasic">
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
                        <div class="edit-profile-content" id="editBasic">
                            <!-- content here -->
                            <div class="edit-logo-container">
                                <div class="edit-profile-logo">
                                    <div class="no-logo-review" v-show="!displayPicture">
                                        {{getNameLogo(fullname)}}
                                    </div>
                                    <img src="~/assets/customer/image/daniel chigisoft.jpg" alt="">
                                    <div id="previewBusinessLogo" class="edit-logo-preview"></div>
                                </div>
                                <div class="upload-action">
                                    <input type="file" id="selectimage" ref="logoUpload" @change="uploadLogoImage($event, 'previewBusinessLogo')">

                                    <button class="btn btn-white btn-small">Select picture</button>
                                </div>
                                <div v-show="LogoProgressProps"><PROGRESS :count-down-time=LogoProgressProps></PROGRESS></div>
                            </div>

                            <div class="form-control">
                                <label for="businessType" class="form-label">Fullname</label>
                                <input type="text" name="editFullname" id="editFullname" class="input-form" v-model="fullname">
                            </div>

                            <div class="form-control">
                                <button class="btn btn-block btn-primary" type="button" id="updateProfileName" @click="updateProfileName($event)">
                                    Update basic profile
                                    <div class="loader-action"><span class="loader"></span></div>
                                </button>
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
                                <input type="email" name="editProfileEmail" id="editProfileEmail" class="input-form" placeholder="Email address" v-model="email">
                            </div>

                            <div class="form-control">
                                <!-- <label for="businessType" class="form-label">Phone number</label> -->
                                <input type="number" name="editProfilePhone" id="editProfilePhone" class="input-form" placeholder="Phone number" v-model="phone">
                            </div>


                            <div class="form-control">
                                <button class="btn btn-block btn-primary" type="button" id="editCustomerContact" @click="editCustomerContact()">
                                    Update contact
                                    <div class="loader-action"><span class="loader"></span></div>
                                </button>
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

                        <div class="form-control" v-show="address.street">
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
                                <div class="recent-search-list-container">
                                    <a href="#">
                                        <div class="info-area">
                                            <span data-v-7ddc3330="">Searching for</span> th
								        </div>
                                        <div class="loader-container">
                                            <div class="loader-action"><span class="loader" data-v-7ddc3330=""></span></div>
                                        </div>
                                    </a>
                                 </div>
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
import PROGRESS from '~/components/progress/progress.vue'

import { mapActions, mapGetters, mapMutations } from 'vuex';

import { 
    UPLOAD_CUSTOMER_DP,
    EDIT_CUSTOMER_NAME,
    EDIT_CUSTOMER_CONTACT
} from '~/graphql/customer'

export default {
    components: {
      DESKTOPNAVGATION, MOBILENAVIGATION, MOBILESEARCH, BOTTOMADS, CUSTOMERFOOTER, PAGELOADER, PROGRESS
    },
    name: "EDITCUSTOMERPROFILE",
    data: function() {
        return {
            pageLoader: true,
            displayPicture: "",
            fullname: "",
            email: "",
            phone: "",
            notificationStatus: "",
            LogoProgressProps: 0,
            userId: "",
            address: {
                number: "",
                street: "",
                community: "",
                lga: "",
                state: "",
                country: ""
            },
            accessToken: ""
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
            this.notificationStatus = customerData.emailNotification
            this.accessToken = customerData.userToken
        },
        uploadLogoImage: async function(e, preivewData) {
            let file = e.target.files[0];
            let uploadFile = e.target.files[0];

            if (uploadFile == undefined) return

            let fileValidation = this.$checkFileExtension(uploadFile.name);

            if (fileValidation == false) {
                this.$initiateNotification('info', "", "Choose a valid image for your profile picture")
                return
            } 


            this.$previewImage(e, preivewData);

            return

            let variables = { 
                businessId: this.businessId,
                file: uploadFile
            }

            let context = {
                hasUpload: true,
                headers: {
                    'accessToken': this.accessToken
                }
            }

            
            this.LogoProgressProps = this.imageFileProgress(uploadFile.size);

            let request = await this.$performGraphQlMutation(this.$apollo, EDIT_BUSINESS_LOGO, variables, context);

            this.LogoProgressProps = 0;

            if (request.error == true) {
                // reset input
                this.$refs.logoUpload.value=null;
                this.$initiateNotification('error', 'Failed request', 'A network error occurred');
                return
			}

            let result = request.result.data.EditBusinesslogo

            if (!result.success) {
                this.$refs.logoUpload.value=null;
                this.$initiateNotification('error', "Failed upload", result.message)
                return
            }
                
        },
        updateProfileName: async function () {
            
            if (this.fullname.length < 3) {

                this.$showToast("Your fullname must be greater than 2 characters", 'error');
                this.$addRedBorder('editFullname')
                return
            } else {
                this.$removeRedBorder('editFullname')
            }

            let target = document.getElementById('updateProfileName');

            let variables = {
                fullname: this.fullname
            }

            let context = {
                hasUpload: true,
                headers: {
                    'accessToken': this.accessToken
                }
            }

            target.disabled = true

            let request = await this.$performGraphQlMutation(this.$apollo, EDIT_CUSTOMER_NAME, variables, context);

            target.disabled = false

            if (request.error) {
                return this.$initiateNotification('error', "Failed upload", request.message)
            }

            let result = request.result.data.editCustomerName

            if (result.success == false) {
                return  this.$initiateNotification('error', "Oops!", result.message)
            }

            this.$initiateNotification('success', "Profile Updated", result.message)


            this.$store.dispatch('customer/setCustomerData', {
                    fullname: this.fullname
            })
        },
        editCustomerContact: async function () {

            if(this.email.length < 5) {
                this.$showToast("Enter a valid email address", 'error');
                this.$addRedBorder('editProfileEmail')
                return
            } else {
                this.$removeRedBorder('editProfileEmail')
            }

            if (this.phone.length < 11) {
                this.$showToast("Enter a valid phone number", 'error');
                this.$addRedBorder('editProfilePhone')
                return
            } else {
                this.$removeRedBorder('editProfilePhone')
            }


            let target = document.getElementById('editCustomerContact');

            let variables = {
                email: this.email,
                phone: this.phone
            }

            let context = {
                hasUpload: true,
                headers: {
                    'accessToken': this.accessToken
                }
            }

            target.disabled = true

            let request = await this.$performGraphQlMutation(this.$apollo, EDIT_CUSTOMER_CONTACT, variables, context);

            target.disabled = false

            if (request.error) {
                return this.$initiateNotification('error', "Failed upload", request.message)
            }

            let result = request.result.data.editUserContact

            if (result.success == false) {
                return  this.$initiateNotification('error', "Oops!", result.message)
            }

            this.$initiateNotification('success', "Profile Updated", result.message)


            this.$store.dispatch('customer/setCustomerData', {
                    phone: this.phone,
                    email: this.email,
            })
            

        }
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
        this.pageLoader = false
    }
}
</script>
<style scoped>
.recent-search-list-container {
    position: relative !important;
}
</style>