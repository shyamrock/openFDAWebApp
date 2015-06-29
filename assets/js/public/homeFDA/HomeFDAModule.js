var app=angular.module('openFDA', ['ui.bootstrap','ui.router','snap','ngAnimate', 'ui.grid','ui.grid.edit']);//'angularChart'


app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('/dashboard', '/dashboard/overview');
  $urlRouterProvider.otherwise('/dashboard');

  $stateProvider
    .state('home1', {
      url: '/home1',
      templateUrl: '../views/homepage.ejs'
    })
    .state('base', {
      abstract: true,
      url: '',
      templateUrl: '/templates/base.ejs'
    })
    .state('dashboard', {
      url: '/dashboard',
      parent: 'base',
      templateUrl: '/templates/dashboard.ejs',
      controller: 'HomeFDAController'
    })
    .state('home', {
      url: '/',
      parent: 'dashboard',
      templateUrl: '/templates/dashboard/overview.ejs',
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
    }).state('trends', {
      url: '/trends',
      parent: 'dashboard',
      templateUrl: '/templates/trends/trends.ejs',
      controller: 'SearchTrendsController'
    });

});
