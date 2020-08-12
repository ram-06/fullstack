
function getDate() {
	var date = new Date();
	var fullDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
	postMessage(fullDate);
}

console.log(document)


setInterval(function(){
	getDate();
}, 1000);
