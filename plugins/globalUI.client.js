export default ({app}, inject) => {
    
    let singleClickTab = (singleTabClick) => {
        for (const action of singleTabClick) {
            action.addEventListener('click', (e) => {
                e.preventDefault();
                let getTarget = e.target;
                let singleTabContainer = document.getElementById(getTarget.getAttribute('data-target'));
                alert(singleTabContainer)
                singleTabContainer.classList.toggle(`showEffect`);
            })
        }
    }

    inject("singleClickTab", singleClickTab);

}