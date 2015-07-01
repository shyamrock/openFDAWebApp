


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




          }).
          error(function(data, status, headers, config) {
            console.log("Error in frontend app :"+data);
          });



       // this.searchText()
        return false;
      }

*/

$scope.message ="openFDA Data Set View";





  $scope.searchText = function(skip,current) {
    $scope.foods="";
    $scope.meta="";
    $scope.error="";
    $scope.currentPage=current
    var selectType=$scope.selectType;//food,drug,etc
    var searchItem=$scope.searchItem; //"ice cream";
    var skip=skip;
    var url="query/search";
    $http({
      url: url, method: "GET",
      params: {selectType: selectType,searchItem:searchItem, searchLimit:20,skip:skip}
    }).
      success(function(data, status, headers, config) {
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
        $scope.error= data;
        $scope.foods="";
        console.log("Error in frontend app :"+data);
      });

  }


  $scope.itemsByPage=10;
  alert("adjlaskdf")
  $scope.option = {
    data: [
      {
        sales: 130,
        income: 250
      },
      {
        sales: 180,
        income: 350
      }
    ],
    dimensions: {
      sales: {
        type: 'bar'
      },
      income: {
        axis: 'y2'
      }
    }
  };

  $scope.columns = [{ field: 'recall_number' }, { field: 'report_date' }, { field: 'reason_for_recall' }, { field: 'city' },{ field: 'state' }, { field: 'classification' }];
  $scope.gridOptions = {
    enableColumnResizing: true,
    enableSorting: true,
    columnDefs: $scope.columns,
    onRegisterApi: function(gridApi) {
      $scope.gridApi = gridApi;
    }
  };

  var container = document.createElement('div');
  var myEl = angular.element( document.querySelector( '#chart2' ) );
  myEl.append(container);
  window.chart = new Highcharts.Chart({
    chart: {
      renderTo: container,
      height: 400
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    series: [{
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }]
  });

});
