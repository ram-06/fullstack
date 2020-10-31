class StudentDetails {
	constructor() {
		
	}
	getTotalAndAvg = function() {
		this.total = 0;
		for (var i = 0 ; i < this.marks.length; i++) {
			this.total += this.marks[i];
		}
		this.avg = this.total/this.marks.length;
	}
	getGrade = function() {
		this.getTotalAndAvg();
		if (this.avg > 40) {
			this.grade = "Passed";
		} else {
			this.grade = "You have a Surprise";
		}
		this.displayGradeCard();
	}
	displayGradeCard = function() {
		document.querySelector("#uname").innerHTML = "<b>" + this.name + "</b>"
		document.querySelector("#uage").innerHTML = "<b>" + this.age + "</b>"
		document.querySelector("#utot").innerHTML = "<b>" + this.total + "</b>"
		document.querySelector("#uavg").innerHTML = "<b>" + this.avg + "</b>"
		document.querySelector("#ugrade").innerHTML = "<b>" + this.grade + "</b>";

		document.querySelector(".pCard").style.display = "block";
		//document.querySelector("#readBlock").style.display = 'none';
	}
	readData = function() {
		this.name = document.querySelector("#sname").value;
		this.age = document.querySelector("#sage").value;
		this.class = document.querySelector("#sclass").value;
		this.marks = [];

		for(var i = 0 ; i < 5; i++) {
			var id = '#m' + (i + 1);
			this.marks[i] = document.querySelector(id).value;
			this.marks[i] = parseInt(this.marks[i]);
		}
		this.getGrade();
	}
}

function generateProgressCard() {
	var s1 = new StudentDetails();
	s1.readData();
}