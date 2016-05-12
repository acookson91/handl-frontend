handlApp.service('deliveryUpdateService', ['$http', function($http){

  this.update = function(id, params){
    console.log(id, params);
    return $http.put('http://localhost:3000/deliveries/' + id, params).success(function(data){
    });
  };
}]);
