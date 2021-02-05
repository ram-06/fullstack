var readUserDetails = function() {
	var data = {};
	data.name = $("#uid").val();
	data.pwd = $("#upwd").val();
	var request = $.ajax({
		url: 'http://localhost:8080/data/user/login',
		method: 'GET',
		data: 'JSON'
	});

	request.done(function(response){
		console.log("success");
		console.log(response)
	});

	request.fail(function(err){
		console.log("error")
	});
}