angular.module('openFDA').controller('SearchTrendsController', function($scope, openFDASearchTrendsService, $location, $filter) {
  init();


  function init(){

    openFDASearchTrendsService.getFeedbackPaged().then(function(data){
      $scope.searchTrendsResult=data;
      $scope.itemsByPage=10;
    });

  }

});
