const div = document.querySelectorAll("div")

function rand() {
    return Math.random().toString(16).slice(-6)
}

function create() {
    div.forEach(elem => {
        elem.style.backgroundColor = `#${rand()}`
    })
}
create()