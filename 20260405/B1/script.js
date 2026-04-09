const show = document.getElementById("showTime")
const Lap = document.querySelector("#LAP")

let min = 0;
let sec = 0;
let ms = 0;

let lapcount = 0;

let deltaMilisec = 0;

let intervalIDX;

let startMilisec = 0;

let isActive = false;

const display = () => {
    minstr = min.toString().padStart(2, "0");
    secstr = sec.toString().padStart(2, "0");
    msstr = Math.floor(ms / 10).toString().padStart(2, "0");
    show.textContent = `${minstr}:${secstr}:${msstr}`
    return (`${minstr}:${secstr}:${msstr}`);
}

const start = () => {
    if (isActive) return;
    isActive = true;

    startMilisec = Date.now();

    intervalIDX = setInterval(() => {
        deltaMilisec = Date.now() - startMilisec;
        startMilisec = Date.now();
        ms = deltaMilisec + ms;
        if (ms >= 1000) {
            sec++
            ms -= 1000;
        }
        if (sec >= 60) {
            min++
            sec -= 60;
        }
        display();
    }, 50);
}

const stop = () => {
    if (!isActive) return;
    isActive = false;
    clearInterval(intervalIDX);
    intervalIDX = null;
}

const reset = () => {
    isActive = false
    if (intervalIDX) {
        clearInterval(intervalIDX);
    }

    min = 0;
    sec = 0;
    ms = 0;
    lapcount = 0;
    display();

    const lis = Lap.querySelectorAll("li")
    lis.forEach(element => {
        element.remove()
    });
}

const lap = () => {
    if (!isActive) return;
    lapcount++    

    if (lapcount > 10) {
        Lap.querySelectorAll("li")[0].remove();
        lapcount--
    }
    const lapHTML = document.createElement("li")
    lapHTML.textContent = `${display()}`
    Lap.appendChild(lapHTML);
}