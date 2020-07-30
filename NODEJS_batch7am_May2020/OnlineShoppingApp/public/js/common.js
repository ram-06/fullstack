function loadTemplate(type) {
	switch (type) {
		case 'login':
			var loginTemplate = $("#loginTmplt").html();
			$(".pageContainer").html(loginTemplate);
			break;
		case 'fgpwd':
			var fgpwdTemplate = $("#fgpwdTmplt").html();
			$(".pageContainer").html(fgpwdTemplate);
			break;
		case 'pDetails':
			$(".pageContainer").html('');
			break;
	}
}

function registerDetails() {
	// code to read data, and send to server
	var userData = {};
	userData.accountId = $("#uid").val();
	userData.password = $("#password").val();
	userData.mailid = $("#mailId").val();

	$.ajax({
		url: "http://localhost:8081/user/newSignup",
		data: userData,
		method: 'POST',
		dataType: 'JSON',
		success: function(res) {
			console.log("success");
			console.log(res);
			$(".gotoLogin").show();
		}
	})

	console.log(userData);
	
}

$(document).ready(function(){
	loadTemplate('login');
});


