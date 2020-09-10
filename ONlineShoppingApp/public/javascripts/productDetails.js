var getProductData = () => {
	var url = "http://localhost:8081/get/data/productDetails";
	$.ajax({
		url: url,
		data: {},
		method: 'GET',
		dataType: 'JSON',
		success: (res) => {
			console.log("response");
			console.log(res);
			loadProductDataToPage(res.productDetails);
		},
		error: (err) => {
			console.log("error")
		}
	})
}

var loadProductDataToPage = (data) => {
	for (var i = 0 ; i < data.length; i++) {
		console.log(i)
		$(".productDetails").loadTemplate( $("#productTmplt"), data[i], {append: true});
	}
}