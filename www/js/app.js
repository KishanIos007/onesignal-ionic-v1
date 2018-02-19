// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    
      var notificationOpenedCallback = function(jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      };
    
      window.plugins.OneSignal
        .startInit("put ur app id here")
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();
       
    
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
