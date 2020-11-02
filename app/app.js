var myNinjaApp = angular.module("myNinjaApp", []);

myNinjaApp.controller("NinjaController", ["$scope", function ($scope) {
    $scope.message = "hey y'all";
    $scope.ninjas = [
        { name: "Yoshi", belt: "Green", rate: 50, available: true, thumb: "content/img/yoshi.png" },
        { name: "Crystal", belt: "Red", rate: 30, available: true, thumb: "content/img/crystal.png" },
        { name: "Ryu", belt: "Orange", rate: 10, available: false, thumb: "content/img/ryu.png" },
        { name: "Shaun", belt: "Black", rate: 1000, available: true, thumb: "content/img/shaun.png" }
    ];

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
    }

}]);