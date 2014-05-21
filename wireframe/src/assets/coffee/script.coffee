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
        # logs = response.data
        #_.last(logs)
        # TODO: Calculate the current percentage
        $scope.percentage = '24%'
      .error (data, status, headers, config) ->
        # logs = response.data
        #_.last(logs)
        # TODO: Calculate the current percentage
        $scope.percentage = 'error'

  .controller 'logsStreamCtrl', ($scope, $http) ->
    $http.get('http://hitchhikr.apiary-mock.com/user/1/trip/1/log').then (response) ->
      $scope.logs = response.data
    $http.get('http://hitchhikr.apiary-mock.com/user/1/trip/1').then (response) ->
      $scope.trip = response.data
