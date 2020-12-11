var express = require('express');
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;
var dburl = "mongodb://localhost:27017";


/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.query);
  var data = {msg: 'success'};
  

    MongoClient.connect(dburl, function(err, client){
        var db = client.db("onlineshoppingapp");
        var collection = db.collection("accountdetails");
        collection.insertOne(req.query, function(err){
            if (err) {
                data.msg = "Error while inserting data to db";
            } else {
                data.msg = "Registered";
            }
            client.close();
            data = JSON.stringify(data);
            res.send(data);
        });
    })
  
});

module.exports = router;

