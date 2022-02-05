document.addEventListener('DOMContentLoaded', function() {

  const showSwiper = new Swiper('.showcase-carousel', {
    loop: true,
    slidesPerView: 3,
    speed: 1800,
    centeredSlides: true 
  })

  document.querySelector('video').playbackRate = 2;
})
