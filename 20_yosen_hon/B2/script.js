box = document.getElementById("msg")
document.addEventListener("keydown", (e) => {
    KEY = e.key;
    box.textContent = `${KEY}キーが押されました`
})