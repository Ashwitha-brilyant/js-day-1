const employees = [
    { name: "Alice", department: "HR" },
    { name: "Bob", department: "Engineering" },
    { name: "Charlie", department: "HR" },
    { name: "David", department: "Engineering" }
];

const groupedEmployees = employees.reduce((acc, emp) =>{
    if (!acc[emp.department]) {
        acc[emp.department] = [];
    }
    acc[emp.department].push(emp.name);
    return acc;
}, {});
console.log(employees);
console.log(groupedEmployees);
