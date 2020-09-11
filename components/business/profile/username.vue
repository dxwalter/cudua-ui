<template>
      <div class="modal-container" id="changeUsername">
        <div class="modal-dialog-box">

            <div class="modal-header">
                <h4>Share your shop address/URL</h4>

                <button class="close-modal-btn" data-target="changeUsername" data-dismiss="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                        <use xlink:href="~/assets/business/image/all-svg.svg#times"></use>
                    </svg>
                </button>
            </div>

            <div class="modal-content">
                <div class="chosen-username mg-bottom-16">
                    <div class="opacity-0" id="usernameLink">https://cudua.com/{{username}}</div>
                    <span>https://cudua.com/</span><span>{{username}}</span>
                </div>

                <div class="form-control">
                    <label for="businessType" class="form-label">Share your business link</label>                    
                    <div class="share-action-container d-flex justify-content-between">
                
                        <a :href="`whatsapp://send?text=Visit my online store to find quality products https://cudua.com/${username}`" target="_blank" class="close-modal-btn hide-whatsapp" data-action="share/whatsapp/share" data-brand="whatsapp">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="margin-unset">
                                <use xlink:href="~/assets/business/image/all-svg.svg#whatsappIcon2"></use>
                            </svg>
                        </a>

                        <a :href="`https://www.facebook.com/sharer/sharer.php?u=https://www.cudua.com/${username}`" class="close-modal-btn btn-white" data-brand="facebook">
                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="margin-unset">
                                <use xlink:href="~/assets/business/image/all-svg.svg#facebookRoundIcon"></use>
                            </svg>
                        </a>

                        <a :href="`https://twitter.com/home?status=https://www.cudua.com/${username}`" class="close-modal-btn" data-brand="twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="margin-unset">
                                <use xlink:href="~/assets/business/image/all-svg.svg#twitterIcon2"></use>
                            </svg>
                        </a>

                    </div>

                    <button class="btn btn-primary btn-block" @click="copyLink('usernameLink')">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="margin-unset white-fill">
                            <use xlink:href="~/assets/business/image/all-svg.svg#copyIcon"></use>
                        </svg>
                        <span class="mg-left-16">Copy link</span>
                    </button>

                    <n-link to="/b/profile/edit" class="btn btn-block btn-white mg-top-8">Change username</n-link>
                    
                </div>

            </div>
            
            <div class="modal-footer">
                <button class="btn btn-default btn-light-grey" data-target="changeUsername" data-dismiss="modal">Close</button>
            </div>

        </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    name: "SHAREURL",
    components: {

    },
    data: function () {
        return {
            username: "",
        }
    },
    created () {
        if (process.browser) {
            this.GetBusinessDataFromStore();
        }
    },
    methods: {
        ...mapGetters({
            'GetBusinessData': 'business/GetBusinessDetails'
        }),
        copyLink: function (target) {
            this.$copyToClipBoard(target)
        },
        GetBusinessDataFromStore: function () {
            let businessData = this.GetBusinessData();
            this.username = businessData.username
        }
    },
    mounted () {

    }
}
</script>
<style scoped>
    .white-fill {
        fill: white !important;
    }
    @media(min-width: 1024) {
        .hide-whatsapp {
            display: none;
        }
    }
</style>