(function(){
	'use strict'

	app.controller('HomeController',InicioController);

	InicioController.$inject = ['$scope','$stateParams', 'Data'];

    function InicioController($scope,$stateParams,Data)
	{

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
        
        $scope.insertNewItem = function(){            
            
            Data.get('motivos',{
                id: $('#item_motivo').val(),
                des_motivo: $('#item_des_motivo').val(),
                estado: $('#item_estado').val(),
                tipo: $('#item_tipo').val(),
                action: 'insert'
            }).then(function(results){
                var obj ={
                    motivo: $('#item_motivo').val(),
                    des_motivo: $('#item_des_motivo').val(),
                    estado: $('#item_estado').val(),
                    tipo: $('#item_tipo').val()
                }
                $scope.tableResults.push(obj);
                console.log("RESULTADOS UPDATED",$scope.tableResults);
                //getAllData();
            });
        }

    }
    
})();