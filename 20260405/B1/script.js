const show = document.getElementById("showTime")
const Lap = document.querySelector("#LAP")

let min = 0;
let sec = 0;
let ms = 0;

let deltaMilisec = 0;

let intervalIDX;

let startMilisec = 0;

let isActive = false;

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
            min -= 60;
        }

        minstr = min.toString().padStart(2, "0");
        secstr = sec.toString().padStart(2, "0");
        msstr = Math.floor(ms / 10).toString().padStart(2, "0");
        show.textContent = `${minstr}:${secstr}:${msstr}`
    }, 100);
}