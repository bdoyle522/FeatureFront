'use strict';
var app = angular.module('featureFront');
app.service('adminService', function($http, $q, featuresUrl){

  this.getAllTurnedOnFeatures = function(){

  }

  this.getTurnedOnFeaturesForScope = function(scope){
    return $http({
      method: 'GET',
      url: featuresUrl.url + '?scope='+scope
    })
  }

  this.updateFeature = function(value, scope, feature){
    return $http({
      method: 'PUT',
      url: featuresUrl.url + 'feature' + feature
    })
  }

  //TODO GET /features
  //* Takes a scope like "venue-1" and returns all features turned on for that scope.

  //TODO PUT /features/:feature_name
  //* Takes a value: either 0 or 1 and stores whether it is on or off
  //* Optionally takes a scope

  //TODO GET /features/:feature_name
  //* Returns true if the feature is on and off if it is not
  //* Optionally takes a scope and returns true or false

})
