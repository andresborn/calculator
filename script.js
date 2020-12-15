let output = document.querySelector('#output');
let result = 0;

//Math functions
    function sum (a,b) {
        result = (Math.round((a + b) * 100) / 100);
        return result;
    }
    function subtract(a,b) {
        result = (Math.round((a - b) * 100) / 100);
        return result
    }
    function multiply(a,b) {
        result = (Math.round((a * b) * 100) / 100);
        return result;
    }
    function divide(a,b) {
        if (b === 0) {return "Error"}
        else {
        result = (Math.round((a / b) * 100) / 100);
        return result;
    }}

//Operate funtion takes an operator and 2 numbers and calls a math function
    function operate(a,b,operator) {
        if (!(result === 0)) {
            if (operator === "+") {output.textContent = sum(result,b)}
            if (operator === "-") {output.textContent = subtract(result,b)}
            if (operator === "*") {output.textContent = multiply(result,b)}
            if (operator === "/") {output.textContent = divide(result,b)}
        }
        else if (result === 0) {
            if (operator === "+") {output.textContent = sum(a,b)}
            if (operator === "-") {output.textContent = subtract(a,b)}
            if (operator === "*") {output.textContent = multiply(a,b)}
            if (operator === "/") {output.textContent = divide(a,b)}
    };
}
    
//Functions to display on screen clicked buttons
let value = [];
const input = document.querySelector('#input');

const numbers = Array.from(document.querySelectorAll('.numbers'));
    
    numbers.forEach(number => {
        number.addEventListener('click', () => {
            if (value.length > 14) { //if number is too big for the screen
                operator.removeEventListener();
            }
            else {
                value.push(number.textContent); // add number to value array
                input.textContent = value.join(''); // display on screen
            }
        })
    });

let firstValue = [];
let secondValue = [];
let selectedOperator = '';

const operators = Array.from(document.querySelectorAll('.operators'));
    
    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            if (value.length > 14) { //if number is too big for the screen
                operator.removeEventListener();
            }
            else {
                firstValue = value.join(''); // save first value
                selectedOperator = operator.textContent; // save operator used
                value.push(selectedOperator); // push operator to value array
                input.textContent = value.join(''); // display operator in value
            }
        })
    });

//Calls operator function with equals button
const equals = document.querySelector('#equals');

    equals.addEventListener('click', () => {
        secondValue = value                     // save second value
                            .slice(value.lastIndexOf(selectedOperator)) // slice array value at the last operator
                            .slice(1).join(''); // remove operator and join
        firstValue = Number(firstValue);
        secondValue = Number(secondValue);
        operate(firstValue, secondValue, selectedOperator);
    })

const clearButton = document.querySelector('#clear');

    clearButton.addEventListener('click', () => {
        value = [];
        firstValue = [];
        secondValue = [];
        result = 0;
        selectedOperator = '';
        input.textContent = '0';
        output.textContent = ' ';
    })
    
const deleteButton = document.querySelector('#delete');
    
    deleteButton.addEventListener('click', () => {
        value.pop();
        input.textContent = value.join('');
    })

const periodButton = document.querySelector('#period');
    
    periodButton.addEventListener('click', () => {
        if (!value.includes('.')) {
            value.push('.');
            input.textContent = value.join('');
        }
        else {
            periodButton.removeEventListener();
        };
    });