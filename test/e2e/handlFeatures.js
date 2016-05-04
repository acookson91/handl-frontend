describe('handl',function(){
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
});
