var createContainer = function() {
	var divTag = document.createElement("div");
	divTag.setAttribute("class", "tskContainer");
	divTag.setAttribute("id", "tContainer");
	document.querySelector(".cBlock").append(divTag);
}

var showTaskToUser = function() {
	var uname = document.querySelector("#uname").value;
	var msg = uname + ' Please Finish the Project on time today';
	try {
		document.querySelector("#tContainer").innerHTML = msg;
	} finally {
		showWlcmMsg();
	} catch(err) {
		console.log(err);
		alert("make sure u click on create container  then go for show task");
	}
}

var showWlcmMsg = function() {
	var msg = "Thanks for using our page to get ur tasks";
	setTimeout(function(){
		document.querySelector(".wlcmBlock").innerHTML = msg;
		document.querySelector(".wlcmBlock").style.display = 'block';
	}, 2000);	
}