function loadPage(type) {
	var url;
	switch (type) {
		
		case 'login':			
			//url = "login.html";
			var loginTemplt = $("#loginTmplt").html();
			$("#container").html(loginTemplt);
			break;
		case 'fgpwd':
			//url = "fogotPwd.html";
			
			var fgpwdTmplt = $("#frgtPwdTmplt").html();
			
			$("#container").html(fgpwdTmplt);
			break;
		case 'newsignup':
			//url = "newSignup.html";
			var signupTmplt = $("#signupTmplt").html();
			$("#container").html(signupTmplt);
			break;
	}
	//window.location.href = url;
}

$(document).ready(function(){
	loadPage('login'); // onload by default loat login page..
});
