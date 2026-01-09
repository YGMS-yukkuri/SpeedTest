let page = 0;

const index = ["first","second","third","Finish"]

const prev = document.getElementById("prev")
const next = document.getElementById("next")

function Prev() {
    page--
    if (page < 1){
        prev.disabled = true;
    }
    document.getElementById(index[page+1]).style.display = "none"
    document.getElementById(index[page]).style.display = "block"
    if(page != 2 ){
        next.textContent = "Next"
    }
}
function Next() {
    page++
    prev.disabled = false;
    if(page != 0){
        document.getElementById(index[page-1]).style.display = "none"
    }
    document.getElementById(index[page]).style.display = "block"

    if(page == 2){
        next.textContent = "Finish"
    }
    if(page == 3){
        next.style.display = "none"
        prev.style.display = "none"
    }

}