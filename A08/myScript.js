/**
 * Created by kkoneko on 9/24/2015.
 */

$(document).ready(function () {
  $("#answer1").hide();
  $("#answer2").hide();
  $("#answer3").hide();
  $("#answer4").hide();
  $("#answer5").hide();

  $("#faq1").click(function () {
    $("#answer1").toggle();
    $("#faq1 i").toggleClass("fa-minus fa-plus");
  });

  $("#faq2").click(function () {
    $("#answer2").toggle();
    $("#faq2 i").toggleClass("fa-minus fa-plus");
  });

  $("#faq3").click(function () {
    $("#answer3").toggle();
    $("#faq3 i").toggleClass("fa-minus fa-plus");
  });

  $("#faq4").click(function () {
    $("#answer4").toggle();
    $("#faq4 i").toggleClass("fa-minus fa-plus");
  });

  $("#faq5").click(function () {
    $("#answer5").toggle();
    $("#faq5 i").toggleClass("fa-minus fa-plus");
  });

//modified from  http://www.webreference.com/programming/javascript/jquery/form_validation/index.html
  $("#myForm").validate({
    rules: {
      url: {
        required: true,
        url: true
      }
    },
    messages: {
      url: "Please enter a valid URL."
    }
  });

  $("#myForm").submit(function () {
    var url = $("#url").val();

    $.get(url, function (data) {
      $("#sidebar").text(data);
      var links = data.match(/a href/g);
      var count = links.length;
      $("#count").text("there are " + count + " links");
    });
  });
});