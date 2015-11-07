'use strict';

// Server API
var api = {
  url: "http://localhost:3000/api"
};

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.login',
  'myApp.dashboard',
  'myApp.passwordreset',
  'myApp.signup',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/login'});
}]);
