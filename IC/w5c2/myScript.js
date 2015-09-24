/**
 * Created by kkoneko on 9/23/2015.
 */
$(document).ready(function () {

  $("#fadeOut").click(function () {
    $("#header").fadeOut("slow");
  });

  $("#fadeIn").click(function () {
    $("#header").fadeIn("fast");
  });

  $("#hide").click(function () {
    $("#footer").hide();
  });

  $("#show").click(function () {
    $("#footer").show();
  });

  $("#load").click(function () {
    $("#sidebar").load("load_test.txt");
  });

  $("#get").click(function () {
    $.get("get_test.txt", function (data, status) {
      alert("Data: " + data + "\nStatus: " + status);
    });
  });

  $("#load2").click(function () {
    $.ajax({
      url: 'http://www.google.com',
      complete: function (data, status) {
        alert("Data: " + data + "\nStatus: " + status);
      }
    });
  });
});