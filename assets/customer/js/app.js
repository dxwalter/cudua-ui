"use-strict";

// initialised letiables
let screenWidth = screen.width;

let showMobileNav = (sideNav, sideNavContent, status) => {

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

let navToggle = document.getElementById('navToggleButton');
if (navToggle) {
    navToggle.addEventListener('click', function (e) {
    
        let toggleStatus = navToggle.getAttribute('data-toggle-status');
        navToggle.classList.toggle('is-active')
        let sideNav = document.getElementById('mobileSideNav');
        let sideNavContent = document.getElementById("mobileSideNavContent");
        let showNav = screenWidth <= 1023 ? showMobileNav(sideNav, sideNavContent, toggleStatus) : sideNav.classList.toggle('js-fold-nav');

        toggleStatus = navToggle.getAttribute('data-toggle-status') == "1" ? navToggle.setAttribute('data-toggle-status', '0') : navToggle.setAttribute('data-toggle-status', '1');
        

    })
}


// show business category for mobile
let showBusinessCategory = document.getElementById('showBusinessCategory');
if (showBusinessCategory) {
    showBusinessCategory.addEventListener('click', function(e) {
        let businessCategoryContainer = document.getElementById('businessCategoryContainer');
        let businessCategoryContent = document.getElementById('businessCategoryContent');
        showMobileNav(businessCategoryContainer, businessCategoryContent, "0");
    })
}

// hide business category for mobile
let closeMobileBusinessCategory = document.getElementById('closeMobileBusinessCategory');
let CategoryContainer = document.querySelectorAll('.shop-cat-item .subcat-listing a');

if (closeMobileBusinessCategory && CategoryContainer) {

    let businessCategoryContainer = document.getElementById('businessCategoryContainer');
    let businessCategoryContent = document.getElementById('businessCategoryContent');

    closeMobileBusinessCategory.addEventListener('click', function(e) {
        showMobileNav(businessCategoryContainer, businessCategoryContent, '1');
    })

    for (i = 0; i < CategoryContainer.length; i++) {
        CategoryContainer[i].addEventListener("click", event => {
            showMobileNav(businessCategoryContainer, businessCategoryContent, '1');
        })
    }
}

// this openedModalTarget represents the targeted modal to be opened
// the value stored in the openModalTarget is stored in data-target in html
let openedModalTarget;

// open modal
let openModalAction = document.querySelectorAll("[data-trigger]");
for (const action of openModalAction) {
   action.addEventListener('click', function(e) {
       e.preventDefault();
       openedModalTarget = this.getAttribute('data-target');
       openModal(openedModalTarget);
   })
}
// close modal with icon
let closeModalAction = document.querySelectorAll('[data-dismiss]');
for (const action of closeModalAction) {
    action.addEventListener('click', function(e) {
        e.preventDefault();
        openedModalTarget = this.getAttribute('data-target');
        closeModal(openedModalTarget);
    })
}

 // open modal function
openModal = (target) => {
    document.querySelector("body").classList.add("overflow-hidden");
    document.getElementById(target).classList.add('display-block')
    document.getElementById(target).classList.toggle("show-modal");
}

// close modal function
closeModal = (target) => {
    document.querySelector("body").classList.remove("overflow-hidden");
    document.getElementById(target).classList.toggle("show-modal");
    document.getElementById(target).classList.remove('display-block')
}

// close modal with esc key
window.onkeyup = function (e) {
    e.preventDefault();
    if (e.keyCode == 27) {
        let modalStatusCheck = document.querySelector('.overflow-hidden') !== null ? closeModal(openedModalTarget) : ""
    }
}

// close modal by clicking outside the modal window
window.addEventListener("click", function(e) {
    for (const action of document.querySelectorAll(".modal-container")) {
        if (e.target === action) {
            closeModal(openedModalTarget);
        }
    }
});



// filter tab
let allFilterTabLinks = document.querySelectorAll("#FilterTabList > #filterTabLink");
// tabs
let Tabs = document.querySelectorAll("#tabList > #tabLink");

myTabClicks = (tabClickEvent, tabContentId, tabContentArea, Tabs) => {
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
    
    let myContentPanes = document.querySelectorAll(`${tabContentId} ${tabContentArea}`);
    
    for (i = 0; i < myContentPanes.length; i++) {
        myContentPanes[i].classList.remove("is-active");
        myContentPanes[i].classList.remove("showEffect");
    }
    
    let tabAttribute = `${tabContentId} #${activePaneId}`;
    let activePane = document.querySelector(tabAttribute);
    activePane.classList.add("is-active");
    activePane.classList.add("showEffect");
}

for (i = 0; i < Tabs.length; i++) {
    Tabs[i].addEventListener("click", event => {
        myTabClicks(event, "#tabContent", ".tab-content-area", Tabs)
    })
}

for (i = 0; i < allFilterTabLinks.length; i++) {
    allFilterTabLinks[i].addEventListener("click", event => {
        myTabClicks(event, "#filterTabContent", ".filter-tab-content-area", allFilterTabLinks)
    })
}


// Accordion
let accordionItem = document.getElementsByClassName('js-accordionItem');
let accordionHeader = document.getElementsByClassName('js-accordionHeader');
for (i = 0; i < accordionHeader.length; i++) {
    accordionHeader[i].addEventListener('click', toggleAccordion, false);
}
function toggleAccordion() {

    let itemClass = this.parentNode.className;

    for (i = 0; i < accordionItem.length; i++) {
        accordionItem[i].className = 'js-accordionItem close';
    }

    if (itemClass == 'js-accordionItem') {
        this.parentNode.className = 'js-accordionItem open';
    } else if (itemClass == 'js-accordionItem open') {
        this.parentNode.className = 'js-accordionItem close';
    } else if (itemClass == 'js-accordionItem close') {
        this.parentNode.className = 'js-accordionItem open';
    }

}


// single tab
let singleTabClick = document.querySelectorAll('[data-single-tab]');
for (const action of singleTabClick) {
    action.addEventListener('click', (e) => {
        // e.preventDefault();
        e.stopPropagation();
        let getTarget = e.target;
        let singleTabContainer = document.getElementById(getTarget.getAttribute('data-target'));
        singleTabContainer.classList.toggle(`showEffect`);
    })
}

numberNotation = (number) => {
    let inputNumber = number.toString();
    let inputLength = inputNumber.length;
    let comma = ",";
    
    if (inputLength < 4) {
        return inputNumber;
    }

    if (inputLength == 4) {
        let output = [inputNumber.slice(0, 1), comma, inputNumber.slice(1)].join("");
        return output;
      }

      if (inputLength == 5) {
        let output = [inputNumber.slice(0, 2), comma, inputNumber.slice(2)].join("");
        return output;
      }

      if (inputLength == 6) {
        let output = [inputNumber.slice(0, 3), comma, inputNumber.slice(3)].join("");
        return output;
      }

      if (inputLength == 7) {
        let output = [inputNumber.slice(0, 1), comma, inputNumber.slice(1)].join("");
        let secondOutput = [output.slice(0, 5), comma, output.slice(5)].join(
          ""
        );
        return secondOutput;
      }

      if (inputLength == 8) {
        let output = [inputNumber.slice(0, 2), comma, inputNumber.slice(2)].join("");
        let secondOutput = [output.slice(0, 6), comma, output.slice(6)].join(
          ""
        );
        return secondOutput;
      }

      if (inputLength == 9) {
        let output = [inputNumber.slice(0, 3), comma, inputNumber.slice(3)].join("");
        let secondOutput = [output.slice(0, 7), comma, output.slice(7)].join(
          ""
        );
        return secondOutput;
      }

      if (inputLength == 10) {
        let output = [inputNumber.slice(0, 1), comma, inputNumber.slice(1)].join("");
        let secondOutput = [output.slice(0, 5), comma, output.slice(5)].join("");
        let thirdOutput = [secondOutput.slice(0, 9), comma, secondOutput.slice(9)].join("");
          return thirdOutput;
      }

      
      
}

// clear form input
let clearFormInput = document.querySelectorAll('[data-clear-form]');
for (const action of clearFormInput) {
    action.addEventListener('click', e => {
        let getTarget = e.target;
        let searchForm = document.getElementById(getTarget.getAttribute('data-target'));
        searchForm.value = ''
    })
}

let mobilePrimarySearchInput = document.getElementById('mobilePrimarySearchInput');
if (mobilePrimarySearchInput) {
    mobilePrimarySearchInput.addEventListener('focus', e => {
        openedModalTarget = 'mobileSearchModal';
        openModal(openedModalTarget)
        let modalSearchForm = document.getElementById('mobileSearchInput');
        modalSearchForm.focus() //focus
        modalSearchForm.value = mobilePrimarySearchInput.value; //change value
        mobilePrimarySearchInput.blur()
        mobilePrimarySearchInput.value = '';
    });
}

rangeController = (rangeSliders) => {
    for (const rangeSlider of rangeSliders) {
        rangeSlider.addEventListener("input", function (event) {
            let getTarget = event.target;
            let outputTarget = document.getElementById(getTarget.getAttribute('data-target'));
            outputTarget.innerHTML = numberNotation(rangeSlider.value)
        })
    }    
}

let rangeSlider = document.querySelectorAll('[data-range]');
rangeController(rangeSlider);

let rangeFilterSlider = document.querySelectorAll('[data-filter-range]');
rangeController(rangeFilterSlider);

function sideScroll(element,direction,speed,distance,step){
    let scrollAmount = 0;
    let slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft += step;
        } else {
            element.scrollLeft -= step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}

let carouselNavigation = document.querySelectorAll('[data-carousel]');
for (const action of carouselNavigation) {
    action.addEventListener('click', (e) => {
        // e.preventDefault();
        e.stopPropagation();
        let getDataAttribute = e.target;
        let targetCarousel = getDataAttribute.getAttribute('data-target');
        let carouselSlide = document.getElementById(targetCarousel)
        let carouselDirection = getDataAttribute.getAttribute('data-direction');
        let carouselItems = document.querySelectorAll(`#${targetCarousel} .carousel-item`);
        let size = carouselItems[0].clientWidth + 16;
        
        if (carouselDirection == 'left') {
            sideScroll(carouselSlide, 'left', 30, size, 10);
        } else {
            sideScroll(carouselSlide, 'right', 30, size, 10);
        }
    })
}


/**
 * This is for the Home page advanced search;
 * The searcg area will stick to the top when
 * to scrolls to the top
 */

let advancedSearchstickyElement = document.getElementById("homeAdvancedSearch"); 
if (advancedSearchstickyElement) {
    currStickyPos =  advancedSearchstickyElement.getBoundingClientRect().top + window.pageYOffset; 
    if(screenWidth >= 1024) {
        window.onscroll = function() { 
            if (window.pageYOffset > currStickyPos) { 
                advancedSearchstickyElement.style.position = "fixed"; 
                advancedSearchstickyElement.style.top = "0px"; 
                advancedSearchstickyElement.style.zIndex = 1000; 
                advancedSearchstickyElement.style.height = '90px';
                advancedSearchstickyElement.style.paddingTop = '16px'
                advancedSearchstickyElement.style.paddingBottom = '16px'
            } else { 
                advancedSearchstickyElement.style.position = "absolute"; 
                advancedSearchstickyElement.style.top = "initial"; 
                advancedSearchstickyElement.style.height = 'unset';
                advancedSearchstickyElement.style.paddingTop = '32px'
                advancedSearchstickyElement.style.paddingBottom = '32px'
            } 
        } 
    }
}

// product image slider

let showSlides = n => {
    
    let slides = document.getElementsByClassName("product-image-slide");

    if (slides.length > 0) {

        if (n > slides.length) {currentSlide = 1}
        if (n < 1) {currentSlide = slides.length}
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("is-active");
        }
    
        slides[currentSlide - 1].classList.add("is-active");
    }

}

