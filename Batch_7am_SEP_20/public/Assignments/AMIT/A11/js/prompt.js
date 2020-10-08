//Dynamic typecasting

var employeeName, employeeGender, employeeName, departmentName, basicSalary;

// using prompt

employeeName = prompt("Enter the Student Name");
employeeGender = prompt("Mention your Gender here");
departmentName = prompt("Enter Department Name");
basicSalary = prompt("Enter the basic salary of the employee");

console.log("employeeName is " + employeeName);
console.log("employeeGender is " + employeeGender);
console.log("departmentName is " + departmentName);
console.log("basicSalary is " + basicSalary);

var pf = ((basicSalary * 12) / 100);
console.log("pf is " + pf);
var hra = ((basicSalary * 24) / 100);
console.log("hra " + hra);
var totalSalary = pf + hra + basicSalary;
console.log("totalSalary is " + totalSalary);
var taxPercent = 0;
var male;
var female;


if (employeeGender === male) {
    if (totalSalary > 30000) {
        taxPercent = 15;

    } else if (totalSalary > 60000) {
        taxPercent = 10;
    }
}
if (employeeGender === female) {
    if (totalSalary > 30000) {
        taxPercent = 15;

    } else if (totalSalary > 60000) {
        taxPercent = 25;
    }
}

var taxValue = ((basicSalary * taxPercent) / 100);
console.log("tax value balance " + taxValue);