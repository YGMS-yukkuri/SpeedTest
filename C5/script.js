let isNight = false;

function change() {
    if (isNight) {
        isNight = false;
        document.querySelector(".text").textContent = "ライトモードテスト"
        document.body.classList.remove("dark")
    }
    else {
        isNight = true;
        document.body.classList.add("dark")
        document.querySelector(".text").textContent = "ナイトモードテスト"
    }
}