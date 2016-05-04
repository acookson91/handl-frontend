handlApp.controller('mainHandlr', ["$scope",function($scope){
  var self = this;

  self.deliveries2 = {};

  $scope.deliveries = {};

  self.addDeliveryDetails = function(delivery){
    console.log(delivery);
    $scope.deliveries = angular.copy(delivery);
    console.log($scope.deliveries.rPCode);

    self.deliveries2 = delivery;
  };


}]);
