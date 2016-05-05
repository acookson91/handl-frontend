describe('newDeliveryService', function(){
  beforeEach(module('handlApp'));

  var newDeliveryService, httpBackend;
  var deliveryData = {sender_name: "Simon"}

  beforeEach(inject(function($httpBackend, _newDeliveryService_) {
    httpBackend = $httpBackend;
    newDeliveryService = _newDeliveryService_;
  }));

  it("sucessfully responds with string", function() {
    return httpBackend.expectPOST('http://localhost:3000/deliveries.json').respond(200);
    var success = false;
    newDeliveryService.create(deliveryData).success(function() {
      success = true;
    });
    httpBackend.flush();
    expect(success).toEqual(true);
  });

})
