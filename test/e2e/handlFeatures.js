describe('handl',function(){
  var list = $$('#delivery-link');

  it('has a title', function(){
    browser.get('/');
    expect(browser.getTitle()).toEqual('Handl App');
  });

  it('new link leads to new delivery form', function(){
    browser.get('/');
    $("#new-delivery").click();
    expect($("#delivery-form").isPresent()).toBeTruthy();
  });

  it('page does not have confirmation on it', function(){
    browser.get('/');
    $("#new-delivery").click();
    expect($("#confirmation").isPresent()).toBeFalsy();
  });

  it('has a confirm delivery page that displays addresses', function(){
    browser.get('/');
    $("#new-delivery").click();
    $("#collector-name-input").sendKeys("Sachin");
    $("#collection-address1").sendKeys("50 Commercial Street");
    $("#collection-address2").sendKeys("London");
    $("#collection-postcode").sendKeys("E1 7jb");
    $("#recipient-name-input").sendKeys("Barry");
    $("#recipient-address1").sendKeys("51 Commercial Street");
    $("#recipient-address2").sendKeys("London");
    $("#recipient-postcode").sendKeys("E1 7jb");
    $("#submit").click();
    expect($("#confirmation").isPresent()).toBeTruthy();
  });

  it('displays a list of delivery requests', function(){
    browser.get('/');
    $('#delivery-list').click();
    expect(list.first().getText()).toContain('James');
  });

  it('displays full information for selected delivery request', function(){
    browser.get('/');
    $('#delivery-list').click();
    list.first().click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/deliveries/1');
  });

  it('has a confirmation message page that displays when successful post to rails api', function(){
    browser.get('/');
    $("#new-delivery").click();
    $("#collector-name-input").sendKeys("Sachin");
    $("#collection-address1").sendKeys("50 Commercial Street");
    $("#collection-address2").sendKeys("London");
    $("#collection-postcode").sendKeys("E1 7jb");
    $("#recipient-name-input").sendKeys("Barry");
    $("#recipient-address1").sendKeys("51 Commercial Street");
    $("#recipient-address2").sendKeys("London");
    $("#recipient-postcode").sendKeys("E1 7jb");
    $("#submit").click();
    $("#confirm").click();
    expect($("#successMessage").isPresent()).toBeTruthy();
  });

  it('returns to list of all deliveries', function(){
    browser.get('/');
    $('#delivery-list').click();
    list.first().click();
    $('#return-delivery-list').click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/deliveries');
  });

  it('changes delivery status on button click', function(){
    browser.get('/');
    $('#delivery-list').click();
    list.first().click();
    $('#select-delivery').click();
    $('#collect-delivery').click();
    expect($('[ng-show=delivered]').isDisplayed()).toBeTruthy();
    expect($('[ng-show=select]').isDisplayed()).toBeFalsy();
  });
});
