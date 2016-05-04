handlApp.controller('mainHandlr', [ "$scope", "$location", "deliveryFactory", "addDeliveryService", function($scope, $location, deliveryFactory, addDeliveryService){
  var self = this;
  $scope.deliveries = [];


  $scope.addDeliveryDetails = function(delivery){
    $scope.deliveries = [];
    $scope.deliveries.push(delivery);
  };

  $scope.confirmDelivery = function(delivery){
    addDeliveryService.create(delivery);
  };




}]);
