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
});
