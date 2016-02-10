'use strict';
var app = angular.module('featureFront', ['ui.router']);

app.constant('loginUrl',{
  url: 'http://integration-auth.bypassmobile.com/auth.json'
});
app.constant('featuresUrl', {
  url: 'http://104.131.74.43:4000/features'
});

app.config(function($stateProvider, $urlRouterProvider){


  $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'home/homeTmpl.html',
      controller: 'homeCtrl'
    })
    .state('adminPage', {
      url: '/admin',
      templateUrl: 'admin/adminTmpl.html',
      controller: 'adminCtrl'
    })

  $urlRouterProvider

    .otherwise('/');

});
