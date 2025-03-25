class Calculator {
    constructor() {
        this.result = 0;
    }

    add(value) {
        this.result += value;
        return this.result;
    }

    subtract(value) {
        this.result -= value;
        return this.result;
    }

    multiply(value) {
        this.result *= value;
        return this.result;
    }

    divide(value) {
        if (value === 0) {
            throw new Error("Cannot divide by zero");
        }
        this.result /= value;
        return this.result;
    }

    reset() {
        this.result = 0;
        return this.result;
    }

    getResult() {
        return this.result;
    }
}

// Example usage:
const calculator = new Calculator();
console.log(calculator.add(10)); // 10
console.log(calculator.subtract(5)); // 5
console.log(calculator.multiply(3)); // 15
console.log(calculator.divide(5)); // 3
console.log(calculator.reset()); // 0

module.exports = Calculator;