
export default ({app}, inject) => {

    let copyToClipBoard = (target) => {
        // Select the email link anchor text
        let targetLink = document.querySelector('#'+target);
        let range = document.createRange();
        range.selectNode(targetLink);
        window.getSelection().addRange(range);

        try {
            // Now that we've selected the anchor text, execute the copy command
            let successful = document.execCommand('copy');
            app.$showToast('Link copied', "success");

            // app.$initiateNotification('success', 'Successful', "Link copied successfully")
        } catch(err) {
            app.$showToast('An error occurred', "error");
        }

        // Remove the selections - NOTE: Should use
        // removeRange(range) when it is supported
        window.getSelection().removeAllRanges();
    }

    inject("copyToClipBoard", copyToClipBoard);

    let clearFormInput = (clearFormInput) => {
        for (const action of clearFormInput) {
            action.addEventListener('click', e => {
                let getTarget = e.target;
                let searchForm = document.getElementById(getTarget.getAttribute('data-target'));
                searchForm.value = ''
            })
        }
    }
    inject('clearFormInput', clearFormInput);

}