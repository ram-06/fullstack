var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
	console.log(req.body);
  	var data = {
  		msg: ''
  	};
  	console.log(req.body.name);
  	console.log(req.body.pwd);
  	if (req.body.name == 'user_admin' && req.body.pwd == 'india123') {
  		data.msg = 'VALID';
  		// show the product deals page
  	} else {
  		data.msg = 'INVALID';
  	}
  	data = JSON.stringify(data);
  	res.send(data);
});

module.exports = router;

