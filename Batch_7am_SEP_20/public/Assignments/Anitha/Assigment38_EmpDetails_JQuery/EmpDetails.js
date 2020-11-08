var empList;

var empData=
{
	displayEmp:function loadEmpHeader(){
        var h1Tag=$("<h2></h2>")
         h1Tag.text("Employee Details")
         $("#container").append(h1Tag)
         empData.loadEmpData();
	},
	loadEmpData:function loadEmp() {
    	$.ajax({
		url: 'http://localhost:8081/Assignments/Anitha/Assigment38_EmpDetails_JQuery/EmpDetails.JSON',
		method: "GET",
		dataType: 'JSON',
		async: false,
		success: function(res) {
		   console.log(res)
		   empList=res.Employees
		},
		error: function(err) {
			console.log("error");
		}
	 });
  },
  displayEmpContent:function empContent() {
  	
  	 for (var i=0;i<empList.length;i++) {

  	 	 var ulTag=$("<ul></ul>")

  		 var liTag=$("<li></li>")
     	 liTag.html('<span> <b> FirstName : </b> </span><b>'+empList[i].firstName+'</b>')  	
      	 ulTag.append(liTag)

         var liTag=$("<li></li>")
     	 liTag.html('<span> <b> LastName : </b> </span>'+empList[i].lastName)  	
      	 ulTag.append(liTag)

      	 var liTag=$("<li></li>")
     	 liTag.html('<span> <b> Job Title Name: </b> </span>'+empList[i].jobTitleName)  	
      	 ulTag.append(liTag)

      	 var liTag=$("<li></li>")
     	 liTag.html('<span><b> Phone Number: </b> </span>'+empList[i].phoneNumber)  	
      	 ulTag.append(liTag)

      	 var liTag=$("<li></li>")
     	 liTag.html('<span> <b> Email Address : </b> </span>'+empList[i].emailAddress)  	
      	 ulTag.append(liTag)

      	 var liTag=$("<li></li>")
     	 liTag.html('<span> <b> Location: </b> </span>'+empList[i].region)  	
      	 ulTag.append(liTag)

      	 var imgTag=$("<img></img>")
      	 imgTag.attr('src',empList[i].imgAddress)
      	  ulTag.append(imgTag)

      	 $('#container').append(ulTag);

  	}
  	 
  }
};

$(document).ready(function(){
    empData.displayEmp();
    empData.displayEmpContent();
    console.log("ready",empList);
})
