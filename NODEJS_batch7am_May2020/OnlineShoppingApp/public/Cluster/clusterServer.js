var http = require("http");
var cluster = require("cluster");
const numCPUs = require('os').cpus().length;

if (cluster.isMaster){
	for (var i = 0 ; i < numCPUs; i++) {
		cluster.fork();
	}
} else {
	var server = http.createServer(function(req, res){
		res.end("server created and its process id is " + process.pid);
	});

	server.listen(8081, function(){
		console.log("server is listing at 8081")
	});
}
