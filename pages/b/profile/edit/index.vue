<template>
    <div class="body-container">
        <TOPHEADER />
        <nuxt/>
        <div class="content-container">
            <SIDENAV />
            <nuxt />
                <div class="content-area grey-bg-color">
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
                                        
                                        <div>loader here</div>
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
                                        <div>loader here</div>
                                    </div>

                                    <div class="form-control">
                                        <!-- <label for="businessType" class="form-label">Business name <span>- optional</span></label> -->
                                        <input type="text" name="" id="businessType" class="input-form white-bg-color" placeholder="Business name">
                                    </div>

                                    <div class="form-control">
                                        <!-- <label for="businessType" class="form-label">Change your business username <span>- optional</span></label> -->
                                        <input type="text" name="" id="businessType" class="input-form white-bg-color" placeholder="Change your business username">
                                    </div>

                                    <div class="form-control">
                                        <!-- <label for="businessType" class="form-label">Write about your business <span>- optional</span></label> -->
                                        <textarea name="" id="" cols="30" rows="7" class="input-form white-bg-color" placeholder="Write about your business"></textarea>
                                    </div>

                                    <div class="form-control">
                                        <button class="btn btn-primary btn-block">Submit update</button>
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
                                                <!-- <label for="businessType" class="form-label">Add at least one or multiple phone numbers seperated by comma</label> -->
                                                <textarea name="" id="" cols="30" rows="4" class="input-form white-bg-color" placeholder="Add one or multiple phone numbers seperated by comma"></textarea>
                                            </div>
                                            <div class="form-control">
                                                <button class="btn btn-white btn-block">Update phone number</button>
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
                                                
                                                <input type="text" name="" id="businessType" class="input-form white-bg-color" placeholder="Type in your business email address">

                                                <div class="email-noti-switcher">
                                                    <span class="form-label">Email notification</span>
                                                    <label class="switch">
                                                        <input type="checkbox">
                                                        <span class="slider round"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="form-control">
                                                <button class="btn btn-white btn-block">Update email address</button>
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
                                                <a href="#" target="" class="mg-top-8 display-block font-12" data-trigger="modal" data-target="addNewLocation">Add your business location</a>
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


                                <!-- contact -->
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
                    <BOTTOMNAV />
                    <nuxt/>
                </div>
        </div>

        <ADDLOCATION />
        <nuxt/>

    </div>
</template>

<script>

import TOPHEADER from '~/layouts/business/top-navigation.vue';
import SIDENAV from '~/layouts/business/side-bar.vue';
import BOTTOMNAV from '~/layouts/business/bottom-nav.vue';
import LOADER from '~/layouts/business/loader.vue';
import ADDLOCATION from '~/components/location/add.location.vue'
export default {
    components: {
        TOPHEADER, SIDENAV, BOTTOMNAV, LOADER, ADDLOCATION
    },
    methods : {
        previewImage: function (e, preview) {
            this.$previewImage(e, preview)
        }
    }
}
</script>

<style scoped>
  .font-12 {
    font-size: 14px;
  }
</style>