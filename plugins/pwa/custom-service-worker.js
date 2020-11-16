
function initPwaAction () {
    
      if ('serviceWorker' in navigator) {

          navigator.serviceWorker.register('sw.js?v2', { scope: '.' }).then(function(registration) {
              // Registration was successful
              console.log('ServiceWorker registration successful with scope: ', registration.scope);
          }, function(err) {
              // registration failed :(
              // console.log('ServiceWorker registration failed: ', err);
          });

          navigator.serviceWorker.getRegistrations().then((registrations) => {
            for (const worker of registrations) {
              // console.log('Service worker:', worker)
            }
          });

          let currentTime = new Date().getTime();
          let timeToRetry = localStorage.getItem('cudua_retry_installation')

          if (timeToRetry == null) {
              let nextInstall = currentTime + 3600 
              localStorage.setItem('cudua_retry_installation', nextInstall);
              return 
          }

          if (currentTime >= timeToRetry) {
              let installApp = document.getElementById('installAppContainer');
              installApp.classList.remove('display-none');
          }
      }
}

let deferredPrompt;

window.addEventListener('fetch', function(e) {
  
});

window.addEventListener('beforeinstallprompt', function(e) {
    e.preventDefault()
    deferredPrompt = e;
    initPwaAction()
});


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