
var mathUtil = (function(){
	function sample() {
		console.log("hello");
	}

	var count = 10;
	
	function doSubstraction(firstVal, secondVal) {
		count++;
		var result = 0;
		result = firstVal - secondVal;
		return result;
	}

	function doDivision(firstVal, secondVal) {
		count++;
		var result = 0;
		result = firstVal / secondVal;
		return result;
	}

	function doMultiplication(firstVal, secondVal) {
		count++;
		var result = 0;
		result = firstVal * secondVal;
		return result;
	}
	return {
		doAddition: function(firstVal, secondVal) {
			count++;
			var result = 0;
			result = firstVal + secondVal;
			return result;
		},
		doTheSubstraction: function(a,b) {
			var result = doSubstraction(a,b);
			return result;
		}
	}
})();


