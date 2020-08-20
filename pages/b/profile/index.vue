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
							<!-- content goes in here -->
							<div class="main-content">

								<div class="page-header">
									<h4>Business profile</h4>
								</div>

								<div>
									<!-- main content goes in here -->
									<div class="business-profile-container">
										<div class="cover-photo-area">
											<div class="cover-photo-container">
												<img src="~/assets/business/image/cover-photo.png" alt="">
											</div>
											<div class="logo-area">
												<img src="~/assets/business/image/mainOremitLogo.png" alt="">
											</div>
										</div>

										<div class="profile-content-container">
											<div class="business-name">
												<h2>{{businessName}}</h2>
												<div class="profile-username">@{{username}}</div>
											</div>

											<div class="business-address">
												<svg xmlns="http://www.w3.org/2000/svg">
													<use xlink:href="~/assets/business/image/all-svg.svg#mapPlace"></use>
												</svg>
												<p>{{getBusinessFormattedAddress}}</p>
											</div>

											<div class="business-review">
												<a href="javasscript:;" class="navbar-review-icon">
													<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
														<use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
													</svg>
													<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
														<use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
													</svg>
													<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
														<use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
													</svg>
													<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
														<use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
													</svg>
													<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
														<use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
													</svg>
												</a>
												<a href="#" class="review-action" data-trigger="modal" data-target="reviewModal">read revirews</a>
											</div>

											<div class="business-tab-area">
												<div class="business-tab-header" id="tabList">
													<a href="#" class="business-tab-menu-item is-active" id="tabLink" data-tab="contactDetails">Contact details</a>
													<a href="#" class="business-tab-menu-item" id="tabLink" data-tab="categoryDetails">Category details</a>
												</div>

												<div id="tabContent">
													<div class="tab-content-area is-active" id="contactDetails">
														<div class="business-contact">
															<div class="contact-details" v-if="businessPhone.length < 1">
																Edit your profile to add your business phone number
																
															</div>
															<div  v-else v-for="(phone, index) in getBusinessPhoneNumbers" :key="index"  class="contact-details">
																{{phone}}
															</div>
															
															<div class="contact-details" v-if="businessEmail.length < 1">
																Edit your profile to add your business phone number
															</div>

															<div class="contact-details" v-else>{{businessEmail}}</div>


															<nuxt-link to="/b/profile/edit" class="btn btn-white">Edit profile</nuxt-link>
														</div>
													</div>

													<!-- FOR CATEGORIES -->
													<div class="tab-content-area" id="categoryDetails">
														<div class="business-contact">
															<div class="contact-details">
																Shoes
															</div>
															<div class="contact-details">
																Jewelries
															</div>
															<div class="contact-details">
																Trousers
															</div>

															<nuxt-link to="/b/categories" class="btn btn-white">Edit categories</nuxt-link>
														</div>
													</div>
												</div>

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
	</div>
</template>

<script>

import TOPHEADER from '~/layouts/business/top-navigation.vue';
import SIDENAV from '~/layouts/business/side-bar.vue';
import BOTTOMNAV from '~/layouts/business/bottom-nav.vue';
import PAGELOADER from '~/components/loader/loader.vue'
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
	name: "BUSINESSPROFILE",
    components: {
        TOPHEADER, SIDENAV, BOTTOMNAV, PAGELOADER
    },
    data: function() {
        return {
            pageLoader: false,
            logo: "",
            businessCoverPhoto: "",
            businessName: "",
            username: "",
            businessAddress: "",
            reviewScore: 0,
			businessPhone: "",
			businessEmail: "",
            categories: "",
        }
	},
	computed: {
		getBusinessFormattedAddress () {
			if (typeof this.businessAddress == "string") {
				return "Edit your profile to add your business addresss";
			} else if (typeof this.businessAddress == "object") {
				return `
					${this.businessAddress.number}, 
					${this.businessAddress.street}
					${this.businessAddress.community},
					${this.businessAddress.state}.
				`
			}
		},
		getBusinessPhoneNumbers () {
			return this.businessPhone
		}
	},
    methods: {
        ...mapGetters({
            'GetBusinessData': 'business/GetBusinessDetails'
		}),
		formatBusinessCategories: function (data) {
			let catArrays = []
			if (data.length > 0) {
				for (const [index, x] of data.entries()) {
					catArrays.push(x.categoryName)
				}
				return catArrays
			}
		},
		formatBusinessPhoneList: function (data) {
			let phone = []
			for (let x of data) {
				phone.push(x)
			}
			return phone
		},
		formatAddress: function(address) {
			if (address.street == undefined || address.street.length == 0) {
				return "";
			}

			return address
		},
        assignBusinessData: function () {
            let data = this.GetBusinessData()
			this.businessName = data.businessName;
			this.logo = data.logo
			this.businessCoverPhoto = data.coverPhoto
			this.username = data.username
			this.categories = data.businessCategories.length < 1 ? [] : this.formatBusinessCategories(data.businessCategories)
			this.businessEmail = data.contact.email,
			this.businessPhone = data.contact.phone.length < 1 ? [] : this.formatBusinessPhoneList(data.contact.phone) 
			this.businessAddress = this.formatAddress(data.address);
			this.reviewScore = data.reviewScore
        }
    },
    created() {
        if (process.browser) this.assignBusinessData()
    },
    mounted () {
        
    }
}
</script>