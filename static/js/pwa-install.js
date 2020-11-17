function initPwaAction () {

    setTimeout(() => {


        //   let currentTime = new Date().getTime();
        //   let timeToRetry = localStorage.getItem('cudua_retry_installation') == null ? 0 : localStorage.getItem('cudua_retry_installation');

        //   if (currentTime >= timeToRetry) {
        //       let installApp = document.getElementById('installAppContainer');
        //       installApp.classList.remove('display-none');
        //   }

        console.log("here man")


    }, 1000);
}

let deferredPrompt;

alert("good guy")

window.addEventListener('beforeinstallprompt', function(e) {
    // e.preventDefault()
    // deferredPrompt = e;
    // initPwaAction()
    console.log("good")
})


let installBtn = document.getElementById('installUserPwa');
if (installBtn) {
  installBtn.addEventListener('click', (e) => {

    installBtn.disabled = true;
    // hide our user interface that shows our A2HS button
    let installApp = document.getElementById('installAppContainer');
    installApp.classList.add('display-none');
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            let currentTime = new Date().getTime();
            let nextInstall = currentTime + (86400  * 30)
            localStorage.setItem('cudua_retry_installation', nextInstall);
            installBtn.disabled = false;
        } else {
          
        }
        deferredPrompt = null;
      });
  });
}