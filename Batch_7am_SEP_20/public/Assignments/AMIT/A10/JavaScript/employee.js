var employeeName = 'Amit';
var employeeGender = 'Male';
var departmentName = 'AKM';
var basicSalary = 4000000;

// pf%12 & hra %24

var pf = basicSalary / 12;
var hra = basicSalary / 24;

var totalSalary = pf + hra + basicSalary;

// total slary of the employee

console.log("totalSalary is " + totalSalary);