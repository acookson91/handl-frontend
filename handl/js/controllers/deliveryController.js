handlApp.controller('deliveryController', ["$scope", "$location", "$routeParams", "deliveryService", "deliveryUpdateService", "directionsService", "locationService",
function($scope, $location, $routeParams, deliveryService, deliveryUpdateService, directionsService, locationService){

  $scope.map = locationService.map;
  $scope.marker = locationService.marker;

  $scope.show = function(id){
    deliveryService.find(id).then(function(response){
        $scope.delivery = response.data;
        _buttonDisplayed(response.data);
    });
  };

  $scope.selectDelivery = function(id,status){
    deliveryUpdateService.update(id, status);
    _showCollectButton();
  };

  $scope.collectDelivery = function(id,status){
    deliveryUpdateService.update(id, status);
    _showDeliveredButton();
  };

  $scope.completeDelivery = function(id,status){
    deliveryUpdateService.update(id, status);
    $scope.delivered = false;
  };

  var _buttonDisplayed = function(delivery){
    console.log(delivery);
    if (delivery.status === 'pending'){
      _showSelectButton();
    } else if (delivery.status === 'assigned') {
      _showCollectButton();
    } else {
      _showDeliveredButton();
    }
  };
  $scope.show($routeParams.id);


  $scope.displayDirections = function(delivery) {
    directionsService.getDeliveryDirections(delivery);
  };

  $scope.findMyLocation = function(){
    locationService.getMyLocation();
  };

  $scope.directionsToPickup = function(marker, delivery){
    directionsService.getToPickup(marker, delivery);
  };

  $scope.findMyLocation();

  var _showCollectButton = function(){
    $scope.select = false;
    $scope.collected = true;
    $scope.delivered = false;
  };

  var _showSelectButton = function(){
    $scope.select = true;
    $scope.collected = false;
    $scope.delivered = false;
  };

  var _showDeliveredButton = function(){
    $scope.select = false;
    $scope.collected = false;
    $scope.delivered = true;
  };

}]);
