const input = document.querySelector("input")
const text = document.querySelector("p")

document.addEventListener("keyup", () => {
    const length = input.value.length;
    text.textContent = `文字数: ${length}`
})