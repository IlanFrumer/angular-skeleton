(function(){


  var app = angular.module('app', ['ngRoute','ngAnimate']);


  app.config(['$routeProvider','$locationProvider' , 
    function($routeProvider, $locationProvider){

      $routeProvider
        .when('/',{
          template: "<h1>Home</h1>"
        })
        .when('/about',{
          template: "<h1>About</h1>"
        })

  }]);



}());