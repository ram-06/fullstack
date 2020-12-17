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
	var ulTag = document.createElement("ul");
	var li1 = document.createElement("li");
	li1.innerText = "Product Name : " + pData.name;
	ulTag.append(li1);

	var li2 = document.createElement("li");
	li2.innerText = "Price: " + pData.price;
	ulTag.append(li2);
	
	var li3 = document.createElement("li");
	li3.innerText = "Manufacturer: " + pData.manu;
	ulTag.append(li3);
	

	var li4 = document.createElement("li");
	li4.innerText = "Discount: " + pData.discount;
	ulTag.append(li4);

	var li5 = document.createElement("li");
	var imgTag = document.createElement("img");
	imgTag.setAttribute("src", pData.image);
	li5.append(imgTag);
	ulTag.append(li5);

	document.querySelector(".container").append(ulTag);


	
}
 
for (var i = 0 ; i < pDetails.length; i++) {
	addProductDetailsToPage(pDetails[i]);
}

