var validateDetails = () => {
	var data = {};
	data.id = $("#uid").val();
	data.pwd = $("#upwd").val();
	console.log(data);

	$.ajax({
		url: 'http://localhost:8081/validate/user/details',
		method: 'POST',
		dataType: 'JSON',
		data: data,
		success: function(res) {
			console.log("response");
			console.log(res);
			if (res.msg == 'Valid') {
				loadPage('proddetails');
				getProductData();
			} else {
				$(".invalidErr").show();
			}
		},
		error: function(err) {
			console.log("error");
			console.log(err);
		}
	});
}