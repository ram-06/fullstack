var readEmpData=function() {

	var employeeName, employeeGender, employeeAge, employeeDepartment, basicSalaray;
	var eDetails = {
		
		employeeName : document.querySelector("#e_name").value,
		employeeGender : document.querySelector("input[type=radio]:checked").value, 
		employeeAge : document.querySelector("#e_age").value,
		employeeDepartment : document.querySelector("#e_dept").value,
		basicSalaray : document.querySelector("#e_basicSalary").value
		
	}
	displayEmpInfo(eDetails.employeeName, eDetails.employeeGender, eDetails.employeeAge, eDetails.employeeDepartment, eDetails.basicSalaray);
}

function empSalCalc(basicSalaray) {
	var data = [];
	var pf = (12 / 100) * basicSalaray;
	var hra = (25 / 100) * basicSalaray;
	var totalSalary = 0;
	basicSalaray = parseInt(basicSalaray);
	totalSalary = basicSalaray + hra + pf;
	data = [totalSalary, basicSalaray, pf, hra];
	return data;
}

function displayEmpInfo(ename, gender, age, dept, bsal) {
	var totalSalary = empSalCalc(bsal);	
	document.querySelector("#eName").innerText = ename;
	document.querySelector("#eAge").innerText = age;
	document.querySelector("#eGender").innerText = gender;
	document.querySelector("#eDept").innerText = dept;
	displayEmpSal(totalSalary);

}
function displayEmpSal(data) {

	totalSalary = data[0];
	basicSalary = data[1];
	pf = data[2];
	hra = data[3];
	document.querySelector("#eBasicSalary").innerText =  basicSalary;
	document.querySelector("#eTotalSalary").innerText =  totalSalary;
	document.querySelector("#epf").innerText = pf;
	document.querySelector("#ehra").innerText = hra;

}


