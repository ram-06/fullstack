function StudentData(obj) {
	this.name = obj.name;
	this.age = obj.age;
	this.class = obj.class;
	this.gender = obj.gender;
	this.marks = obj.marks;
	this.getTotalAndAvg = function() {
		this.total = 0;
		this.avg = 0;
		for (var i = 0 ; i < this.marks.length; i++) {
			this.total += this.marks[i];
		}
		this.avg = this.total / this.marks.length;		
	}
	this.getGrade = function() {
		this.grade = '';
		if (this.avg >= 40) {
			if (this.avg >= 60) {
				this.grade = "1st Class";
			} else {
				this.grade = '2nd Class';
			}
		} else {
			this.grade = "Surprise";
		}
	}
	this.generateProgressCard = function() {	
		this.getTotalAndAvg();
		this.getGrade();
		var ulTag = document.createElement("ul");
		for (var temp in this) {
			if (typeof(this[temp]) != 'function')  {
				var liTag = document.createElement("li");
				liTag.innerHTML = temp + ' : ' + this[temp];
				ulTag.append(liTag);
			}
		}
		document.querySelector(".progressCardBlock").append(ulTag);
	} 
}

var readStudentData = function() {
	var data = {};
	data.name = document.querySelector("#s_name").value;
	data.age = document.querySelector("#s_age").value;
	data.class = document.querySelector("#s_class").value;
	data.gender = document.querySelector("input[name=gender]:checked").value;
	data.marks = [];
	var id;
	for (var i = 0 ; i < 5; i++) {
		id = '#m' + (i +1);
		data.marks[i] = document.querySelector(id).value;
		data.marks[i] = parseInt(data.marks[i]);
	}
	var s1 = new StudentData(data);
	s1.generateProgressCard();

}




