

$(document).ready(function(){
	if (sessionStorage.getItem("userName") != null) {
	
		showWlcmMsg(sessionStorage.getItem("userName"))
	}

	if (sessionStorage.getItem("userClr") != null) {
		changeTheme(sessionStorage.getItem("userClr"))
	}

})

function saveDetails() {
	var uname = $("#uname").val();
	sessionStorage.setItem("userName", uname);
	showWlcmMsg(uname);
}

function showWlcmMsg(name) {

	var msg = "Hey Mr." + name + " Welcome to page";
	$("#wlcmBlck").html(msg);
	$("#wlcmBlck").show(3000);
}

function applyTheme(event) {
	var color =  $(event.target).val();
	sessionStorage.setItem("userClr", color);
	changeTheme(color);
}

function changeTheme(colorname) {
	$("body").css("background-color", colorname);
}