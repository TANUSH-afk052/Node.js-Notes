class InsufficientFundsError extends Error {
  constructor(message) {
    super(message);
    this.name = "InsufficientFundsError";
  }
}

function withdraw(balance, amount) {
  if (amount > balance) {
    throw new InsufficientFundsError("Withdrawal amount exceeds account balance.");
  }
  return balance - amount;
}

try {
  const userBalance = 5000;
  const withdrawalAmount = 800;

  console.log(`💰 Current Balance: ₹${userBalance}`);
  console.log(`💸 Attempting Withdrawal: ₹${withdrawalAmount}`);

  const remainingBalance = withdraw(userBalance, withdrawalAmount);
  console.log(`✅ Withdrawal successful! Remaining Balance: ₹${remainingBalance}`);
} catch (error) {
  if (error instanceof InsufficientFundsError) {
    console.error(`❌ Transaction failed: ${error.message}`);
  } else {
    console.error(`💥 Unexpected error: ${error.message}`);
  }
}
