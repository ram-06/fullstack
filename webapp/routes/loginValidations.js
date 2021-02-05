var express = require("express");

var router = express.Router();

router.get('/', function(req, res, next){
	console.log("got request frm user")
	var data = {
		msg: "Valid Details",
		status: 'checked',
		value: 10
	}

	data = JSON.stringify(data);
	res.send(data);
});

module.exports = router;
