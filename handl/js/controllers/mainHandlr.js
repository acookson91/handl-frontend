handlApp.controller('mainHandlr', ["$scope", "$location", "deliveryListService", "deliveryDetailsService",
function($scope, $location, deliveryListService, deliveryDetailsService){
  $scope.deliveries = deliveryListService.deliveryDetails;
  $scope.delivery = deliveryDetailsService.delivery;

  $scope.getDeliveryDetails = function(delivery){
    deliveryListService.getAll();
  };

  $scope.pullDeliveryDetails = function(id){
    deliveryDetailsService.getOne(id);
  };

  $scope.getDeliveryDetails();

}]);
