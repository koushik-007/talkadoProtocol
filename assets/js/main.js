(function ($) {
    "user strict";
    // Preloader Js
    // $(window).on('load', function () {
    //   $("[data-paroller-factor]").paroller();
    //   $('.preloader').fadeOut(1000);
    //   var img = $('.bg_img');
    //   img.css('background-image', function () {
    //     var bg = ('url(' + $(this).data('background') + ')');
    //     return bg;
    //   });
    // });
    $(document).ready(function () {
      // Nice Select
      $('.select-bar').niceSelect();
      // PoPuP 
      $('.popup').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,
        fixedContentPos: false,
        disableOn: 300
      });
      $("body").each(function () {
        $(this).find(".img-pop").magnificPopup({
          type: "image",
          gallery: {
            enabled: true
          }
        });
      });
      // aos js active
      new WOW().init()
     
      
      $('.menu li a').on('click', function (e) {
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
          element.removeClass('open');
          element.find('li').removeClass('open');
          element.find('ul').slideUp(300, "swing");
        } else {
          element.addClass('open');
          element.children('ul').slideDown(300, "swing");
          element.siblings('li').children('ul').slideUp(300, "swing");
          element.siblings('li').removeClass('open');
          element.siblings('li').find('li').removeClass('open');
          element.siblings('li').find('ul').slideUp(300, "swing");
        }
      })
      
      // Scroll To Top 
      var scrollTop = $(".scrollToTop");
      $(window).on('scroll', function () {
        if ($(this).scrollTop() < 500) {
          scrollTop.removeClass("active");
        } else {
          scrollTop.addClass("active");
        }
      });
      //Click event to scroll to top
      $('.scrollToTop').on('click', function () {
        $('html, body').animate({
          scrollTop: 0
        }, 500);
        return false;
      });
      //Header Bar
      $('.header-bar').on('click', function () {
        $(this).toggleClass('active');
        $('.overlay').toggleClass('active');
        $('.menu').toggleClass('active');
      })
      $('.overlay').on('click', function () {
        $(this).removeClass('active');
        $('.header-bar').removeClass('active');
        $('.menu').removeClass('active');
      })
      // Header Sticky Herevar prevScrollpos = window.pageYOffset;
      var scrollPosition = window.scrollY;
      if (scrollPosition >= 1) {
        $(".header-bottom").addClass('active');
        $(".header-section-2").removeClass('plan-header');
      }
      var header = $(".header-section");
      $(window).on('scroll', function () {
        if ($(this).scrollTop() < 1) {
          header.removeClass("active");
        } else {
          header.addClass("active");
        }
      });
      $('.sponsor-slider-4').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:2,
            },
            480:{
                items:3,
            },
            768:{
                items:5,
            },
            992:{
                items:6,
            },
            1200:{
                items:7,
            },
        }
      })
      
     
    });
  })(jQuery);
  