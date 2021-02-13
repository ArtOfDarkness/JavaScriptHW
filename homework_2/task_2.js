let employeeSalaries = {
		director: 25000,
		secretary: 8000,
		accountant: 12000,
		programmer: 20000,
		developer: 21000,
		security: 7000
};

let salaryFund = 0;
for (let salary in employeeSalaries) {
	salaryFund += employeeSalaries[salary];
}

console.log("Дохід працівників склав " + salaryFund);