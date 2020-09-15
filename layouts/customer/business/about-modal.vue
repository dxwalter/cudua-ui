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
			<h4>About Oremit power solution limited</h4>
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
					<h2>Oremit Power Solution Limited</h2>
					<div class="profile-username">@appleComputer</div>
				</div>

				<div class="business-address">
					<svg xmlns="http://www.w3.org/2000/svg">
						<use xlink:href="~/assets/customer/image/all-svg.svg#mapPlace"></use>
					</svg>
					<p>39 Ada-George road, opposite Eagle palace hotel, Port Harcourt, Rivers state.</p>
				</div>

				<div class="business-review">
					<a href="javasscript:;" class="navbar-review-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
							<use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
							<use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
							<use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
							<use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
							<use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
						</svg>
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
								<div class="contact-details d-flex-between">
									<span>08104685729</span>
									<a href="#" class="close-modal-btn">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" class="margin-unset">
											<use xlink:href="~/assets/customer/image/all-svg.svg#phone"></use>
										</svg>
									</a>
								</div>
								<div class="contact-details d-flex-between">
									<span>08104685729</span>
									<a href="#" class="close-modal-btn">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" class="margin-unset">
											<use xlink:href="~/assets/customer/image/all-svg.svg#phone"></use>
										</svg>
									</a>
								</div>
								<div class="contact-details d-flex-between">
									<span>theceoforlife@gmail.com</span>
									<a href="#" class="close-modal-btn">
										<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" class="margin-unset">
											<use xlink:href="~/assets/customer/image/all-svg.svg#email"></use>
										</svg>
									</a>
								</div>
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

							</div>
						</div>
					
						<button class="btn btn-primary btn-block" data-trigger="modal" data-target="reportModal">Report this business</button>
					</div>

				</div>

			</div>

		</div>
		<!-- end of mobile search container -->

	</div>
</div>
</template>

<script>
export default {
	name: "ABOUTBUSINESSMODAL",
	data() {
		return {
			aboutBusiness: "",
			businessId: "",
			address: "",
			businessCategories: "",
			logo: "",
			coverPhoto: "",
			businessName: "",
			reviewScore: 0
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
            })
        }
	}
}
</script>
<style>

</style>