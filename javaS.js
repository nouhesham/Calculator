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

  delete() {
    this.currentoperand = this.currentoperand.toString().slice(0, -1);
  }
  appendNumber(number) {
    if (number === "." && this.currentoperand.includes(".")) return;
    this.currentoperand = this.currentoperand.toString() + number.toString();
  }

  chooseOperations(operation) {
    if (this.currentoperand === "") return;
    //lw mesh equal zero f a7sbly al rakm dah m3 al operation
    if (this.previousoperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousoperand = this.currentoperand;
    this.currentoperand = "";
  }

  compute() {
    let competation;
    //parse float to change it to number
    const prev = parseFloat(this.previousoperand);
    const curr = parseFloat(this.currentoperand);
    //if the there is no previous or current then stop working
    if (isNaN(prev) || isNaN(curr)) return;
    //using switch case for having more than one case
    switch (this.operation) {
      case "+":
        competation = prev + curr;
        console.log(competation);
        break;
      case "-":
        competation = prev - curr;
        console.log(competation);
        break;
      case "*":
        competation = prev * curr;
        console.log(competation);
        console.log(2 * 3);
        console.log(operationsButton);
        break;

      case "÷":
        competation = prev / curr;
        console.log(competation);
        break;

      default:
        return;
    }
    this.currentoperand = competation;
    this.operation = undefined;
    this.previousoperand = "";
  }

  updateDisplay() {
    this.currentoperandTextElement.innerText = this.currentoperand;
    this.previousoperandTextElement.innerText = this.previousoperand;
    if (this.operation != null) {
      this.previousoperandTextElement.innerText = `${this.previousoperand} ${this.operation}`;
    }
  }
}
// const operations = document.querySelectorAll("[data-operations]");
const numberButtons = document.querySelectorAll("[data-number]");
const operationsButton = document.querySelectorAll("[data-operations]");
const equalButton = document.querySelector("[data-equals");
const allclearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const previousoperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentoperandTextElement = document.querySelector(
  "[data-current-operand]"
);
//class
// console.log(previousoperandTextElement, currentoperandTextElement);
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
operationsButton.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperations(button.innerText);
    calculator.updateDisplay();
  });
});

equalButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});
allclearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});
