
//when page loads the gsap animations will be executed
// window.onload = function(){

window.onload = function (){
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    // This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded. This has Cross-browser support.
    window.scrollTo(0,0);
};

//initialise scroll trigger
gsap.from(".content-title", {
    scrollTrigger: {
        trigger: ".content-title",
        toggleActions: "play none play none"
    },
    y: 40,
    autoAlpha:0,
    opacity: 1,
    duration: 1,
}, "-=1");

gsap.from(".content-para", {
    scrollTrigger: {
        trigger: ".content-para",
        toggleActions: "play none play none"
    },
    y: 40,
    autoAlpha:0,
    opacity: 1,
    duration: 1,
    delay:0.2
}, "-=1");


gsap.from(".wrapper", {
    scrollTrigger: {
        trigger: ".wrapper",
        toggleActions: "play none play none"
    },
    x: 200,
    autoAlpha:0,
    opacity: 1,
    duration: 0.9,
});




gsap.from(".center-images", {
    scrollTrigger: {
        trigger: ".center-images",
    },
    x: -200,
    autoAlpha:0,
    opacity: 0,
    duration: 1
}, "-=1");


// };

gsap.from('.item', {autoAlpha:0, opacity:0, y:-100, duration:1.5});
