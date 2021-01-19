

$(document).ready(function(){
	if (localStorage.getItem("userName") != null) {
	
		showWlcmMsg(localStorage.getItem("userName"))
	}

	if (localStorage.getItem("userClr") != null) {
		changeTheme(localStorage.getItem("userClr"))
	}

})

function saveDetails() {
	var uname = $("#uname").val();
	localStorage.setItem("userName", uname);
	showWlcmMsg(uname);
}

function showWlcmMsg(name) {

	var msg = "Hey Mr." + name + " Welcome to page";
	$("#wlcmBlck").html(msg);
	$("#wlcmBlck").show(3000);
}

function applyTheme(event) {
	var color =  $(event.target).val();
	localStorage.setItem("userClr", color);
	changeTheme(color);
}

function changeTheme(colorname) {
	$("body").css("background-color", colorname);
}