
//when page loads the gsap animations will be executed
window.onload = function(){
    //initialise scroll trigger
gsap.from(".content-title", {
    scrollTrigger: {
        trigger: ".content-title",
    },
    y: 40,
    opacity: 0.5,
    duration: 1,
}, "-=1");

gsap.from(".content-para", {
    scrollTrigger: {
        trigger: ".content-para",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    delay:0.2
}, "-=1");


gsap.from(".wrapper", {
    scrollTrigger: {
        trigger: ".wrapper",
    },
    x: 200,
    opacity: 0,
    duration: 1,
    delay: 0.5,
}, "-=1");




gsap.from(".center-images", {
    scrollTrigger: {
        trigger: ".center-images",
    },
    y: 200,
    opacity: 0,
    duration: 1,
    delay: 0.3
}, "-=1");


};

