

var validateUserDetails = function() {
	var data = {};
	data.name = $("#uid").val();
	data.pwd = $("#upwd").val();
	var loginReq = $.ajax({
		url: 'http://localhost:8081/data/validate',
		data: data,
		method: 'POST',
		dataType: 'JSON'
	});

	loginReq.done(function(res){
		console.log("succss");
		console.log(res);
		if (res.msg == 'VALID') {
			getProductDetails();
		} else { //invalid
			$(".errMsg").html("Invalid user credentials...");
		}
	});
	loginReq.fail(function(err){
		console.log("ERror");
		console.log(err);
	});
}