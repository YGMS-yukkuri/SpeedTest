/** 
* @type {HTMLElement}
*/
const cursor = document.querySelector(".cursor")

document.addEventListener("mousemove", (e) => { 
    x = e.clientX
    y = e.clientY
    cursor.style.top = `${y}px`
    cursor.style.left = `${x}px`
});