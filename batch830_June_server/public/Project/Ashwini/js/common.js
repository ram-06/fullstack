function loadPage(type){
	var url;
	switch (type){
		case 'login':
			var loginTemp = $(".loginOuterContainer").html();
			$(".container").html(loginTemp);
			break;
		case 'frtPswd':
			var fgtPswdTemp = $(".fgtContainer").html();
			$(".container").html(fgtPswdTemp);
			break;
		case 'home':
			var homeTemp = $(".homeContainer").html();
			$(".container").html(homeTemp);
			break;
	}
}
$(document).ready(function(){
	loadPage('login'); // onload by default loat login page..
});
