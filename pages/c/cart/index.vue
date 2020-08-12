<template>
  <div class="customer">
    <div class="body-container grey-bg-color">

            <!-- beginning of navigation container -->
            <div class="nav-container">
                <MOBILESEARCH></MOBILESEARCH>
                <DESKTOPNAVGATION></DESKTOPNAVGATION>
                <MOBILENAVIGATION></MOBILENAVIGATION>
            </div>

            <!-- pageLoader -->
            <PAGELOADER v-if="pageLoader"></PAGELOADER>

            <div class="content-container">
                <!-- header area -->
                <div class="section-header">
                <h4>My cart (4)</h4>
                </div>
                
                <!-- beginning of cart listing -->
                <div class="cart-listing-area">

                <div class="card cart-card">
                    <div class="item-basic-info">
                            <a href="#" class="cart-avatar">
                                <img src="~/assets/customer/image/daniel-chigisoft.jpg" alt="">
                            </a>
                        <div class="price-and-name">
                            <a href="#">Product name is Coming is Coming</a>
                            <div class="price">₦ 1,200</div>
                            <div class="reviews">
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
                                </div>
                        </div>
                    </div>

                    <div class="mb-fold-content">
                            <div class="quantity-unit-price">
                                <div class="item-count">
                                    <span>Quantity</span>
                                    <div class="cart-item-count-btn">
                                        <button>-</button>
                                        <div>1</div>
                                        <button>+</button>
                                    </div>
                                </div>
                                <div class="item-count">
                                    <span>Subtotal</span>
                                    <div class="subtotal-price">₦ 1,200</div>
                                </div>
                            </div>

                            <div class="cart-action-area">
                                <div class="mobile-actions">
                                    <button class="btn btn-white btn-small">
                                        <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="moreDetails1">
                                        <span>More details</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22.05" height="13.616" viewBox="0 0 22.05 13.616">
                                            <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                                        </svg>
                                    </button>
                                    <button class="btn btn-light-grey btn-small ">Remove</button>
                                </div>
                                <div class="desktop-action">
                                    <button type="button" class="close-modal-btn">
                                        <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="moreDetails1">
                                        <span></span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22.05" height="13.616" viewBox="0 0 22.05 13.616">
                                            <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                                        </svg>
                                    </button>
                                    <button type="button" class="close-modal-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" class="last-svg">
                                            <use xlink:href="~/assets/customer/image/all-svg.svg#times"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                    </div>

                        <div class="cart-business-details" id="moreDetails1">
                            <div class="d-flex-between">
                                <div class="info">More info:</div>
                                <button class="close-modal-btn" data-trigger="modal" data-target="editItemInCart">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="margin-unset">
                                        <use xlink:href="~/assets/customer/image/all-svg.svg#pencil"></use>
                                    </svg>
                                </button>
                            </div>
                            <div class="cart-order-info mg-bottom-16">
                                <div class="cart-product-size">Size: <span>44</span></div>
                                <div class="d-flex">
                                    <div class="cart-product-size">Color: </div>
                                    <div class="cart-details-color" style="background-color: #BB2320;"></div>
                                </div>
                            </div>

                            <div class="info">This item is bought from:</div>
                                <a href="#" class="cart-info-container">
                                    <div class="cart-info-more-details">
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 18 16">
                                            <use xlink:href="~/assets/customer/image/all-svg.svg#store"></use>
                                        </svg>
                                        <div class="business-name">Genesis fastfood and restaurant, choba</div>
                                    </div>
                                    <div class="cart-info-more-details">
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 18 16">
                                            <use xlink:href="~/assets/customer/image/all-svg.svg#mapMaker"></use>
                                        </svg>
                                        <div class="business-name">1 Igbogo road Choba, Rivers state</div>
                                    </div>
                                </a>
                        </div>

                </div>

                <div class="card cart-card">
                    <div class="item-basic-info">
                        <a href="#" class="cart-avatar">
                            <img src="~/assets/customer/image/daniel-chigisoft.jpg" alt="">
                        </a>
                        <div class="price-and-name">
                            <a href="#">Product name is Coming is Coming</a>
                            <div class="price">₦ 1,200</div>
                            <div class="reviews">
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
                            </div>
                        </div>
                    </div>

                    <div class="mb-fold-content">
                        <div class="quantity-unit-price">
                            <div class="item-count">
                                <span>Quantity</span>
                                <div class="cart-item-count-btn">
                                    <button>-</button>
                                    <div>1</div>
                                    <button>+</button>
                                </div>
                            </div>
                            <div class="item-count">
                                <span>Subtotal</span>
                                <div class="subtotal-price">₦ 1,200</div>
                            </div>
                        </div>

                        <div class="cart-action-area">
                            <div class="mobile-actions">
                                <button class="btn btn-white btn-small">
                                    <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="moreDetails1">
                                    <span>More details</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.05" height="13.616" viewBox="0 0 22.05 13.616">
                                        <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                                    </svg>
                                </button>
                                <button class="btn btn-light-grey btn-small ">Remove</button>
                            </div>
                            <div class="desktop-action">
                                <button type="button" class="close-modal-btn">
                                    <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="moreDetails1">
                                    <span></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.05" height="13.616" viewBox="0 0 22.05 13.616">
                                        <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                                    </svg>
                                </button>
                                <button type="button" class="close-modal-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" class="last-svg">
                                        <use xlink:href="~/assets/customer/image/all-svg.svg#times"></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="cart-business-details" id="moreDetails1">
                        <div class="info">More info:</div>
                        <div class="cart-order-info mg-bottom-16">
                            <div class="cart-product-size">Size: <span>44</span></div>
                            <div class="d-flex">
                                <div class="cart-product-size">Color: </div>
                                <div class="cart-details-color" style="background-color: #BB2320;"></div>
                            </div>
                        </div>

                        <div class="info">This item is bought from:</div>
                            <a href="#" class="cart-info-container">
                                <div class="cart-info-more-details">
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 18 16">
                                        <use xlink:href="~/assets/customer/image/all-svg.svg#store"></use>
                                    </svg>
                                    <div class="business-name">Genesis fastfood and restaurant, choba</div>
                                </div>
                                <div class="cart-info-more-details">
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 18 16">
                                        <use xlink:href="~/assets/customer/image/all-svg.svg#mapMaker"></use>
                                    </svg>
                                    <div class="business-name">1 Igbogo road Choba, Rivers state</div>
                                </div>
                            </a>
                    </div>

                    </div>


                    <div class="card cart-card">
                        <div class="item-basic-info">
                            <a href="#" class="cart-avatar">
                                <img src="~/assets/customer/image/daniel-chigisoft.jpg" alt="">
                            </a>
                            <div class="price-and-name">
                                <a href="#">Product name is Coming is Coming</a>
                                <div class="price">₦ 1,200</div>
                                <div class="reviews">
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
                                </div>
                            </div>
                        </div>

                        <div class="mb-fold-content">
                            <div class="quantity-unit-price">
                                <div class="item-count">
                                    <span>Quantity</span>
                                    <div class="cart-item-count-btn">
                                        <button>-</button>
                                        <div>1</div>
                                        <button>+</button>
                                    </div>
                                </div>
                                <div class="item-count">
                                    <span>Subtotal</span>
                                    <div class="subtotal-price">₦ 1,200</div>
                                </div>
                            </div>

                            <div class="cart-action-area">
                                <div class="mobile-actions">
                                    <button class="btn btn-white btn-small">
                                        <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="moreDetails1">
                                        <span>More details</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22.05" height="13.616" viewBox="0 0 22.05 13.616">
                                            <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                                        </svg>
                                    </button>
                                    <button class="btn btn-light-grey btn-small ">Remove</button>
                                </div>
                                <div class="desktop-action">
                                    <button type="button" class="close-modal-btn">
                                        <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="moreDetails1">
                                        <span></span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22.05" height="13.616" viewBox="0 0 22.05 13.616">
                                            <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                                        </svg>
                                    </button>
                                    <button type="button" class="close-modal-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" class="last-svg">
                                            <use xlink:href="~/assets/customer/image/all-svg.svg#times"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="cart-business-details" id="moreDetails1">
                            <div class="info">More info:</div>
                            <div class="cart-order-info mg-bottom-16">
                                <div class="cart-product-size">Size: <span>44</span></div>
                                <div class="d-flex">
                                    <div class="cart-product-size">Color: </div>
                                    <div class="cart-details-color" style="background-color: #BB2320;"></div>
                                </div>
                            </div>

                            <div class="info">This item is bought from:</div>
                                <a href="#" class="cart-info-container">
                                    <div class="cart-info-more-details">
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 18 16">
                                            <use xlink:href="~/assets/customer/image/all-svg.svg#store"></use>
                                        </svg>
                                        <div class="business-name">Genesis fastfood and restaurant, choba</div>
                                    </div>
                                    <div class="cart-info-more-details">
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 18 16">
                                            <use xlink:href="~/assets/customer/image/all-svg.svg#mapMaker"></use>
                                        </svg>
                                        <div class="business-name">1 Igbogo road Choba, Rivers state</div>
                                    </div>
                                </a>
                        </div>

                    </div>


                    <div class="card cart-card">
                        <div class="item-basic-info">
                            <a href="#" class="cart-avatar">
                                <img src="~/assets/customer/image/daniel-chigisoft.jpg" alt="">
                            </a>
                            <div class="price-and-name">
                                <a href="#">Product name is Coming is Coming</a>
                                <div class="price">₦ 1,200</div>
                                <div class="reviews">
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
                                </div>
                            </div>
                        </div>

                        <div class="mb-fold-content">
                            <div class="quantity-unit-price">
                                <div class="item-count">
                                    <span>Quantity</span>
                                    <div class="cart-item-count-btn">
                                        <button>-</button>
                                        <div>1</div>
                                        <button>+</button>
                                    </div>
                                </div>
                                <div class="item-count">
                                    <span>Subtotal</span>
                                    <div class="subtotal-price">₦ 1,200</div>
                                </div>
                            </div>

                            <div class="cart-action-area">
                                <div class="mobile-actions">
                                    <button class="btn btn-white btn-small">
                                        <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="moreDetails1">
                                        <span>More details</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22.05" height="13.616" viewBox="0 0 22.05 13.616">
                                            <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                                        </svg>
                                    </button>
                                    <button class="btn btn-light-grey btn-small ">Remove</button>
                                </div>
                                <div class="desktop-action">
                                    <button type="button" class="close-modal-btn">
                                        <input type="checkbox" class="dropdownCheckBox" data-single-tab="singleTab" data-target="moreDetails1">
                                        <span></span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22.05" height="13.616" viewBox="0 0 22.05 13.616">
                                            <use xlink:href="~/assets/customer/image/all-svg.svg#arrowDown"></use>
                                        </svg>
                                    </button>
                                    <button type="button" class="close-modal-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" class="last-svg">
                                            <use xlink:href="~/assets/customer/image/all-svg.svg#times"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="cart-business-details" id="moreDetails1">
                            <div class="info">More info:</div>
                            <div class="cart-order-info mg-bottom-16">
                                <div class="cart-product-size">Size: <span>44</span></div>
                                <div class="d-flex">
                                    <div class="cart-product-size">Color: </div>
                                    <div class="cart-details-color" style="background-color: #BB2320;"></div>
                                </div>
                            </div>

                            <div class="info">This item is bought from:</div>
                                <a href="#" class="cart-info-container">
                                    <div class="cart-info-more-details">
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 18 16">
                                            <use xlink:href="~/assets/customer/image/all-svg.svg#store"></use>
                                        </svg>
                                        <div class="business-name">Genesis fastfood and restaurant, choba</div>
                                    </div>
                                    <div class="cart-info-more-details">
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 18 16">
                                            <use xlink:href="~/assets/customer/image/all-svg.svg#mapMaker"></use>
                                        </svg>
                                        <div class="business-name">1 Igbogo road Choba, Rivers state</div>
                                    </div>
                                </a>
                        </div>

                    </div>

                    <div class="col-xs-12">
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
                    </div>
                
                    <div class="col-xs-12">
                        <div class="md-cart-card">
                            <div class="cart-card-checkout">
                                <button class="btn btn-primary btn-lg" data-trigger="modal" data-target="checkoutModal">Continue to checkout</button>
                                <a href="#ewer" class="btn btn-white btn-lg" data-trigger="modal" data-target="confirmedOrderModal">Continue to shopping</a>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- end of cart listing -->

            </div> 
        <!-- end of content container -->

        <!-- footer area -->

        <BOTTOMADS></BOTTOMADS>

        <CUSTOMERFOOTER></CUSTOMERFOOTER>

        <CHECKOUTMODAL></CHECKOUTMODAL>
        <CONFIRMORDER></CONFIRMORDER>
        <EDITCARTITEM></EDITCARTITEM>

    </div>
  </div>
