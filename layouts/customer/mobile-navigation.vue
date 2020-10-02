<template>
        <!-- Beginning of mobile side nav -->
        <div class="mobile-side-nav" id="mobileSideNav">
          <div class="mobile-side-nav-content" id="mobileSideNavContent">

            <div class="sign-in-area" v-show="!isLoggedIn">
              <n-link to="/auth/" class="btn btn-white btn-primary-border">Sign in</n-link>
              <n-link to="/auth/sign-up" class="btn btn-white btn-primary-border">Sign up</n-link>
            </div>

            <n-link :to="`/${username}`" class="mobile-side-nav-link" v-show="isLoggedIn && isBusinessOwner">
              <svg xmlns="http://www.w3.org/2000/svg">
                <use xlink:href="~/assets/customer/image/all-svg.svg#visitShop"></use>
              </svg>
              <span>My shop</span>
            </n-link>

            <n-link to="/c/cart" class="mobile-side-nav-link">
              <svg xmlns="http://www.w3.org/2000/svg">
                <use xlink:href="~/assets/customer/image/all-svg.svg#order"></use>
              </svg>
              <span>My cart</span>
			  <div class="notif-point" v-show="numberOfItemsInCart">{{numberOfItemsInCart}}</div>
            </n-link>

            <n-link to="/c/notification" class="mobile-side-nav-link" v-show="isLoggedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <use xlink:href="~/assets/customer/image/all-svg.svg#globe"></use>
              </svg>
              <span>Notification</span>
			  <div class="notif-point">10</div>
            </n-link>

            <n-link to="/c/orders" class="mobile-side-nav-link"  v-show="isLoggedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.74 16.378">
                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
              </svg>
              <span>My orders</span>
            </n-link>

            <n-link to="/c/following" class="mobile-side-nav-link" v-show="isLoggedIn">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">
                <use xlink:href="~/assets/customer/image/all-svg.svg#followers"></use>
              </svg>
              <span>Following</span>
            </n-link>

            <n-link to="/c/saved-items" class="mobile-side-nav-link" v-show="isLoggedIn">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16.349 15">
                <use xlink:href="~/assets/customer/image/all-svg.svg#heart"></use>
              </svg>
              <span>Saved for later</span>
            </n-link>

            <n-link to="/c/profile" class="mobile-side-nav-link" v-show="isLoggedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <use xlink:href="~/assets/customer/image/all-svg.svg#person"></use>
              </svg>
              <span>My profile</span>
            </n-link>

            <n-link to="/c/profile/edit" class="mobile-side-nav-link" v-show="isLoggedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18.505" viewBox="0 0 18 18.505">
                <use xlink:href="~/assets/customer/image/all-svg.svg#profile"></use>
              </svg>
              <span>Account setting</span>
            </n-link>

            <n-link to="/c/logout" class="mobile-side-nav-link" v-show="isLoggedIn">
              <svg xmlns="http://www.w3.org/2000/svg">
                <use xlink:href="~/assets/customer/image/all-svg.svg#logout"></use>
              </svg>
              <span>Logout</span>
            </n-link>
          
		  </div>

		  <INITCOMPONENT></INITCOMPONENT>
        </div>
        <!-- end of mobile side nav -->
</template>

<script>

import { mapActions, mapGetters, mapMutations } from 'vuex'
import INITCOMPONENT from '~/components/init.component.vue';

