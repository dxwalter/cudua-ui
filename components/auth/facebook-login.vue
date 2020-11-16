<template>
  <div>
        <div v-show="pageReady">
            <div class="form-control">
                <button class="facebook-btn btn" type="button" @click="LoginWithFacebook()">
                    <img src="~/assets/global-asset/image/facebookLogo.svg" alt="">
                    Sign in with facebook
                </button>
            </div>

            <div class="sign-in-option mg-bottom-32">or sign in with</div>
        </div>

  </div>
</template>

<script>
export default {
    data() {
        return {
            pageReady: 0
        }
    },
    methods: {
        LoginWithFacebook: async function () {
            let x = await window.FB.AppEvents.logPageView(); 
            console.log(x)
        },
        loadFacebookSDK: async function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        },
        initFacebook: async function () {
            window.fbAsyncInit = function() {
                window.FB.init({
                    appId      : '405350337318190',
                    cookie     : true,
                    xfbml      : true,
                    version    : 'v9.0'
                });
            };
        },
    },
    async mounted () {
        await this.loadFacebookSDK(document, "script", "facebook-jssdk");
        await this.initFacebook()
        this.pageReady = 0
    }
}
</script>

<style>

</style>