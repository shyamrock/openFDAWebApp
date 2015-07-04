
/**
 * Created by vml on 7/4/2015.
 */
angular.module('openFDA').controller('DrugLabelingController', function( $rootScope,$scope,$http,$location, openFDASearchTrendsService, $location, $filter,NgTableParams, $sce) {
  init();



  function init(){
    $scope.loading = true;
    openFDASearchTrendsService.getDrugLabels().then(function(data){
      $scope.loading = false;
      $scope.drugLabelingResult=data.data.results;
      $scope.meta=data.data.meta;
      var dataa= data.data.results;
      $scope.drugLabel=dataa;
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
  $scope.itemDetail = function(items) {
    var item=items;
    $scope.drugLabelDetails="";

    //var url='https://api.fda.gov/drug/label.json?search=set_id:"'+item+'"'
    var url="query/drugLabelDetailed";
    $http({
      url: url, method: "GET",
      params: {item: item}
    }).
      success(function (data, status, headers, config) {
        $scope.drugLabelDetails = data.results;
        $rootScope.details="";
        $rootScope.details = $scope.drugLabelDetails;
        $location.path('/dashboard/drugLabelDetailed');
      });



  }



});
