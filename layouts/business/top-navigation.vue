<template>
  <div class="top-nav-bar">
        
        <div class="d-flex">
            <button class="nav-toggle-btn hamburger hamburger--spring" id="navToggleButton" data-toggle-status="0" v-on:click="toggleNavBar">
                <div class="notif-point md-display-none" v-show="getTotalNotificationCount > 0">{{getTotalNotificationCount}}</div>
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
            <!-- <n-link to="/b/" class="nav-logo">
                <img src="~/assets/business/image/cudua-logo-icon.svg" alt="">
                <img src="~/assets/business/image/cudua-logo-full.svg" alt="">
            </n-link> -->
            <n-link to="/" class="btn btn-white btn-icon nav-home-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24.706" height="21" viewBox="0 0 24.706 21">
                    <use xlink:href="~/assets/business/image/all-svg.svg#homeIcon"></use>
                </svg> 
            </n-link>
            
        </div>

        <div class="nav-links d-flex">
            <n-link to="#" class="btn btn-white btn-icon">
                <input type="checkbox" name="" class="dropdownCheckBox" data-single-tab="singleTab" data-target="navNotification">
                <div class="notif-point" v-show="notificationCount">{{notificationCount}}</div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <use xlink:href="~/assets/business/image/all-svg.svg#globe"></use>
                </svg> 
            </n-link>
            <n-link :to="`/${username}`" class="btn btn-white btn-md">My shop</n-link>
            <n-link to="/b/product/add-product" class="btn btn-primary btn-md">Add products</n-link>
        </div>

        <div class="nav-notification-container product-card" id="navNotification">
            <div class="notification-dd-header">
                <h3>Notification</h3>
                <n-link to="/b/profile/edit" class="btn btn-small btn-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18.505" viewBox="0 0 18 18.505">
                        <use xlink:href="~/assets/business/image/all-svg.svg#profile"></use>
                    </svg>
                </n-link>
            </div>

            
                <div class="chat-recipient" v-for="(notification, index) in getComputedNotifications" :key="index" v-bind:class="{'is-read': notification.isRead == 1}"

                @click="markAsRead(notification.type, notification.actionId, notification.notificationId, notification.isRead, $event)">
                    <div class="chat-recipient-img">
                        <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
                    </div>
                    <div class="last-chat-details">
                        <div class="chat-time-recipient">
                            <span>{{getNotificationHeader(notification.type, notification.header)}}</span>
                            <span>{{formatNotificationTimer(notification.timeStamp)}}</span>
                        </div>
                        <div class="last-chat-preview">{{notification.message}}</div>
                    </div>
                </div>
        

            <n-link to="/b/notification" class="chat-recipient text-center display-block">
                All notifications
            </n-link>
        </div>

        <BUSINESSREVIEW></BUSINESSREVIEW>
        <Nuxt />
        <USERNAMEMODAL></USERNAMEMODAL>
        <Nuxt />
        <NOTIFICATION></NOTIFICATION>
        <Nuxt />
  </div>
</template>

<script>
import BUSINESSREVIEW from '~/components/business/businessreview/business.review.vue';
import USERNAMEMODAL from '~/components/business/profile/username.vue'; 
import NOTIFICATION from '~/components/notification/notification.vue'; 

import { GET_BUSINESS_NOTIFICATION, MARK_BUSINESS_NOTIFICATION_AS_READ, GET_NEW_NOTIFICATION_COUNT, GET_NEW_ORDER_COUNT } from '~/graphql/business';

import { UPDATE_ONE_SIGNAL_ID } from '~/graphql/customer';

import { mapActions, mapGetters } from 'vuex';

