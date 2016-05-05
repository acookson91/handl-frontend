describe('deliveryUpdateService', function(){
  beforeEach(module('handlApp'));

  var deliveryUpdateService, httpBackend;
  var id = 1;
  var assigned = { status: 'assigned' };

  beforeEach(inject(function($httpBackend, _deliveryUpdateService_){
    httpBackend = $httpBackend;
    deliveryUpdateService = _deliveryUpdateService_;
  }));

  it('changes delivery status from pending to assigned', function(){
    httpBackend.expectPUT('http://localhost:3000/deliveries/' + id).respond(200);
    deliveryUpdateService.update(id, assigned).success(function(){
      success = true;
    });
    httpBackend.flush();
    expect(success).toEqual(true);
  });
});
