const app = angular.module('app', ['ngDialog']);

// Забираєм %2F та # з url сайту
// app.config(['$locationProvider', function ($locationProvider) {
//     $locationProvider.hashPrefix('');
//     $locationProvider.html5Mode(true);
// }]);
//
// app.config(function ($routeProvider) {
//     $routeProvider
//         .when('/', {
//             templateUrl: '/public/index.html'
//         })
//         .otherwise({
//             redirectTo: '/'
//         });
//
// });

//Котроллер
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
            $scope.details = false;
            $scope.login = false;

            $scope.menuNavBtn = [{
                name: "Головна",
                action: function() {
                    $scope.home = true;
                    $scope.video = false;
                    $scope.contact = false;
                    $scope.simulators = false;
                    $scope.details = false;
                    $scope.login = false;
                }
            }, {
                name: "Відео",
                action: function() {
                    $scope.home = false;
                    $scope.video = true;
                    $scope.contact = false;
                    $scope.simulators = false;
                    $scope.details = false;
                    $scope.login = false;
                }
            }, {
                name: "Контакти",
                action: function() {
                    $scope.home = false;
                    $scope.video = false;
                    $scope.contact = true;
                    $scope.simulators = false;
                    $scope.details = false;
                    $scope.login = false;
                }
            }, {
                name: "Тренажери",
                action: function() {
                    $scope.home = false;
                    $scope.video = false;
                    $scope.contact = false;
                    $scope.simulators = true;
                    $scope.details = false;
                    $scope.login = false;
                }
            }];

            $scope.userEntrBlock = function() {
                $scope.home = false;
                $scope.video = false;
                $scope.contact = false;
                $scope.simulators = false;
                $scope.details = false;
                $scope.login = true;
            }


        }
    }
});

//деректива тіла сайту
app.directive("bodyBlock", function() {
    return {
        replace: true,
        templateUrl: "template/body.html",
        controller: function($scope, $http, ngDialog) {}
    }
});

//Директива головної сторінки
app.directive("mainBlock", function() {
    return {
        replace: true,
        templateUrl: "template/mainPage.html",
        controller: function($scope, $http, ngDialog) {}
    }
});
//Директива сторінки з відео
app.directive("videoBlock", function() {
    return {
        replace: true,
        templateUrl: "template/videoPage.html",
        controller: function($scope, $http, ngDialog) {}
    }
});
//Директива для сторінки контакти
app.directive("contactBlock", function() {
    return {
        replace: true,
        templateUrl: "template/contactPage.html",
        controller: function($scope, $http, ngDialog) {}
    }
});

//Директива для сторінки тренажерів
app.directive("catalogBlock", function() {
    return {
        replace: true,
        templateUrl: "template/simulatorsPage.html",
        controller: function($scope, $http, ngDialog) {
            $scope.showDetailsPage = function() {
                $scope.home = false;
                $scope.video = false;
                $scope.contact = false;
                $scope.simulators = false;
                $scope.userBlock = false;
                $scope.details = true;
            }
        }
    }
});
//Директива для опису тренажерів
app.directive("detailsBlock", function() {
    return {
        replace: true,
        templateUrl: "template/detailPage.html",
        controller: function($scope, $http, ngDialog) {}
    }
});
//Директива логіну і регестрації
app.directive("loginBlock", function () {
    return {
        replace: true,
        templateUrl: "template/login.html",
        controller: function ($scope, $http, ngDialog) {
            $scope.loginBlock = false;
            $scope.registerBlock = false;
            $scope.usersPageBlock = true

            $scope.changeToRegister = function () {
                $scope.loginBlock = false;
                $scope.registerBlock = true;
            }
        }
    }
});

//Директива профіля користувача
app.directive("userBlock", function () {
    return {
        replace: true,
        templateUrl: "template/usersPage.html",
        controller: function ($scope, $http, ngDialog) {
            //Редагувати профіль користувача
            $scope.cngUsersPage = function(fullName, login, mail, birth) {
                ngDialog.open({
                    template: '/template/cngUsersPage.html',
                    scope: $scope,
                    controller: function($scope) {
                        
                    }
                });
            }
        }
    }
});
//Директива для слайдера
app.directive("sliderBlock", function() {
    return {
        replace: true,
        templateUrl: "template/slider.html",
        controller: function($scope, $http, ngDialog) {
            var slideNow = 1;
            var translateWidth = 0;
            var slideCount = $('#slidewrapper').children().length;

            function nextSlide() {
                if (slideNow == 2) {
                    $("#slidewrapper li:nth-child(3)").css({
                        "display": "inline"
                    })
                } else if (slideNow == 3) {
                    $("#slidewrapper li:nth-child(4)").css({
                        "display": "inline"
                    })
                }
                if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
                    $("#slidewrapper").css('transform', 'translate(0, 0)');
                    slideNow = 1;
                } else {
                    translateWidth = -$('#viewport').width() * (slideNow);
                    $('#slidewrapper').css({
                        'transform': 'translate(' + translateWidth + 'px, 0)',
                        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                        '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                    });
                    slideNow++;
                }
            }

            var slideInterval = 2000;

            // $(document).ready(function() {
            //     var switchInterval = setInterval(nextSlide, slideInterval);
            //
            //     $('#viewport').hover(function() {
            //         clearInterval(switchInterval);
            //     }, function() {
            //         switchInterval = setInterval(nextSlide, slideInterval);
            //     });
            // });

            function prevSlide() {
                if (slideNow == 1) {
                    $("#slidewrapper li:nth-child(4)").css({
                        "display": "inline"
                    })
                } else if (slideNow == 4) {
                    $("#slidewrapper li:nth-child(3)").css({
                        "display": "inline"
                    })
                }

                if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
                    translateWidth = -$('#viewport').width() * (slideCount - 1);
                    $('#slidewrapper').css({
                        'transform': 'translate(' + translateWidth + 'px, 0)',
                        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                        '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                    });
                    slideNow = slideCount;
                } else {
                    translateWidth = -$('#viewport').width() * (slideNow - 2);
                    $('#slidewrapper').css({
                        'transform': 'translate(' + translateWidth + 'px, 0)',
                        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                        '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                    });
                    slideNow--;
                }
            }

            $('#next-btn').click(function() {
                nextSlide();
            });

            $('#prev-btn').click(function() {
                prevSlide();
            });

            var navBtnId = 0;

            $('.slide-nav-btn').click(function() {
                navBtnId = $(this).index();
                if (this) {
                    $("#slidewrapper li:nth-child(3)").css({
                        "display": "inline"
                    })
                    $("#slidewrapper li:nth-child(4)").css({
                        "display": "inline"
                    })
                }

                if (navBtnId + 1 != slideNow) {
                    translateWidth = -$('#viewport').width() * (navBtnId);
                    $('#slidewrapper').css({
                        'transform': 'translate(' + translateWidth + 'px, 0)',
                        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                        '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                    });
                    slideNow = navBtnId + 1;
                }
            });
        }
    }
});

//Директива футера
app.directive("footerBlock", function() {
    return {
        replace: true,
        templateUrl: "template/footer.html",
        controller: function($scope, $http, ngDialog) {}
    }
});
