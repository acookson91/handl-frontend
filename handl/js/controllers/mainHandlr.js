handlApp.controller('mainHandlr', ["$scope", "$location", "deliveryFactory", function($scope, $location, deliveryFactory){
  $scope.deliveries = deliveryFactory.deliveries;

  $scope.addDeliveryDetails = function(delivery){
    deliveryFactory.create(delivery)
    console.log($scope.deliveries);
  };
}]);
