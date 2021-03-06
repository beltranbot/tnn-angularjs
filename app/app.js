var myNinjaApp = angular.module("myNinjaApp", ["ngRoute", "ngAnimate"]);

myNinjaApp.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);

    $routeProvider
        .when("/home", {
            templateUrl: "views/home.html",
            controller: "NinjaController"
        })
        .when("/contact", {
            templateUrl: "views/contact.html",
            controller: "ContactController"
        })
        .when("/directory", {
            templateUrl: "views/directory.html",
            controller: "NinjaController"
        })
        .when("/contact-success", {
            templateUrl: "views/contact-success.html"
        })
        .otherwise({
            redirectTo: "/home"
        })
}]);

myNinjaApp.directive("randomNinja", [function () {
    return {
        restrict: "E",
        transclude: true,
        replace: true,
        scope: {
            ninjas: "=",
            title: "=",
            message: "="
        },
        templateUrl: "views/random.html",
        controller: "RandomNinjaController"
    }
}]);

myNinjaApp.controller("NinjaController", ["$scope", "$http", function ($scope, $http) {

    $http.get("data/ninjas.json").then(function (data) {
        $scope.ninjas = data.data;
    }, function (err) {
        console.log(err);
    });

    $scope.removeNinja = function (ninja) {
        var removedNinja = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removedNinja, 1);
    };

    $scope.addNinja = function () {
        $scope.ninjas.push({
            name: $scope.newNinja.name,
            belt: $scope.newNinja.belt,
            rate: parseInt($scope.newNinja.rate),
            available: true
        });
        $scope.newNinja = {
            name: "",
            belt: "",
            rate: ""
        };
    };

    $scope.removeAll = function () {
        $scope.ninjas = [];
    };
}]);

myNinjaApp.controller("RandomNinjaController", ["$scope", function($scope) {
    $scope.random = Math.floor(Math.random() * 4);
}]);

myNinjaApp.controller("ContactController", ["$scope", "$location", function ($scope, $location) {
    $scope.sendMessage = function () {
        $location.path("/contact-success");
    };
}]);