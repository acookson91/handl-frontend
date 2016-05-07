handlApp.controller('deliveryController', ["$scope", "$location", "$routeParams", "deliveryService", "deliveryUpdateService", "directionsService", "locationService",
function($scope, $location, $routeParams, deliveryService, deliveryUpdateService, directionsService, locationService){

  $scope.select = true;
  $scope.collected = false;
  $scope.delivered = false;
  $scope.delivery = {};

  $scope.show = function(id){
    deliveryService.find(id).then(function(response){
        $scope.delivery = response.data;
    });
  };

  $scope.selectDelivery = function(id,status){
    deliveryUpdateService.update(id, status);
    _swapButtonToCollected();
  };

  $scope.collectDelivery = function(id,status){
    deliveryUpdateService.update(id, status);
    _swapButtonToDelivered();
  };

  $scope.completeDelivery = function(id,status){
    deliveryUpdateService.update(id, status);
    $scope.delivered = false;
  };

  $scope.show($routeParams.id);

  var _swapButtonToCollected = function(){
    $scope.collected = true;
    $scope.select = false;
  };

  var _swapButtonToDelivered = function(id,status){
    $scope.collected = false;
    $scope.delivered = true;
  };

  $scope.map = locationService.map;
  $scope.marker = locationService.marker;


  $scope.displayDirections = function(delivery) {
    directionsService.getDirections(delivery);
  };

  $scope.findMyLocation = function(){
    locationService.getMyLocation();
    console.log($scope.marker);
  };

  $scope.directionsToPickup = function(marker, delivery){
    directionsService.getToPickup(marker, delivery);
  };

  $scope.delivery;


}]);
