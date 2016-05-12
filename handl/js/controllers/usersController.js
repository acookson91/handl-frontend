handlApp.controller('usersController', ['ipCookie','$scope', '$state', '$auth',
  function(ipCookie, $scope, $state, $auth){

    $scope.handleRegBtnClick = function() {
      $scope.registrationForm.handlr_status = false;
      $auth.submitRegistration($scope.registrationForm)
        .then(function() {
          $auth.submitLogin({
            name: $scope.registrationForm.name,
            email: $scope.registrationForm.email,
            password: $scope.registrationForm.password,
            handlr_status: $scope.registrationForm.handlr_status
          });
        });

    };
}]);
