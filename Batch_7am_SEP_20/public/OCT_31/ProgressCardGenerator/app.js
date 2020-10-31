var readData = function () {	
	var sData = {};
	sData.name = document.querySelector("#sname").value;
	sData.age = document.querySelector("#sage").value;
	sData.class = document.querySelector("#sclass").value;
	sData.marks = [];

	for(var i = 0 ; i < 5; i++) {
		var id = '#m' + (i + 1);
		sData.marks[i] = document.querySelector(id).value;
		sData.marks[i] = parseInt(sData.marks[i]);
	}

	sData.getTotalAndAvg = function() {
		sData.total = 0;
		for (var i = 0 ; i < sData.marks.length; i++) {
			sData.total += sData.marks[i];
		}
		sData.avg = sData.total/sData.marks.length;
	}

	sData.getGrade = function() {
		this.getTotalAndAvg();
		if (sData.avg > 40) {
			sData.grade = "Passed";
		} else {
			sData.grade = "You have a Surprise";
		}
		this.displayGradeCard();
	}

	sData.displayGradeCard = function() {
		document.querySelector("#uname").innerHTML = "<b>" + sData.name + "</b>"
		document.querySelector("#uage").innerHTML = "<b>" + sData.age + "</b>"
		document.querySelector("#utot").innerHTML = "<b>" + sData.total + "</b>"
		document.querySelector("#uavg").innerHTML = "<b>" + sData.avg + "</b>"
		document.querySelector("#ugrade").innerHTML = "<b>" + sData.grade + "</b>";

		document.querySelector(".pCard").style.display = "block";
		//document.querySelector("#readBlock").style.display = 'none';
	}
	sData.getGrade();
}
