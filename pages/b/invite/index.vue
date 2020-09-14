<template>
    <div class="business">
        <div class="body-container">
            <TOPHEADER />
            <nuxt/>
            <div class="content-container">
                <SIDENAV />
                <nuxt />
                    <div class="content-area grey-bg-color">
                        <!-- pageLoader -->
                        <PAGELOADER v-show="pageLoader" />
                        <nuxt />

                        <div class="main-content" v-show="inviteId">
                            <div class="page-header">
                                <h4>Invite businesses</h4>
                            </div>

                            <div class="plan-option">
                                <div class="subscription-list invite">
                                    <div class="subcription-info">
                                        <div class="invite-link" id="referalLink">{{getInviteLink}}</div>
                                    </div>
                                        
                                    <div>
                                        <button class="btn btn-default btn-small" @click="copyLink('referalLink')">Copy link</button>
                                        <button class="btn btn-primary btn-small" data-single-tab="singleTab" data-target="shareInviteLink">Share link</button>
                                    </div>
                                    <div class="subscription-details" id="shareInviteLink">
                                        <div class="share-action-container d-flex ">
                                    
                                            <a :href="`whatsapp://send?text=I just created an online strore for my business. You can create yours too. Click the link below ${getInviteLink} `" target="_blank" class="close-modal-btn" data-action="share/whatsapp/share" v-show="screenWidth < 1024">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="margin-unset">
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#whatsappIcon2"></use>
                                                </svg>
                                            </a>

                                            <a href="#" class="close-modal-btn btn-white" data-brand="facebook">
                                                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="margin-unset">
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#facebookRoundIcon"></use>
                                                </svg>
                                            </a>

                                            <a href="#" class="close-modal-btn" data-brand="twitter">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="margin-unset">
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#twitterIcon2"></use>
                                                </svg>
                                            </a>

                                        </div>                                        
                                    </div>
                                </div>
                            </div>

                            
                            <div class="plan-action">
                                <div class="subcription-area-header">
                                    <div>Registered businesses</div>
                                    <div class="form-label margin-unset">Businesses that I successfully invited</div>
                                </div>
                                <div>
                                    <div class="payment-gateway">
                                        <a href="https://paystack.com/" target="_blank" class="gateway">
                                            <div class="gateway-img"><img src="~/assets/business/image/gateways/paystack.jpg" alt=""></div>
                                            <div class="gateway-name">Business name</div>
                                        </a>
                                    </div>

                                    <div class="payment-gateway">
                                        <a href="https://paystack.com/" target="_blank" class="gateway">
                                            <div class="gateway-img"><img src="~/assets/business/image/gateways/paystack.jpg" alt=""></div>
                                            <div class="gateway-name">Business name</div>
                                        </a>
                                    </div>

                                    <div class="payment-gateway">
                                        <a href="https://paystack.com/" target="_blank" class="gateway">
                                            <div class="gateway-img"><img src="~/assets/business/image/gateways/paystack.jpg" alt=""></div>
                                            <div class="gateway-name">Business name</div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                    <BOTTOMNAV />
                    <nuxt/>
            </div>
        </div>
    </div>
</template>

<script>

import TOPHEADER from '~/layouts/business/top-navigation.vue';
import SIDENAV from '~/layouts/business/side-bar.vue';
import BOTTOMNAV from '~/layouts/business/bottom-nav.vue';
import PAGELOADER from '~/components/loader/loader.vue'

import { mapGetters } from 'vuex';

import { GET_BUSINESS_VIRAL_ID } from '~/graphql/business'

export default {
    name: "VIRALMARKETING",
    components: {
        TOPHEADER, SIDENAV, BOTTOMNAV, PAGELOADER
    },
    data: function() {
        return {
            pageLoader: true,
            businessId: "",
            inviteId: "",
            accessToken: "",
            screenWidth: "",
        }
    },
    computed: {
        ...mapGetters({
            'GetCustomerData': 'customer/GetCustomerDetails',
            'GetBusinessData': 'business/GetBusinessDetails'
        }),
        getInviteLink () {
            return `https://www.cudua.com/auth/create-store?ref=${this.inviteId}`
        },
        handleResize() {
            this.screenWidth = window.innerWidth;
        },
    },
    methods: {
        copyLink: function (target) {
            this.$copyToClipBoard(target)
        },
        GetBusinessDataFromStore: function () {
            let businessData = this.GetBusinessData;
            this.businessId = businessData.businessId
            this.inviteId = businessData.inviteId
			let customerData = this.GetCustomerData;
            this.accessToken = customerData.userToken;
        },
        generateInviteID: async function () {
            
            let variables = {
                businessId: this.businessId
            }

            let context = {
                hasUpload: true,
                headers: {
                    'accessToken': this.accessToken
                }
            }

            let request = await this.$performGraphQlQuery(this.$apollo, GET_BUSINESS_VIRAL_ID, variables, context);
            
            if (request.error) {
                this.$initiateNotification('error', 'Failed request', 'A network error occurred');
                return
            }

            let result = request.result.data.GetViralId;

            if (result.success == false) {
                this.$initiateNotification('error', 'Failed request', result.message);
                return
            }

            this.inviteId = result.viralId;

            this.$store.dispatch('business/setInviteBusinessId', this.inviteId)

        }
    },
    created () {
        if (process.browser) {
            window.addEventListener('resize', this.handleResize);
            this.GetBusinessDataFromStore();
            if (this.inviteId == "") this.generateInviteID()
        }
    },
    async mounted () {    
     
        this.pageLoader = false
    }
}
</script>

