        var swiper3 = new Swiper('.swiper-container1', {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      navigation: {
        nextEl: '.Btn-next',
        prevEl: '.Btn-prev',
      },
    });

    var swiper4 = new Swiper('.swiper-container2', {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.Btn-next',
        prevEl: '.Btn-prev',
      },
    });
    swiper3.controller.control = swiper4;
    swiper4.controller.control = swiper3;