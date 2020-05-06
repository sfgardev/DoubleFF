$(function(){

  /* Typing */
   new Typed('#typejs', {
    strings: ["Привет", "Мы веб-разработчики", "Мы веб-дизайнеры", "Мы <span>DoubleFF</span>"],
    typeSpeed: 60,
    smartBackspace: true,
    showCursor: true,
    loop: true,
    backSpeed: 60
  });

  /* Slider */
  $(".slider-quote").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: 3000,
  });

  /* Scroll */
  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    
    var elementId = $(this).data('scroll');
    var ellementOffset = $(elementId).offset().top;

    $("html, body").animate({
      scrollTop: ellementOffset
    }, 800);
  });

  $("#burger").on("click", function() {
    $("#burger, #menu").toggleClass("active");
  });

  $(".menu.active .menu__link").on("click", function() {
    $("#menu").removeClass("active");
  });

});