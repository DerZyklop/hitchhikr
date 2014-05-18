(function() {
  "use strict";

  /* global $, console */
  $(".collapsable-target").hide();

  $(".collapsable > .collapsable-trigger").on("click", function(e) {
    e.preventDefault();
    return $(".collapsable-target").slideToggle();
  });

  angular.module('Hitchhikr', []).controller('percentageBarCtrl', function($scope, $http) {
    return $http.get('http://hitchhikr.apiary-mock.com/user/1/trip/1/log').then(function(percentageData) {
      var logs;
      logs = percentageData.data;
      logs;
      return $scope.percentage = percentageData.data;
    });
  });

}).call(this);
