var express = require('express');
var router = express.Router();
var mongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017";

/* GET home page. */
router.get('/', function(req, res) {
	var data = {};
	mongoClient.connect(url, function(err, client){
		var db = client.db("ShoopingApp");
		var collection = db.collection("productDetails");
		collection.insert(req.query, function(err){
			if (err) {
				data.msg = "Error while inserting to collection";
			} else {
				data.msg = "Succsfly added product to db"
			}
			client.close();
			data = JSON.stringify(data);
			res.send(data);
		});
	});

});

module.exports = router;
