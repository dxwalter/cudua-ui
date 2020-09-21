<template>
  <div class="modal-container mobile-search-modal-container" id="businessDetailsModal">
	<div class="modal-dialog-box business-details-modal">
	
		<div class="card close-business-modal">
			<!-- close search modal -->
			<button class="modal-search-close-btn" data-target="businessDetailsModal" data-dismiss="modal">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.512 18.341">
				<use xlink:href="~/assets/customer/image/all-svg.svg#modalArrowLeft"></use>
			</svg>
			</button>
			<div class="about-biz-header">
			<h4>About {{businessName}}</h4>
			</div>
			<!-- end of search input area -->
		</div>

		<!-- beginning of mobile search container -->
		<div class="mobile-search-container no-padding white-bg-color">

			<div class="business-image-area">
				<div class="business-cover-photo">
					<img :data-src="coverPhoto" :alt="businessName" v-if="coverPhoto.length > 0" v-lazy-load>
					<div class="no-cover-photo" v-else>
						No cover photo has been added by this business
					</div>
				</div>
				<div class="business-logo-cover">
					<div class="temporal-logo" v-show="!logo">
						{{getNameLogo(businessName)}}
					</div>
					<img :data-src="logo" :alt="`${businessName}'s logo`"  v-show="logo" v-lazy-load>
				</div>

				<div v-show="checkFollowStatus > -1">
					<button class="btn btn-primary btn-md" @click="followBusiness()" v-show="accessToken && checkFollowStatus == 0" id="followBusiness">
						Follow business
						<div class="loader-action"><span class="loader"></span></div>	
					</button>

					<button class="btn btn-light-grey btn-md" @click="unFollowBusiness()" v-show="accessToken && checkFollowStatus == 1" id="unfollowBusiness">
						unfollow
						<div class="loader-action"><span class="loader"></span></div>	
					</button>
				</div>


				<button class="btn btn-primary btn-md" data-target="customerSignInModal" data-trigger="modal" v-show="!accessToken && checkFollowStatus == -1">
					Follow business
				</button>
			</div>

			<div class="profile-content-container">
				<div class="business-name">
					<h2>{{businessName}}</h2>
					<div class="profile-username">@{{username}}</div>
				</div>

				<div class="business-address">
					<svg xmlns="http://www.w3.org/2000/svg">
						<use xlink:href="~/assets/customer/image/all-svg.svg#mapPlace"></use>
					</svg>
					<p>{{getBusinessAddress}}.</p>
				</div>

				<div class="business-review">
					<a href="javasscript:;" class="navbar-review-icon">
						<StarRating :score=reviewScore></StarRating>
					</a>
					<a href="#" class="review-action" data-trigger="modal" data-target="reviewModal">read all revirews</a>
				</div>

				<div class="business-tab-area">
					<div class="business-tab-header" id="tabList">
						<a href="#" class="business-tab-menu-item is-active" id="tabLink" data-tab="contactDetails">Contact details</a>
						<a href="#" class="business-tab-menu-item" id="tabLink" data-tab="categoryDetails">Category details</a>
					</div>

					<div id="tabContent">
						<div class="tab-content-area is-active" id="contactDetails">
							<div class="business-contact">
								
								<div class="contact-details d-flex-between" v-for="(x, index) in getPhoneNumber" :key="index">
									<span>{{x}}</span>
									<a :href="`tel: ${x}`" class="close-modal-btn">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" class="margin-unset">
											<use xlink:href="~/assets/customer/image/all-svg.svg#phone"></use>
										</svg>
									</a>
								</div>

								<div class="contact-details d-flex-between">
									<span>{{getEmail}}</span>
									<a :href="`mailto: ${getEmail}`" class="close-modal-btn">
										<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" class="margin-unset">
											<use xlink:href="~/assets/customer/image/all-svg.svg#email"></use>
										</svg>
									</a>
								</div>
							</div>
						</div>

						<!-- FOR CATEGORIES -->
						<div class="tab-content-area" id="categoryDetails">
							<div class="business-contact" v-show="getCategories.length > 0">
								<div class="contact-details" v-for="x in getCategories" :key="x">
									{{x}}
								</div>
								

							</div>
							<div v-show="getCategories.length == 0" class="mg-top-8">
								<div class="alert alert-info">No category has been added to this business</div>
							</div>
						</div>

						<button class="btn btn-primary btn-block mg-top-8" data-target="businessDetailsModal" data-dismiss="modal">Back to shop</button>
					</div>

				</div>

			</div>

		</div>
		<!-- end of mobile search container -->

	</div>
	</div>
</template>

<script>
import StarRating from '~/plugins/vue-star-rating.client.vue';
import { mapActions, mapGetters } from 'vuex';

import {
	IS_CUSTOMER_FOLLOWING_BUSINESS,
	FOLLOWBUSINESS,
	UNFOLLOWBUSINESS	
} from '~/graphql/customer'

