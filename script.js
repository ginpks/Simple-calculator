let buttons = document.querySelectorAll(".btn");
let display = document.getElementById("display");

buttons.forEach(btn => {
    btn.addEventListener("click", event => {
        const value = event.target.value;
        switch(value) {
            case "AC":
                display.value = "";
                break;
            case "⌫":
                display.value = display.value.slice(0, -1);
                break;
            case "1":
                display.value += 1;
                break;
            case "2":
                display.value += 2;
                break;
            case "3":
                display.value += 3;
                break;
            case "4":
                display.value += 4;
                break;
            case "5":
                display.value += 5;
                break;
            case "6":
                display.value += 6;
                break;
            case "7":
                display.value += 7;
                break;
            case "8":
                display.value += 8;
                break;
            case "9":
                display.value += 9;
                break;
            case "0":
                display.value += 0;
                break;
            case ".":
                display.value += ".";
                break;
            case "÷":
                display.value += "÷";
                break;
            case "-":
                display.value += "-";
                break;
            case "+":
                display.value += "+";
                break;
            case "x":
                display.value += "x";
                break;
        }
    })
});

let evaluate = document.getElementById("equals");
evaluate.addEventListener('click', function() {
    let stringToEvaluate = "";
    let displayValue = display.value;
    if (isNaN(displayValue.slice(0, 2)) || isNaN(displayValue[displayValue.length - 1]) || displayValue[0] === "0") {
        display.value = "undefined";
        return;
    }
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
    display.value = eval(stringToEvaluate);
})

let sqrt = document.getElementById("sqrt");
sqrt.addEventListener('click', function() {
    if (display.value === "" || isNaN(display.value)) {
        display.value = "undefined";
        return;
    } 
    display.value = Math.sqrt(display.value);
});