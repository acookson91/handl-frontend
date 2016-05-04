handlApp.factory('deliveryFactory', ['$http', function($http){
  var self = this;
  var deliveryDetails = []


  self.getAll = function() {
  return $http.get('http://localhost:3000/deliveries').success(function(data){
    angular.copy(data, deliveryDetails.deliveries);
    });
  };


  // deliveryDetails.create = function(delivery) {
  //   return $http.post('/deliveries.json', delivery).success(function(data){
  //     console.log(data)
  //     deliveryDetails.getAll()
  //   });
  // };

  return deliveryDetails;
}]);
