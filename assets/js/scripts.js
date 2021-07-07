/**
 * Scripts initializations
 *
 * @package NewsLab
 * @author Mosaddek from VectorLab
 */

;(function ($) {
    "use strict";

    function initLoginForm() {
        var $regBtn = $("#reg-btn"),
            $loginBtn = $("#login-btn"),
            $fpBtn = $("#fp-btn"),
            $back = $("#back"),

            $loginFormWrap = $(".login-form-wrap"),
            $regFormWrap = $(".reg-form-wrap"),
            $forgetFormWrap = $(".forgot-pwd-form-wrap");

        $regBtn.on("click", function(){
            $loginFormWrap.hide();
            $regFormWrap.show();
        });

        $loginBtn.on("click", function(){
            $loginFormWrap.show();
            $regFormWrap.hide();
        });

        $fpBtn.on("click", function(){
            $forgetFormWrap.show();
            $loginFormWrap.hide();
        });

        $back.on("click", function(){
            $loginFormWrap.show();
            $forgetFormWrap.hide();
        });
    }

    $(function() {
        /* ---------------------------------------------
        pre header mobile view
        --------------------------------------------- */
        $("#short-link-toggle").on("click", function(){
            $(".short-link").toggle("slow");
        });

        /* ---------------------------------------------
        login page
        --------------------------------------------- */
        initLoginForm();

        /* ---------------------------------------------
        nav init
        --------------------------------------------- */
        $(".mobile").on("click", function(e) {
            e.preventDefault();
            $(".main-nav").slideToggle();
        });

        $(".main-nav > li > ul").each(function() {
            var $this = $(this);
            $this.find("ul").prev("a").append("<i class=\"fa fa-angle-right\"></i>");
        });

        function navMobile() {
            var $mainNav = $(".main-nav");
            // initial hide
            $mainNav.hide();

            $(".main-nav > li ul").each(function() {
                $(this).prev().addClass("js-hasDrowdown");
            });

            $mainNav.on("click.mobileLink", ".js-hasDrowdown", function(e) {
                e.preventDefault();
                var $this = $(this);
                $this.parent().toggleClass("open");
                $this.next("ul").slideToggle();
            });
        }

        function navLaptop() {
            var $mainNav = $(".main-nav");

            $mainNav.show();

            $(".main-nav > li ul").each(function() {
                var $this = $(this);
                $this.prev().removeClass("js-hasDrowdown");
                $this.removeAttr("style");
            });

            $mainNav.off("click.mobileLink");
        }

        // if Mobile
        var screen = 992;
        var windowHeight, windowWidth;

        // windowSize
        // call this function to get windowSize any time
        function windowSize() {
            var $window = $(window);
            windowHeight = window.innerHeight ? window.innerHeight : $window.height();
            windowWidth = window.innerWidth ? window.innerWidth : $window.width();
        }
        windowSize();

        if ((windowWidth < screen)) {
            navMobile();
        }

        // get window size on window resize
        $(window).resize(function() {
            windowSize();
            if (windowWidth < screen) {
                navMobile();
            } else {
                navLaptop();
            }
        });

        /* ---------------------------------------------
        breaking News
        --------------------------------------------- */
        $("#bn1").breakingNews({
            effect		:"slide-h",
            autoplay	:true,
            timer		:3000,
            color		:"red"
        });


        /* ---------------------------------------------
        grid view
        --------------------------------------------- */
        var $brickWrapper = $(".js-brick-wrapper"),
        $brickFigures = $brickWrapper.find(".Brick__figure");

        $brickWrapper.masonry({
            // options
            itemSelector: ".Brick",
            percentPosition: true,
            columnWidth: ".Brick--small"
        });

        $brickFigures.each(function(index, figure) {
            var $figure = $(figure),
            src = $figure.data("src");

            if (src) {
                $figure.css({
                    backgroundImage: "url(\"" + src + "\")"
                });
            }
        });

        /* ---------------------------------------------
        owl carousel
        --------------------------------------------- */
        var $sliderNews = $(".slider-news");
        $sliderNews.owlCarousel({
            margin: 10,
            nav: true,
            loop: true,
            autoplay: true,
            responsive: {
                0: {items: 1},
                600: {items: 2},
                1000: {items: 3}
            }
        });

        var $galNews = $(".gal-news");
        $galNews.owlCarousel({
            margin: 10,
            nav: true,
            loop: true,
            autoplay: true,
            responsive: {
                0: {items: 1},
                600: {items: 1},
                1000: {items: 1}
            }
        });

        /* ---------------------------------------------
        Back To Top
        --------------------------------------------- */
        $("body").append("<a id=\"tb-scroll-to-top\" data-scroll class=\"tb-scroll-to-top-hide\" href=\"#\"><i class=\"fa fa-angle-up\"></i></a>");

        var $tbScrollBack = $("#tb-scroll-to-top");
        $(window).on("scroll", function() {
            if($(this).scrollTop() > 250 ) {
                $tbScrollBack
                .addClass("tb-scroll-to-top-show")
                .removeClass("tb-scroll-to-top-hide");
            } else {
                $tbScrollBack
                .addClass("tb-scroll-to-top-hide")
                .removeClass("tb-scroll-to-top-show");
            }
        });

        $tbScrollBack.on("click", function(e){
            e.preventDefault();
            $("html,body").animate({
                scrollTop: 0
            }, 400 );
        });

    });

})(jQuery);
