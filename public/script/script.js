var app = angular.module('app', ['ngDialog']);

app.controller("myCtrl", function ($scope, $http, ngDialog) {});

//Директива панелі меню
app.directive("headerBlock", function() {
    return {
        replace: true,
        templateUrl: "template/header.html",
        controller: function($scope, $http) {
            
        }
    }
});
