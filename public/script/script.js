var app = angular.module('app', ['ngDialog']);

app.controller("myCtrl", function ($scope, $http, ngDialog) {});

//Директива панелі меню
app.directive("headerBlock", function() {
    return {
        replace: true,
        templateUrl: "template/header.html",
        controller: function($scope, $http) {
            $scope.home =true;
            $scope.video = false;
            $scope.contact = false;
            $scope.simulators = false;
            $scope.school = false;
            $scope.userBlock = false;
        }
    }
});
