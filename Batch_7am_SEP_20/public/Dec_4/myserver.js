var http = require("http");

var server = http.createServer(function(req, res) {
	//res.write("HEllo every one, server got successfly creted");

	var data = {
		name: "Raj",
		age: 20
	};

	data = JSON.stringify(data);

	res.write(data);

	res.end();
});

server.listen(3000, function(){
	console.log("server is listing at 3000");
});