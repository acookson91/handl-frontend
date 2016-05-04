describe('deliveryFactory', function(){
  beforeEach(module('handlApp'));
  var httpBackend, deliveryFactory;
  var deliveryData = {cName: "Sachin", cAdd1: "123Commercial St"}


  beforeEach(inject(function($httpBackend, _deliveryFactory_){
    httpBackend = $httpBackend;
    deliveryFactory = _deliveryFactory_;
  }));

  it('fetches data from our api', function(){
    httpBackend.expectGET('http://localhost:3000/deliveries').respond(deliveryData);
    deliveryFactory.getAll();
    // httpBackend.flush();
    expect(deliveryFactory.deliveryDetails).toEqual({deliveryData});
  });
});
