function loadPage(type){
	var url;
	switch (type) {
		
		case 'login':
		var loginTemplt = $("#loginTemplt").html();
		$("#container").html(loginTemplt)
		break;
	}
}
  $(document.ready(function(){
  	loadPage('login');
  })