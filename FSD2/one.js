console.log("SRIT");

let num = 12;
let str = "hello";
let bol = true;
let bigint = 473844453456786879n;
let null1 = null;

var name1 = "srit";
console.log(name1);

var name1 = "hi";  // Though better to avoid redeclaring 'var' multiple times
console.log(name1);

let course = "cse";

let age = 20;
console.log(age);

age = 21;
console.log(age);

const givenname = "srinivasa ramanujan";
console.log(givenname);

// The following reassignment would cause an error, so comment it out
// givenname = "ramanuja";  
// console.log(givenname);

function generateWelcomeMessage(name) {
    return "Welcome, " + name + "! Good Morning";
}

let welcome_message = generateWelcomeMessage("Ayyo");
console.log(welcome_message);
let studentName = "kamal";
let rollNo = "20MEC123";

function info(name, roll) {
    return `${name}, ${roll}`; 
}
console.log(info(studentName, rollNo));

let studentscore  = 100;

let addage = studentscore + 2;
let subage = studentscore - 2;
let mulage = studentscore * 2;
let divage = studentscore / 2;

console.log(addage);
console.log(subage);
console.log(mulage);
console.log(divage);

let length = 10;
let breadth = 10;
let area = length * breadth;
console.log(area);

let factnum = 10;
let fact = 1;
for (let i=1;i <= factnum; i++){
fact *= i
}
console.log(`Factorial of ${factnum} is: ${fact}`);

class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    division(a, b) {
        if (b === 0) {
            throw new Error("cannot divide by zero");
        }
        return a / b;
    }
}

const calc = new Calculator();
console.log("add:", calc.add(5, 3));
console.log("subtract:", calc.subtract(5, 3));
console.log("multiply:", calc.multiply(5, 3));
console.log("division:", calc.division(5, 3));

let price = 1000;
let time = 3;
let rate = 10;
 
let amount = price * Math.pow((1+rate/100),time);
let compoundIntrest = amount - price;
console.log("Total amount:",amount);
console.log("compound Intrest:",compoundIntrest);

let num1 = 5;
let i = 1;
    while (i <= 10) {
    console.log(num1 + " x " + i + " = " + (num1 * i));
    i++;
}
