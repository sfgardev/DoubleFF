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
        $("body").toggleClass("lock");
    });

    $(".menu__link").on("click", function () {
        $("#burger, #menu").removeClass("active");
        $("body").removeClass("lock");
    });

    new WOW().init();

    /* Send form */
    $(document).ready(function () {
        //E-mail Ajax Send
        $("form").submit(function () {
            //Change
            var th = $(this);
            $.ajax({
                type: "POST",
                url: "mail.php", //Change
                data: th.serialize(),
            }).done(function () {
                new Swal({
                    title: "Спасибо",
                    icon: "success",
                });
                setTimeout(function () {
                    // Done Functions
                    th.trigger("reset");
                }, 1000);
            });
            return false;
        });
    });

    // /* SweetAlert */
    // new Swal({
    //     title: "Спасибо",
    //     icon: "success",
    // });
    

    var btn = $("#top-btn");

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass("show");
        } else {
            btn.removeClass("show");
        }
    });

    btn.on("click", function (event) {
        event.preventDefault();
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            500
        );
    });

    let mouseCursor = document.querySelector(".cursor");
    let navLinks = document.querySelectorAll(".menu__item a");
    let projectSection = document.querySelector(".our-projects");
    let quotesSection = document.querySelector(".quote");
    let buttons = document.querySelectorAll(".btn");
    let btnsEffect = document.querySelectorAll(".btn");
    let contactBoxes = document.querySelectorAll(".contact-box");

    window.addEventListener("mousemove", cursor);

    function cursor(e) {
        mouseCursor.style.top = e.pageY + "px";
        mouseCursor.style.left = e.pageX + "px";
    }

    navLinks.forEach((link) => {
        link.addEventListener("mouseover", () => {
            mouseCursor.classList.add("link-grow--black");
            link.classList.add("hovered-link");
        });
        link.addEventListener("mouseleave", () => {
            mouseCursor.classList.remove("link-grow--black");
            link.classList.remove("hovered-link");
        });
    });

    btnsEffect.forEach((link) => {
        link.addEventListener("mouseover", () => {
            mouseCursor.classList.add("link-grow--transparent");
            mouseCursor.classList.remove("--white");
            // link.classList.add("hovered-link");
        });
        link.addEventListener("mouseleave", () => {
            mouseCursor.classList.remove("link-grow--transparent");
            // mouseCursor.classList.add("--white");
            // link.classList.remove("hovered-link");
        });
    });

    contactBoxes.forEach((link) => {
        link.addEventListener("mouseover", () => {
            mouseCursor.classList.add("link-grow");
            mouseCursor.classList.remove("--white");
            // link.classList.add("hovered-link");
        });
        link.addEventListener("mouseleave", () => {
            mouseCursor.classList.remove("link-grow");
            // mouseCursor.classList.add("--white");
            // link.classList.remove("hovered-link");
        });
    });

    // [quotesSection, projectSection].forEach((section) => {
    //   section.addEventListener("mouseover", () => {
    //     mouseCursor.classList.add("--white");
    //   });
    //   section.addEventListener("mouseleave", () => {
    //     mouseCursor.classList.remove("--white");
    //   });
    // });

    // buttons.forEach((button) => {
    //   button.addEventListener("mouseover", () => {
    //     mouseCursor.classList.add("link-grow");
    //     mouseCursor.classList.add("--white");
    //   });
    //   button.addEventListener("mouseleave", () => {
    //     mouseCursor.classList.remove("link-grow");
    //     mouseCursor.classList.remove("--white");
    //   });
    // });
});
