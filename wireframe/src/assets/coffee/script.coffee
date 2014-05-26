"use strict"
### global $, console ###

$(".collapsable-target").hide()
$(".collapsable > .collapsable-trigger").on "click", (e) ->
  e.preventDefault()
  $(".collapsable-target").slideToggle()

angular.module('Hitchhikr', [])
  .controller 'percentageBarCtrl', ($scope, $http) ->
    $scope.percentage = ''
    $http( url: 'http://hitchhikr.apiary-mock.com/user/1/trip/1/log' )
      .success (data, status, headers, config) ->
        #_.last(data)
        # TODO: Calculate the current percentage
        $scope.percentage = '24%'
      .error (data, status, headers, config) ->
        $scope.percentage = 'error'

  .controller 'logsStreamCtrl', ($scope, $http) ->
    $http.get('http://hitchhikr.apiary-mock.com/user/1/trip/1/log').then (response) ->
      $scope.logs = response.data
    $http.get('http://hitchhikr.apiary-mock.com/user/1/trip/1').then (response) ->
      $scope.trip = response.data

  .controller 'nearbySpotsCtrl', ($scope, $http) ->

    distance = (lat1, lng1, lat2, lng2) ->
      radial = (num) ->
        num * Math.PI / 180
      R = 6371
      dLat = radial(lat2-lat1)
      dLon = radial(lng2-lng1)
      a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(radial(lat1)) * Math.cos(radial(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2)
      c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
      return R * c

    # This is the spot in Reiskirchen
    $http.get('http://hitchwikimaps.apiary-mock.com/maps/api/?place=2245').then (response) ->
      $scope.place = response.data

    # These are all spots from Germany
    navigator.geolocation.getCurrentPosition (position) ->
      $http.get('https://hitchwikimaps.apiary.io/maps/api/?country=DE').then (response) ->
        $scope.nearest = distance(response.data[0].lat, response.data[0].lon, position.coords.latitude, position.coords.longitude)

      $http.get('http://hitchwikimaps.apiary-mock.com/maps/api/?place=2245').then (response) ->
        $scope.place.distance = distance(response.data.lat, response.data.lon, position.coords.latitude, position.coords.longitude)


      #$scope.country = distance()
