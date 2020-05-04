$(function(){

   new Typed('#typejs', {
    strings: ["Привет", "Мы веб-разработчики", "Мы веб-дизайнеры", "Мы <span>DoubleFF</span>"],
    typeSpeed: 60,
    smartBackspace: true,
    showCursor: true,
    loop: true,
    backSpeed: 60
  });

  $(".slider-quote").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: 3000,
  });
});