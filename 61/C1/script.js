const P = document.querySelector("p");
function search() {
    let input = document.getElementById("input").value;
    if (!input) {
        return
    }
    oldp = P.textContent
    console.log(oldp)
    let newp = oldp.replaceAll(input, `<span>${input}</span>`);
    console.log(newp)
    P.innerHTML = newp
    const spans = P.querySelectorAll("span");
    spans.forEach(span => {
        color = Math.random().toString(16).slice(-6)
        span.style.backgroundColor = `#${color}`

    });
}