handlApp.service('deliveryDetailsService', ['$resource', function($resource){
  var self = this;
  self.delivery = [];


  self.getOne = function(id){
  self.delivery = $resource('http://localhost:3000/deliveries/' + id).get();
  console.log(self.delivery);
  };
}]);
