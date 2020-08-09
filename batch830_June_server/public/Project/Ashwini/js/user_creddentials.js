function validateInput(){
	if(document.querySelector("#uemailId").value === ""){
		document.querySelector(".errorMessage").style.display = 'block';
	}else{
		document.querySelector("#loginPage").setAttribute("href", "login.html")
	}
}