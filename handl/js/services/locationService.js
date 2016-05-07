handlApp.service('locationService', ["uiGmapIsReady", 'uiGmapGoogleMapApi', "$location", "$geolocation",
function( uiGmapIsReady, uiGmapGoogleMapApi, $location, $geolocation, deliveriesService){

  var self = this;


  var center = {latitude: 51.5082450, longitude: -0.0877000};
  console.log(self.marker);
  self.marker = {
    id: 0,
    coords: {latitude: 51.5082450, longitude: -0.0877000}
  };

  self.map = {
    control: {},
    center: center,
    zoom: 12
  };

  self.getMyLocation = function() {
    var geolocation = navigator.geolocation;
    return geolocation.getCurrentPosition(findMe);
  };

  function findMe(position) {
    _updateMarker(position);
    _updateMap(position);
  };

  function _updateMarker(position){
    self.marker.coords.latitude = position.coords.latitude;
    self.marker.coords.longitude = position.coords.longitude;
    console.log(position);
  };

  function _updateMap(position){
    self.map.center = {latitude: position.coords.latitude, longitude: position.coords.longitude};
    self.map.zoom = 12;
  }
}]);
