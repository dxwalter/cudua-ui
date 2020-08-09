<template>
		<div class="body-container">
				<TOPHEADER />
				<nuxt/>
				<div class="content-container">
						<SIDENAV />
						<nuxt />
								<div class="content-area grey-bg-color">
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
															<h2>Oremit Power Solution Limited</h2>
															<div class="profile-username">@appleComputer</div>
														</div>

														<div class="business-address">
															<svg xmlns="http://www.w3.org/2000/svg">
																<use xlink:href="~/assets/business/image/all-svg.svg#mapPlace"></use>
															</svg>
															<p>39 Ada-George road, opposite Eagle palace hotel, Port Harcourt, Rivers state.</p>
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
																		<div class="contact-details">
																			08104685729
																		</div>
																		<div class="contact-details">
																			08104685729
																		</div>
																		<div class="contact-details">
																			theceoforlife@gmail.com
																		</div>

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
</template>

<script>

import TOPHEADER from '~/layouts/business/top-navigation.vue';
import SIDENAV from '~/layouts/business/side-bar.vue';
import BOTTOMNAV from '~/layouts/business/bottom-nav.vue';
export default {
		components: {
				TOPHEADER, SIDENAV, BOTTOMNAV
		}
}
</script>

