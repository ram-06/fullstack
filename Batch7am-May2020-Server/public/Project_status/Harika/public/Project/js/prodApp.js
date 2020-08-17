function getProductDetails(){
	var productDataReq = $.ajax({
		url: "http://localhost:8082/get/all/product/details",
		method: "GET",
		dataType: "JSON",
		//corssDomain: true,
		//jsonpCallback: 'parseProdData',
	});

	productDataReq.done(function(res){
		console.log("done");
		LoadProductdetails(res);
	});

	productDataReq.fail(function(){

	});
}


function LoadProductdetails(data) {
	var template = Handlebars.compile($("#ProdDataTmplt").html());
	for (var i = 0; i < data.length; i++){
		console.log(i);
		$('.pageContainer').append(template(data[i]));
	}
}