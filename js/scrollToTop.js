$(document).ready(function(){
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btn-top").style.display = "block";
    } else {
        document.getElementById("btn-top").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
 let btnTop = document.getElementById("btn-top");

 btnTop.addEventListener("click", function(){
    document.querySelector('#totop').scrollIntoView({ 
        behavior: 'smooth' 
      });
 });

});