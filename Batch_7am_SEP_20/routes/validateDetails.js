var express = require('express');
var router = express.Router();
var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;

var dbUrl = "mongodb://localhost:27017";

/* GET home page. */
router.post('/', function(req, res, next) {
	console.log(req.body);
  	var data = {
  		msg: ''
	};

	mongoClient.connect(dbUrl, function(err, client){
		if (err) {
			// err while creating connection with mongo server
		} else {
			var db = client.db("onlineshoppingapp");
			var collection = db.collection("accountdetails");
			collection.find({accountId: req.body.name , password: req.body.pwd}).toArray(function(err, items) {
				console.log("data from collection");
				console.log(items);
				if (items.length == 1) {
					data.msg = 'VALID';
				} else {
					data.msg = 'INVALID';
				}
				client.close();
				data = JSON.stringify(data);
  				res.send(data);
			});
		}
	});
	
	


  	/*console.log(req.body.name);
  	console.log(req.body.pwd);
  	if (req.body.name == 'user_admin' && req.body.pwd == 'india123') {
  		data.msg = 'VALID';
  		// show the product deals page
  	} else {
  		data.msg = 'INVALID';
  	}
  	data = JSON.stringify(data);
  	res.send(data); */
});

module.exports = router;

