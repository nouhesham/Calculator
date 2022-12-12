"strict";

class calculator {
  constructor(previousoperandTextElement, currentoperandTextElement) {
    this.previousoperandTextElement = previousoperandTextElement;
    this.currentoperandTextElement = currentoperandTextElement;
    this.clear();
  }

  clear() {
    this.currentoperand = "";
    this.previousoperand = "";
    this.operation = undefined;
  }

  delete() {}
  appendNumber(number) {}

  chooseOperations(operation) {}

  compute() {}

  updateDisplay() {}
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
