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
    vm.carrinhos = [];

    //variaveis para o option
    $scope.items = [{
      id: 1,
      label: 'carrinho1'
    }, {
      id: 2,
      label: 'carrinho2'
    }];

    //Declaração de metodos
    vm.iniciar = iniciar;
    vm.listarCarrinhos = listarCarrinhos;
    vm.selecioneCarrinho = selecioneCarrinho;

    //metodos implementação
    function iniciar(){
      console.log("entrei no metodo iniciar");

      //aqui posso iniciar listando um carrinho 1 ao carregar
      //listarCarrinhos(1);
    }

    function listarCarrinhos(id) {
      AppService.consultarCarrinho(id)
          .then(function(response) {
              vm.carrinhos = response.data;
              console.log('car:' + JSON.stringify(response, undefined, 2));
          })['catch'](function() {
            vm.carrinhos = [];
          });
    }

    function selecioneCarrinho(id)
    {
      console.log("carrinho selecionado = " + id);
      listarCarrinhos(id);
    }





      
  }
})(angular);