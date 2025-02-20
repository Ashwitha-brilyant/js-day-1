const readline = require('readline-sync');
let employeeID = readline.question("Enter Employee ID:");
employeeID = Number(employeeID);

if (employeeID % 2 === 0) {
    console.log("ID is even")
} else {
    console.log("ID is odd")
}