export default {
    name: "TOPNAVIGATION",
    components: {
        BUSINESSREVIEW, USERNAMEMODAL, NOTIFICATION
    },
    data: function () {
        return {
            businessName: "",
			accessToken: "",
			businessId: "",
            notifications: "",
            username: "",
			page: 1,
            allNotification: 0,
            notificationCount: 0,
            getCount: 1,
            isLoggedIn: '',
            isBusiness: '',
            newBusinessOrderCount: '',
            oneSignalId: ""
        }
    },
    head() {
        return {
            title: `${this.businessName} - Shop manager`,
            meta: [
                { name: 'robot', content: 'noindex'}
            ]
        }
    },
    async created () {
        if (process.browser) {
            window.addEventListener('resize', this.handleResize);
            this.assignBusinessData()
            this.getStatusData()

            await this.getNotification();
            this.newNotifier();
            this.getNewOrderCount()
        }
    },
    computed: {
        getTotalNotificationCount () {
            // a combination of new order and notification
            return this.newBusinessOrderCount + this.notificationCount;
        },
        handleResize() {
            this.screenWidth = window.innerWidth;
        },
        getComputedNotifications () {
            if (this.notifications != null && this.notifications.length > 4) {
                return this.notifications.slice(0, 4)
            } else {
                return this.notifications
            }
		},
		LoginStatus () {
			return this.GetLoginStatus()
        },
        BusinessStatus () {
            return this.GetBusinessStatus()
        }
    },
    methods : {
        ...mapGetters({
            'GetLoginStatus': 'customer/GetLoginStatus',
            'GetBusinessStatus': 'business/GetBusinessStatus',
            'GetBusinessData': 'business/GetBusinessDetails',
            'GetUserData': 'customer/GetCustomerDetails'
        }),
        toggleNavBar: function () {
            let navToggle = document.getElementById('navToggleButton');
            let sideNav = document.getElementById('sideNav');
            let sideNavContent = document.getElementById("sideNavContent");
            this.screenWidth <= 1023 ? this.$showMobileNav(sideNav, sideNavContent, navToggle) : sideNav.classList.toggle('js-fold-nav');
        },
        getStatusData: function () {
            let status = this.LoginStatus
            this.isLoggedIn = status;

            if (status == false) 
                return this.$router.push('/');

            let businessStatus = this.BusinessStatus;
            this.isBusiness = businessStatus;

            if (businessStatus.length < 1) 
                return this.$router.push('/');
        },
        assignBusinessData: function () {
            let data = this.GetBusinessData()
            this.businessId = data.businessId;
            this.businessName = data.businessName;
            this.username = data.username;
            let customerData = this.GetUserData();
            this.accessToken = customerData.userToken
            this.oneSignalId = customerData.oneSignalId
		},
		getNotification: async function () {
			
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
				this.notificationCount = 0;
                return
			} 
            
            this.notifications = result.notification;
			
		},
		getNotificationLink: function (type, id) {
			return this.$businessNotificationLink(type, id)
		},
		getNotificationHeader: function (type, header) {
            return this.$businessNotificationTitle(type, header)
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
                let currentCount = this.GetBusinessData().newNotificationCount < 1 ? 0: this.GetBusinessData().newNotificationCount - 1;

                this.$store.dispatch('business/setNotificationData', {
                        'newNotificationCount': currentCount
                })
			}

			this.$router.push(url)
		},
		formatNotificationTimer: function (timeStamp) {
            return this.$timeStampModifier(timeStamp)
        },
        newNotifier: async function () {
            let variables = {
                businessId: this.businessId
            };

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }

            let request = await this.$performGraphQlQuery(this.$apollo, GET_NEW_NOTIFICATION_COUNT, variables, context);

            if (request.error == false) {
                let result = request.result.data.GetBusinessNotificationCount;
                if (result.success) {
                    let count = result.count;
                    this.notificationCount = count
                    this.$store.dispatch('business/setNotificationData', {
                        'newNotificationCount': count
                    })
                }
            }
            this.getCount = 1
        },
        saveOneSignalUserId: async function (userOneSignalId) {

            if (this.oneSignalId == userOneSignalId || userOneSignalId.length < 1) return

            let variables = {
                oneSignalId: userOneSignalId
            }

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }

            let request = await this.$performGraphQlMutation(this.$apollo, UPDATE_ONE_SIGNAL_ID, variables, context);

            if (request.error) return

            let result = request.result.data.editUsersOneSignalId;

            if (result.success == false) return

            this.oneSignalId = userOneSignalId
            await this.$store.dispatch('customer/setCustomerData', userOneSignalId)

        },
        getOneSignalId: async function () {

            // window.OneSignal = window.OneSignal || [];
            this.$OneSignal.push(async () => {
                let oneSignalId = localStorage.getItem('cudua-onesignal-user');
                if(oneSignalId === null) {
                    this.$OneSignal.getUserId((userId) => {
                        if (userId == null) return
                        this.saveOneSignalUserId(userId)
                        localStorage.setItem('cudua-onesignal-user', userId);
                    });
                } else {
                    this.saveOneSignalUserId(oneSignalId);
                }
            });
        },
        getNewOrderCount: async function () {

            let variables = {
                businessId: this.businessId
            };

            let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }

            let request = await this.$performGraphQlQuery(this.$apollo, GET_NEW_ORDER_COUNT, variables, context);

            if (request.error == false) {
                let result = request.result.data.GetNewOrderCount;
                if (result.success) {
                    let count = result.count;
                    this.newBusinessOrderCount = count
                    this.$store.dispatch('business/setNotificationData', {
                        'newOrderCount': count
                    })
                }
            }
        }
    
    },
    watch: {
    },
    intervalId: null,
    mounted () {
        document.querySelector("body").classList.remove("overflow-hidden");
        // if lg
        if (this.isLoggedIn && this.isBusiness) {
            this.$options.intervalId = setInterval(() => {
                this.newNotifier()
                this.getNewOrderCount()
            }, 120000);

            // 60000
            this.getOneSignalId()
        }
    },
    beforeDestroy () {
        clearInterval(this.$options.intervalId);
    }

}
</script>
<style scoped>
    .notification-dd-header {
        background-color: white;
    }
</style>