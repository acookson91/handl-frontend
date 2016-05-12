handlApp.controller('userProfileController', ['userProfileService', '$scope',
function(userProfileService, $scope){


  $scope.userDeliveries = [];
  $scope.handlrDeliveries = [];

  $scope.show = function(){
    userProfileService.profile()
      .then(function(response){
        console.log(response.data[0]);
        console.log(response.data[1]);
        $scope.userDeliveries = response.data[0];
        $scope.handlrDeliveries = response.data[1];
      });
  };

    $scope.show();

}]);
