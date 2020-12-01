console.log(document.readyState)

var productDetailsList;

var loadPoroductData = function(pData) {
				
	//var ulTag = document.createElement("ul");
	var ulTag = $("<ul></ul>").attr("class", "details");

	var liTag = $("<li></li>");
	var span1 = $("<span></span>").addClass('label').html('<b>Name: </b>');
	liTag.append(span1);

	var span2 = $("<span></span>").addClass('content').html(pData.name);
	liTag.append(span2);
	ulTag.append(liTag);

	var liTag2 = $("<li></li>");
	var span1 = $("<span></span>").addClass("label").html("<b>Price</b>");
	liTag2.append(span1);

	var span2 = $("<span></span>").addClass("content").html(pData.price);
	liTag2.append(span2);
	ulTag.append(liTag2);

	var liTag3 = $("<li></li>");
	var span1 = $("<span></span>").addClass("label").html("<b>Manufacturer:</b>");
	liTag3.append(span1);

	var span2 = $("<span></span>").addClass("content").html(pData.manu);
	liTag3.append(span2);
	ulTag.append(liTag3);

	var liTag4 = $("<li></li>");
	var imageTag = $("<img />").attr("src", pData.image);
	liTag4.append(imageTag);
	ulTag.append(liTag4);

	$(".container").append(ulTag);

};

function showProductDetails() {
	for(var i = 0 ; i < productDetailsList.length; i++) {
		loadPoroductData(productDetailsList[i]);
	}
	// hide button
	document.querySelector("#pdeailsBtn").style.display = 'none';
	//$("#pdeailsBtn").hide();
}

$(document).ready(function(){
	console.log("am done frm ready")
	document.querySelector("#pdeailsBtn").addEventListener("click", function(){
		getProductDetails();
		//showProductDetails();
	});
})

function getProductDetails() {
	console.log("about to put ajax req 1");
	$.ajax({
		url: 'http://localhost:8081/data/product/details',
		method: "GET",
		dataType: 'JSON',
		async: false,
		success: function(res) {
			console.log("got response from server 2")
			console.log("successfl");
			console.log(res);
			productDetailsList = res.pData;
			showProductDetails();
		},
		error: function(err) {
			console.log("error");
		}
	});
	console.log("doen with ajax call 3");
}




//showProductDetails();

