var getProductDetails = function() {
	$('maincontainer').html('');
	// get data through REST API
	var dataUrl = 'http://localhost:8081/data/prodData';
	var dataReq = $.ajax({
		url: dataUrl,
		method: 'GET',
		dataType: 'JSON'
	});

	dataReq.done(function(res){
		console.log("success");
		console.log(res);
		loadDetailsToPage(res.pdata);
	});
	dataReq.fail(function(err){
		console.log("ERROR");
	});
}

var loadDetailsToPage = function(data) {
	var template = Handlebars.compile($("#prdTmplt").html());
	for (var i = 0; i < data.length; i++) {
  		var pDataView = template(data[i]);
  		$('maincontainer').append(pDataView);
	}
}