// initialize slide show
let currentSlide = 1;
showSlides(currentSlide)

let nextSlide = document.getElementById('nextSlide');
if (nextSlide) nextSlide.addEventListener('click', e => { showSlides(currentSlide += 1) })

let previousSlide = document.getElementById('previousSlide');
if (previousSlide) previousSlide.addEventListener('click', e => { showSlides(currentSlide += -1 ) })

// click on thumbnail
let thumbnail = document.querySelectorAll('[data-img-thumb]');
for (const action of thumbnail) {
    action.addEventListener('click', (e) => {
        e.preventDefault();
        let getTarget = e.target;
        let thumbCount = getTarget.getAttribute('data-slide');
        currentSlide = parseInt(thumbCount, 10)
        showSlides(parseInt(thumbCount, 10))
    })
}

// advanced search layout
let findShop = document.getElementById('findShop');
if (findShop) {
    // add 'is-active' class to advance search container
    findShop.addEventListener('click', () => {
        document.querySelector("body").classList.add('overflow-hidden')
        document.getElementById('advancedSearchContainer').classList.add('is-active')

        // remove show effect
        let removeSearch = document.getElementById('homeAdvancedSearch')
        removeSearch.classList.remove('showEffect')
    })
}

// close advanced search
let closeAdvancedSearch = document.querySelectorAll('[data-advanced-search]');
for (const action of closeAdvancedSearch) {
    action.addEventListener('click', (e) => {
        // e.preventDefault();
        e.stopPropagation();
        let getDataAttribute = e.target;
        let closeTarget = getDataAttribute.getAttribute('data-advanced-search');
        document.querySelector("body").classList.remove('overflow-hidden')
        document.getElementById(closeTarget).classList.remove('is-active')

    })
}