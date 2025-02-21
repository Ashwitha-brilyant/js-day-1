
const employees = ["Alice-HR", "Bob-Engineering", "Charlie-Sales"];


const employeeObject = employees.reduce((acc, emp) => {
    const [name, department] = emp.split("-");
    acc[name] = department;
    return acc;
}, {});

console.log(employeeObject);
