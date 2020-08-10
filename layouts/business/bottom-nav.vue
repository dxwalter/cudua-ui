<template>
  <div class="bottom-nav">
                    <!-- footer -->
        <n-link to="/b" class="bottom-nav-item">
            <div class="notif-point">10</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21">
                <use xlink:href="~/assets/business/image/all-svg.svg#productIcon"></use>
            </svg>
            <span>Products</span>
        </n-link>

        <n-link to="/b/orders" class="bottom-nav-item">
            <div class="notif-point">10</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <use xlink:href="~/assets/business/image/all-svg.svg#order"></use>
            </svg>
            <span>Orders</span>
        </n-link>

        <n-link to="/b/notifications" class="bottom-nav-item">
            <div class="notif-point">10</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <use xlink:href="~/assets/business/image/all-svg.svg#globe"></use>
            </svg>
            <span>Notification</span>
        </n-link>

        <n-link to="/c" class="bottom-nav-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 21">
                <use xlink:href="~/assets/business/image/all-svg.svg#visitShop"></use>
            </svg>
            <span>Visit shop</span>
        </n-link>
    </div>
</template>

<script>
export default {

}
</script>
