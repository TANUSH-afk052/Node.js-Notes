// student_log.js

console.log("🎓 Student Information");

const student = {
  name: "Thanos",
  rollNumber: "BCom2025_042",
  subjects: {
    English: 88,
    Accounts: 92,
    Economics: 79,
    Taxation: 85,
    Law: 91
  }
};

// Display student basic info
console.log(`🧑‍🎓 Name: ${student.name}`);
console.log(`📘 Roll Number: ${student.rollNumber}`);

// Display subject-wise marks as a table
console.table(student.subjects);

// Calculate total and average marks
console.time("Marks Calculation");

const marks = Object.values(student.subjects);
const total = marks.reduce((sum, m) => sum + m, 0);
const average = total / marks.length;

console.timeEnd("Marks Calculation");

console.log(`📊 Total Marks: ${total}`);
console.log(`📈 Average Marks: ${average.toFixed(2)}`);

// Bonus: Stack trace just for learning
console.trace("🧪 End of script trace (not an error)");
