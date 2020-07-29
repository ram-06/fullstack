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
 		var db = client.db("ShoppingApp");
 		var collection = db.collection("userAccountDetailsList");
 		collection.find({}).toArray(function(err, result){
 			console.log(result);
				client.close();
		});
 	});

 	/*if (req.body.id == 'admin' && req.body.password == 'india123') {
 		data.msg = "Valid";
 	} else {
 		data.msg = 'Invalid';
 	} */





 	data = JSON.stringify(data);
 	res.send(data);
 });

module.exports = router;
