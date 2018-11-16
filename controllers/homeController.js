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

                $('#motivos').DataTable();

                $('#item_motivo').val("");
                $('#item_des_motivo').val("");
                $('#item_estado').val("");
                $('#item_tipo').val("");

                //location.reload();
            });
        }

        $scope.show_update_modal = function(item){
            $scope.item_motivo = item;
            $('#update_modal').modal('show');
        }

        $scope.show_insertMolda = function(item){
            $scope.item_motivo = item;
            $('#insert_modal').modal('show');
        }

        $scope.show_removeModal = function(item){
            $scope.item_motivo = item;
            $('#remove_modal').modal('show');
        }

        $scope.updateItem = function(){
            
            Data.get('motivos',{
                id: $('#edit_item_motivo').val(),
                des_motivo: $('#edit_item_des_motivo').val(),
                estado: $('#edit_item_estado').val(),
                tipo: $('#edit_item_tipo').val(),
                action: 'update'
            }).then(function(results){
                //$scope.tableResults = [];
                //getAllData();
                //$('#motivos').DataTable();
                location.reload();
            });
        }

        $scope.deleteItem = function(){
            
            Data.get('motivos',{
                id: $scope.item_motivo.motivo,
                action: 'delete'
            }).then(function(results){        
                //$scope.tableResults = []; 
                //getAllData();
                //$('#motivos').DataTable();
                location.reload();
            });
        }
        
    }
    
})();