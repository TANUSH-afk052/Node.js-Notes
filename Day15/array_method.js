const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);
const even = numbers.filter(n => n % 2 === 0);
const total = numbers.reduce((sum, n) => sum + n, 0);

console.log("Doubled:", doubled);
console.log("Even Numbers:", even);
console.log("Total:", total);

//output:
Doubled: [ 2, 4, 6, 8, 10 ]  
Even Numbers: [ 2, 4 ]  
Total: 15
