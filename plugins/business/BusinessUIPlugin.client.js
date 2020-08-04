export default ({app}, inject) => {

    // show and hide nav drawer
    let showMobileNav = (sideNav, sideNavContent, navToggle) => {

        navToggle.classList.toggle('is-active')
        
        let toggleStatus = navToggle.getAttribute('data-toggle-status')
        // 0 means nav is hidden
        // 1 means nav is visible
        sideNavContent.style.display = 'unset';
    
        if (toggleStatus == "0") {
            // show nav
            sideNav.classList.add('js-show-nav') // show nav container
            sideNavContent.classList.remove('js-slide-out'); // remove slide-out animation
            sideNavContent.classList.add('js-slide-in'); // add slide-in animation
            navToggle.setAttribute('data-toggle-status', '1'); // change data-toggle-status attr in nav toggle
        } else {
            // hide nav
            navToggle.setAttribute('data-toggle-status', '0');
            sideNavContent.classList.remove('js-slide-in');
            sideNavContent.classList.add('js-slide-out');
            setTimeout(() => {
                sideNavContent.style.display = 'none';
                sideNavContent.classList.remove('js-slide-out');
                sideNav.classList.remove('js-show-nav')
            }, 500);
        }
    
    }

    inject('showMobileNav', showMobileNav)

    
    // open/launch modal
    let openModal = (target) => {
        document.querySelector("body").classList.add("overflow-hidden");
        document.getElementById(target).classList.add('display-block')
        document.getElementById(target).classList.toggle("show-modal");
    }

    // close modal 
    let closeModal = (target) => {
        document.querySelector("body").classList.remove("overflow-hidden");
        document.getElementById(target).classList.toggle("show-modal");
        document.getElementById(target).classList.remove('display-block')
    }


    inject('openModal', openModal)
    inject('closeModal', closeModal)

    // tabs
    let myTabClicks = (tabClickEvent, Tabs) => {
        for (let i = 0; i < Tabs.length; i++) {
            Tabs[i].classList.remove("is-active");
        }

        // the very link that was clicked
        let clickedTab = tabClickEvent.currentTarget;
    
        // Add active class to the clicked tab
        clickedTab.classList.add("is-active");
    
        // stop the page from reloading
        tabClickEvent.preventDefault();
        let anchorReference = tabClickEvent.target;
        let activePaneId = anchorReference.getAttribute("data-tab");
        
        let myContentPanes = document.querySelectorAll("#tabContent .tab-content-area");
        
        for (let i = 0; i < myContentPanes.length; i++) {
            myContentPanes[i].classList.remove("is-active");
            myContentPanes[i].classList.remove("showEffect");
        }
        
    
        let tabAttribute = "#tabContent #"+activePaneId;
        let activePane = document.querySelector(tabAttribute);
        activePane.classList.add("is-active");
        activePane.classList.add("showEffect");
    }

    inject('myTabClicks', myTabClicks)

}