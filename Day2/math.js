function add(a, b) {
  return a + b;
}
module.exports = add;
function square(n) {
  return n * n;
}

console.log(add(5, 3));     // 8
console.log(square(6));     // 36


function multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Error: Inputs must be numbers.';
    }
    return a * b;
}

function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Error: Inputs must be numbers.';
    }
    if (b === 0) {
        return 'Error: Cannot divide by zero.';
    }
    return a / b;
}

const a = 20;
const b = 4;

console.log('Multiply:', multiply(a, b));
console.log('Divide:', divide(a, b));
