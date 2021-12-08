const stills = document.querySelectorAll(".still-gif");
const gifs = document.querySelectorAll(".gif");
var idx;

for(var i=0; i<stills.length; i++) {
    stills[i].addEventListener("mouseenter", function(e) {
        idx = [].indexOf.call(stills, e.target);
        stills[idx].classList.add("paused");
        gifs[idx].classList.remove("paused");
    });
    gifs[i].addEventListener("mouseleave", function(){
        gifs[idx].classList.add("paused");
        stills[idx].classList.remove("paused");
    });
}