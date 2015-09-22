/**
 * Created by kkoneko on 9/21/2015.
 */

$(document).ready(function () {
  $("#clicked").click(function () {
    $(this).html("I've been clicked");
  });

  $("#enter-leave").on({
    mouseenter: function () {
      $(this).css({"color": "red"});
    },
    mouseleave: function () {
      $(this).css({"color": "blue"});
    }
  });

  $("#clicked2").dblclick(function () {
    $("#sidebar").css({"background-color": "lightblue"});
  });
});