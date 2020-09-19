function loadPage(type) {
	var url;
	var filename;
	switch (type) {
		
		case 'login':			
			filename = 'templates/login.htm';			
			break;
		case 'fgpwd':
			filename = 'templates/fgpwd.htm';
			break;
		case 'newsignup':
			filename = "templates/newsignup.htm"
			break;
		case 'proddetails':
			filename = 'templates/productDetails.htm'
	}
	getTemplateContentFromFile(filename);
}

function getTemplateContentFromFile(filename) {
	var container = "";
	$.ajax({
		url: filename,
		method: 'GET',
		success: function(res) {
		
			//document.querySelector("#container").innerHTML = res;
			$("#container").html(res);
			//$("#container").html("hello")
			
		},
		error: function(err) {
			console.log(err);
			console.log("error");
		}
	})
	
}

var logoutUser = () => {
	$.ajax({
		url: '/user/logout',
		method: 'GET',
		success: function(res) {
			loadPage('login');
			$(".logout").hide();
		},

	})
}

$(document).ready(function() {

	$.ajax({
		url: '/user/loginstatus',
		method: 'GET',
		data: 'JSON',
		success: function(res) {
			console.log(res);
			res = JSON.parse(res);console.log(res);
			if (res.status == true) {
				loadPage('proddetails');
				getProductData();
				$(".logout").show();
			} else {
				loadPage('login');
			}
		}
	})

	 // onload by default loat login page..
});

var maxTime = 5000;
var userIntrvl;

$(window).on("click", function(){
	clearInterval(userIntrvl);

	userIntrvl = setInterval(function(){
		console.log("user not using the web page for 5 sec,,lets make him logout");
		loadPage('login');
		$(".logout").hide();
	}, maxTime)

})
/*$(window).on("mouseover", function(){
	console.log("hello2")
}) */