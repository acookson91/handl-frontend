describe('mainHandlr', function(){
  beforeEach(module('handlApp'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('mainHandlr');
  }));

  it('shows a delivery name', function(){
    expect(ctrl.deliveries[0].name).toEqual('bob');
  });
});
