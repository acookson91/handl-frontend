describe('handl', function(){
  xit('has sign in button', function(){
    browser.get('/');
    expect($('#sign-in').isPresent()).toBeTruthy();
  });

  it('signs up with valid credentials', function(){
    browser.get('/');
    $('#sign-up').click();
    $('#email').sendKeys('bob@bob.com');
    $('#password').sendKeys('somepassword');
    $('#password_confirmation').sendKeys('somepassword');
    $('#register').click();

    expect($('#sign-out').isPresent()).toBeTruthy();
  });

});
