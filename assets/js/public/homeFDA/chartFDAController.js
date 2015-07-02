/**
 * Created by vml on 7/1/2015.
 */

angular.module('openFDA').controller('ChartController', function($scope, $location, $filter,$http) {

  $scope.chartConfig = {
    options: {
      chart: {
        type: 'bar'
      }
    },
    series: [{
      data: []
    }],
    yAxis: {
      title: {
        text: "COUNT"
      }},
      xAxis: {
        dateTimeLabelFormats: { // don't display the dummy year
          month: '%e. %b',
          year: '%b'
        },
        type: 'datetime',
        title: {
          text: "DATE/YEAR"
        }
      },
    title: {
      text: 'Hello'
    },

    loading: false
  }
  $scope.result="";

  var url= 'https://api.fda.gov/food/enforcement.json?search=reason_for_recall:"ice cream"&count=report_date';
  $http({
    url: url, method: "GET"
  }).
    success(function(data, status, headers, config) {
      $scope.result = data.results;
      var rnd = [];

      angular.forEach( $scope.result, function(result) {
        var vml=[];
        $scope.vml=[result.time,result.count];
        vml.push( $scope.vml);

        rnd.push(vml);

      });
      $scope.chartConfig.series.push({  data: rnd  });
    alert(rnd);
      console.log("x and y"+rnd);
    });



  $scope.swapChartType = function () {
    if (this.chartConfig.options.chart.type === 'line') {
      this.chartConfig.options.chart.type = 'bar'
      this.chartConfig.options.chart.zoomType = 'x'
    } else {
      this.chartConfig.options.chart.type = 'line'
      this.chartConfig.options.chart.zoomType = 'x'
    }
  }

  $scope.toggleLoading = function () {
    this.chartConfig.loading = !this.chartConfig.loading
  }




});

