<template>
    <div class="body-container">
        <TOPHEADER />
        <nuxt/>
        <div class="content-container">
            <SIDENAV />
            <nuxt />
                <div class="content-area grey-bg-color">
                    <div class="main-content">

						<div class="page-header">
							<h4>Notifications</h4>
						</div>

						<div class="notification-listing-container">
							<div class="chat-listing">

								<a href="#" class="chat-recipient">
									<div class="chat-recipient-img">
										<img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
									</div>
									<div class="last-chat-details">
										<div class="chat-time-recipient">
											<span>John Mayers</span>
											<span>3 min ago</span>
										</div>
										<div class="last-chat-preview">Lorem ipsum dolor sit amet dsdf sdsd ctetur Lorem ipsum dolor sit amet </div>
									</div>
								</a>
								<a href="#" class="chat-recipient is-read">
									<div class="chat-recipient-img">
										<img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
									</div>
									<div class="last-chat-details">
										<div class="chat-time-recipient">
											<span>John Mayers</span>
											<span>3 min ago</span>
										</div>
										<div class="last-chat-preview">Lorem ipsum dolor sit amet dsdf sdsd ctetur Lorem ipsum dolor sit amet </div>
									</div>
								</a>
					
								<a href="#" class="chat-recipient">
									<div class="chat-recipient-img">
										<img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
									</div>
									<div class="last-chat-details">
										<div class="chat-time-recipient">
											<span>John Mayers</span>
											<span>3 min ago</span>
										</div>
										<div class="last-chat-preview">Lorem ipsum dolor sit amet dsdf sdsd ctetur Lorem ipsum dolor sit amet </div>
									</div>
								</a>
								<a href="#" class="chat-recipient is-read">
									<div class="chat-recipient-img">
										<img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
									</div>
									<div class="last-chat-details">
										<div class="chat-time-recipient">
											<span>John Mayers</span>
											<span>3 min ago</span>
										</div>
										<div class="last-chat-preview">Lorem ipsum dolor sit amet dsdf sdsd ctetur Lorem ipsum dolor sit amet </div>
									</div>
								</a>
								<a href="#" class="chat-recipient is-read">
									<div class="chat-recipient-img">
										<img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
									</div>
									<div class="last-chat-details">
										<div class="chat-time-recipient">
											<span>John Mayers</span>
											<span>3 min ago</span>
										</div>
										<div class="last-chat-preview">Lorem ipsum dolor sit amet dsdf sdsd ctetur Lorem ipsum dolor sit amet </div>
									</div>
								</a>
								<a href="#" class="chat-recipient">
									<div class="chat-recipient-img">
										<img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
									</div>
									<div class="last-chat-details">
										<div class="chat-time-recipient">
											<span>John Mayers</span>
											<span>3 min ago</span>
										</div>
										<div class="last-chat-preview">Lorem ipsum dolor sit amet dsdf sdsd ctetur Lorem ipsum dolor sit amet </div>
									</div>
								</a>
								<a href="#" class="chat-recipient">
									<div class="chat-recipient-img">
										<img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
									</div>
									<div class="last-chat-details">
										<div class="chat-time-recipient">
											<span>John Mayers</span>
											<span>3 min ago</span>
										</div>
										<div class="last-chat-preview">Lorem ipsum dolor sit amet dsdf sdsd ctetur Lorem ipsum dolor sit amet </div>
									</div>
								</a>

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

