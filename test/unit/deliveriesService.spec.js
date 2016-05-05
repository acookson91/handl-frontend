describe('deliveryListService', function(){
  beforeEach(module('handlApp'));

  var deliveryListService, $httpBackend;
  var deliveryDetails = [
      {sender_name: 'name', pickup_line1: '53 street', pickup_line2: 'LDN'}
  ];

  beforeEach(inject(function(_$httpBackend_, _deliveryListService_){
    deliveryListService = _deliveryListService_;
    $httpBackend = _$httpBackend_;
  }));

  it('gets a list of deliveries', function(){
    $httpBackend.expectGET('http://localhost:3000/deliveries').respond(deliveryDetails);
      deliveryListService.getAll()
      .then(function(response){
        expect(deliveryListService.deliveryDetails).toEqual(deliveryDetails);
      });
    $httpBackend.flush();
  });
});
