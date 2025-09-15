function calculator(a, b, operator) {
    let result;
    if (operator === '+') {
        result = a + b;
    }
    if (operator === '-') {
        result = a - b;
    }
    if (operator === '*') {
        result = a * b;
    }
    if (operator === '/') {
        if (b !== 0) {
            result = a / b;
        } else {
            result = 'Error: Division by zero';
        }
    }
    if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
        result = 'Error: Invalid operator';
    }
    return result;
}

// Example usage:
console.log(calculator(10, 5, '+')); // 15
console.log(calculator(10, 5, '-')); // 5
console.log(calculator(10, 5, '*')); // 50
console.log(calculator(10, 5, '/')); // 2
console.log(calculator(10, 0, '/')); // Error: Division by zero
console.log(calculator(10, 5, '%')); // Error: Invalid operator