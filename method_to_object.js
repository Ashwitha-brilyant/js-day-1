
const employee = {
    name: "Alice",
    department: "HR",
    salary: 5000,
    
    getDetails() {
        return `${this.name} works in ${this.department} and earns $${this.salary}`;
    }
};
console.log(employee.getDetails());
