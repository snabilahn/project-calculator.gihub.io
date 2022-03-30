let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

const calculatorScreen = document.querySelector(".calculator-screen");

// menampilkan angka pd screen calculator
const updateScreen = (number) => {
    calculatorScreen.value = number;
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
})

// button operator
const operators = document.querySelectorAll(".operator");

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '0';
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
})

// button equal
const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
})

// algoritma kalkulasi
const calculate = () => {
    let result = '';
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        // case "%":
        //     result = parseFloat(prevNumber)/100;
        //     break;
        default:
            break;
    }

    currentNumber = result;
    calculationOperator = '';
}

// clear button
const cleatBtn = document.querySelector(".all-clear");

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

cleatBtn.addEventListener('click', ()=> {
    clearAll();
    updateScreen(currentNumber);
})

// decimal button
const decimalBtn = document.querySelector(".decimal");

const inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot;
}

decimalBtn.addEventListener('click', (event)=> {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})