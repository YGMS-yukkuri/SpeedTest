const show = document.querySelector("h1")
const body = document.querySelector("body")

let time = 10;
show.textContent = time;
active = false;

setInterval(() => {
    if(!active) return
    if (0 < time) {
        time--
    }
    
    if (0 >= time) {
        body.classList.remove("five")
        body.classList.add("zero")
    } else if (5 > time) {
        body.classList.add("five")
    }
    show.textContent = time

}, 1000);


function stop() {
    if(active) {
        active = false
        document.querySelector("button").textContent = "再開"
    } else {
        active = true
        document.querySelector("button").textContent = "一時停止"
    }
}