/**
 * Created by kkoneko on 9/14/2015.
 */

function textChange() {
  document.getElementById("clicked").innerHTML = "I've been clicked";
}

function colorChange1() {
  document.getElementById("enter-leave").style.color = "red";
}

function colorChange2() {
  document.getElementById("enter-leave").style.color = "blue";
}

function changeSidebar() {
  document.getElementById("date").innerHTML = Date();
}