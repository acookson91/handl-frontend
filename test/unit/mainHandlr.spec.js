<<<<<<< HEAD
// describe('mainHandlr', function(){
//   beforeEach(module('handlApp'));
//
//   var ctrl;
//
//   beforeEach(inject(function($controller){
//     ctrl = $controller('mainHandlr');
//   }));
//
//   it('shows a delivery name', function(){
//     expect(ctrl.deliveries[0].name).toEqual('bob');
//   });
// });
=======
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
>>>>>>> origin/master
