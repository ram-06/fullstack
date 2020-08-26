
var pDetails = [
	{
		name: 'Mobile',
		price: '200',
		manu: 'HTC',
		sellerName: 'Indian Electronics',
		image: 'https://m.media-amazon.com/images/I/4124CgaKYPL._SR500,500_.jpg'
	},
	{
		name: 'Laptop',
		price: '3000',
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
	var ulTag = $("<ul></ul>").addClass("block");	

	var li1 = $("<li></li>").text('Product name: ' + productData.name);
	ulTag.append(li1);

	var li2 = jQuery("<li></li>").text('Product Price: ' + productData.price);
	ulTag.append(li2); 

	var li3 = $("<li></li>").text('Manufacturer: ' + productData.manu);
	ulTag.append(li3); 

	var li4 = $("<li></li>").text('Seller name: ' + productData.sellerName);
	ulTag.append(li4); 

	var li5 = $("<li></li>");
	var imgTag = $("<img />").attr("src", productData.image);
	li5.append(imgTag);
	ulTag.append(li5);
	$("#container").append(ulTag);
}

var loadData = function() {
	for (var i = 0; i < pDetails.length; i++) {
		showData(pDetails[i]);
	}
}