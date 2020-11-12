<template>
    <div class="business">
        <div class="body-container">
            <TOPHEADER></TOPHEADER>
            <Nuxt />
            <div class="content-container">
                <SIDENAV></SIDENAV>
                <Nuxt />
                    <div class="content-area grey-bg-color">
                        <PAGELOADER v-show="pageLoader"></PAGELOADER>
                        <Nuxt />

                        <div class="main-content" v-show="!pageLoader">
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
                                                <input type="file" id="selectimage" ref="logoUpload" @change="uploadLogoImage($event, 'previewBusinessLogo')" accept="image/png,image/jpg,image/jpeg">
                                                <button class="btn btn-white btn-small">Select logo</button>
                                            </div>
                                            
                                            <div v-show="LogoProgressProps">
                                                <PROGRESS :count-down-time=LogoProgressProps></PROGRESS>
                                                <Nuxt />    
                                            </div>
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
                                                <input type="file" id="selectLogoImage" ref="coverUpload" @change="uploadCoverPhoto($event, 'previewBusinessCover')" accept="image/png,image/jpg,image/jpeg">
                                                <button class="btn btn-white btn-small">Select cover photo</button>
                                            </div>
                                            <!-- once a logo is selected, an animated loaded is shown to tell the progress of the upload -->
                                            <div v-show="coverPhotoProgressProps"><PROGRESS :count-down-time=coverPhotoProgressProps></PROGRESS></div>
                                        </div>

                                        <div class="form-control">
                                            <!-- <label for="businessType" class="form-label">Business name <span>- optional</span></label> -->
                                            <input type="text" name="" id="businessName" class="input-form white-bg-color" placeholder="Business name" v-model="businessName">
                                        </div>

                                        <div class="form-control">
                                            <!-- <label for="businessType" class="form-label">Change your business username <span>- optional</span></label> -->
                                            <input type="text" name="" id="businessUsername" class="input-form white-bg-color" placeholder="Username" v-model="username">
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
                                                        <div class="recent-search-list-container" id="streetSearchSuggestionAnimation" v-show="streetName.length > 0 && streetSuggestion.length == 0">
                                                            <a href="#">
                                                                <div class="info-area">
                                                                    <span>Searching for</span> {{streetName}}
                                                                </div>
                                                                <div class="loader-container">
                                                                    <div class="loader-action"><span class="loader"></span></div>
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div class="recent-search-list-container" id="streetSearchSuggestion"  v-show="streetSuggestion.length > 1 && noStreetSuggestionResult == 0">
                                                            <div v-for="(suggestion, index) in streetSuggestion" :key="index">
                                                                <div @click="setStreetID(suggestion.streetId, suggestion.streetName, 'streetSearchSuggestion')" class="action-content">
                                                                    {{suggestion.streetName}} <span>- {{suggestion.community.name}}</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="recent-search-list-container" v-show="streetName.length > 1 && noStreetSuggestionResult == 1">
                                                            <a href="#">
                                                                <div class="info-area">
                                                                    <span>No result was found</span>
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <a href="#" target="" class="mg-top-8 display-block font-14" data-trigger="modal" data-target="addNewLocation">I can't find my business location? <span class="action-span">Add it</span></a>
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

                                            <!-- Business notification -->

                                            <div class="edit-profile-section">
                                                <a href="#" class="header-area">
                                                    <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="editBusinessNotification">
                                                    <div class="edit-action-description accord-chip-name">
                                                    <svg aria-hidden="true" viewBox="0 0 512 512">
                                                            <use xlink:href="~/assets/customer/image/all-svg.svg#globe"></use>
                                                        </svg>
                                                        <span>Business notification</span>
                                                    </div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.05 13.616">
                                                        <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                                                    </svg>
                                                </a>
                                                <div class="edit-profile-content" id="editBusinessNotification">
                                                    <!-- content here -->
                                                    <div class="form-control">
                                                    <div class="">
                                                        <span class="form-label">Receive notification on your phone when a new order is placed.</span>
                                                        <div class="position-relative-notification">
                                                            <div class="notification-loader-container mg-top-16">
                                                                <div class="loader-action"><span class="loader"></span></div>
                                                            </div>
                                                            <div class="mg-top-8 one-signal-container">
                                                                <div class='onesignal-customlink-container'></div>
                                                            </div>
                                                        </div>

                                                    </div>
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
                                                                <input type="checkbox" v-model="whatsappStatus" @change="triggerWhatsappActionButton">
                                                                <span class="slider round"></span>
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div class="form-control">
                                                        <label for="businessType" class="form-label">Let customers chat with you</label>
                                                        <input type="number" name="" id="whatsappPhoneForm" class="input-form" placeholder="Type your whatsapp number" v-model="whatsappNumber" @keyup="triggerWhatsappActionButton">
                                                    </div>
                                                    <div class="form-control">
                                                        <button class="btn btn-primary btn-block display-none" @click="updateBusinessWhatsappContact($event)" id="updateBusinessWhatsapp">
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
                                        <div class="unavailable-feature" v-show="!currentPaystackPublicKey">Receive payments online with Paystack</div>

                                        <div v-show="!currentPaystackPublicKey">

                                            <div class="payment-gateway">
                                                <a href="https://paystack.com/" target="_blank" class="gateway">
                                                    <div class="gateway-img"><img src="~/assets/business/image/gateways/paystack.jpg" alt=""></div>
                                                    <div class="gateway-name">Paystack</div>
                                                </a>
                                                <a href="https://paystack.com/blog/product/paystack-starter-businesses" target="_blank" class="btn btn-white btn-small">Create account</a>
                                            </div>


                                            <div class="form-control">
                                                <label for="businessType" class="form-label">Your Paystack's live public key</label>
                                                <input type="text" name="" id="customerPayStackPublicKey" class="input-form white-bg-color" placeholder="Live public key" v-model="customerPayStackPublicKey">
                                            </div>
                                            <div class="alert alert-light font-14 mg-bottom-24 display-none" id="pk_test_info">
                                                Your Paystack's public key contains 'pk_test' which means it is a test public key. You can not receive payment with a test public key. What you need is a live public key.
                                            </div>
                                            <div class="form-control">
                                                <button class="btn btn-primary btn-block" id="updatePublicKey" @click="updatePublicKey()">
                                                    Save public key
                                                    <div class="loader-action"><span class="loader"></span></div>    
                                                </button>
                                            </div>
                                            
                                        </div>

                                        <div class="subscription-list invite" v-show="currentPaystackPublicKey">
                                            <div class="subcription-info">
                                                <div class="invite-link">
                                                    <div class="form-label">Live public key</div>
                                                    <div class="mg-bottom-16">pk_live_*****************</div>
                                                </div>
                                            </div>
                                            <div class="align-self-center">
                                                <paystack class="btn btn-white btn-small" id="payWithPaystack"
                                                    :amount="200 * 100"
                                                    :email="businessEmail"
                                                    :paystackkey="currentPaystackPublicKey"
                                                    :callback="testSuccessfulPayment"
                                                    :close="cancelTransaction"
                                                    :embed="false"
                                                    :firstname="businessName"
                                                >Test payment</paystack>
                                                <Nuxt />
                                                <button class="btn btn-default btn-small" data-trigger="modal" data-target="customerSignInModal">Change key</button>
                                            </div>
                                            <div class="alert mg-top-16 display-none" id="testPaymentTestResult"></div>
                                        </div>
                                        
                                    </div>

                                    <!-- subscription -->
                                    <div class="tab-content-area" id="serviceSubcription">

                                        <div class="plan-option">
                                            <div class="subcription-area-header">Your current plan</div>
                                            <div class="subscription-list" v-bind:class="{ expired: subscriptionStatus, 'running': !subscriptionStatus }">
                                                <div class="flex-control">
                                                    <div class="subcription-info">
                                                        <div class="subcription-header">Plan</div>
                                                        <div class="subcription-data">Basic plan
                                                            <span class="expired plan-status" v-show="subscriptionStatus">(Expired)</span>
                                                        </div>
                                                    </div>
                                                    <div class="subcription-info">
                                                        <div class="subcription-header">Price</div>
                                                        <div class="subcription-data">₦700</div>
                                                    </div>
                                                </div>
                                                <div class="flex-control">
                                                    <div class="subcription-info">
                                                        <div class="subcription-header">Subscription date</div>
                                                        <div class="subcription-data">{{subscriptionStartDate}}</div>
                                                    </div>
                                                    <div class="subcription-info">
                                                        <div class="subcription-header">Expiry date</div>
                                                        <div class="subcription-data">{{subscriptionEndDate}}</div>
                                                    </div>
                                                    <!-- <button class="btn btn-default btn-small">Details</button> -->
                                                </div>
                                            </div>
                                        </div>

                                        <div v-show="inviteRedemptionStatus" class="mg-bottom-32">
                                            <div class="alert alert-success notification-alert add-border-radius">
                                                <div v-show="!subscriptionStatus">You can activate your your 1 month basic subscription plan for inviting 3 businesses when your current subscription plan expires</div>
                                                <div v-show="subscriptionStatus">Activate your 1 month subscription plan for inviting 3 businesses</div>

                                                <button class="btn btn-white btn-small" v-show="subscriptionStatus" @click="activateInvitationPlan()" id="activateInvitationPlan">
                                                    Activate plan
                                                    <div class="loader-action"><span class="loader"></span></div>
                                                </button>
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
                                                        <div class="subcription-data">₦700</div>
                                                    </div>
                                                </div>
                                                <div class="flex-control">
                                                    <div class="subcription-info">
                                                        <div class="subcription-header">Duration</div>
                                                        <div class="subcription-data">1 month</div> 
                                                    </div>
                                                    <div>
                                                        <!-- <button class="btn btn-default btn-small">Details</button> -->
                                                        <paystack class="btn btn-primary btn-small" v-show="subscriptionStatus"
                                                            :amount="amount * 100"
                                                            :email="businessEmail"
                                                            :paystackkey="PUBLIC_KEY"
                                                            :callback="successfulPayment"
                                                            :close="cancelTransaction"
                                                            :embed="false"
                                                            :firstname="businessName"
                                                        >Subscribe</paystack>
                                                        <Nuxt />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div> <!-- main content ends here -->
                        </div>
                        <BOTTOMNAV></BOTTOMNAV>
                        <Nuxt />
                    </div>
            </div>

            <ADDLOCATION></ADDLOCATION>
            <Nuxt />

            <!-- sign in modal -->
            <div class="modal-container mobile-search-modal-container" id="customerSignInModal">
                <div class="modal-dialog-box white-bg-color">
                    <div class="mobile-login-container white-bg-color ">
                        <div class="sign-in-modal-logo">
                            <img src="~/assets/customer/image/cudua-logo-icon.svg" alt="">
                        </div>

                        <div class="sign-in-modal-welcome">
                            <div class="instruction-text">Sign into your account to change a sensitive data</div>
                        </div>
                        <div class="modal-login-form-container">

                            <div class="form-control">
                                <input type="email" id="userLoginEmail" name="email" class="input-form" v-model="loginEmail" placeholder="Email address" autocomplete="off">
                            </div>
                            <div class="form-control">
                                <input type="password" id="userLoginPassword" name="password" class="input-form" v-model="loginPassword" placeholder="Password">
                            </div>
                            <div class="form-control ">
                                <button class="btn btn-primary btn-block" type="button" @click="validateUserLogin" id="validateUserLogin">
                                    Sign in
                                    <div class="loader-action"><span class="loader"></span></div>
                                </button>
                            </div>

                            <div class="d-flex-center">
                                <button class="btn btn-small btn-white" data-target="customerSignInModal" data-dismiss="modal">Cancel Sign in</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <!-- end of sign in modal -->

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
    EDIT_BASIC_BUSINESS_DETAILS, 
    EDIT_BUSINESS_PHONE_NUMBERS, 
    EDIT_BUSINESS_ADDRESS,
    EDIT_BUSINESS_EMAIL, 
    EDIT_BUSINESS_LOGO, 
    EDIT_BUSINESS_COVERPHOTO, 
    EDIT_BUSINESS_WHATSAPP_CONTACT,
    ACTIVATE_SUBSCRIPTION,
    GET_VIRAL_REDEMPTION,
    ACTIVATE_VIRAL_INVITATION_GIFT,
    UPDATE_PAYSTACK_PUBLIC_ID
} from '~/graphql/business';

