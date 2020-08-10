export default ({app}, inject) => {
    let showCustomerMobileNav = (sideNav, sideNavContent, status) => {
        // 0 means nav is hidden
        // 1 means nav is visible

        let body = document.querySelector("body");

        if (status == "0") {
            // show nav
            body.classList.add('overflow-hidden')
            sideNav.classList.add('js-show-nav') // show nav container
            sideNavContent.classList.remove('js-slide-out'); // remove slide-out animation
            sideNavContent.classList.add('js-slide-in'); // add slide-in animation
            // navToggle.setAttribute('data-toggle-status', '1'); // change data-toggle-status attr in nav toggle
        } else {
            // hide nav
            // navToggle.setAttribute('data-toggle-status', '0');
            sideNavContent.classList.remove('js-slide-in');
            sideNavContent.classList.add('js-slide-out');
            body.classList.remove('overflow-hidden')
            setTimeout(() => {
                sideNavContent.classList.remove('js-slide-out');
                sideNav.classList.remove('js-show-nav')
            }, 500);
        }
    }

    inject('showCustomerMobileNav', showCustomerMobileNav)
}