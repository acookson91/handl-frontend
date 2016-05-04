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
    expect($("#confirmation").getText()).toEqual("Please confirm your delivery");
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
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/deliveries/1');
    expect()
  });
});
