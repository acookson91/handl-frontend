describe('newDeliveryController', function(){
  beforeEach(module('handlApp'));

  var scope, ctrl;
  var delivery = {Name: "Sachin", pickup_postcode: 'E9 7SJ', dropoff_postcode: 'E1 6LT'};

  beforeEach(inject(function($controller, $rootScope){
    scope = $rootScope.$new();
    ctrl = $controller('newDeliveryController', {$scope: scope});
  }));

  it('adds to to the deliveries array', function(){
    scope.newDelivery(delivery);
    expect(scope.deliveries[0]).toEqual(delivery);
  });

});
