/**
 * Created by kkoneko on 9/17/2015.
 */

/**
 *
 * @param elem
 * @returns {Array}
 *
 * Assumes elem is a tag and may have more than one possible element matching the tag name
 */

function getClasses(elem) {
  var classes = [];
  var counter = 0;

  var temp = document.getElementsByTagName(elem);
//  document.write(temp.length);

  for (var i = 0; i < temp.length; i++) {
    list = toArray(temp.item(i).classList);
    for (var index = 0; index < list.length; index++, counter++) { //add values of new array to return array (classes)
      classes[counter] = list[index];
    }
  }

  return classes;
}

function toArray(list) {
  var a = [];
  for (var i = 0; i < list.length; i++) {
    a[i] = list.item(i);
  }
  return a;
}

/**
 *
 * @param elem
 * @param className
 *
 * Assumes element is a tag
 */
function addClass(elem, className) {
  var element = document.getElementsByTagName(elem)[0];
  element.classList.add(className);
}


/**
 *
 * @returns {boolean}
 *
 * Modified from http://www.tutorialspoint.com/javascript/javascript_form_validations.htm
 */
function validateForm() {
  /**
   *
   * Check all text fields have entries
   */
  if (document.myForm.name.value == "") {
    document.getElementById("errors").innerHTML = "Please provide your name!";
    document.myForm.name.focus();
    document.myForm.name.style.backgroundColor = "red";
    return false;
  }
  else {
    document.myForm.name.style.backgroundColor = "white";
  }

  if (document.myForm.email.value == "") {
    document.getElementById("errors").innerHTML = "Please provide your email!";
    document.myForm.email.focus();
    document.myForm.email.style.backgroundColor = "red";
    return false;
  }
  else {
    document.myForm.email.style.backgroundColor = "white";
  }

  if (document.myForm.password.value == "") {
    document.getElementById("errors").innerHTML = "Please provide your password!";
    document.myForm.password.focus();
    document.myForm.password.style.backgroundColor = "red";
    return false;
  }
  else {
    document.myForm.password.style.backgroundColor = "white";
  }

  if (document.myForm.confirm.value == "") {
    document.getElementById("errors").innerHTML = "Please confirm your password!";
    document.myForm.confirm.focus();
    document.myForm.confirm.style.backgroundColor = "red";
    return false;
  }
  else {
    document.myForm.confirm.style.backgroundColor = "white";
  }

  /**
   *
   * Validate email
   */
  var emailID = document.myForm.email.value;
  atpos = emailID.indexOf("@");
  dotpos = emailID.lastIndexOf(".");

  if (atpos < 1 || ( dotpos - atpos < 2 )) {
    document.getElementById("errors").innerHTML = "Please enter correct email ID";
    document.myForm.email.focus();
    document.myForm.email.style.backgroundColor = "red";
    return false;
  }
  else {
    document.myForm.email.style.backgroundColor = "white";
  }

  /**
   *
   * Check password and password confirm match
   */
  if (document.myForm.password.value != document.myForm.confirm.value) {
    document.getElementById("errors").innerHTML = "Please enter matching passwords!";
    document.myForm.confirm.focus();
    document.myForm.password.style.backgroundColor = "red";
    document.myForm.confirm.style.backgroundColor = "red";
    return false;
  }
  else {
    document.myForm.password.style.backgroundColor = "white";
    document.myForm.confirm.style.backgroundColor = "white";
  }

  return ( true );
}