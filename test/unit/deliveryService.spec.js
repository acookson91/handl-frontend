describe('deliveryService', function(){
  beforeEach(module('handlApp'));

  var deliveryService, httpBackend;
  var delivery = {
      sender_name: 'name',
      pickup_line1: '53 street',
      pickup_line2: 'LDN',
      }
  ;
  var id = 1;

  beforeEach(inject(function($httpBackend, _deliveryService_){
    deliveryService = _deliveryService_;
    httpBackend = $httpBackend;
  }));

  it('shows individual delivery requests', function(){
    httpBackend.expectGET('http://localhost:3000/deliveries/' + id).respond(delivery);
    deliveryService.find(id)
    .then(function(response){
      expect(response.data).toEqual(delivery);
    });

    httpBackend.flush();
  });
});
