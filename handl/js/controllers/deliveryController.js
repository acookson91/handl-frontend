handlApp.controller('deliveryController', ["$scope", "$location", "$routeParams", "deliveryService",
function($scope, $location, $routeParams, deliveryService){

  $scope.show = function(id){
    deliveryService.find(id).then(function(response){
        $scope.delivery = response.data;
    });
  };

  $scope.show($routeParams.id);
}]);
