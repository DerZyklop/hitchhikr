"use strict"
### global $, console ###

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
    # $http.get('http://hitchwikimaps.apiary-mock.com/maps/api/?place=2245').then (response) ->
    #   $scope.place = response.data



    $scope.current = {}
    $scope.current.latlng = false
    $scope.$watch 'current', (item) ->
      console.log "changed "+item
      console.log item

    navigator.geolocation.getCurrentPosition (position) ->
      $scope.current.lng = position.coords.longitude
      $scope.current.lat = position.coords.latitude
      $scope.current.latlng = position.coords.latitude+','+position.coords.longitude
      $http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng='+$scope.current.latlng+'&sensor=true')
        .then (response) ->
          $scope.current.formattedAddress = response.data.results[1].formatted_address

    #     .then ->
    #       console.log 'fefefefe'

        #   $http.get('https://hitchwikimaps.apiary.io/maps/api/?country=DE')
        #     .then((response) ->
        #       console.log response.data


        # .then ->
        #       # This isnt working bevause devmaps is down
        #       #$http.get('http://hitchwiki.org/devmaps/api/?place='+response.data[0].id).then (response) ->
        #     $http.get('http://hitchwikimaps.apiary-mock.com/maps/api/?place='+response.data[0].id).then (response) ->
        #       console.log response
        #   ).then( (idontknow) ->
        #     console.log 'idontknow'
        #     console.log response
        #     # console.log distance(response.data[0].lat, response.data[0].lon, position.coords.latitude, position.coords.longitude)
        #     # $scope.nearest = distance(response.data[0].lat, response.data[0].lon, position.coords.latitude, position.coords.longitude)

        #     # $http.get('http://hitchwikimaps.apiary-mock.com/maps/api/?place=2245').then (response) ->
        #     #   $scope.place.distance = distance(response.data.lat, response.data.lon, position.coords.latitude, position.coords.longitude)
        #   )


