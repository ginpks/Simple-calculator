let buttons = document.querySelectorAll(".btn");
let display = document.getElementById("display");
const quack = new Audio("quack_5.mp3");

buttons.forEach(btn => {
    btn.addEventListener("click", event => {
        const value = event.target.value;
        switch(value) {
            case "AC":
                quack.play();
                display.value = "";
                break;
            case "⌫":
                quack.play();
                display.value = display.value.slice(0, -1);
                break;
            case "1":
                quack.play();
                display.value += 1;
                break;
            case "2":
                quack.play();
                display.value += 2;
                break;
            case "3":
                quack.play();
                display.value += 3;
                break;
            case "4":
                quack.play();
                display.value += 4;
                break;
            case "5":
                quack.play();
                display.value += 5;
                break;
            case "6":
                quack.play();
                display.value += 6;
                break;
            case "7":
                quack.play();
                display.value += 7;
                break;
            case "8":
                quack.play();
                display.value += 8;
                break;
            case "9":
                quack.play();
                display.value += 9;
                break;
            case "0":
                quack.play();
                display.value += 0;
                break;
            case ".":
                quack.play();
                display.value += ".";
                break;
            case "÷":
                quack.play();
                display.value += "÷";
                break;
            case "-":
                quack.play();
                display.value += "-";
                break;
            case "+":
                quack.play();
                display.value += "+";
                break;
            case "x":
                quack.play();
                display.value += "x";
                break;
        }
    })
});

let evaluate = document.getElementById("equals");
evaluate.addEventListener('click', function() {
    let stringToEvaluate = "";
    quack.play();

    for (let char of display.value) {
        if (char === "÷") {
            stringToEvaluate += " / ";
        }
        else if (char === "x") {
            stringToEvaluate += " * ";
        } else {
            stringToEvaluate += char;
        }
    }
    try {
        display.value = eval(stringToEvaluate);
    } catch {
        display.value = "undefined";
    }
})

let sqrt = document.getElementById("sqrt");
sqrt.addEventListener('click', function() {
    quack.play();
    if (display.value === "" || isNaN(display.value)) {
        display.value = "undefined";
        return;
    } 
    display.value = Math.sqrt(display.value);
});
