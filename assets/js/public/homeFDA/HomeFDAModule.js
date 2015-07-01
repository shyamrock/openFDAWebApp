var app=angular.module('openFDA', ['ui.bootstrap','ui.router','snap','ngAnimate', 'ngTable','ngTableExport','highcharts-ng','ui.grid','ui.grid.edit']);//'angularChart'

//,'highcharts-ng'
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
      controller: 'ChartController'
    })
    .state('trends', {
      url: '/trends',
      parent: 'dashboard',
      templateUrl: '/templates/trends/trends.ejs',
      controller: 'SearchTrendsController'
    })
    .state('enforcementData', {
      url: '/enforcementData',
      parent: 'dashboard',
      templateUrl: '/templates/dashboard/enforcementData.ejs',
      controller: 'HomeFDAController'
    });

});
