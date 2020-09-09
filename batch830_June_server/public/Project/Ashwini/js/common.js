function loadPage(type){
	var url;
	var fileName;
	var cssFileName;
	switch (type){
		case 'login':
			fileName = "templets/login.htm";
			cssFileName = "homeContainer"
			//var loginTemp = $(".loginOuterContainer").html();
			//$(".container").html(loginTemp);
			break;
		case 'frtPswd':
			fileName = "templets/fgtPswd.htm";
			//var fgtPswdTemp = $(".fgtContainer").html();
			//$(".container").html(fgtPswdTemp);
			break;
		case 'home':
			fileName = "templets/home.htm";
			//var homeTemp = $(".homeContainer").html();
			//$(".container").html(homeTemp);
			break;
		case 'signUp':
			fileName = "templets/signin.htm"
	}
	getFileTemplete(fileName);
}
//$(document).ready(function(){
//	loadPage('login'); // onload by default loat login page..
//});
function getFileTemplete(fileName){
	var container = "";
	$.ajax({
		url: fileName,
		method: 'GET',
		success: function(res){
			$(".container").html(res);
			//ss$(".homeContainer").show();
			$("footer").hide();
			$("#loginHeading").hide();
		},
		error: function(err){
			console.log("error :" + err);
			console.log(res);
		}
	})
}
