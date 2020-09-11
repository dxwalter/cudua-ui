<template>
    <div class="business">
        <div class="body-container">
            <TOPHEADER></TOPHEADER>
            <div class="content-container">
                <SIDENAV></SIDENAV>
                    <div class="content-area grey-bg-color">
                        <PAGELOADER v-show="pageLoader"></PAGELOADER>
                        <SUBSCRIPTION></SUBSCRIPTION>

                        <div class="main-content">
                            <div class="page-header with-action">
                                <h4>Edit business profile</h4>
                                <n-link class="btn btn-light-grey btn-small" :to="`/b/profile`">Profile</n-link>
                            </div>

                            <div><!-- main content goes in here -->
                                <div class="chip-tabs" id="tabList">
                                    <a href="#" class="chip-tab-item is-active" id="tabLink" data-tab="editBasic">Basic</a>
                                    <a href="#" class="chip-tab-item" id="tabLink" data-tab="editContact">Contact</a>
                                    <a href="#" class="chip-tab-item" id="tabLink" data-tab="onlinePayment">Online payment</a>
                                    <a href="#" class="chip-tab-item" id="tabLink" data-tab="serviceSubcription">Plans & billing</a>
                                </div>

                                <div class="tab-content" id="tabContent">

                                    <!-- basic -->
                                    <div class="tab-content-area is-active" id="editBasic">
                                        
                                        <div class="edit-logo-container">
                                            <div class="edit-profile-logo">
												<div class="no-logo-review" v-show="!businessLogo">
													{{getNameLogo(businessName)}}
												</div>
                                                
												<img :src="businessLogo" alt=""  v-show="businessLogo">
                                                <div id="previewBusinessLogo" class="edit-logo-preview"></div>
											</div>
                                            <div class="upload-action">
                                                <input type="file" id="selectimage" ref="logoUpload" @change="uploadLogoImage($event, 'previewBusinessLogo')">
                                                <button class="btn btn-white btn-small">Select logo</button>
                                            </div>
                                            
                                            <div v-show="LogoProgressProps"><PROGRESS :count-down-time=LogoProgressProps></PROGRESS></div>
                                        </div>

                                        <div class="edit-logo-container">
                                            <div class="edit-profile-logo">
                                                <div class="no-logo-review" v-show="!businessCoverPhoto">
													{{getNameLogo(businessName)}}
												</div>
                                                <img :src="businessCoverPhoto" alt="" v-show="businessCoverPhoto">

                                                <div id="previewBusinessCover" class="edit-logo-preview"></div>
                                            </div>
                                            <div class="upload-action">
                                                <input type="file" id="selectLogoImage" ref="coverUpload" @change="uploadCoverPhoto($event, 'previewBusinessCover')">
                                                <button class="btn btn-white btn-small">Select cover photo</button>
                                            </div>
                                            <!-- once a logo is selected, an animated loaded is shown to tell the progress of the upload -->
                                            <div v-show="coverPhotoProgressProps"><PROGRESS :count-down-time=coverPhotoProgressProps></PROGRESS></div>
                                        </div>

                                        <div class="form-control">
                                            <!-- <label for="businessType" class="form-label">Business name <span>- optional</span></label> -->
                                            <input type="text" name="" id="businessType" class="input-form white-bg-color" placeholder="Business name" v-model="businessName">
                                        </div>

                                        <div class="form-control">
                                            <!-- <label for="businessType" class="form-label">Change your business username <span>- optional</span></label> -->
                                            <input type="text" name="" id="businessType" class="input-form white-bg-color" placeholder="Username" v-model="username">
                                        </div>

                                        <div class="form-control">
                                            <!-- <label for="businessType" class="form-label">Write about your business <span>- optional</span></label> -->
                                            <textarea name="" id="" cols="30" rows="7" class="input-form white-bg-color" placeholder="Write about your business" v-model="businessDescription"></textarea>
                                        </div>

                                        <div class="form-control">
                                            <button class="btn btn-primary btn-block" @click="updateBasicData($event)" id="updateBasicProfile">
                                                Submit update
                                                <div class="loader-action"><span class="loader"></span></div>
                                            </button>
                                        </div>

                                    </div>

                                    <!-- contact -->
                                    <div class="tab-content-area" id="editContact">

                                        <div class="edit-profile-container card">
                                            <!-- business phone numbers -->
                                            <div class="edit-profile-section">
                                                <a href="#" class="header-area">
                                                    <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="editPhoneDetails">
                                                    <div class="edit-action-description accord-chip-name">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                                            <use xlink:href="~/assets/business/image/all-svg.svg#phone"></use>
                                                        </svg>
                                                        <span>Phone numbers</span>
                                                    </div>

                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.05 13.616">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#arrowDown"></use>
                                                    </svg>
                                                </a>
                                                <div class="edit-profile-content" id="editPhoneDetails">
                                                    <!-- content here -->
                                                    <div class="form-control">
                                                        <label for="businessType" class="form-label">Add at least one or multiple phone numbers seperated by comma</label>
                                                        <textarea name="" id="" cols="30" rows="4" class="input-form" placeholder="Number 1, Number2, ..., Number N" v-model="businessPhone"></textarea>
                                                    </div>
                                                    <div class="form-control">
                                                        <button class="btn btn-primary btn-block" @click="updateBusinessPhoneNumber($event)" id="updateBusinessPhoneNumber">
                                                            Update phone number
                                                            <div class="loader-action"><span class="loader"></span></div>    
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>

                                            <!-- business email address -->
                                            <div class="edit-profile-section">
                                                <a href="#" class="header-area">
                                                    <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="editEmailDetails">
                                                    <div class="edit-action-description accord-chip-name">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                                            <use xlink:href="~/assets/business/image/all-svg.svg#email"></use>
                                                        </svg>
                                                        <span>Business email address</span>
                                                    </div>

                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.05 13.616">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#arrowDown"></use>
                                                    </svg>
                                                </a>
                                                <div class="edit-profile-content" id="editEmailDetails">
                                                    <!-- content here -->
                                                    <div class="form-control">
                                                        <input type="text" name="" id="editbusinessEmailAddress" class="input-form" placeholder="Type in your business email address" v-model="businessEmail">
                                                    </div>
                                                    <div class="form-control">
                                                        <button class="btn btn-primary btn-block" @click="updateBusinessEmail($event)" id="updateBusinessEmail">
                                                            Update email address
                                                            <div class="loader-action"><span class="loader"></span></div>    
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>

                                            <!-- business address -->
                                            <div class="edit-profile-section">
                                                <a href="#" class="header-area">
                                                    <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="editBusinessAddress">
                                                    <div class="edit-action-description accord-chip-name">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 21">
                                                            <use xlink:href="~/assets/customer/image/all-svg.svg#visitShop"></use>
                                                        </svg>
                                                        <span>Business address</span>
                                                    </div>

                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.05 13.616">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#arrowDown"></use>
                                                    </svg>
                                                </a>
                                                <div class="edit-profile-content" id="editBusinessAddress">
                                                    <!-- content here -->
                                                    <div class="form-control">
                                                        <label for="businessType" class="form-label">Street number</label>
                                                        <input type="text" name="" id="streetNumber" class="input-form"  v-model="streetNumber" @keydown="validateStreetNumber">
                                                    </div>

                                                    <div class="form-control position-relative">
                                                        <!-- <label for="businessType" class="form-label">Name of street</label> -->
                                                        <input type="text" name="" id="businessStreet" class="input-form" placeholder="Name of street" v-model="streetName" @keyup="findStreet">
                                                        <div class="recent-search-list-container" id="streetSearchSuggestion"  v-show="streetName">
                                                            <div v-for="(suggestion, index) in streetSuggestion" :key="index">
                                                                <div @click="setStreetID(suggestion.streetId, suggestion.streetName, 'streetSearchSuggestion')" class="action-content">
                                                                    {{suggestion.streetName}} <span>- {{suggestion.community.name}}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" target="" class="mg-top-8 display-block font-14" data-trigger="modal" data-target="addNewLocation">I can't find my street? <span class="action-span">Add it</span></a>
                                                    </div>

                                                    <div class="form-control">
                                                        <input type="type" name="" id="busStop" class="input-form" placeholder="Name of closest bus stop" v-model="busStop">
                                                    </div>

                                                    <div class="form-control">
                                                        <button class="btn btn-primary btn-block" id="updateBusinessAddress" @click="updateBusinessAddress">
                                                            Update business address
                                                            <div class="loader-action"><span class="loader"></span></div>
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>

                                            <!-- business support with whatsapp -->

                                            <div class="edit-profile-section">
                                                <a href="#" class="header-area">
                                                    <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="businessSupportWithWhatsapp">
                                                    <div class="edit-action-description accord-chip-name">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512">
                                                            <use xlink:href="~/assets/business/image/all-svg.svg#whatsappIcon2"></use>
                                                        </svg>
                                                        <span>Whatsapp messanger</span>
                                                    </div>

                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.05 13.616">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#arrowDown"></use>
                                                    </svg>
                                                </a>
                                                <div class="edit-profile-content" id="businessSupportWithWhatsapp">
                                                    <!-- content here -->
                                                    <div class="form-control">
                                                        <div class="email-noti-switcher">
                                                            <span class="form-label">Activate whatsapp chat</span>
                                                            <label class="switch">
                                                                <input type="checkbox" v-model="whatsappStatus">
                                                                <span class="slider round"></span>
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div class="form-control">
                                                        <label for="businessType" class="form-label">Let customers chat with you</label>
                                                        <input type="number" name="" id="businessType" class="input-form" placeholder="Type your whatsapp number" v-model="whatsappNumber">
                                                    </div>
                                                    <div class="form-control">
                                                        <button class="btn btn-primary btn-block" @click="updateBusinessWhatsappContact($event)" id="updateBusinessWhatsapp">
                                                            Update whatsapp contact
                                                            <div class="loader-action"><span class="loader"></span></div>    
                                                        </button>
                                                    </div>
                                                        
                                                </div>
                                            </div>

                                        </div>

                                    </div>


                                    <!-- online payments -->
                                    <div class="tab-content-area" id="onlinePayment">
                                        <div class="unavailable-feature">We are currently working on this feature</div>
                                        <div class="mg-bottom-32">We strongly advice you create an account with any of the payment gateways below.</div>

                                        <div>
                                            <div class="payment-gateway">
                                                <a href="https://paystack.com/" target="_blank" class="gateway">
                                                    <div class="gateway-img"><img src="~/assets/business/image/gateways/paystack.jpg" alt=""></div>
                                                    <div class="gateway-name">Paystack</div>
                                                </a>
                                                <a href="https://paystack.com/blog/product/paystack-starter-businesses" target="_blank" class="btn btn-white btn-small">Create account</a>
                                            </div>

                                            <div class="payment-gateway">
                                                <a href="https://flutterwave.com/ng/" target="_blank" class="gateway">
                                                    <div class="gateway-img"><img src="~/assets/business/image/gateways/flutterwave.jpg" alt=""></div>
                                                    <div class="gateway-name">Flutterwave</div>
                                                </a>
                                                <a href="https://support.flutterwave.com/en/articles/3632714-creating-a-flutterwave-account" target="_blank" class="btn btn-white btn-small">Create account</a>
                                            </div>

                                            <div class="payment-gateway">
                                                <a href="https://dusupay.com/" target="_blank" class="gateway">
                                                    <div class="gateway-img"><img src="~/assets/business/image/gateways/dusupay.jpg" alt=""></div>
                                                    <div class="gateway-name">Dusu pay</div>
                                                </a>
                                                <a href="https://guide.accounteer.com/en/accept-online-payments-with-dusupay" target="_blank" class="btn btn-white btn-small">Create account</a>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- subscription -->
                                    <div class="tab-content-area" id="serviceSubcription">

                                        <div class="plan-option">
                                            <div class="subcription-area-header">Your current plan</div>
                                            <div class="subscription-list running">
                                                <div class="flex-control">
                                                    <div class="subcription-info">
                                                        <div class="subcription-header">Plan</div>
                                                        <div class="subcription-data">Free tier
                                                            <span class="expired plan-status">(Expired)</span>
                                                        </div>
                                                    </div>
                                                    <div class="subcription-info">
                                                        <div class="subcription-header">Price</div>
                                                        <div class="subcription-data">₦3,000</div>
                                                    </div>
                                                </div>
                                                <div class="flex-control">
                                                    <div class="subcription-info">
                                                        <div class="subcription-header">Subscription date</div>
                                                        <div class="subcription-data">15th December 2020</div>
                                                    </div>
                                                    <div class="subcription-info">
                                                        <div class="subcription-header">Expiry date</div>
                                                        <div class="subcription-data">15th December 2020</div>
                                                    </div>
                                                    <!-- <button class="btn btn-default btn-small">Details</button> -->
                                                </div>
                                            </div>
                                        </div>

                                        <div class="">
                                            <div class="subcription-area-header">All plans</div>
                                            
                                            <div class="subscription-list mg-bottom-16">
                                                <div class="flex-control">
                                                    <div class="subcription-info">
                                                        <div class="subcription-header">Plan</div>
                                                        <div class="subcription-data">Basic</div>
                                                    </div>
                                                    <div class="subcription-info">
                                                        <div class="subcription-header">Price</div>
                                                        <div class="subcription-data">₦2,000</div>
                                                    </div>
                                                </div>
                                                <div class="flex-control">
                                                    <div class="subcription-info">
                                                        <div class="subcription-header">Duration</div>
                                                        <div class="subcription-data">1 month</div>
                                                    </div>
                                                    <div>
                                                        <button class="btn btn-default btn-small">Details</button>
                                                        <button class="btn btn-primary btn-small">Activate</button>
                                                    </div>
                                                </div>
                                                <div class="subscription-details">

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div> <!-- main content ends here -->
                        </div>
                        <BOTTOMNAV></BOTTOMNAV>
                    </div>
            </div>

            <ADDLOCATION></ADDLOCATION>
        </div>
    </div>
