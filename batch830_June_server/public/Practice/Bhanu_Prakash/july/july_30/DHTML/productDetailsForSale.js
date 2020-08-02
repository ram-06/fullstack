var productDetailsForSale = [	//calling function(original parametrs)
	{
		"name" : "laptop",
		"price" : 58963,
		"manufacturer" : "leonova",
		"sellerName" : "Indian Electronics",
		"image" : "apple.jpg"
	},
	{
		"name" : "laptop",
		"price" : 75000,
		"manufacturer" : "apple",
		"sellerName" : "Indian Electronics",
		"image" : "apple.jpg"
	},
	{
		"name" : "laptop",
		"price" : 50000,
		"manufacturer" : "Dell",
		"sellerName" : "Indian Electronics",
		"image" : "apple.jpg"
	},
	{
		"name" : "laptop",
		"price" : 58963,
		"manufacturer" : "leonova",
		"sellerName" : "Indian Electronics",
		"image" : "apple.jpg"
	},
	{
		"name" : "laptop",
		"price" : 58963,
		"manufacturer" : "leonova",
		"sellerName" : "Indian Electronics",
		"image" : "apple.jpg"
	},
	{
		"name" : "laptop",
		"price" : 58963,
		"manufacturer" : "leonova",
		"sellerName" : "Indian Electronics",
		"image" : "apple.jpg"
	},
];

function showData(productDetailsForSale){	//here parameters are temporary and can be given any parameters,productDetailsForSale 
	var ulTag = document.createElement("ul");
	ulTag.setAttribute("class","block");
	//console.log(ulTag);

	var liTag1 = document.createElement("li");
	liTag1.innerText = "product Name : " + productDetailsForSale.name;
	ulTag.append(liTag1);
	//console.log(ulTag);

	var liTag2 = document.createElement("li");
	liTag2.innerText = "product Price : " + productDetailsForSale.price;
	ulTag.append(liTag2);

	var liTag3 = document.createElement("li");
	liTag3.innerText = "Manufacturer : " + productDetailsForSale.manufacturer;
	ulTag.append(liTag3);

	var liTag4 = document.createElement("li");
	liTag4.innerText = "Seller Name : " + productDetailsForSale.sellerName;
	ulTag.append(liTag4);

	var liTag5 = document.createElement("li");
	var imageTag = document.createElement("img");
	imageTag.setAttribute("src",productDetailsForSale.image);
	liTag5.append(imageTag);
	ulTag.append(liTag5);
	document.querySelector("#container").append(ulTag);
}
function loadData() {	//calling function
	for(var i = 0; i < productDetailsForSale.length ; i++){
		showData(productDetailsForSale[i]);	//called fucntion i.e..,productDetailsForSale[i] are actual parameters
	}
}