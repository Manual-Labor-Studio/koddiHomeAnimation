const readmore = document.getElementsByClassName("read-more");
const modals = document.getElementsByClassName("modal");
const close = document.getElementsByClassName("close-button");

for(var i=0; i<readmore.length; i++) {
    readmore[i].addEventListener("click",popup,false);
}

function popup(e) {
    e.preventDefault();
    var index = [].indexOf.call(readmore, e.target);
    modals[index].classList.add("open");
    close[index].addEventListener("click", function(){closepop(index);});
}

function closepop(index) {
    modals[index].classList.remove("open");
}