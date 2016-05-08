handlApp.controller('newDeliveryController', [ "$scope","uiGmapIsReady", 'uiGmapGoogleMapApi', "$location", "$geolocation", "newDeliveryService", "deliveriesService", "directionsService", "locationService",
function($scope,uiGmapIsReady, uiGmapGoogleMapApi, $location, $geolocation, newDeliveryService, deliveriesService, directionsService, locationService){
  var self = this;
  $scope.deliveries = [];
  $scope.alertMessage = false;
  $scope.alertMessageFail = false;



  $scope.newDelivery = function(delivery){
    $scope.deliveries = [];
    $scope.deliveries.push(delivery);
    $scope.displayDirections(delivery);
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


  $scope.map = locationService.map;
  $scope.marker = locationService.marker;


  $scope.displayDirections = function(delivery) {
    directionsService.getDirections(delivery);
  };

  $scope.findMyLocation = function(){
    locationService.getMyLocation();
    console.log($scope.marker);
  };


}]);
