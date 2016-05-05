handlApp.service('deliveryService', ['$http', function($http){
  this.find = function(id){
    return $http.get('http://localhost:3000/deliveries/' + id);
  };
}]);
