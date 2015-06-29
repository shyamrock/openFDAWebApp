


angular.module('openFDA').controller('HomeFDAController', function($scope,$http, $location, $filter, uiGridConstants){

  //cerosal

  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'http://localhost:1337/images/scroll_Pics/img_01.png'
    },
    {
      image: 'http://localhost:1337/images/scroll_Pics/img_02.png'
    },
    {
      image: 'http://localhost:1337/images/scroll_Pics/img_03.png'
    },
    {
      image: 'http://localhost:1337/images/scroll_Pics/img_04.png'
    },
    {
      image: 'http://localhost:1337/images/scroll_Pics/img_05.png'
    },
    {
      image: 'http://localhost:1337/images/scroll_Pics/img_06.png'
    }
  ];



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
      params: {selectType: selectType,searchItem:searchItem, searchLimit:10,skip:skip}
    }).
      success(function(data, status, headers, config) {
        $scope.meta=data.meta;
        $scope.dataset = data.results;
        $scope.error= data.error;
        $scope.gridOptions.data = data.results;
        $scope.rowCollection=data.results


      }).
      error(function(data, status, headers, config) {
        $scope.error= data;
        $scope.foods="";
        console.log("Error in frontend app :"+data);
      });

  }


  $scope.itemsByPage=10;

  $scope.options = {
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

});
