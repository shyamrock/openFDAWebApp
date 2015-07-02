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
          month: '%b \'%y',
          year: '%Y'
          //month: '%e. %b',
          //year: '%b'
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
        var datetime1=result.time
      //$scope.vml=[result.count];
      //  vml.push( $scope.vml);
      var yyyy = datetime1.substring(0, 4);
        var mm= datetime1.substring(4, 6);
        var dd= datetime1.substring(6, 8);
        var datejoined=yyyy+","+mm+","+dd
        var x = Date.UTC(yyyy,mm,dd);
        //alert(datejoined);
        rnd.push([x,result.count]);

      });
      $scope.chartConfig.series.push({  data: rnd  });



     //'T00:00:00'">{{ dat  | date:'dd/MM/yyyy'

      //rnd= [
      //  [Date.UTC(1970, 9, 21), 0],
      //  [Date.UTC(1970, 10, 4), 0.28],
      //  [Date.UTC(1970, 10, 9), 0.25],
      //  [Date.UTC(1970, 10, 27), 0.2],
      //  [Date.UTC(1970, 11, 2), 0.28],
      //  [Date.UTC(1970, 11, 26), 0.28],
      //  [Date.UTC(1970, 11, 29), 0.47],
      //  [Date.UTC(1971, 0, 11), 0.79],
      //  [Date.UTC(1971, 0, 26), 0.72],
      //  [Date.UTC(1971, 1, 3), 1.02],
      //  [Date.UTC(1971, 1, 11), 1.12],
      //  [Date.UTC(1971, 1, 25), 1.2],
      //  [Date.UTC(1971, 2, 11), 1.18],
      //  [Date.UTC(1971, 3, 11), 1.19],
      //  [Date.UTC(1971, 4, 1), 1.85],
      //  [Date.UTC(1971, 4, 5), 2.22],
      //  [Date.UTC(1971, 4, 19), 1.15],
      //  [Date.UTC(1971, 5, 3), 0]
      //]
      console.log("x and y"+rnd);
      //$scope.chartConfig.series.push({  data: rnd  });

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

