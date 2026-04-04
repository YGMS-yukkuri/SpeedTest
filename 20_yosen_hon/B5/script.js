const TEXTBOX = document.getElementById("searchTXT")


const search = () => {
    TXT = TEXTBOX.value;
    const TRs = document.querySelectorAll("table tbody tr")

    TRs.forEach(elem => {
        const TDs = elem.querySelectorAll("*");

        TDs.forEach(elem2 => {
            Temp = elem2.textContent;
            Reg = new RegExp(TXT, "gi")
            console.log(elem2);
            
            if (Reg.test(Temp)) {
                elem2.classList.remove("hidden")
            } else {
                elem2.classList.add("hidden")
            }
        });
    });
}