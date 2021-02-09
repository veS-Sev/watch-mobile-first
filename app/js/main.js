$(function () {

  var mySwiper = new Swiper('.head__slider', {
    slidesPerView: 1,
    effect: 'fade',
    direction: 'vertical',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },

  });

  $('.header__menu-btn').on('click', function () {
    $('.header__menu-btn').toggleClass('btn-active');
    if ($('.header__menu-btn').hasClass('btn-active')) {
      $('.header__menu-items').css("display", "block")
    } else {
      $('.header__menu-items').css("display", "none")
    }

  });

  var catalogSlider = null;
  var mediaQuerySize = 1279;

  function catalogSliderInit() {
    if (!catalogSlider) {
      catalogSlider = new Swiper('.popular__galery', {
        slidesPerView: 'auto',
        centeredSlides: false,
        spaceBetween: 10,
        grabCursor: true,
        freeMode: true,
        loop: true,
        breakpoints: {
          // when window width is >= 768px
          768: {
            spaceBetween: 50
          },
        }
      });
    }
  };

  function catalogSliderDestroy() {
    if (catalogSlider) {
      catalogSlider.destroy();
      catalogSlider = null;
    }
  };

  $(window).on('load resize', function () {
    // Берём текущую ширину экрана
    var windowWidth = $(this).innerWidth();

    // Если ширина экрана меньше или равна mediaQuerySize(1024)
    if (windowWidth <= mediaQuerySize) {
      // Инициализировать слайдер если он ещё не был инициализирован
      catalogSliderInit()
    } else {
      // Уничтожить слайдер если он был инициализирован
      catalogSliderDestroy()
    }
  });
  // 

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