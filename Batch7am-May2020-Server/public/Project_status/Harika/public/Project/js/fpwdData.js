function readFpwdData() {
	var uData = {};

	uData.email = $("#mailId").val();
	if (!uData.email) {
		$(".mailIdError").show();
		return;
	} else {
		$(".mailIdError").hide();
	}

//--------Email Validation-------//

	var pattern = /^[A-Za-z0-9._]{3,}@[a-z]{5}[.]{1}[a-z]{2,3}$/;

	if (uData.email.match(pattern)){
		$("#emailcheck").html("valid email id");
		$("#emailcheck").css({"color":"green", "margin-top":"-15px", "font-size":"15px"});
	} else {
		$("#emailcheck").html("Invalid email id");
		$("#emailcheck").css({"color":"red", "margin-top":"-15px", "font-size":"15px"});
	}

	console.log(uData);
}




