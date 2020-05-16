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

    /* Burger-menu */
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
                    titleText: "Спасибо",
                    icon: "success",
                    text: "Мы скоро с Вами свяжемся",
                });
                setTimeout(function () {
                    // Done Functions
                    th.trigger("reset");
                }, 1000);
            });
            return false;
        });
    });

    /* Scroll top */
    var topBtn = $("#top-btn");

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            topBtn.addClass("show");
        } else {
            topBtn.removeClass("show");
        }
    });

    topBtn.on("click", function (event) {
        event.preventDefault();
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            500
        );
    });

    /* Cursor */

    let elements = {
        mouseCursor: document.querySelector(".cursor"),
        navLinks: document.querySelectorAll(".menu__item a"),
        sections: document.querySelectorAll(".our-projects, .quote"),
        buttons: document.querySelectorAll(".btn"),
        contactBoxes: document.querySelectorAll(".contact-box"),
    };

    window.addEventListener("mousemove", cursor);

    function cursor(e) {
        elements.mouseCursor.style.top = e.pageY + "px";
        elements.mouseCursor.style.left = e.pageX + "px";
    }

    elements.navLinks.forEach((link) => {
        link.addEventListener("mouseover", () => {
            elements.mouseCursor.classList.add("link-grow");
            link.classList.add("hovered-link");
        });

        link.addEventListener("mouseleave", () => {
            elements.mouseCursor.classList.remove("link-grow");
            link.classList.remove("hovered-link");
        });
    });

    elements.buttons.forEach((btn) => {
        btn.addEventListener("mouseover", () => {
            if (btn.closest(".black")) {
                elements.mouseCursor.classList.remove("--white");
            } else {
                elements.mouseCursor.classList.add("link-grow--transparent");
            }
            // link.classList.add("hovered-link");
        });
        btn.addEventListener("mouseleave", () => {
            elements.mouseCursor.classList.remove("link-grow--transparent");

            elements.mouseCursor.classList.remove("link-grow");
            // mouseCursor.classList.add("--white");
            // link.classList.remove("hovered-link");
        });
    });

    elements.contactBoxes.forEach((box) => {
        box.addEventListener("mouseover", () => {
            elements.mouseCursor.classList.add("transparent-grow");
        });
        box.addEventListener("mouseleave", () => {
            elements.mouseCursor.classList.remove("transparent-grow");
        });
    });

    elements.sections.forEach((link) => {
        link.addEventListener("mouseover", () => {
            elements.mouseCursor.classList.add("--white");
            // link.classList.add("hovered-link");
        });
        link.addEventListener("mouseleave", () => {
            elements.mouseCursor.classList.remove("--white");
            // mouseCursor.classList.add("--white");
            // link.classList.remove("hovered-link");
        });
    });
});
