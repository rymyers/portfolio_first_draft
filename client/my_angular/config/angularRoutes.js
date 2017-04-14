var app = angular.module('app', ['ngRoute', 'ngMessages'])

app.config(function($routeProvider, $httpProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'partials/home.ejs',
        })
        .when('/tech',{
            templateUrl: 'partials/tech.ejs',
        })
        .when('/projects',{
            templateUrl: 'partials/projects.ejs',
        })
        .otherwise({
            redirectTo: '/'
        })
})
