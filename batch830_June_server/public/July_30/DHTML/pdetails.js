
var pDetails = [
	{
		name: 'Laptop',
		price: '4567',
		manu: 'Samsung',
		sellerName: 'Indian Electronics',
		image: 'https://m.media-amazon.com/images/I/4124CgaKYPL._SR500,500_.jpg'
	},
	{
		name: 'Laptop',
		price: '4567',
		manu: 'Samsung',
		sellerName: 'Indian Electronics',
		image: 'https://m.media-amazon.com/images/I/4124CgaKYPL._SR500,500_.jpg'
	},
	{
		name: 'Laptop',
		price: '4567',
		manu: 'Samsung',
		sellerName: 'Indian Electronics',
		image: 'https://m.media-amazon.com/images/I/4124CgaKYPL._SR500,500_.jpg'
	},
	{
		name: 'Laptop',
		price: '4567',
		manu: 'Samsung',
		sellerName: 'Indian Electronics',
		image: 'https://m.media-amazon.com/images/I/4124CgaKYPL._SR500,500_.jpg'
	},
	{
		name: 'Laptop',
		price: '4567',
		manu: 'Samsung',
		sellerName: 'Indian Electronics',
		image: 'https://m.media-amazon.com/images/I/4124CgaKYPL._SR500,500_.jpg'
	}
]

function showData(productData) {
	var ulTag = document.createElement("ul");
	ulTag.setAttribute("class", "block");	

	var li1 = document.createElement("li");
	li1.innerText = 'Product name: ' + productData.name;
	ulTag.append(li1);

	var li2 = document.createElement("li");
	li2.innerText = 'Product Price: ' + productData.price;
	ulTag.append(li2); 

	var li3 = document.createElement("li");
	li3.innerText = 'Manufacturer: ' + productData.manu;
	ulTag.append(li3); 

	var li4 = document.createElement("li");
	li4.innerText = 'Seller name: ' + productData.sellerName;
	ulTag.append(li4); 

	var li5 = document.createElement("li");
	var imgTag = document.createElement("img");
	imgTag.setAttribute("src", productData.image);
	li5.append(imgTag);
	ulTag.append(li5);
	document.querySelector("#container").append(ulTag);
}

var loadData = function() {
	for (var i = 0; i < pDetails.length; i++) {
		showData(pDetails[i]);
	}
}