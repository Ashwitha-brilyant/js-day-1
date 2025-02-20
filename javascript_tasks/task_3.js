function calculateBonus(salary, rating) {
    let bonus = 0;

    if (rating === 5) {
        bonus = 0.2 * salary;
    } else if (rating === 4) {
        bonus = 0.1 * salary;
    } else if (rating <= 3){
        bonus = 0;
    }

    let finalSalary = salary + bonus;
    console.log(`Performance Rating: ${rating}`);
    console.log(`Final Salary with Bonus: $${finalSalary}`);
}

let baseSalary = 5000;
let performanceRating = 5; 
calculateBonus(baseSalary, performanceRating);
