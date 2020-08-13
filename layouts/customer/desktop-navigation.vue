<template>
         <!-- beginning of desktop nav -->
        <div class="desktop-nav-container card">
          <n-link to="/" class="desktop-logo">
            <img src="~/assets/customer/image/cudua-logo-full.svg" alt="">
          </n-link>

          <div class="desktop-search-container">
            <div class="position-relative">
              <input type="text" name="" id="" class="desktop-search" placeholder="Search for a product or business">
              <div class="recent-search-list-container display-none">
                <n-link to="#">Infinix hot 7 <span>- 57 results</span></n-link>
                <n-link to="#">Infinix hot 7 <span>- 57 results</span></n-link>
                <n-link to="#">Infinix hot 7 <span>- 57 results</span></n-link>
                <n-link to="#">Infinix hot 7 <span>- 57 results</span></n-link>
                <n-link to="#">Infinix hot 7 <span>- 57 results</span></n-link>
              </div>
            </div>
            <button class="btn btn-primary btn-search">Search</button>
          </div>

          <div class="desktop-nav-link">

            <n-link to="/" class="desktop-menu-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24.706" height="21" viewBox="0 0 24.706 21">
                  <use xlink:href="~/assets/customer/image/all-svg.svg#homeIcon"></use>
                </svg>
            </n-link>

            <n-link to="/c/cart" class="desktop-menu-item">
              <div class="notif-point">10</div>
              <svg xmlns="http://www.w3.org/2000/svg">
                <use xlink:href="~/assets/customer/image/all-svg.svg#order"></use>
              </svg>
            </n-link>

            <n-link to="/c/notification" class="desktop-menu-item">
              <div class="notif-point">10</div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <use xlink:href="~/assets/customer/image/all-svg.svg#globe"></use>
              </svg>
            </n-link>

            <div class="dropdown-container">

              <button class="desktop-menu-item search-filter-action">
                <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="navigationDropdown">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <use xlink:href="~/assets/customer/image/all-svg.svg#caretDown"></use>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" class="last-svg">
                  <use xlink:href="~/assets/customer/image/all-svg.svg#times"></use>
                </svg>
              </button>
        
              <div class="navigation-dropdown" id="navigationDropdown">
                <n-link to="/c/orders" class="mobile-side-nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.74 16.378">
                    <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                    </svg>
                    <span>My orders</span>
                </n-link>
                <n-link to="/c/following" class="mobile-side-nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <use xlink:href="~/assets/customer/image/all-svg.svg#followers"></use>
                    </svg>
                    <span>Following</span>
                </n-link>
                <n-link to="/c/saved-items" class="mobile-side-nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.349 15">
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

            <n-link to="/auth/create-store" class="btn btn-white btn-search"><span class="glow">Create shop</span></n-link>

          </div>

        </div>
        <!-- end of desktop nav -->
</template>

<script>
export default {
  name: 'DESKTOPNAVGATION'
}
</script>

<style>

</style>