if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register('custom-sw.js', {scope: '/'}).then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
    });

    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const worker of registrations) {
        // console.log('Service worker:', worker)
      }
    });

}



function initPwaAction () {

    let currentTime = new Date().getTime();
    let timeToRetry = localStorage.getItem('cudua_retry_installation')

    if (timeToRetry == null) {
        let nextInstall = currentTime + 1800 
        localStorage.setItem('cudua_retry_installation', nextInstall);
        return 
    }

    if (currentTime >= timeToRetry) {
        let installApp = document.getElementById('installAppContainer');
        installApp.classList.remove('display-none');
    }
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', function(e) {
    e.preventDefault()
    deferredPrompt = e;
    initPwaAction()
})


let installBtn = document.getElementById('installUserPwa');
console.log(installBtn)
if (installBtn) {
    installBtn.addEventListener('click', async (e) => {
        console.log(deferredPrompt)
        installBtn.disabled = true;
        // hide our user interface that shows our A2HS button
        let installApp = document.getElementById('installAppContainer');
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        await deferredPrompt.userChoice
        .then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                let currentTime = new Date().getTime();
                let nextInstall = currentTime + (86400  * 20)
                localStorage.setItem('cudua_retry_installation', nextInstall);
                installBtn.disabled = false;
            } else {
                installBtn.disabled = false;
            }
        deferredPrompt = null;
        installApp.classList.add('display-none');
        });
    });
} else {
    console.log("button not found")
}

