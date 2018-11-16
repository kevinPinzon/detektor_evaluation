(function(){
	'use strict'

	app.controller('HomeController',InicioController);

	InicioController.$inject = ['$scope','$stateParams', 'Data'];

    function InicioController($scope,$stateParams,Data)
	{
        // var $ = require( 'jquery' );
        // require( 'datatables.net' )( window, $ );
        
        // $(document).ready(function() {            
        //     $('#motivos').DataTable();
        // } );

        setTimeout(function () {
            $(function () {
              $('#motivos').DataTable();
            });
          }, 500);

        //var Id = $stateParams.id;

        getAllData();

        function getAllData(){
            Data.get('motivos',{
                id: -1,
                action: 'get'
            }).then(function(results){
                console.log("RESULTADOS",results);
                $scope.tableResults = results;
            });
        }

    }
    
})();