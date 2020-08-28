window.$OneSignal = window.OneSignal = window.OneSignal || [];

OneSignal.push(['init', {
  "appId": "9210ca94-b19b-4bda-8379-03c07765eabf",
  "allowLocalhostAsSecureOrigin": true,
  "welcomeNotification": {
    "disable": true
  }
}]);

export default function (ctx, inject) {
  inject('OneSignal', OneSignal)
}
