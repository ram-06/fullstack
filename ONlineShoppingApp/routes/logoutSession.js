var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	req.session.isUserValid = false;
	var data = {
		msg: 'User Logedout successfly'
	}
	data = JSON.stringify(data);
	res.send(data);
});

module.exports = router;
