var loadPage = function(type) {
	switch (type) {
		case 'login':
			var logincode = $("#loginTmplt").html();
			$("maincontainer").html(logincode);
			break;
		case 'register':
			var regCode = $("#regTmplt").html();
			$("maincontainer").html(regCode);
			break;
		case 'fgpage':
			var fgCode = $("#fgPwdTmplt").html();
			$("maincontainer").html(fgCode);
			break;
	}
}

var signup = function() {
	loadPage('register');
}

var getPasswrd = function() {
	
	loadPage('fgpage');
}

$(document).ready(function(){
	loadPage('login');
});
