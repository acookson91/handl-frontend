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

  function newUserSignUp(){
    $('#user-sign-up').click();
    $('#name').sendKeys('bazza');
    $('#email').sendKeys('bazza@baz.com');
    $('#password').sendKeys('password123');
    $('#password-confirmation').sendKeys('password123');
    $('#register').click();
  }
  function newHandlrSignUp(){
    $('#handlr-sign-up').click();
    $('#name').sendKeys('bazza');
    $('#email').sendKeys('bazza@baz.com');
    $('#password').sendKeys('password123');
    $('#password-confirmation').sendKeys('password123');
    $('#register').click();
  }

  function userSignIn(){
    $('#sign-in').click();
    $('#email').sendKeys('bazza@baz.com');
    $('#password').sendKeys('password123');
    $('#log-in').click();
  }



  beforeAll(function(){
    browser.get('/');
    newUserSignUp();
    $('#sign-out').click();
  });

  afterEach(function(){
    $('#sign-out').click();
  });

  it('user is signed in', function(){
    browser.get('/');
    userSignIn();
    expect($("#welcome-user").isPresent()).toBeTruthy();
  });


  it('a user can create a delivery', function(){
    browser.get('/');
    userSignIn();
    newDelivery();
    expect($("#confirmation").isPresent()).toBeTruthy();
  });

  it('user profile has a list of deliveries', function(){
    browser.get('/');
    userSignIn();
    newDelivery();
    $("#confirm").click();
    $("#all-deliveries").click();
    expect(list.first().getText()).toEqual('To: Barry at: E1 7jb Status: pending');
  });
  //
  //
  // it('displays a list of delivery requests', function(){
  //
  //   expect(list.first().getText()).toContain('James');
  // });
  //
  // xit('has a confirm delivery page that displays addresses', function(){
  //   newDelivery();
  //   expect($("#confirmation").isPresent()).toBeTruthy();
  // });
  //
  //
  // xit('displays full information for selected delivery request', function(){
  //   list.first().click();
  //   expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/deliveries/1');
  // });
  //
  // xit('has a confirmation message page that displays when successful post to rails api', function(){
  //   newDelivery();
    // $("#confirm").click();
  //   expect($("#successMessage").isPresent()).toBeTruthy();
  // });
  //
  // xit('returns to list of all deliveries', function(){
  //   list.first().click();
  //   $('#return-delivery-list').click();
  //   expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/deliveries/');
  // });
  //
  // xit('changes delivery status on button click', function(){
  //   list.first().click();
  //   $('#select-delivery').click();
  //   $('#collect-delivery').click();
  //   expect($('[ng-show=delivered]').isDisplayed()).toBeTruthy();
  //   expect($('[ng-show=select]').isDisplayed()).toBeFalsy();
  // });
});
