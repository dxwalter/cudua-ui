<template>
	<div class="business">
		<div class="body-container">
			<TOPHEADER />
			<Nuxt />
			<div class="content-container">
				<SIDENAV />
				<Nuxt />
					<div class="content-area grey-bg-color">
						<!-- pageLoader -->
						<PAGELOADER v-show="pageLoader" />
						<Nuxt />

						<div class="main-content">

							<div class="page-header">
								<h4>Notifications</h4>
							</div>

							<div class="notification-listing-container">
								<div class="chat-listing">

									<div v-for="(notification, index) in returnNotification" :key="index">
										<div class="chat-recipient" 
										v-bind:class="{'is-read': notification.isRead == 1}" 

										@click="markAsRead(notification.type, notification.actionId, notification.notificationId, notification.isRead, $event)">

											<div class="chat-recipient-img">
												<img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
											</div>
											<div class="last-chat-details">
												<div class="chat-time-recipient">
													<span>{{getNotificationHeader(notification.type)}}</span>
													<span>{{formatNotificationTimer(notification.timeStamp)}}</span>
												</div>
												<div class="last-chat-preview">{{notification.message}}</div>
											</div>
										</div>
									</div>

								</div>
								<div class="load-more-action move-center mg-top-16" v-show="allNotification">
									<button class="btn btn-white" @click="loadMoreNotification()" id="notificationLoader">
										Load more
										<div class="loader-action"><span class="loader"></span></div>
									</button>
								</div>

								<div v-show="!pageLoader && !allNotification" class="alert alert-info mg-top-16">
									There is no new notification for your business
								</div>
							</div>


						</div>
						<BOTTOMNAV />
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

import { GET_BUSINESS_NOTIFICATION, MARK_BUSINESS_NOTIFICATION_AS_READ } from '~/graphql/business';
import { mapActions, mapGetters } from 'vuex';

export default {
	name: "BUSINESSNOTIFICATION",
    components: {
        TOPHEADER, SIDENAV, BOTTOMNAV, PAGELOADER
    },
    data : function () {
        return {
			pageLoader: true,
			accessToken: "",
			businessId: "",
			notifications: "",
			page: 1,
			allNotification: 0,
        }
	},
	computed: {
		returnNotification () {
			return this.notifications
		},
        ...mapGetters({
            'GetBusinessData': 'business/GetBusinessDetails',
            'GetUserData': 'customer/GetCustomerDetails'
        })
	},
	methods: {
        assignBusinessData: function () {
            let data = this.GetBusinessData
            this.businessId = data.businessId;
            let customerData = this.GetUserData;
            this.accessToken = customerData.userToken
		},
		getNotification: async function (lazyload = false) {
			
			let variables = {
				businessId: this.businessId,
				page: this.page
			}

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }

			let query = await this.$performGraphQlQuery(this.$apollo, GET_BUSINESS_NOTIFICATION, variables, context);

			if (query.error == true) {
				this.$initiateNotification('error', 'Failed request', query.message);
                return
			}

			let result = query.result.data.GetBusinessNotification;

			if (result.success == false) {
				this.$initiateNotification('error', 'Failed request', result.message);
                return
			} 

			if (result.notification != null) {
				// 12 items notifications are retrieved per query
				if (result.notification.length > 0) {
					// check if greater than 12
					if (result.notification.length > 11) {

						if (lazyload == false) {
							this.notifications = result.notification;
						} else {
							// append to notifications array
							
							for (let x of result.notification) {
								this.notifications.push(x)
							}
						}

						this.page = this.page + 1;
						this.allNotification = 1

					} else {
						if (lazyload == false) {
							this.notifications = result.notification
						} else {
							// append to notifications array
							for (let x of result.notification) {
								this.notifications.push(x)
							}
						}

						this.allNotification = 0;
					}
					return
				} 
			}
			
			this.notifications = []

			return

		},
		getNotificationLink: function (type, id) {
			return this.$businessNotificationLink(type, id)
		},
		getNotificationHeader: function (type) {
			return this.$businessNotificationTitle(type)
		},
		markAsRead: async function (type, actionId, notificationId, status, e) {
			let url = this.getNotificationLink(type, actionId);

			if (status == 0) {
				// notificatio has not been read, perform query to mark as read
				let variables = { 
					notificationId: notificationId,
					type: 'business'
				}
				let context = {
					headers: {
						'accessToken': this.accessToken
					}
				}

				let request = await this.$performGraphQlMutation(this.$apollo, MARK_BUSINESS_NOTIFICATION_AS_READ, variables, context);
				let currentCount = this.GetBusinessData.newNotificationCount - 1;
                this.$store.dispatch('business/setNotificationData', {
                    'newNotificationCount': currentCount
                })
			}

			this.$router.push(url)
		},
		formatNotificationTimer: function (timeStamp) {
			return this.$timeStampModifier(timeStamp)
		},
		loadMoreNotification: async function () {
			let target = document.getElementById('notificationLoader');
			target.disabled = true;
			let lazyload = true;
			await this.getNotification(lazyload);

			target.disabled = false
		}
	},
	async created() {
        if (process.browser) {
			this.assignBusinessData()
			await this.getNotification()
		}
    },
    mounted() {
		this.pageLoader = false
    }

}
</script>
<style scoped>
 .last-chat-preview {
	 overflow: unset;
	 -webkit-line-clamp: unset;
	 display: unset;
	 line-height: 21px;
 }
</style>