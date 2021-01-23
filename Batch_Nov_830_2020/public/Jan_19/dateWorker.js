function getDateAndTime() {
	var date = new Date();
	date = date + '';
	date = date.replace(/GMT.*/, '');
	console.log(document)
	postMessage(date);

}

setInterval(function(){
	getDateAndTime();
}, 1000);

