var pDetails = [
	{
		name: 'Laptop',
		price: '$3450',
		manu: 'Samsung',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMkkmv8GP58LBhiadDqWr19NRssxJxyDw1Sg&usqp=CAU',
		discount: '10%'
	},
	{
		name: 'Book',
		price: '$3450',
		manu: 'Samsung',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMkkmv8GP58LBhiadDqWr19NRssxJxyDw1Sg&usqp=CAU',
		discount: '10%'
	},
	{
		name: 'Pendrive',
		price: '$3450',
		manu: 'Samsung',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMkkmv8GP58LBhiadDqWr19NRssxJxyDw1Sg&usqp=CAU',
		discount: '10%'
	},
	{
		name: 'Harddisk',
		price: '$3450',
		manu: 'Samsung',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMkkmv8GP58LBhiadDqWr19NRssxJxyDw1Sg&usqp=CAU',
		discount: '10%'
	},
	{
		name: 'Mobile',
		price: '$3450',
		manu: 'Samsung',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMkkmv8GP58LBhiadDqWr19NRssxJxyDw1Sg&usqp=CAU',
		discount: '10%'
	}
]

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
	for (var i = 0 ; i < pDetails.length; i++) {
		addProductDetailsToPage(pDetails[i]);
	}
}

