// VARIABLES DECLARATION
let result = undefined;
let firstNumber = undefined;
let secondNumber = undefined;
let textNumber = '';
let lastOperator = undefined;

// PRINT NUMBER & RESULT OUT THE CALCULATOR SCREEN
function printToScreen(input) {
    const screen = document.getElementById('calc-screen');
    screen.innerHTML = input;
}

// INSERT NUMBER FUNCTION
function getNumber(btn) {
    // Return if button is 'nepos' and textNumber === ''
    if (btn.value === 'nepos' && textNumber === '') {
        return;
    }

    // Input negative/positive
    if (btn.value === 'nepos') {
        // Remove negative symbol
        if (textNumber[0] === '-') {
            textNumber = textNumber.slice(1, textNumber.length);
        }
        // Adding negative symbol
        else {
            textNumber = '-' + textNumber;
        }
        printToScreen(textNumber);
        return;
    }

    // Assign num for value of buttons
    const num = btn.value;

    // Input dot and show textNumber is '0.'
    if (num === '.' && textNumber === '') {
        textNumber = '0' + num;
        printToScreen(textNumber);
        return;
    }

    // Input many '0' but only show 1 '0' without getting '[1-9]''
    if ((textNumber === '0' || textNumber === '-0') && num === '0') {
        return;
    }

    // Only 1 dot in textNumber
    if (textNumber.length > 0 && num == '.' && textNumber.indexOf('.') > 0) {
        return;
    }
    textNumber += num;
    printToScreen(textNumber);

    // Parse textNumber to firstNumber
    if (result === undefined && lastOperator === undefined) {
        firstNumber = parseFloat(textNumber);
        console.log(firstNumber);

    }
    if (lastOperator !== undefined) {
        secondNumber = parseFloat(textNumber);
        console.log(secondNumber);

    }
}


//INSERT OPERATOR FUNCTION
function getOperator(btn) {
    const operator = btn.value;

    // variable is valid 
    if (firstNumber === undefined && secondNumber === undefined && result === undefined) {
        return;
    }

    textNumber = '';

    // operator is updated the newest operator when using operator
    if (result === undefined && secondNumber === undefined && operator !== '=') {
        lastOperator = operator;
        console.log(lastOperator);
        return;
    }

    // if (operator !== '=' && secondNumber !== undefined && lastOperator !== '=') {
    //     // lastOperator = operator;
    //     const x = firstNumber + lastOperator + secondNumber;
    //     result = eval(x);
    //     printToScreen(result);
    //     firstNumber = result;
    //     result = undefined;
    //     lastOperator = undefined;
    //     return;
    // }

    if (lastOperator !== undefined && operator === '=') {
        switch (lastOperator) {
            case '+':
                if (secondNumber === undefined) {
                    secondNumber = firstNumber;
                    result = firstNumber * 2;
                }
                else {
                    result = firstNumber + secondNumber;
                }
                break;
            case '-':
                if (secondNumber === undefined) {
                    secondNumber = firstNumber;
                    result = firstNumber - firstNumber;
                }
                else {
                    result = firstNumber - secondNumber;
                }
                break;
            case '*':
                if (secondNumber === undefined) {
                    secondNumber = firstNumber;
                    result = firstNumber ** 2;
                }
                else {
                    result = firstNumber * secondNumber;
                }
                break;
            case '/':
                if (secondNumber === undefined) {
                    secondNumber = firstNumber;
                    result = firstNumber / firstNumber;
                }
                else {
                    result = firstNumber / secondNumber;
                }
                break;
            default:
                break;
        }

       printToScreen(result);
    firstNumber = result;
    result = undefined;
        // secondNumber = undefined;
    }
    if (operator !== '=') {
        lastOperator = operator;
    }
    
    
}

// RESET CALCULATOR
function reset() {
    result = undefined;
    firstNumber = undefined;
    secondNumber = undefined;
    textNumber = '';
    lastOperator = undefined;
    printToScreen('0');
}