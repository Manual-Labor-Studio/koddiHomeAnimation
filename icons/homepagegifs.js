const stills = document.querySelectorAll(".still-gif");
const gifs = document.querySelectorAll(".gif");


function pauseGif(i) {
    gifs[i].classList.add("paused");
    stills[i].classList.remove("paused");
}   

function loopGif(i,t) {
    stills[i].classList.add("paused");
    gifs[i].classList.remove("paused");
    setTimeout(function(){pauseGif(i)},t);
}

function loop() {
    setTimeout(function(){
        loopGif(0,1300)
    }, 1000);
    
    // start pointer animation 
    setTimeout(function(){
        loopGif(1, 1000);
    }, 6000);
    
    // start computer animation 
    setTimeout(function(){
        loopGif(2, 1400)
    }, 11000);
}

// start graph animation (maybe start on scroll once it comes in view eventually?)
loop();
setInterval(loop,17000);