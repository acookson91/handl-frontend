handlApp.controller('mainHandlr', ["$scope",function($scope){
  $scope.deliveries = {};

  $scope.addDeliveryDetails = function(delivery){
    $scope.deliveries = angular.copy(delivery);
  };


}]);
