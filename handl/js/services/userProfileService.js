handlApp.service('userProfileService', ['$http', function($http){
  this.profile = function(){
    return $http.get('http://localhost:3000/users/:id');
  };
}]);
