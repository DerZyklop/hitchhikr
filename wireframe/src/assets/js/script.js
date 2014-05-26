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
    $http.get('http://hitchwikimaps.apiary-mock.com/maps/api/?place=2245').then(function(response) {
      return $scope.place = response.data;
    });
    return navigator.geolocation.getCurrentPosition(function(position) {
      $http.get('https://hitchwikimaps.apiary.io/maps/api/?country=DE').then(function(response) {
        return $scope.nearest = distance(response.data[0].lat, response.data[0].lon, position.coords.latitude, position.coords.longitude);
      });
      return $http.get('http://hitchwikimaps.apiary-mock.com/maps/api/?place=2245').then(function(response) {
        return $scope.place.distance = distance(response.data.lat, response.data.lon, position.coords.latitude, position.coords.longitude);
      });
    });
  });

}).call(this);
