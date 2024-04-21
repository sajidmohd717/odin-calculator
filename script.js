const buttons = document.querySelectorAll('button')
const display = document.querySelector('.display')

let firstDigit = ""
let secondDigit = ""
let operand = false
let outputValue = 0
let operator;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent = display.textContent + button.id
        if (!Number.isNaN(button.id) && operand == false) {
            firstDigit = firstDigit + button.id
        }
        else if (operand == true && !Number.isNaN(button.id)) {
            secondDigit = secondDigit + button.id
        }
        else if (button.id == '=') {
            if (operator == '+') {
                alert(firstDigit + secondDigit)
            }
            else if (operator == '-') {
                alert(firstDigit - secondDigit)
            }
            else if (operator == 'x') {
                alert(firstDigit * secondDigit)
            }
            else if (operator == '/') {
                alert(firstDigit / secondDigit)
            }
        }
        else if (button.id == '+' || button.id == '-' || button.id == 'x' || button.id == '/') {
            operator = button.id;
            operand = true;
        }
    })
})

