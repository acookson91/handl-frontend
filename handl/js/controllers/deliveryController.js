handlApp.controller('deliveryController', ["$scope", "$location", "$routeParams", "deliveryService", "deliveryUpdateService",
function($scope, $location, $routeParams, deliveryService, deliveryUpdateService){

  $scope.select = true;
  $scope.collected = false;
  $scope.delivered = false;

  $scope.show = function(id){
    deliveryService.find(id).then(function(response){
        $scope.delivery = response.data;
    });
  };

  $scope.selectDelivery = function(id,status){
    deliveryUpdateService.update(id, status);
    swapButton();
  };

  $scope.collectDelivery = function(id,status){
    deliveryUpdateService.update(id, status);
    $scope.collected = false;
    $scope.delivered = true;
  };

  $scope.completeDelivery = function(id,status){
    deliveryUpdateService.update(id, status);
    $scope.delivered = false;
  };

  $scope.show($routeParams.id);

  var swapButton = function(){
    $scope.collected = true;
    $scope.select = false;
  };
}]);
