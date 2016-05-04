handlApp.controller('mainHandlr', ["$scope", "$location", "deliveryFactory", function($scope, $location, deliveryFactory){
  var self = this;
  $scope.deliveries = [];

  $scope.addDeliveryDetails = function(delivery){
    $scope.deliveries.pop();
    $scope.deliveries.push(delivery);
  };
}]);
