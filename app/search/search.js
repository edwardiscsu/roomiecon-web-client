
'use strict';

angular.module('myApp.search', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/search', {
            templateUrl: 'search/search.html',
            controller: 'SearchCtrl'
        });
    }])

    .controller('SearchCtrl',
    function($scope) {
        $scope.testContent = "click me!";
        $scope.email = "";

        $scope.test = function() {
            $scope.testContent = "Help! I've been clicked!";
        }

        $scope.test2 = function(newStuff) {
            $scope.testContent = newStuff;
        }

        $scope.search = function() {
            $scope.testContent = $scope.email;
            //do your logic
        }
    }
);