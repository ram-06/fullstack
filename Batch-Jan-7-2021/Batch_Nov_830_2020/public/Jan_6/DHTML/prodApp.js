var pDetails = [];

function addProductDetailsToPage(pData) {
	$("#productDetailsBlock").loadTemplate($("#prodTmplt"), pData, {append:true})
}
 
function showDetails() {
	for (var i = 0 ; i < pDetails.length; i++) {
		addProductDetailsToPage(pDetails[i]);
	} 
}

function loadProductDetails() {
	$(".loadingBlock").show();
	$.ajax({
		url: 'http://localhost:8081/data/product',
		method: 'GET',
		dataType: 'JSON',
		success: function(response) {
			$(".loadingBlock").hide();
			console.log(response)
			//response = JSON.parse(response)
			console.log("Success");
			pDetails = response.pData;
			showDetails(); 
		},
		error: function(err) {
			$(".errBlock").show();
		}
	});
}