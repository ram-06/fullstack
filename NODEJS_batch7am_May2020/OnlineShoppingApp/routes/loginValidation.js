 var express = require("express");
 var mongoClient = require("mongodb").MongoClient;
 var router = express.Router();
 var Cryptr = require("cryptr");
var cryptr = new Cryptr("Itsourprivatekey");

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
	 		var isValidUser = false;
	 		collection.find({}).toArray(function(err, result){
	 			for (var i = 0; i < result.length; i++) {
	 				// accountId: req.body.id, password: req.body.password
	 				if (result[i].accountId == req.body.id) {
	 					var pwd = cryptr.decrypt(result[i].password)
	 					if (pwd == req.body.password) {
	 						isValidUser = true;
	 					}
	 				}
	 			}
	 			if (isValidUser) {
	 				data.msg = "valid";		
	 				req.session.userLoggedIn = true;		
	 			} else {
	 				data.msg = "Invalid";
	 				req.session.userLoggedIn = false;
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
