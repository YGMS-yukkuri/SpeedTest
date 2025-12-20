/** 
* @type {HTMLElement}
*/
const light = document.querySelector(".spotlight");
const image = document.querySelector("img");
let size = 150;
let mouseX = 0;
let mouseY = 0

image.addEventListener("mouseover", (e) => {
    light.style.display = "block";
})

image.addEventListener("mouseleave", (e) => {
    light.style.display = "none";
})

document.addEventListener("mousemove", (e) => {
    if (!light) {
        return
    }
    mouseX = e.clientX;
    mouseY = e.clientY;
    change();
})

document.addEventListener("wheel", (e) => {
    deltaY = e.deltaY
    size += deltaY
    if (size <= 10) {
        size = 10
    }
    change();
})

function change() {
    light.style.backgroundImage = `radial-gradient(circle at ${mouseX}px  ${mouseY}px, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.75) ${size}px)`
}