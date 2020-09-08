var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res){
	/*fs.readFile("sample.txt", function(err, info){
		if (err) {
			console.log("error while reading file");
		} else {
			res.end(info);
		}
	}); */
	fs.appendFile("abc.txt", "<img src='samle.txt' />", function(err){
		if (err) {
			console.log("err while writing");
		} else {
			console.log("Writing done");
		}
		res.end("done")
	})
});

server.listen(8082, function(){
	console.log('server is listing to 8082');
});