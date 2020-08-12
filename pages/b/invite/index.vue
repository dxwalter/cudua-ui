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
                        <PAGELOADER v-if="pageLoader" />
                        <nuxt />

                        <div class="main-content">
                            <div class="page-header">
                                <h4>Invite businesses</h4>
                            </div>

                            <div class="plan-option">
                                <div class="subscription-list invite">
                                    <div class="subcription-info">
                                        <div class="invite-link" id="referalLink">https://www.cudua.com/register?referal=1232ddcd</div>
                                    </div>
                                        
                                    <div>
                                        <button class="btn btn-default btn-small" @click="copyLink('referalLink')">Copy link</button>
                                        <button class="btn btn-primary btn-small" data-single-tab="singleTab" data-target="shareInviteLink">Share link</button>
                                    </div>
                                    <div class="subscription-details" id="shareInviteLink">
                                        <div class="share-action-container d-flex ">
                                    
                                            <a href="#" class="close-modal-btn" data-brand="whatsapp">
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
export default {
    components: {
        TOPHEADER, SIDENAV, BOTTOMNAV, PAGELOADER
    },
    data: function() {
        return {
            pageLoader: true
        }
    },
    methods: {
        copyLink: function (target) {
            this.$copyToClipBoard(target)
        }
    },
    mounted () {    
        setTimeout(() => {
            this.pageLoader = false
        }, 5000);
    }
}
</script>

