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
    breakpoints: {
      // when window width is >= 768px
          768: {
                spaceBetween: 50
      }
    }
  });

  $("#video-open").on('click', function () {
    $(".watch__banner-inner").addClass('video-active-box');
  })

  $("#video-close").on('click', function () {
    $(".watch__banner-video-box").addClass("video-close-box");
    setTimeout(function () {
      $(".watch__banner-video-box").removeClass("video-close-box");
      $(".watch__banner-inner").removeClass('video-active-box');

    }, 2500)
  });

})