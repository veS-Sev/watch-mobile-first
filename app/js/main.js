$(function () {

  var mySwiper = new Swiper('.head__slider', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

  });

  $('.header__menu-btn').on('click', function () {
    $('.header__menu-btn').toggleClass('btn-active');
    if ($('.header__menu-btn').hasClass('btn-active')) {
      $('.header__menu-items').css("display", "block")
    } else {
      $('.header__menu-items').css("display", "none")
    }

  });

  var swiper = new Swiper('.popular__galery', {
    slidesPerView: 'auto',
       centeredSlides: false,
    spaceBetween: 10,
    grabCursor: true,
    freeMode: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

})