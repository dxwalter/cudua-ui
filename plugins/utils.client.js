
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

		let pushNotification = (message) => {
				// Inside page components
				app.$OneSignal.push(() => {
					app.$OneSignal.isPushNotificationsEnabled((isEnabled) => {
						if (isEnabled) {
							console.log(message)
						} else {
							console.log('Push notifications are not enabled yet.')
						}
					})
				})
		}

		inject('pushNotification', pushNotification)


		let getAnonymousIDFromStorage = () => localStorage.getItem('CUDUA_ANONYMOUS_ID');

		inject('getAnonymousIDFromStorage', getAnonymousIDFromStorage);

		let saveAnonymousIdToStorage = (id) => {
			localStorage.setItem('CUDUA_ANONYMOUS_ID', id);
		}
		inject('saveAnonymousIdToStorage', saveAnonymousIdToStorage);

		let deleteAnonymousIdFromStorage = () => {
			localStorage.removeItem('CUDUA_ANONYMOUS_ID');
		}

		inject('deleteAnonymousIdFromStorage', deleteAnonymousIdFromStorage)

		let addRedBorder = (target) => {
            document.getElementById(target).style.border = '1px solid #B82E24';
		}
		inject('addRedBorder', addRedBorder);

        let removeRedBorder = (target) => {
            document.getElementById(target).style.border = '0px';
		}
		inject('removeRedBorder', removeRedBorder);

        let outputValidationError = (target, message) => {
            document.getElementById(target).style.display = 'block';
            document.getElementById(target).innerHTML = '';
            document.getElementById(target).innerHTML = message;
		}
		inject('outputValidationError', outputValidationError);

        let removeValidationError = (target) => {
            document.getElementById(target).style.display = 'none';
		}
		
		inject('removeValidationError', removeValidationError);
		
		// perform graphql queries

		let performGraphQlMutation = async (apollo, queryString, variables, context) => {

			try {

				
				let result = await apollo.mutate({
                    mutation: queryString,
					variables: variables,
					context: context
                });

				return {
					error: false,
					result: result
				}
				
			} catch (error) {
				return {
					error: true,
					message: error.message
				}
			}


		}

		inject('performGraphQlMutation', performGraphQlMutation);

}