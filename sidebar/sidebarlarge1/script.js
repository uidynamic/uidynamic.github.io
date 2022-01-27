var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var demo = this.nextElementSibling;
    if (demo.style.display === "block") {
      demo.style.display = "none";
    } else {
      demo.style.display = "block";
    }
  });
}

function openNav() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("trigger").style.display = "block";
    document.getElementById("navbar").style.backgroundColor = "#CCD0D5";

    
   
  }
  function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("trigger").style.display = "none";
  }


