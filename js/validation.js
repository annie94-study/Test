document.addEventListener("DOMContentLoaded", function() {

  var checkUsername = function(e) {
    var usernameInput = document.getElementById("field_username").value;
    if(usernameInput == "") {
      alert("Error: Username cannot be blank!"); 
      e.preventDefault(); // equivalent to return false
      return false;
    }

    re = /^[a-zA-Z]+$/;
    if(re.test(usernameInput) == false) {
      alert("Error: Username must contain only letters!"); 
      e.preventDefault();
      return false;
    }
    return true;
  }

  var checkEmail = function(e) {
    var emailInput = document.getElementById("Email").value; 
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(emailInput) == false) {
      alert("Error: Email is not valid!"); 
      e.preventDefault();
      return false;
    }
    return true;
  }

  var checkPassword = function(e) {
    var str = document.getElementById("field_pwd1").value;
    if (str == "") {
      alert("Error: Please check that you've entered and confirmed your password!");
      e.preventDefault();
      return false;
    }

    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

    if (re.test(str) == false) {
      alert("The password you have entered is not valid!");
      e.preventDefault();
      return false;
    }
    return true;
  }

  var checkPasswordMatch = function(e) {
    var str1 = document.getElementById("field_pwd1").value; 
    var str2 = document.getElementById("field_pwd2").value; 
    if (str1 != str2) {
      alert("Error: Please check that the passwords match!");  
      e.preventDefault();
      return false;
    } 
    return true;
  }

  var checkForm = function(e) {
    if (checkUsername(e) && checkEmail(e) && checkPassword(e) && checkPasswordMatch(e)) {
      return true;
    } else {
      return false;
    }
  }

  var usernameInput = document.getElementById("field_username");
  usernameInput.addEventListener("change", checkUsername, false);
  var emailInput = document.getElementById("Email");
  emailInput.addEventListener("change", checkEmail, false);
  var pwd1Input = document.getElementById("field_pwd1");
  pwd1Input.addEventListener("change", checkPassword, false);
  var pwd2Input = document.getElementById("field_pwd2");
  pwd2Input.addEventListener("change", checkPasswordMatch, false);


  var button = document.getElementById("signup");
  button.addEventListener("click", function(e) {
    if (checkForm(e)) {
      document.location.href = "ImagePreviewer.html";
      e.preventDefault();
    } else {
      alert("You tried to sign up with uncorrect data. Please return and try again!");
    };
  }, false);

}, false);
