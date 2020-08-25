

function showMsg() {
	console.log("hello");
}

$(document).ready(() => {
	document.querySelector("#container").addEventListener("click", function(){
		console.log("click happend");
	});
});