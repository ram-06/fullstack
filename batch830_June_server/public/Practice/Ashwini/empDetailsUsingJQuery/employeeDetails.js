function inputElements() {
	var empDetails = {}
	empDetails.empName = $("#empName").val();
	empDetails.empAge = $("#empAge").val();
	empDetails.empSalary = $("#empSalary").val();
	empDetails.empDep = $("#dep").val();
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
	console.log(empDetails.empName);
	$("#empNameD").text(empDetails.empName);
	$("#empAgeD").text(empDetails.empAge);
	$("#empSalaryD").text(empDetails.empSalary);
	$("#Tax").text(empDetails.tax);
	$("#empDepD").text(empDetails.empDep);
	$("#takeHomeSalary").text(empDetails.takeHomeSalary);
}