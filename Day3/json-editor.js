const fs = require('fs');

const name = process.argv[2];
const age = process.argv[3];

const user = {
  name,
  age
};

fs.writeFileSync('user.json', JSON.stringify(user, null, 2));
console.log('User saved to user.json');
