<template>
    <div class="business">
        <div class="body-container">
            <TOPHEADER />
            <nuxt/>
            <div class="content-container">
                <SIDENAV />
                <nuxt />
                <div class="content-area grey-bg-color">
                    <!-- content goes in here -->
            <div class="main-content">

            <div class="page-header">
                <h4>Order Id: 303454</h4>
            </div>

                <div class="order-listing-container">
                
                <!-- main content goes in here -->
                <div class="accordion white-bg-color order-details-card">

                    <div class="card-title">Customer details</div>

                    <div class="customer-photo"><img src="~/assets/business/image/daniel-chigisoft.jpg" alt=""></div>
                    <div class="customer-name text-center">Daniel Walter</div>

                    <div class="customer-details-container">
                        <a href="tel:0810 468 6729" class="customer-contact-details">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                                <use xlink:href="~/assets/business/image/all-svg.svg#phone"></use>
                            </svg>
                            <span>0810 468 6729</span>
                        </a>

                        <div class="customer-contact-details">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                                <use xlink:href="~/assets/business/image/all-svg.svg#email"></use>
                            </svg>
                            <span>realdanielwalter@gmail.com</span>
                        </div>

                        <div class="customer-contact-details">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <use xlink:href="~/assets/business/image/all-svg.svg#mapPlace"></use>
                            </svg>
                            <span>15 Okwuruola Wonodi street Rumuola Port Harcourt, Rivers state. Nigeria</span>
                        </div>
                    </div>


                    <div class="customer-review-area" data-trigger="modal" data-target="businessReviewModal">
                        <a href="javasscript:;" class="navbar-review-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                            </svg>
                        </a>
                        <a href="#">Read customer review</a>
                    </div>

                    
                </div>

                    <div class="item-details-listing">
                        <div class="order-menu">Ordered items</div>
                        
                        <div class="card">
                            <div class="order-card">
                                <div class="order-card-img">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
                                </div>
                                <div>
                                    <a href="#" class="card-product-name">Product name is Coming</a>
                                    <div class="order-price">₦ 1,200</div>
                                    <div class="order-price">Size: 44</div>
                                    <div class="order-price">Color: <span style="background-color: rgba(187, 35, 32, 1);"></span></div>
                                    <div class="order-price">Quantity: 20 piece</div>
                                </div>
                            </div>
                            <div class="order-card-footer">
                                <span>Subtotal</span>
                                <span>₦ 1,200</span>
                            </div>
                        </div>

                        <div class="card">
                            <div class="order-card">
                                <div class="order-card-img">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
                                </div>
                                <div>
                                    <a href="#" class="card-product-name">Product name is Coming</a>
                                    <div class="order-price">₦ 1,200</div>
                                    <div class="order-price">Size: 44</div>
                                    <div class="order-price">Color: <span style="background-color: rgba(187, 35, 32, 1);"></span></div>
                                    <div class="order-price">Quantity: 20 piece</div>
                                </div>
                            </div>
                            <div class="order-card-footer">
                                <span>Subtotal</span>
                                <span>₦ 1,200</span>
                            </div>
                        </div>

                        <div class="card">
                            <div class="order-card">
                                <div class="order-card-img">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
                                </div>
                                <div>
                                    <a href="#" class="card-product-name">Product name is Coming</a>
                                    <div class="order-price">₦ 1,200</div>
                                    <div class="order-price">Size: 44</div>
                                    <div class="order-price">Color: <span style="background-color: rgba(187, 35, 32, 1);"></span></div>
                                    <div class="order-price">Quantity: 20 piece</div>
                                </div>
                            </div>
                            <div class="order-card-footer">
                                <span>Subtotal</span>
                                <span>₦ 1,200</span>
                            </div>
                        </div>

                        <div class="card">
                            <div class="order-card">
                                <div class="order-card-img">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
                                </div>
                                <div>
                                    <a href="#" class="card-product-name">Product name is Coming</a>
                                    <div class="order-price">₦ 1,200</div>
                                    <div class="order-price">Size: 44</div>
                                    <div class="order-price">Color: <span style="background-color: rgba(187, 35, 32, 1);"></span></div>
                                    <div class="order-price">Quantity: 20 piece</div>
                                </div>
                            </div>
                            <div class="order-card-footer">
                                <span>Subtotal</span>
                                <span>₦ 1,200</span>
                            </div>
                        </div>

                        <div class="card">
                            <div class="order-card">
                                <div class="order-card-img">
                                    <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
                                </div>
                                <div>
                                    <a href="#" class="card-product-name">Product name is Coming</a>
                                    <div class="order-price">₦ 1,200</div>
                                    <div class="order-price">Size: 44</div>
                                    <div class="order-price">Color: <span style="background-color: rgba(187, 35, 32, 1);"></span></div>
                                    <div class="order-price">Quantity: 20 piece</div>
                                </div>
                            </div>
                            <div class="order-card-footer">
                                <span>Subtotal</span>
                                <span>₦ 1,200</span>
                            </div>
                        </div>

                        <div class="card">
                            <div class="order-action-container">
                                <div class="delivery-charge-area">
                                    <span>Delivery charge & time</span>
                                    <button class="btn btn-light-grey btn-md" data-single-tab="singleTab" data-target="deliveryPrice">Add info</button>
                                </div>

                                <div class="delivery-price-input-container grey-bg-color" id="deliveryPrice">
                                    <label for="" class="mg-bottom-16">Customer's location</label>
                                    <div class="location-charge-reminder">Okwuruola Wonodi street Rumuola Port Harcourt, Rivers state. Nigeria</div>
                                    <input type="number" name="" id="" class="input-form white-bg-color" placeholder="Type delivery price">
                                    <div class="form-control">
                                        <label for="businessType" class="form-label">Delivery time</label>
                                        <div class="delivery-time-input-area">
                                            <input type="text" class="input-form white-bg-color" placeholder="1 hour">
                                            <div>TO</div>
                                            <input type="text" class="input-form white-bg-color" placeholder="1 day">
                                        </div>
                                    </div>
                                    <button class="btn btn-white btn-block" data-single-tab="singleTab" data-target="deliveryPrice">Add delivery charge</button>
                                </div>

                            </div>
                        </div>

                        <div class="card">
                            <div class="order-action-container">
                                <div class="final-delivery-charge">
                                    <div>Delivery time</div>
                                    <div>1 hour - 2 days</div>
                                </div>
                                <div class="final-delivery-charge">
                                    <div>Delivery charge</div>
                                    <span>₦ 1,200</span>
                                </div>

                                <div class="total-price">
                                    <div>Total price</div>
                                    <div>₦ 1,200</div>
                                </div>

                                <div class="order-items-action">
                                    <button class="btn btn-primary btn-block">Accept order</button>
                                    <button class="btn btn-light-grey btn-block" data-trigger="modal" data-target="rejectOrder">Reject order</button>
                                </div>
                            </div>
                        </div>

                    </div>
            
                </div>

                <div class="modal-container" id="businessReviewModal">
                    <div class="modal-dialog-box">

                        <div class="modal-header">
                            <div>
                                <h4 class="mg-bottom-4">Business review</h4>
                                <div class="review-text">These are reviews from business that has</div>
                            </div>

                            <button class="close-modal-btn" data-target="businessReviewModal" data-dismiss="modal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                    <use xlink:href="~/assets/business/image/all-svg.svg#times"></use>
                                </svg>
                            </button>
                        </div>

                        <div class="modal-content modal-fixed-height">

                        <div class="business-review-container">
                            
                            <div class="review-item">
                                <div class="review-header">
                                    <div class="review-image">
                                        <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
                                    </div>
                                    <div class="review-details">
                                        <div class="reviewer-name">Daniel Walter</div>
                                        <div class="display-flex">
                                        <div class="review-star-icon">
                                            <div class="modal-review-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                    <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="review-date">- 15/12/19</div>
                                        </div>
                                    </div>
                                </div>
                                <p class="review-text">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed fringilla mauris sit amet nibh. Aenean massa. Donec vitae sapien ut libero venenatis faucibus. Pellentesque habitant</p>
                            </div>

                            <div class="review-item">
                                <div class="review-header">
                                    <div class="review-image">
                                        <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
                                    </div>
                                    <div class="review-details">
                                        <div class="reviewer-name">Daniel Walter</div>
                                        <div class="display-flex">
                                            <div class="review-star-icon">
                                                <div class="modal-review-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                                    </svg>
                                                </div>
                                            </div>
                                        <div class="review-date">- 15/12/19</div>
                                        </div>
                                    </div>
                                </div>
                                <p class="review-text">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed fringilla mauris sit amet nibh. Aenean massa. Donec vitae sapien ut libero venenatis faucibus. Pellentesque habitant</p>
                            </div>

                            <div class="review-item">
                                <div class="review-header">
                                    <div class="review-image">
                                        <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
                                    </div>
                                    <div class="review-details">
                                        <div class="reviewer-name">Daniel Walter</div>
                                        <div class="display-flex">
                                            <div class="review-star-icon">
                                                <div class="modal-review-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                                    </svg>
                                                </div>
                                            </div>
                                        <div class="review-date">- 15/12/19</div>
                                        </div>
                                    </div>
                                </div>
                                <p class="review-text">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed fringilla mauris sit amet nibh. Aenean massa. Donec vitae sapien ut libero venenatis faucibus. Pellentesque habitant</p>
                            </div>

                            <div class="review-item">
                                <div class="review-header">
                                    <div class="review-image">
                                        <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
                                    </div>
                                    <div class="review-details">
                                        <div class="reviewer-name">Daniel Walter</div>
                                        <div class="display-flex">
                                            <div class="review-star-icon">
                                                <div class="modal-review-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                                    </svg>
                                                </div>
                                            </div>
                                        <div class="review-date">- 15/12/19</div>
                                        </div>
                                    </div>
                                </div>
                                <p class="review-text">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed fringilla mauris sit amet nibh. Aenean massa. Donec vitae sapien ut libero venenatis faucibus. Pellentesque habitant</p>
                            </div>

                            <div class="review-item">
                                <div class="review-header">
                                    <div class="review-image">
                                        <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
                                    </div>
                                    <div class="review-details">
                                        <div class="reviewer-name">Daniel Walter</div>
                                        <div class="display-flex">
                                            <div class="review-star-icon">
                                                <div class="modal-review-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                                    </svg>
                                                </div>
                                            </div>
                                        <div class="review-date">- 15/12/19</div>
                                        </div>
                                    </div>
                                </div>
                                <p class="review-text">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed fringilla mauris sit amet nibh. Aenean massa. Donec vitae sapien ut libero venenatis faucibus. Pellentesque habitant</p>
                            </div>
                            
                            <div class="review-item">
                                <div class="review-header">
                                    <div class="review-image">
                                        <img src="~/assets/business/image/daniel-chigisoft.jpg" alt="">
                                    </div>
                                    <div class="review-details">
                                        <div class="reviewer-name">Daniel Walter</div>
                                        <div class="display-flex">
                                            <div class="review-star-icon">
                                                <div class="modal-review-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                                                        <use xlink:href="~/assets/business/image/all-svg.svg#star"></use>
                                                    </svg>
                                                </div>
                                            </div>
                                        <div class="review-date">- 15/12/19</div>
                                        </div>
                                    </div>
                                </div>
                                <p class="review-text">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed fringilla mauris sit amet nibh. Aenean massa. Donec vitae sapien ut libero venenatis faucibus. Pellentesque habitant</p>
                            </div>

                        </div>

                        </div>
                        
                        <div class="modal-footer" data-target="businessReviewModal" data-dismiss="modal">
                            <button class="btn btn-default btn-light-grey">Close</button>
                        </div>

                    </div>
                </div>

                <div class="modal-container" id="rejectOrder">
                    <div class="modal-dialog-box">

                        <div class="modal-header">
                            <div>
                                <h4 class="mg-bottom-4">Reject order</h4>
                            </div>

                            <button class="close-modal-btn" data-target="rejectOrder" data-dismiss="modal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                    <use xlink:href="~/assets/business/image/all-svg.svg#times"></use>
                                </svg>
                            </button>
                        </div>

                        <div class="modal-content">

                            <div id="createCategory">
                                
                                <div class="form-control">
                                    <label for="businessType" class="form-label">Tell the customer the reason His/Her order is being rejected</label>
                                    <textarea name="" id="" cols="30" rows="5" class="input-form"></textarea>
                                </div>
                                <div class="form-control">
                                    <button class="btn btn-block btn-primary" type="button">Reject order</button>
                                </div>
                            </div>

                        </div>
                        
                        <div class="modal-footer" data-target="rejectOrder" data-dismiss="modal">
                            <button class="btn btn-default btn-light-grey">Close</button>
                        </div>

                    </div>
                </div>


            </div>
            <BOTTOMNAV />
            <nuxt/>
        </div>
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