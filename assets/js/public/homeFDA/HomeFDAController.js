


angular.module('openFDA').controller('HomeFDAController', function($scope,$http, $location, $filter, uiGridConstants, NgTableParams, $sce){

  //cerosal
  $scope.rowCollection="";
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'images/img_01.png'

    },
    {
      image: 'images/img_02.png'
    },
    {
      image: 'images/img_03.png'
    },
    {
      image: 'images/img_04.png'
    },
    {
      image: 'images/img_05.png'
    },
    {
      image: 'images/img_06.png'
    },
    {
      image: 'images/img_07.png'
    },
    {
      image: 'images/img_08.png'
    }
  ];


  /*test data*/
 /* var dataa = [
    {name: "Enos", age: 34}];


  $scope.tableParams = new NgTableParams({
    page: 1,            // show first page
    count: 10           // count per page
  }, {
    total: dataa.length, // length of data
    getData: function($defer, params) {
      $defer.resolve(dataa.slice((params.page() - 1) * params.count(), params.page() * params.count()));
    }
  });*/
  //end


  $scope.meta="";
  $scope.foods="";
  $scope.error="";
  $scope.total="";
  $scope.skip=0;
  $scope.currentPage=0;
  $scope.selectType="food";
  $scope.next=function(){

    $scope.currentPage=$scope.currentPage+1
    $scope.skipp=$scope.currentPage*10
    this.searchText($scope.skipp,$scope.currentPage)

  }
  $scope.previous=function(){


    $scope.currentPage=$scope.currentPage-1
    $scope.skipp=$scope.currentPage*10
    this.searchText($scope.skipp,$scope.currentPage)

  }
/*
  $scope.submit = function() {


        var selectType=$scope.selectType;//food,drug,etc
        var searchItem=$scope.searchItem; //"ice cream";
        var limit=10;
        var skip=skip+10;

 var url= 'https://api.fda.gov/'+selectType+'/enforcement.json?search=reason_for_recall:"'+searchItem+'"&limit='+limit+'&skip='+skip;
        $http({
          url: url, method: "GET"
        }).
          success(function(data, status, headers, config) {
            $scope.foods = data.results;
            $scope.total = data.meta;




          });



       // this.searchText()
        return false;
      }

*/

$scope.message ="openFDA Data Set View";





  $scope.searchText = function(skip,current) {
    $scope.foods="";
    $scope.meta="";
    $scope.error="notfound";
    $scope.currentPage=current
    var selectType=$scope.selectType;//food,drug,device
    var searchItem=$scope.searchItem; //"ice cream, spinach";
    var skip=skip;
    var url="query/search";
    $http({
      url: url, method: "GET",
      params: {selectType: selectType,searchItem:searchItem, searchLimit:20,skip:skip}
    }).
      success(function(data, status, headers, config) {
        $scope.error="found";
        $scope.meta=data.meta;
        $scope.dataset = data.results;
        $scope.error= data.error;
        $scope.gridOptions.data = data.results;
        $scope.rowCollection=data.results;

        var dataa=data.results;
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

      }).
      error(function(data, status, headers, config) {
        alert("No results matching this term");
        $scope.error= data;
        $scope.foods="";

      });

  }
  $scope.itemsByPage=10;


  $scope.columns = [{ field: 'recall_number' }, { field: 'report_date' }, { field: 'reason_for_recall' }, { field: 'city' },{ field: 'state' }, { field: 'classification' }];
  $scope.gridOptions = {
    enableColumnResizing: true,
    enableSorting: true,
    columnDefs: $scope.columns,
    onRegisterApi: function(gridApi) {
      $scope.gridApi = gridApi;
    }
  };







});
