new Swiper('.item-slider', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 0,
  centeredSlides: false,

  autoplay: {
    delay: 3000, 
    disableOnInteraction: false, 
  },


  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
  },

  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },


  loopedSlides: 4, 
  watchSlidesProgress: true,

  breakpoints: {
      0: {
          slidesPerView: 1
      },

      360: {
          slidesPerView: 2
      },

      720: {
          slidesPerView: 3
      },
      1024: {
          slidesPerView: 4
      },
  }
});
