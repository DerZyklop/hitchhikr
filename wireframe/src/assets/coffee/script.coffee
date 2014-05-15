"use strict"
### global $ ###

$(".collapsable-target").hide()
$(".collapsable > .collapsable-trigger").on "click", ->
  $(".collapsable-target").show()
