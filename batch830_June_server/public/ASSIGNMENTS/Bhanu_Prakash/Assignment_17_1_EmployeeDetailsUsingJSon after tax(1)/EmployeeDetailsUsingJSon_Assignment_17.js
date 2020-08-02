var readEmpData = function() {
	var eDetails = {};
	var employeeName, employeeGender, employeeAge, employeeDepartment, basicSalary, totalSalary, hra, pf, tax;

	eDetails.employeeName = document.querySelector("#e_name").value;
	eDetails.employeeGender = document.querySelector("input[name=gender]:checked").value;
	eDetails.employeeAge = document.querySelector("#e_age").value;
	eDetails.employeeDepartment = document.querySelector("#e_dept").value;
	eDetails.basicSalary = document.querySelector("#e_basicSalary").value;

	displayEmpInfo(eDetails.employeeName, eDetails.employeeGender, eDetails.employeeAge, eDetails.employeeDepartment, eDetails.basicSalary);
	var data = empSalCalc(eDetails.basicSalary);
	eDetails.totalSalary = data.totSal;
	eDetails.basicSalary = data.basicSal;
	eDetails.pf = data.pf;
	eDetails.hra = data.hra;
	eDetails.tax = getTax(eDetails.totalSalary);
	eDetails.totalSalary = eDetails.totalSalary - eDetails.tax;
	displayEmpInfo(eDetails);

}

var getTax = function(totalSalary) {
	var tax ='';
	if(totalSalary < 25000){
		tax = (10 / 100) * totalSalary;
	} else {
		tax = (20 / 100) * totalSalary;
	}
	return tax;
}

var empSalCalc = function (basicSalary) {
	var pf = (12 / 100) * basicSalary;
	var hra = (25 / 100) * basicSalary;
	var totalSalary = 0;
	basicSalary = parseInt(basicSalary);
	totalSalary = basicSalary + hra + pf;
	
	//console.log(totalSalary)
	var data = {
		"totSal" : totalSalary,
		"basicSal" : basicSalary,
		"pf" : pf,
		"hra" : hra
	};
	return data;
}

function displayEmpInfo(eDetails) {
	document.querySelector("#eName").innerText = eDetails.employeeName;
	document.querySelector("#eAge").innerText = eDetails.employeeAge;
	document.querySelector("#eGender").innerText = eDetails.employeeGender;
	document.querySelector("#eDept").innerText = eDetails.employeeDepartment;
	document.querySelector("#eBasicSalary").innerText =  eDetails.basicSalary;
	document.querySelector("#eTotalSalary").innerText =  eDetails.totalSalary;
	document.querySelector("#epf").innerText = eDetails.pf;
	document.querySelector("#ehra").innerText = eDetails.hra;
	document.querySelector("#etax").innerText = eDetails.tax;
}


