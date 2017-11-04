var app = angular.module('app', ['ngDialog']);

app.controller("myCtrl", function($scope, $http, ngDialog) {});

//Директива панелі меню
app.directive("headerBlock", function() {
    return {
        replace: true,
        templateUrl: "template/header.html",
        controller: function($scope, $http) {
            $scope.home = true;
            $scope.video = false;
            $scope.contact = false;
            $scope.simulators = false;
            $scope.school = false;
            $scope.userBlock = false;

            $scope.menuNavBtn = [{
                name: "Головна",
                action: function() {
                    $scope.home = true;
                    $scope.video = false;
                    $scope.contact = false;
                    $scope.simulators = false;
                    $scope.school = false;
                    $scope.userBlock = false;
                }
            }, {
                name: "Відео",
                action: function() {
                    $scope.home = false;
                    $scope.video = true;
                    $scope.contact = false;
                    $scope.simulators = false;
                    $scope.school = false;
                    $scope.userBlock = false;
                }
            }, {
                name: "Контакти",
                action: function() {
                    $scope.home = false;
                    $scope.video = false;
                    $scope.contact = true;
                    $scope.simulators = false;
                    $scope.school = false;
                    $scope.userBlock = false;
                }
            }, {
                name: "Тренажери",
                action: function() {
                    $scope.home = false;
                    $scope.video = false;
                    $scope.contact = false;
                    $scope.simulators = true;
                    $scope.school = false;
                    $scope.userBlock = false;
                }
            }, {
                name: "Школа",
                action: function() {
                    $scope.home = false;
                    $scope.video = false;
                    $scope.contact = false;
                    $scope.simulators = false;
                    $scope.school = true;
                    $scope.userBlock = false;
                }
            }, {
                name: "Школа",
                action: function() {
                    $scope.home = false;
                    $scope.video = false;
                    $scope.contact = false;
                    $scope.simulators = false;
                    $scope.school = false;
                    $scope.userBlock = true;
                }
            }]
        }
    }
});
