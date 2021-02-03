var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var a = 90;
	var data = {
	"pData": [
		{
			"name": "Laptop",
			"price": "$3450",
			"manu": "Samsung",
			"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMkkmv8GP58LBhiadDqWr19NRssxJxyDw1Sg&usqp=CAU",
			"discount": "10%"
		},
		{
			"name": "Laptop",
			"price": "$3450",
			"manu": "Samsung",
			"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMkkmv8GP58LBhiadDqWr19NRssxJxyDw1Sg&usqp=CAU",
			"discount": "10%"
		},
		{
			"name": "Laptop",
			"price": "$3450",
			"manu": "Samsung",
			"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMkkmv8GP58LBhiadDqWr19NRssxJxyDw1Sg&usqp=CAU",
			"discount": "10%"
		},
		{
			"name": "Laptop",
			"price": "$3450",
			"manu": "Samsung",
			"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMkkmv8GP58LBhiadDqWr19NRssxJxyDw1Sg&usqp=CAU",
			"discount": "10%"
		}
		]
	};

	data = JSON.stringify(data);
	//data = "parseProdData(" + data + ')';
	setTimeout(function(){
		res.send(data);
	}, 8000);
});

module.exports = router;
