describe('mainHandlr', function(){
  beforeEach(module('handlApp'));

  var scope, ctrl;

  beforeEach(inject(function($controller, $rootScope){
    scope = $rootScope.$new();
    ctrl = $controller('mainHandlr', {$scope: scope});
  }));

  it('adds to to the deliveries array', function(){
    scope.addDeliveryDetails({Name: "Sachin"});
    expect(scope.deliveries[0]).toEqual({Name: "Sachin"});
  });

});
