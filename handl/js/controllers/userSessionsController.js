handlApp.controller('userSessionsController', ['$scope', function($scope, $state, $auth) {

  $scope.handleLoginBtnClick = function() {
   $auth.submitLogin($scope.loginForm)
     .then(function(resp) {
       console.log('yays');
     })
     .catch(function(resp) {
      console.log('nope.');
     });
  };

  $scope.handleSignOutBtnClick = function() {
   $auth.signOut()
     .then(function(resp) {
      console.log('hooray!');
     })
     .catch(function(resp) {
      console.log('nope.');
     });
    $state.go('home');
  };

}]);
