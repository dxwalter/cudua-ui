<template>
          <!-- checkout modal -->
        <div class="modal-container" id="checkoutModal">
            <div class="modal-dialog-box">

                <!-- header -->
                <div class="modal-header">
                    <h4>Place order</h4>

                    <button class="close-modal-btn" data-target="checkoutModal" data-dismiss="modal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                            <use xlink:href="~/assets/customer/image/all-svg.svg#times"></use>
                        </svg>
                    </button>
                </div>
                <!-- end of header -->

                <div class="modal-content">

                    <div class="checkout-container">

                        <div class="card accordion-chip-card">
                            <a href="#" class="accord-chip-action">
                                <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="addressBox" checked>
                                <div class="accord-chip-name">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                        <use xlink:href="~/assets/customer/image/all-svg.svg#mapMaker"></use>
                                    </svg>
                                    <span>Address</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.05 13.616">
                                    <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                                </svg>
            
                            </a>
                            <div class="accordion-address-content accordion-content showEffect" id="addressBox">
                                <p class="mg-bottom-8">59 Igbogo road Choba, Obio-akpor, Rivers state, Nigeria</p>
                                <div class="display-flex-end">
                                    <n-link to="/c/profile/edit" class="close-modal-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="margin-unset">
                                            <use xlink:href="~/assets/customer/image/all-svg.svg#pencil"></use>
                                        </svg>
                                    </n-link>
                                </div>
                            </div>
                        </div>
            
                        <div class="card accordion-chip-card">
                            <a href="#" class="accord-chip-action">
                                <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="paymentMethod">
                                <div class="accord-chip-name">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                        <use xlink:href="~/assets/customer/image/all-svg.svg#wallet"></use>
                                    </svg>
                                    <span>Payment method</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.05 13.616">
                                    <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                                </svg>
            
                            </a>
                            <div class="accordion-address-content accordion-content" id="paymentMethod">
                                <p>The default payment method in Cudua is <b>pay on delivery</b> except there is a different agreement between you and the business you are transacting with.</p>
                            </div>
                        </div>
            
                        <div class="card accordion-chip-card">
                            <a href="#" class="accord-chip-action">
                                <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="shipmentDetails">
                                <div class="accord-chip-name">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20.5">
                                        <use xlink:href="~/assets/customer/image/all-svg.svg#bicycle"></use>
                                    </svg>
                                    <span>Shipment details</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.05 13.616">
                                    <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                                </svg>
                                
                            </a>

                            <div class="shippment-details" id="shipmentDetails">
                                <div class="accordion-address-content accordion-content">
                                    <div class="shippment-info">Shipment 1 0f 3</div>
                                    <div class="item-name"><span>2x</span> of 27C Nike air shoes</div>
                                    <div class="cart-business-details">
                                        <div class="info">This item is bought from:</div>
                                        <div class="cart-info-container">
                                            <div class="cart-info-more-details">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#store"></use>
                                                </svg>
                                                <div class="business-name">Genesis fastfood and restaurant, choba</div>
                                            </div>
                                            <div class="cart-info-more-details">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#mapMaker"></use>
                                                </svg>
                                                <div class="business-name">1 Igbogo road Choba, Rivers state</div>
                                            </div>
                                        </div>
                                </div>
                                </div>
                                <div class="accordion-address-content accordion-content">
                                    <div class="shippment-info">Shipment 1 0f 3</div>
                                    <div class="item-name"><span>2x</span> of 27C Nike air shoes</div>
                                    <div class="cart-business-details">
                                        <div class="info">This item is bought from:</div>
                                        <div class="cart-info-container">
                                            <div class="cart-info-more-details">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#store"></use>
                                                </svg>
                                                <div class="business-name">Genesis fastfood and restaurant, choba</div>
                                            </div>
                                            <div class="cart-info-more-details">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#mapMaker"></use>
                                                </svg>
                                                <div class="business-name">1 Igbogo road Choba, Rivers state</div>
                                            </div>
                                        </div>
                                </div>
                                </div>
                                <div class="accordion-address-content accordion-content">
                                    <div class="shippment-info">Shipment 1 0f 3</div>
                                    <div class="item-name"><span>2x</span> of 27C Nike air shoes</div>
                                    <div class="cart-business-details">
                                        <div class="info">This item is bought from:</div>
                                        <div class="cart-info-container">
                                            <div class="cart-info-more-details">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#store"></use>
                                                </svg>
                                                <div class="business-name">Genesis fastfood and restaurant, choba</div>
                                            </div>
                                            <div class="cart-info-more-details">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                    <use xlink:href="~/assets/customer/image/all-svg.svg#mapMaker"></use>
                                                </svg>
                                                <div class="business-name">1 Igbogo road Choba, Rivers state</div>
                                            </div>
                                        </div>
                                </div>
                                </div>
                            </div>
                        </div>
            
                        <div class="mg-bottom-24 md-cart-price-container">
                            <div class="d-flex-between cart-total-price">
                                <div>Items Total Price</div>
                                <div>₦ 1,200</div>
                            </div>
                            <div class="d-flex-between price-info">
                                <div>Shipping price not included</div>
                                <div>Learn more</div>
                            </div>
                        </div>
            
                        <div class="md-cart-card">
                            <div class="cart-card-checkout">
                                <button class="btn btn-primary btn-lg">Place order</button>
                            </div>
                        </div>
            
                    </div>

                </div>
                
                <div class="modal-footer" data-target="checkoutModal" data-dismiss="modal">
                    <button class="btn btn-default btn-light-grey">Close</button>
                </div>

            </div>
        </div>
        <!-- end of checkout modal -->
</template>

<script>
export default {
    name: "CHECKOUTMODAL",
}
</script>

<style>

</style>