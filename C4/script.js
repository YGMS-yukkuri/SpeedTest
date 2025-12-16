let color = "black";
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let drawing = false;


function changeColor(Color) {
    Color = color;
}

canvas.addEventListener("mousedown", drawing = true)
canvas.addEventListener("mouseup", drawing = false)

canvas.addEventListener("mousemove", (e) => {
    if(!drawing)return;
    x = e.clientX;
    y = e.clientY;

    
    ctx.strokeStyle = color;

})