export default {
	name: "ABOUTBUSINESSMODAL",
	components: {
		StarRating,
	},
	data() {
		return {
			aboutBusiness: "",
			businessId: "",
			address: "",
			businessCategories: "",
			logo: "",
			coverPhoto: "",
			businessName: "",
			reviewScore: 0,
			username: "",
			description: "",
			contact: "",
			accessToken: "",
			showLoginModal: 0,
			checkFollowStatus: -1
		}
	},
	computed: {
        ...mapGetters({
			'GetAnonymousId': 'customer/GetAnonymousId',
			'GetUserData': 'customer/GetCustomerDetails'
        }),
		getBusinessAddress: function() {
			if (this.address == null) return "Not available";

			return `${this.address.number} ${this.address.street}, ${this.address.community}, ${this.address.state} ${this.address.country}`
		},
		getBusinessId: function () {
			return this.businessId
		},
		getCategories: function() {
			if (this.businessCategories.length == 0) {
				return []
			}

			let newDataArray = [];

			for (let x of this.businessCategories) {
				if (x.hide == 0) {
					newDataArray.push(x.categoryName)
				}
				
			}

			return newDataArray
		},
		getEmail: function() {
			return this.contact.email
		},
		getPhoneNumber: function() {
			if (this.contact.phone == undefined || this.contact.phone.length == 0){
				 return []
			}
			let newPhoneArray = []
			
			if (this.contact.whatsapp.status == 1) {
				if (this.contact.whatsapp.number != null) newPhoneArray.push(this.contact.whatsapp.number)
			}

			for (let x of this.contact.phone) {
				newPhoneArray.push(x)
			}

			let newArray = new Set(newPhoneArray);

            let finalArray = [];

            for (const [index, x] of newArray.entries()) {
                finalArray.push(x)
            }

			return finalArray

		}
	},
	methods: {
		followBusiness: async function () {
			
			let target = document.getElementById('followBusiness');

			let variables = {
				businessId: this.businessId
			}

			let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }
		

			target.disabled = true;

			let query = await this.$performGraphQlMutation(this.$apollo, FOLLOWBUSINESS, variables, context);
			
			target.disabled = false;

            if (query.error) {
                this.$initiateNotification('error', "Network error", query.message)
                return
            }

            let result = query.result.data.FollowBusiness;

            if (result.success == false) {
                this.$initiateNotification('error', "", result.message)
                return
			}

			this.$initiateNotification('success', "", result.message)
			
			this.checkFollowStatus = 1

		},
		unFollowBusiness: async function () {
			let target = document.getElementById('unfollowBusiness');

			let variables = {
				businessId: this.businessId
			}

			let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }
		

			target.disabled = true;

			let query = await this.$performGraphQlMutation(this.$apollo, UNFOLLOWBUSINESS, variables, context);
			
			target.disabled = false;

            if (query.error) {
                this.$initiateNotification('error', "Network error", query.message)
                return
            }

            let result = query.result.data.UnfollowBusiness;

            if (result.success == false) {
                this.$initiateNotification('error', "", result.message)
                return
			}

			this.$initiateNotification('success', "", result.message)
			
			this.checkFollowStatus = 0
		},
		isCustomerFollowingBusiness: async function(businessId) {

			if (!this.accessToken) {
				return
			}

			let variables = {
				businessId: businessId
			}

			let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }
        

            let query = await this.$performGraphQlQuery(this.$apollo, IS_CUSTOMER_FOLLOWING_BUSINESS, variables, context);

            if (query.error) {
                this.$initiateNotification('error', "Network error", query.message)
                return
            }

            let result = query.result.data.IsCustomerFollowingBusiness;

            if (result.success == false) {
                this.$initiateNotification('error', "", result.message)
                return
			}
			
			if (result.status == true) this.checkFollowStatus = 1
			if (result.status == false) this.checkFollowStatus = 0
		},
		getNameLogo: function (businessName) {
			if (process.browser) {
				let name =  this.$convertNameToLogo(businessName)
				return name
			}
		},
		getUserDataFromStore: function () {
            let customerData = this.GetUserData
            this.accessToken = customerData.userToken
		}
	},
	created() {
        if (process.browser) {
			this.getUserDataFromStore()
            this.$nuxt.$on('BusinessDetails', async (data) => {
				this.businessId = data.businessId

				this.isCustomerFollowingBusiness(data.businessId)

				this.address = data.address
				this.businessCategories = data.categories
				this.logo = data.logo.length > 0 ? this.$getBusinessLogoUrl(this.businessId, data.logo) : ""
				this.coverPhoto = data.coverPhoto.length > 0 ? this.$getBusinessCoverPhotoUrl(this.businessId, data.coverPhoto): ""
				this.businessName = data.name
				this.reviewScore = data.reviewScore
				this.username = data.username,
				this.description = data.description
				this.contact = data.contact,
				this.accessToken = data.accessToken
			});
        }
	},
	async mounted() {
		
	}
}
</script>
<style scoped>
.mg-top-8{
	margin-top: 8px;
}
</style>