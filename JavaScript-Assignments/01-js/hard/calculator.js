/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    if (num === 0) {
      throw new Error("Division by zero");
    }
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    const parser = new ExpressionParser(expression);
    this.result = parser.parse();
    return this.result;
  }
}

class ExpressionParser {
  constructor(input) {
    this.input = input;
    this.index = 0;
  }

  parse() {
    const value = this.parseExpression();
    this.skipSpaces();
    if (this.index < this.input.length) {
      throw new Error("Invalid expression");
    }
    return value;
  }

  parseExpression() {
    let value = this.parseTerm();
    while (true) {
      this.skipSpaces();
      const char = this.peek();
      if (char === "+" || char === "-") {
        this.index += 1;
        const rhs = this.parseTerm();
        value = char === "+" ? value + rhs : value - rhs;
      } else {
        break;
      }
    }
    return value;
  }

  parseTerm() {
    let value = this.parseFactor();
    while (true) {
      this.skipSpaces();
      const char = this.peek();
      if (char === "*" || char === "/") {
        this.index += 1;
        const rhs = this.parseFactor();
        if (char === "/" && rhs === 0) {
          throw new Error("Division by zero");
        }
        value = char === "*" ? value * rhs : value / rhs;
      } else {
        break;
      }
    }
    return value;
  }

  parseFactor() {
    this.skipSpaces();
    const char = this.peek();

    if (char === "+" || char === "-") {
      this.index += 1;
      const value = this.parseFactor();
      return char === "-" ? -value : value;
    }

    if (char === "(") {
      this.index += 1;
      const value = this.parseExpression();
      this.skipSpaces();
      if (this.peek() !== ")") {
        throw new Error("Invalid expression");
      }
      this.index += 1;
      return value;
    }

    return this.parseNumber();
  }

  parseNumber() {
    this.skipSpaces();
    let start = this.index;
    let hasDigit = false;
    let hasDot = false;

    while (this.index < this.input.length) {
      const char = this.input[this.index];
      if (char >= "0" && char <= "9") {
        hasDigit = true;
        this.index += 1;
      } else if (char === "." && !hasDot) {
        hasDot = true;
        this.index += 1;
      } else {
        break;
      }
    }

    if (!hasDigit) {
      throw new Error("Invalid expression");
    }

    return Number(this.input.slice(start, this.index));
  }

  skipSpaces() {
    while (this.index < this.input.length && this.input[this.index] === " ") {
      this.index += 1;
    }
  }

  peek() {
    return this.index < this.input.length ? this.input[this.index] : "";
  }
}

module.exports = Calculator;
