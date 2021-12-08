const graph = new Freezeframe('#graphgif', {
    trigger: false
});

const pointer = new Freezeframe('#pointergif', {
    trigger: false
});

const moneycomp = new Freezeframe('#moneycompgif', {
    trigger: false
});

const k401 = new Freezeframe('#k401gif', {
    trigger: false
});

const arrow = new Freezeframe('#arrowgif', {
    trigger: false
});

var gif_times = {
    "k401gif": 1500,
    "arrowgif": 1500
};

var gif_ff = {
    "k401gif": k401,
    "arrowgif": arrow
}

var gifs = document.querySelectorAll(".gif");

for(var i=0; i<gifs.length; i++) {
    gifs[i].addEventListener("mouseover", function(e) {
        var id = e.target.id;
        loopGif(gif_ff[id], gif_times[id]);
    });
}

function pauseGif(gif) {
    gif.stop();
}   

function loopGif(gif,t) {
    gif.start();
    setTimeout(function(){pauseGif(gif)},t);
}







// start graph animation (maybe start on scroll once it comes in view eventually?)
setTimeout(function(){
    loopGif(graph,3000);
    setInterval(function(){loopGif(graph,3000)},14000);
}, 1000);

// start pointer animation 
setTimeout(function(){
    loopGif(pointer, 1700);
    setInterval(function(){loopGif(pointer, 1700)}, 14000);
}, 6000);

// start computer animation 
setTimeout(function(){
    loopGif(moneycomp, 1800)
    setInterval(function(){loopGif(moneycomp,1800)}, 14000);
}, 11000);