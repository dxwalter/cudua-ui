<template>
      <div class="modal-container" id="changeUsername">
        <div class="modal-dialog-box">

            <div class="modal-header">
                <h4>Change business username</h4>

                <button class="close-modal-btn" data-target="changeUsername" data-dismiss="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                        <use xlink:href="~/assets/business/image/all-svg.svg#times"></use>
                    </svg>
                </button>
            </div>

            <div class="modal-content">
                <div class="chosen-username mg-bottom-16">
                    <div class="opacity-0" id="usernameLink">https://cudua.com/bubbieklassiq</div>
                    <span>https://cudua.com/</span><span>bubbieklassiq</span>
                </div>

                <div class="form-control">
                    <label for="businessType" class="form-label">Share your business link</label>                    
                    <div class="share-action-container d-flex justify-content-between">
                
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

                    <button class="btn btn-white btn-block" @click="copyLink('usernameLink')">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="margin-unset">
                            <use xlink:href="~/assets/business/image/all-svg.svg#copyIcon"></use>
                        </svg>
                        <span class="mg-left-16">Copy link</span>
                    </button>
                    
                </div>

            </div>
            
            <div class="modal-footer">
                <button class="btn btn-default btn-light-grey" data-target="changeUsername" data-dismiss="modal">Close</button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    methods: {
        copyLink: function (target) {
            this.$copyToClipBoard(target)
        }
    },
    mounted () {

    }
}
</script>

<style>

</style>