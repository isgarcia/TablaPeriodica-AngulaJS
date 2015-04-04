var tperiodicaApp = angular.module('tperiodicaApp', []);
var urlElementos = "./data/elementos.json";

tperiodicaApp.controller('ElementosCtrl', function($scope,$http){
            
        $scope.titulo = "Tabla Periódica de los elementos";
    
        $scope.cargarElementos = function(){

            $scope.elementos = [];
            //hacemos uso de $http para obtener los datos del json
            $http.get(urlElementos).success(function(data){
                //console.log(data);
                $scope.elementos = data;
            });
            
        };
    
    }
);

