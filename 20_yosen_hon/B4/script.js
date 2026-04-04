const colorBG = document.querySelector("body")
const Wmax = colorBG.clientWidth;
const Hmax = colorBG.clientHeight;

function perse(n) {
    return (255 * n)
}

document.addEventListener("mousemove", (e) => {
    percW = e.clientX / Wmax;
    percY = e.clientY / Hmax;

    colorBG.style.backgroundColor = `
    rgb(${perse(percW)},0,${perse(percY)})
    `
})