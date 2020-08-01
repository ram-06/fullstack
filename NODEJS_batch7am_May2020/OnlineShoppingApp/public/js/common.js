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
			getProductData();
			break;
		case 'addProduct':
			var addproductTmplt = $("#addProductTmplt").html();
			$(".pageContainer").html(addproductTmplt);
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

function logoutUser() {
	var doLogout = $.ajax({
		url: 'http://localhost:8081/user/loginstatus',
		method: 'GET',
		dataType: 'JSON',
		data: {
			killSession: true
		}
	});
	doLogout.done(function(res){
		console.log(res);
		loadTemplate('login');
	})
}

$(document).ready(function(){
	var sessionCheck = $.ajax({
		url: 'http://localhost:8081/user/loginstatus',
		method: 'GET',
		dataType: 'JSON'
	});

	sessionCheck.done(function(res){
		console.log(res);
		if (res.status == true) {
			loadTemplate('pDetails')
		} else {
			loadTemplate('login');
		}
	});
});


