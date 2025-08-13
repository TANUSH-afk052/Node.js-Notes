const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

(async () => {
  const name = await ask("Name? ");

  let age;
  while (true) {
    const input = await ask("Age? ");
    if (!isNaN(input) && input.trim() !== "") {
      age = Number(input);
      break;
    }
    console.log("❌ Please enter a valid number.");
  }

  const country = await ask("Country? ");

  console.log(`Hi ${name}, age ${age}, from ${country}`);
  rl.close();
})();
