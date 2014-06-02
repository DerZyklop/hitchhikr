(function() {
  "use strict";

  /* global $, console */
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
    var distance;
    distance = function(lat1, lng1, lat2, lng2) {
      var R, a, c, dLat, dLon, radial;
      radial = function(num) {
        return num * Math.PI / 180;
      };
      R = 6371;
      dLat = radial(lat2 - lat1);
      dLon = radial(lng2 - lng1);
      a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(radial(lat1)) * Math.cos(radial(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c;
    };
    $scope.current = {};
    $scope.current.latlng = false;
    $scope.$watch('current', function(item) {
      console.log("changed " + item);
      return console.log(item);
    });
    return navigator.geolocation.getCurrentPosition(function(position) {
      $scope.current.lng = position.coords.longitude;
      $scope.current.lat = position.coords.latitude;
      $scope.current.latlng = position.coords.latitude + ',' + position.coords.longitude;
      return $http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng=' + $scope.current.latlng + '&sensor=true').then(function(response) {
        return $scope.current.formattedAddress = response.data.results[1].formatted_address;
      });
    });
  });

}).call(this);
