handlApp.controller('deliveriesController', ['$scope', 'deliveriesService', 'directionsService', 'locationService',
function($scope, deliveriesService, directionsService, locationService){

  $scope.marker = locationService.marker;

  $scope.map = locationService.map;

  $scope.index = function(){
    deliveriesService.all().then(function(response) {
      $scope.deliveries = response.data;
    });
  };

  $scope.displayDirections = function(delivery) {
    directionsService.getDeliveryDirections(delivery);
  };

  $scope.findMyLocation = function(){
    locationService.getMyLocation();
  };

  $scope.index();



}]);
