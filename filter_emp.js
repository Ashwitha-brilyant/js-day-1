
const employees = [
    { name: "Alice", department: "HR" },
    { name: "Bob", department: "Engineering" },
    { name: "Charlie", department: "Sales" },
    { name: "Anna", department: "HR" },
    { name: "David", department: "Marketing" }
];
const hrEmployees = employees.filter(emp => emp.department === "HR");

console.log("HR Employees:", hrEmployees);
