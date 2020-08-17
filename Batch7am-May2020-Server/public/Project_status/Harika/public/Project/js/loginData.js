function readLoginData () {
	var uData = {};
	uData.id = $("#uid").val();
	if (!uData.id) {
		$(".uidError").show();
		return;
	} else {
		$(".uidError").hide();
	}

	uData.pwd = $("#upwd").val();
	if (!uData.pwd) {
		$(".upwdError").show();
		return;
	} else {
		$(".upwdError").hide();
	}
	
	var loginReq = $.ajax({
		url : 'http://localhost:8082/get/login/details',
		method : 'GET',
		data : uData,
		dataType : 'JSON',
	});

	loginReq.done(function(res){
		console.log(res);
		if (res.msg == 'invalid') {
			$(".mask").show();
			$(".popup").show();
		} else {
			loadtemplate('prodDetails');
			getProductDetails();


		}

	});

	loginReq.fail(function(err){
		console.log("error")
	})


}

function closepopup() {
	$(".popup").hide();
	$(".mask").hide();
}

//------Pwd Visibility-----//

var state = false;
function toggle(){
	if (state) {
		$(".password").attr("type", "password");
		$("#eye").css("color","#ccc");
		state = false;
	} else {
		$(".password").attr("type", "text");
		$("#eye").css("color", "yellow");
		state = true;
	}
}

//------UserName Validation-----//

function validateUid(event) {
	console.log(event.charCode);
	console.log("user typed a key");
	var isLengthValid = false;
	var isValidChar = false;

	var value = event.target.value;
	if(value.length >= 17) {
		isLengthValid = false;
	} else{
		isLengthValid = true;
	}

	if ((event.charCode >= 97 && event.charCode <= 122 ) ||
	   (event.charCode >= 65 && event.charCode <= 90)) {
		isValidChar = true;
	} else {
		isValidChar = false;
	}

	if (isLengthValid && isValidChar) {
		return true;
	} else {
		return false;
	}
}

//-------Pwd Validation------//

function validatePwd(event) {
	console.log(event.charCode);
	console.log("user typed a key");
	var isLengthValid = false;
	var isValidChar = false;

	var value = event.target.value;
	if(value.length >= 8) {
		isLengthValid = false;
	} else{
		isLengthValid = true;
	}

	 
	//64 = @, 42 = *, 95 = _, 35 = #, != 33, $ = 36,  % = 37, ^ = 94, & = 38
	// 97 to 122(small alphabets), 65 to 90(Capital letters), 48 to 57(numbers)
	if ((event.charCode >= 97 && event.charCode <= 122) ||
	 	(event.charCode >= 65 && event.charCode <= 90) ||
	  	(event.charCode >= 48 && event.charCode <= 57) || 
	  	(event.charCode == 64) || (event.charCode == 42) || 
	  	(event.charCode == 95) || (event.charCode == 35) ||
	    (event.charCode == 33) || (event.charCode == 36) ||
	    (event.charCode == 37) || (event.charCode == 38) ||
	    (event.charCode == 94)) {
		
		isValidChar = true;
	} else {
		isValidChar = false;
	}

	if (isLengthValid && isValidChar) {
		return true;
	} else {
		return false;
	}
}

