const Dmin = document.querySelector(".mm")
const Dsec = document.querySelector(".ss")
const Dmsec = document.querySelector(".ms")

let min = 0;
let sec = 0;
let msec = 0;

let startTime;

let isActive = false;

function start() {
    isActive = true
    startTime = Date.now();
}

function stop() {
    isActive = false
}

function reset() {
    isActive = false;
    min = 0;
    sec = 0;
    msec = 0;
    Dmin.textContent = `${min}:`.padStart(3, "0");
    Dsec.textContent = `${sec}:`.padStart(3, "0");
    Dmsec.textContent = `${msec}`.padStart(2, "0");
}



setInterval(() => {
    if (!isActive) return;
    nowTime = Date.now()
    temp = nowTime - startTime
    
    msec += temp

    if (msec > 999) {
        sec++
        msec = msec - 1000;
    }
    if (sec > 59 ) {
        min++
        sec = 0
    }
    console.log(msec)
    startTime = nowTime
    Dmin.textContent = `${min}:`.padStart(3,"0");
    Dsec.textContent = `${sec}:`.padStart(3, "0");
    Dmsec.textContent = `${Math.trunc(msec/10)}`.padStart(2, "0");
}, 10)