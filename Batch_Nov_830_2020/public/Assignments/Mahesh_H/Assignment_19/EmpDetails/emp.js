var eDetails = {};
function EmployeePaySlip()
{
    eDetails.Name = document.querySelector("#ename").value;
    eDetails.gender = document.querySelector("input[name=gender]:checked").value;
    eDetails.Age = document.querySelector("#eage").value;
    eDetails.Department = document.querySelector("#eDepartment").Value;
    eDetails.Basic_Salary = 0;
    eDetails.Basic_Salary=[];
    eDetails.Total_Salary = 0;
    displayData();
    getCalculation();
}

function getCalculation()
{
    eDetails.Total_Salary = 0;
    Hra = Basic_Salary * (24/100);
    Pf = Basic_Salary * (12/100);
    Total_Salary = Basic_Salary + Hra + Pf;
    getGrade();
}

function getGrade()
{
    eDetails.grade='';
    if(Total_Salary>100000)
    {
        eDetails.grade = "tax is 10%";
    } 
    else 
    {
        eDetails.grade = "tax is Zero";
    }

}
var displayData = function()
{
    document.querySelector("#EmployeePayslip").style.display = 'block';
    document.querySelector("#ename").innerHTML =  eDetails.Name ;
    document.querySelector("#eage").innerHTML =  eDetails.Age ;
    document.querySelector("#eTotal_Salary").innerHTML = eDetails.Total_Salary;
    document.querySelector("#eHra").innerHTML = eDetails.Hra;
    document.querySelector("#eDepatment").innerHTML = eDetails.Department;
    
}