(function() {
  "use strict";

  /* global $, console */
  $(".collapsable-target").hide();

  $(".collapsable > .collapsable-trigger").on("click", function(e) {
    e.preventDefault();
    return $(".collapsable-target").slideToggle();
  });

  angular.module('Hitchhikr', []).controller('percentageBarCtrl', function($scope, $http) {
    return $http.get('http://hitchhikr.apiary-mock.com/user/1/trip/1/log').then(function(response) {
      console.log(response);
      return $scope.percentage = '24';
    });
  }).controller('logsStreamCtrl', function($scope, $http) {
    $http.get('http://hitchhikr.apiary-mock.com/user/1/trip/1/log').then(function(response) {
      return $scope.logs = response.data;
    });
    return $http.get('http://hitchhikr.apiary-mock.com/user/1/trip/1').then(function(response) {
      return $scope.trip = response.data;
    });
  });

}).call(this);
