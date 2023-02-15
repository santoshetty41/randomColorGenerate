let color_code = document.getElementsByClassName("color_code")[0];
let btn = document.getElementsByClassName("btn")[0];
let container = document.getElementsByClassName("container")[0];
let copy = document.getElementsByClassName("copy")[0];

function randomColor() {
    //hex convert
    let rand = Math.floor(Math.random() * 16777215);
    return (rand.toString(16));
}

//adding event in button
btn.addEventListener("click", setColor);
function setColor() {
    let color = "#" + randomColor();
    container.style.backgroundColor = color;
    color_code.innerHTML = color;
    // navigator.clipboard.writeText(color_code.innerHTML)
}

setColor();

copy.addEventListener("click", function () {
    navigator.clipboard.writeText(color_code.innerHTML);
    alert("copied");
})