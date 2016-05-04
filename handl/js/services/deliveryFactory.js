handlApp.factory('deliveryFactory', ['$http', function($http){
  var self = this;
  self.deliveryDetails = [];

  self.deliveryDetails.getAll = function() {
  return $http.get('http://localhost:3000/deliveries').success(function(data){
    self.deliveryDetails.push(data);
    });
  };

  self.deliveryDetails.create = function(delivery) {
    return $http.post('http://localhost:3000/deliveries.json', delivery).success(function(data){
      console.log(data)
      self.deliveryDetails.getAll()
    });
  };

  return self.deliveryDetails;
}]);
