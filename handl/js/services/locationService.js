handlApp.service('locationService', ['uiGmapIsReady', 'uiGmapGoogleMapApi', '$geolocation',
function( uiGmapIsReady, uiGmapGoogleMapApi, $geolocation, deliveriesService){

  var self = this;
  var styleArray2 = [{"featureType":"administrative.locality","elementType":"all","stylers":[{"hue":"#2c2e33"},{"saturation":7},{"lightness":19},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text","stylers":[{"visibility":"on"},{"saturation":"-3"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#f39247"}]},{"featureType":"landscape","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"simplified"}]},{"featureType":"poi","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"poi.school","elementType":"geometry.fill","stylers":[{"color":"#f39247"},{"saturation":"0"},{"visibility":"on"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#ff6f00"},{"saturation":"100"},{"lightness":31},{"visibility":"simplified"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#f39247"},{"saturation":"0"}]},{"featureType":"road","elementType":"labels","stylers":[{"hue":"#008eff"},{"saturation":-93},{"lightness":31},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#f3dbc8"},{"saturation":"0"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":-2},{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"hue":"#e9ebed"},{"saturation":-90},{"lightness":-8},{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":10},{"lightness":69},{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":-78},{"lightness":67},{"visibility":"simplified"}]}];
  var styleArray = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#6195a0"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#e6f3d6"},{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffaa4d"},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"color":"#4e4e4e"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#f4f4f4"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#787878"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#eaf6f8"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#eaf6f8"}]}];

  self.marker = {
    id: 0,
    coords: {}
  };

  self.map = {
    control: {},
    center: {latitude: 51.5082450, longitude: -0.0877000},
    zoom: 12
  };

  self.options = {
    styles: styleArray
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
