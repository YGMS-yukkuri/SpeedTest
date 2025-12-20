const text = document.querySelector("h1");

document.querySelector(".hero").addEventListener("mousemove", (e) => {
    x = e.clientX - document.querySelector(".hero").clientWidth;
    y = e.clientY - document.querySelector(".hero").clientHeight;

    deltax = x / 20;
    deltay = y / 20;


    text.style.textShadow = `
    ${deltax}px ${deltay}px 1px green,
    ${-deltax*1.2}px ${-deltay*1.2}px 1px red
    `;
})