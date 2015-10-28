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
    function($scope, $http, $location) {
        $scope.email = "";
        $scope.password = "";

        $scope.login = function() {
            var url = api.url + "/auth/login";
            var data = JSON.stringify({
                email: $scope.email,
                password: $scope.password
            });

            toggleLoader();
            $http({
                method: 'POST',
                url: url,
                headers: { 'Content-Type': 'application/json' },
                data: data
            }).then(
                function successCallback(response) {
                    $location.path('/dashboard');
                    toggleLoader();
                },
                function errorCallback(response) {
                    toggleLoader();
                    alert("error connecting to server!");
                }
            );
        }

        $scope.signUp = function() {

        }

        function toggleLoader() {
            $('#login-loader-line').toggleClass('active');
            $('#login-loader-circle').toggleClass('active');

            //setTimeout(function() { $('#login-loader-line').toggleClass('active'); }, 3000);
            //setTimeout(function() { $('#login-loader-circle').toggleClass('active'); }, 3000);
        }
    }
);
