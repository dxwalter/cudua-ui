
function initPwa (hasInstalled) {

    setTimeout(() => {
    
      if ('serviceWorker' in navigator) {

          navigator.serviceWorker.register('sw.js?v2').then(function(registration) {
              // Registration was successful
              // console.log('ServiceWorker registration successful with scope: ', registration.scope);
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
          let timeToRetry = localStorage.getItem('cudua_retry_installation') == null ? 0 : localStorage.getItem('cudua_retry_installation');

          if (currentTime >= timeToRetry && hasInstalled == 0) {
              let installApp = document.getElementById('installAppContainer');
              installApp.classList.remove('display-none');
          }
      }

    }, 5000);
}

let deferredPrompt;
let hasInstalled = 1


window.addEventListener('beforeinstallprompt', function(e) {
    e.preventDefault()
    deferredPrompt = e;
    hasInstalled = 0
})



document.addEventListener("DOMContentLoaded", initPwa(hasInstalled))

let installBtn = document.getElementById('installUserPwa');
installBtn.addEventListener('click', (e) => {

  // hide our user interface that shows our A2HS button
  let installApp = document.getElementById('installAppContainer');
  installApp.classList.add('display-none');
  // Show the prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice
    .then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {

      } else {
        
      }
      deferredPrompt = null;
    });
});