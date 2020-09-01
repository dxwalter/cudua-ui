<template>
	<div class="business">
		<div class="body-container">
				<TOPHEADER></TOPHEADER>
				<div class="content-container">
						<SIDENAV></SIDENAV>
						<div class="content-area grey-bg-color">
							<!-- pageLoader -->
							<PAGELOADER v-if="pageLoader"></PAGELOADER>
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
												<n-link to="/b/profile/edit" class="close-modal-btn profile-edit-btn">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
														<use xlink:href="~/assets/customer/image/all-svg.svg#pencil"></use>
													</svg>
												</n-link>
												<img src="~/assets/business/image/cover-photo.png" alt="" v-if="businessCoverPhoto.length > 0">
												<div class="no-cover-photo" v-else>
													No cover photo has been added to your business profile
												</div>
											</div>
											<div class="logo-area">
												<div class="temporal-logo" v-show="!logo">
													{{getNameLogo(businessName)}}
												</div>
												<img :src="logo" alt=""  v-show="logo">
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
												<a href="javasscript:;" class="navbar-review-icon d-flex-between"  data-trigger="modal" data-target="reviewModal">
													<STARRATING :rating=reviewScore :show-rating="false" :read-only="true" active-color="#ef860e" :round-start-rating="false"></STARRATING>
													<div class="review-action">read all reviews</div>
												</a>
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
															
															<div class="contact-details" v-if="categories.length < 1">
																No product category has been added to your shop
															</div>

															<div class="contact-details"  v-else v-for="(category, index) in getBusinessCategories" :key="index">
																{{category}}
															</div>

															<nuxt-link to="/b/categories/add-Categories" class="btn btn-white" v-if="categories.length < 1">Add categories</nuxt-link>
															<nuxt-link to="/b/categories/" class="btn btn-white"  v-if="categories.length > 0">Edit categories</nuxt-link>
														</div>
													</div>
												</div>

											</div>

										</div>

									</div>
								</div>
							</div>
							<BOTTOMNAV></BOTTOMNAV>
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

import STARRATING from 'vue-star-rating'

export default {
	name: "BUSINESSPROFILE",
    components: {
		TOPHEADER, SIDENAV, BOTTOMNAV, PAGELOADER,
		STARRATING
    },
    data: function() {
        return {
            pageLoader: true,
            logo: "",
            businessCoverPhoto: "",
            businessName: "",
            username: "",
            businessAddress: "",
            reviewScore: 0,
			businessPhone: "",
			businessEmail: "",
			categories: "",
			businessId: ""
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
		},
		getBusinessCategories () {
			return this.categories
		},
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
			this.businessId = data.businessId

            // logo
            if (data.logo) {
                this.logo = this.$getBusinessLogoUrl(this.businessId, data.logo)
            } else {
                this.logo = ""
            }
			// this.logo = data.logo

			this.businessCoverPhoto = data.coverPhoto
			this.username = data.username
			this.categories = data.businessCategories.length < 1 ? [] : this.formatBusinessCategories(data.businessCategories)
			this.businessEmail = data.contact.email,
			this.businessPhone = data.contact.phone.length < 1 ? [] : this.formatBusinessPhoneList(data.contact.phone) 
			this.businessAddress = this.formatAddress(data.address);
			this.reviewScore = data.reviewScore
		},
		getNameLogo: function (businessName) {
			if (process.browser) {
				let name =  this.$convertNameToLogo(businessName)
				return name
			}
		}
    },
    created() {
        if (process.browser) this.assignBusinessData()
    },
    mounted () {
		this.pageLoader = false
    }
}
</script>

<style scoped>
	.d-flex-between *{
		align-self: center;
	}
</style>