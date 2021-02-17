var count = 1;
var clickcount = document.getElementById("clickcount");
var 

function addClickCount() {
    count++;
    clickcount.innerHTML = count;
}

function minClickCount() {
    count--;
    clickcount.innerHTML = count;
}

function changeBackgroundColor() {
    btnAddClickCount.style.backgroundColor = colour;
}
