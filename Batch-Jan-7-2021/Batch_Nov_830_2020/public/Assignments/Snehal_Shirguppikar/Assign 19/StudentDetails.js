var sDetails = {};
var cntr = 0;
function generateProgressCard() {

    sDetails.sno = document.querySelector("#sID").value;
    sDetails.name = document.querySelector("#sName").value;
    sDetails.age = document.querySelector("#sAge").value;
    sDetails.address = document.querySelector("#sAddress").value;
    sDetails.class = document.querySelector("#sClass").value;
    sDetails.gender = document.querySelector("input[name=gender]:checked").value;
    sDetails.marks = [];

    //marks[0] = document.querySelector("#m1").value;
    //marks[0] = parseInt(marks[0]);

    for (var i = 0 ; i < 9; i++) {
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
    if (sDetails.avg >= 12) {
        sDetails.grade = "Passed";
    } else {
        sDetails.grade = "Surprise";
    }
}

var displayData = function() {

        document.querySelector("#studentID").innerHTML =   sDetails.sno ;
        document.querySelector("#studentName").innerHTML =  sDetails.name ;
        document.querySelector("#studentAge").innerHTML =  sDetails.age ;
        document.querySelector("#studentAddress").innerHTML =  sDetails.address ;
        document.querySelector("#studentClass").innerHTML =  sDetails.class ;
        document.querySelector("#studentGender").innerHTML =  sDetails.gender ;
        for (var j = 0 ; j < sDetails.marks.length; j++) {
            document.querySelector("#mrk"+ (j+1)).innerHTML =  sDetails.marks[j] ;
        }
        document.querySelector("#studentTotalMarks").innerHTML = sDetails.total;
        document.querySelector("#studentAvg").innerHTML = sDetails.avg;
        document.querySelector("#studentGrade").innerHTML = sDetails.grade;
    
}