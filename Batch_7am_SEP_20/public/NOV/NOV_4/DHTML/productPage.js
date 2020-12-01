var productDetailsList = [
	{
		name: 'Laptop',
		price: '$ 3000',
		manu: "Samsung",
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqfzLmC4Rg0UE_nfCHAW3plVHctLmNjKLhtA&usqp=CAU'
	},
	{
		name: 'Mobile',
		price: '$ 3000',
		manu: "Samsung",
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqfzLmC4Rg0UE_nfCHAW3plVHctLmNjKLhtA&usqp=CAU'
	},
	{
		name: 'Book',
		price: '$ 3000',
		manu: "Samsung",
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqfzLmC4Rg0UE_nfCHAW3plVHctLmNjKLhtA&usqp=CAU'
	},
	{
		name: 'Pendrive',
		price: '$ 3000',
		manu: "Samsung",
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqfzLmC4Rg0UE_nfCHAW3plVHctLmNjKLhtA&usqp=CAU'
	}
];

var loadPoroductData = function(pData) {
				
	//var ulTag = document.createElement("ul");
	var ulTag = $("<ul></ul>");
	ulTag.attr("class", "details");

	var liTag = $("<li></li>");
	var span1 = $("<span></span>");
	span1.addClass('label');
	span1.html('<b>Name: </b>');
	liTag.append(span1);

	var span2 = $("<span></span>");
	span2.addClass('content');
	span2.html(pData.name);
	liTag.append(span2);
	ulTag.append(liTag);

	var liTag2 = $("<li></li>");
	var span1 = $("<span></span>");
	span1.addClass("label");
	span1.html("<b>Price</b>");
	liTag2.append(span1);

	var span2 = $("<span></span>");
	span2.addClass("content");
	span2.html(pData.price);
	liTag2.append(span2);
	ulTag.append(liTag2);

	var liTag3 = $("<li></li>");
	var span1 = $("<span></span>");
	span1.addClass("label");
	span1.html("<b>Manufacturer:</b>");
	liTag3.append(span1);

	var span2 = $("<span></span>");
	span2.addClass("content");
	span2.html(pData.manu);
	liTag3.append(span2);
	ulTag.append(liTag3);

	var liTag4 = $("<li></li>");
	var imageTag = $("<img />");
	imageTag.attr("src", pData.image);
	liTag4.append(imageTag);
	ulTag.append(liTag4);

	console.log(ulTag);

	document.querySelector(".container").append(ulTag);

};

function showProductDetails() {
	for(var i = 0 ; i < productDetailsList.length; i++) {
		loadPoroductData(productDetailsList[i]);
	}
	// hide button
	document.querySelector("#pdeailsBtn").style.display = 'none';
	//$("#pdeailsBtn").hide();
}

//showProductDetails();

