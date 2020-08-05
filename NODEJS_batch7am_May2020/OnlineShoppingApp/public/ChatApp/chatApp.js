var socket = io("http://localhost:8081");

function sendMsg() {
	var msg = $("#userMsg").val();
	$("#userMsg").val('');
	addMsg(msg, false);

	socket.emit("usermsg", msg);
}

socket.on("receivedata", function(msg){
	console.log("gotdata ->" + msg);
	addMsg(msg, true);
});

function addMsg(msg, isReceive) {
	var div = $("<div class='msgRow'></div>");
	if (isReceive) {
		div.addClass("rightAlign");
	} else {
		div.addClass("leftAlign");
	}
	div.html(msg);
	$(".chatContent").append(div);
}