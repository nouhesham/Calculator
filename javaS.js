"strict";

class Calculator {
  constructor(previousoperandTextElement, currentoperandTextElement) {
    this.previousoperandTextElement = previousoperandTextElement;
    this.currentoperandTextElement = currentoperandTextElement;
    //i wanna call this once i open it to clear it
    this.clear();
  }

  clear() {
    this.currentoperand = "";
    this.previousoperand = "";
    this.operation = undefined;
  }

  delete() {}
  appendNumber(number) {
    this.currentoperandTextElement.innerText = number;
  }

  chooseOperations(operation) {}

  compute() {}

  updateDisplay() {
    this.currentoperandTextElement.innerText = currentoperandTextElement;
  }
}
const operations = document.querySelectorAll("[data-operations]");
const numberButtons = document.querySelectorAll("[data-number]");
const operationsButton = document.querySelectorAll("[data-operations]");
const equalButton = document.querySelector("[data-equals");
const allclearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const previousoperandTextElement = document.querySelector(
  "[dat-previous-operand]"
);
const currentoperandTextElement = document.querySelector(
  "[data-current-operand]"
);
//class
const calculator = new Calculator(
  previousoperandTextElement,
  currentoperandTextElement
);
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
