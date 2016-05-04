handlApp.controller('mainHandlr', ["$scope", "$location", function($scope, $location){
  $scope.deliveries = {};

  $scope.addDeliveryDetails = function(delivery){
    $scope.deliveries = angular.copy(delivery);
    $location.path('/confirm-delivery');
    console.log($scope.deliveries);
  };
}]);
