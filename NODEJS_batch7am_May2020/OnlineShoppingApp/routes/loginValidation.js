 var express = require("express");
 var mongoClient = require("mongodb").MongoClient;
 var router = express.Router();

 var url = "mongodb://localhost:27017";

 router.post('/', function(req, res){
 	// console.log(req.query);
 	console.log(req.body);
 	var data = {
 		msg: ""
 	};
 	mongoClient.connect(url, function(err, client){
 		if (err) {
 			data.msg = "Error while connecting to the server";
 			data = JSON.stringify(data);
	 		res.send(data);
 		} else {
	 		var db = client.db("ShoopingApp");
	 		var collection = db.collection("UserAccountDetailsList");
	 		collection.find({accountId: req.body.id, password: req.body.password}).toArray(function(err, result){
	 			if (result.length) {
	 				data.msg = "valid";				
	 			} else {
	 				data.msg = "Invalid";
	 			}
	 			data = JSON.stringify(data);
	 			res.send(data);
	 			client.close();
			});
	 	}
 	});

 	/*if (req.body.id == 'admin' && req.body.password == 'india123') {
 		data.msg = "Valid";
 	} else {
 		data.msg = 'Invalid';
 	} */





 });

module.exports = router;
