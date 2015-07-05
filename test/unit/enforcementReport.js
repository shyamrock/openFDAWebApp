var scope = {};
beforeEach(function(){
  module('comments');

  inject(function($controller){
    $controller('DashboardCtrl',{$scope:scope});
  });

})
