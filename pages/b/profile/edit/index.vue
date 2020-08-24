<template>
    <div class="business">
        <div class="body-container">
            <TOPHEADER></TOPHEADER>
            <div class="content-container">
                <SIDENAV></SIDENAV>
                    <div class="content-area grey-bg-color">
                        <PAGELOADER v-if="pageLoader"></PAGELOADER>

                        <div class="main-content">
                            <div class="page-header">
                                <h4>Edit business profile</h4>
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
                                                <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
                                                <div id="previewBusinessLogo" class="edit-logo-preview"></div>
                                            </div>
                                            <div class="upload-action">
                                                <input type="file" id="selectimage" @change="uploadLogoImage($event, 'previewBusinessLogo')">
                                                <button class="btn btn-white btn-small">Select logo</button>
                                            </div>
                                            
                                            <!-- <div>loader here</div> -->
                                        </div>

                                        <div class="edit-logo-container">
                                            <div class="edit-profile-logo">
                                                <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
                                                <div id="previewBusinessCover" class="edit-logo-preview"></div>
                                            </div>
                                            <div class="upload-action">
                                                <input type="file" id="selectLogoImage" @change="uploadCoverPhoto($event, 'previewBusinessCover')">
                                                <button class="btn btn-white btn-small">Select cover photo</button>
                                            </div>
                                            <!-- once a logo is selected, an animated loaded is shown to tell the progress of the upload -->
                                            <!-- <div>loader here</div> -->
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

                                        <div class="js-accordionItem">
                                            <div class="product-upload-dropdown  js-accordionHeader">
                                                <span>Phone numbers</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22.05" height="13.616" viewBox="0 0 22.05 13.616">
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#arrowDown"></use>
                                                </svg>
                                            </div>

                                            <div class="more-details-input-container js-accordionBody">
                                                <div class="form-control">
                                                    <label for="businessType" class="form-label">Add at least one or multiple phone numbers seperated by comma</label>
                                                    <textarea name="" id="" cols="30" rows="4" class="input-form white-bg-color" placeholder="Number 1, Number2, ..., Number N" v-model="businessPhone"></textarea>
                                                </div>
                                                <div class="form-control">
                                                    <button class="btn btn-white btn-block" @click="updateBusinessPhoneNumber($event)" id="updateBusinessPhoneNumber">
                                                        Update phone number
                                                        <div class="loader-action"><span class="loader"></span></div>    
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                        
                                        <div class="js-accordionItem">
                                            <div href="#" class="product-upload-dropdown js-accordionHeader">
                                                <span>Email address</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22.05" height="13.616" viewBox="0 0 22.05 13.616">
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#arrowDown"></use>
                                                </svg>
                                            </div>

                                            <div class="more-details-input-container js-accordionBody">
                                                <div class="form-control">
                                                    <!-- <label for="businessType" class="form-label">Type in your business email address</label> -->
                                                    
                                                    <input type="text" name="" id="businessType" class="input-form white-bg-color" placeholder="Type in your business email address" v-model="businessEmail">

                                                    <!-- <div class="email-noti-switcher">
                                                        <span class="form-label">Email notification</span>
                                                        <label class="switch">
                                                            <input type="checkbox" v-model="emailNotification">
                                                            <span class="slider round"></span>
                                                        </label>
                                                    </div> -->
                                                </div>
                                                <div class="form-control">
                                                    <button class="btn btn-white btn-block" @click="updateBusinessEmail($event)" id="updateBusinessEmail">
                                                        Update email address
                                                        <div class="loader-action"><span class="loader"></span></div>    
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="js-accordionItem">
                                            <div class="product-upload-dropdown js-accordionHeader">
                                                <span>Business address</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22.05" height="13.616" viewBox="0 0 22.05 13.616">
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#arrowDown"></use>
                                                </svg>
                                            </div>

                                            <div class="more-details-input-container js-accordionBody">
                                                
                                                <div class="form-control">
                                                    <label for="businessType" class="form-label">Street number</label>
                                                    <input type="text" name="" id="streetNumber" class="input-form white-bg-color"  v-model="streetNumber" @keydown="validateStreetNumber">
                                                </div>

                                                <div class="form-control position-relative">
                                                    <!-- <label for="businessType" class="form-label">Name of street</label> -->
                                                    <input type="text" name="" id="businessStreet" class="input-form white-bg-color" placeholder="Name of street" v-model="streetName" @keyup="findStreet">
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
                                                    <input type="type" name="" id="busStop" class="input-form white-bg-color" placeholder="Name of closest bus stop" v-model="busStop">
                                                </div>

                                                <div class="form-control">
                                                    <button class="btn btn-white btn-block" id="updateBusinessAddress" @click="updateBusinessAddress">
                                                        Update business address
                                                        <div class="loader-action"><span class="loader"></span></div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="js-accordionItem">
                                            <div class="product-upload-dropdown js-accordionHeader">
                                                <span>Business support with Whatsapp </span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22.05" height="13.616" viewBox="0 0 22.05 13.616">
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#arrowDown"></use>
                                                </svg>
                                            </div>

                                            <div class="more-details-input-container js-accordionBody">
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
                                                    <!-- <label for="businessType" class="form-label">Update whatsapp number</label> -->
                                                    <input type="number" name="" id="businessType" class="input-form white-bg-color" placeholder="Type your whatsapp number" v-model="whatsappNumber">
                                                </div>
                                                <div class="form-control">
                                                <button class="btn btn-white btn-block" @click="updateBusinessWhatsappContact($event)" id="updateBusinessWhatsapp">
                                                    Update business address
                                                    <div class="loader-action"><span class="loader"></span></div>    
                                                </button>
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
                                            <div class="subcription-area-header">Current plan</div>
                                            <div class="subscription-list">
                                                <div class="flex-control">
                                                    <div class="subcription-info">
                                                        <div class="subcription-header">Plan</div>
                                                        <div class="subcription-data">Free tier</div>
                                                    </div>
                                                    <div class="subcription-info">
                                                        <div class="subcription-header">Price</div>
                                                        <div class="subcription-data">₦3,000</div>
                                                    </div>
                                                </div>
                                                <div class="flex-control">
                                                    <div class="subcription-info">
                                                        <div class="subcription-header">Renewal date</div>
                                                        <div class="subcription-data">15th December 2020</div>
                                                    </div>
                                                    <button class="btn btn-default btn-small">Details</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="">
                                            <div class="subcription-area-header">All plans</div>
                                            <div class="subscription-list mg-bottom-16">
                                                <div class="flex-control">
                                                    <div class="subcription-info">
                                                        <div class="subcription-header">Plan</div>
                                                        <div class="subcription-data">Free tier</div>
                                                    </div>
                                                    <div class="subcription-info">
                                                        <div class="subcription-header">Price</div>
                                                        <div class="subcription-data">₦0</div>
                                                    </div>
                                                </div>
                                                <div class="flex-control">
                                                    <div class="subcription-info">
                                                        <div class="subcription-header">Duration</div>
                                                        <div class="subcription-data">Life long</div>
                                                    </div>
                                                    <div>
                                                        <button class="btn btn-default btn-small">Details</button>
                                                        <button class="btn btn-primary btn-small">Activate</button>
                                                    </div>
                                                </div>
                                            </div>

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

