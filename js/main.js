$(function () {
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
});
