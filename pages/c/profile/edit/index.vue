<template>
  <div class="customer">
    <div class="body-container grey-bg-color">

        <!-- beginning of navigation container -->
        <div class="nav-container">
            <MOBILESEARCH></MOBILESEARCH>
            <Nuxt />
            <DESKTOPNAVGATION></DESKTOPNAVGATION>
            <Nuxt />
            <MOBILENAVIGATION></MOBILENAVIGATION>
            <Nuxt />
        </div>

        <!-- pageLoader -->
        <PAGELOADER v-show="pageLoader"></PAGELOADER>
        <Nuxt />

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
                                    <img :src="displayPicture" alt="" >
                                    <div id="previewBusinessLogo" class="edit-logo-preview"></div>
                                </div>
                                <div class="upload-action">
                                    <input type="file" id="selectimage" ref="dpUpload" @change="uploadLogoImage($event, 'previewBusinessLogo')" accept="image/png,image/jpg,image/jpeg">

                                    <button class="btn btn-white btn-small">Select picture</button>
                                </div>
                                <div v-show="LogoProgressProps">
                                    <PROGRESS :count-down-time=LogoProgressProps></PROGRESS>
                                    <Nuxt />    
                                </div>
                            </div>

                            <div class="form-control">
                                <!-- <label for="businessType" class="form-label">Fullname</label> -->
                                <input type="text" name="editFullname" id="editFullname" class="input-form" v-model="fullname" placeholder="Fullname">
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
                                {{address.number}} {{address.street}} {{address.community}}, {{address.state}}.
                            </div>
                        </div>

                        <div class="form-control">
                            <div class="" id="">
                            <div class="mg-bottom-16">
                                <!-- <label for="businessType" class="form-label">Street number</label> -->
                                <input type="number" name="" id="customerStreetNumber" class="input-form" placeholder="Street number" v-model="customerStreetNumber"  @keydown="validateStreetNumber">
                            </div>
                            <div class="mg-bottom-16">
                                <!-- <label for="businessType" class="form-label">Type the name of your street</label> -->
                                <input type="text" name="" id="customerStreet" class="input-form" placeholder="Type the name of your street" v-model="customerStreet"  autocomplete="off">
                                <div class="recent-search-list-container" id="streetSearchSuggestionAnimation" v-show="customerStreet.length > 1 && streetSuggestion.length == 0">
                                    <a href="#">
                                        <div class="info-area">
                                            <span>Searching for</span> {{customerStreet}}
								        </div>
                                        <div class="loader-container">
                                            <div class="loader-action"><span class="loader"></span></div>
                                        </div>
                                    </a>
                                </div>

                                <div class="recent-search-list-container" v-show="customerStreet.length > 1 && noStreetSuggestionResult == 0" id="streetSearchSuggestion">
                                    <div v-for="(suggestion, index) in streetSuggestion" :key="index">
                                        <div @click="setStreetID(suggestion.streetId, suggestion.streetName, 'streetSearchSuggestion')" class="action-content">
                                            {{suggestion.streetName}} <span>- {{suggestion.community.name}}</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="recent-search-list-container" v-show="customerStreet.length > 1 && noStreetSuggestionResult == 1">
                                    <a href="#">
                                        <div class="info-area">
                                            <span>No result was found</span>
								        </div>
                                    </a>
                                </div>
                                
                                 <a href="#" target="" class="mg-top-8 display-block font-14" data-trigger="modal" data-target="addNewLocation" v-show="(customerStreet.length > 1 && noStreetSuggestionResult == 1) && customerStreet.length > 0">Add your home street. <span class="action-span">Add it</span></a>
                            </div>
                            <div class="">
                                <!-- <label for="businessType" class="form-label">Type the name of your street</label> -->
                                <input type="text" name="" id="customerBusStop" class="input-form" placeholder="Closest bus stop" v-model="closestBusStop" autocomplete="off">
                            </div>
                            </div>
                        </div>
                        <div class="form-control">
                            <button class="btn btn-block btn-primary" type="button" id="updateAddress" @click="updateAddress()">
                                Update address
                                <div class="loader-action"><span class="loader"></span></div>
                            </button>
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
                            <!-- <label for="businessType" class="form-label">Current password</label> -->
                            <input type="password" name="" id="currentPasswordInput" class="input-form" v-model="currentPassword" placeholder="Current password">
                            </div>
                            <div class="form-control">
                            <!-- <label for="businessType" class="form-label">New password</label> -->
                            <input type="password" name="" id="newPassword" class="input-form" v-model="newPassword" placeholder="New password">
                            </div>
                            <div class="form-control">
                            <!-- <label for="businessType" class="form-label">Confirm oassword</label> -->
                            <input type="password" name="" id="confirmNewPassword" class="input-form" v-model="confirmNewPassword" placeholder="Confirm password">
                            </div>
                            <div class="form-control">
                            <button class="btn btn-block btn-primary" type="button" @click="editCustomerPassword()" id="editCustomerPassword">
                                Change password
                                <div class="loader-action"><span class="loader"></span></div>    
                            </button>
                            </div> 
                        </div>
                    </div>



                    <div class="edit-profile-section display-none">
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
                                <span class="form-label" v-show="notificationStatus == 0">Activate email notification</span>
                                <span class="form-label" v-show="notificationStatus == 1">Deactivate email notification</span>
                                <label class="switch">
                                    <input type="checkbox" v-model="notificationStatus" @change="editEmailNotification()">
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
      <Nuxt />
      <CUSTOMERFOOTER></CUSTOMERFOOTER>
      <Nuxt />
      <ADDLOCATION></ADDLOCATION>
      <Nuxt />
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
import ADDLOCATION from '~/components/location/add.location.vue'
import PROGRESS from '~/components/progress/progress.vue'

