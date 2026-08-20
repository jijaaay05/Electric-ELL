// ELEKTRIK EEL - JQUERY / JAVASCRIPT
// This file keeps the interactive code separate from the HTML and CSS.
// It controls the mobile menu and scroll-to-top button.

// Wait until the page is ready
$(document).ready(function () {

  // Open and close the mobile menu
  $(".menu-button").click(function () {
    $(".site-nav").slideToggle();
  });

  // Close the mobile menu after a link is clicked
  $(".site-nav a").click(function () {
    if ($(window).width() <= 600) {
      $(".site-nav").slideUp();
    }
  });

  // Show the top button after scrolling down
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $("#top-button").fadeIn();
    } else {
      $("#top-button").fadeOut();
    }
  });

  // Scroll smoothly back to the top
  $("#top-button").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

});
