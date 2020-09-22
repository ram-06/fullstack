var express = require('express');
var router = express.Router();
var mongoClient = require("mongodb").MongoClient;
var url = 'mongodb://localhost:27017';

/* GET home page. */
router.get('/', function(req, res, next) {

	console.log(req.query);
  	var data = {
  		msg: 'successfly added'
  	};

  	mongoClient.connect(url, (err, client) => {
  		var db = client.db("sample");
  		var collection = db.collection("datarecords");
  		collection.insertOne(req.query, function(err){
  			if (err) {
  				data.msg = "error while inserting to collecton";
  			} else {
  				data.msg = 'Inserted';
  			}
  		});
  		data = JSON.stringify(data);
  		res.send(data);
  	})
  	
});

module.exports = router;
