(function(){
  var heroSwiper = new Swiper('.hero__container', {
    preloadImages: false,
    lazy: true,
    loop: true,

    pagination: {
      el: '.hero__pagination',
    },

    navigation: {
      nextEl: '.hero__next',
      prevEl: '.hero__prev',
    },
  })
}());
