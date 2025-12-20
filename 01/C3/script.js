const inputBox = document.querySelector("input");
const HEXpattern = /^#[0-9A-Fa-f]{6}$/
const RGBpattern = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/
//https://chatgpt.com/c/693cbee6-1a70-8322-b25c-ac37b7a302ab
const colorBox = document.querySelector(".box")
const resultBox = document.querySelector(".result")

function convert() {
    document.querySelector(".result").textContent = "";
    input = inputBox.value.trim();
    Hmatched = input.match(HEXpattern)
    RGBmatched = input.match(RGBpattern)
    if (RGBmatched) {
        console.log(input)
        r = parseInt(RGBmatched[1], 10)
        g = parseInt(RGBmatched[2], 10)
        b = parseInt(RGBmatched[3], 10)

        hex = "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0").toUpperCase()).join("");
        colorBox.style.backgroundColor = hex;
        resultBox.textContent = hex;
    }
    else if (Hmatched) {
        Hr = input.substring(1, 3)
        Hg = input.substring(3, 5)
        Hb = input.substring(5, 7)

        r = parseInt(Hr, 16);
        g = parseInt(Hg, 16);
        b = parseInt(Hb, 16);
        console.log(r, g, b);

        colorBox.style.backgroundColor = `rgb(${r} ${g} ${b})`
        resultBox.textContent = `rgb(${r} ${g} ${b})`
    }
    else {
        console.log("error");
        resultBox.textContent = "エラー";
        return;
    }
}
