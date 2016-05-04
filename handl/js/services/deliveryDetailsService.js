handlApp.service('deliveryDetailsService', ['$http', function($http){
  var self = this;
  self.delivery = [];

  self.getOne = function(id){
    console.log(id);
  return $http.get('http://localhost:3000/deliveries/' + id)
    .then(function(response){
      console.log(response.data);

      self.delivery = response.data;
    });
  };
}]);
