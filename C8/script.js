const body = document.querySelector("body")
body.style.width = "100vw"
body.style.height = "100vh"
body.style.margin = "0"

function draw() {
    const circles = document.querySelectorAll(".circle")
}

for(let i = 0; i < 10; i++) {
    let color = Math.random().toString(16).slice(-6)
    width = window.innerWidth - 50
    height = window.innerHeight - 50

    let x = Math.random() * (width)
    let y = Math.random() * (height)
    console.log(x,y,color)
    const circle = document.createElement("div")
    circle.style.width = "50px"
    circle.style.height = "50px"
    circle.style.borderRadius = "25px"
    circle.style.backgroundColor = `#${color}`
    circle.style.border = "1px solid #000"
    circle.style.position = "absolute"
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.classList.add("circle")
    circle.style.boxSizing = "border-box"
    body.appendChild(circle)
}