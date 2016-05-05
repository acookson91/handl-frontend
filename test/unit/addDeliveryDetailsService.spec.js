describe('addDeliveryService', function(){
  beforeEach(module('handlApp'));

  var addDeliveryService, httpBackend;
  var deliveryData = {sender_name: "Simon"}

  beforeEach(inject(function($httpBackend, _addDeliveryService_) {
    httpBackend = $httpBackend;
    addDeliveryService = _addDeliveryService_;
  }));

  it("sucessfully responds with string", function() {
    return httpBackend.expectPOST('http://localhost:3000/deliveries.json').respond(200);
    var success = false;
    addDeliveryService.create(deliveryData).success(function() {
      success = true;
    });
    httpBackend.flush();
    expect(success).toEqual(true);
  });

})
