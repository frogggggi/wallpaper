// Это - ваша точка входа для скриптов страницы. Импортируйте сюда нужные вам файлы.

// add custom js below
// import Swiper from './swiper-bundle.min';

// sliders for product page
const swiper1 = new Swiper(".homeSwiper", {
  init: false,
  initialSlide: -1,
  slidesPerView: 'auto',
  spaceBetween: 0,
  speed: 1000,
  loopPreventsSlide: false,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  roundLengths: true,
  slideToClickedSlide: true,
  pagination: {
    el: ".home-slider-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".home-slider-next",
    prevEl: ".home-slider-prev",
  },
});

const swiper2 = new Swiper(".offers__js", {
  init: false,
  initialSlide: 0,
  slidesPerView: 'auto',
  slidesOffsetAfter: 0,

  spaceBetween: 30,
  speed: 1000,
  loop: false,
  grabCursor: true,
  slideToClickedSlide: true,
  pagination: {
    el: ".offers_section .offers-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".offers_section .offers-button-next",
    prevEl: ".offers_section .offers-button-prev",
  },
});

const swiper3 = new Swiper(".collections__js", {
  init: false,
  slidesPerView: 4,
  slidesOffsetAfter: 0,
  initialSlide: 0,
  spaceBetween: 30,
  speed: 1000,
  loop: false,
  grabCursor: true,
  slideToClickedSlide: true,
  pagination: {
    el: ".collections_section .offers-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".collections_section .offers-button-next",
    prevEl: ".collections_section .offers-button-prev",
  },
});

const swiper4 = new Swiper(".collection__js", {
  init: false,
  initialSlide: 0,
  slidesPerView: 'auto',
  slidesOffsetAfter: 0,

  spaceBetween: 30,
  speed: 1000,
  loop: false,
  grabCursor: true,
  slideToClickedSlide: true,
  pagination: {
    el: ".collection-section .offers-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".collection-section .offers-button-next",
    prevEl: ".collection-section .offers-button-prev",
  },
  breakpoints: {
    320: {
      centeredSlides: true,
      centeredSlidesBounds: false,
      spaceBetween: 12,
      loop: true,
    },
    768: {
      centeredSlides: false
    },
  }
});

const swiper5 = new Swiper(".partition__js", {
  init: false,
  slidesPerView: 3,
  slidesOffsetAfter: 0,
  spaceBetween: 0,
  speed: 1000,
  loop: false,
  slideToClickedSlide: true,
  pagination: {
    el: ".partition_section .offers-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".partition_section .offers-button-next",
    prevEl: ".partition_section .offers-button-prev",
  },
});

window.addEventListener('load', () => {
  swiper1.init();
  swiper2.init();
  swiper3.init();
  swiper4.init();
  swiper5.init();

}, false);

go();
window.addEventListener('resize', function() {
  go();
});
function go(){
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
  let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1080px)');
  if(mobile.matches) {
    swiper5.enable ();
  } else if(tablet.matches) {
    swiper5.enable ();
  } else {
    swiper5.disable ();
  }
};