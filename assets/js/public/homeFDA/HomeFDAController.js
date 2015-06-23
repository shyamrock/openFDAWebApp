angular.module('openFDA').controller('HomeFDAController', function($scope,$http){

  $scope.tabs = [{
    title: 'List',
    url: 'one.tpl.html'
  }, {
    title: 'Graph',
    url: 'two.tpl.html'
  }, ];

  $scope.currentTab = 'one.tpl.html';

  $scope.onClickTab = function (tab) {
    $scope.currentTab = tab.url;
  }

  $scope.isActiveTab = function(tabUrl) {
    return tabUrl == $scope.currentTab;
  }
$scope.message ="openFDA Web App with CI Jenkins test";

  $scope.foods="";

  $scope.searchText = function() {

    alert("hai2"+$scope.selectType);

    console.log("...API_URL...."+$scope.searchText);
    var search=$scope.searchText;

    var selectType=$scope.selectType;//food,drug,etc
    var searchItem=$scope.searchItem; //"ice cream";
    var url='https://api.fda.gov/'+selectType+'/enforcement.json?search=reason_for_recall="'+searchItem+'"&limit=20'
    $http.get(url).
      success(function(data, status, headers, config) {
        $scope.foods = data.results;
      }).
      error(function(data, status, headers, config) {
        console.log("Error in frontend app :"+data);
      });
  }

});
