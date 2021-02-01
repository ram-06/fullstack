var registerDetails = function() {
    var data = {};
    data.name = document.querySelector("#uname").value;
    data.age = document.querySelector("#uage").value;
    if (data.age == ''){
        data.age = 0
    } else {
        data.age = parseInt(data.age);
    }
    data.gender = document.querySelector("input[name=gender]:checked").value;
    console.log(data);

    /*if (data.age < 21) {
        document.querySelector(".errBlck").innerHTML = "Age not valid for registration";
        document.querySelector(".errBlck").style.display = 'block';
    }

    if (data.name == '') {
        document.querySelector(".errBlck").innerHTML = "Name is mandry";
        document.querySelector(".errBlck").style.display = 'block';
    } */

    var name = "Hello how are you";

    var "hello how are you" = "TEst"

    try {
        console.log("name" + (data.name == ""));
        console.log("age" + (data.age < 21));

        if (data.name == '' && data.age < 21 ) {
            throw "name and age err"
        }
        if (data.name == '') {
            throw "name err";
        }
        if (data.age < 21) {
            throw "Age err";
        }
       
    } catch (error) {
        if (error == "Age err") {
            msg = "Age not valid for registration";
        }
        if (error == "name err") {
            msg = "Name is mandtry"
        }
        if (error = "name and age err") {
            msg = "AGe is less and name is empty";
        }
        document.querySelector(".errBlck").innerHTML = msg;
        document.querySelector(".errBlck").style.display = 'block';
    }
}