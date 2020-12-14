var express = require('express');
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;
var dbUrl = 'mongodb://localhost:27017';

/* GET home page. */
router.get('/', function(req, res, next) {
  MongoClient.connect(dbUrl, function(err, client){
    db = client.db("onlineshoppingapp");
    var collection = db.collection("productDetails");
    collection.find({}).toArray(function(err, items){
      console.log(items);
      client.close();
    });
  });
  



  

});

module.exports = router;
