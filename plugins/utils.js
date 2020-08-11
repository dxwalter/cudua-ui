
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

    let numberNotation = (number) => {

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

    inject('numberNotation', numberNotation)

}