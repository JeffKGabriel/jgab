var app = angular.module('jgab', ['ngCookies','ngRoute'] );


app.controller('cardsController', function($scope , $cookies, $http, $rootScope, $route) {


  $scope.var1 = "chocolate";

  $scope.projectList = [];

  var bluffApp = {
    name: "bluffApp",
    url: "123"
  };
  var arson = {
    name: "arson",
    url: "123"
  };
  var yoked = {
    name: "yoked",
    url: "123"
  };
  var twitchFire = {
    name: "twitchFire",
    url: "123"
  };
  var flippit = {
    name: "flippit",
    url: "123"
  };

  $scope.projectList.push(bluffApp);
  $scope.projectList.push(arson);
  $scope.projectList.push(yoked);
  $scope.projectList.push(twitchFire);
  $scope.projectList.push(flippit);


});