import { 
    EDIT_BASIC_BUSINESS_DETAILS, EDIT_BUSINESS_PHONE_NUMBERS, EDIT_BUSINESS_ADDRESS,
    EDIT_BUSINESS_EMAIL, EDIT_BUSINESS_LOGO, EDIT_BUSINESS_COVERPHOTO, EDIT_BUSINESS_WHATSAPP_CONTACT,
} from '~/graphql/business';

import { SEARCH_FOR_STREET } from '~/graphql/location'

import { mapActions, mapGetters } from 'vuex';

import { createUploadLink } from 'apollo-upload-client'

export default {
    name: "EDITBUSINESSPROFILE",
    components: {
        TOPHEADER, SIDENAV, BOTTOMNAV, ADDLOCATION, PAGELOADER
    },
    data: function() {
        return {
            pageLoader: true,
            businessId: "",
            logo: "",
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

            let request = await this.$performGraphQlMutation(this.$apollo, EDIT_BUSINESS_LOGO, variables, context);

            if (request.error == true) {
                this.$initiateNotification('error', 'Failed request', 'A network error occurred');
                return
			}

            let result = request.result.data.EditBusinesslogo

            if (!result.success) {
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

            let request = await this.$performGraphQlMutation(this.$apollo, EDIT_BUSINESS_COVERPHOTO, variables, context);

            if (request.error == true) {
                this.$initiateNotification('error', 'Failed request', 'A network error occurred');
                return
			}

            let result = request.result.data.EditBusinessCoverPhoto

            if (!result.success) {
                this.$initiateNotification('error', "Failed upload", result.message)
                return
            }

            
            this.$initiateNotification('error', "Profile updated", result.message)

                
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
        assignBusinessData: function () {
            let data = this.GetBusinessData()
            this.businessId = data.businessId;
			this.businessName = data.businessName;
			this.logo = data.logo
			this.businessCoverPhoto = data.coverPhoto
			this.username = data.username
			this.categories = data.businessCategories.length < 1 ? [] : this.formatBusinessCategories(data.businessCategories)
			this.businessEmail = data.contact.email,
			this.businessPhone = data.contact.phone.length < 1 ? [] : this.formatBusinessPhoneList(data.contact.phone) 
			this.businessAddress = this.formatAddress(data.address);
            this.reviewScore = data.reviewScore;
            this.businessDescription = data.description

            this.whatsappNumber = data.contact.whatsapp.phone;
            this.whatsappStatus = data.contact.whatsapp.status;

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

            if (this.businessPhone.length < 4) {
                this.$initiateNotification('error', 'Input error', "Enter a valid phone number");
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
        findStreet: async function () {
            if (this.streetName.length < 2) return

            console
            document.getElementById('streetSearchSuggestion').style.display = "block"
            
            let variables = {
                keyword: this.streetName
            }

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

        }
    },
    created() {
        if (process.browser) this.assignBusinessData()
    },
    mounted () {
		this.pageLoader = false
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
</style>