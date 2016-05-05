describe('newDeliveryController', function(){
  beforeEach(module('handlApp'));

  var scope, ctrl;

  beforeEach(inject(function($controller, $rootScope){
    scope = $rootScope.$new();
    ctrl = $controller('newDeliveryController', {$scope: scope});
  }));

  it('adds to to the deliveries array', function(){
    scope.newDelivery({Name: "Sachin"});
    expect(scope.deliveries[0]).toEqual({Name: "Sachin"});
  });

});
