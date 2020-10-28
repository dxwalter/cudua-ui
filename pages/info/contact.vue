<template>
        <div class="customer">
              <div class="body-container">
                <div class="sign-up-container">

                    <div class="sign-up-logo-container">
                        <div class="sign-up-logo">
                            <img src="~/assets/customer/image/cudua-logo-icon.svg">
                        </div>

                        <n-link to="/" class="btn btn-primary">Home</n-link>
                    </div>
                    
                    <div class="sign-up-content terms-contdion">
                        <div class="intent-bg-text">About cudua</div>

                    </div>
                    <div class="sign-up-bottom-links">
                        <n-link to="/info/about">About Cudua</n-link>
                        <n-link to="/info/contact">Contact support</n-link>
                        <n-link to="/info/terms-and-condition">Terms and condition</n-link>
                        <n-link to="/info/privacy-and-cookey">Privacy and Cookey policy</n-link>
                    </div>
                </div>
              </div>
        </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .sign-up-content {
        display: block !important;
    }
    .terms-contdion {
        line-height: 21px;
    }

    .terms-contdion p {
        font-size: 14px;
        margin-bottom: 16px;
    }
</style>