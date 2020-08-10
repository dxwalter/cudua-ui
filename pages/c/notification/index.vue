<template>
  <div class="customer">
    <div class="body-container grey-bg-color">

      <!-- beginning of navigation container -->
      <div class="nav-container">

        <MOBILESEARCH />
        <nuxt />
        <DESKTOPNAVGATION/>
        <nuxt />

        <MOBILENAVIGATION />
        <nuxt />
        
      </div>

<div class="content-container">
        <!-- bookmark area -->
        <div class="section-header"><h4>Notification</h4></div>

        <div class="notification-listing-container">
            <div class="chat-listing">

                <a href="#" class="chat-recipient">
                    <div class="chat-recipient-img">
                        <img src="~/assets/customer/image/daniel-chigisoft.jpg" alt="">
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
                        <img src="~/assets/customer/image/daniel-chigisoft.jpg" alt="">
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
                        <img src="~/assets/customer/image/daniel-chigisoft.jpg" alt="">
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
                        <img src="~/assets/customer/image/daniel-chigisoft.jpg" alt="">
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
                        <img src="~/assets/customer/image/daniel-chigisoft.jpg" alt="">
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
                        <img src="~/assets/customer/image/daniel-chigisoft.jpg" alt="">
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
                        <img src="~/assets/customer/image/daniel-chigisoft.jpg" alt="">
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

            <div class="load-more-action move-center">
                <button class="btn btn-white">Load more notifications</button>
            </div>
        </div>

    </div>
      <!-- end of content container -->

      <!-- footer area -->

      <BOTTOMADS/>
      <nuxt />

      <CUSTOMERFOOTER />
      <nuxt />

    </div>
  </div>
</template>

<script>
import MOBILENAVIGATION from '~/layouts/customer/mobile-navigation.vue'
import DESKTOPNAVGATION from '~/layouts/customer/desktop-navigation.vue'
import MOBILESEARCH from '~/layouts/customer/mobile-search.vue'
import BOTTOMADS from '~/layouts/customer/buttom-ads.vue'
import CUSTOMERFOOTER from '~/layouts/customer/customer-footer.vue'
export default {
    components: {
      DESKTOPNAVGATION, MOBILENAVIGATION, MOBILESEARCH, BOTTOMADS, CUSTOMERFOOTER
    }
}
</script>