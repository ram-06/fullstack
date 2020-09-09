var express = require("express");

var router = express.Router();

router.post('/', function(request, response) {
	
	var data = {
		msg: ''
	};
	if (request.body.id == 'admin' && request.body.pwd == 'india') {
		data.msg = 'Valid';
	} else {
		data.msg = 'Invalid';
	}
	response.send(JSON.stringify(data));
});

module.exports = router;
