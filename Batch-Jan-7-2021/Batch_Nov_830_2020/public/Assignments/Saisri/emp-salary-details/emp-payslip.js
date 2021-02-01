var empDetails = {};
function empData() {
    alert("hello");
    empDetails.fname = document.querySelector("#fname").value;
    empDetails.mname = document.querySelector("#mname").value;
    empDetails.lname = document.querySelector("#lname").value;
    empDetails.empid = document.querySelector("#empid").value;
    empDetails.gender = document.querySelector("input[name=gender]:checked").value;
    empDetails.emailid = document.querySelector("#eid").value;
    empDetails.phoneno = document.querySelector("#pno").value;
    empDetails.basicSalary = document.querySelector("#bsalary").value;
    empDetails.address = document.querySelector("#add").value;
    empDetails.country = document.querySelector("#spage").value;
    empDetails.state = document.querySelector("#spage1").value;
    empDetails.basicSalary = parseInt(empDetails.basicSalary);
    empDetails.pf = empDetails.basicSalary * 0.12 ;
    empDetails.pf = parseInt(empDetails.pf);
    console.log(empDetails.pf);
    empDetails.hra = empDetails.basicSalary * 0.24 ;
    empDetails.hra = parseInt(empDetails.hra);
    console.log(empDetails.hra);
    empDetails.totalSalary = empDetails.basicSalary + empDetails.pf + empDetails.hra;

    
    if(empDetails.gender == "male"){
        if(empDetails.totalSalary > 100000){
            empDetails.tax = empDetails.basicSalary * 0.15;
            console.log("emp salary is above 100000 the tax deduction is:" +empDetails.tax);
        }else if(empDetails.totalSalary > 50000){
            empDetails.tax = empDetails.basicSalary * 0.10;
            console.log("emp salary is above 50000 the tax deduction is:" +empDetails.tax);
        }else {
            console.log("tax is zero...");
        }
    }
    else if(empDetails.gender == "female") {
        if(empDetails.totalSalary > 100000){
            empDetails.tax = empDetails.basicSalary * 0.10;
            console.log("emp salary is above 100000 the tax deduction is:" +empDetails.tax);
        }else if(empDetails.totalSalary > 50000){
            empDetails.tax = empDetails.basicSalary * 0.05;
            console.log("emp salary is above 50000 the tax deduction is:" +empDetails.tax);
        }else {
            console.log("tax is zero...");
        }
    }
    console.log("the total salary of employee is:" +empDetails.totalSalary);
    clear();
    alert('loaded suuccess');
    displayData();
    };

function fun(event){
    console.log(event);
    if((event.keyCode >= 65 && event.keyCode <=90) || (event.keyCode >= 97 && event.keyCode <=122)){
        return true;
    }
    return false;
}


function clear(){
    document.getElementById("fname").value = '';
    document.getElementById("fname").value='';
    document.querySelector("#mname").value='';
    document.querySelector("#lname").value='';
    document.querySelector("#empid").value='';
    document.querySelector("input[name=gender]:checked").value=false;
    document.querySelector("#eid").value='';
    document.querySelector("#pno").value='';
    document.querySelector("#bsalary").value=''
    document.querySelector("#add").value='';
    document.querySelector("#spage").value='';
    document.querySelector("#spage1").value='';
   
}
var displayData = function() {
    document.querySelector("#user").style.display = "block";
    document.querySelector("#ename").innerHTML = empDetails.fname;
    document.querySelector("#eid").innerHTML = empDetails.empid;
    document.querySelector("#emptax").innerHTML = empDetails.tax;
    document.querySelector("#emppf").innerHTML = empDetails.pf;
    document.querySelector("#emphra").innerHTML = empDetails.hra;
    document.querySelector("#etotalsal").innerHTML = empDetails.totalSalary;
}