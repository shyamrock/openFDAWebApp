/**
 * Created by vml on 7/1/2015.
 */

angular.module('openFDA').controller('ChartController', function($scope, $location, $filter,$http) {







  $scope.submit = function() {
    $scope.loading = true;

    $scope.result = "";
    $scope.formatedVmlAray = [];

    var selectType=$scope.selectType;//food,drug,etc
    var searchItem=$scope.searchItem;


    var url="query/searchVisual";
    $http({
      url: url, method: "GET",
      params: {selectType: selectType,searchItem:searchItem}
    }).
           /*success(function (data, status, headers, config) {
        $scope.result = data.results;
        var rnd = [];

        $scope.chartConfig.series=[];
        $scope.chartConfig.title.text= $scope.selectType+'Recall with '+$scope.searchItem+' for Reason for Recall'
        angular.forEach($scope.result, function (result) {
          var vml = [];
          var datetime1 = result.time


          var yyyy = datetime1.substring(0, 4), mm = datetime1.substring(4, 6), dd = datetime1.substring(6, 8), datejoined = yyyy + "," + mm + "," + dd;
          var x = Date.UTC(yyyy, mm, dd);

          var i = 0;

          rnd.push([x, result.count]);
        });
        $scope.chartConfig.series.push({data: rnd});
      });*/

      success(function(data, status, headers, config) {
        $scope.result = data.results;
        var rnd = [];
        var rnd1 = [];
        var rnd2 = [];
        var rnd3 = [];
        $scope.chartConfig.title.text= $scope.selectType+'Recall with '+$scope.searchItem+' for Reason for Recall'
        $scope.formatedVmlAray=[   { name: "2012",data:[]}

        ]

        $scope.loading = false;
        angular.forEach($scope.result, function (result) {
          var vml = [];
          var datetime1 = result.time

          //  vml.push( $scope.vml);

          var yyyy = datetime1.substring(0, 4),mm = datetime1.substring(4, 6), dd = datetime1.substring(6, 8),datejoined = yyyy + "," + mm + "," + dd;
          var year='2015'
          var x = Date.UTC(year,mm, dd);

          var i=0;
          if(yyyy==='2012')
          {
            rnd.push([x, result.count]);
          }
          else if(yyyy==='2013')
          {
            rnd1.push([x, result.count]);
          }
          else if(yyyy==='2014')
          {
            rnd2.push([x, result.count]);
          }
          else
          {
            rnd3.push([x, result.count]);
          }
          /*if(yyyy==='2012')
           {
           angular.forEach($scope.formatedVmlAray, function (array) {
           if(array.name==='2012')
           {
           $scope.formatedVmlAray.push(            {    data: [   [Date.UTC(1970, 10, i+1), ],
           [Date.UTC(1970, 11, 4), 0.28],
           [Date.UTC(1971, 10, 9), 0.25]
           ]
           }
           );

           //alert("its matching");
           }


           });

           //alert(yyyy);

           }*/

          //rnd.push([x, result.count]);
          //$scope.chartConfig.series.push( $scope.formatedVmlAray[0]);
        });
        //$scope.formatedVmlAray=[];
        //$scope.formatedVmlAray.push({ name: "Winter 2012-2013",data: [   [Date.UTC(1973, 9, 21), 0],[Date.UTC(1973, 10, 4), 0.28], [Date.UTC(1973, 10, 9), 0.25]      ] })
        //$scope.formatedVmlAray.push({ name: "Winter 2013-2014",data: [   [Date.UTC(1972, 9, 01), 4],[Date.UTC(1972, 10, 7), 0.58], [Date.UTC(1972, 10, 7), 0.55]      ] })
        //$scope.formatedVmlAray.push({ name: "Winter 2013-2014",data: [   [Date.UTC(1972, 10, 11), 4],[Date.UTC(1972, 1, 7), 0.98], [Date.UTC(1972, 10, 7), 0.55]      ] })
        //
        //  $scope.chartConfig.series.push( $scope.formatedVmlAray[0]);
        //$scope.chartConfig.series.push( $scope.formatedVmlAray[1]);
        //$scope.chartConfig.series.push( $scope.formatedVmlAray[2]);
        $scope.chartConfig.series=[];
        $scope.chartConfig.series.push( {name:"2012-2013",data:rnd});
        $scope.chartConfig.series.push( {name:"2013-2014",data:rnd1});
        $scope.chartConfig.series.push( {name:"2014-2015",data:rnd2});
        $scope.chartConfig.series.push( {name:"2015-2016",data:rnd3});
      }).
      error(function(data, status, headers, config) {
        alert("No results matching this term");
        $scope.loading = false;
      });

  }




  $scope.result="";
  $scope.formatedVmlAray=[];
  var url= 'https://api.fda.gov/food/enforcement.json?search=reason_for_recall:"ice cream"&count=report_date';
  $http({    url: url, method: "GET"  }).
    success(function(data, status, headers, config) {
      $scope.result = data.results;
      var rnd = [];
      var rnd1 = [];
      var rnd2 = [];
      var rnd3 = [];
          $scope.formatedVmlAray=[   { name: "2012",data:[]}

                                  ]


        angular.forEach($scope.result, function (result) {
        var vml = [];
        var datetime1 = result.time

        //  vml.push( $scope.vml);

        var yyyy = datetime1.substring(0, 4),mm = datetime1.substring(4, 6), dd = datetime1.substring(6, 8),datejoined = yyyy + "," + mm + "," + dd;
        var year='2015'
          var x = Date.UTC(year,mm, dd);

          var i=0;
          if(yyyy==='2012')
          {
            rnd.push([x, result.count]);
          }
          else if(yyyy==='2013')
          {
            rnd1.push([x, result.count]);
          }
          else if(yyyy==='2014')
          {
            rnd2.push([x, result.count]);
          }
          else
          {
            rnd3.push([x, result.count]);
          }
          /*if(yyyy==='2012')
          {
            angular.forEach($scope.formatedVmlAray, function (array) {
              if(array.name==='2012')
              {
                  $scope.formatedVmlAray.push(            {    data: [   [Date.UTC(1970, 10, i+1), ],
                                                                          [Date.UTC(1970, 11, 4), 0.28],
                                                                           [Date.UTC(1971, 10, 9), 0.25]
                                                                     ]
                                                          }
                                              );

                //alert("its matching");
              }


              });

            //alert(yyyy);

          }*/

        //rnd.push([x, result.count]);
          //$scope.chartConfig.series.push( $scope.formatedVmlAray[0]);
      });
      //$scope.formatedVmlAray=[];
      //$scope.formatedVmlAray.push({ name: "Winter 2012-2013",data: [   [Date.UTC(1973, 9, 21), 0],[Date.UTC(1973, 10, 4), 0.28], [Date.UTC(1973, 10, 9), 0.25]      ] })
      //$scope.formatedVmlAray.push({ name: "Winter 2013-2014",data: [   [Date.UTC(1972, 9, 01), 4],[Date.UTC(1972, 10, 7), 0.58], [Date.UTC(1972, 10, 7), 0.55]      ] })
      //$scope.formatedVmlAray.push({ name: "Winter 2013-2014",data: [   [Date.UTC(1972, 10, 11), 4],[Date.UTC(1972, 1, 7), 0.98], [Date.UTC(1972, 10, 7), 0.55]      ] })
      //
    //  $scope.chartConfig.series.push( $scope.formatedVmlAray[0]);
      //$scope.chartConfig.series.push( $scope.formatedVmlAray[1]);
      //$scope.chartConfig.series.push( $scope.formatedVmlAray[2]);
      $scope.chartConfig.series.push( {name:"2012-2013",data:rnd});
      $scope.chartConfig.series.push( {name:"2013-2014",data:rnd1});
      $scope.chartConfig.series.push( {name:"2014-2015",data:rnd2});
      $scope.chartConfig.series.push( {name:"2015-2016",data:rnd3});
    });



  //if(yyyy==='2012')
  //{
  //
  // $scope.formatedVmlAray.push({ name: "Winter 2012-2013",data: [       [Date.UTC(1970, 9, 21), 0],[Date.UTC(1970, 10, 4), 0.28], [Date.UTC(1970, 10, 9), 0.25]      ] })
  //  alert(yyyy);
  //}
  //if(yyyy==='2013')
  //{
  //  alert(yyyy);
  //}
  //if(yyyy==='2014')
  //{
  //  alert(yyyy);
  //}
  //if(yyyy==='2015')
  //{
  //  alert(yyyy);
  //}



  //$scope.serieses=[{
  //                name: "Winter 2012-2013",
  //                data: [       [Date.UTC(1970, 9, 21), 0],[Date.UTC(1970, 10, 4), 0.28], [Date.UTC(1970, 10, 9), 0.25]      ]
  //                  },
  //                  {
  //                    name: "Winter 2013-2014",
  //                    data: [        [Date.UTC(1970, 9, 29), 0],[Date.UTC(1971, 0, 1), 1.66],[Date.UTC(1971, 0, 10), 1.8]      ]
  //                  },
  //                  {
  //                    name: "Winter 2014-2015",
  //                    data: [        [Date.UTC(1970, 10, 25), 0],[Date.UTC(1970, 11, 25), 1.64],[Date.UTC(1971, 0, 4), 1.6]     ]
  //                  }
  //                  ];


  $scope.chartConfig = {
    options: {
      chart: {
        type: 'spline'
      },
      tooltip: {
        headerFormat:'',
        pointFormat: '{point.x:%e.%B }: {point.y:.2f} '
      },

    },

    yAxis: {
      title: {
        text: "COUNT"
      }
    },

      xAxis: {
        dateTimeLabelFormats: { // don't display the dummy year
          month: '%e.%B '
          /*year: ['%y']*/
        },
        type: 'datetime',
        title: {
          text: "DATE/YEAR"
        }

      },
    series:[ ],
    title: {
      text: 'Food Recall with Ice Cream for Reason for Recall'
    }
    ,
    //subtitle: {
    //  text: 'Irregular time count in Graph'
    //},

    loading: false
  }




//for(var i=0; i<$scope.serieses.length;i++) {
//  $scope.chartConfig.series.push($scope.serieses[i]);
//}

  $scope.swapChartTypeBar = function () {
    this.chartConfig.options.chart.type = 'bar'
    this.chartConfig.options.chart.zoomType = 'y'
  }
  $scope.swapChartTypeLine = function () {
    this.chartConfig.options.chart.type = 'line'
    this.chartConfig.options.chart.zoomType = 'x'
  }
  $scope.swapChartTypeSpline = function () {
    this.chartConfig.options.chart.type = 'spline'
    this.chartConfig.options.chart.zoomType = 'x'
  }



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