export default {
	name: 'MOBILENAVIGATIONCOMPONENT',
	components: {INITCOMPONENT},
	data: function () {
		return {
			openedModalTarget: "",
			screenWidth: "",
			isLoggedIn: false,
			isBusinessOwner: false,
			username: "",
			numberOfItemsInCart: 0
		}
	},
	props: {
		cartTrigger: {
			type: Number,
			default: 0
		}
	},
    created() {
        if (process.client) {
			window.addEventListener('resize', this.handleResize);
			this.LoginStatus()
			this.numberOfItemsInCart = this.GetCartItems()
        }
    },
    computed: {
        handleResize() {
            this.screenWidth = window.innerWidth;
		},
	},
    watch: {
      cartTrigger: function () {
        this.numberOfItemsInCart = this.GetCartItems()
      }
    },
	methods: {
		...mapGetters({
			'GetLoginStatus': 'customer/GetLoginStatus',
			'GetBusinessStatus': 'business/GetBusinessStatus',
			'GetBusinessDetails': 'business/GetBusinessDetails',
			"GetCartItems": "cart/GetCartItems"
		}),
		LoginStatus () {
			this.isLoggedIn = this.GetLoginStatus();
			this.isBusinessOwner = this.GetBusinessStatus();
			this.username = this.GetBusinessDetails().username
		},
		clearFormInput: function() {
			let formInput = document.querySelectorAll('[data-clear-form]');
			if (formInput.length) this.$clearFormInput(formInput)
		},
		openModal: function() {
			let openModalAction = document.querySelectorAll("[data-trigger]");
			for (const action of openModalAction) {
				action.addEventListener('click', (e) => {
					e.preventDefault();
					this.openedModalTarget = action.getAttribute('data-target');
					console.log(this.openedModalTarget)
					this.$openModal(this.openedModalTarget);
				})
			}
		},
		closeOpenModal: function () {
			let closeModalAction = document.querySelectorAll('[data-dismiss]');
			for (const action of closeModalAction) {
				action.addEventListener('click', (e) => {
					e.preventDefault();
					this.openedModalTarget = action.getAttribute('data-target');
					this.$closeModal(this.openedModalTarget);
				})
			}
		},
		singleTabClicks: function () {
			let singleTabClick = document.querySelectorAll('[data-single-tab]');
			for (const action of singleTabClick) {
				action.addEventListener('click', (e) => {
					e.stopPropagation();
					let getTarget = e.target;
					let singleTabContainer = document.getElementById(getTarget.getAttribute('data-target'));
					singleTabContainer.classList.toggle(`showEffect`);
				})
			}
		},
		closeModalWithOptions: function () {
			// close modal with esc key
			window.onkeyup = (e) => {
				e.preventDefault();
				if (e.keyCode == 27) {
					document.querySelector('.overflow-hidden') !== null ? this.$closeModal(this.openedModalTarget) : ""
				}
			}

			// close modal by clicking outside the modal window
			window.addEventListener("click", (e) => {
				for (const action of document.querySelectorAll(".modal-container")) {
					if (e.target === action) {
						this.$closeModal(this.openedModalTarget);
					}
				}
			});

		},
		showMobileSearch: function(mobilePrimarySearchInput) {
			mobilePrimarySearchInput.addEventListener('focus', e => {
				// this.openedModalTarget = 'mobileSearchModal';
				// this.$openModal(this.openedModalTarget)
				// let modalSearchForm = document.getElementById('mobileSearchInput');
				// modalSearchForm.focus() //focus
				// modalSearchForm.value = mobilePrimarySearchInput.value; //change value
				// mobilePrimarySearchInput.blur()
				mobilePrimarySearchInput.value = '';
				
				this.$router.push('/search')
			});
		},
		customerTabs: function () {
			// filter tab for search
			let allFilterTabLinks = document.querySelectorAll("#FilterTabList > #filterTabLink");
			// tabs
			let Tabs = document.querySelectorAll("#tabList > #tabLink");

			for (let i = 0; i < Tabs.length; i++) {
				Tabs[i].addEventListener("click", event => {
					this.$customerTabClicks(event, "#tabContent", ".tab-content-area", Tabs)
				})
			}

			for (let c = 0; c < allFilterTabLinks.length; c++) {
				allFilterTabLinks[c].addEventListener("click", event => {
					this.$customerTabClicks(event, "#filterTabContent", ".filter-tab-content-area", allFilterTabLinks)
				})
			}
		},
		rangeSlider: function () {
			let rangeSlider = document.querySelectorAll('[data-range]');
			this.$rangeController(rangeSlider);

			let rangeFilterSlider = document.querySelectorAll('[data-filter-range]');
			this.$rangeController(rangeFilterSlider);
		},
		carouselSlider: function () {
			let carouselNavigation = document.querySelectorAll('[data-carousel]');
			for (const action of carouselNavigation) {
				action.addEventListener('click', (e) => {
					e.stopPropagation();
					let getDataAttribute = e.target;
					let targetCarousel = getDataAttribute.getAttribute('data-target');
					let carouselSlide = document.getElementById(targetCarousel)
					let carouselDirection = getDataAttribute.getAttribute('data-direction');
					let carouselItems = document.querySelectorAll(`#${targetCarousel} .carousel-item`);
					let size = carouselItems[0].clientWidth + 16;
					
					if (carouselDirection == 'left') {
						this.$carouselActionSlider(carouselSlide, 'left', 30, size, 10);
					} else {
						this.$carouselActionSlider(carouselSlide, 'right', 30, size, 10);
					}
				})
			}
		},
	},
	mounted () {
		document.querySelector("body").classList.remove("overflow-hidden");

		this.clearFormInput()
		this.openModal()
		this.closeOpenModal()
		this.singleTabClicks()
		this.closeModalWithOptions()

		let mobilePrimarySearchInput = document.getElementById('mobilePrimarySearchInput');
		if (mobilePrimarySearchInput) this.showMobileSearch(mobilePrimarySearchInput)

		this.customerTabs()
		this.rangeSlider()
		this.carouselSlider()

	}
}
</script>

<style>

</style>