$(document).ready(function(){
  $("form#servicepro").submit(function(event){
    event.preventDefault();
    alert("Your request has been successfully booked.");
      $("#servicepro")[0].reset();

  });
});


function openNav() {
   document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
   document.getElementById("mySidenav").style.width = "0";
}

// HAPPY CUSTOMERS SCRIPT

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
 showSlides(slideIndex += n);
}

function currentSlide(n) {
 showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides,5000);
}

// DROPDOWN MENU

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
 document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
 if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




// BOOKING form

(function($) {
  function floatLabel(inputType) {
    $(inputType).each(function() {
      var $this = $(this);
      // on focus add cladd active to label
      $this.focus(function() {
        $this.next().addClass("active");
      });
      //on blur check field and remove class if needed
      $this.blur(function() {
        if ($this.val() === '' || $this.val() === 'blank') {
          $this.next().removeClass();
        }
      });
    });
  }
  // just add a class of "floatLabel to the input field!"
  floatLabel(".floatLabel");
})(jQuery);