import { LOGIN_USER } from '~/graphql/customer';

import { SEARCH_FOR_STREET } from '~/graphql/location'

import { mapActions, mapGetters } from 'vuex';

import paystack from '~/plugins/vue-paystack.client.vue'

export default {
    name: "EDITBUSINESSPROFILE",
    components: {
        TOPHEADER, SIDENAV, BOTTOMNAV, ADDLOCATION, PAGELOADER, PROGRESS, SUBSCRIPTION, paystack
    },
    data: function() {
        return {
            pageLoader: true,

            businessOwnerName: "",

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
            inviteId: "",
            inviteRedemptionStatus: false,

            whatsappNumber: "",
            whatsappStatus: 0,

            // street data
            streetNumber: 1,
            streetName: "",
            streetId: "",
            busStop: "",
            streetSuggestion: "",

            // upload progress
            LogoProgressProps: 0,
            coverPhotoProgressProps: 0,

            setTimeoutForStreet: null,

            // subscription
            start: "",
            end: "",
            subscriptionStatus: "",
            subscriptionType: "",
            subscriptionStartDate: "",
            subscriptionEndDate: "",
            referenceId: "",

            noStreetSuggestionResult: "",

            amount: 700,
            PUBLIC_KEY: 'pk_live_b3c44d2eed6e3af959211cf95c7996da523f1bf8',

            customerPayStackPublicKey: "",
            currentPaystackPublicKey: "",

            // sign in
            loginEmail: "",
            loginPassword: "",
            failedLoginCount: 0
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
        validateUserLogin: async function () {

            if (this.loginEmail.length < 2 || this.loginPassword.length < 2) {
                this.$showToast('Enter your email and password credentials to sign in', 'error')
                return
            } 

            let target = document.getElementById('validateUserLogin');

            target.disabled = true

            let variables = {
                email: this.loginEmail,
                password: this.loginPassword,
                anonymousId: ""
            }

            let request = await this.$performGraphQlQuery(this.$apollo, LOGIN_USER, variables, {});

            target.disabled = false

            if (request.error) {
                this.$showToast('A network error occurred', 'error', 6000);
                return
            }

            let result = request.result.data.userLogin;

            if (result.success == false) {
                
                this.failedLoginCount = this.failedLoginCount + 1

                this.$showToast('Failed login', 'error', 6000);
                if (this.failedLoginCount == 3) {
                    return this.$router.push('/c/logout')
                }
                return
            }

            
            let businessId = result.businessDetails.id

            if (this.businessId === businessId) {

                // set access token
                this.accessToken = result.accessToken;

                await this.$store.dispatch('customer/setCustomerData', {
                    userToken: result.accessToken
                });


                this.$showToast('Login successful', 'success', 6000);

                this.currentPaystackPublicKey = "";
                this.customerPayStackPublicKey = "";

                document.querySelector("body").classList.remove("overflow-hidden");
                document.getElementById('customerSignInModal').classList.remove('display-block', 'show-modal')

            } else {
                return this.$router.push('/c/logout')
            }

        },
        updatePublicKey: async function () {

            if (this.customerPayStackPublicKey.length == 0) {
                this.$addRedBorder('customerPayStackPublicKey')
                return this.$showToast("Enter a valid public key", 'error', 6000)
            } else {
                this.$removeRedBorder('customerPayStackPublicKey')
            }

            let infoDiv = document.getElementById('pk_test_info')

            if (this.customerPayStackPublicKey.search('pk_test') == 0) {
                infoDiv.classList.remove('display-none');
                this.$addRedBorder('customerPayStackPublicKey')
                return this.$showToast("You entered a public key", 'error', 6000)
            } else {
                infoDiv.classList.add('display-none');
                this.$removeRedBorder('customerPayStackPublicKey')
            }

            let target = document.getElementById('updatePublicKey');


            let variables = { 
                key: this.customerPayStackPublicKey,
                businessId: this.businessId
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }

            target.disabled = true

            let request = await this.$performGraphQlMutation(this.$apollo, UPDATE_PAYSTACK_PUBLIC_ID, variables, context);

            target.disabled = false

            if (request.error) {
                return this.$initiateNotification('error', "Network Error", request.message);
            }

            let result = request.result.data.UpdatePaystackPublicKey;

            if (result.success == false) {
                return this.$initiateNotification('error', "Oops!", result.message);
            }

            this.$initiateNotification('success', "Profile updated", result.message);

            this.$store.dispatch('business/setBusinessData', {
                paystackPublicKey: this.customerPayStackPublicKey
            });

            this.currentPaystackPublicKey = this.customerPayStackPublicKey

        },
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

            this.inviteId = data.inviteId
            

            // logo
            if (data.logo) {
                this.businessLogo = this.$getBusinessLogoUrl(this.businessId, data.logo)
            } else {
                this.businessLogo = ""
            }

            // coverPhoto
            this.formatCoverPhoto(data.coverPhoto)

            this.username = data.username
            this.currentPaystackPublicKey = data.paystackPublicKey
			this.categories = data.businessCategories.length < 1 ? [] : this.formatBusinessCategories(data.businessCategories)
			this.businessPhone = data.contact.phone.length < 1 ? [] : this.formatBusinessPhoneList(data.contact.phone) 
			this.businessAddress = this.formatAddress(data.address);
            this.reviewScore = data.reviewScore;
            this.businessDescription = data.description

            this.whatsappNumber = data.contact.whatsapp.phone;
            this.whatsappStatus = data.contact.whatsapp.status;


            this.assignBusinessAddress()

            let customerData = this.GetUserData();
            this.businessEmail = customerData.email
            this.businessOwnerName = customerData.fullname
            this.accessToken = customerData.userToken
            this.emailNotification = customerData.emailNotification

            // subscription
            this.start = data.subscription.start
            this.end = data.subscription.end
            this.subscriptionId = data.subscription.id
            this.subscriptionType = data.subscription.type
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
                this.$addRedBorder('whatsappPhoneForm')
                this.$showToast("Enter a valid phone number", 'error');
                return
            } else {
                this.$removeRedBorder('whatsappPhoneForm')
            }

            let target = document.getElementById('updateBusinessWhatsapp');
            target.disabled = true

            let formatWhatsappNumber = this.whatsappNumber.split("");
            if (formatWhatsappNumber[0] == '0') {
                formatWhatsappNumber[0] = '234';
                let x = "";
                formatWhatsappNumber.forEach(element => {
                    x = x+element
                });
                this.whatsappNumber = x
            }

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
            
            this.noStreetSuggestionResult = 0
            this.streetSuggestion = []
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
                        this.noStreetSuggestionResult = 1
                        document.getElementById('streetSearchSuggestion').style.display = "none"
                    }
                }

            }, 1000);

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

            target.disabled = true

            let request = await this.$performGraphQlMutation(this.$apollo, EDIT_BUSINESS_ADDRESS, variables, context);

            target.disabled = false

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
                console.log("") 
                document.getElementById("editBasic").classList.remove("is-active")
                document.getElementById("serviceSubcription").classList.add("is-active")

            }
        },
        formatAndShowSubscription () {
            let month = [
                'January',
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ];

            let startDay = new Date(this.start).getDate().toString();
            let formatStart = "";

            if (startDay.length > 1) {
                if (startDay == "21") {
                    formatStart = startDay+"st"
                } else {
                    formatStart = startDay[1] == '3' ? startDay+"rd" : startDay+"th";  
                    formatStart = startDay[1] == '2' || startDay[1] == '22' ? startDay+"nd" : startDay+"th";  
                }
            } else {
                if (startDay == '1') {
                    formatStart = startDay+"st";
                } else {
                    formatStart = startDay == "3" ? startDay+"rd" : startDay+"th";
                }
            }
            
            let startMonth = month[new Date(this.start).getMonth()]
            let startYear = new Date(this.start).getFullYear()

            this.subscriptionStartDate = `${formatStart} ${startMonth}, ${startYear}`;


            let endDay = new Date(this.end).getDate().toString();
            
            let formatEnd = "";

            if (endDay.length > 1) {
                if (endDay == "21") {
                    formatEnd = endDay+"st"
                } else {
                    formatEnd = endDay[1] == '3' ? endDay+"rd" : endDay+"th";  
                    formatEnd = endDay[1] == '2' || endDay[1] == '22' ? endDay+"nd" : endDay+"th";   
                }
                
            } else {
                if (endDay == '1') {
                    formatEnd = endDay+"st";
                } else {
                    formatEnd = endDay == "3" ? endDay+"rd" : endDay+"th";
                }
            }

            let endMonth = month[new Date(this.end).getMonth()];
            let endYear = new Date(this.end).getFullYear();

            this.subscriptionEndDate = `${formatEnd} ${endMonth}, ${endYear}`;

            // check if subscription has expired
            let endTime = Date.parse(this.end);

            let now = Date.now();

            if (now > endTime) {
                this.subscriptionStatus = 1
            } else {
                this.subscriptionStatus = 0
            }

        },
        cancelTransaction: function () {
            this.$initiateNotification('info', "", "Your transaction was cancelled")
        },
        testSuccessfulPayment: function (transaction) {

            let target = document.getElementById('testPaymentTestResult')

            if (transaction.status == 'success' && transaction.message == 'Approved') {
                this.$initiateNotification('success', "Payment successful", "Your test payment was successful.")
                target.classList.remove('display-none')
                target.classList.add('alert-success')

                target.innerHTML = ""
                target.innerHTML = "Your test payment was successful. Customers will be able to pay for your products online."
            } else {
                this.$initiateNotification('error', "Payment error", "Your test payment failed.")
                target.classList.remove('display-none')
                target.classList.add('alert-danger')

                target.innerHTML = ""
                target.innerHTML = "Your test payment failed. Customers will not be able to pay for your service online. Make sure you are using your LIVE PUBLIC KEY not a TEST PUBLIC KEY."
            }
        },
        successfulPayment: async function (transaction) {

            if (transaction.status == 'success' && transaction.message == 'Approved') {

                let transactionId = transaction.reference;

                let variables = {
                    referenceId: transactionId,
                    businessId: this.businessId,
                    subType: "Basic"
                }

                let context = {
                    hasUpload: true,
                    headers: {
                        'accessToken': this.accessToken
                    }
                }

                let request = await this.$performGraphQlMutation(this.$apollo, ACTIVATE_SUBSCRIPTION, variables, context);

                if (request.error) {
                    this.$initiateNotification('error', "Network Error", request.message)
                    return
                }

                let result = request.result.data.createSubscription;

                if (result.error) {
                    this.$initiateNotification('error', "Update error", result.message)
                    return
                }

                let data = result.subscriptionData;

                this.$store.dispatch('business/setSubscription', {
                    start: data.start,
                    end: data.end,
                    type: 'Basic'
                })

                this.start = data.start
                this.end = data.end
                this.formatAndShowSubscription()
                
                this.$initiateNotification('success', "Subscription successful", result.message)


            } else {
                this.$initiateNotification('error', "Payment error", "An error occurred paying for your subscription")
            }
        },
        getViralIdRedemptionStatus: async function() {

            let variables = {
                businessId: this.businessId
            }

            let context = {
                hasUpload: true,
                headers: {
                    'accessToken': this.accessToken
                }
            }
            
            let request = await this.$performGraphQlMutation(this.$apollo, GET_VIRAL_REDEMPTION, variables, context);

            if (request.error) {
                this.$initiateNotification('error', "Network Error", request.message)
                return
            }

            let result = request.result.data.GetViralRedemptionStatus;

            if (result.error) {
                this.$initiateNotification('error', "Invitation error", result.message)
                return
            }

            if (result.status == null) {
                this.inviteRedemptionStatus = false;
                this.$initiateNotification('error', "Invitation error", result.message)
                return
            }

            if (result.status == false) {
                this.inviteRedemptionStatus = false
                return
            }

            if (result.status == true) this.inviteRedemptionStatus = true


        },
        activateInvitationPlan: async function () {

            let target = document.getElementById('activateInvitationPlan')

            let variables = {
                businessId: this.businessId,
                viralId: this.inviteId
            }

            let context = {
                hasUpload: true,
                headers: {
                    'accessToken': this.accessToken
                }
            }

            target.disabled = true

            let request = await this.$performGraphQlMutation(this.$apollo, ACTIVATE_VIRAL_INVITATION_GIFT, variables, context);

            target.disabled = false

            if (request.error) {
                this.$initiateNotification('error', "Network Error", request.message)
                return
            }

            let result = request.result.data.ActivateViralInvitationGift;

            if (result.success == false) {
                this.$initiateNotification('error', "Subscription error", result.message)
                return
            }

            let data = result.subscriptionData;

            this.$store.dispatch('business/setSubscription', {
                start: data.start,
                end: data.end,
                type: 'Basic'
            })

            this.start = data.start
            this.end = data.end
            this.formatAndShowSubscription()
            
            this.$initiateNotification('success', "Subscription successful", result.message)

            this.inviteRedemptionStatus = false

        },
        triggerWhatsappActionButton: function () {
            let target = document.getElementById('updateBusinessWhatsapp');
            target.classList.remove('display-none')
        }
    },
    created: function () {
        if (process.browser) {
            this.assignBusinessData();
            this.getViralIdRedemptionStatus()
        }
    },
    mounted () {
        this.formatAndShowSubscription()
        this.showBillingTab()
        
        this.pageLoader = false;
    },
    beforeDestroy () {
        clearTimeout(this.setTimeoutForStreet);
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
.recent-search-list-container {
    position: relative !important;
    z-index: auto;
}
.add-border-radius {
    border-radius: 4px !important;
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
    border-left-color: rgba(223, 84, 56, 1) !important;
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

.align-self-center {
    align-self: center !important;
}
</style>