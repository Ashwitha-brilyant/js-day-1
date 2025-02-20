function assignDepartment(jobRole) {
    let department;

    switch (jobRole.toLowerCase()) {
        case "hr":
            department = "Human Resources";
            break;
        case "developer":
            department = "Software Engineering";
            break;
        case "manager":
            department = "Management";
            break;
        case "sales":
            department = "Sales & Marketing";
            break;
        default:
            department = "Unknown Department";
    }

    console.log(`Enter Job Role: ${jobRole}`);
    console.log(`Assigned Department: ${department}`);
}

let jobRole = "Developer";
assignDepartment(jobRole);
