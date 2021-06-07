$(function () {
  
  $('.menu__btn, .menu a').on('click', function () {
    $('.header__top-logo').toggleClass('header__top-logo--active');
    $('.header__top-menu-items').toggleClass('header__top-menu-items--active');
  });

  $('.header__top-menu-link').on('click', function () {
    $('.header__top-menu-link').removeClass('header__top-menu-link--active');
    $(this).addClass('header__top-menu-link--active');
  });

  jQuery(function () {
    jQuery("#P1").YTPlayer();
  });

  window.onscroll = function () {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 10) {
      $(".header__top").css({ "background": "rgb(255, 255, 255)" })
    }
    if (10 > scrolled) {
      $(".header__top").css({ "background": "transparent" })
    }
  }

  $('.reviews__items').slick({
    dots: true,
    infinite: true,
    speed: 300,
    fade: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    focusOnSelect: true,
  });


  $(document).ready(function () {
    $("#menu").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 1500);
    });
  });

  $(document).ready(function () {
    $("#header__content").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 1500);
    });
  });
  
});