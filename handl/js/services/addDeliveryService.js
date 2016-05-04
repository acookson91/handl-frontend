angular.module('handlApp').service('addDeliveryService',['$http', function($http){
  var self = this;

  self.create = function(delivery) {
    return $http.post('http://localhost:3000/deliveries', delivery).success(function(data){
      console.log(data);
    });
  };
}]);
