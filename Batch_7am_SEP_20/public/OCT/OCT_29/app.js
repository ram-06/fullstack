document.querySelector("#ubtn").addEventListener("click", function(){
	uData.readUserData();
});

var uData = {
	readUserData : function() {
		uData.firstVal = document.querySelector("#fVal").value;
		uData.scndVal = document.querySelector("#sVal").value;

		uData.firstVal = parseInt(uData.firstVal);
		uData.scndVal = parseInt(uData.scndVal);
		uData.doAddition();
	},
	doAddition: function() {
		uData.result = uData.firstVal + uData.scndVal;
		uData.displayResult();
	},
	displayResult: function() {
		document.querySelector("#resultBlock").innerHTML = '<b>' + uData.result + '</b>';
		document.querySelector(".rblock").style.display = 'block';
	}
};

var spanTag = document.createElement("span");
spanTag.innerHTML = "Content added dynamically";
document.querySelector("#container").append(spanTag);
spanTag.addEventListener("click", function(){
	alert("hello");
})

