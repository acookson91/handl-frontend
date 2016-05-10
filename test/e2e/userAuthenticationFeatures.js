describe('handl', function(){
  it('user can sign up', function(){
    browser.get('/');
    $('#sign-up').click();
    $('#email').sendKeys('bob@bob.com');
    $('#password').sendKeys('somepassword');
    $('#password_confirmation').sendKeys('somepassword');
    $('#register').click();
    expect($('#sign-out').isPresent()).toBeTruthy();
  });


  it('user can sign in with valid credentials', function(){
    browser.get('/');
    $('#sign-out').click();
    $('#sign-in').click();
    $('#email').sendKeys('bob@bob.com');
    $('#password').sendKeys('somepassword');
    $('#log-in').click();
    expect($('#sign-out').isPresent()).toBeTruthy();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/deliveries');
  });

  it('user can sign out', function(){
    browser.get('/');
    $('#sign-out').click();

    expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/');
  });
});
