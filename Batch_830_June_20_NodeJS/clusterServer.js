var http = require("http");
const cluster = require('cluster');

const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
	for (var i = 0 ; i < numCPUs; i++) {
		cluster.fork();
	}
} else {
	var server = http.createServer((req, res) => {
	    res.writeHead(200);
	    res.end(`hello from Proce -> ${process.pid} `);
	});

	server.listen(8081, () => {
		console.log("Server is listing at 8081");
	});
	console.log(`Proccess ${process.pid} started`);
}