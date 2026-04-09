const HEXi = document.getElementById("HEXi")
const RGBi = document.getElementById("RGBi")
const RGBslider = document.getElementById("RGBslideri")

let HEX;
let RGB;

RegHEX = /^#[0-9a-fA-F]{6}$/;

function hex() {
    HEX = HEXi.value;
    if (RegHEX.test(HEX)) {

        const HEXR = HEX.slice(1, 3);
        const HEXG = HEX.slice(3, 5);
        const HEXB = HEX.slice(5, 7);

        const r = parseInt(HEXR, 16)
        const g = parseInt(HEXG, 16)
        const b = parseInt(HEXB, 16)
        RGB = `rgb(${r},${g},${b})`

        HEXi.value = HEX;
        RGBi.value = RGB;
        RGBslider.value = HEX;
    }
}

function rgb() {
    const [r, g, b] = RGBi.value.match(/\d+/g).map(Number);
    const HEXR = r.toString(16).padStart(2, "0");
    const HEXG = g.toString(16).padStart(2, "0");
    const HEXB = b.toString(16).padStart(2, "0");
    HEX = `#${HEXR + HEXG + HEXB}`
    RGB = `rgb(${r},${g},${b})`

    HEXi.value = HEX;
    RGBi.value = RGB;
    RGBslider.value = HEX;
}

function rgbSli() {
    HEX = RGBslider.value;
    const HEXR = HEX.slice(1, 3);
    const HEXG = HEX.slice(3, 5);
    const HEXB = HEX.slice(5, 7);

    const r = parseInt(HEXR, 16)
    const g = parseInt(HEXG, 16)
    const b = parseInt(HEXB, 16)
    RGB = `rgb(${r},${g},${b})`

    HEXi.value = HEX;
    RGBi.value = RGB;
    RGBslider.value = HEX;
}