</template>

<script>
import MOBILENAVIGATION from '~/layouts/customer/mobile-navigation.vue';
import DESKTOPNAVGATION from '~/layouts/customer/desktop-navigation.vue';
import MOBILESEARCH from '~/layouts/customer/mobile-search.vue';
import BOTTOMADS from '~/layouts/customer/buttom-ads.vue';
import CUSTOMERFOOTER from '~/layouts/customer/customer-footer.vue';
import PAGELOADER from '~/components/loader/loader.vue';

// cart modals
import CHECKOUTMODAL from '~/layouts/customer/cart/checkout.vue';
import CONFIRMORDER from '~/layouts/customer/cart/confirm-order.vue';
import EDITCARTITEM from '~/layouts/customer/cart/edit-cart-item.vue';

export default {
    components: {
      DESKTOPNAVGATION, 
      MOBILENAVIGATION, 
      MOBILESEARCH, 
      BOTTOMADS, 
      CUSTOMERFOOTER, 
      PAGELOADER,
      CHECKOUTMODAL,
      CONFIRMORDER,
      EDITCARTITEM
    },
    data: function() {
        return {
            pageLoader: true
        }
    },
    methods: {

    },
    mounted () {
        setTimeout(() => {
            this.pageLoader = false
        }, 5000);
    }
}
</script>