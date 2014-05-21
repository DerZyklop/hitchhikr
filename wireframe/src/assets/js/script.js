(function() {
  "use strict";

  /* global $, console */
  $(".collapsable-target").hide();

  $(".collapsable > .collapsable-trigger").on("click", function(e) {
    e.preventDefault();
    return $(".collapsable-target").slideToggle();
  });

  angular.module('Hitchhikr', []).controller('percentageBarCtrl', function($scope, $http) {
    $scope.percentage = '';
    return $http({
      url: 'http://hitchhikr.apiary-mock.com/user/1/trip/1/log'
    }).success(function(data, status, headers, config) {
      return $scope.percentage = '24%';
    }).error(function(data, status, headers, config) {
      return $scope.percentage = 'error';
    });
  }).controller('logsStreamCtrl', function($scope, $http) {
    $http.get('http://hitchhikr.apiary-mock.com/user/1/trip/1/log').then(function(response) {
      return $scope.logs = response.data;
    });
    return $http.get('http://hitchhikr.apiary-mock.com/user/1/trip/1').then(function(response) {
      return $scope.trip = response.data;
    });
  }).controller('nearbySpotsCtrl', function($scope, $http) {
    return $http.get('http://hitchwikimaps.apiary-mock.com/maps/api/?place=2245').then(function(response) {
      return $scope.data = response.data;
    });
  });

}).call(this);
