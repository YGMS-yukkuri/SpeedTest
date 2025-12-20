let color = "black";
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let drawing = false;

let x = 0;
let y = 0;

function changeColor(Color) {
    color = Color;
}

document.addEventListener("mousedown", () => {
    drawing = true
    ctx.beginPath()
    ctx.moveTo(x,y)
})
document.addEventListener("mouseup", () => {
    drawing = false
})

canvas.addEventListener("mousemove", (e) => {
    x = e.clientX;
    y = e.clientY;
    if (!drawing) return;
    if (drawing) {
        ctx.strokeStyle = color;
        ctx.lineWidth = 2
        ctx.lineTo(x,y)
        ctx.stroke()
    }

})

function save(p)  {
    if(!p)return;

    const URL = canvas.toDataURL(`image/${p}`);
    const a = document.createElement("a");
    a.href = URL;
    a.download = `image.${p}`
    a.click();
}