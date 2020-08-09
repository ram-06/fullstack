function saveData(){
	var userDetails = {}
	userDetails.name = document.querySelector("#uName").value;
	userDetails.password = document.querySelector("#uPassword").value;
	userAge = document.querySelector("#uAge").value;
	userMobile = document.querySelector("#mNumber").value;
	userEmailID = document.querySelector("#uEmail").value;
}
function validatePassword(){
	if (document.querySelector("#uPassword").value !== document.querySelector("#uCPassword").value){
		document.querySelector(".userDisplayMess").style.display = 'block'; 
	}else{
		document.querySelector(".userDisplayMess").style.display = 'none'; 
	}
}
