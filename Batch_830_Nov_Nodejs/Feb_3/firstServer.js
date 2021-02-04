console.log("about to start")
var http = require("http");

var os = require("os");



var server = http.createServer(function(a, b){
	/*console.log(os);
	console.log(os.hostname());
	console.log(request.socket.localPort)
	console.log(request.socket.localPort) */
	console.log("server is ready");
	console.log(request)
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write("<b>Successfly created node server</b>");
	response.end();

});

server.listen(8080, function(){
	console.log("server is listing at 8080");
});