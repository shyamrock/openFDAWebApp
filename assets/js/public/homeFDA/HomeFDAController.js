


angular.module('openFDA').controller('HomeFDAController', function($scope,$http, $location){

  $scope.foods="";
  $scope.total="";
  $scope.skip=0;
  $scope.currentPage=0;

  $scope.next=function(){

    $scope.currentPage=$scope.currentPage+1
    $scope.skipp=$scope.currentPage*10
    this.searchText($scope.skipp,$scope.currentPage)

  }
  $scope.previous=function(){


    $scope.currentPage=$scope.currentPage-1
    $scope.skipp=$scope.currentPage*10
    this.searchText($scope.skipp)

  }

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
            $scope.total = data.meta.total;
          }).
          error(function(data, status, headers, config) {
            console.log("Error in frontend app :"+data);
          });

       // this.searchText()
        return false;
      }


$scope.message ="openFDA Data Set View";





  $scope.searchText = function(skip,current) {

    $scope.currentPage=current
    var selectType=$scope.selectType;//food,drug,etc
    var searchItem=$scope.searchItem; //"ice cream";
    var skip=skip;
    var url="query/search";
    $http({
      url: url, method: "GET",
      params: {selectType: selectType,searchItem:searchItem, searchLimit:10}
    }).
      success(function(data, status, headers, config) {
        $scope.foods = data.results;
      }).
      error(function(data, status, headers, config) {
        console.log("Error in frontend app :"+data);
      });

  }


  //tabs
  $scope.tabs = [{
    title: 'Data',
    url: 'one.tpl.html'
  }, {
    title: 'Graph',
    url: 'two.tpl.html'
  }];

  $scope.currentTab = 'one.tpl.html';

  $scope.onClickTab = function (tab) {
    $scope.currentTab = tab.url;
  }

  $scope.isActiveTab = function(tabUrl) {
    return tabUrl == $scope.currentTab;
  }

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

});
