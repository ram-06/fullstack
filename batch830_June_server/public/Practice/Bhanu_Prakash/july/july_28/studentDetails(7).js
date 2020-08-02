var studentInputData = function(){
	var data = {};
	data.name = document.querySelector("#s_name").value;
	data.age = document.querySelector("#s_age").value;
	data.gender = document.querySelector("input[type=radio]:checked").value;
	data.className = document.querySelector("#s_class").value; //so we need to show data go for block after submit done
	data.marks = [];
	var id;
	for(var i = 0; i < 5 ; i++){
		id = "#m" + (i+1);
		data.marks[i] = document.querySelector(id).value;
		data.marks[i] =  parseInt(data.marks[i]);
	}
	//var result = getTotalAndAvg(res); ----->wrong
	var result = getTotalAndAvg(data.marks);
	data.total = result.tot;
	data.avg = result.avg;
	data.grade = getGrade(data.avg);
	generateProgressCard(data);
}

function getTotalAndAvg(marks){	//input is to be given i.e marks
	var total = 0;
	var avg = 0;
	for(var i = 0 ; i < marks.length ; i++){
		total += marks[i];
	}
	avg = total / marks.length;
	var res = {
		"tot" : total,
		"avg" : avg
	};
	return res;
}

var getGrade = function(avg){
	var grade;
	if(avg > 40){
		if(avg > 60){
			grade = "1st class";
		} else {
			grade = "2nd class";
		}
	} else {
		grade = "Surprise is waiting";	
		}
	return grade;
}

function generateProgressCard(data){
	/*console.log("Student Details");
	console.log("Student name is : " + data.name);
	console.log("Student age is : " + data.age);
	console.log("Total mark is : " + data.total);
	console.log("Avg is : " + data.avg);
	console.log("Grade is : " + data.grade); */
	document.querySelector("#sname").innerHTML = '<b>' + data.name + '</b>';
	//document.querySelector("#sage").innerText =  '<b>' + data.age + '</b>';	//even though u give html(bold "tag") it will be treated as text.
	document.querySelector("#sage").innerText = data.age;
	document.querySelector("#sgender").innerText = data.gender;
	document.querySelector("#sclass").innerText = data.className;
	document.querySelector("#smarks").innerText = data.total ;
	document.querySelector("#savg").innerText = data.avg ;
	document.querySelector("#sgrade").innerText = data.grade ;
}

studentInputData();