<template>
    <div>

        <!-- update pwa app -->
        <div class="pwa-app-update-container display-none" v-show="updatePwaActionArea" data-action="update">
            <div class="d-flex">
                <div class="pwa-logo">
                    <img src="~/assets/global-asset/image/icon.png" alt="">
                </div>
                <div>
                    <div class="pwa-info-text-area">New app update available.</div>
                    <div class="pwa-action-area">
                        <button class="btn btn-primary btn-md" @click="updateAppsLatestVersion()">Update app</button>
                        <button class="btn btn-white btn-md" @click="cancelAppUpdate()">Cancel</button>
                    </div>
                </div>
            </div>
        </div>


        <!-- install pwa app -->
        <div class="pwa-app-update-container display-none"  data-action="install" id="installAppContainer">
            <div class="d-flex">
                <div class="pwa-logo">
                    <img src="~/assets/global-asset/image/icon.png" alt="">
                </div>
                <div>
                    <div class="pwa-info-text-area">Install this app now to enjoy easy access.</div>
                    <div class="pwa-action-area">
                        <button class="btn btn-primary btn-md" id="installUserPwa">Install app</button>
                        <button class="btn btn-white btn-md" @click="cancelInstallation()">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
    data () {
        return {
            updatePwaActionArea: 0,

            installPwaActionArea: 0,

            timeToInstall: 0,
            timeToUpdate: 0,
            currenTimeStamp: 0,

            installPrompt: "",


        }
    },
    computed: {
		...mapGetters({
			'GetPwaTimeStamp': 'pwa/GetPwaTimeStamp',
		}),
    },
    methods: {
        cancelAppUpdate: async function () {
            let newUpdateTime = new Date().getTime() + (86400  * 7);
            this.updatePwaActionArea = 0;

            await this.$store.dispatch('pwa/setTimeToUpdate', newUpdateTime)
        },
        updateAppsLatestVersion: async function () {

            await this.$store.dispatch('pwa/setTimeToUpdate', new Date().getTime() + (86400  * 14))
            window.location.reload(true)
        },
        initPwa: async function () {

            let timeStamps = this.GetPwaTimeStamp
            this.timeToUpdate = timeStamps.timeToUpdate
            this.currenTimeStamp =  new Date().getTime();
            this.timeToInstall = timeStamps.timeToInstall

            this.checkPwaUpdate();
        },
        checkPwaUpdate: async function() {
      
            const workbox = await window.$workbox;
             workbox.addEventListener('installed', (event) => {
                // If we don't do this we'll be displaying the notification after the initial installation, which isn't perferred.
                if (event.isUpdate) {
                    if (this.currenTimeStamp > this.timeToUpdate) {
                        this.updatePwaActionArea = 1
                    }

                }
            });
        
        },
        cancelInstallation: async function () {
            let newUpdateTime = new Date().getTime() + (86400  * 14);

            let installApp = document.getElementById('installAppContainer');
            installApp.classList.add('display-none');

            if (process.browser) {
                localStorage.setItem('cudua_retry_installation', newUpdateTime)
            }

        },

    },
    created () {

    },
    mounted () {
        if (process.client) {
            this.initPwa();
        }
    }
}
</script>

<style>

</style>