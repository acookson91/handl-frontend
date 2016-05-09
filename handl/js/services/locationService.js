handlApp.service('locationService', ['uiGmapIsReady', 'uiGmapGoogleMapApi', '$geolocation',
function( uiGmapIsReady, uiGmapGoogleMapApi, $geolocation, deliveriesService){

  var self = this;

  self.marker = {
    id: 0,
    coords: {}
  };

  self.map = {
    control: {},
    center: {latitude: 51.5082450, longitude: -0.0877000},
    zoom: 12
  };

  self.getMyLocation = function() {
    navigator.geolocation.getCurrentPosition(findMe);
  };

  function findMe(position) {
    var me = {lat: position.coords.latitude, lng: position.coords.longitude};
    _updateMarker(me);
    _updateMap(me);
  }

  function _updateMarker(me){
    self.marker.coords.latitude = me.lat;
    self.marker.coords.longitude = me.lng;
  }

  function _updateMap(me){
    self.map.center = {latitude: me.lat, longitude: me.lng};
    self.map.zoom = 15;
  }
}]);
