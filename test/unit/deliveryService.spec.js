describe('deliveryDetailsService', function(){
  beforeEach(module('handlApp'));

  var deliveryDetailsService, httpBackend;
  var delivery = {
      sender_name: 'name',
      pickup_line1: '53 street',
      pickup_line2: 'LDN',
      }
  ;
  var id = 1;

  beforeEach(inject(function($httpBackend, _deliveryDetailsService_){
    deliveryDetailsService = _deliveryDetailsService_;
    httpBackend = $httpBackend;
  }));

  it('shows individual delivery requests', function(){
    httpBackend.expectGET('http://localhost:3000/deliveries/' + id).respond(delivery);
    deliveryDetailsService.getOne(id)
    .then(function(response){
      expect(response).toEqual(delivery);
    });

    httpBackend.flush();
  });
});
