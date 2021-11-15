var leadspace = document.querySelectorAll('.leadspace');
var previous = leadspace[0];

leadspace.forEach(item => {
    item.addEventListener('click', function(){
        item.classList.add("expand");
        previous.classList.remove("expand");
        previous = item;
    });
});