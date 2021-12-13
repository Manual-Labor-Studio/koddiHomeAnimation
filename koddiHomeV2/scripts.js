var width = window.innerWidth;
var desktopVersion = document.getElementById("desktop");
var mobileVersion = document.getElementById("mobile");
var leadspace = document.querySelectorAll('.leadspace');
var desktop_svgs = document.querySelectorAll('.leadspace svg');
var mobile_svgs = document.querySelectorAll('.mobile-svgs svg');
var text = document.querySelectorAll('.text');
var mobileSlide = document.getElementById('mobile-slide');
var mobileh1 = document.getElementById("mobile-h1");
var mobileh3 = document.getElementById("mobile-h3");
var mobileh1Text = ["Own the Entire Advertising Experience","We Succeed, Together","Our Teams Have Superpowers"];
var mobileh3Text = ["Let’s redefine what business intelligence can do for you","Learn how our customers win — in their words","See our people-first approach in action"];
var leadspace_width = getComputedStyle(leadspace[1]).width;
var leadspace_width_int = parseInt(leadspace_width.replace( /[^\d.]/g, '' ));
var left = leadspace_width/2 - 17;
var eventListener = false;
var index = 0;
var previous = 0;

function svg_margin() {
    desktop_svgs.forEach(item => {
        item.style["margin-left"] = left.toString() + "px";
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
        item.addEventListener('click', function(){
            index = [].indexOf.call(leadspace, item);
            if(index != previous) {
                item.classList.add("expand");
                leadspace[previous].classList.remove("expand");
                desktop_svgs[previous].classList.remove("clicked");
                desktop_svgs[index].classList.add("clicked");
                hide_text(1000);
                previous = index;
            }
        });
    });
}


function mobile_event(e) {
    index = [].indexOf.call(mobile_svgs, e.target.parentNode);
    if(index == -1) {
        index = 0;
    }
    if(index != previous) {
        var stageClass = "stage" + (index+1).toString();
        var removeClass = "stage" + (previous+1).toString();
        mobileSlide.classList.remove(removeClass);
        mobileSlide.classList.add(stageClass);
        mobileh1.innerHTML = mobileh1Text[index];
        mobileh3.innerHTML = mobileh3Text[index];
        mobile_svgs[previous].classList.remove("clicked");
        mobile_svgs[index].classList.add("clicked");
        leadspace[index].classList.add("expand");
        leadspace[previous].classList.remove("expand");
        previous = index;
    }
}

function mobile() {
    mobile_svgs.forEach(item => {
        if(eventListener == false) {
            item.addEventListener('click', mobile_event);
        }
    });
    eventListener = true;
}

function toggleResponsive() {
    width = window.innerWidth
    if(width>768) {
        desktopVersion.classList.remove("hide");
        mobileVersion.classList.add("hide");
        var idx;
        for(var x=0; x<3; x++) {
            if(x!=previous && x!=index) {
                idx = x;
            }
        }
        leadspace_width = getComputedStyle(leadspace[idx]).width;
        leadspace_width_int = parseInt(leadspace_width.replace( /[^\d.]/g, '' ));
        left = leadspace_width_int/2 - 17;
        svg_margin();
        desktop();
        if(eventListener) {
            mobile_svgs.forEach(item => {
                item.removeEventListener('click', mobile_event);
            });
            eventListener=false;
        }
    }
    else {
        desktopVersion.classList.add("hide");
        mobileVersion.classList.remove("hide");
        mobile();
    }
} 
  
window.onresize = toggleResponsive;
window.onload = toggleResponsive;
