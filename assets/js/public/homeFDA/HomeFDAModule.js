var app=angular.module('openFDA', ['ui.router','snap','ngAnimate']);//'angularChart'

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('/dashboard', '/dashboard/overview');
  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('home', {
      url: '/',
      templateUrl: '/templates/home.ejs',
      controller: 'HomeFDAController'

    })

    .state('home1', {
      url: '/home1',
      templateUrl: '../views/homepage.ejs'
    })

    .state('login1', {
      url: '/login1',
      templateUrl: '/templates/login.ejs'
    })
    .state('base', {
      abstract: true,
      url: '',
      templateUrl: '/templates/base.ejs'
    })
    .state('login', {
      url: '/login',
      parent: 'base',
      templateUrl: '/templates/login.ejs',
      controller: 'HomeFDAController'
    })
    .state('dashboard', {
      url: '/dashboard',
      parent: 'base',
      templateUrl: '/templates/dashboard.ejs',
      controller: 'HomeFDAController'
    })
    .state('overview', {
      url: '/overview',
      parent: 'dashboard',
      templateUrl: '/templates/dashboard/overview.ejs',
      controller: 'HomeFDAController'
    })
    .state('reports', {
      url: '/reports',
      parent: 'dashboard',
      templateUrl: '/templates/dashboard/reports.ejs',
      controller: 'HomeFDAController'
    });


});
