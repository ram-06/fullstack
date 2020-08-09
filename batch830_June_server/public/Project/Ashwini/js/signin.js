function validatePassword(){
	if (document.querySelector("#uPassword").value !== document.querySelector("#uCPassword").value){
		console.log("I am from password");
		document.querySelector(".userDisplayMess").style.display = 'block'; 
		return false;
	}else{
		document.querySelector(".userDisplayMess").style.display = 'none';
		return true; 
	}
}
function userNameManidatoryFeild(){
	if(document.querySelector("#uName").value == ""){
		document.querySelector(".empty0").style.display = 'block';
		return false; 
	}else{
		document.querySelector(".empty0").style.display = 'none';
		return true; 
	}
}
function passwordManidatoryFeild(){	
	if(document.querySelector("#uPassword").value == ""){
		document.querySelector(".empty").style.display = 'block'; 
		return false;
	}else{
		document.querySelector(".empty").style.display = 'none';
		return true; 
	}
}
function cPasswodManidatoryFeild(){	
	if(document.querySelector("#uCPassword").value == ""){
		document.querySelector(".empty1").style.display = 'block'; 
		return false;	
	}else{
		document.querySelector(".empty1").style.display = 'none'; 
		return true;	
	}
}
function mobileManidatoryFeild(){		
	if(document.querySelector("#mNumber").value == ""){
		document.querySelector(".empty2").style.display = 'block'; 
		return false;	
	}else{
		document.querySelector(".empty2").style.display = 'none'; 
		return true;	
	}
}
function emailManidatoryFeild(){	
	if(document.querySelector("#uEmail").value == ""){
		document.querySelector(".empty3").style.display = 'block'; 
		return false;	
	}else{
		document.querySelector(".empty3").style.display = 'none'; 
		return true;	
	}
}
function validateAge(){
	if(document.querySelector("#uAge").value < 18){
		document.querySelector(".errorDisplay").style.display = 'block'; 	
		console.log("I am from Age block");
		return false;
	}else{
		document.querySelector(".errorDisplay").style.display = 'none'; 	
		return true;
	}
}
function submitUserDetails(){
	var fun1 = validatePassword();
	var fun2 = validateAge();
	var fun3 = userNameManidatoryFeild();
	var fun4 = passwordManidatoryFeild();
	var fun5 = cPasswodManidatoryFeild();
	var fun6 = mobileManidatoryFeild();
	var fun7 = emailManidatoryFeild();
	console.log(fun1 + "I am fun1");
	console.log(fun2 + "I am fun2");
	if (fun1 === true && fun2 === true && fun3 === true && fun4 === true && fun5 === true && fun6 === true && fun7 === true){
		saveData();
		document.querySelector("#loginPage").setAttribute("href", "login.html");
	}
}
function saveData(){
	var userDetails = {}
	userDetails.name = document.querySelector("#uName").value;
	userDetails.password = document.querySelector("#uPassword").value;
	userAge = document.querySelector("#uAge").value;
	userMobile = document.querySelector("#mNumber").value;
	userEmailID = document.querySelector("#uEmail").value;
}