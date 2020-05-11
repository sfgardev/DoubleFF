$(function () {
  /* Typing */
  new Typed("#typejs", {
    strings: [
      "Привет",
      "Мы веб-разработчики",
      "Мы веб-дизайнеры",
      "Мы <span>DoubleFF</span>",
    ],
    typeSpeed: 60,
    smartBackspace: true,
    showCursor: true,
    loop: true,
    backSpeed: 60,
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
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    var elementId = $(this).data("scroll");
    var ellementOffset = $(elementId).offset().top;

    $("html, body").animate(
      {
        scrollTop: ellementOffset,
      },
      800
    );
  });

  $("#burger").on("click", function () {
    $("#burger, #menu").toggleClass("active");
    // $("body").toggleClass("lock");
  });

  $(".menu__link").on("click", function () {
    $("#burger, #menu").removeClass("active");
  });

  new WOW().init();

  // //E-mail Ajax Send
  // $("form").submit(function () {
  //   //Change
  //   var th = $(this);
  //   $.ajax({
  //     type: "POST",
  //     url: "mail.php", //Change
  //     data: th.serialize(),
  //   }).done(function () {
  //     alert("Thank you!");
  //     setTimeout(function () {
  //       // Done Functions
  //       th.trigger("reset");
  //     }, 1000);
  //   });
  //   return false;
  // });

  $("#form").submit(function (e) {
    var popup = $("#popup_text");
    e.preventDefault();
    $.ajax({
      url: "/mail.php",
      type: "POST",
      data: $("#form").serialize(),
      success: function (response) {
        //обработка успешной отправки
        alert("Ваше сообщение успешно отправлено!");

        $("#form-first_name").val("");
        $("#form-email").val("");
        $("#form-text").val("");
      },
      error: function (response) {
        //обработка ошибок при отправке
        alert("Возникла ошибка и Ваше письмо не отправилось!");
      },
    });
  });

  var btn = $("#top-btn");

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop:0
    }, 500);
  });

  let mouseCursor = document.querySelector(".cursor");
  let navLinks = document.querySelectorAll(".menu__item a");
  let projectSection = document.querySelector(".our-projects");
  let quotesSection = document.querySelector(".quote");
  let buttons = document.querySelectorAll(".btn");
  let contactBoxes = document.querySelectorAll(".contact-box");

  window.addEventListener("mousemove", cursor);

  function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
  }

  navLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
      mouseCursor.classList.add("link-grow");
      link.classList.add("hovered-link");
    });
    link.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("link-grow");
      link.classList.remove("hovered-link");
    });
  });

  contactBoxes.forEach((link) => {
    link.addEventListener("mouseover", () => {
      mouseCursor.classList.add("link-grow");
      link.classList.add("hovered-link");
    });
    link.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("link-grow");
      link.classList.remove("hovered-link");
    });
  });

  [quotesSection, projectSection].forEach((section) => {
    section.addEventListener("mouseover", () => {
      mouseCursor.classList.add("--white");
    });
    section.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("--white");
    });
  });

  buttons.forEach((button) => {
    button.addEventListener("mouseover", () => {
      mouseCursor.classList.add("link-grow");
      mouseCursor.classList.add("--white");
    });
    button.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("link-grow");
      mouseCursor.classList.remove("--white");
    });
  });
});
