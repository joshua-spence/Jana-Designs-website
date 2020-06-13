var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  loop: true,
});


gsap.from('.landing-title', {opacity:0, ease: 'power2', x: -100, delay: 1, duration: 1 });
gsap.from('.swiper-project-slide', {opacity: 0, ease: 'power2', x: 80, delay: 0.5, duration: 1});
gsap.from('.logo-top-left', {opacity:0, delay: 0.2, duration: 1, ease: 'power1' });
gsap.from('.aboutMe-bottom-left', {opacity:0, delay: 0.2, duration: 1.5, ease: 'power1' });
gsap.from('.contactMe-bottom-right', {opacity:0, delay: 0.2, duration: 1.5, ease: 'power1' });



$(".swiper-button-prev").click(function() {

  gsap.from('.landing-title', {x: -20, duration: 1});
  gsap.from('.swiper-project-slide', {x: -20, duration: 1});

});

$(".swiper-button-next").click(function() {

  gsap.from('.landing-title', {x: 20, duration: 1});
  gsap.from('.swiper-project-slide', {x: 20, duration: 1});

});