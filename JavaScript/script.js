// Class For Calculator
class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }
  // For Clear all the numbers
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  // For delete the numbers
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }
  // append the number which is selected by user

  appendNumber(number) {
    console.log(number);
    if ((number = !"" && number)) {
      if (number === "." && this.currentOperand.includes(".")) return;
      this.currentOperand = this.currentOperand.toString() + number.toString();
    } else {
      this.currentOperand = "0";
    }
  }

  // operations which is selected by user
  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  // Calculate the operations

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    console.log(prev);
    const current = parseFloat(this.currentOperand);
    console.log(current);
    if (isNaN(prev) || isNaN(current)) return;
    console.log(this.operation);
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }
  // To updateDisplay Screen
  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;

    if (this.operation !== null && this.operation !== undefined) {
      this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = this.previousOperand;
    }
    console.log(this.previousOperand + "1");
    console.log(this.currentOperand + "2");
    console.log(this.operation + "3");
  }
}

// initalization of all the buttons and get value
const numberButtons = document.querySelectorAll("[data-number]");

const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

//create object of class
const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

// To get number value
numberButtons.forEach((button) => {
  console.log(button.innerText);

  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
console.log(operationButtons);

// To get operationButtons

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button, "hellooo");
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

// to perform eqaution
equalsButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

// To clear screen
allClearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

// To Delete value on screen
deleteButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});
