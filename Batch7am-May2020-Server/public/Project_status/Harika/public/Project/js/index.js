function loadtemplate(type) {
	switch (type) {
		 case 'login':
		 var loginTemplate = $("#loginTmplt").html();
		 $(".pageContainer").html(loginTemplate);
		 	break;
		 case 'signup':
		 var signupTemplate = $("#signupTmplt").html();
		 $(".pageContainer").html(signupTemplate);
		 	break;
		 case 'forgotpwd':
		 var forgotpwdTemplate = $("#fgpwdTmplt").html();
		 $(".pageContainer").html(forgotpwdTemplate);
		 	break;
		 case 'prodDetails':
		 $(".pageContainer").html('');
			break;
	}
}

$(document).ready(function (){
	loadtemplate('login');
});
