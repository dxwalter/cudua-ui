<template>
          <!-- Edit cart item -->
        <div class="modal-container" id="editItemInCart">
            <div class="modal-dialog-box">
        
                <div class="modal-header">
                    <h4>Edit item in cart</h4>
        
                    <button class="close-modal-btn" data-target="editItemInCart" data-dismiss="modal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                            <use xlink:href="~/assets/customer/image/all-svg.svg#times"></use>
                        </svg>
                    </button>
                </div>
        
                <div class="modal-content">
                    <div class="product-details-img-container">
                        <div class="white-bg-color">
                            <img src="~/assets/customer/image/phone.png" alt="">
                        </div>
                    </div>
                    <div class="product-details-content-info">
                        <!-- details area -->
                        <!-- name -->
                        <div class="product-details-name"><h2>Blonde Trouser</h2></div>
                        <!-- price -->
                        <div class="product-price-container width-100">
                        <div class="product-details-price"><h3>₦ 2,500</h3></div>
                        <a href="javasscript:;" class="navbar-review-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                <use xlink:href="~/assets/customer/image/all-svg.svg#star"></use>
                            </svg>
                        </a>
                        </div>
                        <!-- description -->
                        <div class="product-details-container mg-bottom-32">
                        <div class="product-details-label">
                            Product Description
                        </div>
                        <div class="product-description-text">
                            Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Phasellus magna. Fusce pharetra convallis urna. Curabitur suscipit suscipit dictum felis eu pede mollis pretium. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Sed hendrerit…. <span>Show more</span>
                        </div>
                        </div>
                        <!-- sizes -->
                        <div class="product-details-container">
                            <div class="product-details-label">
                                Available sizes <span>- choose your size</span>
                            </div>
                            <div class="color-picker-container">
                                <div class="size-card">43</div>
                                <div class="size-card">38</div>
                                <div class="size-card selected">24</div>
                                <div class="size-card">43</div>
                                <div class="size-card">38</div>
                                <div class="size-card">43</div>
                                <div class="size-card">24</div>
                                <div class="size-card">43</div>
                                <div class="size-card">38</div>
                                <div class="size-card">43</div>
                            </div>
                        </div>
        
                        <!-- color -->
                        <div class="product-details-container">
                            <div class="product-details-label">
                                Available colors <span>- choose your color</span>
                            </div>
                            <div class="color-picker-container">
                                <div style="background-color: #1232B1;"></div>
                                <div style="background-color: #BB2320;"></div>
                                <div style="background-color: #2C2C2C;"></div>
                                <div style="background-color: #FBC02D;"></div>
                                <div style="background-color: #F4F6F8;"></div>
                                <div style="background-color: #388E3C;"></div>
                                <div style="background-color: rgb(45, 53, 66);"></div>
                                <div style="background-color: #1232B1;"></div>
                                <div style="background-color: #BB2320;"></div>
                                <div style="background-color: #2C2C2C;"></div>
                                <!-- <div style="background-color: #FBC02D;"></div>
                                <div style="background-color: #F4F6F8;"></div>
                                <div style="background-color: #388E3C;"></div>
                                <div style="background-color: #2874F0;"></div> -->
                            </div>
                        </div>

        
                        <!-- action -->
                        <div class="">
                        <button class="btn btn-primary btn-block">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="mg-right-8 ">
                                <use xlink:href="~/assets/customer/image/all-svg.svg#pencil"></use>
                            </svg>
                            <span>
                            Update product
                            </span>
                        </button>
                        </div>

        
                    </div>
                </div>
                
                <div class="modal-footer border-unset">
                    <button data-target="editItemInCart" data-dismiss="modal" class="btn btn-default btn-light-grey btn-block">Close</button>
                </div>
        
            </div>
        </div>
        <!-- End of edit cart item -->
</template>

<script>
export default {
    name: "EDITCARTITEMS"
}
</script>

<style>

</style>