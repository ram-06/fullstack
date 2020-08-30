var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var data = {name: "raj", age: 20};
	data = JSON.stringify(data);

	res.send(data);
});

module.exports = router;
