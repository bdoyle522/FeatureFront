'use strict';
var app = angular.module('featureFront');


app.controller('homeCtrl', function($scope, loginService, $state){
  $scope.page = 'Admin Login';
  $scope.login = function(admin){
    loginService.login(admin).then(function(res, err){
      console.log('here');
      if(res.data.type === "Admin"){
        $state.go('adminPage');
      }
    })
  }
})
