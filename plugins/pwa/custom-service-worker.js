
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

  }