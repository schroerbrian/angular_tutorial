var app = angular.module("myApp", []);

app.config(function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "templates/home.html",
    controller: "HomeController"
  })
  .when("/settings", {
    templateUrl: "templates/settings.html",
    controller: "settingsController"
  })
  .otherwise({ redirectTo: "/" });
});

//function defines homeController
app.controller("HomeController", function($scope){ 

});

app.controller("settingsController", function($scope){
  $scope.name = "Ari"
});