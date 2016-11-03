var app;
(function (app) {
    angular.module('app', ['ngMaterial', 'ngResource', 'ui.router']).config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: '/ngApp/views/home.html',
            controller: app.Controllers.MyController,
            controllerAs: 'controller'
        })
            .state('menu', {
            url: '/menu',
            templateUrl: '/ngApp/views/menu.html',
            controller: app.Controllers.MenuController,
            controllerAs: 'controller'
        });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    });
})(app || (app = {}));
