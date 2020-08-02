var readInputData = function(){
	var studentDetails = {
		"accountDetails" : {},
		"addressDetails" : {},
		"educationDetails" : {},
		"aboutYourself" : ""
	};

	studentDetails.accountDetails.userAccountId = document.querySelector("#uid").value;
	studentDetails.accountDetails.password = document.querySelector("#upwd").value;
	studentDetails.accountDetails.mailId = document.querySelector("#umail").value;
	studentDetails.accountDetails.reEnterPasswordId = document.querySelector("#urepwd").value;
	studentDetails.accountDetails.gender = document.querySelector("input[id=gender]:checked").value;

	studentDetails.addressDetails.streetNo = document.querySelector("#ustreet").value;
	studentDetails.addressDetails.country = document.querySelector("#ucountry").value;
	studentDetails.addressDetails.doorNo = document.querySelector("#udrno").value;
	studentDetails.addressDetails.state = document.querySelector("#ustate").value;
	studentDetails.addressDetails.pinCode = document.querySelector("#upincd").value;

	studentDetails.educationDetails.qualification = document.querySelector("#uqual").value;

	studentDetails.aboutYourself = document.querySelector("#uabout").value;
	checkBox(studentDetails);
	displayStudentDetails(studentDetails);
}

function checkBox(studentDetails){
	studentDetails.educationDetails.languages = [];
	var checkboxElements = document.querySelectorAll("input[name=languages]");
	for(var i = 0; i < checkboxElements.length ; i++){
		console.log(checkboxElements[i].checked + ' ' + checkboxElements[i].value);
		if(checkboxElements[i].checked){
			studentDetails.educationDetails.languages.push(checkboxElements[i].value);
		}
	}
}

var displayStudentDetails = function(studentDetails){
	console.log(studentDetails.accountDetails);
	console.log(studentDetails.addressDetails);
	console.log(studentDetails.educationDetails.languages);
	console.log(studentDetails.educationDetails.qualification);
	console.log(studentDetails.aboutYourself);
}