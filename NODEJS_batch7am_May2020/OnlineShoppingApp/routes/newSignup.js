var express = require('express');
var router = express.Router();
var mongoClient = require("mongodb").MongoClient;

var dbUrl = 'mongodb://localhost:27017';
/* GET home page. */
router.post('/', function(req, res) {
	console.log(req.body);
	var data = {};
	mongoClient.connect(dbUrl, function(err, client){
		if (err){
			data.msg = "Error while connecting to db";
		} else {
			var db = client.db("ShoppingApp");
			var collection = db.collection("UserAccountDetailsList");
			collection.insert(req.body, function(){
				console.log("data go insertd ");
				data.msg = "Successfly user got added";
				data = JSON.stringify(data);
				res.send(data);
				client.close();
			});
		}
	});	
});

module.exports = router;
