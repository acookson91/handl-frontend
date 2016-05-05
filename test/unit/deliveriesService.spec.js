describe('deliveriesService', function(){
  beforeEach(module('handlApp'));

  var deliveriesService, $httpBackend;
  var deliveryDetails = [
      {sender_name: 'name', pickup_line1: '53 street', pickup_line2: 'LDN'}
  ];

  beforeEach(inject(function(_$httpBackend_, _deliveriesService_){
    deliveriesService = _deliveriesService_;
    $httpBackend = _$httpBackend_;
  }));

  it('gets a list of deliveries', function(){
    $httpBackend.expectGET('http://localhost:3000/deliveries').respond(deliveryDetails);
      deliveriesService.all()
      .then(function(response){
        expect(response.data).toEqual(deliveryDetails);
      });
    $httpBackend.flush();
  });
});
