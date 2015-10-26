
'use strict';

angular.module('myApp.passwordreset', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/passwordreset', {
        templateUrl: 'passwordreset/passwordreset.html',
        controller: 'PasswordResetCtrl'
    });
}])

.controller('PasswordResetCtrl',
    function($scope) {
        $scope.testContent = "click me!";
        $scope.email = "";

        $scope.test = function() {
            $scope.testContent = "Help! I've been clicked!";
        }

        $scope.test2 = function(newStuff) {
            $scope.testContent = newStuff;
        }

        $scope.resetPassword = function() {
            $scope.testContent = $scope.email;
            //do your logic
        }
    }
);