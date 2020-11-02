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
				
	var ulTag = document.createElement("ul");
	ulTag.setAttribute("class", "details");

	var liTag = document.createElement("li");
	var span1 = document.createElement("span");
	span1.setAttribute("class", 'label');
	span1.innerHTML = '<b>Name: </b>';
	liTag.append(span1);

	var span2 = document.createElement("span");
	span2.setAttribute("class", 'content');
	span2.innerHTML = pData.name;
	liTag.append(span2);
	ulTag.append(liTag);

	var liTag2 = document.createElement("li");
	var span1 = document.createElement("span");
	span1.setAttribute("class", "label");
	span1.innerHTML = "<b>Price</b>";
	liTag2.append(span1);

	var span2 = document.createElement("span");
	span2.setAttribute("class", "content");
	span2.innerHTML = pData.price;
	liTag2.append(span2);
	ulTag.append(liTag2);

	var liTag3 = document.createElement("li");
	var span1 = document.createElement("span");
	span1.setAttribute("class", "label");
	span1.innerHTML = "<b>Manufacturer:</b>";
	liTag3.append(span1);

	var span2 = document.createElement("span");
	span2.setAttribute("class", "content");
	span2.innerHTML = pData.manu;
	liTag3.append(span2);
	ulTag.append(liTag3);

	var liTag4 = document.createElement("li");
	var imageTag = document.createElement("img");
	imageTag.setAttribute("src", pData.image);
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

