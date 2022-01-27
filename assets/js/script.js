const change = src => {
  document.getElementById('cardmediumimagepreviewmain-marketplace').src = src
  document.getElementById('carditemextralargeimagepreviewmain-marketplace').src = src
  document.getElementById('carditemlargeimagepreviewmain-marketplace').src = src
}

function myFunction() {
  var x = document.getElementById("productdescription-marketplace");
  var btnText = document.getElementById("productdescriptionarrow-marketplace");
  if (x.style.display === "none") {
    x.style.display = "block";
    btnText.innerHTML = "expand_less"; 
  } else {
    x.style.display = "none";
    btnText.innerHTML = "keyboard_arrow_down"; 
  }
}

function myFunction1() {
  var x = document.getElementById("productcomment-marketplace");
  var apa = document.getElementById("commentarrow-marketplace");
  if (x.style.display === "none") {
    x.style.display = "block";
    apa.innerHTML = "expand_less";
  } else {
    x.style.display = "none";
    apa.innerHTML = "keyboard_arrow_down"; 
  }
}

function myFunction2() {
  var x = document.getElementById("formsigninlargeshowpassword-sign");
  if (x.innerHTML === "Hide Password") {
    x.innerHTML = "Show Password";
  } else {
    x.innerHTML = "Hide Password";
  }
  var x = document.getElementById("formsigninlargepassword-sign");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  
}

function myFunction3() {
  var x = document.getElementById("formsigninsmallshowpassword-sign");
  if (x.innerHTML === "Hide Password") {
    x.innerHTML = "Show Password";
  } else {
    x.innerHTML = "Hide Password";
  }
  var x = document.getElementById("formsigninsmallpassword-sign");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  
}

function myFunction4() {
  var x = document.getElementById("formsignuplargepasswordvisibilityoption-sign");
  if (x.innerHTML === "visibility_off") {
    x.innerHTML = "visibility";
  } else {
    x.innerHTML = "visibility_off";
  }
  var x = document.getElementById("formsignuplargepasswordinput-sign");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  
}

function myFunction5() {
  var x = document.getElementById("formsignuplargeverifypasswordvisibilityoption-sign");
  if (x.innerHTML === "visibility_off") {
    x.innerHTML = "visibility";
  } else {
    x.innerHTML = "visibility_off";
  }
  var x = document.getElementById("formsignuplargeverifypasswordinput-sign");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  
}

function myFunction6() {
  var x = document.getElementById("Navbar-menu");
  if (x.className === "navbar-menu") {
    x.className += " responsive";
  } else {
    x.className = "navbar-menu";
  }
}

function navbar() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}