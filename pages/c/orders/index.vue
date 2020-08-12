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
            <!-- bookmark area -->
            <div class="section-header"><h4>My orders</h4></div>
            <!-- content start here -->

            <div class="order-listing-container">

                <div class="chip-tabs mg-bottom-32" id="tabList">
                    <a href="#" class="chip-tab-item is-active" id="tabLink" data-tab="allOrders">All orders</a>
                    <a href="#" class="chip-tab-item" id="tabLink" data-tab="pendingOrders">Pending</a>
                    <a href="#" class="chip-tab-item" id="tabLink" data-tab="clearedOrders">Cleared</a>
                </div>

                <div class="tab-content" id="tabContent">
                    <div class="tab-content-area is-active" id="allOrders">
                        
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="card accordion-chip-card">
                                    <n-link to="/c/orders/34343534" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>Order ID 1</span>
                                                <span>15th December, 2015</span>
                                            </div>
                                        </div>
                                        <div class="order-dot new"></div>
                                    </n-link>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="card accordion-chip-card">
                                    <n-link to="/c/orders/34343534" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>Order ID 1</span>
                                                <span>15th December, 2015</span>
                                            </div>
                                        </div>
                                        <div class="order-dot pending"></div>
                            
                                    </n-link>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="card accordion-chip-card">
                                    <n-link to="/c/orders/34343534" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>Order ID 1</span>
                                                <span>15th December, 2015</span>
                                            </div>
                                        </div>
                                        <div class="order-dot cleared"></div>
                                    </n-link>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="card accordion-chip-card">
                                    <n-link to="/c/orders/34343534" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>Order ID 1</span>
                                                <span>15th December, 2015</span>
                                            </div>
                                        </div>
                                        <div class="order-dot pending"></div>
                                    </n-link>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="card accordion-chip-card">
                                    <n-link to="/c/orders/34343534" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>Order ID 1</span>
                                                <span>15th December, 2015</span>
                                            </div>
                                        </div>
                                        <div class="order-dot cleared"></div>
                            
                                    </n-link>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="card accordion-chip-card">
                                    <n-link to="/c/orders/34343534" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>Order ID 1</span>
                                                <span>15th December, 2015</span>
                                            </div>
                                        </div>
                                        <div class="order-dot cleared"></div>
                            
                                    </n-link>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="card accordion-chip-card">
                                    <n-link to="/c/orders/34343534" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>Order ID 1</span>
                                                <span>15th December, 2015</span>
                                            </div>
                                        </div>
                                        <div class="order-dot cleared"></div>
                                    </n-link>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="card accordion-chip-card">
                                    <n-link to="/c/orders/34343534" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>Order ID 1</span>
                                                <span>15th December, 2015</span>
                                            </div>
                                        </div>
                                        <div class="order-dot cleared"></div>
                                    </n-link>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="card accordion-chip-card">
                                    <n-link to="/c/orders/34343534" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>Order ID 1</span>
                                                <span>15th December, 2015</span>
                                            </div>
                                        </div>
                                        <div class="order-dot cleared"></div>
                                    </n-link>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="card accordion-chip-card">
                                    <n-link to="/c/orders/34343534" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>Order ID 1</span>
                                                <span>15th December, 2015</span>
                                            </div>
                                        </div>
                                        <div class="order-dot cleared"></div>
                                    </n-link>
                                </div>
                            </div>

                        </div>

                    </div>
                    <!-- end of all orders -->

                    <div class="tab-content-area" id="pendingOrders">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="card accordion-chip-card">
                                    <n-link to="/c/orders/34343534" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>Order ID 1</span>
                                                <span>15th December, 2015</span>
                                            </div>
                                        </div>
                                        <div class="order-dot pending"></div>
                                    </n-link>
                                </div>
                            </div>
                        
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="card accordion-chip-card">
                                    <n-link to="/c/orders/34343534" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>Order ID 1</span>
                                                <span>15th December, 2015</span>
                                            </div>
                                        </div>
                                        <div class="order-dot pending"></div>
                                    </n-link>
                                </div>
                            </div>
                        
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="card accordion-chip-card">
                                    <n-link to="/c/orders/34343534" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>Order ID 1</span>
                                                <span>15th December, 2015</span>
                                            </div>
                                        </div>
                                        <div class="order-dot pending"></div>
                                    </n-link>
                                </div>
                            </div>
                        
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="card accordion-chip-card">
                                    <n-link to="/c/orders/34343534" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>Order ID 1</span>
                                                <span>15th December, 2015</span>
                                            </div>
                                        </div>
                                        <div class="order-dot pending"></div>
                                    </n-link>
                                </div>
                            </div>
                        
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="card accordion-chip-card">
                                    <n-link to="/c/orders/34343534" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>Order ID 1</span>
                                                <span>15th December, 2015</span>
                                            </div>
                                        </div>
                                        <div class="order-dot pending"></div>
                                    </n-link>
                                </div>
                            </div>
                        
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="card accordion-chip-card">
                                    <n-link to="/c/orders/34343534" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>Order ID 1</span>
                                                <span>15th December, 2015</span>
                                            </div>
                                        </div>
                                        <div class="order-dot pending"></div>
                                    </n-link>
                                </div>
                            </div>
                        
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="card accordion-chip-card">
                                    <n-link to="/c/orders/34343534" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>Order ID 1</span>
                                                <span>15th December, 2015</span>
                                            </div>
                                        </div>
                                        <div class="order-dot pending"></div>
                                    </n-link>
                                </div>
                            </div>
                        
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="card accordion-chip-card">
                                    <n-link to="/c/orders/34343534" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>Order ID 1</span>
                                                <span>15th December, 2015</span>
                                            </div>
                                        </div>
                                        <div class="order-dot pending"></div>
                                    </n-link>
                                </div>
                            </div>
                        
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="card accordion-chip-card">
                                    <n-link to="/c/orders/34343534" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>Order ID 1</span>
                                                <span>15th December, 2015</span>
                                            </div>
                                        </div>
                                        <div class="order-dot pending"></div>
                                    </n-link>
                                </div>
                            </div>
                        
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="card accordion-chip-card">
                                    <n-link to="/c/orders/34343534" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>Order ID 1</span>
                                                <span>15th December, 2015</span>
                                            </div>
                                        </div>
                                        <div class="order-dot pending"></div>
                                    </n-link>
                                </div>
                            </div>
                        
                        </div>
                    </div>

                    <!-- end of pending orders -->

                    <div class="tab-content-area" id="clearedOrders">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="card accordion-chip-card">
                                    <n-link to="/c/orders/cleared/435456456" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>Order ID 1</span>
                                                <span>15th December, 2015</span>
                                            </div>
                                        </div>
                                        <div class="order-dot cleared"></div>
                                    </n-link>
                                </div>
                            </div>
                        
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="card accordion-chip-card">
                                    <n-link to="/c/orders/cleared/435456456" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>Order ID 1</span>
                                                <span>15th December, 2015</span>
                                            </div>
                                        </div>
                                        <div class="order-dot cleared"></div>
                            
                                    </n-link>
                                </div>
                            </div>
                        
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="card accordion-chip-card">
                                    <n-link to="/c/orders/cleared/435456456" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>Order ID 1</span>
                                                <span>15th December, 2015</span>
                                            </div>
                                        </div>
                                        <div class="order-dot cleared"></div>
                            
                                    </n-link>
                                </div>
                            </div>
                        
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="card accordion-chip-card">
                                    <n-link to="/c/orders/cleared/435456456" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>Order ID 1</span>
                                                <span>15th December, 2015</span>
                                            </div>
                                        </div>
                                        <div class="order-dot cleared"></div>
                                    </n-link>
                                </div>
                            </div>
                        
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="card accordion-chip-card">
                                    <n-link to="/c/orders/cleared/435456456" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>Order ID 1</span>
                                                <span>15th December, 2015</span>
                                            </div>
                                        </div>
                                        <div class="order-dot cleared"></div>
                                    </n-link>
                                </div>
                            </div>
                        
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="card accordion-chip-card">
                                    <n-link to="/c/orders/cleared/435456456" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>Order ID 1</span>
                                                <span>15th December, 2015</span>
                                            </div>
                                        </div>
                                        <div class="order-dot cleared"></div>
                                    </n-link>
                                </div>
                            </div>
                        
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="card accordion-chip-card">
                                    <n-link to="/c/orders/cleared/435456456" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>Order ID 1</span>
                                                <span>15th December, 2015</span>
                                            </div>
                                        </div>
                                        <div class="order-dot cleared"></div>
                                    </n-link>
                                </div>
                            </div>
                        
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="card accordion-chip-card">
                                    <n-link to="/c/orders/cleared/435456456" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>Order ID 1</span>
                                                <span>15th December, 2015</span>
                                            </div>
                                        </div>
                                        <div class="order-dot cleared"></div>
                                    </n-link>
                                </div>
                            </div>
                        
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="card accordion-chip-card">
                                    <n-link to="/c/orders/cleared/435456456" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>Order ID 1</span>
                                                <span>15th December, 2015</span>
                                            </div>
                                        </div>
                                        <div class="order-dot cleared"></div>
                                    </n-link>
                                </div>
                            </div>
                        
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="card accordion-chip-card">
                                    <n-link to="/c/orders/cleared/435456456" class="accord-chip-action">
                                        
                                        <div class="accord-chip-name">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16">
                                                <use xlink:href="~/assets/customer/image/all-svg.svg#myOrders"></use>
                                            </svg>
                                            <div class="flex-column">
                                                <span>Order ID 1</span>
                                                <span>15th December, 2015</span>
                                            </div>
                                        </div>
                                        <div class="order-dot cleared"></div>
                                    </n-link>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                    <!-- end of cleared orders -->

                </div>
            </div>

        </div>
        <!-- end of content container -->

        <!-- footer area -->

        <BOTTOMADS></BOTTOMADS>
        <CUSTOMERFOOTER></CUSTOMERFOOTER>

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
export default {
    components: {
      DESKTOPNAVGATION, MOBILENAVIGATION, MOBILESEARCH, BOTTOMADS, CUSTOMERFOOTER, PAGELOADER
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