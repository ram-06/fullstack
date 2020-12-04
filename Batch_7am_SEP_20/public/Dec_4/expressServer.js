var express = require("express");

var app = express();

app.get('/test', function(req, res){
	res.send("Hello service is created");
});

app.listen(8081, function(){
	console.log("server is listing at 8081");
})