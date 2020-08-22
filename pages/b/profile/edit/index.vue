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
                                                <input type="file" id="selectimage" @change="previewImage($event, 'previewBusinessLogo')">
                                                <button class="btn btn-white">Select logo</button>
                                            </div>
                                            
                                            <!-- <div>loader here</div> -->
                                        </div>

                                        <div class="edit-logo-container">
                                            <div class="edit-profile-logo">
                                                <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
                                                <div id="previewBusinessCover" class="edit-logo-preview"></div>
                                            </div>
                                            <div class="upload-action">
                                                <input type="file" id="selectimage" @change="previewImage($event, 'previewBusinessCover')">
                                                <button class="btn btn-white">Select cover photo</button>
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
                                                    <!-- <label for="businessType" class="form-label">Street number</label> -->
                                                    <input type="number" name="" id="businessType" class="input-form white-bg-color" placeholder="Street number">
                                                </div>
                                                <div class="form-control">
                                                    <!-- <label for="businessType" class="form-label">Name of street</label> -->
                                                    <input type="number" name="" id="businessType" class="input-form white-bg-color" placeholder="Name of street">
                                                    <a href="#" target="" class="mg-top-8 display-block font-14" data-trigger="modal" data-target="addNewLocation">Add your business location</a>
                                                </div>

                                                <div class="form-control">
                                                    <input type="type" name="" id="businessType" class="input-form white-bg-color" placeholder="Name of closest bus stop">
                                                </div>

                                                <div class="form-control">
                                                <button class="btn btn-white btn-block">Update business address</button>
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
                                                            <input type="checkbox">
                                                            <span class="slider round"></span>
                                                        </label>
                                                    </div>
                                                </div>

                                                <div class="form-control">
                                                    <!-- <label for="businessType" class="form-label">Update whatsapp number</label> -->
                                                    <input type="number" name="" id="businessType" class="input-form white-bg-color" placeholder="Type your whatsapp number">
                                                </div>
                                                <div class="form-control">
                                                <button class="btn btn-white btn-block">Update business address</button>
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

import { EDIT_BASIC_BUSINESS_DETAILS, EDIT_BUSINESS_PHONE_NUMBERS, EDIT_BUSINESS_EMAIL } from '~/graphql/business';

import { mapActions, mapGetters } from 'vuex';

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
            emailNotification: 0
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
        previewImage: function (e, preview) {
            this.$previewImage(e, preview)
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

            console.log(variables)

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
</style>