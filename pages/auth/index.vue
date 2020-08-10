<template>
    <div class="customer">
        <div class="body-container">
        <div class="sign-up-container">

            <div class="sign-up-logo-container">
                <div class="sign-up-logo">
                    <img src="~/assets/customer/image/cudua-logo-icon.svg">
                </div>

                <a href="index.html" class="btn btn-primary">Home</a>
            </div>
            
           <div class="sign-up-content">
                <div class="instruction-area">
                    <div class="sign-up-banner">
                        <img src="~/assets/customer/image/banner-image.jpg" alt="">
                    </div>

                </div>

                <div class="sign-up-form-layer">
                    <div class="sign-up-form-wrapper">
                        <div class="create-business-signup">
                            <div class="intent-bg-text">Sign into your account</div>
                            <div class="form-control">
                                <label for="businessType" class="form-label">Email address</label>
                                <input type="email" name="" id="" class="input-form">
                            </div>
                            <div class="form-control">
                                <label for="businessType" class="form-label">Password</label>
                                <input type="password" name="" id="" class="input-form">
                            </div>
                            <div class="form-control ">
                                <button class="btn btn-primary btn-block" type="button">Sign in</button>
                                <div class="fg-password"><n-link to="/auth/forgot-password">Forgot Password?</n-link></div>
                            </div>
                            <div class="form-control ">
                                <n-link to="/auth/sign-up" class="btn btn-white btn-block" type="button" data-trigger="modal" data-target="createAccountModal">Create your account</n-link>
                            </div>
            
                        </div>
                    </div>
                </div>
           </div>
            <!-- bottom links -->
            <div class="sign-up-bottom-links">
                <a href="#">Contact support</a>
                <a href="#">Privacy | Terms</a>
            </div>

        </div>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>