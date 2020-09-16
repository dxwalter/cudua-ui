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
					<img src="~/assets/customer/image/background.jpg" alt="">
				</div>
				<div class="business-logo-cover">
					<img src="~/assets/customer/image/mainOremitLogo.png" alt="">
				</div>
				<button class="btn btn-primary btn-md">Follow business</button>
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
						<STARRATING :rating=reviewScore :show-rating="false" :read-only="true" active-color="#ef860e" :round-start-rating="false"></STARRATING>
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
					
						<button class="btn btn-white btn-block" data-trigger="modal" data-target="reportModal">Report this business</button>

						<button class="btn btn-primary btn-block mg-top-8" data-target="businessDetailsModal" data-dismiss="modal">Close </button>
					</div>

				</div>

			</div>

		</div>
		<!-- end of mobile search container -->

	</div>
</div>
</template>

<script>
import STARRATING from 'vue-star-rating'

export default {
	name: "ABOUTBUSINESSMODAL",
	components: {
		STARRATING	
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
			contact: ""
		}
	},
	computed: {
		getBusinessAddress: function() {
			if (this.address == null) return "Not available";

			return `${this.address.number} ${this.address.street}, ${this.address.community}, ${this.address.state} ${this.address.country}`
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
			
			console.log(newArray)

            let finalArray = [];

            for (const [index, x] of newArray.entries()) {
                finalArray.push(x)
            }

			return finalArray

		}
	},
	created() {
        if (process.browser) {
            this.$nuxt.$on('BusinessDetails', (data) => {
				this.businessId = data.businessId
				this.address = data.address
				this.businessCategories = data.categories
				this.logo = data.logo,
				this.coverPhoto = data.coverPhoto
				this.businessName = data.name
				this.reviewScore = data.reviewScore
				this.username = data.username,
				this.description = data.description
				this.contact = data.contact
            })
        }
	}
}
</script>
<style scoped>
.mg-top-8{
	margin-top: 8px;
}
</style>