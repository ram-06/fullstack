var employeeDetails;

var empData = function(empdetails){
         		
    var ulTag = $("<ul></ul>").attr("class", "details")

    var liTag = $("<li></li>");
    var span1 = $("<span1></span1>").addclass("content1").html('<b>Name: </b>');
    liTag.append(span1);

    var span2 = $("<span2></span2>").addClass("content2").html(empdetails.name);
    liTag.append(span2);
    ulTag.append(liTag);

    var liTag2 = $("<li></li>");
    var span1 = $("<span1></span1>").addClass("content1").html('<b>Age: </b>');
    liTag2.append(span1);

    var span2 = $("<span2></span2>").addClass("content2").html( empdetails.age);
    liTag2.append(span2);
    ulTag.append(liTag2); 

    var liTag3 = $("<li></li>");
    var span1 = $("<span1></span1>").addClass("content1").html( '<b>Gender: </b>');
    liTag3.append(span1);

    var span2 = $("<span2></span2>").addClass("content2").html(empdetails.gender);
    liTag3.append(span2);
    ulTag.append(liTag3);

    var liTag4 = $("<li></li>");
    var span1 = $("<span1></span1>").addClass("content1").html('<b>Department: </b>');
    liTag4.append(span1);

    var span2 = $("<span2></span2>").addClass("content2").html(empdetails.department);
    liTag4.append(span2);
    ulTag.append(liTag4);

    var liTag5 = $("<li></li>");
    var imgTag = $("<img />").attr("src" ,empdetails.image );
    liTag5.append(imgTag);
    ulTag.append(liTag5);

    $(".container").append(ulTag);
};
             
function showEmployeDetails() {
    for(var i = 0; i <= employeeDetails.length; i++){
         	empData(employeeDetails[i]);     	   
     }
      
      $("#empDetailstBtn").style.display= 'none';
     //showemployeDetails();
   }
$(document).ready(function(){
  document.querySelector("#empDetailsBtn").addEventListener("click", function(){
   getInfo();
  });
})

function getInfo(){
  $.ajax({
    url:'http://localhost:8081/Assignments/Madhavi/assignment18/emp.json',
    method:"GET",
    dataType: 'JSON',
    success: function(res) {
         employeeDetails = res.empdetails;
    },
    error: function(err){
      console.log("err");
    }
  });
}