var leadspace = document.querySelectorAll('.leadspace');
var text = document.querySelectorAll('.text');
var svgs = document.querySelectorAll('.leadspace svg');
var leadspace_width = leadspace[1].offsetWidth;
var left = leadspace_width/2 - 17;
var previous = 0;
var index;

svgs.forEach(item => {
    item.style["margin-left"] = left.toString() + "px";
});

leadspace.forEach(item => {
    item.addEventListener('click', function(){
        index = [].indexOf.call(leadspace, item);
        if(index != previous) {
            item.classList.add("expand");
            leadspace[previous].classList.remove("expand");
            text[previous].classList.add("hide");
            setTimeout(function(){
                text[index].classList.remove("hide");
            },500);
            previous = index;
        }
    });
});