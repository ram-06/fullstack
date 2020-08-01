function getProductData() {
	var pDetailsURL = 'http://localhost:8081/data/productDetails';
	var productDataReq = $.ajax({
		url: pDetailsURL,
		method: 'GET',
		dataType: 'JSON'
	});
	productDataReq.done(function(res){
		console.log("done");
		loadProductDetailsToPage(res);
	})
	productDataReq.fail(function(err){
		//...
	});
}

function loadProductDetailsToPage(data) {
	var divTag = $("<div class='link' onclick='loadTemplate(\"addProduct\")'>Add Product</div>");
	var logoutDiv = $("<div class='link' onclick='logoutUser()'>Logout</div>");

	var templateSpec = Handlebars.compile($("#pDetailsTmplt").html());
	$(".pageContainer").append(divTag);
	$(".pageContainer").append(logoutDiv);
	for (var i = 0 ; i < data.length; i++) {
		$('.pageContainer').append(templateSpec(data[i]));
	}
}

function addNewProduct() {
	var data = {};
	data.name = $("#pname").val();
	data.price = $("#pprice").val();
	data.manu = $("#pmanu").val();
	data.discount = $("#pdiscount").val();
	data.image =$("#pimage").val();

	var newProductReq = $.ajax({
		url: 'http://localhost:8081/data/addNewProduct',
		data: data,
		dataType: 'JSON',
		method: 'GET'
	});

	newProductReq.done(function(res){
		$(".statusupdate").html(res.msg);
	});
}