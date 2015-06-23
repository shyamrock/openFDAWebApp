angular.module('openFDA').controller('HomeFDAController', function($scope,$http){

$scope.message ="openFDA Data Set View -Test 4 for Vimal";

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
