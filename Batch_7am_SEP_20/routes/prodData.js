var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var data = {
		name: "Mobile",
		price: '$345',
		manufacturer: '1 Plus'
	};

	data = JSON.stringify(data);

	res.send(data);

});

module.exports = router;
