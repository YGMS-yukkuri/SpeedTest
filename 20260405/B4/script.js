const questions = [
    {
        question: "HTMLで最も大きい見出しを表す要素はどれですか。",
        btnA: "<heading>",
        btnB: "<h1>",
        btnC: "<head>",
        btnD: "<title>",
        ans: "B"
    },
    {
        question: "CSSで文字色を指定するプロパティはどれですか。",
        btnA: "font-color",
        btnB: "text-color",
        btnC: "color",
        btnD: "foreground",
        ans: "C"
    },
    {
        question: "JavaScriptで配列の末尾に要素を追加するメソッドはどれですか。",
        btnA: "add()",
        btnB: "append()",
        btnC: "push()",
        btnD: "insert()",
        ans: "C"
    },
    {
        question: "PHPで連想配列をJSON文字列に変換する関数はどれですか。",
        btnA: "json_parse()",
        btnB: "json_decode()",
        btnC: "array_to_json()",
        btnD: "json_encode()",
        ans: "D"
    },
    {
        question: "Webページで外部CSSファイルを読み込む要素はどれですか。",
        btnA: "<script>",
        btnB: "<style>",
        btnC: "<link>",
        btnD: "<meta>",
        ans: "C"
    }
];

let questionIndex = 0;
const pri = document.getElementById("pri");
const sec = document.getElementById("sec");
const thi = document.getElementById("thi");

const questionDiv = document.getElementById("question");

const resultList = document.getElementById("result")

const btnA = document.getElementById("btnA");
const btnB = document.getElementById("btnB");
const btnC = document.getElementById("btnC");
const btnD = document.getElementById("btnD");

let pointarr = [];

btnA.addEventListener("click", () => {
    match("A")
})

btnB.addEventListener("click", () => {
    match("B")
})

btnC.addEventListener("click", () => {
    match("C")
})

btnD.addEventListener("click", () => {
    match("D")
})


function start() {
    pri.style.display = "none";
    sec.style.display = "block";
    load()
}

function match(n) {
    const Q = questions[questionIndex]
    if (Q.ans === n) {
        pointarr.push(1)
    } else {
        pointarr.push(0)
    }
    next()
}


function showall() {
    let resPoint = 0;
    pointarr.forEach((element,n) => {
        resPoint += element;
        const temp = document.createElement("li")
        if (element === 1) {
            temp.textContent = `${n + 1}問目 1点(正解)`
        } else {
            temp.textContent = `${n + 1}問目 0点(不正解)`
        }
        resultList.appendChild(temp)
    });

    const pointshow = document.createElement("h2")
    pointshow.textContent = `合計: ${resPoint}`;
    pointshow.classList.add("temp");
    thi.appendChild(pointshow);
}

function next() {
    if (questionIndex === 4) {
        sec.style.display = "none"
        thi.style.display = "block"
        showall()
        return
    }
    questionIndex++
    load()
}

function load() {
    const Q = questions[questionIndex]
    questionDiv.textContent = Q.question;
    btnA.textContent = Q.btnA;
    btnB.textContent = Q.btnB;
    btnC.textContent = Q.btnC;
    btnD.textContent = Q.btnD;
}

function restart() {
    pointarr = [];
    sec.style.display = "block";
    thi.style.display = "none";
    resultList.querySelectorAll("li").forEach(element => {
        element.remove();
    });
    document.querySelector(".temp").remove();
    questionIndex = 0;
    load()
}