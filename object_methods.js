
const employee = { 
    name: "John", 
    department: "IT", 
    salary: 5000, 
    age: 30 
};
employee.designation = "Software Engineer";
employee.salary *= 1.1;
delete employee.age;
console.log(employee);
