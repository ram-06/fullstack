var express = require('express');
var router = express.Router();
var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = {
    msg: ""
  };
    mongoClient.connect(url, function(err, client){
      if (err) {
        data.msg = "Error while connecting to dbs"
        data = JSON.stringify(data);    
        res.send(data);
      } else {
        var db = client.db("shoppingapp");
        var collection = db.collection("pdetails");
        collection.insertOne(req.query, function(err){
          if (err) {
            data.msg = "Error while inserting data to collection";
          } else {
            data.msg = "Sccessfly inserted data to db";
          }
          data = JSON.stringify(data);
          res.send(data);
        })
      }
    });
    
});

module.exports = router;
