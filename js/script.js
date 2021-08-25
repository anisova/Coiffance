const resultSwiper = new Swiper('.result-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slideToClickedSlide: true,
    slidesPerView: 3,
    spaceBetween: 30,
    autoHeight:true,
    // slideClass:'slide',
    // wrapperClass:'slider__wrap',    
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    //   type: 'bullets',
    //   dynamicBullets: true, 
    // },  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
const swiperPrev = document.querySelector('.result-slider__prev');
const swiperNext = document.querySelector('.result-slider__next');
swiperPrev.addEventListener('click', () => {
  resultSwiper.slidePrev();
})
swiperNext.addEventListener('click', () => {
  resultSwiper.slideNext();
})