"use strict"
### global $, console ###

$(".collapsable-target").hide()
$(".collapsable > .collapsable-trigger").on "click", (e) ->
  e.preventDefault()
  $(".collapsable-target").slideToggle()
