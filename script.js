const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

let firstDigit = "";
let secondDigit = "";
let operand = false;
let outputValue = 0;
let operator;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (firstDigit == "") {
      display.textContent = "";
    }
    display.textContent = display.textContent + button.id;
    if (isNumeric(button.id) && operand == false) {
      firstDigit = firstDigit + button.id;
    } else if (operand == true && isNumeric(button.id)) {
      secondDigit = secondDigit + button.id;
    } else if (button.id == "=") {
      display.textContent = "";
      if (operator == "+") {
        display.textContent = parseInt(firstDigit) + parseInt(secondDigit);
      } else if (operator == "-") {
        display.textContent = parseInt(firstDigit) - parseInt(secondDigit);
      } else if (operator == "x") {
        display.textContent = parseInt(firstDigit) * parseInt(secondDigit);
      } else if (operator == "/") {
        display.textContent = parseInt(firstDigit) / parseInt(secondDigit);
      }
      firstDigit = "";
      secondDigit = "";
      operand = false;
    } else if (
      button.id == "+" ||
      button.id == "-" ||
      button.id == "x" ||
      button.id == "/"
    ) {
      operator = button.id;
      operand = true;
    }
  });
});

function isNumeric(str) {
  return !isNaN(parseFloat(str)) && isFinite(str);
}
