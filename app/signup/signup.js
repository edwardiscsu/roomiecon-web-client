/**
 * Created by Muna on 10/20/2015.
 */
'use strict';

angular.module('myApp.signup', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/signup', {
            templateUrl: 'signup/signup.html',
            controller: 'SignupCtrl'
        });
    }])

    .controller('SignupCtrl',
    function($scope, $http, $location) {
        $scope.username = "";
        $scope.email = "";
        $scope.password = "";
        $scope.zipCode="";

        $scope.signup = function() {
            var url = api.url + "/auth/signup";
            var data = JSON.stringify({
                username: $scope.username,
                email: $scope.email,
                password: $scope.password,
                zipCode: $scope.zipCode
            });

            toggleLoader();
            $http({
                method: 'POST',
                url: url,
                headers: { 'Content-Type': 'application/json' },
                data: data
            }).then(
                function successCallback(response) {
                    localStorage.setItem('email', response.data.email);

                    $location.path('/search');
                    toggleLoader();
                },
                function errorCallback(response) {
                    toggleLoader();
                    alert("error connecting to server!");
                }
            );
        }

        function toggleLoader() {
            $('#login-loader-line').toggleClass('active');
            $('#login-loader-circle').toggleClass('active');

            //setTimeout(function() { $('#login-loader-line').toggleClass('active'); }, 3000);
            //setTimeout(function() { $('#login-loader-circle').toggleClass('active'); }, 3000);
        }
    }
);
