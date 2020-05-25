//Load effect, picture slides up from the bottom of the screen.
var photoContainer = document.querySelector('.project1');

window.addEventListener('load', slideUp);

photoContainer.style.bottom = '-800px';

function slideUp(){
    if (parseInt(photoContainer.style.bottom) <= -360){
        photoContainer.style.position = 'relative';
        photoContainer.style.bottom = parseInt(photoContainer.style.bottom) + 10 + 'px';

        setTimeout(slideUp, 10);
    }

    else if (parseInt(photoContainer.style.bottom)>= -360 && parseInt(photoContainer.style.bottom) <= -160){
        photoContainer.style.position = 'relative';
        photoContainer.style.bottom = parseInt(photoContainer.style.bottom) + 8 + 'px';

        setTimeout(slideUp,12);
    }

    else if(parseInt(photoContainer.style.bottom) >= -160 && parseInt(photoContainer.style.bottom) <= -60){
        photoContainer.style.position = 'relative';
        photoContainer.style.bottom = parseInt(photoContainer.style.bottom) + 6 + 'px';

        setTimeout(slideUp, 14);

    }
    else if (parseInt(photoContainer.style.bottom) >= -60 && parseInt(photoContainer.style.bottom) <= -30) {
        photoContainer.style.position = 'relative';
        photoContainer.style.bottom = parseInt(photoContainer.style.bottom) + 4 + 'px';

        setTimeout(slideUp, 16);

    }
    

}

// Transitions through the photos 
var myIndex = 0;
carousel();

function carousel(){
    var i;
    var x = document.getElementsByClassName("photos");
    for(i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    myIndex++;
    if(myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 900);    
}
