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

$(document).ready(function(){
	loadPage('login'); // onload by default loat login page..
});
