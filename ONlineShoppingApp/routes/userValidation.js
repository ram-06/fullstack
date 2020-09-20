var express = require("express");
var router = express.Router();

var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;

var mongoUrl = "mongodb://localhost:27017";

router.post('/', function(request, response) {
	var data = {
		msg: ''
	};

	mongoClient.connect(mongoUrl, function(err, client){
		if (err) {
			data.msg = "Error while connecting to Server";
			data = JSON.stringify(data);
			response.send(data);
		} else {
			var db = client.db("shoppingapp");
			var collection = db.collection("userlogindetails");
			collection.find({uid: request.body.id, password:request.body.pwd}).toArray(function(err, result){
				if (result.length == 1) {
					data.msg = "Valid";
					request.session.isUserValid = true;
			 	} else {
					 data.msg = "Invalid";
					 request.session.isUserValid = false;
				 }
				 data = JSON.stringify(data);
				 response.send(data);
			});

		}
	});
});

module.exports = router;
