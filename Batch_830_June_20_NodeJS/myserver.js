var http = require("http");

var server = http.createServer(function(request, response){
	/*response.writeHead(200, {'Content-Type': 'text'});
  	response.write('Hello our server got created 123');
  	response.end(); */

  	var data = {
  		name: "RAJ",
  		age: 20,
  		gender: 'male'
  	};

  	data = JSON.stringify(data);
  	response.end(data);
});

server.listen(8080, function(){
	console.log("Server listing at 8080")
});
