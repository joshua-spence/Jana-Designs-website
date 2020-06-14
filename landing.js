var mySwiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  loop: true,
});

//when the slide buttons are pressed the index number is saved in local storage
const swiperCont = document.querySelector('.swiper-container');
swiperCont.addEventListener('click', () =>{

  const activeIndex = mySwiper.activeIndex;
  localStorage.setItem('activeIndex', activeIndex);
});

if(localStorage.getItem('activeIndex')){
  mySwiper.slideTo(localStorage.getItem('activeIndex'), 0, false);
};


//when page loads the gsap animations will be executed 
window.onload = function(){
  gsap.from('.landing-title', {opacity:0, ease: 'power2', x: -100, delay: 1, duration: 1 });
  gsap.from('.swiper-project-slide', {autoAlpha:0, opacity: 1, ease: 'power2', x: 80, delay: 0.5, duration: 1});
  gsap.from('.logo-top-left', {opacity:0, delay: 2, duration: 1.5, ease: 'power1' });
  gsap.from('.aboutMe-bottom-left', {opacity:0, delay: 2, duration: 1.5, ease: 'power1' });
  gsap.from('.contactMe-bottom-right', {opacity:0, delay: 2, duration: 1.5, ease: 'power1' });
};


//slide buttons initiate title and image effects
$(".swiper-button-prev").click(function() {

  gsap.from('.landing-title', {x: -20, duration: 1});
  gsap.from('.swiper-project-slide', {x: -20, duration: 1});

});

$(".swiper-button-next").click(function() {

  gsap.from('.landing-title', {x: 20, duration: 1});
  gsap.from('.swiper-project-slide', {x: 20, duration: 1});

});





