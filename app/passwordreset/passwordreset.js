
'use strict';

angular.module('myApp.passwordreset', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/passwordreset', {
        templateUrl: 'passwordreset/passwordreset.html',
        controller: 'PasswordResetCtrl'
    });
}])

.controller('PasswordResetCtrl', [function() {

}]);