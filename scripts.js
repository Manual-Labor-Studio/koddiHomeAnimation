function start() {
    var leadspace = document.querySelectorAll('.leadspace');
    leadspace[0].classList.add("expand");
    var text = document.querySelectorAll('.text');
    var svgs = document.querySelectorAll('.leadspace svg');
    var mob_svgs = document.querySelectorAll(".mobile-svgs svg");
    svgs[0].classList.add("clicked");
    mob_svgs[0].classList.add("clicked");
    var leadspace_width = getComputedStyle(leadspace[1]).width;
    var leadspace_width_int = parseInt(leadspace_width.replace( /[^\d.]/g, '' ));
    var left = leadspace_width/2 - 17;
    var previous = 0;
    var width = window.innerWidth;
    var index = 0;
    var eventListener = false;
    var autoscroll;
    var scroll_once = false;

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

    svg_margin();

    for(var i=0; i<leadspace.length; i++) {
        leadspace[i].addEventListener("mouseover", function(e){
            var idx = [].indexOf.call(leadspace, e.target);
            if(idx != index && idx != -1) {
                e.target.childNodes[1].style.opacity = 1;
            }
        });
        leadspace[i].addEventListener("mouseout", function(e){
            var idx = [].indexOf.call(leadspace, e.target);
            if(idx != index && idx != -1) {
                e.target.childNodes[1].style.opacity = 0.5;
            }
        });
    }
    
    function hide_text(l) {
        text[previous].classList.add("hide");
        setTimeout(function(){
            text[index].classList.remove("hide");
        },l);
    }

    function mobilesvgs() { 
        mob_svgs[previous].classList.remove("clicked");
        mob_svgs[index].classList.add("clicked");
        if(index==0) {
            mob_svgs[index].classList.add("circle");
        }
        else if(index==1) {
            mob_svgs[index].classList.add("square");
        }
        else if(index==2) {
            mob_svgs[index].classList.add("diamond");
        }
        if(previous==0 && previous != index) {
            mob_svgs[previous].classList.remove("circle");
        }
        else if(previous==1 && previous != index) {
            mob_svgs[previous].classList.remove("square");
        }
        else if(previous==2 && previous != index) {
            mob_svgs[previous].classList.remove("diamond");
        }
    }

    function desktop() {
        leadspace.forEach(item => {
            item.addEventListener('click', function(){
                if(autoscroll != undefined) {
                    clearInterval(autoscroll);
                }
                index = [].indexOf.call(leadspace, item);
                if(index != previous) {
                    item.classList.add("expand");
                    leadspace[previous].classList.remove("expand");
                    svgs[previous].classList.remove("clicked");
                    svgs[index].classList.add("clicked");
                    mobilesvgs();
                    hide_text(1000);
                    previous = index;
                }
            });
        });
    }

    function mobile_event(i) {
        index = i;
        if(index != previous) {
            leadspace[previous].style.display = "none";
            leadspace[previous].classList.remove("expand");
            leadspace[index].style.display = "block";
            leadspace[index].classList.add("expand");
            mobilesvgs();
            svgs[previous].classList.remove("clicked");
            svgs[index].classList.add("clicked");
            hide_text(200);
            previous = index;
        }
    }

    function mobile() {
        mobilesvgs();
        for(let i=0; i<3; i++) {
            if(eventListener == false) {
                (function(index){
                    mob_svgs[i].onclick = function(){
                        if(autoscroll != undefined) {
                            clearInterval(autoscroll);
                        }
                        mobile_event(i);
                    }    
                })(i);
            }
        }
        eventListener = true;
    }

    function desktop_autoscroll() {
        var x = 1;
        autoscroll = setInterval(function(){
            index = x;
            if(x==0) {
                previous = 2;
            }
            else {
                previous = x-1;
            }
            leadspace[x].classList.add("expand");
            leadspace[previous].classList.remove("expand");
            svgs[previous].classList.remove("clicked");
            svgs[index].classList.add("clicked");
            mobilesvgs();
            hide_text(1000);
            previous = index;
            x++;
            if(x==3) {
                x=0;
            }
        }, 5000);
    }

    function mobile_autoscroll() {
        var x = 1;
        autoscroll = setInterval(function(){
            index = x;
            if(x==0) {
                previous = 2;
            }
            else {
                previous = x-1;
            }
            leadspace[previous].style.display = "none";
            leadspace[previous].classList.remove("expand");
            leadspace[index].style.display = "block";
            leadspace[index].classList.add("expand");
            mobilesvgs();
            svgs[previous].classList.remove("clicked");
            svgs[index].classList.add("clicked");
            hide_text(200);
            previous = index;
            x++;
            if(x==3) {
                x=0;
            }
        }, 5000);
    }

    function reportWindowSize() {
        if(autoscroll != undefined) {
            clearInterval(autoscroll);
        }
        width = window.innerWidth;
        if (width>768) {
            if(scroll_once == false) {
                scroll_once = true;
                desktop_autoscroll();
            }
            if(eventListener) {
                svgs.forEach(item => {
                    item.removeEventListener('click', mobile_event);
                });
                eventListener=false;
            }

            leadspace.forEach(item => {
                item.style.display = "flex";
            });
            desktop();
        }
        else {
            if(scroll_once == false) {
                scroll_once = true;
                mobile_autoscroll();
            }
            for(var x=0; x<3; x++) {
                if(x!=index) {
                    leadspace[x].style.display = "none";
                }
            }
            mobile();
        }
        var idx;
        for(var x=0; x<3; x++) {
            if(x!=previous && x!=index) {
                idx = x;
            }
        }
        leadspace_width = getComputedStyle(leadspace[idx]).width;
        leadspace_width_int = parseInt(leadspace_width.replace( /[^\d.]/g, '' ));
        left = leadspace_width_int/2 - 17;
        mobilesvgs();
        svg_margin();
    }
    
    window.onresize = reportWindowSize;
    window.onload = reportWindowSize;
};

window.addEventListener('DOMContentLoaded', start);
