<template>
  <div class="customer">
    <div class="body-container grey-bg-color">

        <!-- beginning of navigation container -->
        <div class="nav-container">

            <MOBILESEARCH></MOBILESEARCH>
            <DESKTOPNAVGATION></DESKTOPNAVGATION>
            <MOBILENAVIGATION></MOBILENAVIGATION>
            
        </div>

        <!-- pageLoader -->
        <PAGELOADER v-show="pageLoader"></PAGELOADER>

        <div class="content-container">
            <!-- bookmark area -->
            <div class="section-header"><h4>Notification</h4></div>

                <div class="notification-listing-container">
                    <div class="chat-listing">

                        <div v-for="(notification, index) in returnNotification" :key="index">
                            <div class="chat-recipient" 
                            v-bind:class="{'is-read': notification.isRead == 1}" 

                            @click="markAsRead(notification.type, notification.actionId, notification.notificationId, notification.isRead, $event)">
                                <div class="last-chat-details">
                                    <div class="chat-time-recipient">
                                        <span>{{notification.header}}</span>
                                        <span>{{formatNotificationTimer(notification.timeStamp)}}</span>
                                    </div>
                                    <div class="last-chat-preview">{{notification.message}}</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="load-more-action move-center mg-top-16" v-show="notificationCount == 12">
                        <button class="btn btn-white" @click="loadMoreNotification()" id="loadMoreNotification">
                            Load more
                            <div class="loader-action"><span class="loader"></span></div>
                        </button>
                    </div>

                    <div v-show="!pageLoader && notificationCount < 12" class="alert alert-info mg-top-16">
                        There is no new notification
                    </div>
                </div>

        </div>
      <!-- end of content container -->

      <!-- footer area -->

      <BOTTOMADS></BOTTOMADS>
      <CUSTOMERFOOTER></CUSTOMERFOOTER>

    </div>
  </div>
</template>

<script>

import MOBILENAVIGATION from '~/layouts/customer/mobile-navigation.vue';
import DESKTOPNAVGATION from '~/layouts/customer/desktop-navigation.vue';
import MOBILESEARCH from '~/layouts/customer/mobile-search.vue';
import BOTTOMADS from '~/layouts/customer/buttom-ads.vue';
import CUSTOMERFOOTER from '~/layouts/customer/customer-footer.vue';
import PAGELOADER from '~/components/loader/loader.vue';

import { GET_CUSTOMER_NOTIFICATION } from '~/graphql/customer'

import { MARK_BUSINESS_NOTIFICATION_AS_READ } from '~/graphql/business';

import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
    name: "CUSTOMERNOTIFICATION",
    components: {
      DESKTOPNAVGATION, MOBILENAVIGATION, MOBILESEARCH, BOTTOMADS, CUSTOMERFOOTER, PAGELOADER
    },
    data: function() {
        return {
            pageLoader: true,
            accessToken: "",
            page: 1,
            allNotifications: [],
            notificationCount: 0,
            serverError: 0,
            errorReason: ""
        }
    },
    computed: {
		...mapGetters({
            'GetLoginStatus': 'customer/GetLoginStatus',
            'GetCustomerDetails': 'customer/GetCustomerDetails'
        }),
		LoginStatus () {
			return this.GetLoginStatus
        },
        returnNotification () {
            return this.allNotifications
        }
    },
    methods:{
        getUserData: function () {
            this.accessToken = this.GetCustomerDetails.userToken
        },
		formatNotificationTimer: function (timeStamp) {
			return this.$timeStampModifier(timeStamp)
        },
        loadMoreNotification: async function() {
            let page = this.page + 1;

            let target = document.getElementById('loadMoreNotification');
            target.disabled = true
            await this.getNotifications(page)
            target.disabled = false
        },
        getNotifications: async function (page = 1) {

            let variables = {
                page: page
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }

            let request = await this.$performGraphQlQuery(this.$apollo, GET_CUSTOMER_NOTIFICATION, variables, context);

            if (request.error) {
                this.$initiateNotification('error', 'Oops!', request.message);
                this.serverError = 1;
                this.errorReason = result.message
                return
            }

            let result = request.result.data.GetCustomerNotification;

            if (result.success == false) {
                this.$initiateNotification('error', 'Oops!', result.message);
                this.serverError = 1
                this.errorReason = result.message
                return
            }

            if (result.notification == null) {
                this.notificationCount = 0
                return
            }

            
            for (let x of result.notification) {
                this.allNotifications.push(x)
            }


            this.notificationCount = result.notification.length

            this.page = page
        },
		getNotificationLink: function (type, id) {
			return this.$customerNotificationLink(type, id)
		},
		getNotificationHeader: function (type) {
			return this.$customerNotificationTitle(type)
		},
		markAsRead: async function (type, actionId, notificationId, status, e) {
			let url = this.getNotificationLink(type, actionId);

			if (status == 0) {
				// notification has not been read, perform query to mark as read
				let variables = { 
					notificationId: notificationId,
					type: 'customer'
				}
				let context = {
					headers: {
						'accessToken': this.accessToken
					}
				}

				let request = await this.$performGraphQlMutation(this.$apollo, MARK_BUSINESS_NOTIFICATION_AS_READ, variables, context);
                let currentCount = this.GetCustomerDetails.newNotificationCount - 1;
                
                this.$store.dispatch('customer/setNotificationCount', currentCount)
			}

			this.$router.push(url)
		},
    },
    created: async function () {
		if (process.browser) {
            let status = this.LoginStatus
            if (status == false) {
                return this.$router.push('/')
            }
            this.getUserData()
            this.getNotifications()
		}
    },
    mounted () {
        this.pageLoader = false
    }
}
</script>
<style scoped>
    .chat-recipient {
        cursor: pointer;
    }

    .chat-recipient:hover {
        background-color: #f4f4f4;
    }

    .notification-listing-container {
        width: 100%;
    }
</style>