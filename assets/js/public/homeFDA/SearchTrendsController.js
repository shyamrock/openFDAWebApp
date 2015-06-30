angular.module('openFDA').controller('SearchTrendsController', function($scope, openFDASearchTrendsService, $location, $filter,NgTableParams, $sce) {
  init();


  function init(){

    openFDASearchTrendsService.getFeedbackPaged().then(function(data){
      $scope.searchTrendsResult=data;


      var dataa= $scope.searchTrendsResult.data;
      $scope.trends=dataa;
      $scope.tableParams = new NgTableParams({
        page: 1,            // show first page
        count: 10           // count per page
      }, {
        total: dataa.length, // length of data
        getData: function($defer, params) {
          var orderedData = params.sorting ?
            $filter('orderBy')(dataa, params.orderBy()) :
            dataa;
          orderedData = params.filter ?
            $filter('filter')(orderedData, params.filter()) :
            orderedData;


          $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
      });

    });

  }

});
