<template>
          <!-- confirm order modal -->
        <div class="modal-container" id="confirmedOrderModal">
            <div class="modal-dialog-box success-order-modal-container">


                <div class="modal-content">
                    <div class="thumbs-up-container">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <use xlink:href="~/assets/customer/image/all-svg.svg#thumbsUp"></use>
                        </svg>
                    </div>
                    <div class="success-order-text">
                        <p>Your order has been placed successfully.</p>
                        <div class="price-info">Expect a message from the business you ordered from.</div>
                    </div>
                    <div class="mg-bottom-32">
                        <n-link class="btn btn-primary btn-block" to="/">Continue</n-link>
                    </div>
                </div>

            </div>
        </div>
        <!-- End of confirm order -->
</template>

<script>
export default {

}
</script>

<style>

</style>