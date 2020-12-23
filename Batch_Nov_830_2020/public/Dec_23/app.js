var taskList = [
    "Get the project deliverd",
    "Implementation of code indentation throught the project",
    "Finish the designing of application mockups",
    "Deliver client requirements "
];
var userName;
function createTaskBlock() {
    var divelement = document.createElement("div");
    divelement.setAttribute("class", "block");
    divelement.setAttribute("id", "taskContainer");
    document.querySelector("body").append(divelement);
}

var saveUserName = function(){
    userName = document.querySelector("#uname").value;
}

function getMyNextTask() {

    var index = (Math.random() * taskList.length);
    index = Math.floor(index);
    try {
        document.querySelector("#taskContainer").innerHTML = taskList[index];
    } catch(err) {
        console.log("boss you missed to click the container");
    } finally {
        setTimeout(function(){
            showThanksMsg();
        }, 3000);
    }

   
}

function showThanksMsg() {
    var msg = "Thanks Mr. " + userName + ' for visiting our page for assigned tasks';
    document.querySelector("#welcomeBlock").innerHTML = msg;
    document.querySelector("#welcomeBlock").style.display = 'block';
}
