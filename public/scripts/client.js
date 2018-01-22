var myApp = angular.module('myApp', ['ngRoute','ngAlertify']);

myApp.config(['$routeProvider', function($routeProvider) {


  //defining routes
  $routeProvider
    .when ('/main', {
      templateUrl: './views/main.html',
      controller: 'MainController',
      controllerAs: 'mc'
    })
    .otherwise ( {
        redirectTo: '/main'
    });



}]);
