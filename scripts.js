var leadspace = document.querySelectorAll('.leadspace');
var text = document.querySelectorAll('.text');
var svgs = document.querySelectorAll('.leadspace svg');
var leadspace_width = leadspace[1].offsetWidth;
var left = leadspace_width/2 - 17;
var previous = 0;
var width = window.innerWidth;
var index;

function svg_margin() {
    var margin = 30;
    svgs.forEach(item => {
        if(width>768) {
            item.style["margin-left"] = left.toString() + "px";
        }
        else {
            item.style["margin-left"] = margin.toString() + "px";
            margin += 32;
        }
    });
}

function hide_text() {
    text[previous].classList.add("hide");
    setTimeout(function(){
        text[index].classList.remove("hide");
    },800);
}

if(width>768) {
    leadspace.forEach(item => {
        item.addEventListener('click', function(){
            index = [].indexOf.call(leadspace, item);
            if(index != previous) {
                item.classList.add("expand");
                leadspace[previous].classList.remove("expand");
                svgs[previous].classList.remove("clicked");
                svgs[index].classList.add("clicked");
                hide_text();
                previous = index;
            }
        });
    });
}

else {
    svgs.forEach(item => {
        item.addEventListener('click', function(){
            index = [].indexOf.call(svgs, item);
            leadspace[previous].classList.add("hide");
            hide_text();
            previous = index;
        });
    });
}

function reportWindowSize() {
    width = window.innerWidth;
    var idx;
    for(var x=0; x<3; x++) {
        if(x!=previous && x!=index) {
            idx = x;
        }
    }
    leadspace_width = leadspace[idx].offsetWidth;
    left = leadspace_width/2 - 17;
    svg_margin();
}
  
window.onresize = reportWindowSize;
window.onload = reportWindowSize;