var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var data = {
		"productData": [
			{
				"name": "Mobile",
				"price": "3000",
				"manu": "HTC",
				"sellerName": "Indian Electronics",
				"image": "https://m.media-amazon.com/images/I/4124CgaKYPL._SR500,500_.jpg"
			},
			{
				"name": "TV",
				"price": "8000",
				"manu": "Sony",
				"sellerName": "Indian Electronics",
				"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSekYgtoBB0noVmptqyXUiEcfRRLnFUpzDE4g&usqp=CAU"
			},
			{
				"name": "Bike",
				"price": "200",
				"manu": "Bajaj",
				"sellerName": "Sample Showroom",
				"image": "https://5.imimg.com/data5/LX/PM/GLADMIN-68162457/kawasaki-ninja-h2-bike-500x500.png"
			},
			{
				"name": "Pendrive",
				"price": "200",
				"manu": "Scandisk",
				"sellerName": "Indian Electronics",
				"image": "https://images-na.ssl-images-amazon.com/images/I/41g8qWL2z-L._SL1000_.jpg"
			}
		]
	}

	data = JSON.stringify(data);
	//data = "parseProductData(" + data + ')';
	setTimeout(function(){
		res.send(data);
	}, 2000);
	
});

module.exports = router;
