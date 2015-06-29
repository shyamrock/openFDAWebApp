app.service('openFDASearchTrendsService', function ($http) {
  this.getFeedbackPaged = function () {
    return $http.get('query/searchTrends');
  };
});
