(function() {
  "use strict";

  /* global $, console */
  $(".collapsable-target").hide();

  $(".collapsable > .collapsable-trigger").on("click", function(e) {
    e.preventDefault();
    return $(".collapsable-target").slideToggle();
  });

}).call(this);
