(function(angular, undefined) {
  'use strict';


angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', View1Ctrl);

View1Ctrl.$inject = [
        '$location',
        '$rootScope',
        '$scope',
        '$q',
        'AppService'
    ];

console.log('Iniciando o controller View1!!!!!!');

function View1Ctrl(
        $location,
        $rootScope,
        $scope,
        $q,
        AppService
      ) 
  {
    
    //Declaração de variaveis
    var vm = this;
    vm.nome = "rose";
    $scope.nome = "lais";
    vm.carrinhos = [];

    //Declaração de metodos
    vm.iniciar = iniciar;
    vm.listarCarrinhos = listarCarrinhos;

    //metodos implementação
    function iniciar(){
      console.log("entrei no metodo iniciar");
      listarCarrinhos();
    }

    function listarCarrinhos() {
      AppService.consultarCarrinho(1)
          .then(function(response) {
              vm.carrinhos = response.data;
              console.log('car:' + JSON.stringify(response, undefined, 2));
          })['catch'](function() {
            vm.carrinhos = [];
          });
    }





      
  }
})(angular);