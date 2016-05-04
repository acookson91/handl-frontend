handlApp.service('deliveryListService', ['$http', function($http){
  var self = this;
  self.deliveryDetails = [];

  self.getAll = function(){
  return $http.get('http://localhost:3000/deliveries')
    .then(function(response){
      self.deliveryDetails = response.data;
    });
  };
}]);
