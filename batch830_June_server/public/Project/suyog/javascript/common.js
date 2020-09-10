function loadPage(type){
	var url;
	switch (type) {
		
		case 'login':
		console.log("hello");
		var loginTemp = $("#loginTemplt").html();
		$("#container").html(loginTemp);
		
		break;
	}
	//var loginTemp = $(".loginOuterContainer").html();
			//$(".container").html(loginTemp);
			
}
 // $(document.ready(function(){
 // 	loadPage('login');
 // });
$(document).ready(function(){
	loadPage('login'); // onload by default load login page..
});
