"use strict"
### global $, console ###

$(".collapsable-target").hide()
$(".collapsable > .collapsable-trigger").on "click", (e) ->
  e.preventDefault()
  $(".collapsable-target").slideToggle()

angular.module('Hitchhikr', [])
  .controller 'percentageBarCtrl', ($scope, $http) ->
    $scope.percentage = ''
    $http.get('http://hitchhikr.apiary-mock.com/user/1/trip/1/log').then (response) ->
      # logs = response.data
      #_.last(logs)
      # TODO: Calculate the current percentage

      console.log response

      $scope.percentage = '24%'

  .controller 'logsStreamCtrl', ($scope, $http) ->
    $http.get('http://hitchhikr.apiary-mock.com/user/1/trip/1/log').then (response) ->
      $scope.logs = response.data
    $http.get('http://hitchhikr.apiary-mock.com/user/1/trip/1').then (response) ->
      $scope.trip = response.data
