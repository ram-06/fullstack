var express = require('express');
var router = express.Router();
var mongoClient = require("mongodb").MongoClient;

var mongoDbUrl = "mongodb://localhost:27017";

/* GET home page. */
router.get('/', function(req, res) {

	mongoClient.connect(mongoDbUrl, function(err, client){
		var db = client.db("SchoolMngmnt");
		var collection = db.collection("userProfileDetails");
		collection.insertOne(req.query, function(){
			 var data = {
			  	msg: 'success'
			  }
			  res.send(JSON.stringify(data));
		});
	})
});

module.exports = router;
