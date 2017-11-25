(function(angular, undefined) {
'use strict';
//http://localhost:8000/#!/view1

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'appServices'
])
.config(['$locationProvider', '$routeProvider', 
  function($locationProvider, $routeProvider) 
  {
    $locationProvider.hashPrefix('!');
      
    $routeProvider
      .when('/view2', {
        templateUrl: 'view2/view2.html'
      })
      .when('/view1', {
        templateUrl: 'view1/view1.html'
      })

      .otherwise({
        redirectTo: '/view1'
      });
  }
]);



})(angular);