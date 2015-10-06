/**
 * Created by Edward on 10/5/2015.
 */

'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
   $routeProvider.when('/login', {
        templateUrl: 'login/login.html',
        controller: 'LoginCtrl'
    });
}])

.controller('LoginCtrl',
    function($scope) {
        $scope.login = function() {
            $('#login-loader').toggleClass('active');
            setTimeout(function() { $('#login-loader').toggleClass('active'); }, 5000);
        }
    }
);
