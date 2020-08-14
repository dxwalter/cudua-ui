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
            
           <div class="sign-up-content">
                <div class="instruction-area">
                    <div class="intent-bg-text">Create an online store for your business</div>
                    <div class="sign-up-banner">
                        <img src="~/assets/customer/image/banner-image.jpg" alt="">
                    </div>
                    <div class="sign-up-tips">
                        <div class="tips-header">Create your store in two steps</div>
                        <div class="tips-listing">
                            <div class="sign-up-checkbox">
                                <svg height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
                                    <use xlink:href="~/assets/customer/image/all-svg.svg#bigCheckBox"></use>
                                </svg>
                                <div class="check-tip-text">
                                    Sign in or create personal account
                                </div>
                            </div>
                            <div class="sign-up-checkbox">
                                <svg height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
                                    <use xlink:href="~/assets/customer/image/all-svg.svg#bigCheckBox"></use>
                                </svg>
                                <div class="check-tip-text">
                                    Create business account
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="sign-up-form-layer">
                    <div class="sign-up-form-wrapper">
                        <div class="create-business-signup ">
                            <div class="create-account-info">Sign in or create an account</div>
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
                                <div class="fg-password"><a href="forgot-password.html">Forgot Password?</a></div>
                            </div>
                            <div class="form-control ">
                                <button class="btn btn-white btn-block" type="button" data-trigger="modal" data-target="createAccountModal">Create personal account</button>
                            </div>
            
                        </div>
                        <div class="display-none">
                            <div class="form-control">
                                <label for="businessType" class="form-label">Business name</label>
                                <input type="text" name="" id="" class="input-form">
                            </div>
                            <div class="form-control">
                                <label for="businessType" class="form-label">Business username</label>
                                <input type="text" name="" id="" class="input-form">
                            </div>
                            <div class="form-control">
                                <button class="btn btn-block btn-primary" type="button">Continue to store manager</button>
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
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
	name: 'CREATE-BUSINESS',
	data: function() {
		return {
			isLoggedIn: "",
		}
	},
    created() {
        if (process.client) {
            window.addEventListener('resize', this.handleResize);
        }
    },

    computed: {
		...mapGetters({
			'GetAnonymousId': 'customer/GetAnonymousId',
			'GetLoginStatus': 'customer/GetLoginStatus'
		}),
        handleResize() {
            this.screenWidth = window.innerWidth;
		},
		LoginStatus () {
			this.isLoggedIn = this.GetLoginStatus
		}
    },
    methods: {
        toggleCustomerNavBar: function (e) {
            e.preventDefault();
            let navToggle = document.getElementById('navToggleButton');
            navToggle.classList.toggle('is-active');

            let sideNav = document.getElementById('mobileSideNav');
            let sideNavContent = document.getElementById("mobileSideNavContent");

            let toggleStatus = navToggle.getAttribute('data-toggle-status');

            this.screenWidth <= 1023 ? this.$showCustomerMobileNav(sideNav, sideNavContent, toggleStatus) : sideNav.classList.toggle('js-fold-nav');
            
            navToggle.getAttribute('data-toggle-status') == "1" ? navToggle.setAttribute('data-toggle-status', '0') : navToggle.setAttribute('data-toggle-status', '1');
		}
    },
    mounted () {
		this.LoginStatus
    }
}
</script>

<style>

</style>