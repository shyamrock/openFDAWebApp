app.service('openFDASearchTrendsService', function ($http) {
  this.getFeedbackPaged = function () {
    return $http.get('query/searchTrends');
  };
  this.getDrugLabels = function () {
    return $http.get('query/drugLabels');
  };
  this.getVisual = function () {
    return $http.get('query/visualGraphs');
  };

});
