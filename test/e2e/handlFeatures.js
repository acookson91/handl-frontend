describe('handl',function(){
  var list = $$('#delivery-link');

  function newDelivery(){
    $('#new-delivery').click();
    $("#collector-name-input").sendKeys("Sachin");
    $("#collection-address1").sendKeys("50 Commercial Street");
    $("#collection-address2").sendKeys("London");
    $("#collection-postcode").sendKeys("E1 7jb");
    $("#recipient-name-input").sendKeys("Barry");
    $("#recipient-address1").sendKeys("51 Commercial Street");
    $("#recipient-address2").sendKeys("London");
    $("#recipient-postcode").sendKeys("E1 7jb");
    $("#submit").click();
  }

  beforeEach(function(){
    browser.get('/');
    $('#sign-in').click();
    $('#email').sendKeys('bob@bob.com');
    $('#password').sendKeys('password123');
    $('#log-in').click();
  });

  afterEach(function(){
    $('#sign-out').click();
  });

  it('displays a list of delivery requests', function(){
    expect(list.first().getText()).toContain('James');
  });

  it('has a confirm delivery page that displays addresses', function(){
    newDelivery();
    expect($("#confirmation").isPresent()).toBeTruthy();
  });


  it('displays full information for selected delivery request', function(){
    list.first().click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/deliveries/1');
  });

  it('has a confirmation message page that displays when successful post to rails api', function(){
    newDelivery();
    $("#confirm").click();
    expect($("#successMessage").isPresent()).toBeTruthy();
  });

  it('returns to list of all deliveries', function(){
    list.first().click();
    $('#return-delivery-list').click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/deliveries/');
  });

  it('changes delivery status on button click', function(){
    list.first().click();
    $('#select-delivery').click();
    $('#collect-delivery').click();
    expect($('[ng-show=delivered]').isDisplayed()).toBeTruthy();
    expect($('[ng-show=select]').isDisplayed()).toBeFalsy();
  });
});
