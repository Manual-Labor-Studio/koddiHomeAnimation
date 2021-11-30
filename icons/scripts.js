const graph = new Freezeframe('#graphgif', {
    trigger: false
});

const pointer = new Freezeframe('#pointergif', {
    trigger: false
});

const moneycomp = new Freezeframe('#moneycompgif', {
    trigger: false
});

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