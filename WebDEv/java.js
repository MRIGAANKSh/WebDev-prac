class Calculator {
    sum(a, b) {
        return a + b;
    }

    sub(a, b) {
        return a - b;
    }

    multi(a, b) {
        return a * b;
    }

    div(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Cannot divide by zero";
        }
    }
}

class UpdateCalc extends Calculator {
    remainder(a, b) {
        return a % b;
    }
}

let c = new Calculator(); // Fixed instantiation
let result = c.sum(2.3, 4.5);
console.log(result); // Output: 6.8
