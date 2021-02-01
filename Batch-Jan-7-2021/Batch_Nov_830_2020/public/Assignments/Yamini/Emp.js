var empDetails = {};


function generateDetails(){
    empDetails.name = document.querySelector("#ename").value;
    empDetails.age = document.querySelector("#eage").value;
    empDetails.gender = document.querySelector("input[name=gender]:checked").Value;
    empDetails.empBasicSalary = document.querySelector("#ebs").value;
    

    displayData();
    clear();
   
}

function calTotSal(){
	empDetails.hra  = empDetails.empBasicSalary *(24/100);
	empDetails.pf = empDetails.empBasicSalary *(12/100);
	empDetails.totalSalary = empDetails.empBasicSalary +empDetailshra+empDetails.pf;
}

function displayData(){
	calTotSal();
	if(empDetails.gender == "male"){
        if(empDetails.totalSalary > 100000){
            empDetails.tax = empDetails.empBasicSalary * 0.15;
            console.log("emp salary is above 100000 the tax deduction is:" +empDetails.tax);
        }else if(empDetails.totalSalary > 50000){
            empDetails.tax = empDetails.empBasicSalary * 0.10;
            console.log("emp salary is above 50000 the tax deduction is:" +empDetails.tax);
        }else {
            console.log("tax is zero...");
        }
    }
    else if(empDetails.gender == "female") {
        if(empDetails.totalSalary > 100000){
            empDetails.tax = empDetails.empBasicSalary * 0.10;
            console.log("emp salary is above 100000 the tax deduction is:" +empDetails.tax);
        }else if(empDetails.totalSalary > 50000){
            empDetails.tax = empDetails.empBasicSalary * 0.05;
            console.log("emp salary is above 50000 the tax deduction is:" +empDetails.tax);
        }else {
            console.log("tax is zero...");
        }
    }

    function fun(event){
    	console.log(event);
    	 if((event.keyCode >= 65 && event.keyCode <=90) || (event.keyCode >= 97 && event.keyCode <=122)){
        return true;
    }
    }

    function clear(){
    document.getElementById("ename").value = '';
    document.getElementById("eage").value='';
    document.querySelector("input[name=gender]:checked").value=false;
    document.querySelector("#ebs").value='';
    }

    var displayData1 = function() {
    document.querySelector("#user").style.display = "block";
    document.querySelector("#EmpName").innerHTML = empDetails.ename;
    document.querySelector("#EmpAge").innerHTML = empDetails.eage;
    document.querySelector("#EmpTax").innerHTML = empDetails.tax;
    document.querySelector("#EmpPf").innerHTML = empDetails.pf;
    document.querySelector("#EmpHra").innerHTML = empDetails.hra;
    document.querySelector("#EmpTotalSalary").innerHTML = empDetails.totalSalary;
}
}