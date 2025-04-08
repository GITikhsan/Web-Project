new Swiper('.item-slider', {
  loop: true,
  spaceBetween: 30,

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
      720: {
          slidesPerView: 2
      },
      1024: {
          slidesPerView: 3
      },
  }
});
