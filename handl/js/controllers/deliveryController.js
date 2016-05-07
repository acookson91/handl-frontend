handlApp.controller('deliveryController', ["$scope", "$location", "$routeParams", "deliveryService", "deliveryUpdateService", "directionsService", "locationService",
function($scope, $location, $routeParams, deliveryService, deliveryUpdateService, directionsService, locationService){

  $scope.select = true;
  $scope.collected = false;
  $scope.delivered = false;

  $scope.show = function(id){
    deliveryService.find(id).then(function(response){
        $scope.delivery = response.data;
    });
  };

  $scope.selectDelivery = function(id,status){
    deliveryUpdateService.update(id, status);
    _swapButton();
  };

  $scope.collectDelivery = function(id,status){
    deliveryUpdateService.update(id, status);
    $scope.collected = false;
    $scope.delivered = true;
  };

  $scope.completeDelivery = function(id,status){
    deliveryUpdateService.update(id, status);
    $scope.delivered = false;
  };

  $scope.show($routeParams.id);

  var _swapButton = function(){
    $scope.collected = true;
    $scope.select = false;
  };

  $scope.map = locationService.map;
  $scope.marker = locationService.marker;


  $scope.displayDirections = function(delivery) {
    directionsService.getDirections(delivery);
  };

  $scope.findMyLocation = function(){
    locationService.getMyLocation();
  };


  function init(delivery) {
    $scope.findMyLocation();
    $scope.displayDirections(delivery);
  }

  console.log($scope.delivery);



}]);
