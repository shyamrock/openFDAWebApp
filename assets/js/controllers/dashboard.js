'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('openFDA')
  .controller('DashboardCtrl', function($scope, $state) {

    $scope.$state = $state;

  });
