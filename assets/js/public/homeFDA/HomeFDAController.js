


angular.module('openFDA').controller('HomeFDAController', function($scope,$http, $location){


      $scope.submit = function() {

        alert($scope.selectType);


        return false;
      }


$scope.message ="openFDA Data Set View";

  $scope.foods="";



  $scope.searchText = function() {

    //alert("hai2"+$scope.selectType);

    console.log("...API_URL...."+$scope.searchText);
    var search=$scope.searchText;

    var selectType=$scope.selectType;//food,drug,etc
    var searchItem=$scope.searchItem; //"ice cream";
   // var url='https://api.fda.gov/'+selectType+'/enforcement.json?search=reason_for_recall="'+searchItem+'"&limit=20'
   // var url='https://api.fda.gov/'+selectType+'/enforcement.json?search=reason_for_recall="'+searchItem+'"&limit=20'

    var url="http:/localhost:1337/query/search";

    $http({
      url: url, method: "GET",
      params: {selectType: selectType,searchItem:searchItem, limit:limit}
    }).
      success(function(data, status, headers, config) {
        $scope.foods = data.results;
      }).
      error(function(data, status, headers, config) {
        console.log("Error in frontend app :"+data);
      });


    /*$http.get("/query/search").
      success(function(data, status, headers, config) {
        $scope.foods = data.results;
      }).
      error(function(data, status, headers, config) {
        console.log("Error in frontend app :"+data);
      });
      */
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
