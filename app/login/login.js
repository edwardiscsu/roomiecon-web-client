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
        $scope.email = "";
        $scope.password = "";

        $scope.login = function() {
            toggleLoader();
        }

        function toggleLoader() {
            $('#login-loader-line').toggleClass('active');
            setTimeout(function() { $('#login-loader-line').toggleClass('active'); }, 5000);

            $('#login-loader-circle').toggleClass('active');
            setTimeout(function() { $('#login-loader-circle').toggleClass('active'); }, 5000);
        }
    }
);
