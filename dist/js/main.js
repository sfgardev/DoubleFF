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
    // $("body").toggleClass("lock");
  });

  $(".menu__link").on("click", function() {
    $("#burger, #menu").removeClass("active");
  });

  new WOW().init();

   //E-mail Ajax Send
   $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

});