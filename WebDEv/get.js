class Emp {
    
    constructor(name, salary) {
        this.name = name;
        this._salary = salary; // Use a private-like variable (_salary)
    }

    // Getter for salary
    get salary() {
        return this._salary;
    }

    // Setter for salary (ensuring it is not negative)
    set salary(amount) {
        if (amount >= 0) {
            this._salary = amount;
        } else {
            console.log("Salary cannot be negative!");
        }
    }
}

// Example usage:
const emp1 = new Emp("John", 50000);
console.log(emp1.salary); // 50000 (getter is used)

emp1.salary = 60000; // Setting new salary
console.log(emp1.salary); // 60000

emp1.salary = -1000; // Trying to set a negative salary
// Output: "Salary cannot be negative!"
