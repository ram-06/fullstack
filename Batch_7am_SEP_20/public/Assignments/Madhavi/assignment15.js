var employeeDetails = [
	{
    name : "Arun",
    age : 30,
    gender : "male",
    department : "IT",
    image :'https://images-na.ssl-images-amazon.com/images/I/518y8ZQ3gGL._SX355_.jpg'
  },
  {
    name : "Madhavi",
    age : 20,
    gender : "female",
    department : "IT",
    image : 'https://images-na.ssl-images-amazon.com/images/I/51d2miY7VAL._SX355_.jpg'
  },
  {
    name : "Kiran",
    age : 25,
    gender : "male",
    department : "IT",
    image : 'https://s.itl.cat/pngfile/s/55-554341_cute-baby-boy-images-photo-wallpaper-pictures-pics.jpg'
  },
  {
    name : "Praba",
    age : 23,
    gender : "female",
    department : "IT",
    image : 'https://i.pinimg.com/736x/2e/f5/38/2ef538b144db555f8dcd4bbc34c17e84.jpg'
  },
  {
    name : "Madhuri",
    age : 18,
    gender : "female",
    department : "IT",
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJfJwoq-PN622EcLBIhLmlrWou9muQB0AedQ&usqp=CAU'
  },
];
var empData = function(empdetails){
         		
    var ulTag = document.createElement("ul");
    ulTag.setAttribute("class", "details");

    var liTag = document.createElement("li");
    var span1 = document.createElement("span1");
    span1.setAttribute("class","content1");
    span1.innerHTML = '<b>Name: </b>';
    liTag.append(span1);

    var span2 = document.createElement("span2");
    span2.setAttribute("class","content2");
    span2.innerHTML = empdetails.name;
    liTag.append(span2);
    ulTag.append(liTag);

    var liTag2 = document.createElement("li");
    var span1 = document.createElement("span1");
    span1.setAttribute("class","content1");
    span1.innerHTML = '<b>Age: </b>';
    liTag2.append(span1);

    var span2 = document.createElement("span2");
    span2.setAttribute("class","content2");
    span2.innerHTML = empdetails.age;
    liTag2.append(span2);
    ulTag.append(liTag2); 

    var liTag3 = document.createElement("li");
    var span1 = document.createElement("span1");
    span1.setAttribute("class","content1");
    span1.innerHTML = '<b>Gender: </b>';
    liTag3.append(span1);

    var span2 = document.createElement("span2");
    span2.setAttribute("class","content2");
    span2.innerHTML = empdetails.gender;
    liTag3.append(span2);
    ulTag.append(liTag3);

    var liTag4 = document.createElement("li");
    var span1 = document.createElement("span1");
    span1.setAttribute("class","content1");
    span1.innerHTML = '<b>Department: </b>';
    liTag4.append(span1);

    var span2 = document.createElement("span2");
    span2.setAttribute("class","content2");
    span2.innerHTML = empdetails.department;
    liTag4.append(span2);
    ulTag.append(liTag4);

    var liTag5 = document.createElement("li");
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src",empdetails.image);
    liTag5.append(imgTag);
    ulTag.append(liTag5);

    document.querySelector(".container").append(ulTag);
};
             
function showEmployeDetails() {
    for(var i = 0; i < employeeDetails.length; i++){
         	empData(employeeDetails[i]);     	   
     }
      
      document.querySelector("#empDetailstBtn").style.display= 'none';
     //showemployeDetails();
   }
