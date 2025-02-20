const readline = require('readline-sync');
const employeeName = readline.question();
const baseSalary = readline.question();
const basicSalary = parseFloat(baseSalary)
if (isNaN(basicSalary)) {
    console.log("Invalid salary");
} else {
const HRA = 0.2 * basicSalary;
const taxDeduction = 0.1 * basicSalary;

const netSalary = basicSalary + HRA - taxDeduction;

console.log("\nEmployee:" + employeeName);
console.log("Net Salary:$" + netSalary);
}