const op = process.argv[2];
const n1 = parseFloat(process.argv[3]);
const n2 = parseFloat(process.argv[4]);

switch (op) {
  case 'add': console.log(n1 + n2); break;
  case 'sub': console.log(n1 - n2); break;
  case 'mul': console.log(n1 * n2); break;
  case 'div': console.log(n1 / n2); break;
  default: console.log('Invalid operation');
}

//use like node calc.js add 1 2