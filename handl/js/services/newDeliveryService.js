angular.module('handlApp').service('newDeliveryService',['$http', function($http){
  var self = this;
  self.AlertMessage = false;
  self.create = function(delivery) {
    return $http.post('http://localhost:3000/deliveries.json', delivery).success(function(data){
    });
  };

}]);
