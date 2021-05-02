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


    $scope.current = {}
    $scope.current.latlng = false
    $scope.$watch 'current', (item) ->
      console.log "changed "+item
      console.log item

    navigator.geolocation.getCurrentPosition (position) ->
      $scope.current.lng = position.coords.longitude
      $scope.current.lat = position.coords.latitude
      $scope.current.latlng = position.coords.latitude+','+position.coords.longitude
      $http.get('https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDWSfOAUSM1YDtKCe8rTcLT39U8tYfhIDk&latlng='+$scope.current.latlng+'&sensor=true')
        .then (response) ->
          if !response.data.results.length
            console.error 'NO RESULTS!!'
          $scope.current.formattedAddress = response.data.results[1]?.formatted_address

        .then ->
          # Get all the spots in germany.
          $http.get 'http://private-anon-c57b0068f2-hitchwikimaps.apiary-mock.com/maps/api/?country=DE'
            .then (response) ->
              console.log response.data

              place = response.data[0];

              # The spot in Reiskirchen has id 2245
              #   $scope.place = response.data
              #   $scope.place.distance = distance(response.data.lat, response.data.lon, position.coords.latitude, position.coords.longitude)

              # Get the details for the first entry in the list of german spots
              $http.get('http://private-anon-c57b0068f2-hitchwikimaps.apiary-mock.com/maps/api/?place='+place.id).then (response) ->
                console.log response

                # calculate the distance of the
                distanceOfPlace = distance(response.data[0].lat, response.data[0].lon, position.coords.latitude, position.coords.longitude)
                $scope.nearest = distanceOfPlace

                $scope.place = response.data
                $scope.place.distance = distance(response.data.lat, response.data.lon, position.coords.latitude, position.coords.longitude)

