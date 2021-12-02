const readmore = document.getElementsByClassName("read-more");
const modals = document.getElementsByClassName("modal");
const close = document.getElementsByClassName("close-button");
var index;

for(var i=0; i<readmore.length; i++) {
    readmore[i].addEventListener("click",popup,false);
    close[i].addEventListener("click", function(){closepop(index);},false);
}

function popup(e) {
    e.preventDefault();
    index = [].indexOf.call(readmore, e.target);
    modals[index].classList.add("open");
}

function closepop(index) {
    modals[index].classList.remove("open");
}