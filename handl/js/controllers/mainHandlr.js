handlApp.controller('mainHandlr', ["$scope", "$location", "deliveryFactory", function($scope, $location, deliveryFactory){
  $scope.deliveries = deliveryFactory.deliveries;

  $scope.getDeliveryDetails = function(delivery){
    deliveryFactory.getAll()
    console.log($scope.deliveries);
  };

  $scope.getDeliveryDetails();
}]);
