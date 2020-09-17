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
                        <div class="alert alert-info notification-alert" v-show="!pageLoader && !redeemPrice">
                            <div>Invite three businesses to register and get one month basic plan for free</div>
                        </div>
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
                                        <button class="btn btn-white btn-small" @click="copyLink('referalLink')">Copy link</button>
                                        <button class="btn btn-primary btn-small" data-single-tab="singleTab" data-target="shareInviteLink">Share link</button>
                                    </div>
                                    <div class="subscription-details" id="shareInviteLink">
                                        <div class="share-action-container d-flex ">
                                    
                                            <a :href="`whatsapp://send?text=I just created an online strore for my business. You can create yours too. Click the link below ${getInviteLink} `" target="_blank" class="close-modal-btn" data-action="share/whatsapp/share" v-show="screenWidth < 1024"  data-brand="whatsapp">
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
                                    <div class="payment-gateway" v-for="(x, index) in returnDownliners" :key="index">
                                        <n-link :to="`/${x.username}`" target="_blank" class="gateway">
                                            <div class="gateway-img">
                                                <img :data-src="getBusinessLogo(x.id, x.logo)" :alt="`${x.businessname}'s logo`"  v-show="x.logo" v-lazy-load>

                                                <div class="temporal-logo" v-show="!x.logo">
                                                    {{getNameLogo(x.businessname)}}
                                                </div>
                                            </div>
                                            <div class="gateway-name">{{x.businessname}}</div>
                                        </n-link>
                                    </div>

                                    
                                    <div class="alert alert-light notification-alert add-radius" v-show="returnDownliners.length == 0">
                                        <div>No business has registered using your link. Copy link, share the link on any social media platform to invite business owners to register.</div>
                                        <button class="btn btn-white btn-small" @click="copyLink('referalLink')">Copy link</button>
                                    </div>

                                    <div class="alert alert-light notification-alert add-radius" v-show="returnDownliners.length > 0  && redeemPrice == 0">
                                        <div>Invite {{3- returnDownliners.length}} more <span v-show="returnDownliners.length == 1">businesses</span> <span v-show="returnDownliners.length == 2">business</span> to register and get one month free basic subscription.</div>
                                        <button class="btn btn-white btn-small" @click="copyLink('referalLink')">Copy link</button>
                                    </div>

                                    <div class="alert alert-success notification-alert add-radius" v-show="returnDownliners.length == 3 && redeemPrice == 1">
                                        <div>You have successfully registered 3 businesses using your invite link. Visit plans & billing tab in your accounting settings to activate your basic plan</div>
                                        <n-link to="/b/profile/edit?billing=true" class="btn btn-white btn-small">Plans & billing</n-link>
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

import { GET_BUSINESS_VIRAL_ID, GET_VIRAL_DOWNLINERS } from '~/graphql/business'

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
            redeemPrice: "",
            downliners: []
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
        returnDownliners() {
            return this.downliners
        }
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
        getAllDownliners: async function () {
            let variables = {
                businessId: this.businessId
            }

            let context = {
                hasUpload: true,
                headers: {
                    'accessToken': this.accessToken
                }
            }

            let request = await this.$performGraphQlQuery(this.$apollo, GET_VIRAL_DOWNLINERS, variables, context);
            if (request.error) {
                this.$initiateNotification('error', 'Failed request', 'A network error occurred');
                return
            }

            let result = request.result.data.GetDownLiners;

            if (result.success == false) {
                this.$initiateNotification('info', '', result.message);
                return
            }

            this.downliners = result.businessData
            this.redeemPrice = result.redeemPrice

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

        },
		getNameLogo: function (businessName) {
			if (process.browser) {
				let name =  this.$convertNameToLogo(businessName)
				return name
			}
        },
        getBusinessLogo: function (businessId, logoPath) {
            return this.$getBusinessLogoUrl(businessId, logoPath)
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
        await this.getAllDownliners()
        this.pageLoader = false
    }
}
</script>

<style scoped>
.temporal-logo {
    border: 1px solid rgba(0, 0, 0, 0.09);
    border-radius: 4px;
}
.add-radius {
    border-radius: 4px !important;
}
</style>