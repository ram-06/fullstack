var express = require('express');
var router = express.Router();
var mongoClient = require("mongodb").MongoClient;

var dburl = 'mongodb://localhost:27017';


/* GET home page. */
router.get('/', function(req, res) {
	var productData = {
		productDetails: []
	};
	mongoClient.connect(dburl, function(err, client){
		if (err) {
			// error while connecting to db
		} else {
			var db = client.db("shoppingapp");
			var collection = db.collection("pdetails");
			collection.find({}).toArray(function(err, result){
				console.log(result);
				productData.productDetails = result;
				productData = JSON.stringify(productData);
				res.send(productData);
			});			
		}
	})
});

module.exports = router;
