var doJob = function(type) {
	var fval = document.querySelector("#fval").value;
	var sval = document.querySelector("#sval").value;
	fval = parseInt(fval);
	sval = parseInt(sval);
	var res;
	switch(type) {
		case 'add':
			res = getAddition(fval, sval);
			break;
		case 'mul':
			res = getMultiplication(fval, sval);
			break;
		case 'sub':
			res = getSubstraction(fval, sval);
			break;
		case 'div':
			res = getDivision(fval, sval);
			break;
	}
	var msg = "The " + type + ' of given numbers is ' + res;
	document.querySelector(".rblock").innerHTML = msg;
}