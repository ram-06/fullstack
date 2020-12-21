var eDetails = {};
function EmployeePaySlip()
{
    eDetails.Name = document.querySelector("#eName").Value;
    eDetails.Gender = document.querySelector("input[name:gender]:checked");
    eDetails.Age = document.querySelector("#sAge").value;
    eDetails.Department = document.querySelector("#eDepartment").Value;
    eDetails.Basic_Salary = document.querySelector("#eBasic_Salary").Value;
    eDetails.Basic_Salary=[];
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
        sDetails.grade = "tax is 10%";
    } 
    else 
    {
        sDetails.grade = "tax is Zero";
    }

}
var displayData = function()
{
    document.querySelector("#Employee_Payslip").style.display = 'block';
    document.querySelector("#eName").innerHTML =  eDetails.Name ;
    document.querySelector("#eAge").innerHTML =  sDetails.Age ;
    document.querySelector("#eTotal_Salary").innerHTML = sDetails.Total_Salary;
    document.querySelector("#eHra").innerHTML = sDetails.Hra;
    document.querySelector("#eDepatment").innerHTML = sDetails.Department;
    
}