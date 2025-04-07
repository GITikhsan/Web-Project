new Swiper('.item-slider', {
    loop: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // responsive
    breakpoints:{
        0:{
            slidesPreview: 1
        },
        720:{
            slidesPreview: 2
        },
        1024:{
            slidesPreview: 3
        },
    },


  });