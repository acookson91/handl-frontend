handlApp.controller('deliveryController', ['$scope', '$routeParams', 'deliveryService', 'deliveryUpdateService', 'directionsService', 'locationService',
function($scope, $routeParams, deliveryService, deliveryUpdateService, directionsService, locationService){

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

  function _buttonDisplayed(delivery){
    if (delivery.status === 'pending'){
      _showSelectButton();
    } else if (delivery.status === 'assigned') {
      _showCollectButton();
    } else {
      _showDeliveredButton();
    }
  }

  function _showCollectButton(){
    $scope.select = false;
    $scope.collected = true;
    $scope.delivered = false;
  }

  function _showSelectButton(){
    $scope.select = true;
    $scope.collected = false;
    $scope.delivered = false;
  } 

  function _showDeliveredButton(){
    $scope.select = false;
    $scope.collected = false;
    $scope.delivered = true;
  }

}]);
