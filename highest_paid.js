
const employees = [
    { name: "Alice", salary: 5000 },
    { name: "Bob", salary: 7000 },
    { name: "Charlie", salary: 8000 },
    { name: "David", salary: 6500 }
];

const highestPaid = employees.reduce((max, emp) => (emp.salary > max.salary ? emp : max), employees[0]);

console.log(`Employee with highest salary: ${highestPaid.name} ($${highestPaid.salary})`);
