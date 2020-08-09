<template>
    <div class="body-container">
        <TOPHEADER />
        <nuxt/>
        <div class="content-container">
            <SIDENAV />
            <nuxt />
                <div class="content-area grey-bg-colot">
                    <div class="main-content position-relative">

                        <div class="page-header">
                            <h4>Analytics</h4>
                        </div>

                        <div class="home-bookmark-listing-content">

                            <div class="swiper-action-container">
                                <button class="close-modal-btn slider-control">
                                    <div class="dropdownCheckBox"></div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                        <use xlink:href="~/assets/business/image//all-svg.svg#leftArrow"></use>
                                    </svg>
                                </button>
                            </div>
                            <div class="swiper-action-container">
                                <button class="close-modal-btn slider-control">
                                    <div class="dropdownCheckBox"></div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                        <use xlink:href="~/assets/business/image//all-svg.svg#rightArrow"></use>
                                    </svg>
                                </button>
                            </div>

                            <div class="dashboard-card-container">

                                <div class="card dashboard-small-card">
                                    <div class="dashboard-card-content blue">
                                        <div class="card-essence">
                                            <div class="icon-area">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <use xlink:href="~/assets/business/image//all-svg.svg#bigSmile"></use>
                                                </svg>
                                            </div>
                                            <div class="card-info">
                                                <div class="details">New orders</div>
                                                <div class="numbers">40</div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" class="action">View orders</a>
                                </div>

                                <div class="card dashboard-small-card">
                                    <div class="dashboard-card-content black">
                                        <div class="card-essence">
                                            <div class="icon-area">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <use xlink:href="~/assets/business/image//all-svg.svg#bigGift"></use>
                                                </svg>
                                            </div>
                                            <div class="card-info">
                                                <div class="details">Products</div>
                                                <div class="numbers">1,250</div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" class="action">View products</a>
                                </div>

                                <div class="card dashboard-small-card">
                                    <div class="dashboard-card-content orange">
                                        <div class="card-essence">
                                            <div class="icon-area">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <use xlink:href="~/assets/business/image//all-svg.svg#naira"></use>
                                                </svg>
                                            </div>
                                            <div class="card-info">
                                                <div class="details">Total amount sold</div>
                                                <div class="numbers">2,000,000</div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" class="action">View orders</a>
                                </div>


                            </div>
                        </div>
                        <canvas id="graph" class="graph-chart"></canvas>

                        <div class="coming-soon-cover">
                            <h2 class="margin-auto text-center">--Coming Soon--</h2>
                            <p class="margin-auto text-center">The 'analytics' feature is coming to Cudua soon</p>
                        </div>

                    </div>
                    <BOTTOMNAV />
                    <nuxt/>
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

