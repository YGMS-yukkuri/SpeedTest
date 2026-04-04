const images = document.querySelectorAll(".imagebox .image")
let page = 0
console.log(images);

const Next = () => {
    images[page].style.display = "none";
    page++
    if(page >= 3){
        page = 0;
    }
    images[page].style.display = "block";
} 
const Prev = () => {
    images[page].style.display = "none";
    page--
    if (page < 0) {
        page = 2;
    }
    images[page].style.display = "block";
} 