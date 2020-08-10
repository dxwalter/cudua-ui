<template>
        <!-- Beginning of mobile side nav -->
        <div class="mobile-side-nav" id="mobileSideNav">
          <div class="mobile-side-nav-content" id="mobileSideNavContent">
            <div class="sign-in-area">
              <n-link to="/auth/sign-in" class="btn btn-white btn-primary-border">Sign in</n-link>
              <n-link to="/auth/sign-up" class="btn btn-white btn-primary-border">Sign up</n-link>
            </div>
            <n-link to="/c/cart" class="mobile-side-nav-link">
              <svg xmlns="http://www.w3.org/2000/svg">
                <use xlink:href="~/assets/customer/image/all-svg.svg#order"></use>
              </svg>
              <span>My cart (5)</span>
            </n-link>
            <n-link to="/c/notification" class="mobile-side-nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <use xlink:href="~/assets/customer/image/all-svg.svg#globe"></use>
              </svg>
              <span>Notification</span>
            </n-link>
            <n-link to="/c/orders" class="mobile-side-nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.74 16.378">
                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
              </svg>
              <span>My orders</span>
            </n-link>
            <n-link to="/c/following" class="mobile-side-nav-link">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 384 512">
                <use xlink:href="~/assets/customer/image/all-svg.svg#bookmark"></use>
              </svg>
              <span>Bookmarks</span>
            </n-link>
            <n-link to="/c/saved-items" class="mobile-side-nav-link">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16.349 15">
                <use xlink:href="~/assets/customer/image/all-svg.svg#heart"></use>
              </svg>
              <span>Saved for later</span>
            </n-link>
            <n-link to="/c/profile" class="mobile-side-nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <use xlink:href="~/assets/customer/image/all-svg.svg#person"></use>
              </svg>
              <span>My profile</span>
            </n-link>
            <n-link to="/c/profile/edit" class="mobile-side-nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18.505" viewBox="0 0 18 18.505">
                <use xlink:href="~/assets/customer/image/all-svg.svg#profile"></use>
              </svg>
              <span>Account setting</span>
            </n-link>
            <n-link to="#" class="mobile-side-nav-link">
              <svg xmlns="http://www.w3.org/2000/svg">
                <use xlink:href="~/assets/customer/image/all-svg.svg#logout"></use>
              </svg>
              <span>Logout</span>
            </n-link>
          </div>
        </div>
        <!-- end of mobile side nav -->
</template>

<script>
export default {

}
</script>

<style>

</style>