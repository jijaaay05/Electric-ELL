// ELEKTRIK EEL - JQUERY / JAVASCRIPT
// This file controls the interactive parts of the website.

$(document).ready(function () {

  // Open and close the mobile hamburger menu
  $(".menu-button").click(function () {
    $(".site-nav").slideToggle(300);
  });

  // Close the mobile menu after a link is clicked
  $(".site-nav a").click(function () {
    if ($(window).width() <= 600) {
      $(".site-nav").slideUp(300);
    }
  });

  // Show the scroll-to-top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $("#top-button").fadeIn(300);
    } else {
      $("#top-button").fadeOut(300);
    }
  });

  // Scroll smoothly back to the top
  $("#top-button").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  // Homepage background pictures
  var backgrounds = [
    "images/other/banner01.jpg",
    "images/other/hero.jpg",
    "images/events/crowd.jpg",
    "images/events/article001.png",
    "images/events/article002.png",
    "images/events/article003.png"
  ];

  var currentBackground = 0;

  // Shows one background image
  function showBackground() {
    $(".hero-background").fadeOut(250, function () {
      $(this)
        .css("background-image", "url('" + backgrounds[currentBackground] + "')")
        .fadeIn(500);
    });
  }

  // Load the first background
  if ($(".hero-background").length && backgrounds.length > 0) {
    $(".hero-background").css(
      "background-image",
      "url('" + backgrounds[currentBackground] + "')"
    );
  }

  // Show the next background
  $("#next-bg").click(function () {
    currentBackground++;
    if (currentBackground >= backgrounds.length) {
      currentBackground = 0;
    }
    showBackground();
  });

  // Show the previous background
  $("#previous-bg").click(function () {
    currentBackground--;
    if (currentBackground < 0) {
      currentBackground = backgrounds.length - 1;
    }
    showBackground();
  });

  // Open artist image smoothly
  $(".artist-link").click(function (event) {
    event.preventDefault();

    var image = $(this).attr("href");
    var name = $(this).closest(".lineup-card").find("p").text();

    $("#lightbox-image").attr("src", image);
    $("#lightbox-name").text(name);
    $("#artist-lightbox").fadeIn(400);
  });

  // Close artist image smoothly
  $("#close-lightbox, #artist-lightbox").click(function (event) {
    if (event.target.id === "artist-lightbox" || event.target.id === "close-lightbox") {
      $("#artist-lightbox").fadeOut(400);
    }
  });

});