import { mapActions, mapGetters, mapMutations } from 'vuex';

import { SEARCH_FOR_STREET } from '~/graphql/location'

import { 
    UPLOAD_CUSTOMER_DP,
    EDIT_CUSTOMER_NAME,
    EDIT_CUSTOMER_CONTACT,
    EDIT_CUSTOMER_PASSWORD,
    EDIT_CUSTOMER_ADDRESS
} from '~/graphql/customer'

export default {
    components: {
      DESKTOPNAVGATION, MOBILENAVIGATION, MOBILESEARCH, BOTTOMADS, CUSTOMERFOOTER, PAGELOADER, PROGRESS, ADDLOCATION
    },
    name: "EDITCUSTOMERPROFILE",
    data: function() {
        return {
            pageLoader: true,
            displayPicture: "",
            fullname: "",
            email: "",
            phone: "",
            notificationStatus: 0,
            LogoProgressProps: 0,
            userId: "",
            address: {
                number: "",
                street: "",
                community: "",
                state: "",
            },
            accessToken: "",
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: "",
            customerStreetNumber: 1,
            customerStreet: "",
            customerStreetId: "",
            closestBusStop: "",
            community: "",
            state: "",
            setTimeout: null,
            streetSuggestion: "",
            noStreetSuggestionResult: 0
        }
    },
    beforeDestroy() {
        this.clearTimeout()
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
    watch: {
        customerStreet: async function () {
            if (this.customerStreet.length > 1) {
                this.noStreetSuggestionResult = 0
               await this.searchStreetData()
            }
        }
    },
    methods: {
        searchStreetData: async function () {

            this.clearTimeout();

            let variables = {
                keyword: this.customerStreet
            }

            this.setTimeout = setTimeout(async () => {
                
                let request = await this.$performGraphQlQuery(this.$apollo, SEARCH_FOR_STREET, variables, {});
                
                if (request.error) {
                    this.$showToast("Network error", 'error')
                    return
                }

                let result = request.result.data.GetStreet;
                if (result.success) {
                    if (result.streetData != null) {
                        this.streetSuggestion = result.streetData
                        
                    } else {
                        this.noStreetSuggestionResult = 1
                        document.getElementById('streetSearchSuggestionAnimation').style.display = 'none'
                    }
                }

            }, 1000);

        },
        setStreetID: function (streetId, streetName, suggestionBoxId) {
            document.getElementById(suggestionBoxId).style.display = 'none'
            this.customerStreetId = streetId
            this.customerStreet = streetName
        },
        validateStreetNumber: function () {
            if (this.customerStreetNumber == '0') {
                this.customerStreetNumber = ""
                this.customerStreetNumber = 1
            }
        },
        updateAddress: async function () {

            if (this.customerStreetNumber < 1) {
                this.$showToast('Enter your house number', 'error', 6000);
                this.$addRedBorder('customerStreetNumber');
                return
            } else {
                this.$removeRedBorder('customerStreetNumber')
            }


            if (this.customerStreet.length > 0) {
                let check = 0;
                for (let x of this.streetSuggestion) {
                    if (x.streetName.toLowerCase() == this.customerStreet.toLowerCase()) {
                        this.customerStreetId = x.streetId
                        this.community = x.community.name
                        this.state = x.state.name

                        check = 1

                        break
                    }
                }
                if (check == 0) {
                    this.$addRedBorder('customerStreet')
                    this.$showToast("The street you chose does not exist on this app. kindly add it", "info", 6000);
                    return
                } else {
                    this.$removeRedBorder('customerStreet')
                }
            } else {
                this.$addRedBorder('customerStreet')
                this.$showToast("Enter the name of your street", "error", 6000);
                return
            }

            // when street id is set and street name is not
            if (this.customerStreetId.length < 1) {
                this.$addRedBorder('customerStreet')
                this.$showToast("Enter the name of your street", "error", 6000);
                return
            } else {
                this.$removeRedBorder('customerStreet')
            }

            if (this.closestBusStop.length < 1) {
                this.$addRedBorder('customerBusStop')
                this.$showToast("Enter the name of the closest bus stop to your house", "error", 6000);
                return
            } else {
                this.$removeRedBorder('customerBusStop')
            }


            let target = document.getElementById('updateAddress');

            let variables = {
                streetNumber: parseInt(this.customerStreetNumber, 10),
                streetId: this.customerStreetId,	
                busStop: this.closestBusStop
            };

            let context = {
                headers: {
                    accessToken: this.accessToken
                }
            }

            target.disabled = true

            let request = await this.$performGraphQlMutation(this.$apollo, EDIT_CUSTOMER_ADDRESS, variables, context);
            
            target.disabled = false

            if (request.error) {
                this.$initiateNotification('error', "Network Error", request.message)
                return
            }

            let result = request.result.data.editCustomerAddress;

            if (result.success) {
                this.$initiateNotification('success', "Profile updated", result.message)

                this.$store.dispatch('customer/setCustomerData',{
                    address: {
                        number: this.customerStreetNumber.toString(),
                        busStop:this.closestBusStop,
                        street: this.customerStreet,
                        community: this.community,
                        state: this.state,
                    }
                });


                this.address.number = this.customerStreetNumber
                this.address.street = this.customerStreet
                this.address.community = this.community
                this.address.state = this.state

            } else {
                this.$initiateNotification('error', "Update error", result.message)
            }


        },
        clearTimeout: function() {
            clearTimeout(this.setTimeout)
        },
		getNameLogo: function (businessName) {
			if (process.browser) {
				return this.$convertNameToLogo(businessName)
			}
        },
        imageFileProgress: function (size) {
            let count = 0;

            if (size == 1) count = 20;
            if (size >= 2) count = 30;

            return count
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

            // customer address
            this.address.number = customerData.address.number
            this.address.street = customerData.address.street
            this.address.community = customerData.address.community
            this.address.state = customerData.address.state

            this.closestBusStop = customerData.address.busStop
            this.customerStreetNumber = customerData.address.number
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

            let request = await this.$performGraphQlMutation(this.$apollo, UPLOAD_CUSTOMER_DP, variables, context);

            this.LogoProgressProps = 0;

            if (request.error == true) {
                // reset input
                this.$refs.dpUpload.value=null;
                this.$initiateNotification('error', 'Failed request', 'A network error occurred');
                return
			}

            let result = request.result.data.editCustomerDP

            if (!result.success) {
                this.$refs.dpUpload.value=null;
                this.$initiateNotification('error', "Failed upload", result.message)
                return
            }

            this.$initiateNotification('success', "Image uploaded", result.message)

            this.$store.dispatch('customer/setCustomerData', {
                displayPicture: result.imagePath
            })
                
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
            

        },
        editCustomerPassword: async function () {

            if (this.currentPassword.length < 1) {
                this.$showToast("Enter your current password", 'error', 6000);
                this.$addRedBorder('currentPasswordInput')
                return
            } else {
                this.$removeRedBorder('currentPasswordInput')
            }

            if (this.newPassword.length < 6) {
                this.$showToast('Your new password must be greater than 5 characters', 'error', 6000);
                this.$addRedBorder('newPassword');
                return
            } else {
                this.$removeRedBorder('newPassword')
            }


            if (this.newPassword !== this.confirmNewPassword) {
                this.$showToast('Your confirmed password does not match with your new password', 'error', 6000)
                this.$addRedBorder('newPassword');
                this.$addRedBorder('confirmNewPassword');
                return
            } else {
                this.$removeRedBorder('newPassword');
                this.$removeRedBorder('confirmNewPassword');
            }

            let target = document.getElementById('editCustomerPassword')

            let variables = {
                oldPassword: this.currentPassword,
                newPassword: this.newPassword
            }

            let context = {
                hasUpload: true,
                headers: {
                    'accessToken': this.accessToken
                }
            }

            target.disabled = true

            let request = await this.$performGraphQlMutation(this.$apollo, EDIT_CUSTOMER_PASSWORD, variables, context);

            target.disabled = false

            if (request.error) {
                return this.$initiateNotification('error', "Failed upload", request.message)
            }

            let result = request.result.data.editCustomerPassword

            if (result.success == false) {
                return  this.$initiateNotification('error', "Oops!", result.message)
            }

            this.$initiateNotification('success', "Password Updated", result.message)
        },
        editEmailNotification: async function () {

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
    z-index: auto;
}
.font-14 {
    font-size: 14px;
}
.mg-top-8 {
    margin-top: 8px;
    display: block;
}
.action-span {
    color: rgb(238 100 37);
    margin-left: 10px;
    font-weight: 500;
}
</style>