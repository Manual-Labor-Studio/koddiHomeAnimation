var leadspace = document.querySelectorAll('.leadspace');
var text = document.querySelectorAll('.text');
var svgs = document.querySelectorAll('.leadspace svg');
var leadspace_width = leadspace[1].offsetWidth;
var left = leadspace_width/2 - 17;
var previous = 0;
var width = window.innerWidth;
var index = 0;
var eventListener = false;

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

function hide_text(l) {
    text[previous].classList.add("hide");
    setTimeout(function(){
        text[index].classList.remove("hide");
    },l);
}

function desktop() {
    leadspace.forEach(item => {
        item.classList.remove("no-height");
        item.addEventListener('click', function(){
            index = [].indexOf.call(leadspace, item);
            if(index != previous) {
                item.classList.add("expand");
                leadspace[previous].classList.remove("expand");
                svgs[previous].classList.remove("clicked");
                svgs[index].classList.add("clicked");
                hide_text(800);
                previous = index;
            }
        });
    });
}

function mobile_event(e) {
    index = [].indexOf.call(svgs, e.target.parentNode);
    leadspace[previous].classList.add("no-height");
    leadspace[index].classList.remove("no-height");
    svgs[previous].classList.remove("clicked");
    svgs[index].classList.add("clicked");
    hide_text(200);
    previous = index;
}

function mobile() {
    svgs.forEach(item => {
        if(eventListener == false) {
            item.addEventListener('click', mobile_event);
        }
    });
    eventListener = true;
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

    if (width>768) {
        if(eventListener) {
            svgs.forEach(item => {
                item.removeEventListener('click', mobile_event);
            });
            eventListener=false;
        }

        leadspace.forEach(item => {
            item.classList.remove("no-height");
        });
        desktop();
    }
    else {
        for(var x=0; x<3; x++) {
            if(x!=index) {
                leadspace[x].classList.add("no-height");
            }
        }
        mobile();
    }
    svg_margin();
}
  
window.onresize = reportWindowSize;
window.onload = reportWindowSize;