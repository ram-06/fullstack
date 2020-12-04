var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res) {
	//var data = {name: "raj", age: 20};
	/*res.statusCode = 200;
  	res.setHeader('Content-Type', 'text/html');
  	data = JSON.stringify(data);*/
  	//res.end('<b>' + data + '</b>');

  	/*fs.readFile('sample.txt', function(err, data) {
  		res.writeHead(200, {'Content-Type': 'text/html'});
  		if (err) {
  			data = "Error while reading file";
  		}
		res.write(data);
		res.end();
		
	}); */

	fs.appendFile('sample.txt', 'New content added...', function (err) {
		if (err) {
			data = "Error while appending to file";
		} else {
			data = "Content got added to file";
		}
		res.write(data);
		res.end();
	});

});

server.listen(8081, function(){
	console.log("server is listing at 8081");
});