</template>

<script>

import TOPHEADER from '~/layouts/business/top-navigation.vue';
import SIDENAV from '~/layouts/business/side-bar.vue';
import BOTTOMNAV from '~/layouts/business/bottom-nav.vue';
import ADDLOCATION from '~/components/location/add.location.vue'
import PAGELOADER from '~/components/loader/loader.vue'
import PROGRESS from '~/components/progress/progress.vue'
import SUBSCRIPTION from '~/components/business/subscription/subscription.vue'

import { 
    EDIT_BASIC_BUSINESS_DETAILS, EDIT_BUSINESS_PHONE_NUMBERS, EDIT_BUSINESS_ADDRESS,
    EDIT_BUSINESS_EMAIL, EDIT_BUSINESS_LOGO, EDIT_BUSINESS_COVERPHOTO, EDIT_BUSINESS_WHATSAPP_CONTACT
} from '~/graphql/business';

import { SEARCH_FOR_STREET } from '~/graphql/location'

import { mapActions, mapGetters } from 'vuex';

export default {
    name: "EDITBUSINESSPROFILE",
    components: {
        TOPHEADER, SIDENAV, BOTTOMNAV, ADDLOCATION, PAGELOADER, PROGRESS, SUBSCRIPTION
    },
    data: function() {
        return {
            pageLoader: true,
            businessId: "",
            businessLogo: "",
            businessCoverPhoto: "",
            businessName: "",
            username: "",
            businessAddress: "",
            reviewScore: 0,
			businessPhone: "",
			businessEmail: "",
            categories: "",
            businessDescription: "",
            accessToken: "",
            emailNotification: 0,

            whatsappNumber: "",
            whatsappStatus: 0,

            // street data
            streetNumber: 1,
            streetName: "",
            streetId: "",
            busStop: "",
            streetSuggestion: "",

            apiLink: 'http://localhost:4000/v1/',

            // upload progress
            LogoProgressProps: 0,
            coverPhotoProgressProps: 0,

            setTimeoutForStreet: null
        }
	},
	computed: {
		getBusinessFormattedAddress () {
			if (typeof this.businessAddress == "string") {
				return "Edit your profile to add your business addresss";
			} else if (typeof this.businessAddress == "object") {
				return `
					${this.businessAddress.number}, 
					${this.businessAddress.street}
					${this.businessAddress.community},
					${this.businessAddress.state}.
				`
			}
		},
		getBusinessPhoneNumbers () {
			return this.businessPhone
		},
		getBusinessCategories () {
			return this.categories
		},
		convertBusinessNameToLogo() {
			let businessName = this.businessName.toUpperCase();
			let splitName = businessName.split(' ');
			let newLogo;
			if (splitName.length > 1) {
				newLogo = `${splitName[0][0]}${splitName[1][0]}`;
			} else {
				newLogo = `${splitName[0][0]}${splitName[0][1]}`;
			}

			return newLogo
        }
	},
    methods: {
        imageFileProgress: function (size) {
            let count = 0;

            if (size == 1) count = 20;
            if (size >= 2) count = 30;

            return count
        },
        uploadLogoImage: async function(e, preivewData) {
            let file = e.target.files[0];
            let uploadFile = e.target.files[0];

            if (uploadFile == undefined) return

            let fileValidation = this.$checkFileExtension(uploadFile.name);

            if (fileValidation == false) {
                this.$initiateNotification('info', "", "Choose a valid image for your logo")
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

            this.$initiateNotification('success', "Profile updated", result.message);
            // update store
    
            this.$store.dispatch('business/setBusinessData', {
                logo: result.imagePath
            });
                
        },
        uploadCoverPhoto: async function(e, preivewData) {
            let file = e.target.files[0];
            let uploadFile = e.target.files[0];

            if (uploadFile == undefined) return

            let fileValidation = this.$checkFileExtension(uploadFile.name);

            if (fileValidation == false) {
                this.$initiateNotification('info', "", "Choose a valid image for your cover photo")
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

            this.coverPhotoProgressProps = this.imageFileProgress(uploadFile.size);

            let request = await this.$performGraphQlMutation(this.$apollo, EDIT_BUSINESS_COVERPHOTO, variables, context);

            this.coverPhotoProgressProps = 0

            if (request.error == true) {
                // reset input
                this.$refs.coverUpload.value=null;
                this.$initiateNotification('error', 'Failed request', 'A network error occurred');
                return
			}

            let result = request.result.data.EditBusinessCoverPhoto

            if (!result.success) {
                this.$refs.coverUpload.value=null;
                this.$initiateNotification('error', "Failed upload", result.message)
                return
            }

            
            this.$initiateNotification('success', "Profile updated", result.message);

            this.$store.dispatch('business/setBusinessData', {
                coverPhoto: result.imagePath
            });

                
        },
        ...mapGetters({
            'GetBusinessData': 'business/GetBusinessDetails',
            'GetUserData': 'customer/GetCustomerDetails'
        }),
		formatBusinessCategories: function (data) {
			let catArrays = []
			if (data.length > 0) {
				for (const [index, x] of data.entries()) {
					catArrays.push(x.categoryName)
				}
				return catArrays
			}
		},
		formatBusinessPhoneList: function (data) {
            let phone = "";
            let dataLength = data.length

			for (let [index, x] of data.entries()) {
                if ((index + 1) != dataLength) {
                    phone = phone + x +', '
                } else {
                    phone = phone + x
                }
			}
			return phone
		},
		formatAddress: function(address) {
			if (address.street == undefined || address.street.length == 0) {
				return "";
			}

			return address
        },
        assignBusinessAddress: function () {
            if (this.businessAddress.street != undefined || this.businessAddress.street != null) {
                this.streetNumber = this.businessAddress.number
                this.busStop = this.businessAddress.busStop
            }
        },
        formatCoverPhoto: function (coverPhoto) {
            if(coverPhoto) {
                let extension = coverPhoto.split('.');

                if (extension[1] != 'jepg') {
                    coverPhoto = `${extension[0]}.jpeg`
                }

                this.businessCoverPhoto = `https://res.cloudinary.com/cudua-images/image/upload/w_50,f_auto,,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1598967937/cudua_commerce/business/${this.businessId}/cover/${coverPhoto}`
                return
            }
                
            this.businessCoverPhoto = coverPhoto
            
        },
        assignBusinessData: function () {
            let data = this.GetBusinessData()
            this.businessId = data.businessId;
            this.businessName = data.businessName;
            // logo
            if (data.logo) {
                this.businessLogo = this.$getBusinessLogoUrl(this.businessId, data.logo)
            } else {
                this.businessLogo = ""
            }

            // coverPhoto
            this.formatCoverPhoto(data.coverPhoto)

			this.username = data.username
			this.categories = data.businessCategories.length < 1 ? [] : this.formatBusinessCategories(data.businessCategories)
			this.businessEmail = data.contact.email,
			this.businessPhone = data.contact.phone.length < 1 ? [] : this.formatBusinessPhoneList(data.contact.phone) 
			this.businessAddress = this.formatAddress(data.address);
            this.reviewScore = data.reviewScore;
            this.businessDescription = data.description

            this.whatsappNumber = data.contact.whatsapp.phone;
            this.whatsappStatus = data.contact.whatsapp.status;


            this.assignBusinessAddress()

            let customerData = this.GetUserData();
            this.accessToken = customerData.userToken
            this.emailNotification = customerData.emailNotification
        },
        updateBasicData: async function (e) {
            e.preventDefault();

            let actionButton = document.getElementById('updateBasicProfile');
            actionButton.disabled = true;

            let variables = { 
                businessId: this.businessId,
                businessName: this.businessName,
                businessUsername: this.username,
                businessDescription: this.businessDescription
            }
            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }

            let request = await this.$performGraphQlMutation(this.$apollo, EDIT_BASIC_BUSINESS_DETAILS, variables, context);

            actionButton.disabled = false;

            if (request.error == true) {
                this.$initiateNotification('error', 'Failed request', request.message);
                return
			}
                
            let result = request.result.data.EditBusinessBasicDetails;

            if (result.success == false) {
                this.$initiateNotification('error', 'Failed request', result.message);
                return
            }


            this.$store.dispatch('business/setBusinessData', {
                businessName: this.businessName[0].toUpperCase() +  this.businessName.slice(1),
                username: this.username,
                description: this.businessDescription
            });

            this.$initiateNotification('success', 'Profile update', result.message);
            return;

        },
        updateBusinessPhoneNumber: async function (e) {
            
            e.preventDefault();

            if (this.businessPhone.length < 4) {
                this.$initiateNotification('error', 'Input error', "Enter a valid phone number");
                return
            }

            let target = document.getElementById('updateBusinessPhoneNumber');
            target.disabled = true

            let phone = this.businessPhone.split(',');

            let variables = { 
                businessId: this.businessId,
                phoneNumbers: phone
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }

            let request = await this.$performGraphQlMutation(this.$apollo, EDIT_BUSINESS_PHONE_NUMBERS, variables, context);

            target.disabled = false;

            if (request.error == true) {
                this.$initiateNotification('error', 'Failed request', request.message);
                return
			}
                
            let result = request.result.data.EditBusinessPhoneNumber;

            if (result.success == false) {
                this.$initiateNotification('error', 'Failed request', result.message);
                return
            }

            this.$store.dispatch('business/setBusinessContact', {
                phone: phone
            })
            this.$initiateNotification('success', 'Profile update', result.message);

        },
        updateBusinessWhatsappContact: async function (e) {
            
            e.preventDefault();

            if (this.whatsappNumber.length < 4) {
                this.$showToast("Enter a valid phone number", 'error');
                return
            }

            let target = document.getElementById('updateBusinessWhatsapp');
            target.disabled = true


            let variables = { 
                businessId: this.businessId,
                phoneNumber: this.whatsappNumber,
                notification: this.whatsappStatus == true ? 1 : 0
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }

            let request = await this.$performGraphQlMutation(this.$apollo, EDIT_BUSINESS_WHATSAPP_CONTACT, variables, context);

            target.disabled = false;

            if (request.error == true) {
                this.$initiateNotification('error', 'Failed request', request.message);
                return
            }
                
            let result = request.result.data.EditWhatsappContact;

            if (result.success == false) {
                this.$initiateNotification('error', 'Failed request', result.message);
                return
            }

            this.$store.dispatch('business/setBusinessContact', {
                whatsapp: {
                    phone: this.whatsappNumber,
                    status: this.whatsappStatus
                }
            })
            this.$initiateNotification('success', 'Profile update', result.message);

        },
        updateBusinessEmail: async function (e) {
            
            e.preventDefault();

            let target = 'editbusinessEmailAddress';

            if (this.businessEmail.length < 1) {
                this.$showToast("Enter an email address for your business", 'error')
                this.$addRedBorder(target)
                return
            }  

            this.$removeRedBorder(target)

            let actionButton = document.getElementById('updateBusinessEmail');
            actionButton.disabled = true;

            let variables = { 
                businessId: this.businessId,
                email: this.businessEmail
            }
            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }

            let request = await this.$performGraphQlMutation(this.$apollo, EDIT_BUSINESS_EMAIL, variables, context);

            actionButton.disabled = false;

            if (request.error == true) {
                this.$initiateNotification('error', 'Failed request', request.message);
                return
			}
                
            let result = request.result.data.EditBusinessEmailAddress;

            if (result.success == false) {
                this.$initiateNotification('error', 'Failed request', result.message);
                return
            }


            this.$store.dispatch('business/setBusinessContact', {
                email: this.businessEmail
            });

            this.$initiateNotification('success', 'Profile update', result.message);
            return;
        },
        clearTimeOut: function (timerOut) {
            clearTimeout(timerOut)
        },
        findStreet: async function () {
            if (this.streetName.length < 2) return

            document.getElementById('streetSearchSuggestion').style.display = "block"
            
            let variables = {
                keyword: this.streetName
            }
            
            this.clearTimeOut(this.setTimeoutForStreet)
            this.setTimeoutForStreet = setTimeout( async() => {
                
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
                        this.streetSuggestion = ''
                        document.getElementById('streetSearchSuggestion').style.display = "none"
                    }
                }

            }, 2000);

        },
        setStreetID: function (streetId, streetName, suggestionBoxId) {
            document.getElementById(suggestionBoxId).style.display = 'none'
            this.streetId = streetId
            this.streetName = streetName
        },
        validateStreetNumber: function () {
            if (this.streetNumber == 0) {
                this.streetNumber = 0
                this.streetNumber = 1
            }
        },
        updateBusinessAddress: async function () {
            let error = 0;

            if (this.streetNumber.toString().length < 1) {
                this.$addRedBorder('streetNumber')
                error = 1
            } else {
                this.$removeRedBorder('streetNumber')
            }

            let community;
            let state;


            if (this.streetName.length > 0) {
                let check = 0;
                for (let x of this.streetSuggestion) {
                    if (x.streetName.toLowerCase() == this.streetName.toLowerCase()) {
                        this.streetId = x.streetId
                        community = x.community.name
                        state = x.state.name

                        check = 1

                        break
                    }
                }
                if (check == 0) {
                    this.$addRedBorder('businessStreet')
                    this.$showToast("The street you chose does not exist on this app. kindly add it", "info", 5000);
                    error = 1
                } else {
                    this.$removeRedBorder('businessStreet')
                }
            } else {
                this.$addRedBorder('businessStreet')
                error = 1
            }

            // when street id is set and street name is not
            if (this.streetId.length < 1) {
                this.streetId = ""
                error = 1
                this.$addRedBorder('businessStreet')
            }

            if (this.busStop.length < 1) {
                this.$addRedBorder('busStop')
                error = 1
            } else {
                this.$removeRedBorder('busStop')
            }

            if (error == 1) {
                this.$showToast('Fill the forms above', 'error', 3000)
                return
            }

     

            let target = document.getElementById('updateBusinessAddress');
            target.disabled = true

            let variables = {
                streetNumber: this.streetNumber.toString(),
                streetId: this.streetId,	
                closestBusStop: this.busStop,
                businessId: this.businessId
            };

            let context = {
                headers: {
                    accessToken: this.accessToken
                }
            }

            target.disabled = false

            let request = await this.$performGraphQlMutation(this.$apollo, EDIT_BUSINESS_ADDRESS, variables, context);

            if (request.error) {
                this.$initiateNotification('error', "Network Error", request.message)
                return
            }

            let result = request.result.data.EditBusinessAddress;

            if (result.success) {
                this.$initiateNotification('success', "Profile updated", result.message)

                this.$store.dispatch('business/setBusinessAddress', {
                    number: this.streetNumber.toString(),
                    busStop:this.busStop,
                    street: this.streetName,
                    community: community,
                    state: state,
                });

            } else {
                this.$initiateNotification('error', "Update error", result.message)
            }

        },
		getNameLogo: function (businessName) {
			if (process.browser) {
				let name =  this.$convertNameToLogo(businessName)
				return name
			}
        },
        showBillingTab: function () {
            let route = this.$route.query

            if (route.billing != undefined) {
                
                let allTabs = document.querySelectorAll("#tabList > #tabLink");
                for (let i = 0; i < allTabs.length; i++) {
                    allTabs[i].classList.remove("is-active");
                    let attr = allTabs[i].getAttribute('data-tab');

                    if (attr == 'serviceSubcription') {
                        allTabs[i].classList.add("is-active");
                    }
                }

               document.getElementById("editBasic").classList.remove("is-active")
               document.getElementById("serviceSubcription").classList.add("is-active")

            }
        }
    },
    created: function () {
        if (process.browser) {
            this.assignBusinessData();
        }
    },
    mounted () {
        this.showBillingTab()
        this.pageLoader = false;
    },
    beforeDestroy () {
        
    },
    destroyed () {
        clearTimeout(this.setTimeoutForStreet);
    }
}
</script>

<style scoped>
  .font-14 {
    font-size: 14px;
  }
  .action-span {
      color: rgb(238 100 37);
      margin-left: 10px;
      font-weight: 500;
  }
.page-header.with-action h4 {
    margin-bottom: unset;
    align-self: center;
}
.page-header {
    margin-bottom: 32px !important;
}
.running {
    border-left-color: rgba(69, 175, 69, 1) !important;
}
.expired {
    border-left: rgba(223, 84, 56, 1) !important;
}
/* expired  */
.plan-status {
    font-weight: 500;
    font-size: 14px;
    margin-left: 18px;
}

.plan-status.expired {
    color: rgba(223, 84, 56, 1) !important
}
</style>