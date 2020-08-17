var express = require("express");
var router =  express.Router();

router.get('/', function(req, res){
	console.log(req.query);
	var data = {
 		msg: "Successfully started my webServer"
 	};

 	if (req.query.id == 'harika' && req.query.pwd == 'cutie@12') {
 		data.msg = 'valid';
 	} else {
 		data.msg = 'invalid';
 	}
 	
 	data = JSON.stringify(data);
 	res.send(data);

});

module.exports = router;
