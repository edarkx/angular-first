(function(angular, undefined) {
  'use strict';


angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', View2Ctrl);

View2Ctrl.$inject = [
        '$location',
        '$rootScope',
        '$scope',
        '$q'
    ];

    console.log('Iniciando o controller View2!!!!!!');

function View2Ctrl(
        $location,
        $rootScope,
        $scope,
        $q) 
  {
    
    var vm = this;
    vm.nome = "lapis";
    $scope.nome = "eder";

      
  }
})(angular);