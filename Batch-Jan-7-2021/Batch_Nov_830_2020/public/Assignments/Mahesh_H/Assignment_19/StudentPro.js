var sDetails = {};

function generateProgressCard() 
{
    sDetails.name = document.querySelector("#sname").value;
    sDetails.gender = document.querySelector("input[name=gender]:checked").value;
    sDetails.class = document.querySelector("#sClass").value;
    sDetails.marks = [];
    for (var i = 0 ; i < 5; i++)
     {
        var id = "#m" + (i+1);
        sDetails.marks[i] = document.querySelector(id).value;
        sDetails.marks[i] = parseInt(sDetails.marks[i]);
    }
    getTotalAndAvg();
    displayData();
}

function getTotalAndAvg() 
{
    sDetails.total = 0;
    for (var i = 0 ; i < sDetails.marks.length; i++) 
    {
        sDetails.total += sDetails.marks[i];
    }
    sDetails.avg = sDetails.total / sDetails.marks.length;
    getGrade();
}

function getGrade()
 {
    sDetails.grade = '';
    if (sDetails.avg >= 40) 
    {
        sDetails.grade = "Passed";
    } 
    else 
    {
        sDetails.grade = "Surprise";
    }
}
var isDotEntered = false;
    function validation(event)
    {
        console.log(event);
        if(event.keycode==46 && isDotEntered == flase)
        {
            isDotEntered == true;
            return true;
        }
        if(event.keyCode>=0 && event.keyCode <=57){
            return false;
        }else{
            return true;
        }
    }
    var isDotEntered = false;
    function validation1(event) {
        console.log(event);
        if (event.keyCode == 46 && isDotEntered == false) {
            isDotEntered = true;
            return true;
        }
        if (event.keyCode >=48 && event.keyCode <= 57) {
            return true;
        } else {
            return false;
        }
    }
var displayData = function() 
{
    document.querySelector("#progressBlock").style.display = 'block';
    document.querySelector("#studentName").innerHTML =  sDetails.name ;
    document.querySelector("#studentClass").innerHTML =  sDetails.class ;
    document.querySelector("#studentTotalMarks").innerHTML = sDetails.total;
    document.querySelector("#studentAvg").innerHTML = sDetails.avg;
    document.querySelector("#studentGrade").innerHTML = sDetails.grade;
}