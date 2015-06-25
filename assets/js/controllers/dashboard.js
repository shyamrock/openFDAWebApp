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


    $scope.submit = function() {

      alert($scope.username);


      return false;
    }


    $scope.$state = $state;

  });
