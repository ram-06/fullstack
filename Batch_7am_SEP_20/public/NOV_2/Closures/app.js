
var count = 0;

//var mathUtilsObj = "Test";

function getMultiplication() {

}
var doJob = function(type) {
	count++;
	var fval = document.querySelector("#fval").value;
	var sval = document.querySelector("#sval").value;
	fval = parseInt(fval);
	sval = parseInt(sval);
	var res;
	switch(type) {
		case 'add':
			res = mathUtilsObj.getAddition(fval, sval);
			break;
		case 'mul':
			res = mathUtilsObj.getMultiplication(fval, sval);
			break;
		case 'sub':
			res = mathUtilsObj.getSubstraction(fval, sval);
			break;
		case 'div':
			res = getDivision(fval, sval);
			break;
	}
	var msg = "The " + type + ' of given numbers is ' + res;
	document.querySelector(".rblock").innerHTML = msg;

	document.querySelector(".counterBlock").innerHTML = count;
	//window.open("http://www.abc.com")
}

mathUtilsObj.testing = function() {
	console.log("am frm testing");
}

mathUtilsObj.testing();