var pDetails = [
	{
		name: 'Mobile',
		price: '200',
		manu: 'HTC',
		sellerName: 'Indian Electronics',
		image: '../../student_images/laptop.jpg'
	},
	{
		name: 'Laptop',
		price: '3000',
		manu: 'Samsung',
		sellerName: 'Indian Electronics',
		image: '../../student_images/laptop.jpg'
	},
	{
		name: 'Laptop',
		price: '4567',
		manu: 'Samsung',
		sellerName: 'Indian Electronics',
		image: '../../student_images/laptop.jpg'
	},
	{
		name: 'Laptop',
		price: '4567',
		manu: 'Samsung',
		sellerName: 'Indian Electronics',
		image: '../../student_images/laptop.jpg'
	},
	{
		name: 'Laptop',
		price: '4567',
		manu: 'Samsung',
		sellerName: 'Indian Electronics',
		image: '../../student_images/laptop.jpg'
	},
	{
		name: 'Laptop',
		price: '4567',
		manu: 'Samsung',
		sellerName: 'Indian Electronics',
		image: '../../student_images/laptop.jpg'
	},
]

var loadData = function() {
	for(var i =0 ; i < pDetails.length ; i++) {
		showData(pDetails[i]);
	}
}

function showData(productData) {		//productData is catcher whereas pDetails in "pDetails[i]" is sender  i.e line 48
	var ulTag = $("<ul></ul").addClass("block");

	var li1 = $("<li></li>").text("Product name: " + productData.name);
	ulTag.append(li1);

	var li2 = jQuery("<li></li>").text('Product Price: ' + productData.price);
	ulTag.append(li2); 

	var li3 = $("<li></li>").text('Manufacturer: ' + productData.manu);
	ulTag.append(li3); 

	var li4 = $("<li></li>").text('Seller name: ' + productData.sellerName);
	ulTag.append(li4); 

	var li5 = $("<li></li>");
	var imgTag = $("<img/>").attr("src",productData.image);
	li5.append(imgTag);
	ulTag.append(li5);
	$("#container").append(ulTag);
}