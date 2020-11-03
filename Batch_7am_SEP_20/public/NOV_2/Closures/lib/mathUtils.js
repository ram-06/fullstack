var mathUtilsObj = (function() {
	var count = 11;


	function getMultiplication(a, b) {
		count++;
		var result = 0;
		result = a * b;
		return result;
	}

	function getSub(a, b) {
		count++;
		var result = 0;
		result = a - b;
		return result;
	}


	function getDivision(a, b) {
		count++;
		var result = 0;
		result = a / b;
		return result;
	}

	return {
		getAddition: function(a, b) {
			count++;
			var result = 0;
			result = a + b;
			return result;
		},
		getSubstraction: function(a, b) {
			return getSub(a, b);
		}
	}
})();
