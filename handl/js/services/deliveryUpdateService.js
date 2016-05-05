handlApp.service('deliveryUpdateService', ['$http', function($http){

  this.update = function(id, status){
    return $http.put('http://localhost:3000/deliveries/' + id, status).success(function(data){
    });
  };
}]);
