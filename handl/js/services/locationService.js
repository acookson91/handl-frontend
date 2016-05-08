handlApp.service('locationService', ["uiGmapIsReady", 'uiGmapGoogleMapApi', "$location", "$geolocation",
function( uiGmapIsReady, uiGmapGoogleMapApi, $location, $geolocation, deliveriesService){

  var self = this;
  var center = {latitude: 51.5082450, longitude: -0.0877000};
  var me;
  self.marker = {
    id: 0,
    coords: {}
  };

  self.map = {
    control: {},
    center: center,
    zoom: 12
  };

  self.getMyLocation = function() {
    var geolocation = navigator.geolocation;
    geolocation.getCurrentPosition(findMe);
  };

  function findMe(position) {
    var me = {lat: position.coords.latitude, lng: position.coords.longitude};
    _updateMarker(me);
    _updateMap(me);
  };

  function _updateMarker(me){
    self.marker.coords.latitude = me.lat;
    self.marker.coords.longitude = me.lng;
  };

  function _updateMap(me){
    self.map.center = {latitude: me.lat, longitude: me.lng};
    self.map.zoom = 18;
  }
}]);
