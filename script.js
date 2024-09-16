let num1 = "", num2 = "", operator1, operator2, result, controller, temp = ""

const display = document.querySelector('h1')
const numberKeys = document.querySelector('#numberKeys')
const operators = document.querySelector('#col1')
const controls = document.querySelector('#col2')

numberKeys.addEventListener('click', storeNumberVariables) 
operators.addEventListener('click', storeOperatorVariable) 
controls.addEventListener('click', storeControlVariable)

// function to store num1 and num2 entered by the user one after the other
// one is entered before an operator is clicked and one after the operator is clicked. Therefore assignment of operator1's value is used as a condition to acheive the same.
// numbers are stored as variables to enable multi digit number entry.
function storeNumberVariables (event) {      
           if(!operator1) {
            temp = (event.target.textContent).toString();
            num1 += temp
            display.textContent = num1
        } else {
            temp = (event.target.textContent).toString();
            num2 += temp
            display.textContent = num2
        }
        temp = ""
    }

// function to store the mathematical operator clicked on by the user in a variable
// func also calls the operate() function only if num2 has some value assigned, 
// as initially this function is called when num2 is not defined yet and so the operate() results in NaN
// 2 operator variables are used to enable chained calculations. 1 operator results in errors.      
function storeOperatorVariable (event) {
    if(!operator1) {
    operator1 = event.target.textContent;
    } else {
        operator2 = event.target.textContent;
    }
    if(num2) {
        operate(num1, num2, operator1)
    }
    }

// function to store the control operator clicked by the user in a variable
// function also calls the control() function
function storeControlVariable (event) {
    controller = event.target.textContent
    control(controller)
    }

// function to handle the behaviour of mathematical operators
// function is called by storeOperatorVariable() which is inturn called by a click event of the mathematical operators
function operate (number1, number2, operation) {
    switch (operation) {
        
        case "+" :
            result = add(number1,number2)
            break;
        
        case "-" :
            result = substract(number1,number2)
            break;
        
        case "*" :
            result = multiply(number1,number2)
            break;
        
        case "/" :
            result = divide(number1,number2)
            break;
        }
    display.textContent = result
    num1 = result
    num2 = ""   
    operator1 = operator2;
    operator2 = "";
}

// function to handle the behaviour of control operators
// function is called by storeControlVariable() which is inturn called by a click event of the control operators  
function control(operation) {
    switch (operation) {
        
        case 'AC' :
            result = "";
            num1 = ""
            num2 = ""
            operator1 = ""
            operator2 = ""
            display.textContent = "";
            break;
        
        case 'C' :
            if(display.textContent === num1) {
                num1 = ""
               } else if (display.textContent === num2) {
                num2 = ""
               }
               display.textContent = "";
               break;

        case 'BS' :
            if(display.textContent === num1) {
                temp = num1.slice(0,-1)
                num1 = temp
                display.textContent = num1
            } else if(display.textContent === num2) {
                temp = num2.slice(0,-1)
                num2 = temp;
                display.textContent = num2
            }
            temp = ""
            break;

        case '=' :
            operate(num1, num2, operator1)    
            break;
    }
    }

// functions to perform the actual calculation and return the result to operate()
// Number() method is used to convert the string to integers and then perform the calculations
function add (number1, number2) {
    return Number(number1) + Number(number2); 
}

function substract (number1, number2) {
    return Number(number1) - Number(number2);
    
}

function multiply (number1,number2) {
    return  Number(number1) * Number(number2);
    
}

function divide (number1, number2) {
    return Number(number1)/Number(number2);
}
