'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
 angular
 .module('openFDA', [
    'ui.router',
    'snap',
    'ngAnimate'
    ])
   .config(function($stateProvider, $urlRouterProvider) {

     $urlRouterProvider.when('/dashboard', '/dashboard/overview');
     $urlRouterProvider.otherwise('/login');

     $stateProvider

       .state('home', {
         url: '/',
         templateUrl: '/templates/home.ejs'
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
         controller: 'LoginCtrl'
       })
       .state('dashboard', {
         url: '/dashboard',
         parent: 'base',
         templateUrl: '/templates/dashboard.ejs',
         controller: 'DashboardCtrl'
       })
       .state('overview', {
         url: '/overview',
         parent: 'dashboard',
         templateUrl: '/templates/dashboard/overview.ejs'
       })
       .state('reports', {
         url: '/reports',
         parent: 'dashboard',
         templateUrl: '/templates/dashboard/reports.ejs'
       });


   });
