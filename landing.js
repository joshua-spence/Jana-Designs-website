var mySwiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  loop: true,
});

//when the slide buttons are pressed the index number is saved in local storage
const swiperRight = document.querySelector('.swiper-button-next');
const swiperLeft = document.querySelector('.swiper-button-prev');

swiperRight.addEventListener('click', () =>{

  const activeIndex = mySwiper.activeIndex;
  localStorage.setItem('activeIndex', activeIndex);
});


swiperLeft.addEventListener('click', () =>{

  const activeIndex = mySwiper.activeIndex;
  localStorage.setItem('activeIndex', activeIndex);
});


if(localStorage.getItem('activeIndex')){
  mySwiper.slideTo(localStorage.getItem('activeIndex'), 0, false);
};


//when page loads the gsap animations will be executed 
window.onload = function(){
  gsap.from('.landing-title', {autoAlpha: 0, x:-50, duration:0.5, delay:1});
  gsap.from('.landing-photo-link', {autoAlpha:0, y:200, duration:1, delay: 0.2});
  gsap.from('.logo-top-left', {y:50, duration:1.2});
  gsap.from('.portfolio-bottom-left', {opacity:0, y:20, duration:1});
  gsap.from('.contactMe-bottom-right', {opacity:0, y:20, duration:1});
};
//ease: 'power1

//slide buttons initiate title and image effects
$(".swiper-button-prev").click(function() {

  gsap.from('.landing-title', {x: -20, duration: 1});
  gsap.from('.swiper-slide', {x: -20, duration: 1});

});

$(".swiper-button-next").click(function() {

  gsap.from('.landing-title', {x: 20, duration: 1});
  gsap.from('.swiper-slide', {x: 20, duration: 1});

});





