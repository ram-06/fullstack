var employees = [
{
	name:"Ramu",
	id:"1",
	gender:"male",
	designation:"Software Developer",
	imgUrl:"./Images/emp1.jpg"
},
{
	name:"Ravi",
	id:"2",
	gender:"male",
	designation:"Software Developer",
	imgUrl:"./Images/emp2.jpg"
},
{
	name:"Siva Teja",
	id:"3",
	gender:"male",
	designation:"Devops Engineer",
	imgUrl:"./Images/emp3.jpg"
},{
	name:"Nagarjuna Rao",
	id:"4",
	gender:"male",
	designation:"Software Developer",
	imgUrl:"./Images/emp4.jpg"
},{
	name:"Raj",
	id:"5",
	gender:"male",
	designation:"Software Developer",
	imgUrl:"./Images/emp5.jpg"
},
];


var createEmployee = function(empObj,ulList){
	var list = document.createElement("li");
list.setAttribute("class","emp-box");
var innerUlList = document.createElement("ul");
var innerList1 = document.createElement("li")
    innerList1.setAttribute("class","emp-details");
	var span1 = document.createElement("span");
	var span2 = document.createElement("span");
	span1.innerHTML = "<strong>Name</strong> :";
	span2.innerHTML = empObj.name;
    innerList1.append(span1,span2);
var innerList2 = document.createElement("li")
    innerList2.setAttribute("class","emp-details");
	var span3 = document.createElement("span");
	var span4 = document.createElement("span");
	span3.innerHTML = "<strong>Employee ID</strong> :";
	span4.innerHTML = empObj.id;
	innerList1.append(span1,span2);
	innerList2.append(span3,span4);
var innerList3 = document.createElement("li");
	innerList3.setAttribute("class","emp-details");
	var span5 = document.createElement("span");
	var span6 = document.createElement("span");
	span5.innerHTML = "<strong>Gender</strong>";
	span6.innerHTML = empObj.gender;
    innerList3.append(span5,span6);
var innerList4 = document.createElement("li");
	innerList4.setAttribute("class","emp-details");
	var span7 = document.createElement("span");
	var span8 = document.createElement("span")
	span7.innerHTML = "<strong>Designation</strong>";
	span8.innerHTML = empObj.designation;
	innerList4.append(span7,span8);
var innerList5 = document.createElement("li");
	var imgTag = document.createElement("img");
	imgTag.setAttribute("src",empObj.imgUrl)
	imgTag.setAttribute("class","img");
	innerList5.append(imgTag);

innerUlList.append(innerList1,innerList2,innerList3,innerList4,innerList5);
list.append(innerUlList)
ulList.append(list);


}

var employeeDetails = function(){
	var ulList = document.createElement("ul");
	for(var i = 0;i<employees.length;i++){
      createEmployee(employees[i],ulList)
	}
	console.log(ulList)
	var container = document.querySelector(".content");
    container.append(ulList);
}
employeeDetails();