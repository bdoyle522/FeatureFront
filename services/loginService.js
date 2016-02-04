var app = angular.module('featureFront');

app.service('loginService', function($http, $q, loginUrl){

  this.login = function(user){
    var auth = user.username.concat(':',user.password);
    var encodedAuth = btoa(auth);
    return $http({
      method: 'POST',
      url: loginUrl.url,
      headers: {
        Authorization: encodedAuth
      }
    });
  }
})
