handlApp.service('directionsService', ['uiGmapIsReady', 'uiGmapGoogleMapApi', '$geolocation',
function( uiGmapIsReady, uiGmapGoogleMapApi, $geolocation, deliveriesService){

  // var geocoder = new google.maps.Geocoder();
  var deliveryDirectionsDisplay = new google.maps.DirectionsRenderer();
  var deliveryDirectionsService = new google.maps.DirectionsService();
  // var pickupDirectionsDisplay = new google.maps.DirectionsRenderer();
  // var pickupDirectionsService = new google.maps.DirectionsService();

  this.getDeliveryDirections = function(delivery) {
    var request = _createRequest(_createPickupString(delivery), _createDropOffString(delivery));
    _renderDirections(request, deliveryDirectionsService, deliveryDirectionsDisplay);
  };

  this.getToPickup = function(marker, delivery) {
    var request = _createRequest(_defineMyLocation(marker), _createPickupString(delivery));
    _renderDirections(request, deliveryDirectionsService, deliveryDirectionsDisplay);
  };

  function _createRequest(origin, destination){
    return {
      origin: origin,
      destination: destination,
      travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
  }

  function _renderDirections(request, service, display) {
    uiGmapIsReady.promise().then(function(map_instances){
      var myMap = map_instances[0].map;
      _deliveryDirections(myMap, request, service, display);
  });
  }

  function _deliveryDirections(myMap, request, service, display){
    service.route(request, function (response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        display.setDirections(response);
        display.setMap(myMap);
      } else {
        alert('Google route unsuccesfull!');
      }
    });
  }


  function _createPickupString(delivery){
    return delivery.pickup_line1 + ", " + delivery.pickup_line2 + ", " + delivery.pickup_postcode.replace(/\s+/, "");
  }

  function _createDropOffString(delivery){
    return delivery.dropoff_line1 + ", " + delivery.dropoff_line2 + ", " + delivery.dropoff_postcode.replace(/\s+/, "");
  }
  function _defineMyLocation(marker){
    return {lat: marker.coords.latitude, lng: marker.coords.longitude};
  }

}]);
