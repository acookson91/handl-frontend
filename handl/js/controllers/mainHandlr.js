handlApp.controller('mainHandlr', ["$scope", "$location", "deliveryListService", function($scope, $location, deliveryListService){
  $scope.deliveries = deliveryListService.deliveryDetails;

  $scope.getDeliveryDetails = function(delivery){
    deliveryListService.getAll();
    console.log($scope.deliveries);
  };

  $scope.getDeliveryDetails();
}]);
