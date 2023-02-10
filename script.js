$(document).ready(function(){
    $("#b").click(function(){
      $(myModal).show();
    });
    $("#c").click(function(){
        $(myModal).hide();
      });
    $(".top")
  });

  
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}