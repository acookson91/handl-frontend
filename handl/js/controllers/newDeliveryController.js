handlApp.controller('newDeliveryController', [ "$scope", "$location", "deliveryFactory", "newDeliveryService", function($scope, $location, deliveryFactory, newDeliveryService){
  var self = this;
  $scope.deliveries = [];
  $scope.alertMessage = false;
  $scope.alertMessageFail = false;


  $scope.newDelivery = function(delivery){
    $scope.deliveries = [];
    $scope.deliveries.push(delivery);
  };

  $scope.createDelivery = function(delivery){
    newDeliveryService.create(delivery)

    .success(function(){
      $scope.alertMessage = true;
    })
    .error(function(){
      $scope.alertMessageFail = true;
    });
  };
}]);
