
const personalDetails = { name: "Alice", age: 30 };
const jobDetails = { department: "HR", salary: 5000, designation: "Manager", experience: "5 years" };

const mergedEmployee = Object.assign({}, personalDetails, jobDetails);

console.log(mergedEmployee);
