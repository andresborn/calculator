let output = document.querySelector('#output');
let result = 0;
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

    //Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

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
    }
    console.log(`firstValue: ${firstValue}`)
    console.log(`selectedOperator: ${selectedOperator}`)
    console.log(`secondValue: ${secondValue}`)
    console.log(`result: ${result}`)
    }

    //Functions that populate the display when you click the number buttons… Store the ‘display value’ in a variable somewhere for use in the next step.

    let value = [];
    const input = document.querySelector('#input');

    const numbers = Array.from(document.querySelectorAll('.numbers'));
    numbers.forEach(number => {
        number.addEventListener('click', () => {
            value.push(number.textContent); // add number to value array
            input.textContent = value.join(''); // display on screen
        })
    });

    let firstValue = [];
    let secondValue = [];
    let selectedOperator = '';
    const operators = Array.from(document.querySelectorAll('.operators'));
    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            firstValue = value.join(''); // save first value
            selectedOperator = operator.textContent; // save operator used
            value.push(selectedOperator); // push operator to value array
            input.textContent = value.join(''); // display operator in value
        })
    });
    

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
    

    
    