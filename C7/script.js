const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

let x = 15;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath()
    ctx.arc(x, 160, 15, 0, 2 * Math.PI)
    ctx.strokeStyle = "green";
    ctx.fillStyle = "green"
    ctx.fill()
    ctx.stroke()
    
    x++
}

setInterval(() => {
    draw();
}, 16)

draw();