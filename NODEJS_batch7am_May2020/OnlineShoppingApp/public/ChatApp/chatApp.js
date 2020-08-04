function sendMsg() {
	var msg = $("#userMsg").val();
	$("#userMsg").val('');
	addMsg(msg, false);
}

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