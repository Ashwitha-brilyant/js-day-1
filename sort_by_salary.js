
const employees = [
    { name: "Alice", salary: 4000 },
    { name: "Bob", salary: 3000 },
    { name: "Charlie", salary: 6000 }
];
employees.sort((a, b) => a.salary - b.salary);

console.log(employees);
