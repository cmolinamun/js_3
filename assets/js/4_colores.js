function ColorToBlack(event) {
    event.target.style.backgroundColor = "black";
}

document.getElementById("div1").addEventListener("click", ColorToBlack);
document.getElementById("div2").addEventListener("click", ColorToBlack);
document.getElementById("div3").addEventListener("click", ColorToBlack);
document.getElementById("div4").addEventListener("click", ColorToBlack);

let color;

document.addEventListener("keydown", function(event) {
    if (event.key === 'a') {
        color = "pink";
    } else if (event.key === 's') {
        color = "orange";
    } else if (event.key === 'd') {
        color = "lightblue";
    } else if (event.key === 'q') {
        CreateDiv('purple');
    } else if (event.key === 'w') {
        CreateDiv('gray');
    } else if (event.key === 'e') {
        CreateDiv('brown');
    }
    document.getElementById("key").style.backgroundColor = color;
});

function CreateDiv(color) {
    let div = document.createElement("div");
    div.style.width = "200px";
    div.style.height = "200px";
    div.style.margin = "10px";
    div.style.backgroundColor = color;
    div.style.border = "1px solid black";
    document.querySelector('.container').appendChild(div);
}