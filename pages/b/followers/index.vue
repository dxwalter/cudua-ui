<template>
	<div class="business">
		<div class="body-container">
			<TOPHEADER></TOPHEADER>
			<Nuxt />
			<div class="content-container">
				<SIDENAV></SIDENAV>
				<Nuxt />
				<div class="content-area grey-bg-color">
					<!-- pageLoader -->
					<PAGELOADER v-show="pageLoader"></PAGELOADER>
					<Nuxt />
					<div class="main-content">

						<div class="page-header">
							<h4>Followers</h4>
						</div>

						<div><!-- main content goes in here -->
							<div class="row">
										
								<div class="col-xs-6 col-sm-6 col-md-4 col-lg-3" v-for="(follower, index) in returnComputedFollowers" :key="index">
									<div class="product-card">
										<div class="product-card-image d-flex-center">
											<div class="temporal-logo" v-show="!follower.profilePhoto">
												{{getNameLogo(follower.name)}}
											</div>
											<div class="temporal-logo"  v-show="follower.profilePhoto" >
											<img :data-src="`${getImageInLogoSize(follower.userId, follower.profilePhoto)}`" :alt="`${follower.name}`" v-lazy-load>
											</div>
										</div>
										<div class="product-card-details">
											<div class="product-name">
												{{follower.name}}
											</div>
											<div class="navbar-review-icon">
												<STARRATING :rating=follower.reviewScore :show-rating="false" :read-only="true" active-color="#ef860e" :round-start-rating="false"></STARRATING>
												<Nuxt />
											</div>
										</div>
									</div>
								</div>

							</div>

							<div class="load-more-action move-center mg-top-16" v-show="followersCount >= 12">
								<button class="btn btn-white" @click="loadMoreFollowers()" id="loadMoreFollowers">
									Load more followers
									<div class="loader-action"><span class="loader"></span></div>
								</button>
							</div>

							<div v-show="!followersCount && !pageLoader">
								<div class="alert alert-info notification-alert">
									<div id="infoArea">You do not have any new follower. Do not fret, you can gain followers by sharing your shop's URL/address</div>
									<button class="btn btn-white btn-small"  data-trigger="modal" data-target="changeUsername">Share shop address</button>
								</div>
							</div>

						</div>
					</div>
					<BOTTOMNAV></BOTTOMNAV>
					<Nuxt />
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import TOPHEADER from '~/layouts/business/top-navigation.vue';
import SIDENAV from '~/layouts/business/side-bar.vue';
import BOTTOMNAV from '~/layouts/business/bottom-nav.vue';
import PAGELOADER from '~/components/loader/loader.vue';

import { GET_BUSINESS_FOLLOWERS } from '~/graphql/business';
import { mapGetters } from 'vuex';

import STARRATING from 'vue-star-rating'


export default {
	name: "BUSINESSFOLLOWERS",
    components: {
		TOPHEADER, SIDENAV, BOTTOMNAV, PAGELOADER,
		STARRATING
    },
    data : function () {
        return {
			pageLoader: true,
			businessId: "",
			accessToken: "",
			followers: 0,
			followersCount: 0,
			isError: 0,
			page: 1,
        }
	},
	created () {
		if (process.browser) {
			this.GetBusinessDataFromStore();
			this.GetBusinessFollowers()
		}
	},
	computed: {
		returnComputedFollowers () {
			return this.followers
		}
	},
	methods: {
        ...mapGetters({
			'GetBusinessData': 'business/GetBusinessDetails',
			'GetUserData': 'customer/GetCustomerDetails'
		}),
        GetBusinessDataFromStore: function () {
            let businessData = this.GetBusinessData();
			this.businessId = businessData.businessId
			let customerData = this.GetUserData();
            this.accessToken = customerData.userToken
		},
		GetBusinessFollowers: async function () {

			let variables = {
				businessId: this.businessId,
				page: this.page
			}

			let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }

			let query = await this.$performGraphQlQuery(this.$apollo, GET_BUSINESS_FOLLOWERS, variables, context);
			
			if (query.error) {
				this.$initiateNotification('error', 'Failed request', query.message);
                return
			}

			let result = query.result.data.GetFollowers;

			if (result.success == false) {
				this.isError = 1
				this.$initiateNotification('error', 'Error occurred', result.message);
				return
			}

			// if (result.customerData == null ) {
			// 	this.followersCount = this.followersCount + 0
			// 	return
			// }
			
			this.followersCount = this.followersCount + result.customerData.length

			if (this.page < 2) {
				this.followers = result.customerData
			} else {
				this.followersCount = result.customerData.length < 12 ? 0 : this.followersCount + result.customerData.length
				for (let x of result.customerData) {
					this.followers.push(x)
				}
			}

			this.page = this.page + 1;

		},
		loadMoreFollowers: function () {
			let target = document.getElementById('loadMoreFollowers');
			target.disabled = true

			this.GetBusinessFollowers();

			target.disabled = false
		},
		getNameLogo: function (name) {
			return this.$convertNameToLogo(name)
		},
		getImageInLogoSize: function(userId, imagePath) {
			return this.$getCustomerProfilePictureUrl(userId, imagePath)
		}
	},
    mounted() {

		this.pageLoader = false
    }

}
</script>
<style scoped>
	.d-flex-center {
		display: flex !important;
		justify-content: center !important;
		align-items: center !important;
	}
	.notification-alert {
		border-radius: 4px;
	}
</style>