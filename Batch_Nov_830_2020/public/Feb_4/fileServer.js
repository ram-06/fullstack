var http = require("http");
var fs = require("fs");
var url = require("url");
var server = http.createServer(function(req, res){
	console.log(req.url);
	//res.writeHead({"contentType": 'text/html'});
	/*res.write("Hello every one"); */
	/*fs.readFile("sample.txt", function(err, data) {
		res.write(data);
		res.end();
	}); */
	if (req.url == "/testing") {
		res.write("hey u r seeing testing content")
	} else {
		res.write("Other than testing content");
	}

	res.end();

	/*fs.appendFile("sample.txt", "A new content ...", function(err){
		if (err) {
			res.write(err); 
		} else {
			res.write("Successfly added");
		}
		res.end();
	}) */
});

server.listen(8080, function(){
	console.log("Server is listing at 8080");
});