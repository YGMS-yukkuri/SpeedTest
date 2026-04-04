const box = document.querySelector(".box")
let isGrabbing = false
let GrabbingState = false
let OffX;
let OffY;

box.addEventListener("mousedown", (e) => {
    isGrabbing = true;
})

box.addEventListener("mouseup", (e) => {
    isGrabbing = false;
    GrabbingState = false
})

document.addEventListener("mousemove", (e) => {
    if (isGrabbing) {
        X = e.clientX - 10;
        Y = e.clientY - 10;
        box.style.left = `${X}px`
        box.style.top = `${Y}px`
    }
})