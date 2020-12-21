var sDetails = {};

function generateProgressCard() {
    sDetails.name = document.querySelector("#sname").value;
    sDetails.gender = document.querySelector("input[name=gender]:checked").value;
    sDetails.class = document.querySelector("#sClass").value;
    sDetails.marks = [];

    //marks[0] = document.querySelector("#m1").value;
    //marks[0] = parseInt(marks[0]);

    for (var i = 0 ; i < 5; i++) {
        var id = "#m" + (i+1);
        sDetails.marks[i] = document.querySelector(id).value;
        sDetails.marks[i] = parseInt(sDetails.marks[i]);
    }
    getTotalAndAvg();
    displayData();
}

function getTotalAndAvg() {
    sDetails.total = 0;
    for (var i = 0 ; i < sDetails.marks.length; i++) {
        sDetails.total += sDetails.marks[i];
    }
    sDetails.avg = sDetails.total / sDetails.marks.length;
    getGrade();
}

function getGrade() {
    sDetails.grade = '';
    if (sDetails.avg >= 40) {
        sDetails.grade = "Passed";
    } else {
        sDetails.grade = "Surprise";
    }
}

var displayData = function() {
    document.querySelector("#progressBlock").style.display = 'block';
    
    document.querySelector("#studentName").innerHTML = "<b>" + sDetails.name + "</b>";
    document.querySelector("#studentClass").innerText = "<b>" + sDetails.class + "</b>";
    document.querySelector("#studentTotalMarks").innerHTML = sDetails.total;
    document.querySelector("#studentAvg").innerHTML = sDetails.avg;
    document.querySelector("#studentGrade").innerHTML = sDetails.grade;
}