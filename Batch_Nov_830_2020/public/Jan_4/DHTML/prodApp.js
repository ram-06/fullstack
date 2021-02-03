var pDetails = [];
function addProductDetailsToPage(pData) {
	// var ulTag = document.createElement("ul");
	var ulTag = $("<ul></ul>");
	var li1 = $("<li></li>").text("Product Name : " + pData.name).addClass("test");
	ulTag.append(li1);

	var li2 = $("<li></li>").text("Price: " + pData.price);
	ulTag.append(li2);
	
	var li3 = $("<li></li>").text("Manufacturer: " + pData.manu);
	ulTag.append(li3);
	

	var li4 = $("<li></li>").text("Discount: " + pData.discount);
	ulTag.append(li4);

	var li5 = $("<li></li>")
	var imgTag = $("<img />").attr("src", pData.image);
	li5.append(imgTag);
	ulTag.append(li5);

	$(".container").append(ulTag);
}
 
function loadProductDetails() {

	/*

	for (var i = 0 ; i < pDetails.length; i++) {
		addProductDetailsToPage(pDetails[i]);
	} */
}

