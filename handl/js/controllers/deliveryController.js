handlApp.controller('deliveryController', ['$scope', '$stateParams', 'deliveryService', 'deliveryUpdateService', 'directionsService', 'locationService',
function($scope, $stateParams, deliveryService, deliveryUpdateService, directionsService, locationService){

  $scope.map = locationService.map;
  $scope.marker = locationService.marker;
  $scope.options = locationService.options;

  $scope.show = function(id){
    deliveryService.find(id).then(function(response){
        $scope.delivery = response.data;
        _buttonDisplayed(response.data);
    });
  };


  $scope.selectDelivery = function(id,status, marker, delivery){
    deliveryUpdateService.update(id, status);
    $scope.directionsToPickup(marker, delivery);
    _showCollectButton();
  };

  $scope.collectDelivery = function(id,status, marker, delivery){
    deliveryUpdateService.update(id, status);
    $scope.directionsToDropOff(marker, delivery);
    _showDeliveredButton();
  };

  $scope.completeDelivery = function(id,status){
    deliveryUpdateService.update(id, status);
    $scope.delivered = false;
  };

  $scope.show($stateParams.id);

  $scope.displayDirections = function(delivery) {
    directionsService.getDeliveryDirections(delivery);
  };

  $scope.findMyLocation = function(){
    locationService.getMyLocation();
  };

  $scope.directionsToPickup = function(marker, delivery){
    directionsService.getToPickup(marker, delivery);
  };

  $scope.directionsToDropOff = function(marker, delivery){
    directionsService.getToDropOff(marker, delivery);
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
