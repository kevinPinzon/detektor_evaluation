(function(){
	'use strict'

	app.controller('HomeController',InicioController);

	InicioController.$inject = ['$scope','$stateParams', 'Data'];

    function InicioController($scope,$stateParams,Data)
	{
        
        $scope.title = "Table: motivos_es_gt";
        //var Id = $stateParams.id;

        
    }
    
})();