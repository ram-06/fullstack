
var pDetails;

function getData() {
	// document.querySelector(".loadingBlock").style.display = 'block';
	$(".loadingBlock").show();
	$.ajax({
		url: 'http://localhost:8081/data/product/details',
		method: 'GET',
		dataType: 'JSON',
		data: {},
		success: function(res) {
			$(".loadingBlock").hide();
			pDetails = res.productData;
			loadData();
		},
		error: function(err) {
			console.log("error");
			console.log(err);
			$(".errorBlock").show();
			$(".loadingBlock").hide();
		}
	})
}

function showData(productData) {
	$("#container").loadTemplate( $("#productTemplate"),   productData, {append: true});
}

var loadData = function() {
	for (var i = 0; i < pDetails.length; i++) {
		showData(pDetails[i]);
	}
}

getData();