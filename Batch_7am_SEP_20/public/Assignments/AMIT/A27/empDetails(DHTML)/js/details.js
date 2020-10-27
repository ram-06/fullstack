// displaying multiple employee details

alert("Welcome To Employee Data Report");

// css - main header part

var divTag = document.createElement("div");
divTag.innerHTML = "EmployeeDetails(DHTML)";
divTag.setAttribute("id", "sample");
divTag.setAttribute("class", "container");
divTag.style.fontSize = "50px";
divTag.style.border = "6px solid red";
divTag.style.backgroundColor = "grey";
divTag.style.textAlign = "center";

console.log(divTag);

// creating block 0 for employee data 

var ulTag = document.createElement("ul");
ulTag.innerHTML = "Employee Data 1";
ulTag.style.textDecoration = "underline";
ulTag.style.border = "4px dotted brown";
ulTag.style.margin = "10px";
ulTag.style.width = "280px";
ulTag.style.height = "300px";
ulTag.style.fontSize = "25px";

// creating block 1 for employee data 

var ulTag1 = document.createElement("ul1");
ulTag1.innerHTML = "Employee Data 2";
ulTag1.style.textDecoration = "underline";
ulTag1.style.border = "4px dotted brown";
ulTag1.style.textAlign = "center";
ulTag1.style.margin = "10px";
ulTag1.style.float = "left";
ulTag1.style.width = "320px";
ulTag1.style.height = "300px";
ulTag1.style.fontSize = "25px";

// creating block 2 for employee data 

var ulTag2 = document.createElement("ul2");
ulTag2.innerHTML = "Employee Data 3";
ulTag2.style.textDecoration = "underline";
ulTag2.style.border = "4px dotted brown";
ulTag2.style.textAlign = "center";
ulTag2.style.margin = "10px";
ulTag2.style.float = "left";
ulTag2.style.width = "300px";
ulTag2.style.height = "300px";
ulTag2.style.position = "absolute";
ulTag2.style.top = '42%';
ulTag2.style.right = '40%';
ulTag2.style.fontSize = "25px";

// creating block 3 for employee data 

var ulTag3 = document.createElement("ul3");
ulTag3.innerHTML = "Employee Data 4";
ulTag3.style.textDecoration = "underline";
ulTag3.style.border = "4px dotted brown";
ulTag3.style.textAlign = "center";
ulTag3.style.margin = "10px";
ulTag3.style.float = "left";
ulTag3.style.width = "300px";
ulTag3.style.height = "300px";
ulTag3.style.float = "right";
ulTag3.style.position = "absolute";
ulTag3.style.top = "62%";
ulTag3.style.right = '2%';
ulTag3.style.fontSize = "25px";


// creating block 4 for employee data 

var ulTag4 = document.createElement("ul4");
ulTag4.innerHTML = "Employee Data 5";
ulTag4.style.textDecoration = "underline";
ulTag4.style.border = "4px dotted brown";
ulTag4.style.textAlign = "center";
ulTag4.style.margin = "10px";
ulTag4.style.float = "left";
ulTag4.style.width = "330px";
ulTag4.style.height = "300px";
ulTag4.style.position = "absolute";
ulTag4.style.top = "12%";
ulTag4.style.right = '2%';
ulTag4.style.fontSize = "25px";


document.querySelector("#container").append(divTag);
document.querySelector("#container").append(ulTag);
document.querySelector("#container").append(ulTag1);
document.querySelector("#container").append(ulTag2);
document.querySelector("#container").append(ulTag3);
document.querySelector("#container").append(ulTag4);

// list tag for employee data 

var liTag = document.createElement("li");
liTag.innerHTML = '<b>Name:AMIT </b> ID:1230 <b/> Comapny:Wipro </b>';
liTag.style.color = "green";
liTag.style.float = "left";
liTag.style.position = "absolute";
liTag.style.top = "20%";
liTag.style.left = "2%";

// list tag for employee data 1

var liTag1 = document.createElement("li1");
liTag1.innerHTML = '<b>Name:Harshad </b> ID:009 <b/> Comapny:Grow More </b>';
liTag1.style.color = "green";
liTag1.style.float = "left";
liTag1.style.position = "absolute";
liTag1.style.top = "70%";
liTag1.style.left = "2%";

// list tag for employee data 2

var liTag2 = document.createElement("li2");
liTag2.innerHTML = '<b>Name:Mark </b> ID:1230 <b/> Comapny:Facebook </b>';
liTag2.style.color = "green";
liTag2.style.float = "left";
liTag2.style.position = "absolute";
liTag2.style.top = "50%";
liTag2.style.left = "37%";

// list tag for employee data 3

var liTag3 = document.createElement("li3");
liTag3.innerHTML = '<b>Name:Jan Koum</b> ID:1230 <b/> Comapny:Whats App </b>';
liTag3.style.color = "green";
liTag3.style.float = "left";
liTag3.style.position = "absolute";
liTag3.style.top = "20%";
liTag3.style.right = "3%";

// list tag for employee data 4

var liTag4 = document.createElement("li4");
liTag4.innerHTML = '<b>Name:Sujith </b> ID:1230 <b/> Comapny:Gpay </b>';
liTag4.style.color = "green";
liTag4.style.float = "left";
liTag4.style.position = "absolute";
liTag4.style.top = "70%";
liTag4.style.right = "5%";

document.querySelector("#container").append(liTag);
document.querySelector("#container").append(liTag1);
document.querySelector("#container").append(liTag2);
document.querySelector("#container").append(liTag3);
document.querySelector("#container").append(liTag4);