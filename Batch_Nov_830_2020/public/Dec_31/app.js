/* */

function btnClick(){
	console.log("Button click happend")
}

$(document).ready(function(){

	document.querySelector("#container").style.background = "Green";

	document.querySelector("#container").addEventListener("click", function(){
		console.log("Click happend")
	});
});

<img src="abc.png" />  -> 1gb