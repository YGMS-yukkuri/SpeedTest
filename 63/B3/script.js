const input = document.querySelector("input");

const chars = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&()-=^~|@;:,./+*"
function gen() {
    let result = "";
    for (let i = 0; i < 12; i++) {
        const idx = Math.floor( Math.random() * chars.length )
        //console.log(idx,result);
        
        result += chars[idx];
    }
    //console.log(result);
    input.value = result;
}