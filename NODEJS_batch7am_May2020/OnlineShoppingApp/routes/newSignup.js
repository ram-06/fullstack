var express = require('express');
var router = express.Router();
var mongoClient = require("mongodb").MongoClient;
var Cryptr = require("cryptr");
var cryptr = new Cryptr("Itsourprivatekey");


var dbUrl = 'mongodb://localhost:27017';
/* GET home page. */
router.post('/', function(req, res) {
	console.log(req.body);

	console.log('userpassword ' + req.body.password);
	var encryptedPwd = cryptr.encrypt(req.body.password);
	console.log("encrrypted pwd " + encryptedPwd);
	var decryptedPwd = cryptr.decrypt(encryptedPwd);
	console.log("after decrytion "  +decryptedPwd)

	req.body.password = cryptr.encrypt(req.body.password);
	

	var data = {};
	mongoClient.connect(dbUrl, function(err, client){
		if (err){
			data.msg = "Error while connecting to db";
		} else {
			var db = client.db("ShoopingApp");
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
