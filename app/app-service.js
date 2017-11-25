(function (angular, undefined) {
    'use strict';

    angular.module('appServices', [])
    .factory('AppService', AppService);

    AppService.$inject = ['$http', '$q'];

    function AppService($http, $q) {

      console.log('Iniciando a Service!!!!!');

	  	/************************************************************************************************
		 * Declaração Métodos a serem chamados pelo controller.
		 ************************************************************************************************/
		return {
			consultarCarrinho	: consultarCarrinho
		};

		/************************************************************************************************
		 * Métodos Implementação
		 ************************************************************************************************/
		

		function consultarCarrinho(id) {
	        return $http.get('http://localhost:8080/carrinhos/' + id, {
        		params : {} //aqui é necessário para queryParameter, no caso acima estou usando pathParameter
            });
		}
    }
})(angular);
