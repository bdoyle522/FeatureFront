var app = angular.module('featureFront', ['ui.router']);

app.constant('loginUrl',{
  url: 'http://integration-auth.bypassmobile.com/auth.json'
});

app.config(function($stateProvider, $urlRouterProvider){


  $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'home/homeTmpl.html',
      controller: 'homeCtrl'
    });

  $urlRouterProvider

    .otherwise('/');

});
