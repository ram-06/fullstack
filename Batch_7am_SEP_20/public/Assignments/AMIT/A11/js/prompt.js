//Dynamic Search

var employeeName, employeeGender, employeeName, departmentName;

// using prompt

employeeName = prompt("Enter the Student Name");
employeeGender = prompt("Mention your Gender here");

//prompt variables declararing

var m1 = prompt("Enter the m1 details");
m1 = parseInt(m1) //converts string to number
var m2 = prompt("Enter the m2 details");
m2 = parseInt(m2)
var m3 = prompt("Enter the m3 details");
m3 = parseInt(m3)
var m4 = prompt("Enter the m4 details");
m4 = parseInt(m4)
var m5 = prompt("Enter the m5 details");
m5 = parseInt(m5)

console.log("employeeName is " + employeeName);
console.log("employeeGender is " + employeeGender);


// total & avg
var total = m1 + m2 + m3 + m4 + m5;
console.log("total is" + total);
var avg = total / 5;
console.log("avg is " + avg);