handlApp.controller('deliveriesController', ["$scope", "$location", "deliveriesService",
function($scope, $location, deliveriesService){

  $scope.index = function(){
    deliveriesService.all().then(function(response) {
      $scope.deliveries = response.data;
    });
  };

  $scope.index();
}]);
