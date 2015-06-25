'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('openFDA')
  .controller('LoginCtrl', function($scope, $location) {

    $scope.submit = function() {

      alert($scope.username);


      $location.path('/dashboard');

      return false;
    }

  });
