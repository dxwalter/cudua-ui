<template>
  <div class="customer">
      <div class="sign-up-container">
            <div class="sign-up-logo-container">
                <div class="sign-up-logo">
                    <img src="~/assets/customer/image/cudua-logo-icon.svg">
                </div>

                <n-link to="/" class="btn btn-primary">Home</n-link>
            </div>
            <div class="sign-up-content">
                <div class="instruction-area">
                    <div class="intent-bg-text">Reset your password</div>
                </div>

                <div class="sign-up-form-layer">
                    <div class="sign-up-form-wrapper">
                        <div class="create-business-signup">
                            <div class="form-control">
                                <label for="businessType" class="form-label">Email address</label>
                                <input type="email" name="" id="" class="input-form">
                            </div>
                            <div class="form-control ">
                                <button class="btn btn-primary btn-block" type="button">Reset password</button>
                            </div>
            
                        </div>
                        
                    </div>
                </div>
        </div>
       </div>
  </div>
</template>

<script>
export default {
    mounted () {
        document.querySelector("body").classList.remove("overflow-hidden");
    }
}
</script>

<style>

</style>