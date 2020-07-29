function inputElements() {
	var empDetails = {}
	empDetails.empName = document.querySelector("#empName").value;
	empDetails.empAge = document.querySelector("#empAge").value;
	empDetails.empSalary = document.querySelector("#empSalary").value;
	empDetails.empDep = document.querySelector("#dep").value;
	empDetails.tax = calculateTax(empDetails.empSalary);
	empDetails.takeHomeSalary = empDetails.empSalary - empDetails.tax;
	display(empDetails);
}
function calculateTax(empSalary){
	if(empSalary > 20000){
		tax = empSalary * 0.2;
	}else{
		tax = empSalary * 0.3;
	}
	return tax;
}
function display(empDetails){
	document.querySelector("#empNameD").innerText = empDetails.empName;
	document.querySelector("#empAgeD").innerText = empDetails.empAge;
	document.querySelector("#empSalaryD").innerText = empDetails.empSalary;
	document.querySelector("#Tax").innerText = empDetails.tax;
	document.querySelector("#takeHomeSalary").innerText = empDetails.takeHomeSalary;
}