'use strict';

// Server API
var api = {
  url: window.location.href.indexOf("localhost") > -1
      ? "https://roomiecon-api.herokuapp.com/api"
      : "http://localhost:3000/api"
};

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.login',
  'myApp.dashboard',
  'myApp.passwordreset',
  'myApp.search',
  'myApp.signup',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/login'});
}]);
