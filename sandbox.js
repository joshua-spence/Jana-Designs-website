
//First code structure for horizontal scroll
var firstImage = document.querySelector('.group1');
var secImage = document.querySelector('.group2');
var thirdImage = document.querySelector('.group3');

//This function adjusts the gap between photos when the window screen is resized
window.addEventListener("resize", () =>{

    var imgGap = screen.width - (screen.width - window.innerWidth);
    var widthResize = (screen.width -window.innerWidth) * -0.022;
    var heightResize = (screen.height - window.innerHeight) * 0.02;

    //Decreases or increases the size of the gap between each image bases on the width of the screen.
    secImage.style.transform = `translateX(${imgGap}px)`;
    thirdImage.style.transform = `translateX(${imgGap * 2}px)`;

    //When shrinking the height of the viweport it keeps the image centered
    firstImage.style.left = `${33.5 + heightResize}vw`;
    secImage.style.left = `${33.5 + heightResize}vw`;
    thirdImage.style.left = `${33.5 + heightResize}vw`;
});


// Transitions through the photos 
// var myIndex = 0;
// carousel();

// function carousel(){
//     var i;
//     var x = document.getElementsByClassName("photos");
//     for(i = 0; i < x.length; i++){
//         x[i].style.display = "none";
//     }
//     myIndex++;
//     if(myIndex > x.length) {myIndex = 1}
//     x[myIndex-1].style.display = "block";
//     setTimeout(carousel, 900);    
// }
