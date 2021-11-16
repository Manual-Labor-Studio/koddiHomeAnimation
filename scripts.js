var leadspace = document.querySelectorAll('.leadspace');
var text = document.querySelectorAll('.text');
var svgs = document.querySelectorAll('.leadspace svg');
var leadspace_width = leadspace[1].offsetWidth;
var left = leadspace_width/2 - 17;
var previous = 0;
var index;


function svg_margin() {
    svgs.forEach(item => {
        item.style["margin-left"] = left.toString() + "px";
    });
}

leadspace.forEach(item => {
    item.addEventListener('click', function(){
        index = [].indexOf.call(leadspace, item);
        if(index != previous) {
            item.classList.add("expand");
            leadspace[previous].classList.remove("expand");
            text[previous].classList.add("hide");
            setTimeout(function(){
                text[index].classList.remove("hide");
            },800);
            previous = index;
        }
    });
});

function reportWindowSize() {
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
window.onload = svg_margin;
